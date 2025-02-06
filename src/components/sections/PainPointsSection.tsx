export function PainPointsSection() {
  return (
    <section className="container max-w-5xl mx-auto px-4 py-16 relative">
      <div className="absolute inset-0 bg-[#FEFEFF] bg-opacity-50"></div>
      <div className="relative z-10 text-center space-y-8">
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#1A1F71] via-[#3d4190] to-[#6064af] bg-clip-text text-transparent">
          You know your tweets should be videos, but:
        </h2>
        <ul className="space-y-4 text-lg text-gray-700 max-w-2xl mx-auto">
          <li className="flex items-center space-x-3">
            <span className="w-2 h-2 bg-[#A6A3F8] rounded-full"></span>
            <span>Manual editing takes hours</span>
          </li>
          <li className="flex items-center space-x-3">
            <span className="w-2 h-2 bg-[#A6A3F8] rounded-full"></span>
            <span>Your brand voice gets lost in translation</span>
          </li>
          <li className="flex items-center space-x-3">
            <span className="w-2 h-2 bg-[#A6A3F8] rounded-full"></span>
            <span>Each platform needs different formats</span>
          </li>
          <li className="flex items-center space-x-3">
            <span className="w-2 h-2 bg-[#A6A3F8] rounded-full"></span>
            <span>Your content stays trapped on Twitter</span>
          </li>
        </ul>
      </div>
    </section>
  );
}