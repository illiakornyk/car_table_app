import * as React from 'react';

import { Car } from '@/api';

export interface CarRowProps {
  car: Car;
  onEditCar: (car: Car) => void;
}

export default function CarRow({ car, onEditCar }: CarRowProps) {
  return (
    <tr key={car.id}>
      <td className='border px-4 py-2'>{car.car}</td>
      <td className='border px-4 py-2'>{car.car_model}</td>
      <td className='border px-4 py-2'>{car.car_vin}</td>
      <td className='border px-4 py-2'>{car.car_color}</td>
      <td className='border px-4 py-2'>{car.car_model_year}</td>
      <td className='border px-4 py-2'>{car.price}</td>
      <td className='border px-4 py-2'>{car.availability ? 'Yes' : 'No'}</td>
      <td className='border px-4 py-2'>
        <button
          className='mr-2 rounded bg-blue-500 px-4 py-2 text-white'
          onClick={() => onEditCar(car)}
        >
          Edit
        </button>
        | Delete
      </td>
    </tr>
  );
}
