import type { PluginConfig as SortImportsConfig } from '@ianvs/prettier-plugin-sort-imports';
import type { Config as PrettierConfig } from 'prettier';
import type { PluginOptions as TailwindConfig } from 'prettier-plugin-tailwindcss';

export type Config = PrettierConfig & TailwindConfig & SortImportsConfig;

const config = {
  singleQuote: true,

  plugins: [
    '@ianvs/prettier-plugin-sort-imports',
    'prettier-plugin-tailwindcss',
  ],

  importOrder: [
    '<TYPES>',
    '<TYPES>^[.]',
    '',
    '<BUILT_IN_MODULES>',
    '<THIRD_PARTY_MODULES>',
    '',
    '^@/(.*)$',
    '',
    '^[.]',
  ],

  tailwindFunctions: ['cn', 'cva', 'clsx', 'twMerge'],
} satisfies Config;

export default config;
