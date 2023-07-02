export interface Car {
  id: number;
  car: string;
  car_model: string;
  car_color: string;
  car_model_year: number;
  car_vin: string;
  price: string;
  availability: boolean;
}

export interface GetCarsResult {
  cars?: Car[];
  error?: string;
}

export const getCars = async (): Promise<GetCarsResult> => {
  try {
    const response = await fetch('/api/cars');
    const data = await response.json();
    return { cars: data.cars || [] };
  } catch (error) {
    return { error: (error as Error).message };
  }
};
