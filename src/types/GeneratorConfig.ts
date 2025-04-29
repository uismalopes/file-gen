import type { Options } from 'prettier';

export type CaseStyle = 'snake' | 'kebab' | 'camel' | 'pascal';
export type FileExtension = 'ts' | 'js' | 'tsx' | 'jsx' | 'css' | 'scss';
export type ArtifactType = 'component' | 'generic' | 'test' | 'scss' | 'css';

export interface GeneratedFileConfig {
  name: string;
  template: string;
  extension: FileExtension;
  prettier?: Options;
  suffix?: string;
}

export type GeneratorConfig = {
  [key in ArtifactType]: GeneratedFileConfig;
} & {
  prettier: Options;
};

export default GeneratorConfig;
