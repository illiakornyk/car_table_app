import * as React from 'react';
import { useEffect, useState } from 'react';

import CarsTable from '@/components/carsTable';
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
      <CarsTable cars={cars} />
    </Layout>
  );
}
