import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export const metadata = {
  title: "Programs - ZimGirlsCode",
  description: "Explore our programs designed to empower young girls in Zimbabwe through technology education.",
}

export default function ProgramsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-dark-100 text-white py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block px-4 py-1 rounded-full bg-brand-500/10 text-brand-400 text-sm font-medium mb-4">
              Learn & Grow
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Programs</h1>
            <p className="text-xl text-gray-300">
              We offer a variety of programs designed to introduce girls to technology and help them develop valuable
              skills.
            </p>
          </div>
        </div>
      </section>

      {/* Curriculum Approach */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-block px-4 py-1 rounded-full bg-brand-50 text-brand-600 text-sm font-medium mb-2">
              Our Approach
            </div>
            <h2 className="text-3xl font-bold mb-4">Our Curriculum Approach</h2>
            <p className="text-lg text-muted-foreground">
              We've developed a comprehensive curriculum that combines technical skills with soft skills development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Project-Based Learning</h3>
              <p className="mb-4">
                Our curriculum is built around real-world projects that allow girls to apply what they've learned to
                solve actual problems in their communities.
              </p>
              <p>
                This approach not only reinforces technical skills but also builds critical thinking, creativity, and
                confidence.
              </p>
            </div>
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/python-programmer.png"
                width={500}
                height={400}
                alt="Project-based learning"
                className="rounded-lg w-full h-[300px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-100/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-4">
                <div className="inline-block px-3 py-1 rounded-full bg-brand-500 text-white text-xs font-medium">
                  Hands-on Learning
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Activities */}
      <section className="py-16 container">
        <h2 className="text-3xl font-bold mb-12 text-center">Recent Activities</h2>

        <div className="space-y-6">
          <div className="border rounded-lg p-6 hover:border-brand-300 hover:shadow-md transition-all duration-300">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold">Solve4XX Hackathon</h3>
                <p className="text-muted-foreground">
                  Innovation challenge focused on solving problems affecting women and girls
                </p>
              </div>
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="text-sm">
                  <p className="font-medium">April 2023</p>
                  <p>Kampala, Uganda</p>
                </div>
              </div>
            </div>
          </div>
          <div className="border rounded-lg p-6 hover:border-brand-300 hover:shadow-md transition-all duration-300">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold">Python Coding in AI</h3>
                <p className="text-muted-foreground">Introduction to Python programming for AI applications</p>
              </div>
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="text-sm">
                  <p className="font-medium">March 2023</p>
                  <p>Kigali, Rwanda</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-brand-600 text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Want to Support Our Programs?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Help us reach more girls across Africa by volunteering your time and expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-brand-600"
              asChild
            >
              <Link href="/contact">Volunteer</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
