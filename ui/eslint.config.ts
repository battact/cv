import { Linter } from 'eslint';
import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginReactHooks from 'eslint-plugin-react-hooks';
import eslintPluginReactRefresh from 'eslint-plugin-react-refresh';
import { baseConfig } from '../eslint.config';

const sharedConfig = baseConfig[0];
const config: Linter.Config[] = [
  {
    ignores: [
      "**/dist/**",
      "**/node_modules/**",
      "**/build/**"
    ]
  },
  {
    ...sharedConfig
  },
  {
    plugins: {
      ...sharedConfig.plugins,
      react: eslintPluginReact,
      'react-hooks': eslintPluginReactHooks,
      'react-refresh': eslintPluginReactRefresh
    },
    rules: {
      ...sharedConfig.rules,
      // React specific rules
      'react/react-in-jsx-scope': 'off', // Not needed with modern JSX transform
      'react/prop-types': 'off', // Not needed with TypeScript
      'react/jsx-uses-react': 'off', // Not needed with modern JSX transform
      'react/jsx-uses-vars': 'error',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }]
    },
    settings: {
      react: {
        version: 'detect'
      }
    }
  }
];

export default config;
