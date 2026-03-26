import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata = {
  title: "About Us - ZimGirlsCode",
  description: "Learn about our mission, vision, and the team behind ZimGirlsCode.",
}

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-purple-50 py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About ZimGirlsCode</h1>
            <p className="text-xl text-muted-foreground">
              Empowering the next generation of female tech leaders in Zimbabwe and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-lg mb-4">
              Founded in 2015, ZimGirlsCode is a non-profit organization that works with girls from the age of 8,
              actively promoting urban and rural women getting into technology spheres involving coding, Artificial
              Intelligence, e-commerce, and software through workshops and hackathons.
            </p>
            <p className="text-lg mb-4">
              What began as coding workshops for young girls in Zimbabwe has grown into an international initiative. We
              have built, led and maintained partnerships and program interventions in Uganda, Kenya, Rwanda and the
              United States thus far.
            </p>
            <p className="text-lg">
              Our team believes that by providing girls with early exposure to technology, mentorship, and a supportive
              community, we can help create a more diverse and inclusive tech industry globally.
            </p>
          </div>
          <div className="relative">
            <Image
              src="/images/zimgirlscode-workshop.png"
              width={600}
              height={500}
              alt="Young women collaborating on coding projects at a ZimGirlsCode workshop"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-purple-50">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-lg mb-4">
                Introducing and exposing young girls to technology in an effort to broaden and empower them with tools
                for the modern world through code and AI.
              </p>
              <p className="text-lg">
                We believe that every girl, regardless of her background or circumstances, deserves the opportunity to
                explore and excel in technology.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-lg mb-4">To have more females in tech-related majors and influential positions.</p>
              <p className="text-lg">
                We envision a future where technology is created by diverse teams that reflect the society they serve,
                with women playing key leadership roles in shaping the digital landscape.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 container">
        <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-purple-600"
              >
                <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Inclusivity</h3>
            <p>
              We create spaces where every girl feels welcome, valued, and empowered to contribute, regardless of her
              background or prior experience.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-purple-600"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Excellence</h3>
            <p>
              We strive for excellence in all our programs, providing high-quality education and mentorship that
              prepares girls for real-world success.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-purple-600"
              >
                <path d="M12 2v20"></path>
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Innovation</h3>
            <p>
              We embrace creativity and innovation in our approach to teaching technology, encouraging girls to think
              outside the box and develop solutions to real-world problems.
            </p>
          </div>
        </div>
      </section>

      {/* Our Partners */}
      <section className="py-16 bg-purple-50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Partners</h2>
          <p className="text-lg text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            We're proud to collaborate with organizations that share our vision of empowering girls through technology
            education.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center h-40">
              <Image
                src="/images/partners/techvillage.png"
                width={160}
                height={160}
                alt="The TechVillage"
                className="max-h-28 object-contain"
              />
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center h-40">
              <Image
                src="/images/partners/witu.png"
                width={160}
                height={160}
                alt="Women In Technology Uganda"
                className="max-h-28 object-contain"
              />
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center h-40">
              <Image
                src="/images/partners/us-embassy.png"
                width={160}
                height={160}
                alt="United States Embassy"
                className="max-h-28 object-contain"
              />
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center h-40">
              <Image
                src="/images/partners/ibuhub.png"
                width={160}
                height={160}
                alt="IbuHub Africa"
                className="max-h-28 object-contain"
              />
            </div>
          </div>

          <div className="text-center mt-12">
            <Button
              variant="outline"
              className="border-brand-500 text-brand-600 hover:bg-brand-50 hover:text-brand-700 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
              asChild
            >
              <Link href="/contact">Become a Partner</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 container">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Want to Support Our Mission?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join us in empowering the next generation of female tech leaders across Africa. There are many ways to get
            involved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="bg-brand-600 hover:bg-brand-700 text-white rounded-full shadow-md hover:shadow-lg transition-all duration-300"
              asChild
            >
              <Link href="/contact">Volunteer</Link>
            </Button>
            <Button
              variant="outline"
              className="border-brand-500 text-brand-600 hover:bg-brand-50 hover:text-brand-700 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
              asChild
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
