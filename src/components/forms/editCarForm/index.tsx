import * as React from 'react';
import { useForm } from 'react-hook-form';

import Modal from '@/components/modal';

import { Car } from '@/api';
interface EditCarFormProps {
  car: Car;
  isOpen: boolean;
  onClose: () => void;
  onSave: (car: Car) => void;
}

export default function EditCarForm({
  car,
  isOpen,
  onClose,
  onSave,
}: EditCarFormProps) {
  const price = parseFloat(car.price.replace('$', ''));

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      color: car.car_color,
      price,
      availability: car.availability ? 'Yes' : 'No',
    },
  });

  const onSubmit = (data: any) => {
    onSave({
      ...car,
      car_color: data.color,
      price: data.price,
      availability: data.availability === 'Yes',
    });
    onClose();
  };

  React.useEffect(() => {
    reset({
      color: car.car_color,
      price,
      availability: car.availability ? 'Yes' : 'No',
    });
  }, [car, reset]);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h2 className='mb-4 text-lg font-semibold'>Edit Car</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='mb-4'>
          <label className='mb-1 block'>Company</label>
          <input
            className='w-full rounded border bg-gray-100 px-4 py-2'
            type='text'
            value={car.car}
            disabled
          />
        </div>
        <div className='mb-4'>
          <label className='mb-1 block'>Model</label>
          <input
            className='w-full rounded border bg-gray-100 px-4 py-2'
            type='text'
            value={car.car_model}
            disabled
          />
        </div>
        <div className='mb-4'>
          <label className='mb-1 block'>VIN</label>
          <input
            className='w-full rounded border bg-gray-100 px-4 py-2'
            type='text'
            value={car.car_vin}
            disabled
          />
        </div>
        <div className='mb-4'>
          <label className='mb-1 block'>Year</label>
          <input
            className='w-full rounded border bg-gray-100 px-4 py-2'
            type='text'
            value={car.car_model_year}
            disabled
          />
        </div>
        <div className='mb-4'>
          <label className='mb-1 block'>Color</label>
          <input
            {...register('color')}
            className='w-full rounded border px-4 py-2'
            type='text'
          />
        </div>
        <div className='mb-4'>
          <label className='mb-1 block'>Price in $</label>
          <input
            {...register('price')}
            className='w-full rounded border px-4 py-2'
            type='text'
          />
        </div>
        <div className='mb-4'>
          <label className='mb-1 block'>Availability</label>
          <select
            {...register('availability')}
            className='w-full rounded border px-4 py-2'
          >
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>
        <div className='flex justify-end'>
          <button
            type='button'
            className='mr-2 rounded bg-gray-100 px-4 py-2'
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            type='submit'
            className='rounded bg-blue-500 px-4 py-2 text-white'
          >
            Save
          </button>
        </div>
      </form>
    </Modal>
  );
}
