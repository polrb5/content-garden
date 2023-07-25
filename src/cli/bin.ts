import fg from 'fast-glob';
import fs from 'fs';

import { getFolders } from './sdk'

const main = async () => {
  const { folders } = await getFolders();

};

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
