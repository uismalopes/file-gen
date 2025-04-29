import chalk from 'chalk';
import figlet from 'figlet';
import { Command } from 'commander';
import inquirer from 'inquirer';
import { COMMANDS } from '@constants';
import { createFileFromConfig } from '@utils';
import { AnswersCreateComponent, CreateFileFromConfigOptions } from '@/types';

const program = new Command();
const prompt = inquirer.createPromptModule();

function start() {
  console.clear();

  console.log(
    chalk.cyan(figlet.textSync('file-gen', { horizontalLayout: 'full' })),
  );

  program
    .name('file-gen')
    .description('CLI to some JavaScript string utilities')
    .version('0.0.1');

  async function handleCreateFileFromConfig(
    props: CreateFileFromConfigOptions,
  ) {
    const { artifactType, command, fileName } = props;
    await createFileFromConfig({
      command,
      fileName,
      artifactType,
    })
      .then(response => {
        console.log(chalk.green(response?.message));
        console.log(chalk.green(response?.path));
        console.log('\n');
      })
      .catch(response => {
        console.log(chalk.red(response?.message));
        console.log(chalk.red(response?.path));
      });
  }

  program
    .command('component')
    .description('Create new component')
    .argument('<string>', 'Name of component')
    .action(async fileName => {
      const answers = await prompt<AnswersCreateComponent>([
        {
          message: 'Create CSS or SCSS ?',
          name: 'useCssOrScss',
          type: 'list',
          choices: [
            {
              value: 'scss',
              name: 'SCSS',
            },
            {
              value: 'css',
              name: 'CSS',
            },
            {
              value: false,
              name: 'No',
            },
          ],
        },
      ]);

      await handleCreateFileFromConfig({
        command: COMMANDS.CREATE_COMPONENT,
        fileName,
        artifactType: 'component',
      });

      if (answers?.useCssOrScss) {
        const artifactType = answers.useCssOrScss;
        await handleCreateFileFromConfig({
          command: COMMANDS.CREATE_CSS,
          artifactType,
          fileName,
        });
      }
    });

  program
    .command('generic')
    .description('Create new file')
    .argument('<string>', 'Name of file')
    .action(async fileName => {
      await handleCreateFileFromConfig({
        command: COMMANDS.CREATE_GENERIC,
        fileName,
        artifactType: 'generic',
      });
    });

  program
    .command('test')
    .description('Create new test file')
    .argument('<string>', 'Name of test file')
    .action(async fileName => {
      await handleCreateFileFromConfig({
        command: COMMANDS.CREATE_TEST,
        fileName,
        artifactType: 'test',
      });
    });
  program.parse(process.argv);
}

export default start;
