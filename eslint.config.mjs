import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended, // Add base recommended rules
});

export default [
  // Basic ESLint recommended rules
  js.configs.recommended,
  
  // Next.js specific rules
  ...compat.extends("next/core-web-vitals"),
  
  // Your custom rules
  {
    rules: {
      // Add any custom rules here
    },
    // Explicit parser options
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
  }
];