import React, { useEffect, useRef, useState } from 'react';

import SettingsIcon from '@/components/icons/settings';

interface Props {
  children: React.ReactNode;
}

const Dropdown: React.FC<Props> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className='relative text-center' ref={ref}>
      <button onClick={handleToggle}>
        <SettingsIcon />
      </button>
      {isOpen && (
        <ul className='absolute right-0 z-10 mt-2 w-48 rounded-lg bg-white py-2 shadow-md'>
          {React.Children.map(children, (child) =>
            React.cloneElement(child as React.ReactElement, {
              onClick: (event: React.MouseEvent<HTMLElement>) => {
                (child as React.ReactElement).props.onClick(event);
                handleClose();
              },
            })
          )}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
