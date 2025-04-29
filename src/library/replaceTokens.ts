import { ReplaceTokenMap } from '@/types';
import { CaseStyle } from '@/types';
import { camelCase, kebabCase, snakeCase, startCase } from 'lodash';

const REGEX_TOKEN = /\[([a-zA-Z0-9_]+)(?::([a-zA-Z0-9_]+))?\]/g;

type Modifier = CaseStyle;

const modifiers: Record<Modifier, (value: string) => string> = {
  camel: camelCase,
  kebab: kebabCase,
  snake: snakeCase,
  pascal: (value: string) => startCase(camelCase(value)).replace(/ /g, ''),
};

function applyModifier(value: string, modifier?: string): string {
  if (!modifier) return value;
  const fn = modifiers[modifier as Modifier];
  return fn ? fn(value) : value;
}

function replaceTokens(template: string, tokens: ReplaceTokenMap): string {
  return template.replace(REGEX_TOKEN, (_, key, modifier) => {
    const rawValue = tokens[key];
    if (!rawValue) return `[${key}${modifier ? `:${modifier}` : ''}]`;
    return applyModifier(rawValue, modifier);
  });
}

export default replaceTokens;
