"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DivideIcon } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";
import type { LucideIcon } from "lucide-react"; // ✅ Import the *type* explicitly

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface FeatureCardProps {
  feature: Feature;
  index: number;
}

const FeatureCard = ({ feature, index }: FeatureCardProps) => {
  return (
    <AnimatedSection delay={index * 0.1}>
      <Card className="h-full bg-white/50 backdrop-blur-sm border-white/30 hover:bg-white/60 transition-all duration-300 group hover:shadow-xl card-hover">
        <CardHeader>
          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
            <feature.icon className="w-6 h-6 text-white" />
          </div>
          <CardTitle className="text-xl font-semibold text-gray-800">
            {feature.title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-gray-600 leading-relaxed">
            {feature.description}
          </CardDescription>
        </CardContent>
      </Card>
    </AnimatedSection>
  );
};

export { FeatureCard };
