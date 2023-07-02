import * as React from 'react';

import CarRow, { CarRowProps } from './carRow';

export interface CarsTableProps {
  cars: CarRowProps['car'][];
  onEditCar: (car: CarRowProps['car']) => void;
}

export default function CarsTable({ cars, onEditCar }: CarsTableProps) {
  return (
    <div className='overflow-x-auto'>
      <table className='w-full table-auto text-left'>
        <thead>
          <tr className='bg-gray-100'>
            <th className='w-48 px-4 py-2'>Company</th>
            <th className='w-48 px-4 py-2'>Model</th>
            <th className='w-48 px-4 py-2'>VIN</th>
            <th className='w-32 px-4 py-2'>Color</th>
            <th className='w-32 px-4 py-2'>Year</th>
            <th className='w-32 px-4 py-2'>Price</th>
            <th className='w-32 px-4 py-2'>Availability</th>
            <th className='w-32 px-4 py-2'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cars.map((car) => (
            <CarRow key={car.id} car={car} onEditCar={onEditCar} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
