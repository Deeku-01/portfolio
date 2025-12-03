const TopBar = () => {
  return (
    <header className="hidden md:block fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-8 py-4">
        {/* Logo/Brand Mark */}
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 via-pink-500 to-blue-500 opacity-90 hover:opacity-100 transition-opacity cursor-pointer" />
      </div>
    </header>
  );
};

export default TopBar;
