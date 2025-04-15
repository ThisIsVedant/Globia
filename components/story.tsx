

export default function Story() {
  return (
    <section className="px-4 md:px-20 py-10" id="stories">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-4xl font-semibold">Globia Story</h3>
          <a href="#" className="text-blue-500 text-xl font-semibold">See all →</a>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-2">
          {[
            { username: 'Google', avatar: '/images/google.png' },
            { username: 'CSK', avatar: '/images/chennai.png' },
            { username: 'ESPN', avatar: '/espnLogo.png' },
            { username: 'World News', avatar: '/worldNews.png' },
            { username: 'Nike', avatar: '/images/nike.png' },
            { username: 'Apple', avatar: '/images/apple.png' },
            { username: 'Samsung', avatar: '/indiaToday.png' },
            { username: 'Xiaomi', avatar: '/images/xiaomi.jpg' },
            { username: 'Puma', avatar: '/images/puma.png' },
            { username: 'Durex', avatar: '/images/durex.png' },
          ].map((story, i) => (
            <div key={i} className="flex flex-col items-center text-sm p-1">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-teal-400 p-1 hover:scale-105 transition-all duration-300 hover:cursor-pointer">
                <img
                  src={story.avatar}
                  alt={story.username}
                  className="w-full h-full object-cover rounded-full bg-white p-0.5"
                />
              </div>
              <span className="mt-2 text-xs truncate w-20 text-center">{story.username}</span>
            </div>
          ))}
        </div>
      </section>
  );
}
