import fs from 'node:fs';
import path from 'node:path';

import { DefaultTheme } from 'vitepress';
type SidebarItem = DefaultTheme.SidebarItem;

type Constant = (string | { text: string; dir: string; constants: Constant[] })[];

export function readNoteFilesInDir(
  dirPath,
  constants?: Constant[],
  fileType = '.md'
): SidebarItem[] {
  const result: SidebarItem[] = [];
  const files = fs.readdirSync(path.resolve('', 'src' + dirPath));
  for (const file of files) {
    if (path.extname(file) === fileType) {
      result.push({
        text: file.split('.')[0],
        link: `${dirPath}/${file}`,
        order: constants?.indexOf(file.split('.')[0]),
      });
    }
    if (!file?.includes('.')) {
      const index = constants?.findIndex((c) => c.dir === file);
      result.push({
        text: constants[index]?.text,
        collapsed: false,
        items: readNoteFilesInDir(dirPath + '/' + file, constants[index]?.constants, fileType),
      });
    }
  }
  result.sort((a, b) => a.order - b.order);
  return result;
}
