import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, imageSrc }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
      <div className="relative max-h-screen w-full max-w-4xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white bg-gray-800 rounded-full p-2 focus:outline-none"
        >
          ✕
        </button>
        <img
          src={imageSrc}
          alt="Service Preview"
          className="object-contain max-h-screen w-full"
        />
      </div>
    </div>
  );
};
