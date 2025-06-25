"use client";
import React from "react";
import { motion } from "framer-motion";

function DashboardPage() {
  const submittedArtists = [
    {
      id: 1,
      name: "John Doe",
      category: ["Singer", "DJ"],
      location: "New York",
      fee: "$1000 - $2000",
    },
    {
      id: 2,
      name: "Emma Smith",
      category: ["Dancer"],
      location: "Los Angeles",
      fee: "$500 - $1500",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
      <div className="min-h-screen bg-gradient-to-br from-purple-900 to-indigo-900 text-white p-6 md:p-12">
        <div className="max-w-5xl mx-auto bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border border-white/20">
          <h1 className="text-3xl font-bold mb-8 text-center">
            Manager Dashboard
          </h1>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white/10 border border-white/20 text-white rounded-lg overflow-hidden">
              <thead className="bg-purple-800/50">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-bold uppercase">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-bold uppercase">
                    Category
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-bold uppercase">
                    Location
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-bold uppercase">
                    Fee
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-bold uppercase">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {submittedArtists.map((artist) => (
                  <tr
                    key={artist.id}
                    className="hover:bg-white/5 transition duration-200 border-b border-white/10"
                  >
                    <td className="px-6 py-4">{artist.name}</td>
                    <td className="px-6 py-4">{artist.category.join(", ")}</td>
                    <td className="px-6 py-4">{artist.location}</td>
                    <td className="px-6 py-4">{artist.fee}</td>
                    <td className="px-6 py-4">
                      <button className="bg-gradient-to-r from-pink-500 to-purple-600 px-4 py-2 rounded-lg text-sm font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-200 shadow-lg">
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default DashboardPage;
