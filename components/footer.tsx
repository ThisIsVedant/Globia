import { Button } from "./ui/button";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import {FaXTwitter} from 'react-icons/fa6';

export default function Footer() {
  return (
  <div>
    {/* Subscribe Section */}
    <section className="px-4 md:px-20 py-14" id="subscribe">
        <div className="bg-slate-100 p-8 rounded-xl text-center">
          <p className="uppercase tracking-widest text-slate-500 text-xs mb-3">Get First Update</p>
          <h3 className="text-xl font-semibold mb-4">Get the news in front line by <span className="text-blue-500 font-bold">subscribe✍️</span> our latest updates</h3>
          <div className="flex gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 border border-slate-300 px-4 py-2 rounded-md focus:outline-none"
            />
            <Button className="bg-blue-500 text-white px-5 py-2 rounded-md">Subscribe</Button>
          </div>
        </div>
      </section>
    <footer className="bg-white pt-14 pb-10 px-4 md:px-20 text-sm">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8">
          <div>
            <div className="text-2xl font-bold text-blue-600 mb-2">Globia</div>
            <p className="text-slate-600 mb-4">Craft narratives that ignite inspiration, knowledge, and entertainment.</p>
            <div className="flex gap-3 text-blue-500 cursor-pointer">
              <FaFacebookF className="w-5 h-5" />
              <FaInstagram className="w-5 h-5" />
              <FaXTwitter className="w-5 h-5" />
              <FaLinkedinIn className="w-5 h-5" />
            </div>
          </div>

          {[
            { title: 'Business', items: ['Startup', 'Employee', 'Success', 'Videos', 'Markets'] },
            { title: 'Technology', items: ['Innovate', 'Gadget', 'Innovative Cities', 'Upstarts', 'Future Tech'] },
            { title: 'Travel', items: ['Destinations', 'Food & Drink', 'Stay', 'News', 'Videos'] },
            { title: 'Sports', items: ['Football', 'Tennis', 'Golf', 'Motosports', 'Esports'] },
            { title: 'Entertainment', items: ['Movies', 'Artist', 'Television', 'Influencer', 'Viral'] },
            { title: 'Features', items: ['As Equals', 'Call to Earth', 'Freedom Project', 'Inside Asia', '2 Degrees'] },
            { title: 'Weather', items: ['Climate', 'Strom Tracker', 'Wildfire Tracker', 'Earthquake', 'Video'] },
            { title: 'More', items: ['Design', 'Mentorship', 'Investment', 'Work for Globia', 'Support Us'] },
          ].map((group, i) => (
            <div key={i}>
              <h4 className="font-semibold mb-3">{group.title}</h4>
              <ul className="space-y-1 text-gray-600 cursor-pointer">
                {group.items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-gray-500 text-xs text-center">Copyright © 2025 Globia.</div>
      </footer>
      {/* Scroll to top button */}
      <div className="fixed bottom-6 right-6">
        <button
          id="scrollTopBtn"
          className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-md"
          aria-label="Scroll to top"
        >
          ↑
        </button>
      </div>
    </div>
  );
}
