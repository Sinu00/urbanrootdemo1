import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Mail, Home, Building, TreePine, Waves, Star, Users, Award, Clock } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center border-b bg-white sticky top-0 z-50">
        <Link href="/" className="flex items-center justify-center">
          <Home className="h-8 w-8 text-green-600" />
          <div className="ml-2 relative">
  <span className="text-2xl font-semibold text-gray-800 tracking-tight">UrbanRoot</span>
  <div className="text-xs text-gray-400 font-medium tracking-wide absolute -bottom-3 right-0">By A&A</div>
</div>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#properties" className="text-sm font-medium hover:text-green-600 transition-colors">
            Properties
          </Link>
          <Link href="#services" className="text-sm font-medium hover:text-green-600 transition-colors">
            Services
          </Link>
          <Link href="#about" className="text-sm font-medium hover:text-green-600 transition-colors">
            About
          </Link>
          <Link href="#contact" className="text-sm font-medium hover:text-green-600 transition-colors">
            Contact
          </Link>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full min-h-[calc(100vh-4rem)] flex items-center bg-gradient-to-br from-green-50 to-blue-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Badge variant="secondary" className="w-fit">
                    <MapPin className="w-3 h-3 mr-1" />
                    Kasaragod, Kerala
                  </Badge>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Your Dream Home in {"God's Own Country"}
                  </h1>
                  <p className="max-w-[600px] text-gray-600 md:text-xl">
                    Discover premium properties in Kasaragod - from beachfront villas to hill station retreats. Your
                    trusted local real estate partner with over 15 years of experience.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700">
                    View Properties
                  </Button>
                  <Button variant="outline" size="lg">
                    Schedule Visit
                  </Button>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">4.8/5</span>
                    <span>(200+ reviews)</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/heroimage1.jpg"
                  width="600"
                  height="400"
                  alt="Beautiful property in Kasaragod"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="w-full py-12 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">500+</div>
                <div className="text-sm text-gray-600">Properties Sold</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">15+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">1000+</div>
                <div className="text-sm text-gray-600">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">50+</div>
                <div className="text-sm text-gray-600">Active Listings</div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Properties */}
        <section id="properties" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Featured Properties</h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Handpicked premium properties across Kasaragod - from coastal homes to mountain retreats
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-8">
              <Card className="overflow-hidden">
                <div className="relative">
                  <Image
                    src="/beachfrontvilla.jpg"
                    width="400"
                    height="200"
                    alt="Beachfront Villa"
                    className="aspect-video object-cover w-full"
                  />
                  <Badge className="absolute top-2 left-2 bg-green-600">Featured</Badge>
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    Beachfront Villa
                    <span className="text-green-600">₹2.5 Cr</span>
                  </CardTitle>
                  <CardDescription className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    Bekal Beach, Kasaragod
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between text-sm text-gray-600 mb-4">
                    <span>4 BHK</span>
                    <span>3500 sq ft</span>
                    <span>Sea View</span>
                  </div>
                  <Button className="w-full bg-transparent" variant="outline">
                    View Details
                  </Button>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <div className="relative">
                  <Image
                    src="/hillstation.jpg"
                    width="400"
                    height="200"
                    alt="Hill Station Home"
                    className="aspect-video object-cover w-full"
                  />
                  <Badge className="absolute top-2 left-2 bg-blue-600">New</Badge>
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    Hill Station Home
                    <span className="text-green-600">₹1.8 Cr</span>
                  </CardTitle>
                  <CardDescription className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    Ranipuram Hills
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between text-sm text-gray-600 mb-4">
                    <span>3 BHK</span>
                    <span>2800 sq ft</span>
                    <span>Valley View</span>
                  </div>
                  <Button className="w-full bg-transparent" variant="outline">
                    View Details
                  </Button>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <div className="relative">
                  <Image
                    src="/Traditionalkeralahome.jpg"
                    width="400"
                    height="200"
                    alt="Traditional Kerala Home"
                    className="aspect-video object-cover w-full"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    Traditional Kerala Home
                    <span className="text-green-600">₹95 L</span>
                  </CardTitle>
                  <CardDescription className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    Kanhangad Town
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between text-sm text-gray-600 mb-4">
                    <span>2 BHK</span>
                    <span>1800 sq ft</span>
                    <span>Heritage</span>
                  </div>
                  <Button className="w-full bg-transparent" variant="outline">
                    View Details
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Services</h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Comprehensive real estate solutions tailored for Kasaragod's unique market
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="grid gap-1 text-center">
                <Building className="h-12 w-12 mx-auto text-green-600" />
                <h3 className="text-lg font-bold">Property Sales</h3>
                <p className="text-sm text-gray-600">
                  Buy and sell residential and commercial properties with expert guidance and market insights.
                </p>
              </div>
              <div className="grid gap-1 text-center">
                <Home className="h-12 w-12 mx-auto text-green-600" />
                <h3 className="text-lg font-bold">Rental Services</h3>
                <p className="text-sm text-gray-600">
                  Find perfect rental properties or manage your rental investments with our comprehensive services.
                </p>
              </div>
              <div className="grid gap-1 text-center">
                <TreePine className="h-12 w-12 mx-auto text-green-600" />
                <h3 className="text-lg font-bold">Land Development</h3>
                <p className="text-sm text-gray-600">
                  Agricultural land, plots, and development projects across Kasaragod's scenic locations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Local Expertise, Global Standards
                  </h2>
                  <p className="max-w-[600px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Born and raised in Kasaragod, we understand the unique charm of this coastal district. From the
                    historic Bekal Fort to the pristine beaches and lush Western Ghats, we help you find properties that
                    match your lifestyle and investment goals.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-green-600" />
                    <span className="text-sm">Local Network</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-green-600" />
                    <span className="text-sm">Certified Agents</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-green-600" />
                    <span className="text-sm">24/7 Support</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Waves className="h-5 w-5 text-green-600" />
                    <span className="text-sm">Coastal Specialist</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/kasaragodlandscape.jpg"
                  width="600"
                  height="400"
                  alt="Kasaragod landscape"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get In Touch</h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Ready to find your dream property in Kasaragod? Contact our expert team today.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Phone className="h-6 w-6 text-green-600" />
                  <div>
                    <div className="font-medium">Call Us</div>
                    <div className="text-gray-600">+91 98765 43210</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="h-6 w-6 text-green-600" />
                  <div>
                    <div className="font-medium">Email Us</div>
                    <div className="text-gray-600">info@kasaragodproperties.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="h-6 w-6 text-green-600" />
                  <div>
                    <div className="font-medium">Visit Our Office</div>
                    <div className="text-gray-600">
                      Main Road, Near Bus Stand
                      <br />
                      Kasaragod, Kerala 671121
                    </div>
                  </div>
                </div>
              </div>
              <Card>
                <CardHeader>
                  <CardTitle>Send us a message</CardTitle>
                  <CardDescription>Fill out the form below and we'll get back to you within 24 hours.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Input placeholder="First Name" />
                    <Input placeholder="Last Name" />
                  </div>
                  <Input type="email" placeholder="Email" />
                  <Input placeholder="Phone Number" />
                  <Input placeholder="Property Interest" />
                  <Button className="w-full bg-green-600 hover:bg-green-700">Send Message</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-gray-50">
        <p className="text-xs text-gray-600">© 2024 Kasaragod Properties. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4 text-gray-600">
            Privacy Policy
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4 text-gray-600">
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4 text-gray-600">
            RERA Registration
          </Link>
        </nav>
      </footer>
    </div>
  )
}
