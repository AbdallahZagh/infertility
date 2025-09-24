import React from 'react'

const ConfirmationModal = (setIsConfirmModalOpen, handleConfirmDelete, onClose) => {
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6 relative text-center">
          <h4 className="text-xl font-bold mb-4">Confirm Deletion</h4>
          <p className="text-gray-700 mb-6">Are you sure you want to delete this appointment?</p>
          <div className="flex justify-center space-x-4">
            <button onClick={handleConfirmDelete} className="bg-red-600 text-white py-2 px-6 rounded-lg shadow-md hover:bg-red-700 transition-colors">
              Yes, Delete
            </button>
            <button onClick={onClose} className="bg-gray-300 text-gray-800 py-2 px-6 rounded-lg shadow-md hover:bg-gray-400 transition-colors">
              Cancel
            </button>
          </div>
        </div>
      </div>
  )
}

export default ConfirmationModal