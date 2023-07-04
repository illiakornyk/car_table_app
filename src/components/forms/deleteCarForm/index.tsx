import Modal from '@/components/modal';

import { Car } from '@/api';

interface DeleteCarFormProps {
  car: Car;
  isOpen: boolean;
  onClose: () => void;
  onDelete: (car: Car) => void;
}

export default function DeleteCarForm({
  car,
  isOpen,
  onClose,
  onDelete,
}: DeleteCarFormProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h2 className='mb-4 text-lg font-semibold'>Delete Car</h2>
      <p>Are you sure you want to delete this car?</p>
      <div className='mt-4 flex justify-end'>
        <button
          type='button'
          className='mr-2 rounded bg-gray-100 px-4 py-2'
          onClick={onClose}
        >
          Cancel
        </button>
        <button
          type='button'
          className='rounded bg-red-500 px-4 py-2 text-white'
          onClick={() => onDelete(car)}
        >
          Delete
        </button>
      </div>
    </Modal>
  );
}
