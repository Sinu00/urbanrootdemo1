'use client'
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Mail, Home, Building, TreePine, Waves, Star, Users, Award, Clock, Menu, X, ChevronDown, ArrowRight, Play, Shield, TrendingUp } from "lucide-react"

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      {/* Enhanced Header with Mobile Menu */}
      <header className={`px-4 lg:px-6 h-16 flex items-center border-b fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white'
      }`}>
        <div className="flex items-center justify-center cursor-pointer" onClick={() => scrollToSection('hero')}>
          <Home className="h-8 w-8 text-green-600" />
          <div className="ml-2 relative">
            <span className="text-2xl font-semibold text-gray-800 tracking-tight">UrbanRoot</span>
            <div className="text-xs text-gray-400 font-medium tracking-wide absolute -bottom-3 right-0">By A&A</div>
          </div>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="ml-auto hidden md:flex gap-6">
          {[
            { name: 'Properties', id: 'properties' },
            { name: 'Services', id: 'services' },
            { name: 'About', id: 'about' },
            { name: 'Contact', id: 'contact' }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-sm font-medium hover:text-green-600 transition-colors duration-300 relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="ml-auto md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={toggleMenu}></div>
          <div className="fixed top-16 left-0 right-0 bg-white border-b shadow-xl animate-in slide-in-from-top duration-300">
            <nav className="flex flex-col p-4 space-y-4">
              {[
                { name: 'Properties', id: 'properties' },
                { name: 'Services', id: 'services' },
                { name: 'About', id: 'about' },
                { name: 'Contact', id: 'contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left py-2 px-4 text-lg font-medium hover:text-green-600 hover:bg-green-50 rounded-lg transition-all duration-300"
                >
                  {item.name}
                </button>
              ))}
            </nav>
          </div>
        </div>
      )}

      <main className="flex-1">
        {/* Enhanced Hero Section */}
        <section id="hero" className="w-full min-h-screen flex items-center bg-gradient-to-br from-green-50 via-blue-50 to-emerald-50 relative overflow-hidden pt-16">
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-32 h-32 sm:w-72 sm:h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
            <div className="absolute top-40 right-10 w-32 h-32 sm:w-72 sm:h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-20 left-20 w-32 h-32 sm:w-72 sm:h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
          </div>

          <div className="container px-4 md:px-6 relative z-10 py-8 md:py-12">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4 md:space-y-6 text-center lg:text-left order-2 lg:order-1">
                <div className="space-y-3 md:space-y-4">
                  <Badge variant="secondary" className="w-fit mx-auto lg:mx-0 animate-in fade-in slide-in-from-bottom duration-700">
                    <MapPin className="w-3 h-3 mr-1" />
                    Kasaragod, Kerala
                  </Badge>
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tighter bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent animate-in fade-in slide-in-from-bottom duration-700 delay-200 leading-tight">
                    Your Dream Home in {"God's Own Country"}
                  </h1>
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed mx-auto lg:mx-0 animate-in fade-in slide-in-from-bottom duration-700 delay-400 max-w-[600px]">
                    Discover premium properties in Kasaragod - from beachfront villas to hill station retreats. Your
                    trusted local real estate partner with over 15 years of experience.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start animate-in fade-in slide-in-from-bottom duration-700 delay-600">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group text-sm sm:text-base">
                    View Properties
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button variant="outline" size="lg" className="hover:bg-green-50 transform hover:scale-105 transition-all duration-300 group text-sm sm:text-base">
                    <Play className="mr-2 h-4 w-4" />
                    Virtual Tour
                  </Button>
                </div>
                
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 md:gap-6 text-xs sm:text-sm text-gray-600 animate-in fade-in slide-in-from-bottom duration-700 delay-800">
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="font-medium">4.8/5</span>
                    <span className="hidden sm:inline">(200+ reviews)</span>
                    <span className="sm:hidden">(200+)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-green-600" />
                    <span>RERA Certified</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-center animate-in fade-in slide-in-from-right duration-700 delay-300 order-1 lg:order-2">
                <div className="relative group w-full max-w-md lg:max-w-none">
                  <img
                    src="/heroimage1.jpg"
                    width="600"
                    height="400"
                    alt="Beautiful property in Kasaragod"
                    className="relative mx-auto aspect-video overflow-hidden rounded-xl object-cover shadow-2xl transform group-hover:scale-105 transition-all duration-500 w-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Stats Section */}
        <section className="w-full py-16 bg-white relative">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { number: '500+', label: 'Properties Sold', icon: Building },
                { number: '15+', label: 'Years Experience', icon: Award },
                { number: '1000+', label: 'Happy Clients', icon: Users },
                { number: '50+', label: 'Active Listings', icon: TrendingUp }
              ].map((stat, index) => (
                <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                  <stat.icon className="h-8 w-8 mx-auto mb-3 text-green-600 group-hover:text-green-700 transition-colors" />
                  <div className="text-3xl lg:text-4xl font-bold text-green-600 mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Featured Properties */}
        <section id="properties" className="w-full py-16 lg:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <Badge variant="outline" className="text-green-600 border-green-600">
                Premium Collection
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl lg:text-5xl">Featured Properties</h2>
              <p className="max-w-[800px] text-gray-600 md:text-lg">
                Handpicked premium properties across Kasaragod - from coastal homes to mountain retreats
              </p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
              {[
                {
                  image: "/beachfrontvilla.jpg ",
                  title: "Beachfront Villa",
                  price: "₹2.5 Cr",
                  location: "Bekal Beach, Kasaragod",
                  specs: ["4 BHK", "3500 sq ft", "Sea View"],
                  badge: { text: "Featured", color: "bg-green-600" }
                },
                {
                  image: "/hillstation.jpg",
                  title: "Hill Station Home",
                  price: "₹1.8 Cr",
                  location: "Ranipuram Hills",
                  specs: ["3 BHK", "2800 sq ft", "Valley View"],
                  badge: { text: "New", color: "bg-blue-600" }
                },
                {
                  image: "/Traditionalkeralahome.jpg",
                  title: "Traditional Kerala Home",
                  price: "₹95 L",
                  location: "Kanhangad Town",
                  specs: ["2 BHK", "1800 sq ft", "Heritage"],
                  badge: null
                }
              ].map((property, index) => (
                <Card key={index} className="overflow-hidden group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg">
                  <div className="relative overflow-hidden">
                    <img
                      src={property.image}
                      width="400"
                      height="300"
                      alt={property.title}
                      className="aspect-video object-cover w-full group-hover:scale-110 transition-transform duration-500"
                    />
                    {property.badge && (
                      <Badge className={`absolute top-3 left-3 ${property.badge.color} text-white border-0`}>
                        {property.badge.text}
                      </Badge>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center justify-between text-lg">
                      {property.title}
                      <span className="text-green-600 font-bold">{property.price}</span>
                    </CardTitle>
                    <CardDescription className="flex items-center gap-1 text-gray-500">
                      <MapPin className="w-4 h-4" />
                      {property.location}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex justify-between text-sm text-gray-600 mb-4">
                      {property.specs.map((spec, i) => (
                        <span key={i} className="bg-gray-100 px-2 py-1 rounded-full text-xs font-medium">
                          {spec}
                        </span>
                      ))}
                    </div>
                    <Button 
                      className="w-full bg-transparent hover:bg-green-600 hover:text-white border-green-600 text-green-600 transition-all duration-300 group-hover:shadow-lg" 
                      variant="outline"
                    >
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Services Section */}
        <section id="services" className="w-full py-16 lg:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <Badge variant="outline" className="text-green-600 border-green-600">
                Our Expertise
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl lg:text-5xl">Our Services</h2>
              <p className="max-w-[800px] text-gray-600 md:text-lg">
                Comprehensive real estate solutions tailored for Kasaragod's unique market
              </p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
              {[
                {
                  icon: Building,
                  title: "Property Sales",
                  description: "Buy and sell residential and commercial properties with expert guidance and market insights.",
                  features: ["Market Analysis", "Legal Support", "Documentation"]
                },
                {
                  icon: Home,
                  title: "Rental Services",
                  description: "Find perfect rental properties or manage your rental investments with our comprehensive services.",
                  features: ["Tenant Screening", "Property Management", "Maintenance Support"]
                },
                {
                  icon: TreePine,
                  title: "Land Development",
                  description: "Agricultural land, plots, and development projects across Kasaragod's scenic locations.",
                  features: ["Site Planning", "Approval Assistance", "Investment Guidance"]
                }
              ].map((service, index) => (
                <div key={index} className="group p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white hover:from-green-50 hover:to-emerald-50 border border-gray-100 hover:border-green-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <service.icon className="h-12 w-12 text-green-600 mb-6 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl font-bold mb-3 group-hover:text-green-700 transition-colors">{service.title}</h3>
                  <p className="text-gray-600 mb-4 line-height-relaxed">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-500">
                        <div className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced About Section */}
        <section id="about" className="w-full py-16 lg:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 items-center max-w-6xl mx-auto">
              <div className="flex flex-col justify-center space-y-6">
                <div className="space-y-4">
                  <Badge variant="outline" className="text-green-600 border-green-600 w-fit">
                    About Us
                  </Badge>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl lg:text-5xl">
                    Local Expertise, Global Standards
                  </h2>
                  <p className="text-gray-600 md:text-lg leading-relaxed">
                    Born and raised in Kasaragod, we understand the unique charm of this coastal district. From the
                    historic Bekal Fort to the pristine beaches and lush Western Ghats, we help you find properties that
                    match your lifestyle and investment goals.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { icon: Users, text: "Local Network" },
                    { icon: Award, text: "Certified Agents" },
                    { icon: Clock, text: "24/7 Support" },
                    { icon: Waves, text: "Coastal Specialist" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3 group">
                      <div className="p-2 rounded-lg bg-green-100 group-hover:bg-green-200 transition-colors">
                        <item.icon className="h-5 w-5 text-green-600" />
                      </div>
                      <span className="text-sm font-medium">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center justify-center">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                  <img
                    src="/kasaragodlandscape.jpg"
                    width="600"
                    height="400"
                    alt="Kasaragod landscape"
                    className="relative mx-auto aspect-video overflow-hidden rounded-xl object-cover shadow-2xl transform group-hover:scale-105 transition-all duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Contact Section */}
        <section id="contact" className="w-full py-16 lg:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <Badge variant="outline" className="text-green-600 border-green-600">
                Contact Us
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl lg:text-5xl">Get In Touch</h2>
              <p className="max-w-[800px] text-gray-600 md:text-lg">
                Ready to find your dream property in Kasaragod? Contact our expert team today.
              </p>
            </div>
            
            <div className="grid gap-12 lg:grid-cols-2 max-w-6xl mx-auto">
              <div className="space-y-8">
                {[
                  {
                    icon: Phone,
                    title: "Call Us",
                    content: "+91 98765 43210",
                    subContent: "Available 24/7"
                  },
                  {
                    icon: Mail,
                    title: "Email Us",
                    content: "info@kasaragodproperties.com",
                    subContent: "We'll respond within 2 hours"
                  },
                  {
                    icon: MapPin,
                    title: "Visit Our Office",
                    content: "Main Road, Near Bus Stand",
                    subContent: "Kasaragod, Kerala 671121"
                  }
                ].map((contact, index) => (
                  <div key={index} className="flex items-start gap-4 group hover:bg-gray-50 p-4 rounded-xl transition-all duration-300">
                    <div className="p-3 rounded-lg bg-green-100 group-hover:bg-green-200 transition-colors">
                      <contact.icon className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-lg mb-1">{contact.title}</div>
                      <div className="text-gray-700 font-medium">{contact.content}</div>
                      <div className="text-gray-500 text-sm">{contact.subContent}</div>
                    </div>
                  </div>
                ))}
              </div>
              
              <Card className="shadow-xl border-0">
                <CardHeader>
                  <CardTitle className="text-xl">Send us a message</CardTitle>
                  <CardDescription>Fill out the form below and we'll get back to you within 24 hours.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input placeholder="First Name" className="border-gray-200 focus:border-green-500" />
                    <Input placeholder="Last Name" className="border-gray-200 focus:border-green-500" />
                  </div>
                  <Input type="email" placeholder="Email" className="border-gray-200 focus:border-green-500" />
                  <Input placeholder="Phone Number" className="border-gray-200 focus:border-green-500" />
                  <Input placeholder="Property Interest" className="border-gray-200 focus:border-green-500" />
                  <textarea
                    className="w-full min-h-[100px] px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:border-green-500 resize-none"
                    placeholder="Tell us more about your requirements..."
                  ></textarea>
                  <Button className="w-full bg-green-600 hover:bg-green-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                    Send Message
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Enhanced Footer */}
      <footer className="w-full py-8 bg-gray-900 text-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="md:col-span-2">
              <div className="flex items-center mb-4">
                <Home className="h-8 w-8 text-green-500" />
                <div className="ml-2 relative">
                  <span className="text-2xl font-semibold text-white tracking-tight">UrbanRoot</span>
                  <div className="text-xs text-gray-400 font-medium tracking-wide absolute -bottom-3 right-0">By A&A</div>
                </div>
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                Your trusted real estate partner in Kasaragod, connecting dreams with reality since 2009.
              </p>
              <div className="flex space-x-4">
                <Badge variant="outline" className="text-green-500 border-green-500">RERA Certified</Badge>
                <Badge variant="outline" className="text-blue-500 border-blue-500">ISO 9001:2015</Badge>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                {['Properties', 'Services', 'About', 'Contact'].map((link) => (
                  <button key={link} className="block text-gray-400 hover:text-green-500 transition-colors text-left">
                    {link}
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <div className="space-y-2">
                {['Privacy Policy', 'Terms of Service', 'RERA Registration'].map((link) => (
                  <button key={link} className="block text-gray-400 hover:text-green-500 transition-colors text-left text-sm">
                    {link}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">© 2024 UrbanRoot Properties. All rights reserved.</p>
            <p className="text-sm text-gray-400 mt-2 sm:mt-0">Made with ❤️ in God's Own Country</p>
          </div>
        </div>
      </footer>
      
      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  )
}