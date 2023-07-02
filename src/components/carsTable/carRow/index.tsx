import * as React from 'react';

import { Car } from '@/api';

export interface CarRowProps {
  car: Car;
}

export default function CarRow({ car }: CarRowProps) {
  return (
    <tr key={car.id}>
      <td className='border px-4 py-2'>{car.car}</td>
      <td className='border px-4 py-2'>{car.car_model}</td>
      <td className='border px-4 py-2'>{car.car_vin}</td>
      <td className='border px-4 py-2'>{car.car_color}</td>
      <td className='border px-4 py-2'>{car.car_model_year}</td>
      <td className='border px-4 py-2'>{car.price}</td>
      <td className='border px-4 py-2'>{car.availability ? 'Yes' : 'No'}</td>
      <td className='border px-4 py-2'>Edit | Delete</td>
    </tr>
  );
}
