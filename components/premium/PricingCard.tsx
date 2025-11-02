"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import { PremiumButton } from "./PremiumButton";
import { AnimatedSection } from "./AnimatedSection";
import { cn } from "@/lib/utils";

interface PricingTier {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  popular?: boolean;
}

interface PricingCardProps {
  tier: PricingTier;
  index: number;
}

const PricingCard = ({ tier, index }: PricingCardProps) => {
  return (
    <AnimatedSection delay={index * 0.1} className={cn(
      "relative",
      tier.popular && "lg:-mt-8"
    )}>
      {tier.popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
          <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 shadow-lg">
            Most Popular
          </Badge>
        </div>
      )}
      
      <Card className={cn(
        "h-full bg-white/70 backdrop-blur-sm border-white/30 hover:bg-white/80 transition-all duration-300 hover:shadow-xl card-hover",
        tier.popular && "ring-2 ring-blue-500/50 scale-105 shadow-2xl"
      )}>
        <CardHeader className="text-center pb-8">
          <CardTitle className="text-2xl font-bold text-gray-800 mb-2">
            {tier.name}
          </CardTitle>
          <div className="mb-4">
            <span className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {tier.price}
            </span>
            <span className="text-gray-600">{tier.period}</span>
          </div>
          <CardDescription className="text-gray-600">
            {tier.description}
          </CardDescription>
        </CardHeader>
        
        <CardContent className="pb-8">
          <ul className="space-y-3 mb-8">
            {tier.features.map((feature, featureIndex) => (
              <li key={featureIndex} className="flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
          
          <PremiumButton 
            className={cn(
              "w-full",
              tier.popular 
                ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white" 
                : "bg-gray-800 hover:bg-gray-900 text-white"
            )}
            size="lg"
            gradient={tier.popular}
            glow={tier.popular}
          >
            {tier.cta}
          </PremiumButton>
        </CardContent>
      </Card>
    </AnimatedSection>
  );
};

export { PricingCard };