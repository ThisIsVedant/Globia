

export default function Editor() {
    return (
        <section className="px-4 md:px-20 py-10" id="community">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-4xl font-semibold">Editor’s Pick</h3>
          <a href="#" className="text-blue-500 text-xl font-semibold">See all →</a>
        </div>

        {/* Featured Editor Pick */}
        <div className="relative mb-6 rounded-xl overflow-hidden">
          <img src="/iphone16.png" alt="iPhone 15" className="w-full h-[600px] object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-6 flex flex-col justify-end text-white">
            <div className="text-sm mb-1">Forbes • 2 hours ago</div>
            <h4 className="text-2xl font-semibold leading-tight mb-2">Apple iPhone 16, iPhone 16 Pro And iPhone 15 Prices Cut In New Deals</h4>
            <p className="text-sm mb-3">Amazon has new price cuts for iPhones which take select models right back to their Spring Sale lows. The discounts apply to the the iPhone 16, iPhone 16 Plus, and the iPhone 16 Pro versions, too. In fact, all the phones in the iPhone 16 series are represented apart from the newest of all, the iPhone 16e, which is the most affordable of the range. What’s more, there are bargains to be had if you’d like the iPhone 15 or iPhone 15 Plus, as well.</p>
            <div className="text-sm text-blue-500">Technology <span className="text-gray-300">• 4 min read</span></div>
          </div>
        </div>

        {/* More Picks */}
        <div className="grid md:grid-cols-4 gap-6">
          {[
            {
              image: '/chatgpt.jpeg',
              source: 'World News',
              time: '10 hours ago',
              title: 'ChatGPT is now creating cute plushy images as Ghibli art trend dries down- Know how it works',
              category: 'Technology',
              readTime: '7 min read'
            },
            {
              image: '/xai.jpg',
              source: 'BBC News',
              time: '13 hours ago',
              title: 'The xAI–X merger is a good deal — if you’re betting on Musk’s empire',
              category: 'Work',
              readTime: '11 min read'
            },
            {
              image: '/disney.webp',
              source: 'CNN',
              time: '18 hours ago',
              title: 'Disney faces US investigation over DEI practices',
              category: 'Technology',
              readTime: '6 min read'
            },
            {
              image: '/brokerage.jpg',
              source: 'CNN',
              time: '4 hours ago',
              title: 'Brokerage firm employee booked for defrauding customer',
              category: 'Culture',
              readTime: '15 min read'
            },
          ].map((pick, i) => (
            <div key={i}>
              <img src={pick.image} alt={pick.title} className="rounded-xl mb-3 h-[200px] w-[450px]" />
              <div className="text-xs text-gray-500 mb-1">{pick.source} • {pick.time}</div>
              <h4 className="text-md font-semibold leading-snug mb-1">{pick.title}</h4>
              <div className="text-xs text-blue-500 font-medium">{pick.category} <span className="text-gray-500">• {pick.readTime}</span></div>
            </div>
          ))}
        </div>
      </section>
    );
}   
