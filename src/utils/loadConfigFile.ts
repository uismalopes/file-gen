import { CONFIG_FILE_NAMES, DEFAULT_CONFIG } from '@constants';
import { GeneratorConfig } from '@/types';
import fs from 'fs';
import path from 'path';
import { pathToFileURL } from 'url';

async function loadConfigFile(
  startDir = process.cwd(),
): Promise<{ path: string | null; config: GeneratorConfig }> {
  try {
    let dir = startDir;

    while (true) {
      for (const name of CONFIG_FILE_NAMES) {
        const filePath = path.join(dir, name);
        if (fs.existsSync(filePath)) {
          if (filePath.endsWith('.json')) {
            const content = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
            return { path: filePath, config: content };
          } else if (filePath.endsWith('.js')) {
            const module = await import(pathToFileURL(filePath).href);
            return {
              path: filePath,
              config: Object.assign(DEFAULT_CONFIG, module.default || module),
            };
          }
        }
      }

      const parent = path.dirname(dir);
      if (parent === dir) break;
      dir = parent;
    }

    throw new Error('Configuration file not found!');
  } catch (error) {
    return {
      path: null,
      config: DEFAULT_CONFIG,
    };
  }
}

export default loadConfigFile;
