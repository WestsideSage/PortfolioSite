/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
  readonly BASE_URL: string;
  readonly PUBLIC_SITE?: string;
  readonly PUBLIC_BASE?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
