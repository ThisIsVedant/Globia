import { useState, useEffect } from 'react';
import { HiOutlineX } from 'react-icons/hi';

interface WriteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WriteModal({ isOpen, onClose }: WriteModalProps) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setIsClosing(false);
    }
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Handle form submission
    console.log({ title, content });
    handleClose();
  };

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 300); // Match this with the transition duration
  };

  if (!isOpen && !isClosing) return null;

  return (
    <div 
      className={`fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center transition-all duration-300 ease-in-out ${
        isClosing ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div 
        className={`bg-white/90 rounded-lg p-6 w-full max-w-2xl shadow-xl transition-all duration-300 ease-out transform ${
          isClosing 
            ? 'opacity-0 scale-95 translate-y-4' 
            : 'opacity-100 scale-100 translate-y-0'
        }`}
        style={{
          animation: isOpen && !isClosing ? 'modalSlideUp 0.3s ease-out forwards' : 'none'
        }}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Write a News Article</h2>
          <button onClick={handleClose} className="text-gray-500 hover:text-gray-700">
            <HiOutlineX className="w-6 h-6" />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
              Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/50"
              placeholder="Enter your news title"
              required
            />
          </div>
          
          <div>
            <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">
              Content
            </label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/50"
              rows={10}
              placeholder="Write your news content here..."
              required
            />
          </div>
          
          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={handleClose}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100/80 rounded-md hover:bg-gray-200/80"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600/90 rounded-md hover:bg-blue-700/90"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 