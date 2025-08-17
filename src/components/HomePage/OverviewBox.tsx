"use client";

import React from "react";
import { Play, Usb, Database } from "lucide-react";

type OverviewBoxProps = {
  icon: string;
  subtitle: string;
  title: string;
  text: string;
};

// ⬇️ Use React.ReactNode instead of JSX.Element
const iconMap: Record<string, React.ReactNode> = {
  play: <Play className="w-8 h-8 text-red-500" />,
  usb: <Usb className="w-8 h-8 text-red-500" />,
  db: <Database className="w-8 h-8 text-red-500" />,
};

export default function OverviewBox({ icon, subtitle, title, text }: OverviewBoxProps) {
  return (
    <div className="flex flex-col items-center text-center px-6">
      <div className="flex items-center justify-center w-16 h-16 rounded-full border border-gray-300 mb-4">
        {iconMap[icon] ?? <Play className="w-8 h-8 text-gray-400" />}
      </div>
      <p className="text-sm text-gray-500">{subtitle}</p>
      <h3 className="mt-1 text-lg font-bold text-gray-900">{title}</h3>
      <p className="mt-2 text-gray-600 text-sm">{text}</p>
    </div>
  );
}

