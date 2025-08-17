"use client";

import Navbar from "@/components/Navbar/Navbar";
import Image from "next/image";
import FeatureBox from "@/components/HomePage/FeatureBox";
import IntroSection from "@/components/HomePage/IntroSection";

export default function HomePageCom() {
  return (
    <div className="min-h-screen w-full bg-gray-100 flex flex-col">
      <Navbar />

      {/* Full-width hero image */}
      <div className="relative w-full h-[calc(100vh-64px)]">
        <Image
          src="/chainaihome.svg"
          alt="ChainAI Home"
          fill
          priority
          className="object-cover"
        />
      </div>

   {/* Intro Section */}
      <IntroSection />

      {/* Features Section */}
      <section className="bg-white text-gray-900 py-16 px-6 md:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Why Choose ChainAI?</h2>
          <p className="mt-2 text-gray-400">
            ChainAI is a new layer in Automated Market Maker (AMM) architecture to provide AI into swap exchanges.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureBox
            title="Advanced AI"
            icon="lightning"
            text="Advanced learning systems which learning from recorded trades using reinforcement learning."
          />
          <FeatureBox
            title="Blockchain Integrated"
            icon="liquidity"
            text="Integrated into blockchain networks and into a DeFi protocol such as a AMM in a decentralized exchange."
          />
          <FeatureBox
            title="Scalable"
            icon="chart"
            text="Scalable via an off-chain and on-chain integration."
          />
          <FeatureBox
            title="State-of-the-Art"
            icon="toolkit"
            text="Using state-of-the-art methods to distinguish stochastic and arbitrage trades."
          />
          <FeatureBox
            title="Precision"
            icon="fire"
            text="Trained to reach precision limits in finance (fractions of a percent)."
          />
          <FeatureBox
            title="Global"
            icon="users"
            text="A global system via blockchain networks, and the internet."
          />
        </div>
      </section>
    </div>
  );
}

