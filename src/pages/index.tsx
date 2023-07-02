import * as React from 'react';
import { useEffect, useState } from 'react';

import CarsTable from '@/components/carsTable';
import Layout from '@/components/layout/Layout';
import Pagination from '@/components/pagination';

import { Car, getCars } from '../api';

const CARS_PER_PAGE = 10;

export default function HomePage() {
  const [cars, setCars] = useState<Car[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

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

  const totalPages = Math.ceil(cars.length / CARS_PER_PAGE);
  const startIndex = (currentPage - 1) * CARS_PER_PAGE;
  const endIndex = startIndex + CARS_PER_PAGE;
  const carsToDisplay = cars.slice(startIndex, endIndex);

  return (
    <Layout>
      <CarsTable cars={carsToDisplay} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </Layout>
  );
}
