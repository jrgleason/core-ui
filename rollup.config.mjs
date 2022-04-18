import { JRGBuild } from './build/index.mjs'
import pkg from './package.json' assert { type: 'json' };
import path from 'path';

const __dirname = path.dirname(new URL(import.meta.url).pathname);

const build = new JRGBuild(pkg, __dirname)

export default [
    build.mjs
];