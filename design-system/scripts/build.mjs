import { build } from 'esbuild';

await build({
  entryPoints: ['src/index.ts'],
  bundle: true,
  format: 'esm',
  outfile: 'dist/index.js',
  external: ['react', 'react/jsx-runtime'],
  jsx: 'automatic',
  loader: { '.css': 'empty' },
  target: 'es2020',
});

await build({
  entryPoints: ['src/styles.css'],
  bundle: true,
  outfile: 'dist/styles.css',
});

console.log('built dist/index.js + dist/styles.css');
