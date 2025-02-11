/// <reference types="astro/client" />

// https://docs.astro.build/en/guides/environment-variables/#intellisense-for-typescript
interface ImportMetaEnv {
	readonly SITE: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
interface ImportMetaEnv {
	readonly SUPABASE_URL: string
	readonly SUPABASE_ANON_KEY: string
  }
  
interface ImportMeta {
	readonly env: ImportMetaEnv
  }
    
 
interface ImportMeta {
	readonly MATRIZ_POA: string
  }