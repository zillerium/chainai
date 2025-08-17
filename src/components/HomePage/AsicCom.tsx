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
            About Swaps
          </p>
          <h2 className="text-3xl font-extrabold mb-4">
            Decentralized Exchanges (DEXs) and Automated Market Makers (AMMs)
          </h2>
          <p className="text-gray-300 mb-6">
	    DEXs are made of components (Liquidity Pools, LPs, and AMMs). A swap is done when liquidity is transferred from the LP to a trader. These can lead to losses in the LP due to inefficiencies in trade.

          </p>
          <h3 className="text-lg font-semibold mb-2">Losses</h3>
          <p className="text-gray-400">
	   When the DEX is inefficient, the liquidity providers have impermanent loss as the rebalancing in the LP happens. Traders have losses due to price movements in the AMMs. These problems can be solved by dynamic AMMs.

          </p>
        </div>
      </div>
    </section>
  );
}

