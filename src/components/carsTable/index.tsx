import * as React from 'react';

import CarRows from '@/components/carsTable/carRows';

import { Car } from '@/api';

export default function CarsTable({ cars }: { cars: Car[] }) {
  return (
    <div className='overflow-x-auto'>
      <table className='w-full table-auto text-left'>
        <thead>
          <tr className='bg-gray-100'>
            <th className='px-4 py-2'>Company</th>
            <th className='px-4 py-2'>Model</th>
            <th className='px-4 py-2'>VIN</th>
            <th className='px-4 py-2'>Color</th>
            <th className='px-4 py-2'>Year</th>
            <th className='px-4 py-2'>Price</th>
            <th className='px-4 py-2'>Availability</th>
            <th className='px-4 py-2'>Actions</th>
          </tr>
        </thead>
        <tbody>
          <CarRows cars={cars} />
        </tbody>
      </table>
    </div>
  );
}
