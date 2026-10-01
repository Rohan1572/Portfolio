import nextPlugin from "@next/eslint-plugin-next";
import reactHooks from "eslint-plugin-react-hooks";
import tseslint from "typescript-eslint";

const config = [
  {
    ignores: [
      ".next/**",
      "out/**",
      "dist/**",
      "dist-ssr/**",
      "next-env.d.ts",
    ],
  },
  nextPlugin.configs["core-web-vitals"],
  reactHooks.configs.flat["recommended-latest"],
  ...tseslint.configs.recommended,
];

export default config;