"use client";
import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [openFAQ, setOpenFAQ] = useState(null);
  const [openBackground, setOpenBackground] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMenuClosing, setIsMenuClosing] = useState(false);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const toggleBackground = (index) => {
    setOpenBackground(openBackground === index ? null : index);
  };

  const handleMenuClose = () => {
    setIsMenuClosing(true);
    setTimeout(() => {
      setMobileMenuOpen(false);
      setIsMenuClosing(false);
    }, 300);
  };

  const handleMenuToggle = () => {
    if (mobileMenuOpen) {
      handleMenuClose();
    } else {
      setMobileMenuOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-primary-bg overflow-x-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 sm:px-16 lg:px-24 py-6 bg-primary-bg">
        {/* Mobile Menu Button */}
        <button
          onClick={handleMenuToggle}
          className="sm:hidden text-primary-text z-50 order-first"
        >
          {mobileMenuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        <h2 className="text-xl sm:text-4xl font-medium text-primary-text">
          Lilac Template
        </h2>

        <div className="hidden sm:flex gap-12 text-xl font-normal text-primary-text">
          <a href="#" className="hover:opacity-70 transition-opacity">
            Blog
          </a>
          <a href="#" className="hover:opacity-70 transition-opacity">
            Contact
          </a>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          className={`sm:hidden fixed inset-0 bg-primary-bg z-40 flex flex-col items-center justify-center space-y-8 ${isMenuClosing ? "animate-fadeOut" : "animate-fadeIn"}`}
        >
          <a
            href="#"
            className="text-3xl font-normal text-primary-text hover:opacity-70 transition-opacity"
            onClick={handleMenuClose}
          >
            Blog
          </a>
          <a
            href="#"
            className="text-3xl font-normal text-primary-text hover:opacity-70 transition-opacity"
            onClick={handleMenuClose}
          >
            Contact
          </a>
        </div>
      )}

      {/* Hero Section */}
      <section className="flex flex-col items-center lg:grid lg:grid-cols-2 px-6 sm:px-16 lg:px-24 pt-28 sm:pt-32 lg:pt-36 pb-8 sm:pb-12 lg:pb-16 gap-8 lg:gap-12 max-w-full">
        <div className="relative w-full max-w-[280px] sm:max-w-[350px] lg:max-w-[680px] aspect-[5/7] overflow-hidden rounded-t-full mx-auto lg:mx-0 flex-shrink-0">
          <Image
            src="/hero.jpg"
            alt="Purple flowers"
            fill
            className="object-cover object-[center_20%]"
            priority
          />
        </div>
        <div className="flex flex-col items-center lg:text-center text-center space-y-4 sm:space-y-6 w-full px-4">
          <h1 className="max-lg:text-4xl lg:text-[clamp(2.5rem,5vw,6.5rem)] font-medium text-primary-text leading-tight">
            <span className="whitespace-nowrap">Live your life</span>
            <br />
            <span className="whitespace-nowrap">in full bloom</span>
          </h1>
          <p className="font-normal text-base sm:text-lg lg:text-xl text-primary-text tracking-wide">
            <span className="whitespace-nowrap">
              Therapy for Adults in Minneapolis, MN
            </span>
          </p>
          <button className="border border-primary-text text-primary-text px-6 py-2.5 mt-4 text-sm tracking-wide hover:bg-primary-text hover:text-secondary-text transition-colors duration-700 font-medium cursor-pointer">
            CONNECT WITH ME
          </button>
        </div>
      </section>

      {/* Live a Fulfilling Life Section */}
      <section className="flex flex-col md:flex-row bg-secondary-bg min-h-[500px] md:min-h-[550px] lg:min-h-[650px] xl:min-h-[800px]">
        {/* Text - comes second on mobile, left on desktop */}
        <div className="w-full md:w-1/2 px-6 sm:px-8 md:px-16 lg:px-24 pt-12 sm:pt-16 lg:pt-20 pb-0 flex flex-col justify-between order-2 md:order-1">
          <div className="flex-1 flex items-center">
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium text-primary-text whitespace-nowrap">
                Live a fulfilling life.
              </h2>
              <p className="text-primary-text leading-relaxed text-sm sm:text-base md:text-lg">
                Life has had challenges—especially since you&lsquo;re living it
                fearlessly and unapologetically. And sometimes you feel lonely,
                hopeless, or anxious about your relationships, work, body, and
                sense of purpose. But there&lsquo;s more to life, and
                there&lsquo;s hope for the future.
              </p>
            </div>
          </div>
          <button className="bg-transparent text-primary-text px-8 py-4 md:py-6 lg:py-8 text-sm font-medium tracking-wider hover:bg-primary-text hover:text-secondary-text transition-all duration-700 -mx-6 sm:-mx-8 md:-mx-16 lg:-mx-24 cursor-pointer border-t-1 mt-12 md:mt-16">
            GET IN TOUCH →
          </button>
        </div>
        {/* Image - comes first on mobile, right on desktop, covers full half width and height */}
        <div className="w-full md:w-1/2 order-1 md:order-2">
          <div className="relative w-full h-64 md:h-full min-h-[500px] md:min-h-[550px] lg:min-h-[650px] xl:min-h-[800px]">
            <Image
              src="/cta-one.jpg"
              alt="Coffee and flowers"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* My Specialties Section */}
      <section className="px-6 sm:px-8 md:px-16 lg:px-24 py-20 sm:py-24 lg:py-28">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-medium text-primary-text text-center mb-12 sm:mb-16">
          My Specialties
        </h2>
        <div className="flex flex-wrap justify-start gap-6 md:gap-6 lg:gap-8">
          {/* Specialty 1 */}
          <div className="w-full sm:w-[calc(50%-0.75rem)] md:w-[calc(33.333%-1rem)] lg:w-[calc(33.333%-1.34rem)] flex flex-col space-y-6 bg-secondary-bg p-6 md:p-8 lg:p-10 border border-primary-text">
            <h3 className="text-lg font-medium text-primary-text">
              Self-Esteem
            </h3>
            <p className="text-sm text-primary-text leading-relaxed">
              Gain confidence as you learn to embrace and love yourself for who
              you are and what you have to offer.
            </p>
            <div className="relative w-full aspect-square max-w-[200px] sm:max-w-[250px] md:max-w-xs mx-auto mt-auto">
              <Image
                src="/speciality-one.jpg"
                alt="Woman by window"
                fill
                className="object-cover rounded-full"
              />
            </div>
          </div>

          {/* Specialty 2 */}
          <div className="w-full sm:w-[calc(50%-0.75rem)] md:w-[calc(33.333%-1rem)] lg:w-[calc(33.333%-1.34rem)] flex flex-col space-y-6 bg-secondary-bg p-6 md:p-8 lg:p-10 border border-primary-text">
            <h3 className="text-lg font-medium text-primary-text">
              Relationships
            </h3>
            <p className="text-sm text-primary-text leading-relaxed">
              Foster healthy relationships that help you feel supported and
              capable in your everyday life.
            </p>
            <div className="relative w-full aspect-square max-w-[200px] sm:max-w-[250px] md:max-w-xs mx-auto mt-auto">
              <Image
                src="/speciality-two.jpeg"
                alt="Person with plants"
                fill
                className="object-cover rounded-full"
              />
            </div>
          </div>

          {/* Specialty 3 */}
          <div className="w-full sm:w-[calc(50%-0.75rem)] md:w-[calc(33.333%-1rem)] lg:w-[calc(33.333%-1.34rem)] flex flex-col space-y-6 bg-secondary-bg p-6 md:p-8 lg:p-10 border border-primary-text">
            <h3 className="text-lg font-medium text-primary-text">Burnout</h3>
            <p className="text-sm text-primary-text leading-relaxed">
              Discover ways to cope with stress and find balance in your work
              and life responsibilities.
            </p>
            <div className="relative w-full aspect-square max-w-[200px] sm:max-w-[250px] md:max-w-xs mx-auto mt-auto">
              <Image
                src="/speciality-three.jpg"
                alt="Person working"
                fill
                className="object-cover rounded-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* You Don't Have to Do This Alone Section */}
      <section className="grid md:grid-cols-2 px-8 md:px-16 lg:px-24 py-20 gap-12 items-center bg-accent-1">
        <div className="relative h-[500px] md:h-[600px]">
          <Image
            src="/client.jpg"
            alt="Woman looking up"
            fill
            className="object-cover"
          />
        </div>
        <div className="space-y-6 text-secondary-text">
          <h2 className="text-4xl md:text-5xl font-light leading-tight">
            You don't have to do this all alone.
          </h2>
          <p className="leading-relaxed">
            You are equipped for all things. If you're willing...
          </p>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span>Disengage harmful or destructive in organizations</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span>Tolerate frustrating or making decisions</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span>Improve your capacity to set boundaries</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span>Develop increased emotional or compromised</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span>Live essential areas of being affected</span>
            </li>
          </ul>
          <p className="text-sm leading-relaxed">
            When genuinely out-of-balance, and work together to navigate the
            challenges of life and heal through the hardships.
          </p>
          <button className="border border-secondary-text text-secondary-text px-6 py-2 text-sm hover:bg-secondary-text hover:text-accent-1 transition-colors mt-4">
            Learn More
          </button>
        </div>
      </section>

      {/* Hi I'm Lilac Section */}
      <section className="px-8 md:px-16 lg:px-24 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-light text-primary-text">
            Hi, I'm Lilac.
          </h2>
          <p className="text-primary-text leading-relaxed">
            I'm committed to providing my clients and supportive environment
            where we can partner in change. I integrate theories including CBT,
            motivation and guidance, creating personalized therapy experience
            for you during our time together.
          </p>
          <button className="border border-primary-text text-primary-text px-6 py-2 text-sm hover:bg-primary-text hover:text-secondary-text transition-colors">
            About me
          </button>
        </div>
        <div className="relative flex items-center justify-center gap-4">
          <div className="relative h-80 w-64">
            <Image
              src="/client-sub.jpg"
              alt="Purple lilac flowers"
              fill
              className="object-cover rounded-t-full"
            />
          </div>
          <div className="relative h-64 w-64 mt-24">
            <Image
              src="/hero.jpg"
              alt="White flowers"
              fill
              className="object-cover rounded-full"
            />
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="px-8 md:px-16 lg:px-24 py-20 bg-secondary-bg">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="relative h-[500px] rounded-t-full overflow-hidden">
            <Image
              src="/faq.jpg"
              alt="White flowers"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-light text-primary-text mb-8">
              FAQs
            </h2>
            <div className="space-y-4">
              <div className="border-b border-primary-text pb-4">
                <button
                  onClick={() => toggleFAQ(0)}
                  className="w-full text-left flex justify-between items-center text-lg text-primary-text"
                >
                  <span>Do you take insurance?</span>
                  <span className="text-2xl">{openFAQ === 0 ? "−" : "+"}</span>
                </button>
                {openFAQ === 0 && (
                  <p className="mt-4 text-primary-text text-sm">
                    Information about insurance coverage and payment options.
                  </p>
                )}
              </div>
              <div className="border-b border-primary-text pb-4">
                <button
                  onClick={() => toggleFAQ(1)}
                  className="w-full text-left flex justify-between items-center text-lg text-primary-text"
                >
                  <span>What are your rates?</span>
                  <span className="text-2xl">{openFAQ === 1 ? "−" : "+"}</span>
                </button>
                {openFAQ === 1 && (
                  <p className="mt-4 text-primary-text text-sm">
                    Information about session rates and pricing.
                  </p>
                )}
              </div>
              <div className="border-b border-primary-text pb-4">
                <button
                  onClick={() => toggleFAQ(2)}
                  className="w-full text-left flex justify-between items-center text-lg text-primary-text"
                >
                  <span>Do you have any openings?</span>
                  <span className="text-2xl">{openFAQ === 2 ? "−" : "+"}</span>
                </button>
                {openFAQ === 2 && (
                  <p className="mt-4 text-primary-text text-sm">
                    Information about current availability and scheduling.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* My Professional Background Section */}
      <section className="px-8 md:px-16 lg:px-24 py-20">
        <h2 className="text-4xl md:text-5xl font-light text-primary-text text-center mb-12">
          My Professional Background
        </h2>
        <div className="max-w-2xl mx-auto space-y-4">
          <div className="border-b border-primary-text pb-4">
            <button
              onClick={() => toggleBackground(0)}
              className="w-full text-left flex justify-between items-center text-lg text-primary-text"
            >
              <span>Education</span>
              <span className="text-2xl">
                {openBackground === 0 ? "−" : "+"}
              </span>
            </button>
            {openBackground === 0 && (
              <p className="mt-4 text-primary-text text-sm">
                Details about educational background and qualifications.
              </p>
            )}
          </div>
          <div className="border-b border-primary-text pb-4">
            <button
              onClick={() => toggleBackground(1)}
              className="w-full text-left flex justify-between items-center text-lg text-primary-text"
            >
              <span>Licensure</span>
              <span className="text-2xl">
                {openBackground === 1 ? "−" : "+"}
              </span>
            </button>
            {openBackground === 1 && (
              <p className="mt-4 text-primary-text text-sm">
                Information about professional licensure and certifications.
              </p>
            )}
          </div>
          <div className="border-b border-primary-text pb-4">
            <button
              onClick={() => toggleBackground(2)}
              className="w-full text-left flex justify-between items-center text-lg text-primary-text"
            >
              <span>Professional Affiliations</span>
              <span className="text-2xl">
                {openBackground === 2 ? "−" : "+"}
              </span>
            </button>
            {openBackground === 2 && (
              <p className="mt-4 text-primary-text text-sm">
                Details about professional memberships and affiliations.
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Get Started Section */}
      <section className="px-8 md:px-16 lg:px-24 py-20 bg-accent-2 text-secondary-text">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-light">
            Get started today.
          </h2>
          <p className="text-sm">
            Whether this may be your first-ever therapist or transition.
            Sometimes just taking the first step can be the hardest. Reach out
            for a free 15-minute phone consultation. Or schedule an appointment.
          </p>
          <form className="space-y-4 mt-8">
            <input
              type="text"
              placeholder="Name"
              className="w-full bg-transparent border-b border-secondary-text px-2 py-3 text-secondary-text placeholder-secondary-text/70 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-transparent border-b border-secondary-text px-2 py-3 text-secondary-text placeholder-secondary-text/70 focus:outline-none"
            />
            <textarea
              placeholder="Message"
              rows="4"
              className="w-full bg-transparent border-b border-secondary-text px-2 py-3 text-secondary-text placeholder-secondary-text/70 focus:outline-none resize-none"
            ></textarea>
            <button className="border border-secondary-text text-secondary-text px-8 py-2 text-sm hover:bg-secondary-text hover:text-accent-2 transition-colors mt-4">
              Submit
            </button>
          </form>
        </div>
      </section>

      {/* Footer Bottom */}
      <footer className="px-8 md:px-16 lg:px-24 py-12 bg-secondary-bg">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8 text-sm text-primary-text">
            <div>
              <h4 className="font-medium mb-2">Lilac Template</h4>
              <p>123 Example Street</p>
              <p>Minneapolis, MN 55414</p>
              <p className="mt-2">(555) 123-4567</p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Hours</h4>
              <p>Monday - Friday</p>
              <p>9AM - 5PM</p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Find</h4>
              <p>LinkedIn</p>
              <p>Instagram</p>
            </div>
          </div>
          <div className="border-t border-primary-text pt-8 text-xs text-primary-text text-center space-y-2">
            <p>
              Privacy & Cookie Policy | Terms Of Service | Shipping Policy |
              Exchange
            </p>
            <p>© Lilac Template 2020</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
