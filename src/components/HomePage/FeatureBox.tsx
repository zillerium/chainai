import React from "react";
import { Zap, Waves, BarChart2, Package, Flame, Users } from "lucide-react";

type FeatureBoxProps = {
  title: string;
  icon: string;
  text: string;
};

const iconMap: Record<string, React.ReactNode> = {
  lightning: <Zap className="w-6 h-6 text-blue-500" />,
  liquidity: <Waves className="w-6 h-6 text-blue-500" />,
  chart: <BarChart2 className="w-6 h-6 text-blue-500" />,
  toolkit: <Package className="w-6 h-6 text-blue-500" />,
  fire: <Flame className="w-6 h-6 text-blue-500" />,
  users: <Users className="w-6 h-6 text-blue-500" />,
};

export default function FeatureBox({ title, icon, text }: FeatureBoxProps) {
  return (
    <div className="flex flex-col bg-gray-800 text-white rounded-lg p-6 shadow hover:shadow-lg transition">
      <div className="flex items-center gap-3 mb-3">
        {iconMap[icon] ?? <Zap className="w-6 h-6 text-gray-400" />}
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <p className="text-gray-400 text-sm">{text}</p>
    </div>
  );
}

