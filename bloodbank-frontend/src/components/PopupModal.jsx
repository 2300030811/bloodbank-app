import React from 'react';
import { X, CheckCircle, AlertCircle } from 'lucide-react';
import Button from './Button';

const PopupModal = ({ 
  isOpen, 
  onClose, 
  title, 
  message, 
  type = 'info' 
}) => {
  if (!isOpen) return null;

  const icons = {
    success: <CheckCircle className="h-12 w-12 text-green-500" />,
    error: <AlertCircle className="h-12 w-12 text-red-500" />,
    info: <CheckCircle className="h-12 w-12 text-blue-500" />,
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-md w-full p-6">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center space-x-3">
            {icons[type]}
            <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        
        <p className="text-gray-600 mb-6">{message}</p>
        
        <div className="flex justify-end">
          <Button onClick={onClose} variant="primary">
            OK
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PopupModal;
