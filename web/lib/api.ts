export type StoreDto = {
  id: string;
  slug: string;
  name: string;
  city: string;
  address: string;
  isActive: boolean;
};

export type MenuItemDto = {
  id: string;
  storeId: string;
  name: string;
  description: string | null;
  priceInr: number;
  category: string;
  isActive: boolean;
};

export type SpecialDto = {
  id: string;
  storeId: string;
  title: string;
  itemName: string;
  priceInr: number;
  subtitle: string | null;
  tags: string[];
  isActive: boolean;
};

const API_BASE =
  process.env.NEXT_PUBLIC_API_BASE ||
  process.env.API_BASE ||
  'http://localhost:4000';

export const DEFAULT_STORE_SLUG =
  process.env.NEXT_PUBLIC_DEFAULT_STORE_SLUG ||
  process.env.DEFAULT_STORE_SLUG ||
  'nagpur-1';

async function getJson<T>(url: string): Promise<T> {
  const res = await fetch(url, { cache: 'no-store' });
  if (!res.ok) throw new Error(`API error ${res.status} for ${url}`);
  return (await res.json()) as T;
}

export async function fetchStores() {
  return getJson<StoreDto[]>(`${API_BASE}/public/stores`);
}

export async function fetchMenu(storeSlug = DEFAULT_STORE_SLUG) {
  return getJson<MenuItemDto[]>(
    `${API_BASE}/public/menu?storeSlug=${encodeURIComponent(storeSlug)}`
  );
}

export async function fetchSpecial(storeSlug = DEFAULT_STORE_SLUG) {
  return getJson<SpecialDto | null>(
    `${API_BASE}/public/special?storeSlug=${encodeURIComponent(storeSlug)}`
  );
}