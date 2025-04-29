import { COMMANDS } from '@constants';
import { ArtifactType } from './GeneratorConfig';

interface CreateFileFromConfigOptions {
  fileName: string;
  command: COMMANDS;
  artifactType: ArtifactType;
}

export default CreateFileFromConfigOptions;
