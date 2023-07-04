import { useEffect, useState } from 'react';

import { Car } from '@/api';

export function useCars(setIsLoaded: (isLoaded: boolean) => void) {
  const [cars, setCars] = useState<Car[]>([]);

  useEffect(() => {
    const storedCarsString = localStorage.getItem('cars') || '';
    const storedCars = storedCarsString ? JSON.parse(storedCarsString) : [];

    if (storedCars.length > 0) {
      setCars(storedCars);
    }

    setIsLoaded(true);
  }, []);

  useEffect(() => {
    localStorage.setItem('cars', JSON.stringify(cars));
  }, [cars]);

  return [cars, setCars] as const;
}
