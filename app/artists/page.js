"use client";
import { useState } from "react";
import { motion } from "framer-motion";

function ArtistsPage() {
  const artists = [
    {
      id: 1,
      name: "John Doe",
      category: "Singer",
      price: "$500 - $1000",
      location: "New York",
    },
    {
      id: 2,
      name: "Emma Smith",
      category: "Dancer",
      price: "$300 - $700",
      location: "Los Angeles",
    },
    {
      id: 3,
      name: "David Lee",
      category: "DJ",
      price: "$800 - $1500",
      location: "Chicago",
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [priceFilter, setPriceFilter] = useState("");
  const [selectedArtist, setSelectedArtist] = useState(null);

  const filteredArtists = artists.filter((artist) => {
    return (
      (selectedCategory === "" || artist.category === selectedCategory) &&
      (locationFilter === "" || artist.location === locationFilter) &&
      (priceFilter === "" || artist.price === priceFilter)
    );
  });

  const handleAskQuote = (artist) => {
    setSelectedArtist(artist);
  };

  const closeModal = () => {
    setSelectedArtist(null);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-6 text-white">
        <h1 className="text-4xl font-bold text-center mb-12">
          Artists Listing
        </h1>

        {/* Filters */}
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 mb-10 max-w-4xl mx-auto shadow-lg">
          <h3 className="text-2xl font-semibold mb-4 text-white">Filters</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <select
              className="bg-purple-800 text-white p-3 rounded-lg"
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="">All Categories</option>
              <option value="Singer">Singer</option>
              <option value="Dancer">Dancer</option>
              <option value="DJ">DJ</option>
            </select>

            <select
              className="bg-purple-800 text-white p-3 rounded-lg"
              value={locationFilter}
              onChange={(e) => setLocationFilter(e.target.value)}
            >
              <option value="">All Locations</option>
              <option value="New York">New York</option>
              <option value="Los Angeles">Los Angeles</option>
              <option value="Chicago">Chicago</option>
            </select>

            <select
              className="bg-purple-800 text-white p-3 rounded-lg"
              value={priceFilter}
              onChange={(e) => setPriceFilter(e.target.value)}
            >
              <option value="">All Prices</option>
              <option value="$500 - $1000">$500 - $1000</option>
              <option value="$300 - $700">$300 - $700</option>
              <option value="$800 - $1500">$800 - $1500</option>
            </select>
          </div>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-3 sm:grid-cols-2">
          {filteredArtists.map((artist) => (
            <div
              key={artist.id}
              className="bg-white/10 p-6 rounded-xl shadow-lg border border-white/20 hover:scale-105 transform transition duration-300"
            >
              <h2 className="text-xl font-bold mb-2 text-pink-300">
                {artist.name}
              </h2>
              <p className="text-sm text-gray-200 mb-1">
                <strong>Category:</strong> {artist.category}
              </p>
              <p className="text-sm text-gray-200 mb-1">
                <strong>Price:</strong> {artist.price}
              </p>
              <p className="text-sm text-gray-200 mb-4">
                <strong>Location:</strong> {artist.location}
              </p>
              <button
                className="px-5 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full font-semibold hover:from-pink-600 hover:to-purple-700 transition duration-200 shadow-lg"
                onClick={() => handleAskQuote(artist)}
              >
                Ask for Quote
              </button>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedArtist && (
          <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
            <div className="bg-white text-black p-6 rounded-xl w-11/12 max-w-md shadow-2xl border border-gray-300">
              <h2 className="text-xl font-bold mb-2">{selectedArtist.name}</h2>
              <p>
                <strong>Category:</strong> {selectedArtist.category}
              </p>
              <p>
                <strong>Location:</strong> {selectedArtist.location}
              </p>
              <p>
                <strong>Fee:</strong> {selectedArtist.price}
              </p>
              <div className="mt-6 flex justify-end gap-4">
                <button
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
                  onClick={() => {
                    alert("Enquiry submitted!");
                    closeModal();
                  }}
                >
                  Enquire
                </button>
                <button
                  className="text-gray-600 hover:text-black underline"
                  onClick={closeModal}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default ArtistsPage;
