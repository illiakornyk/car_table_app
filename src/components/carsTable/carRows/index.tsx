import * as React from 'react';

import CarRow from '@/components/carsTable/carRow';

import { Car } from '@/api';

interface CarRowsProps {
  cars: Car[];
}

export default function CarRows({ cars }: CarRowsProps) {
  return (
    <>
      {cars.map((car) => (
        <CarRow key={car.id} car={car} />
      ))}
    </>
  );
}
