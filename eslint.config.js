import eslintPluginPrettier from "eslint-plugin-prettier";
import eslintConfigPrettier from "eslint-config-prettier";
import tseslint from "typescript-eslint";

export default await tseslint.config({
  files: ["**/*.ts"],
  languageOptions: {
    parserOptions: {
      project: "./tsconfig.json",
    },
  },
  plugins: {
    prettier: eslintPluginPrettier,
  },
  rules: {
    "prettier/prettier": "error",
  },
  settings: {
    'import/resolver': {
      typescript: {
        project: './tsconfig.json',
      },
    },
  },
  ignores: ["dist", "node_modules"],
  extends: [eslintConfigPrettier],
});
