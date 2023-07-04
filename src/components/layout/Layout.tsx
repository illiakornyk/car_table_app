import * as React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='mx-4 my-4 flex items-center justify-center p-4'>
      <div className='w-8/12'>{children}</div>
    </div>
  );
}
