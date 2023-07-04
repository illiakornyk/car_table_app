import * as React from 'react';
import { useEffect, useState } from 'react';

import { useCars } from '@/hooks';

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
  const [isLoaded, setIsLoaded] = useState(false);

  const [cars, setCars] = useCars(setIsLoaded);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const [carToDelete, setCarToDelete] = useState<Car | null>(null);
  const [isAddCarOpen, setIsAddCarOpen] = useState(false);

  useEffect(() => {
    if (isLoaded && cars.length === 0) {
      const fetchCars = async () => {
        const { cars, error } = await getCars();
        if (error) {
          setError(error);
        } else {
          setCars(cars || []);
        }
      };
      fetchCars();
    }
  }, [cars.length, isLoaded]);

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
      <div className='flex w-full flex-col'>
        <h2 className='pb-2 text-center'>Cars list table</h2>
        <div className='flex w-full justify-between pb-4 '>
          <div className='w-fit'>
            <Search value={searchQuery} onChange={setSearchQuery} />
          </div>

          <button
            className='mb-4 rounded bg-sky-500 px-4 py-2 text-white'
            onClick={() => setIsAddCarOpen(true)}
          >
            Add Car
          </button>
        </div>

        {carsToDisplay.length === 0 ? (
          <p className='text-center text-lg'>There are no cars to display</p>
        ) : (
          <CarsTable
            cars={carsToDisplay}
            onEditCar={handleEditCar}
            onDeleteCar={setCarToDelete}
          />
        )}

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
