#!/usr/bin/env python3
"""Build public/models/gi-tract.glb from the BodyParts3D 4.0 meshes.

Source: the ashemag/human-atlas geometry pack (BodyParts3D 4.0, CC BY 4.0, already
converted to metres / Y-up and simplified). Download atlas.json and body-{7,8,9,11}.bin.gz
from https://github.com/ashemag/human-atlas/tree/main/public/models into one directory, then:

    python3 scripts/convert-bp3d.py <that-directory>

Each organ below is the union of the listed source parts, written as one glTF node.
No further decimation: the GI subset is already small. Positions stay float32; normals are
dropped and recomputed by the viewer so the file stays compact.
"""
import gzip, json, struct, sys
from array import array
from pathlib import Path

ORGANS = {  # organ id -> (display name, part-name match)
    'oesophagus': ('Oesophagus', ['Esophagus']),
    'stomach': ('Stomach', ['Stomach']),
    'liver': ('Liver', ['Caudate lobe of liver'] + [f'Hepatovenous segment {s}' for s in ['II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX']]),
    'gallbladder': ('Gallbladder', ['Gallbladder']),
    'pancreas': ('Pancreas', ['Pancreas']),
    'duodenum': ('Duodenum', ['Duodenum']),
    'jejunum': ('Jejunum', ['Proximal part of jejunum', 'Middle part of jejunum', 'Distal part of jejunum']),
    'ileum': ('Ileum', ['Proximal part of ileum', 'Middle part of ileum', 'Distal part of ileum']),
    'appendix': ('Appendix', ['Appendix']),
    'colon': ('Colon', ['Ascending colon', 'Transverse colon', 'Descending colon', 'Ileocecal junction']),
    'rectum': ('Rectum', ['Rectum']),
    'spleen': ('Spleen', ['Spleen']),
    'kidneys': ('Kidneys', ['Left kidney', 'Right kidney']),
}

src = Path(sys.argv[1])
atlas = json.load(open(src / 'atlas.json'))
chunks = {}
def chunk(i):
    if i not in chunks:
        chunks[i] = gzip.open(src / f'body-{i}.bin.gz').read()
    return chunks[i]

buf = bytearray(); views = []; accessors = []; meshes = []; nodes = []
def add_view(data, target):
    while len(buf) % 4: buf.append(0)
    views.append({'buffer': 0, 'byteOffset': len(buf), 'byteLength': len(data), 'target': target})
    buf.extend(data); return len(views) - 1

for oid, (label, names) in ORGANS.items():
    P, I, base = array('f'), [], 0
    for part in atlas['parts']:
        if part['name'] not in names: continue
        b = chunk(part['chunk'])
        n = part['vertexCount'] * 3
        P.extend(struct.unpack_from(f'<{n}f', b, part['positions']))
        I.extend(i + base for i in struct.unpack_from(f'<{part["indexCount"]}I', b, part['indices']))
        base += part['vertexCount']
    assert base, oid
    idx_t, idx_ct = ('H', 5123) if base < 65535 else ('I', 5125)
    pv = add_view(P.tobytes(), 34962); iv = add_view(array(idx_t, I).tobytes(), 34963)
    mn = [min(P[k::3]) for k in range(3)]; mx = [max(P[k::3]) for k in range(3)]
    accessors.append({'bufferView': pv, 'componentType': 5126, 'count': base, 'type': 'VEC3', 'min': mn, 'max': mx})
    accessors.append({'bufferView': iv, 'componentType': idx_ct, 'count': len(I), 'type': 'SCALAR'})
    meshes.append({'name': oid, 'primitives': [{'attributes': {'POSITION': len(accessors) - 2}, 'indices': len(accessors) - 1}]})
    nodes.append({'name': oid, 'mesh': len(meshes) - 1, 'extras': {'label': label, 'triangles': len(I) // 3}})
    print(f'{oid:12s} verts {base:6d} tris {len(I)//3:6d}')

gltf = {'asset': {'version': '2.0', 'generator': 'scripts/convert-bp3d.py', 'copyright': 'BodyParts3D, (c) 2008 The Database Center for Life Science, CC BY 4.0'},
        'scene': 0, 'scenes': [{'nodes': list(range(len(nodes)))}], 'nodes': nodes, 'meshes': meshes,
        'accessors': accessors, 'bufferViews': views, 'buffers': [{'byteLength': len(buf)}]}
js = json.dumps(gltf, separators=(',', ':')).encode()
js += b' ' * (-len(js) % 4)
while len(buf) % 4: buf.append(0)
out = struct.pack('<III', 0x46546C67, 2, 12 + 8 + len(js) + 8 + len(buf)) + struct.pack('<II', len(js), 0x4E4F534A) + js + struct.pack('<II', len(buf), 0x004E4942) + bytes(buf)
Path('public/models').mkdir(parents=True, exist_ok=True)
Path('public/models/gi-tract.glb').write_bytes(out)
print('bytes', len(out))
