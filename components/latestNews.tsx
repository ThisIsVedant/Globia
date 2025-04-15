
import { Card, CardContent } from "./ui/card";

export default function LatestNews() {
    return (
        <div>
        {/* Featured Article */}
      <section className="px-4 md:px-20">
      <div className="md:flex gap-6">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <div className="rounded-xl overflow-hidden">
            <img
              src="/setphotosdoom.webp"
              alt="doomsday"
              className="w-full h-auto"
            
            />
          </div>
        </div>
        <div className="md:w-1/2 flex flex-col justify-center">
          <div className="flex items-center text-sm text-gray-500 mb-2">
            <span>Marvel</span>
            <span className="mx-2">•</span>
            <span>12 minutes ago</span>
          </div>
          <h2 className="md:text-5xl text-3xl font-semibold mb-2">Avengers 5: New Set Video Reveals The Best Look Yet At The Scale Of Doomsday.</h2>
          <p className="text-gray-700 mb-4">
          A recent video from the set of Avengers: Doomsday just made its way online and gave fans a glimpse at a destroyed battlefield while also showcasing the enormous scope of the....
          </p>
          <div className="text-sm text-blue-500 font-medium">Movies <span className="text-gray-500">• 4 min read</span></div>
        </div>
      </div>
    </section>

    {/* Latest News */}
    <section className="px-4 md:px-20 py-10">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-4xl font-semibold">Latest News</h3>
        <a href="#" className="text-blue-500 text-xl font-semibold">See all →</a>
      </div>
      <div className="grid gap-6 md:grid-cols-4">
        {[
          {
            source: 'IPL',
            logo:"/iplLogo.jpg",
            src:"/DhoniIPL.webp",
            time: '10 hours ago',
            title: "MS Dhoni's vintage performance during IPL 2025",
            subtitle: "MS Dhoni's vintage performance led Chennai Super Kings, He broke an 11-year-old record in the process, surpassing Pravin Tambe to take the No. 1 spot. Dhoni, hence, became the first player in the league's history to be named the Player of the Match at the age of 43",
            category: 'Sport',
            readTime: '4 min read'
          },
          {
            source: 'World News',
            logo:"/worldNews.png",
            src:"/harvard.webp",
            time: '9 hours ago',
            title: "Harvard's $2.2 Billion Funding Frozen For Defying Trump's Campus Demands",
            subtitle: "Harvard University has had its $2.2 billion endowment frozen by the US government, following a decision by the university to defy President Donald Trump's demands to divest from China. The move has sparked a debate over the role of universities in international politics and the impact of US-China relations on higher education.",
            category: 'Education',
            readTime: '5 min read'
          },
          {
            source: 'India Today',
            logo:"/indiaToday.png",
            src:"/aircraft.jpg",
            time: '15 hours ago',
            title: 'Defence sources: Cyber attack on IAF aircraft involved in Myanmar quake relief op',
            subtitle: "A cyber attack on an Indian Air Force aircraft involved in relief operations in Myanmar has been attributed to a group of hackers, according to reports. The attack, which occurred on April 13, targeted the aircraft as it was transporting relief supplies to the quake-hit region. The Indian Air Force has confirmed the incident and is investigating the matter.",
            category: 'Cyber Security',
            readTime: '8 min read'
          },
          {
            source: 'ESPN',
            logo:"/espnLogo.png",
            src:"/espn.jpg",
            time: '22 hours ago',
            title: "Transfer rumors, news: Man Utd eye €30m move for Patrik Schick",
            subtitle: "Manchester United have made contact with Bayer Leverkusen over a potential move for Patrik Schick, according to Sky Sports Deutschland's Patrick Berger. The Red Devils are said to be monitoring the situation of the 29-year-old, amid belief that an offer of around €30 million would be enough to land the Czechia international. Schick, who has scored 17 goals in 26 Bundesliga appearances this season, is also on the radar of clubs in Saudi Arabia.",
            category: 'Sport',
            readTime: '3 min read'
          }
        ].map((news, i) => (
          <Card key={i} className="border-transparent overflow-hidden">
            <div className=" bg-gray-200 w-[250px]" />
            <img src={news.src} alt="IPL" className="h-[250px] object-cover rounded-xl" />
            <CardContent className="p-4">
              <div className="text-xs text-gray-500 mb-1"><img src={news.logo} alt="world" className="w-5 h-6 inline-block mr-2" />{news.source} • {news.time}</div>
              <h3 className="text-lg font-semibold mb-2">{news.title}</h3>
              <p className="text-xs text-gray-500 mb-1">{news.subtitle}</p>
              <div className="text-xs text-blue-500 font-medium">
                {news.category} <span className="text-gray-500">• {news.readTime}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
    </div>
    );
}   
