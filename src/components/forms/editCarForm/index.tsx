import * as React from 'react';
import { useState } from 'react';

import Modal from '@/components/modal';

import { Car } from '@/api';

export interface EditCarFormProps {
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
  const [color, setColor] = useState(car.car_color);
  const [price, setPrice] = useState(car.price);
  const [availability, setAvailability] = useState(car.availability);

  const handleSave = () => {
    onSave({
      ...car,
      car_color: color,
      price,
      availability,
    });
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h2 className='mb-4 text-lg font-semibold'>Edit Car</h2>
      <div className='mb-4'>
        <label className='mb-1 block'>Company</label>
        <input
          className='w-full rounded border bg-gray-200 px-4 py-2'
          type='text'
          value={car.car}
          disabled
        />
      </div>
      <div className='mb-4'>
        <label className='mb-1 block'>Model</label>
        <input
          className='w-full rounded border bg-gray-200 px-4 py-2'
          type='text'
          value={car.car_model}
          disabled
        />
      </div>
      <div className='mb-4'>
        <label className='mb-1 block'>VIN</label>
        <input
          className='w-full rounded border bg-gray-200 px-4 py-2'
          type='text'
          value={car.car_vin}
          disabled
        />
      </div>
      <div className='mb-4'>
        <label className='mb-1 block'>Year</label>
        <input
          className='w-full rounded border bg-gray-200 px-4 py-2'
          type='text'
          value={car.car_model_year}
          disabled
        />
      </div>
      <div className='mb-4'>
        <label className='mb-1 block'>Color</label>
        <input
          className='w-full rounded border  px-4 py-2'
          type='text'
          value={color}
          onChange={(event) => setColor(event.target.value)}
        />
      </div>
      <div className='mb-4'>
        <label className='mb-1 block'>Price</label>
        <input
          className='w-full rounded border px-4 py-2'
          type='text'
          value={price}
          onChange={(event) => setPrice(event.target.value)}
        />
      </div>
      <div className='mb-4'>
        <label className='mb-1 block'>Availability</label>
        <select
          className='w-full rounded border px-4 py-2'
          value={availability ? 'Yes' : 'No'}
          onChange={(event) => setAvailability(event.target.value === 'Yes')}
        >
          <option>Yes</option>
          <option>No</option>
        </select>
      </div>
      <div className='flex justify-end'>
        <button
          className='mr-2 rounded bg-gray-100 px-4 py-2'
          onClick={onClose}
        >
          Cancel
        </button>
        <button
          className='rounded bg-blue-500 px-4 py-2 text-white'
          onClick={handleSave}
        >
          Save
        </button>
      </div>
    </Modal>
  );
}
