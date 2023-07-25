import path from 'path';
import fs from 'fs/promises';

const DB_PATH = path.join(process.cwd(), '../../../', "zizeron");

export interface GetFoldersResult {
  folders: Folder[];
}

export interface Folder {
  absolutePath: string;
  relativePath: string;
  label: string;
}

const transformDashCaseToSentenceCase = (str: string) => (
  str
    .split("-")
    .map((s) => s[0].toUpperCase() + s.slice(1))
    .join(" ")
);

export const getFolders = async (): Promise<GetFoldersResult> => {
  const folderToIgnore = ["_old", "node_modules"];
  
  const folders = (await fs.readdir(DB_PATH)).filter(f =>
    !f.includes(".") && !folderToIgnore.includes(f)
  );

  return {
    folders: folders.map((f) => ({
      absolutePath: path.join(DB_PATH, f),
      relativePath: f,
      label: transformDashCaseToSentenceCase(f),
    }))
  };
};
