"use client";

import Navbar from "@/components/Navbar/Navbar";
import Image from "next/image";

export default function AboutusCom() {
  return (
    <div className="min-h-screen w-full bg-gray-100 flex flex-col">
      <Navbar />

      {/* Heading Section */}
      <div className="px-6 py-10 text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
          About Us
        </h1>
        <p className="mt-2 text-lg text-gray-600">
          Learn more about our vision and mission
        </p>
      </div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row flex-1 px-6 pb-10 gap-6">
        {/* Left Side */}
        <div className="flex-1 border border-gray-300 bg-white rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Who We Are</h2>
          <p className="text-gray-600">
            We are a team of specialists qualified in blockchain technology, decentralized
            systems, machine learning, and artificial intelligence. This includes supervised
            learning, unsupervised learning and reinforcement learning. Of particular interest
            is the prospect of reinforcement learning in decentralized finance (DeFi) systems
            and swap exchanges. This involves building an agent for the reinforcement and
            learning from interactions with a market maker. We are already testing these ideas
            via{" "}
            <a
              href="https://decoswap.finance"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline font-medium"
            >
              Decoswap
            </a>
            .
          </p>
        </div>

{/* Right Side */}
<div className="flex-1 border border-gray-300 bg-white rounded-lg p-6 shadow-sm flex items-center justify-center">
  <Image
    src="/chainaiabout.svg"
    alt="ChainAI Logo"
    width={800}   // base intrinsic size
    height={600}
    className="w-full h-auto object-contain"
  />
</div>


      </div>
    </div>
  );
}

