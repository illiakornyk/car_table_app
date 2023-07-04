import * as React from 'react';

import { CarRowProps } from './carRow';
import CarRows from './carRows';

export interface CarsTableProps {
  cars: CarRowProps['car'][];
  onEditCar: (car: CarRowProps['car']) => void;
  onDeleteCar: (car: CarRowProps['car']) => void;
}

export default function CarsTable({
  cars,
  onEditCar,
  onDeleteCar,
}: CarsTableProps) {
  return (
    <div className='overflow-auto'>
      <table className='w-full  text-left'>
        <thead>
          <tr className='bg-sky-600 text-sky-50'>
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
          <CarRows
            cars={cars}
            onEditCar={onEditCar}
            onDeleteCar={onDeleteCar}
          />
        </tbody>
      </table>
    </div>
  );
}
