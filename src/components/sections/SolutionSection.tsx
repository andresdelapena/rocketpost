export function SolutionSection() {
  return (
    <section className="container max-w-6xl mx-auto px-4 py-16 relative">
      <div className="absolute inset-0 bg-[#FEFEFF] bg-opacity-50"></div>
      <div className="relative z-10 grid md:grid-cols-2 gap-16">
        <div className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#1A1F71] via-[#3d4190] to-[#6064af] bg-clip-text text-transparent">
            X to IG/Video handles it all:
          </h2>
          <ul className="space-y-4 text-lg text-gray-700">
            <li className="flex items-center space-x-3">
              <span className="w-2 h-2 bg-[#A6A3F8] rounded-full"></span>
              <span>Select tweet → Choose style → Post</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="w-2 h-2 bg-[#A6A3F8] rounded-full"></span>
              <span>AI matches your brand voice</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="w-2 h-2 bg-[#A6A3F8] rounded-full"></span>
              <span>Auto-formats for each platform</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="w-2 h-2 bg-[#A6A3F8] rounded-full"></span>
              <span>Includes captions and music</span>
            </li>
          </ul>
        </div>
        
        <div className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#1A1F71] via-[#3d4190] to-[#6064af] bg-clip-text text-transparent">
            3X your reach and revenue:
          </h2>
          <ul className="space-y-4 text-lg text-gray-700">
            <li className="flex items-center space-x-3">
              <span className="w-2 h-2 bg-[#A6A3F8] rounded-full"></span>
              <span>Expand beyond Twitter automatically</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="w-2 h-2 bg-[#A6A3F8] rounded-full"></span>
              <span>Reach new audiences who prefer video</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="w-2 h-2 bg-[#A6A3F8] rounded-full"></span>
              <span>More visibility = More business opportunities</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}