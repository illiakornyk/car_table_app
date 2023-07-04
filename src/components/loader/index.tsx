import React from 'react';

const Loader: React.FC = () => {
  return (
    <div className='flex items-center justify-center'>
      <div className='h-32 w-32 animate-spin rounded-full border-b-2 border-t-2 border-gray-900'></div>
    </div>
  );
};

export default Loader;
