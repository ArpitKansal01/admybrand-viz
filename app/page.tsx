"use client";

import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Star, Check, ChevronDown, Menu, X, Bot, Target, TrendingUp, Users, Zap, BarChart3, MessageSquare, Shield, Phone, Mail, MapPin, Twitter, Linkedin, Facebook, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const features = [
  {
    icon: Bot,
    title: "AI Content Generator",
    description: "Generate high-converting ad copy, social media posts, and email campaigns in seconds using advanced GPT-4 technology."
  },
  {
    icon: Target,
    title: "Smart Audience Targeting", 
    description: "AI-powered audience analysis identifies your ideal customers and creates laser-focused targeting strategies."
  },
  {
    icon: TrendingUp,
    title: "Performance Optimization",
    description: "Machine learning algorithms continuously optimize your campaigns for maximum ROI and conversion rates."
  },
  {
    icon: Users,
    title: "Customer Journey Mapping",
    description: "Visualize and optimize every touchpoint in your customer's journey with AI-driven insights."
  },
  {
    icon: Zap,
    title: "Real-time Analytics",
    description: "Get instant insights into campaign performance with AI-powered analytics and predictive forecasting."
  },
  {
    icon: BarChart3,
    title: "Brand Intelligence",
    description: "Monitor brand sentiment, competitor analysis, and market trends with advanced AI monitoring tools."
  }
];

const pricingTiers = [
  {
    name: "Starter",
    price: "$29",
    period: "/month",
    description: "Perfect for small businesses getting started with AI marketing",
    features: [
      "5 AI content generations/day",
      "Basic audience targeting",
      "Email support",
      "1 brand monitoring",
      "Standard analytics"
    ],
    cta: "Start Free Trial",
    popular: false
  },
  {
    name: "Professional",
    price: "$79", 
    period: "/month",
    description: "Ideal for growing businesses ready to scale their marketing",
    features: [
      "Unlimited AI content generations",
      "Advanced audience targeting",
      "Priority support",
      "5 brand monitoring",
      "Advanced analytics",
      "A/B testing suite",
      "Custom integrations"
    ],
    cta: "Start Free Trial",
    popular: true
  },
  {
    name: "Enterprise",
    price: "$199",
    period: "/month", 
    description: "For large teams needing enterprise-grade AI marketing tools",
    features: [
      "Everything in Professional",
      "Unlimited brand monitoring", 
      "24/7 phone support",
      "Custom AI model training",
      "White-label solutions",
      "Dedicated account manager",
      "Advanced security features"
    ],
    cta: "Contact Sales",
    popular: false
  }
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechFlow Inc",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
    rating: 5,
    content: "ADmyBRAND AI Suite transformed our marketing strategy. We saw a 300% increase in engagement and 150% boost in conversions within just 3 months."
  },
  {
    name: "Michael Chen",
    role: "CEO",
    company: "GrowthLabs",
    image: "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
    rating: 5,
    content: "The AI content generator alone saves us 20+ hours per week. The quality is incredible and our audience engagement has never been higher."
  },
  {
    name: "Emily Rodriguez",
    role: "Brand Manager", 
    company: "InnovateCorp",
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
    rating: 5,
    content: "Finally, an AI marketing tool that actually understands our brand voice. The results speak for themselves - ROI increased by 250%."
  }
];

const faqs = [
  {
    question: "How does the AI content generation work?",
    answer: "Our AI uses advanced GPT-4 technology trained on millions of high-performing marketing campaigns. It analyzes your brand voice, target audience, and campaign goals to generate personalized, high-converting content in seconds."
  },
  {
    question: "Can I integrate ADmyBRAND with my existing marketing tools?",
    answer: "Yes! We offer seamless integrations with 50+ popular marketing platforms including Google Ads, Facebook Ads, HubSpot, Mailchimp, and more. Our API also allows for custom integrations."
  },
  {
    question: "How accurate is the audience targeting?",
    answer: "Our AI analyzes over 200 data points to identify your ideal customers with 95% accuracy. This includes demographic, psychographic, and behavioral data to create highly targeted audience segments."
  },
  {
    question: "Is my data secure with ADmyBRAND?",
    answer: "Absolutely. We use enterprise-grade encryption, SOC 2 compliance, and GDPR compliance. Your data is never shared with third parties and is stored securely in our protected cloud infrastructure."
  },
  {
    question: "How quickly will I see results?",
    answer: "Most customers see improvements within the first week. On average, our users experience a 40% increase in engagement within 30 days and 150% increase in conversions within 90 days."
  },
  {
    question: "Do you offer a free trial?",
    answer: "Yes! We offer a 14-day free trial with full access to all features. No credit card required. You can cancel anytime during the trial period with no charges."
  },
  {
    question: "What kind of support do you provide?",
    answer: "We offer 24/7 email support for all plans, priority support for Professional plans, and dedicated phone support for Enterprise customers. Plus, access to our comprehensive knowledge base and video tutorials."
  },
  {
    question: "Can the AI learn my specific brand voice?",
    answer: "Yes! Our AI adapts to your unique brand voice and style through machine learning. The more you use it, the better it becomes at matching your specific tone, messaging, and brand personality."
  }
];

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-lg border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                ADmyBRAND AI Suite
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors">Features</a>
              <a href="#pricing" className="text-gray-700 hover:text-blue-600 transition-colors">Pricing</a>
              <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors">Reviews</a>
              <a href="#faq" className="text-gray-700 hover:text-blue-600 transition-colors">FAQ</a>
              <Button variant="outline" size="sm">Sign In</Button>
              <Button size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Start Free Trial
              </Button>
            </div>

            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-lg border-b border-white/20">
            <div className="px-4 py-4 space-y-4">
              <a href="#features" className="block text-gray-700 hover:text-blue-600">Features</a>
              <a href="#pricing" className="block text-gray-700 hover:text-blue-600">Pricing</a>
              <a href="#testimonials" className="block text-gray-700 hover:text-blue-600">Reviews</a>
              <a href="#faq" className="block text-gray-700 hover:text-blue-600">FAQ</a>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="outline" size="sm">Sign In</Button>
                <Button size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600">
                  Start Free Trial
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center max-w-4xl mx-auto relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="mb-6 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 border-blue-200 hover:from-blue-200 hover:to-purple-200">
              🚀 AI-Powered Marketing Revolution
            </Badge>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent leading-tight">
              Transform Your Marketing with
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                AI Superpowers
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Generate high-converting campaigns, target perfect audiences, and optimize performance automatically. 
              Join 10,000+ marketers who've increased their ROI by 300% with our AI-powered marketing suite.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Start Free 14-Day Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                Watch Demo
              </Button>
            </div>

            {/* Hero Visual */}
            <motion.div
              className="relative"
              style={{ y }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-8 shadow-2xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-xl p-6 border border-white/30">
                    <TrendingUp className="w-8 h-8 text-blue-600 mb-3" />
                    <h3 className="font-semibold text-gray-800 mb-2">300% ROI Increase</h3>
                    <p className="text-sm text-gray-600">Average performance boost</p>
                  </div>
                  <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-xl p-6 border border-white/30">
                    <Users className="w-8 h-8 text-purple-600 mb-3" />
                    <h3 className="font-semibold text-gray-800 mb-2">10,000+ Users</h3>
                    <p className="text-sm text-gray-600">Trusted by marketers worldwide</p>
                  </div>
                  <div className="bg-gradient-to-br from-teal-500/20 to-green-500/20 backdrop-blur-sm rounded-xl p-6 border border-white/30">
                    <Zap className="w-8 h-8 text-teal-600 mb-3" />
                    <h3 className="font-semibold text-gray-800 mb-2">20+ Hours Saved</h3>
                    <p className="text-sm text-gray-600">Per week on content creation</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent">
              AI-Powered Features That Drive Results
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to create, optimize, and scale your marketing campaigns with the power of artificial intelligence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-white/50 backdrop-blur-sm border-white/30 hover:bg-white/60 transition-all duration-300 group hover:shadow-xl">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50/50 to-purple-50/50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent">
              Choose Your AI Marketing Plan
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Start free, scale as you grow. All plans include our core AI features with 14-day money-back guarantee.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative ${tier.popular ? 'lg:-mt-8' : ''}`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <Card className={`h-full bg-white/70 backdrop-blur-sm border-white/30 hover:bg-white/80 transition-all duration-300 hover:shadow-xl ${
                  tier.popular ? 'ring-2 ring-blue-500/50 scale-105' : ''
                }`}>
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
                    
                    <Button 
                      className={`w-full ${
                        tier.popular 
                          ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700' 
                          : 'bg-gray-800 hover:bg-gray-900'
                      }`}
                      size="lg"
                    >
                      {tier.cta}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent">
              Loved by Marketing Teams Worldwide
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how businesses like yours are achieving remarkable results with our AI marketing platform.
            </p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="bg-white/70 backdrop-blur-sm border-white/30 shadow-xl">
                <CardContent className="p-8 text-center">
                  <div className="flex justify-center mb-6">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-lg text-gray-700 mb-8 leading-relaxed italic">
                    "{testimonials[currentTestimonial].content}"
                  </p>
                  
                  <div className="flex items-center justify-center space-x-4">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={testimonials[currentTestimonial].image} />
                      <AvatarFallback>
                        {testimonials[currentTestimonial].name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="text-left">
                      <div className="font-semibold text-gray-800">
                        {testimonials[currentTestimonial].name}
                      </div>
                      <div className="text-gray-600">
                        {testimonials[currentTestimonial].role}, {testimonials[currentTestimonial].company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Testimonial Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial 
                      ? 'bg-blue-600 scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50/50 to-blue-50/50">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about ADmyBRAND AI Suite
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-white/70 backdrop-blur-sm border border-white/30 rounded-lg px-6 hover:bg-white/80 transition-all duration-300"
                >
                  <AccordionTrigger className="text-left font-semibold text-gray-800 hover:text-blue-600">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent">
                Ready to Transform Your Marketing?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Join thousands of marketers already using AI to create better campaigns, target perfect audiences, and drive exceptional results.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">hello@admybrand.ai</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">San Francisco, CA</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/70 backdrop-blur-sm border-white/30 shadow-xl">
                <CardHeader>
                  <CardTitle>Get Started Today</CardTitle>
                  <CardDescription>
                    Send us a message and we'll get back to you within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input placeholder="First Name" />
                    <Input placeholder="Last Name" />
                  </div>
                  <Input placeholder="Email Address" type="email" />
                  <Input placeholder="Company Name" />
                  <Textarea placeholder="Tell us about your marketing goals..." className="min-h-[120px]" />
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    Send Message
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">ADmyBRAND AI Suite</span>
              </div>
              <p className="text-gray-400 mb-6">
                The world's most advanced AI-powered marketing platform. Transform your campaigns with artificial intelligence.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-6">Product</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Changelog</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-6">Company</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-6">Legal</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
                <li><a href="#" className="hover:text-white transition-colors">GDPR</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookies</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 ADmyBRAND AI Suite. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm">
              Made with ❤️ using AI-powered development tools
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}