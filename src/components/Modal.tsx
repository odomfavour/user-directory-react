import { X } from 'lucide-react';
import type { MouseEvent } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

const Modal = ({ isOpen, onClose, title, children }: ModalProps) => {
  if (!isOpen) return null;

  const handleOverlayClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/60 flex items-start justify-center z-50 p-4 pt-10 overflow-y-auto"
      onClick={handleOverlayClick}
    >
      <div
        className="bg-white rounded-2xl max-w-md w-full p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-6">
          {title && <h2 className="text-2xl font-bold">{title}</h2>}
          <button onClick={onClose} className="cursor-pointer">
            <X className="h-6 w-6 text-gray-600" />
          </button>
        </div>
        <div>{children}</div>
        <button
          onClick={onClose}
          className="mt-6 w-full cursor-pointer bg-primary text-white py-3 rounded-lg hover:bg-indigo-700"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
