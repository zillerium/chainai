"use client";

import Image from "next/image";

export default function AsicCom() {
  return (
    <section className="w-full bg-white py-12 px-6 md:px-12">
      <div className="flex rounded-xl overflow-hidden shadow-lg">
        {/* Image sidebar (narrow, now first) */}
        <div className="relative w-1/3 min-h-[300px]">
          <Image
            src="/dex.svg"
            alt="ASIC illustration"
            fill
            className="object-cover"
          />
        </div>

        {/* Text section (dominant) */}
        <div className="bg-gray-900 text-white p-8 flex-1">
          <p className="uppercase text-sm tracking-wide text-gray-400 mb-2">
            About Blockchain
          </p>
          <h2 className="text-3xl font-extrabold mb-4">
            Application-Specific Integrated Circuits
          </h2>
          <p className="text-gray-300 mb-6">
            Its main goal is to bring 200 million new retail investors to crypto
            by eliminating all fiat obstacles on the way to crypto.
          </p>
          <h3 className="text-lg font-semibold mb-2">Blockchain</h3>
          <p className="text-gray-400">
            High availability and high scalability trade matching engine to
            sustain a deep orderbook on all pairs. Market, limit, stop loss, take
            profit and trailing stop orders.
          </p>
        </div>
      </div>
    </section>
  );
}

