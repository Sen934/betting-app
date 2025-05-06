interface ImportMetaEnv {
  readonly VITE_API_URL: string;
  readonly VITE_USE_MOCK: boolean;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
