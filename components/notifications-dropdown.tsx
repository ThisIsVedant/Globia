import { HiOutlineX } from 'react-icons/hi';

interface NotificationsDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NotificationsDropdown({ isOpen, onClose }: NotificationsDropdownProps) {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center transition-all duration-300 ease-in-out"
      onClick={onClose}
    >
      <div 
        className="bg-white/90 rounded-lg p-6 w-full max-w-md shadow-xl transition-all duration-300 ease-out transform"
        style={{
          animation: isOpen ? 'modalSlideUp 0.3s ease-out forwards' : 'none'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Notifications</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <HiOutlineX className="w-6 h-6" />
          </button>
        </div>
        
        <div className="text-center py-8">
          <p className="text-gray-500">No new notifications</p>
        </div>
      </div>
    </div>
  );
} 