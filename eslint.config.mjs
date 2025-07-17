import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Расширения из Next.js
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  
  // Ваши кастомные правила
  {
    rules: {
      "@next/next/no-img-element": "off" // Отключаем правило для img
    }
  }
];

export default eslintConfig;