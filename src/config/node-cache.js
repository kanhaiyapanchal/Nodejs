import NodeCache from 'node-cache';

const cache = new NodeCache({stdTTL:120}) //2min

export default cache;
