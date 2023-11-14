'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export default function Search() {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  function handleSearch(filter: string) {
    const params = new URLSearchParams(searchParams);
    params.set('name', filter);
    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <div>
      <label>
        Suche:
        <input
          type="text"
          onChange={(event) => handleSearch(event.target.value)}
          defaultValue={searchParams.get('name')?.toString()}
        />
      </label>
    </div>
  );
}
