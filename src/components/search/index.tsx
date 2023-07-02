import * as React from 'react';

interface SearchProps {
  value: string;
  onChange: (value: string) => void;
}

export default function Search({ value, onChange }: SearchProps) {
  return (
    <input
      className='w-full rounded border px-4 py-2'
      type='text'
      placeholder='Search...'
      value={value}
      onChange={(event) => onChange(event.target.value)}
    />
  );
}
