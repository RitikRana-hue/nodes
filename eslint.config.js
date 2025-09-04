import nextPlugin from '@next/eslint-plugin-next';
import js from '@eslint/js';

export default [
  {
    ignores: [
      '.next/**',
      'node_modules/**',
      'out/**',
      'build/**',
      'dist/**',
      '*.config.js',
      '**/*.d.ts',
      '**/*.config.*',
      '**/*.setup.*',
      '**/*.test.*',
      '**/*.spec.*',
      '**/.next/**',
      '**/coverage/**',
      '**/public/**'
    ]
  },
  js.configs.recommended,
  ...nextPlugin.configs.recommended,
  {
    rules: {
      // Add your custom rules here
    }
  }
];
