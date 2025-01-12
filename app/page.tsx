import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-amber-50 relative overflow-hidden">
      {/* Circular Grid Background */}
      <div className="absolute inset-0 opacity-[0.03]" 
        style={{ 
          backgroundImage: 'radial-gradient(circle at 1px 1px, black 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}>
      </div>

      {/* Floating Blobs */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-orange-100 rounded-full mix-blend-multiply filter blur-xl animate-blob opacity-70"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-rose-100 rounded-full mix-blend-multiply filter blur-xl animate-blob2 opacity-70"></div>
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-amber-100 rounded-full mix-blend-multiply filter blur-xl animate-blob3 opacity-70"></div>

      <header className="text-center py-12 relative z-10">
        <h1 className="text-4xl font-bold mb-4 text-orange-950">
          The Learning Hub
        </h1>
        <p className="text-xl text-orange-900/80 max-w-2xl mx-auto">
          Discover a world of interactive learning experiences
        </p>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Student Card */}
          <div className="group rounded-2xl bg-white/40 backdrop-blur-sm p-6 
                        shadow-lg hover:shadow-2xl transition-all duration-500 
                        hover:-translate-y-1 hover:bg-white/50">
            <div className="aspect-square relative mb-4 rounded-xl overflow-hidden">
              <Image 
                src="/1.png" 
                alt="Student learning" 
                fill 
                className="object-cover transform transition-transform duration-500 group-hover:scale-105" 
              />
            </div>
            <h2 className="text-2xl font-semibold mb-3 text-orange-950">Students</h2>
            <p className="text-orange-900/70 mb-6 leading-relaxed">
              Find lessons to learn about the topics that interest you most or strengthen your skills
              through interactive lessons.
            </p>
            <a href="https://student.thelearninghubonline.com/" 
               className="block w-full py-3 px-6 bg-orange-500 text-white rounded-full 
                         text-center transform transition-all duration-300
                         hover:bg-orange-600 hover:shadow-lg hover:scale-[1.02]
                         active:scale-[0.98] active:shadow-md">
              Start Learning
            </a>
          </div>

          {/* Parent Card */}
          <div className="group rounded-2xl bg-white/40 backdrop-blur-sm p-6 
                        shadow-lg hover:shadow-2xl transition-all duration-500 
                        hover:-translate-y-1 hover:bg-white/50">
            <div className="aspect-square relative mb-4 rounded-xl overflow-hidden">
              <Image 
                src="/2.png" 
                alt="Parent guidance" 
                fill 
                className="object-cover transform transition-transform duration-500 group-hover:scale-105" 
              />
            </div>
            <h2 className="text-2xl font-semibold mb-3 text-orange-950">Libarary admin</h2>
            <p className="text-orange-900/70 mb-6 leading-relaxed">
            Manage Library operations like attendance, fees collection etc with easenefit your learner.
            </p>
            <a href="/library-admin" 
               className="block w-full py-3 px-6 bg-orange-500 text-white rounded-full 
                         text-center transform transition-all duration-300
                         hover:bg-orange-600 hover:shadow-lg hover:scale-[1.02]
                         active:scale-[0.98] active:shadow-md">
              Manage Library
            </a>
          </div>

          {/* School Card */}
          <div className="group rounded-2xl bg-white/40 backdrop-blur-sm p-6 
                        shadow-lg hover:shadow-2xl transition-all duration-500 
                        hover:-translate-y-1 hover:bg-white/50">
            <div className="aspect-square relative mb-4 rounded-xl overflow-hidden">
              <Image 
                src="/3.png" 
                alt="School administrator" 
                fill 
                className="object-cover transform transition-transform duration-500 group-hover:scale-105" 
              />
            </div>
            <h2 className="text-2xl font-semibold mb-3 text-orange-950">Near one ?</h2>
            <p className="text-orange-900/70 mb-6 leading-relaxed">
              Learning Hub offers solutions that drive educational results for students at each grade level.
            </p>
            <form action="/search" method="GET" className="relative group/search">
              <input
                type="search"
                name="query"
                placeholder="Search Nearby Libraries..."
                className="w-full py-3 px-6 pr-12 rounded-full border border-orange-200 
                         bg-white/70 backdrop-blur-sm
                         focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20
                         transition-all duration-300
                         group-hover/search:shadow-md group-hover/search:bg-white"
              />
              <button type="submit" className="absolute right-4 top-1/2 -translate-y-1/2 text-orange-400
                             transition-all duration-300 bg-transparent border-none
                             group-hover/search:text-orange-500 group-hover/search:scale-110">
                <span className="material-icons">search</span>
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
