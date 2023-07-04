import * as React from 'react';
import { useEffect } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div className='fixed inset-0 z-50 flex items-center justify-center'>
        <div className='w-4/12 rounded bg-white p-8 shadow-lg'>{children}</div>
      </div>
      <div
        className='fixed inset-0 bg-black opacity-50'
        onClick={onClose}
      ></div>
    </>
  );
}
