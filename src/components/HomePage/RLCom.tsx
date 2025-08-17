"use client";

import BlockchainOverviewSection from "@/components/HomePage/BlockchainOverviewSection";
import Navbar from "@/components/Navbar/Navbar";

export default function RLCom() {
  return (
    <div className="min-h-screen w-full bg-gray-100 flex flex-col">
      <Navbar />

      {/* Heading Section */}

      <BlockchainOverviewSection />


    </div>
  );
}

