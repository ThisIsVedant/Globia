import { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { IoIosNotificationsOutline } from "react-icons/io";
import { HiOutlineX, HiOutlineMenu } from "react-icons/hi";
import WriteModal from "./write-modal";


export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isWriteModalOpen, setIsWriteModalOpen] = useState(false);

  return (
    <>
      <nav className="flex items-center justify-between px-4 md:px-20 py-4 relative">
        <div className="text-2xl font-bold text-blue-600 font-mono">Globia</div>

        {/* Desktop Menu */}
        <div className="space-x-6 text-sm font-medium text-slate-700 hidden md:flex font-mono">
          <a href="#stories">Stories</a>
          <a href="#community">Community</a>
          <a href="#creator">Creator</a>
          <a href="#subscribe">Subscribe</a>
        </div>

        {/* Right Icons */}
        <div className="space-x-4 flex items-center">
          <div 
            className="hidden md:flex items-center gap-2 hover:cursor-pointer"
            onClick={() => setIsWriteModalOpen(true)}
          >
            <FaRegEdit className="w-4 h-4" />
            <span>Write</span>
          </div>
          <IoIosNotificationsOutline className="w-5 h-5 hidden md:block hover:cursor-pointer" />
          <div className="w-8 h-8 rounded-full bg-gray-300 hover:cursor-pointer overflow-hidden">
            <img src="/user.jpg" alt="profile" className="w-full h-full object-cover" width={100} height={100} />
          </div>

          {/* Hamburger Icon */}
          <div className="md:hidden">
            {mobileMenuOpen ? (
              <HiOutlineX className="w-6 h-6" onClick={() => setMobileMenuOpen(false)} />
            ) : (
              <HiOutlineMenu className="w-6 h-6" onClick={() => setMobileMenuOpen(true)} />
            )}
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-3 text-sm font-medium text-slate-700 font-mono">
          {[
            { id: 'stories', label: 'Stories' },
            { id: 'community', label: 'Community' },
            { id: 'creator', label: 'Creator' },
            { id: 'subscribe', label: 'Subscribe' },
          ].map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setMobileMenuOpen(false)}
              className="block"
            >
              {item.label}
            </a>
          ))}
          <div 
            className="flex items-center gap-2 mt-4 hover:cursor-pointer"
            onClick={() => {
              setIsWriteModalOpen(true);
              setMobileMenuOpen(false);
            }}
          >
            <FaRegEdit className="w-4 h-4" />
            <span>Write</span>
          </div>
          <div className="flex items-center gap-2">
            <IoIosNotificationsOutline className="w-5 h-5" />
            <span>Notifications</span>
          </div>
        </div>
      )}

      {/* Write Modal */}
      <WriteModal 
        isOpen={isWriteModalOpen} 
        onClose={() => setIsWriteModalOpen(false)} 
      />
    </>
  );
}
