import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Heart, Users, ArrowRight } from "lucide-react"
import Image from "next/image"
import { NewsletterForm } from "@/components/newsletter-form"

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-dark-100 to-dark-200 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-brand-500 rounded-full opacity-10 blur-3xl"></div>
          <div className="absolute top-20 -left-20 w-60 h-60 bg-brand-700 rounded-full opacity-10 blur-3xl"></div>
        </div>
        <div className="container relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="flex-1 space-y-6 text-center md:text-left">
            <div className="inline-block px-4 py-1 rounded-full bg-brand-500/10 text-brand-400 text-sm font-medium mb-2">
              Empowering the next generation
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              We introduce modern tech to young girls and educate them in{" "}
              <span className="text-brand-500 code-text">code</span> and{" "}
              <span className="text-brand-400 code-text">AI</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-[600px]">
              We're on a mission to inspire, educate, and empower the next generation of female tech leaders from
              Zimbabwe and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              {/* Primary CTA - Contact Us */}
              <div className="bg-brand-600 hover:bg-brand-700 rounded-full shadow-md hover:shadow-lg transition-all duration-300">
                <Link href="/contact" className="inline-block px-8 py-3 text-white font-medium">
                  Contact Us
                </Link>
              </div>

              {/* Secondary CTA - Learn More */}
              <div className="bg-white/20 hover:bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 border border-white/40">
                <Link href="/about" className="inline-block px-8 py-3 text-white hover:text-dark-100 font-medium">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/images/zimgirlscode-group.png"
                width={600}
                height={600}
                alt="Enthusiastic group of young girls in ZimGirlsCode t-shirts celebrating together"
                className="rounded-lg object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-100/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <div className="flex items-center gap-2 text-white">
                  <div className="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></div>
                  <span className="text-sm font-medium">Coding the future, one girl at a time</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Highlights */}
      <section className="py-20 bg-dark-100 text-white">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 rounded-full bg-brand-500/10 text-brand-400 text-sm font-medium mb-2">
              Our Impact
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Making a Difference</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Since our founding, we've made significant strides in empowering young girls across Zimbabwe.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <p className="text-4xl md:text-5xl font-bold text-brand-500">500+</p>
              <p className="text-lg font-medium">Girls Trained</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl md:text-5xl font-bold text-brand-500">24</p>
              <p className="text-lg font-medium">Communities Reached</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl md:text-5xl font-bold text-brand-500">85%</p>
              <p className="text-lg font-medium">Pursue Tech Education</p>
            </div>
          </div>
          <div className="text-center mt-12">
            {/* Impact Report CTA */}
            <div className="inline-block bg-brand-600 hover:bg-brand-700 rounded-full shadow-md hover:shadow-lg transition-all duration-300">
              <Link href="/about" className="inline-flex items-center gap-2 px-8 py-3 text-white font-medium">
                Learn More About Our Work
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Overview */}
      <section className="py-20 container">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 rounded-full bg-brand-50 text-brand-600 text-sm font-medium mb-2">
            Our Mission
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Bridging the Tech Gender Gap</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            ZimGirlsCode is dedicated to closing the gender gap in technology by providing young girls in Zimbabwe with
            the skills, resources, and mentorship they need to thrive in the digital economy.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="pt-6">
              <div className="bg-brand-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <GraduationCap className="h-6 w-6 text-brand-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Education</h3>
              <p className="text-muted-foreground mb-4">
                Providing quality tech education and digital literacy programs
              </p>
              <p>
                Our curriculum covers coding, web development, digital design, and other essential tech skills tailored
                for different age groups.
              </p>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="pt-6">
              <div className="bg-brand-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-brand-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Mentorship</h3>
              <p className="text-muted-foreground mb-4">Connecting girls with female tech professionals</p>
              <p>
                Our mentorship programs pair young girls with successful women in tech who provide guidance, support,
                and inspiration.
              </p>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="pt-6">
              <div className="bg-brand-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-brand-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Community</h3>
              <p className="text-muted-foreground mb-4">Building a supportive network for future female tech leaders</p>
              <p>
                We foster a strong community where girls can collaborate, share ideas, and support each other on their
                tech journeys.
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="text-center mt-12">
          <Button
            className="bg-brand-600 hover:bg-brand-700 text-white group rounded-full shadow-md hover:shadow-lg transition-all duration-300"
            asChild
          >
            <Link href="/programs" className="flex items-center gap-2">
              Explore Our Programs
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Programs Preview */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 rounded-full bg-brand-50 text-brand-600 text-sm font-medium mb-2">
              Our Programs
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Learning in Action</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our hands-on programs provide girls with the skills and confidence to excel in technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative rounded-lg overflow-hidden shadow-lg group">
              <Image
                src="/images/presentation.jpeg"
                width={600}
                height={400}
                alt="Tech presentation to students"
                className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-100/90 via-dark-100/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h3 className="text-xl font-bold mb-2">Tech Leadership Academy</h3>
                <p className="mb-4">
                  Advanced training for high school girls focusing on coding, design, and entrepreneurship
                </p>
                <Link href="/programs" className="inline-flex items-center text-brand-400 hover:text-brand-300">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="relative rounded-lg overflow-hidden shadow-lg group">
              <Image
                src="/images/python-programmers-group.png"
                width={600}
                height={400}
                alt="Python programming workshop"
                className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-100/90 via-dark-100/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h3 className="text-xl font-bold mb-2">Python Programming Workshop</h3>
                <p className="mb-4">Hands-on coding sessions teaching the fundamentals of Python programming</p>
                <Link href="/programs" className="inline-flex items-center text-brand-400 hover:text-brand-300">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-600 text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Mission</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Whether you want to volunteer or partner with us, there are many ways to support young girls across Africa
            in tech.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="outline"
              className="bg-white text-brand-600 hover:bg-gray-100 border-white hover:border-white rounded-full shadow-md hover:shadow-lg transition-all duration-300"
              asChild
            >
              <Link href="/contact">Volunteer</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white/10 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
              asChild
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 container">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-block px-4 py-1 rounded-full bg-brand-50 text-brand-600 text-sm font-medium mb-2">
              Stay Updated
            </div>
            <h2 className="text-3xl font-bold mb-4">Join Our Newsletter</h2>
            <p className="text-lg text-muted-foreground">
              Subscribe to receive updates on our programs, events, and success stories.
            </p>
          </div>
          <NewsletterForm />
        </div>
      </section>
    </>
  )
}
