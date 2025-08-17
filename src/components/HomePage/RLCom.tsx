"use client";

import BlockchainOverviewSection from "@/components/HomePage/BlockchainOverviewSection";
import Navbar from "@/components/Navbar/Navbar";

export default function RLCom() {
  return (
    <div className="min-h-screen w-full bg-gray-100 flex flex-col">
      <Navbar />

      {/* Heading Section */}
      <div className="px-6 py-10 text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
          Reinforcement Learning
        </h1>
        <p className="mt-2 text-lg text-gray-600">
          Learn more about how we have implemented reinforcement learning (RL)
        </p>
      </div>

      <BlockchainOverviewSection />


    </div>
  );
}

