import { fixupConfigRules, fixupPluginRules } from '@eslint/compat'
import { FlatCompat } from '@eslint/eslintrc'
import js from '@eslint/js'
import typescriptEslint from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import _import from 'eslint-plugin-import'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import globals from 'globals'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
})

export default [
    {
        ignores: ['**/dist/', '**/node_modules/']
    },
    ...fixupConfigRules(compat.extends('plugin:prettier/recommended')),
    {
        plugins: {
            import: fixupPluginRules(_import),
            '@typescript-eslint': typescriptEslint,
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh
        },

        languageOptions: {
            globals: {
                ...globals.jest
            },
            parser: tsParser,
            ecmaVersion: 5,
            sourceType: 'script',
            parserOptions: {
                project: ['./tsconfig.json']
            }
        },

        settings: {
            'import/parsers': {
                '@typescript-eslint/parser': ['.ts', '.tsx']
            },

            'import/resolver': {
                typescript: {}
            }
        },

        rules: {
            'no-underscore-dangle': 0,
            'no-param-reassign': 0,
            'no-return-assign': 0,
            camelcase: 0,
            'import/extensions': 0,
            '@typescript-eslint/no-redeclare': 0
        }
    }
]
