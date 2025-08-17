"use client";

import OverviewBox from "./OverviewBox";

export default function BlockchainOverviewSection() {
  const items = [
    {
      icon: "play",
      subtitle: "All in one Platform",
      title: "Platform for launching your ICO",
      text: "Every transaction is rated by both parties, and the reputation of each.",
    },
    {
      icon: "usb",
      subtitle: "All in one Platform",
      title: "Using Smart-Contracts",
      text: "Smart contracts are an integral part of the CrypiBIT ecosystem.",
    },
    {
      icon: "db",
      subtitle: "All in one Platform",
      title: "Fixed exchange rates",
      text: "Global coverage and presence in all countries of the World.",
    },
  ];

  return (
    <section className="py-16 px-6 md:px-12 bg-white">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl font-bold text-gray-900">
          Blockchain Company Overview
        </h2>
        <div className="w-12 h-1 bg-gradient-to-r from-blue-400 to-green-400 mx-auto my-3 rounded" />
        <p className="text-gray-600">
          Built on proven security and technological record. A high level of
          digital asset protection and safe record of transactions. Built on
          fair-exchange protocols enabling cryptocurrency atomic swaps to
          mitigate counter-party risk. Advisory and technology services to
          execute third-party ICOs.
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

