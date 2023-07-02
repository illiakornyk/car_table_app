import * as React from 'react';
import { useEffect, useState } from 'react';

import Layout from '@/components/layout/Layout';

import { Car, getCars } from '../api';

export default function HomePage() {
  const [cars, setCars] = useState<Car[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchCars() {
      const { cars, error } = await getCars();
      if (error) {
        setError(error);
      } else {
        setCars(cars || []);
      }
    }

    fetchCars();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Layout>
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
            {cars.map((car) => (
              <tr key={car.id}>
                <td className='border px-4 py-2'>{car.car}</td>
                <td className='border px-4 py-2'>{car.car_model}</td>
                <td className='border px-4 py-2'>{car.car_vin}</td>
                <td className='border px-4 py-2'>{car.car_color}</td>
                <td className='border px-4 py-2'>{car.car_model_year}</td>
                <td className='border px-4 py-2'>{car.price}</td>
                <td className='border px-4 py-2'>
                  {car.availability ? 'Yes' : 'No'}
                </td>
                <td className='border px-4 py-2'>Edit | Delete</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
}
