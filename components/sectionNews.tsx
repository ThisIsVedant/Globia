

export default function SectionNews() {
    return (
        <section className="px-4 md:px-20 py-10" id='creator'>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Business */}
          <div>
            <div className="flex justify-between items-center mb-6">
            <h3 className="text-4xl font-semibold">Business</h3>
            <a href="#" className="text-blue-500 text-xl font-semibold">→</a>
            </div>
            <div className='grid md:grid-cols-2 gap-6'>
            {[
              {
                image: '/stock.jpg',
                title: 'India is first major market to erase losses from April 2 tariffs',
                time: '12 hours ago',
                source: 'India Today',
                category: 'Business',
                readTime: '12 min read'
              },
              {
                image: '/rbi.jpg',
                title: 'Major banks cut lending, deposit rates following RBI’s repo rate cut',
                time: '15 hours ago',
                source: 'India Today',
                category: 'Finance',
                readTime: '11 min read'
              },
            ].map((news, i) => (
              <div key={i} className="mb-6">
                <img src={news.image} alt={news.title} className="rounded-xl mb-2 h-[200px] w-[450px]" />
                <div className="text-xs text-gray-500 mb-1">{news.source} • {news.time}</div>
                <h4 className="text-md font-semibold leading-snug mb-1">{news.title}</h4>
                <div className="text-xs text-blue-500 font-medium">{news.category} <span className="text-gray-500">• {news.readTime}</span></div>
              </div>
            ))}
            </div>
          </div>

          {/* Sport News */}
          <div>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-4xl font-semibold">Sport News</h3>
              <a href="#" className="text-blue-500 text-xl font-semibold">→</a>
            </div>
            <div className='grid md:grid-cols-2 gap-6'>
            {[
              {
                image: '/chess.png',
                title: 'Carlsen Thwarts Nakamura To Win Paris Grand Slam, Caruana Takes 3rd',
                time: '3 hours ago',
                source: 'World News',
                category: 'Sport',
                readTime: '10 min read'
              },
              {
                image: '/batipl.webp',
                title: 'Eye on ‘oversized’ bats, IPL hands umpires a gauge to check during games',
                time: '18 hours ago',
                source: 'India Today',
                category: 'Sport',
                readTime: '4 min read'
              },
            ].map((news, i) => (
              <div key={i} className="mb-6">
                <img src={news.image} alt={news.title} className="rounded-xl mb-2 h-[200px] w-[450px]" />
                <div className="text-xs text-gray-500 mb-1">{news.source} • {news.time}</div>
                <h4 className="text-md font-semibold leading-snug mb-1">{news.title}</h4>
                <div className="text-xs text-blue-500 font-medium">{news.category} <span className="text-gray-500">• {news.readTime}</span></div>
              </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
}   
