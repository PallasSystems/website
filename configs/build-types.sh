cat >dist/cjs/package.json <<!EOF
{
    "type": "commonjs"
}
!EOF

cat >dist/esm/package.json <<!EOF
{
    "type": "module"
}
!EOF

for file in dist/esm/*.js; do 
    mv -- "$file" "${file%.js}.mjs"
done