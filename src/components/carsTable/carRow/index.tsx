import * as React from 'react';

import Dropdown from '@/components/dropdown';

import { Car } from '@/api';

export interface CarRowProps {
  car: Car;
  onEditCar: (car: Car) => void;
  onDeleteCar: (car: Car) => void;
}

export default function CarRow({ car, onEditCar, onDeleteCar }: CarRowProps) {
  const price = parseFloat(car.price.replace('$', ''));
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price);

  return (
    <tr key={car.id}>
      <td className='border bg-sky-50 px-4 py-2'>{car.car}</td>
      <td className='border bg-sky-50 px-4 py-2'>{car.car_model}</td>
      <td className='border bg-sky-50 px-4 py-2'>{car.car_vin}</td>
      <td className='border bg-sky-50 px-4 py-2'>{car.car_color}</td>
      <td className='border bg-sky-50 px-4 py-2'>{car.car_model_year}</td>
      <td className='border bg-sky-50 px-4 py-2'>{formattedPrice}</td>
      <td className='border bg-sky-50 px-4 py-2 '>
        {car.availability ? 'Yes' : 'No'}
      </td>
      <td className='border bg-sky-50 px-4 py-2'>
        <Dropdown>
          <li
            className='cursor-pointer px-4 py-2 hover:bg-gray-100'
            onClick={() => onEditCar(car)}
          >
            Edit
          </li>
          <li
            className='cursor-pointer px-4 py-2 hover:bg-gray-100'
            onClick={() => onDeleteCar(car)}
          >
            Delete
          </li>
        </Dropdown>
      </td>
    </tr>
  );
}
