"use client";

import React from "react";

type CardProps = {
  title: string;
  text: string;
};

function Card({ title, text }: CardProps) {
  return (
    <div className="flex-1 bg-gray-100 rounded-lg p-6 shadow-sm">
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{text}</p>
    </div>
  );
}

export default function IntroSection() {
  return (
    <section className="py-16 px-6 md:px-12 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {/* Left Card */}
        <Card
          title="Lower Fees"
          text="AMMs can have lower fees using ChainAI."
        />

        {/* Middle Card */}
        <Card
          title="Improved Capital Efficiency"
          text="Better returns for liquidity providers."
        />

        {/* Right Text */}
        <div className="flex flex-col justify-center">
          <p className="text-gray-700 leading-relaxed">
            ChainAI is a new layer for AMMs to bring AI decision making to swaps. This reduces fees and adds to liquidity.
          </p>
        </div>
      </div>
    </section>
  );
}

