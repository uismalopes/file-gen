import { GeneratorConfig } from '@/types';

const DEFAULT_CONFIG: GeneratorConfig = {
  prettier: {
    semi: true,
    singleQuote: true,
    trailingComma: 'all',
    printWidth: 100,
    tabWidth: 2,
    bracketSpacing: true,
    jsxSingleQuote: false,
    arrowParens: 'always',
    endOfLine: 'auto',
    parser: 'babel-ts',
  },
  component: {
    extension: 'tsx',
    name: '[name:pascal]',
    template: `
      function [name:pascal](){
        return (
          <h3>[name]</h3>
        );
      };
      
      export default [name:pascal];
    `,
  },
  generic: {
    extension: 'ts',
    name: '[name:pascal]',
    template: 'function jaco() { return 1 + 1 }',
  },
  test: {
    extension: 'ts',
    name: '[name:pascal]',
    template: `
      import { sum } from 'path/file';
      describe('math', () => {
        describe('sum()', () => {
          it('should return the sum of two numbers', () => {
            expect(sum(2, 3)).toEqual(5);
          });
        });
      });
    `,
    suffix: 'test',
  },
  css: {
    extension: 'css',
    name: '[name:pascal].style',
    template: '',
  },
  scss: {
    extension: 'scss',
    name: '[name:pascal].style',
    template: '',
  },
};

export default DEFAULT_CONFIG;
