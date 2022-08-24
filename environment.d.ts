declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_SUPABASE_URL: string;
    NEXT_PUBLIC_SUPABASE_ANON_PUBLIC: string;
    SUPABASE_DB_PASSWORD: string;
    SUPABASE_SERVICE_ROLE: string;
    SUPABASE_JWT_SECRET: string;
    GITHUB_AUTH_CLIENT_ID: string;
    GITHUB_AUTH_SECRET: string;
  }
}
