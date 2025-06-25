"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { motion } from "framer-motion";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  bio: yup.string().required("Bio is required"),
  category: yup.array().min(1, "Select at least one category"),
  languages: yup.array().min(1, "Select at least one language"),
  fee: yup.string().required("Fee range is required"),
  location: yup.string().required("Location is required"),
});

function OnboardingPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("Submitted Data:", data);
    alert("Artist successfully submitted!");
    reset();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
      <div className="min-h-screen bg-gradient-to-br from-purple-900 to-indigo-900 text-white p-6 md:p-12">
        <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border border-white/20">
          <h1 className="text-3xl font-bold mb-6 text-center text-white">
            Artist Onboarding Form
          </h1>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label className="block mb-1 font-semibold">Name:</label>
              <input
                {...register("name")}
                className="w-full p-3 rounded-lg bg-white/20 placeholder-gray-300 text-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
                placeholder="Enter artist name"
              />
              <p className="text-red-400 text-sm">{errors.name?.message}</p>
            </div>

            <div>
              <label className="block mb-1 font-semibold">Bio:</label>
              <textarea
                {...register("bio")}
                rows={4}
                className="w-full p-3 rounded-lg bg-white/20 placeholder-gray-300 text-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
                placeholder="Write a short bio"
              />
              <p className="text-red-400 text-sm">{errors.bio?.message}</p>
            </div>

            <div>
              <label className="block mb-2 font-semibold">Category:</label>
              <div className="flex gap-6 flex-wrap">
                {["Singer", "Dancer", "DJ"].map((cat) => (
                  <label key={cat} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      value={cat}
                      {...register("category")}
                      className="accent-pink-500"
                    />
                    {cat}
                  </label>
                ))}
              </div>
              <p className="text-red-400 text-sm">{errors.category?.message}</p>
            </div>

            <div>
              <label className="block mb-2 font-semibold">Languages:</label>
              <div className="flex gap-6 flex-wrap">
                {["English", "Spanish", "French"].map((lang) => (
                  <label key={lang} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      value={lang}
                      {...register("languages")}
                      className="accent-blue-500"
                    />
                    {lang}
                  </label>
                ))}
              </div>
              <p className="text-red-400 text-sm">
                {errors.languages?.message}
              </p>
            </div>

            <div>
              <label className="block mb-1 font-semibold">Fee Range:</label>
              <select
                {...register("fee")}
                className="w-full p-3 rounded-lg bg-white/20 text-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Fee</option>
                <option value="$500 - $1000">$500 - $1000</option>
                <option value="$1000 - $2000">$1000 - $2000</option>
                <option value="$2000 - $5000">$2000 - $5000</option>
              </select>
              <p className="text-red-400 text-sm">{errors.fee?.message}</p>
            </div>

            <div>
              <label className="block mb-1 font-semibold">Location:</label>
              <input
                {...register("location")}
                className="w-full p-3 rounded-lg bg-white/20 text-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter city"
              />
              <p className="text-red-400 text-sm">{errors.location?.message}</p>
            </div>

            <div>
              <label className="block mb-1 font-semibold">Profile Image:</label>
              <input
                type="file"
                {...register("profileImage")}
                className="text-white"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-xl"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
}

export default OnboardingPage;
