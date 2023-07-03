import * as React from 'react';
import { useEffect, useState } from 'react';

import CarsTable from '@/components/carsTable';
import AddCarForm from '@/components/forms/addCarForm';
import DeleteCarForm from '@/components/forms/deleteCarForm';
import EditCarForm from '@/components/forms/editCarForm';
import Layout from '@/components/layout/Layout';
import Pagination from '@/components/pagination';
import Search from '@/components/search';

import { Car, getCars } from '@/api';

const CARS_PER_PAGE = 10;

export default function HomePage() {
  const [cars, setCars] = useState<Car[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const [carToDelete, setCarToDelete] = useState<Car | null>(null);
  const [isAddCarOpen, setIsAddCarOpen] = useState(false);

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

  const handleEditCar = (car: Car) => {
    setSelectedCar(car);
  };

  const handleAddCar = (newCar: Car) => {
    setCars((cars) => [newCar, ...cars]);
    setIsAddCarOpen(false);
  };

  const handleDeleteCar = (car: Car) => {
    setCars((cars) => cars.filter((c) => c.id !== car.id));
    setCarToDelete(null);
  };

  const handleSaveCar = (updatedCar: Car) => {
    setCars((cars) =>
      cars.map((car) => (car.id === updatedCar.id ? updatedCar : car))
    );
    setSelectedCar(null);
  };

  const filteredCars = cars.filter((car) =>
    Object.values(car).some((value) =>
      value.toString().toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  const totalPages = Math.ceil(filteredCars.length / CARS_PER_PAGE);
  const startIndex = (currentPage - 1) * CARS_PER_PAGE;
  const endIndex = startIndex + CARS_PER_PAGE;
  const carsToDisplay = filteredCars.slice(startIndex, endIndex);

  return (
    <Layout>
      <div className='flex flex-col'>
        <div className='w-1/3 pb-4'>
          <Search value={searchQuery} onChange={setSearchQuery} />
          <button
            className='mb-4 rounded bg-blue-500 px-4 py-2 text-white'
            onClick={() => setIsAddCarOpen(true)}
          >
            Add Car
          </button>
        </div>
        <CarsTable
          cars={carsToDisplay}
          onEditCar={handleEditCar}
          onDeleteCar={setCarToDelete}
        />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />

        <AddCarForm
          isOpen={isAddCarOpen}
          onClose={() => setIsAddCarOpen(false)}
          onSave={handleAddCar}
        />

        {selectedCar && (
          <EditCarForm
            car={selectedCar}
            isOpen={Boolean(selectedCar)}
            onClose={() => setSelectedCar(null)}
            onSave={handleSaveCar}
          />
        )}

        {carToDelete && (
          <DeleteCarForm
            car={carToDelete}
            isOpen={Boolean(carToDelete)}
            onClose={() => setCarToDelete(null)}
            onDelete={handleDeleteCar}
          />
        )}
      </div>
    </Layout>
  );
}
