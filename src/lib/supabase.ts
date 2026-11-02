/**
 * KNS Construction & Real Estate - Supabase Integration Client
 * 
 * Supports both live Supabase connection (via VITE_SUPABASE_URL & VITE_SUPABASE_ANON_KEY)
 * and seamless fallback local persistence for offline development & demonstrations.
 */

export interface SupabaseConfig {
  url: string | null;
  anonKey: string | null;
  isConfigured: boolean;
}

export const getSupabaseConfig = (): SupabaseConfig => {
  const url = import.meta.env.VITE_SUPABASE_URL || null;
  const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || null;
  return {
    url,
    anonKey,
    isConfigured: Boolean(url && anonKey)
  };
};

export const saveSupabaseConfigToStorage = (url: string, key: string) => {
  localStorage.setItem('kns_supabase_url', url);
  localStorage.setItem('kns_supabase_key', key);
};

export const getCustomSupabaseConfig = () => {
  const url = localStorage.getItem('kns_supabase_url') || import.meta.env.VITE_SUPABASE_URL || '';
  const key = localStorage.getItem('kns_supabase_key') || import.meta.env.VITE_SUPABASE_ANON_KEY || '';
  return {
    url,
    key,
    isConfigured: Boolean(url && key)
  };
};
