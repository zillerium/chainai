"use client";

import OverviewBox from "./OverviewBox";

export default function BlockchainOverviewSection() {
  const items = [
    {
      icon: "play",
      subtitle: "Plugin Design",
      title: "Uses DeFi Composition",
      text: "The ChainAI layer will implement a DeFi composition solution allowing a plugiun.",
    },
    {
      icon: "usb",
      subtitle: "For any DEX",
      title: "Integration via smart contract interfaces",
      text: "The interface integration allows for any decentralized exchange (DEX) to use ChainAI",
    },
    {
      icon: "db",
      subtitle: "All types of trade",
      title: "Volatile assets and Stablecoins",
      text: "Trading history is across all types of constant function market makers.",
    },
  ];

  return (
    <section className="py-16 px-6 md:px-12 bg-white">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl font-bold text-gray-900">
          Reinforcement Learning
        </h2>
        <div className="w-12 h-1 bg-gradient-to-r from-blue-400 to-green-400 mx-auto my-3 rounded" />
        <p className="text-gray-600">
          Reinforcement is type of machine learning which can learn via interactions. We use an agent environment paradigm to learn the best swap trades. These are implemented into a swap layer in the AMM hierarchy.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {items.map((item, idx) => (
          <OverviewBox key={idx} {...item} />
        ))}
      </div>
    </section>
  );
}

