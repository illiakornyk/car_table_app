import { yupResolver } from '@hookform/resolvers/yup';
import * as React from 'react';
import { useForm } from 'react-hook-form';

import { addCarSchema } from '@/components/forms/validation/validatoinSchema';
import Modal from '@/components/modal';

import { Car } from '@/api';

interface AddCarFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (car: Car) => void;
}

interface FormData {
  company: string;
  model: string;
  vin: string;
  year: number;
  color: string;
  price: number;
  availability: string;
}

export default function AddCarForm({
  isOpen,
  onClose,
  onSave,
}: AddCarFormProps) {
  const { register, handleSubmit, reset, formState } = useForm<FormData>({
    resolver: yupResolver(addCarSchema),
  });

  const onSubmit = (data: FormData) => {
    const formattedPrice = `$${data.price}`;

    onSave({
      id: Date.now(),
      car: data.company,
      car_model: data.model,
      car_vin: data.vin,
      car_color: data.color,
      car_model_year: data.year,
      price: formattedPrice,
      availability: data.availability === 'Yes',
    });
    onClose();
    reset();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h2 className='mb-4 text-lg font-semibold'>Add Car</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='mb-4'>
          <label className='mb-1 block'>Company</label>
          <input
            {...register('company')}
            className='w-full rounded border px-4 py-2'
            type='text'
          />
          {formState.errors.company && (
            <p className='text-red-500'>{formState.errors.company.message}</p>
          )}
        </div>
        <div className='mb-4'>
          <label className='mb-1 block'>Model</label>
          <input
            {...register('model')}
            className='w-full rounded border px-4 py-2'
            type='text'
          />
          {formState.errors.model && (
            <p className='text-red-500'>{formState.errors.model.message}</p>
          )}
        </div>
        <div className='mb-4'>
          <label className='mb-1 block'>VIN</label>
          <input
            {...register('vin')}
            className='w-full rounded border px-4 py-2'
            type='text'
          />
          {formState.errors.vin && (
            <p className='text-red-500'>{formState.errors.vin.message}</p>
          )}
        </div>
        <div className='mb-4'>
          <label className='mb-1 block'>Year</label>
          <input
            {...register('year')}
            className='w-full rounded border px-4 py-2'
            type='number'
          />
          {formState.errors.year && (
            <p className='text-red-500'>{formState.errors.year.message}</p>
          )}
        </div>
        <div className='mb-4'>
          <label className='mb-1 block'>Color</label>
          <input
            {...register('color')}
            className='w-full rounded border px-4 py-2'
            type='text'
          />
          {formState.errors.color && (
            <p className='text-red-500'>{formState.errors.color.message}</p>
          )}
        </div>
        <div className='mb-4'>
          <label className='mb-1 block'>Price in $</label>
          <input
            {...register('price')}
            className='w-full rounded border px-4 py-2'
            type='number'
            step={0.01}
          />
          {formState.errors.price && (
            <p className='text-red-500'>{formState.errors.price.message}</p>
          )}
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
