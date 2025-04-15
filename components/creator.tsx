

export default function Creator() {
  return (
    <section className="px-4 md:px-20">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-4xl font-semibold">Top Creator</h3>
          <a href="#" className="text-blue-500 text-xl font-semibold">See all →</a>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {[
            { name: 'Yun Kim', avatar: '/42.jpg', source: 'World News' },
            { name: 'Amy Johnson', avatar: '/76.jpg', source: 'Republic World' },
            { name: 'Sara Lee', avatar: '/64.jpg', source: 'Forbes' },
            { name: 'Tom Clark', avatar: '/32.jpg', source: 'News Today' },
          ].map((creator, i) => (
            <div key={i} className="flex flex-col items-center">
              <img src={creator.avatar} alt={creator.name} className="w-25 h-25 rounded-full mb-3" />
              <div className="flex flex-col items-center">
                <h4 className="text-xl font-semibold mb-1">{creator.name}</h4>
                <p className="text-sm text-blue-500">{creator.source}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
  );
}
