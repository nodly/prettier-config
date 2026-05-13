import { createRequire } from 'node:module';
import type { PluginConfig as SortImportsConfig } from '@ianvs/prettier-plugin-sort-imports';
import type { Config as PrettierConfig } from 'prettier';
import type { PluginOptions as TailwindConfig } from 'prettier-plugin-tailwindcss';

const require = createRequire(import.meta.url);

export type Config = PrettierConfig & TailwindConfig & SortImportsConfig;

const config = {
  singleQuote: true,

  plugins: [
    require.resolve('@ianvs/prettier-plugin-sort-imports'),
    require.resolve('prettier-plugin-tailwindcss'),
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
