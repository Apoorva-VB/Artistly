import React from "react";
import Link from "next/link";

function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <header className="container mx-auto px-4 py-8">
        {/* Top Navigation */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 bg-gradient-to-r from-pink-400 to-purple-300 bg-clip-text text-transparent">
              Welcome to Artistly.com
            </h1>
            <p className="text-xl text-gray-300">
              Connect with performing artists and event planners
            </p>
          </div>

          <nav className="flex flex-wrap gap-4 items-center">
            <Link
              href="/artists"
              className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full font-semibold hover:from-pink-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              Explore Artists
            </Link>
            <span className="text-gray-400 hidden md:inline">|</span>
            <Link
              href="/onBoarding"
              className="px-6 py-3 border-2 border-purple-400 text-purple-300 rounded-full font-semibold hover:bg-purple-400 hover:text-white transform hover:scale-105 transition-all duration-200"
            >
              Onboard Artist
            </Link>
            <span className="text-gray-400 hidden md:inline">|</span>
            <a
              href="/dashboard"
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-full font-semibold hover:from-blue-600 hover:to-cyan-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              Go to Dashboard
            </a>
          </nav>
        </div>

        {/* Hero Section */}
        <div className="text-center mb-16 py-16 px-8 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Find The Perfect Artist For Your Event
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Connecting Event Planners with Top Performing Artists
          </p>
          <Link
            href="/artists"
            className="inline-block px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-600 text-white text-lg font-bold rounded-full hover:from-orange-600 hover:to-pink-700 transform hover:scale-110 transition-all duration-300 shadow-2xl hover:shadow-orange-500/25"
          >
            Explore Artists Now
          </Link>
        </div>

        {/* Artist Categories */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-white mb-12">
            Artist Categories
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="group cursor-pointer">
              <div className="bg-gradient-to-br from-pink-500 to-rose-600 p-8 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border border-pink-400/30">
                <div className="text-4xl mb-4">🎤</div>
                <div className="text-xl font-bold text-white group-hover:text-pink-100">
                  Singers
                </div>
              </div>
            </div>

            <div className="group cursor-pointer">
              <div className="bg-gradient-to-br from-purple-500 to-indigo-600 p-8 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border border-purple-400/30">
                <div className="text-4xl mb-4">💃</div>
                <div className="text-xl font-bold text-white group-hover:text-purple-100">
                  Dancers
                </div>
              </div>
            </div>

            <div className="group cursor-pointer">
              <div className="bg-gradient-to-br from-blue-500 to-cyan-600 p-8 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border border-blue-400/30">
                <div className="text-4xl mb-4">🎙️</div>
                <div className="text-xl font-bold text-white group-hover:text-blue-100">
                  Speakers
                </div>
              </div>
            </div>

            <div className="group cursor-pointer">
              <div className="bg-gradient-to-br from-green-500 to-teal-600 p-8 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border border-green-400/30">
                <div className="text-4xl mb-4">🎧</div>
                <div className="text-xl font-bold text-white group-hover:text-green-100">
                  DJs
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default HomePage;
