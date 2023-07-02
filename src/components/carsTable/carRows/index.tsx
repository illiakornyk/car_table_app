import * as React from 'react';

import CarRow from '@/components/carsTable/carRow';

import { Car } from '@/api';

interface CarRowsProps {
  cars: Car[];
  onEditCar: (car: Car) => void;
  onDeleteCar: (car: Car) => void;
}

export default function CarRows({
  cars,
  onEditCar,
  onDeleteCar,
}: CarRowsProps) {
  return (
    <>
      {cars.map((car) => (
        <CarRow
          key={car.id}
          car={car}
          onEditCar={onEditCar}
          onDeleteCar={onDeleteCar}
        />
      ))}
    </>
  );
}
