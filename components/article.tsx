

export default function Article() {
  return (
    <section className="px-4 md:px-20 py-10">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-4xl font-semibold">Must Read</h3>
          <a href="#" className="text-blue-500 text-xl font-semibold">See all →</a>
        </div>
        <div className="grid md:grid-cols-4 gap-6">
          {/* Left Article */}
          <div>
            <img src="/voting.jpg" alt="voting" className="rounded-xl mb-3 h-80" />
            <div className="text-xs text-gray-500 mb-1">World News • 16 hours ago</div>
            <h4 className="text-md font-semibold leading-snug mb-1">Post-secondary polling stations to encourage Canadian students to vote..</h4>
            <p className="text-sm text-gray-600 mb-1">In an attempt to increase voter turnout for young Canadians, Elections Canada has opened polling stations at 109 university and college campuses across the country.</p>
            <div className="text-xs text-blue-500 font-medium">Voting <span className="text-gray-500">• 1 min read</span></div>
          </div>

          {/* Center Highlighted Article */}
          <div className="md:col-span-2 bg-black text-white rounded-xl overflow-hidden relative">
            <img src="/hq720.jpg" alt="Entertainment" className="w-full h-80 object-cover opacity-60" />
            <div className="absolute inset-0 p-6 flex flex-col justify-end">
              <div className="text-sm mb-1">World News • 4 hours ago</div>
              <h4 className="text-xl font-bold leading-tight mb-2">Ed Sheeran to collaborate with Arijit Singh on his new album Play...</h4>
              <p className="text-sm mb-2">English singer-songwriter Ed Sheeran has just released Azizam, the latest track from his....</p>
              <div className="text-sm text-blue-500">Entertainment <span className="text-gray-300">• 3 min read</span></div>
            </div>
          </div>

          {/* Right Articles */}
          <div className="space-y-6">
            <div>
              <img src="/bank.avif" alt="bank" className="rounded-xl mb-2" />
              <div className="text-xs text-gray-500 mb-1">Forbes • 23 hours ago</div>
              <h4 className="text-md font-semibold leading-snug mb-1">North American markets end in the red amid concerns of U.S.-China tariffs.</h4>
              <div className="text-xs text-blue-500 font-medium">Finance <span className="text-gray-500">• 6 min read</span></div>
            </div>
            <div>
              <img src="/ev.avif" alt="ev" className="rounded-xl mb-2" />
              <div className="text-xs text-gray-500 mb-1">India Today • 17 hours ago</div>
              <h4 className="text-md font-semibold leading-snug mb-1">Consumer Matters: EV battery replacement cost...</h4>
              <div className="text-xs text-blue-500 font-medium">EV <span className="text-gray-500">• 2 min read</span></div>
            </div>
          </div>
        </div>
      </section>
  );
}
