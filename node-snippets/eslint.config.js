import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintPluginPrettier from 'eslint-plugin-prettier/recommended';
import globals from 'globals';

export default tseslint.config(
    {
        ignores: ['node_modules/', 'coverage/', 'dist/', 'eslint.config.js'],
    },
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    eslintPluginPrettier,
    {
        languageOptions: { globals: globals.browser },
        rules: {
            '@typescript-eslint/no-unused-vars': 'warn',
        },
    }
);
