import { writeFileSync } from 'fs';
import { Options, format } from 'prettier';
import { ReplaceTokenMap } from '@/types';
import { replaceTokens } from '@lib';

interface CreateFileDataOptions {
  template: string;
  tokens: ReplaceTokenMap;
  prettier?: Options;
}
replaceTokens;
async function templateEngine(
  dir: string,
  { template, tokens, prettier }: CreateFileDataOptions,
) {
  try {
    let formatedTemplate = replaceTokens(template, tokens);

    if (prettier) {
      formatedTemplate = await format(formatedTemplate, prettier);
    }

    writeFileSync(dir, formatedTemplate, 'utf-8');

    return {
      message: 'File created successfully',
      path: dir,
    };
  } catch (error) {
    return {
      error,
      message: 'The file could not be created',
    };
  }
}

export default templateEngine;
