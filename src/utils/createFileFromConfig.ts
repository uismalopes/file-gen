import state from '@/state';
import { replaceTokens } from '@lib';
import path from 'path';
import { CreateFileFromConfigOptions } from '@/types';
import { existsSync } from 'fs';
import templateEngine from './templateEngine';
import loadConfigFile from './loadConfigFile';

async function createFileFromConfig({
  command,
  fileName,
  artifactType,
}: CreateFileFromConfigOptions) {
  const { config } = await loadConfigFile();

  if (!config[artifactType]) {
    // TODO: message according to type
    return Promise.reject(
      new Error(
        'O que você está tentando criar, não está configurado no arquivo de configuração.',
      ),
    );
  }

  const {
    template,
    extension,
    name: fileNameTemplate,
    prettier,
    suffix,
  } = config[artifactType];

  const [newFileName, ...concactFileName] = fileName.split(/\./g);

  const resolvedFileName = replaceTokens(fileNameTemplate, {
    name: newFileName,
  });

  const fileNameWithExtension = [
    resolvedFileName,
    ...concactFileName,
    suffix,
    extension,
  ]
    .filter(Boolean)
    .join('.');

  const outputFilePath = path.resolve(state.paths.root, fileNameWithExtension);

  if (existsSync(outputFilePath))
    return Promise.reject({
      message: 'File has already been created',
      path: outputFilePath,
    });

  return templateEngine(outputFilePath, {
    template,
    prettier: prettier || config.prettier,
    tokens: {
      name: newFileName,
    },
  });
}

export default createFileFromConfig;
