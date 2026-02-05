"use client";
import { useState } from "react";
import Image from "next/image";
import { Plus, Minus, ArrowRight } from "lucide-react";

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
            sizes="(max-width: 640px) 280px, (max-width: 1024px) 350px, 680px"
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
          <button className="border border-primary-text text-primary-text px-6 py-2.5 mt-4 text-sm tracking-wide hover:bg-primary-text hover:text-secondary-text transition-colors duration-700 font-medium cursor-pointer flex items-center gap-2 mx-auto lg:mx-0">
            CONNECT WITH ME <ArrowRight className="w-4 h-4" />
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
          <button className="bg-transparent text-primary-text px-8 py-4 md:py-6 lg:py-8 text-sm font-medium tracking-wider hover:bg-primary-text hover:text-secondary-text transition-all duration-700 -mx-6 sm:-mx-8 md:-mx-16 lg:-mx-24 cursor-pointer border-t-1 mt-12 md:mt-16 flex items-center justify-center gap-2">
            GET IN TOUCH <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        {/* Image - comes first on mobile, right on desktop, covers full half width and height */}
        <div className="w-full md:w-1/2 order-1 md:order-2">
          <div className="relative w-full h-64 md:h-full min-h-[500px] md:min-h-[550px] lg:min-h-[650px] xl:min-h-[800px]">
            <Image
              src="/cta-one.jpg"
              alt="Coffee and flowers"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
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
                sizes="(max-width: 640px) 200px, (max-width: 768px) 250px, 300px"
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
                sizes="(max-width: 640px) 200px, (max-width: 768px) 250px, 300px"
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
                sizes="(max-width: 640px) 200px, (max-width: 768px) 250px, 300px"
                className="object-cover rounded-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* You Don't Have to Do This Alone Section */}
      <section className="flex flex-col md:flex-row bg-accent-1 min-h-[500px] md:min-h-[550px] lg:min-h-[650px] xl:min-h-[800px]">
        {/* Image - comes first on mobile, left on desktop, covers full half width and height */}
        <div className="w-full md:w-1/2 order-1 md:order-1">
          <div className="relative w-full h-64 md:h-full min-h-[500px] md:min-h-[550px] lg:min-h-[650px] xl:min-h-[800px]">
            <Image
              src="/cta-two.jpg"
              alt="Woman looking up"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
        {/* Text - comes second on mobile, right on desktop */}
        <div className="w-full md:w-1/2 px-6 sm:px-8 md:px-16 lg:px-24 pt-12 sm:pt-16 lg:pt-20 pb-0 flex flex-col justify-between order-2 md:order-2">
          <div className="flex-1 flex items-center">
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium text-primary-text">
                You don&lsquo;t have to do this all alone.
              </h2>
              <p className="text-primary-text leading-relaxed text-sm sm:text-base md:text-lg">
                You are equipped for all things. If you're willing...
              </p>
              <ul className="space-y-3 text-primary-text text-sm sm:text-base">
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
              <p className="text-primary-text text-sm leading-relaxed">
                When genuinely out-of-balance, and work together to navigate the
                challenges of life and heal through the hardships.
              </p>
            </div>
          </div>
          <button className="bg-transparent text-primary-text px-8 py-4 md:py-6 lg:py-8 text-sm font-medium tracking-wider hover:bg-primary-text hover:text-secondary-text transition-all duration-700 -mx-6 sm:-mx-8 md:-mx-16 lg:-mx-24 cursor-pointer border-t-1 mt-12 md:mt-16 flex items-center justify-center gap-2">
            WORK WITH ME <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* Hi I'm Lilac Section */}
      <section className="flex flex-col md:flex-row bg-secondary-bg min-h-[600px] md:min-h-[800px] lg:min-h-[900px] xl:min-h-[1000px]">
        {/* Images - comes first on mobile (order-1), right on desktop (order-2) */}
        <div className="w-full md:w-1/2 order-1 md:order-2 relative flex items-center justify-center py-12 md:py-16">
          <div className="relative w-full h-[380px] md:h-full flex items-center justify-center">
            {/* Arch-shaped image - larger, positioned top */}
            <div className="absolute top-8 md:top-12 lg:top-16 left-1/2 md:left-1/3 -translate-x-1/2 w-52 h-72 sm:w-60 sm:h-80 md:w-[320px] md:h-[440px] lg:w-[340px] lg:h-[480px] xl:w-[480px] xl:h-[680px] z-10">
              <Image
                src="/client.jpg"
                alt="Purple lilac flowers"
                fill
                sizes="(max-width: 640px) 208px, (max-width: 768px) 240px, (max-width: 1024px) 320px, (max-width: 1280px) 340px, 480px"
                className="object-cover rounded-t-full"
              />
            </div>
            {/* Circular image - smaller, positioned bottom-right, overlapping */}
            <div className="absolute bottom-0.5 max-sm:right-20  md:bottom-32 lg:bottom-28 xl:bottom-16 right-36 md:right-20 lg:right-38 xl:right-40  w-32 h-32 max-sm:w-40 max-sm:h-40 sm:w-44 sm:h-44 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-90 xl:h-90 z-20">
              <Image
                src="/client-sub.jpg"
                alt="White flowers"
                fill
                sizes="(max-width: 640px) 160px, (max-width: 768px) 176px, (max-width: 1024px) 192px, (max-width: 1280px) 224px, 360px"
                className="object-cover rounded-full"
              />
            </div>
          </div>
        </div>
        {/* Text - comes second on mobile (order-2), left on desktop (order-1) */}
        <div className="w-full md:w-1/2 px-6 sm:px-8 md:pl-16 md:pr-8 lg:pl-24 lg:pr-12 py-12 sm:py-16 lg:py-20 flex flex-col justify-center order-2 md:order-1">
          <div className="space-y-6 md:space-y-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium text-primary-text">
              Hi, I'm Lilac.
            </h2>
            <p className="text-primary-text leading-relaxed text-sm sm:text-base md:text-lg">
              I'm committed to providing a safe and supportive environment where
              we can explore your thoughts, feelings, and behaviors. With
              empathy and guidance, we'll work together to navigate the
              challenges life throws your way.
            </p>
          </div>
          <div className="flex justify-center mt-8 md:mt-12 mt-16">
            <button className="border border-primary-text text-primary-text px-10 py-3 text-sm font-medium tracking-wider hover:bg-primary-text hover:text-primary-bg transition-all duration-700 cursor-pointer flex items-center gap-2">
              LET'S CHAT <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="flex flex-col md:flex-row bg-primary-bg min-h-[600px] md:min-h-[700px] lg:min-h-[850px] xl:min-h-[950px]">
        {/* Image - left side */}
        <div className="w-full md:w-1/2 order-1 md:order-1 flex items-center justify-center px-6 sm:px-8 md:pl-16 md:pr-4 lg:pl-24 lg:pr-8 py-12 md:py-16 lg:py-20">
          <div className="relative w-full max-w-[320px] sm:max-w-[380px] md:max-w-[450px] lg:max-w-[550px] xl:max-w-[650px] aspect-[5/7] overflow-hidden rounded-t-full">
            <Image
              src="/faq.jpg"
              alt="White flowers"
              fill
              sizes="(max-width: 640px) 320px, (max-width: 768px) 380px, (max-width: 1024px) 450px, (max-width: 1280px) 550px, 650px"
              className="object-cover"
            />
          </div>
        </div>

        {/* FAQ Content - right side */}
        <div className="w-full md:w-1/2 px-6 sm:px-8 md:pl-4 md:pr-16 lg:pl-8 lg:pr-24 py-12 sm:py-16 lg:py-20 flex flex-col justify-center order-2 md:order-2">
          <div className="space-y-8 md:space-y-10 lg:space-y-12">
            <h2 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-medium text-primary-text">
              FAQs
            </h2>
            <div className="space-y-0">
              {/* FAQ 1 */}
              <div className="border-b border-primary-text">
                <button
                  onClick={() => toggleFAQ(0)}
                  className="w-full text-left flex items-center gap-4 py-3 md:py-4 text-3xl md:text-3xl lg:text-4xl xl:text-5xl border-t text-primary-text transition-opacity cursor-pointer"
                >
                  <span className="transition-all duration-300 flex-shrink-0">
                    {openFAQ === 0 ? (
                      <Minus className="w-6 h-6 md:w-7 md:h-7" />
                    ) : (
                      <Plus className="w-6 h-6 md:w-7 md:h-7" />
                    )}
                  </span>
                  <span>Do you take insurance?</span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openFAQ === 0
                      ? "max-h-96 opacity-100 mb-4"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-primary-text text-sm md:text-base leading-relaxed">
                    Information about insurance coverage and payment options.
                  </p>
                </div>
              </div>

              {/* FAQ 2 */}
              <div className="border-b border-primary-text">
                <button
                  onClick={() => toggleFAQ(1)}
                  className="w-full text-left flex items-center gap-4 py-3 md:py-4 text-3xl md:text-3xl lg:text-4xl xl:text-5xl text-primary-text transition-opacity cursor-pointer"
                >
                  <span className="transition-all duration-300 flex-shrink-0">
                    {openFAQ === 1 ? (
                      <Minus className="w-6 h-6 md:w-7 md:h-7" />
                    ) : (
                      <Plus className="w-6 h-6 md:w-7 md:h-7" />
                    )}
                  </span>
                  <span>What are your rates?</span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openFAQ === 1
                      ? "max-h-96 opacity-100 mb-4"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-primary-text text-sm md:text-base leading-relaxed">
                    Information about session rates and pricing.
                  </p>
                </div>
              </div>

              {/* FAQ 3 */}
              <div className="border-b border-primary-text">
                <button
                  onClick={() => toggleFAQ(2)}
                  className="w-full text-left flex items-center gap-4 py-3 md:py-4 text-3xl md:text-3xl lg:text-4xl xl:text-5xl text-primary-text transition-opacity cursor-pointer"
                >
                  <span className="transition-all duration-300 flex-shrink-0">
                    {openFAQ === 2 ? (
                      <Minus className="w-6 h-6 md:w-7 md:h-7" />
                    ) : (
                      <Plus className="w-6 h-6 md:w-7 md:h-7" />
                    )}
                  </span>
                  <span>Do you have any openings?</span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openFAQ === 2
                      ? "max-h-96 opacity-100 mb-4"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-primary-text text-sm md:text-base leading-relaxed">
                    Information about current availability and scheduling.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* My Professional Background Section */}
      <section className="bg-secondary-bg px-6 sm:px-8 md:px-16 lg:px-24 pt-20 sm:pt-24 lg:pt-28 pb-6 sm:pb-10 lg:pb-14 min-h-[450px] md:min-h-[550px]">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-12 md:space-y-14 lg:space-y-16">
            <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-medium text-primary-text text-center">
              My Professional Background
            </h2>
            <div className="space-y-0">
              {/* Background 1 */}
              <div className="border-b border-primary-text">
                <button
                  onClick={() => toggleBackground(0)}
                  className="w-full text-left flex justify-between items-center gap-4 py-4 md:py-5 text-base sm:text-lg md:text-xl border-t text-primary-text transition-opacity cursor-pointer"
                >
                  <span>Education</span>
                  <span className="transition-all duration-300 flex-shrink-0">
                    {openBackground === 0 ? (
                      <Minus className="w-5 h-5 md:w-6 md:h-6" />
                    ) : (
                      <Plus className="w-5 h-5 md:w-6 md:h-6" />
                    )}
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openBackground === 0
                      ? "max-h-96 opacity-100 mb-4"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-primary-text text-sm md:text-base leading-relaxed">
                    Details about educational background and qualifications.
                  </p>
                </div>
              </div>

              {/* Background 2 */}
              <div className="border-b border-primary-text">
                <button
                  onClick={() => toggleBackground(1)}
                  className="w-full text-left flex justify-between items-center gap-4 py-4 md:py-5 text-base sm:text-lg md:text-xl text-primary-text transition-opacity cursor-pointer"
                >
                  <span>Licensure</span>
                  <span className="transition-all duration-300 flex-shrink-0">
                    {openBackground === 1 ? (
                      <Minus className="w-5 h-5 md:w-6 md:h-6" />
                    ) : (
                      <Plus className="w-5 h-5 md:w-6 md:h-6" />
                    )}
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openBackground === 1
                      ? "max-h-96 opacity-100 mb-4"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-primary-text text-sm md:text-base leading-relaxed">
                    Information about professional licensure and certifications.
                  </p>
                </div>
              </div>

              {/* Background 3 */}
              <div className="border-b border-primary-text">
                <button
                  onClick={() => toggleBackground(2)}
                  className="w-full text-left flex justify-between items-center gap-4 py-4 md:py-5 text-base sm:text-lg md:text-xl text-primary-text transition-opacity cursor-pointer"
                >
                  <span>Professional Affiliations</span>
                  <span className="transition-all duration-300 flex-shrink-0">
                    {openBackground === 2 ? (
                      <Minus className="w-5 h-5 md:w-6 md:h-6" />
                    ) : (
                      <Plus className="w-5 h-5 md:w-6 md:h-6" />
                    )}
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openBackground === 2
                      ? "max-h-96 opacity-100 mb-4"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-primary-text text-sm md:text-base leading-relaxed">
                    Details about professional memberships and affiliations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Started Section */}
      <section className="px-8 md:px-16 lg:px-24 py-24 md:py-32 lg:py-40 bg-accent-2 text-secondary-text">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-medium">
            Get started today.
          </h2>
          <p className="text-xl mt-8">
            Whether this may be your first-ever therapist or transition.
            Sometimes just taking the first step can be the hardest. Reach out
            for a free 15-minute phone consultation. Or schedule an appointment.
          </p>
          <button className="border border-secondary-text hover:text-accent-2 px-6 py-2.5 mt-28 text-sm tracking-wide hover:bg-secondary-text text-secondary-text transition-colors duration-700 font-medium cursor-pointer flex items-center gap-2 mx-auto">
            GET IN TOUCH <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* Footer Top Section */}
      <section className="px-16 md:px-16 lg:px-16 pt-12 md:pt-16 pb-24 md:pb-28 bg-primary-bg">
        <div className="max-w-8xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-24 text-base text-primary-text">
            <div className="text-center md:text-left">
              <h4 className="text-2xl sm:text-3xl lg:text-5xl font-medium mb-10">
                Lilac Template
              </h4>
              <p className="mb-1 text-xl">123 Example Road</p>
              <p className="mb-8 text-xl">Minneapolis, MN</p>
              <p className="underline mb-1 text-xl">email@example.com</p>
              <p className="underline text-xl">(555) 555-5555</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-24">
              <div className="text-center md:text-right">
                <h4 className="text-2xl sm:text-3xl lg:text-4xl font-medium mb-10">
                  Hours
                </h4>
                <p className="mb-1 text-xl">Monday – Friday</p>
                <p className="text-xl">10am – 6pm</p>
              </div>
              <div className="text-center md:text-right">
                <h4 className="text-2xl sm:text-3xl lg:text-4xl font-medium mb-10">
                  Find
                </h4>
                <p className="underline mb-1 text-xl">Home</p>
                <p className="underline mb-1 text-xl">Contact</p>
                <p className="underline text-xl">Blog</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Bottom */}
      <footer className="px-8 md:px-16 lg:px-24 md:pt-20 pt-4 pb-10 bg-secondary-bg">
        <div className="max-w-7xl mx-auto">
          <div className="text-md  text-center space-y-4">
            <p className="space-x-2">
              <a
                href="#"
                className="underline hover:opacity-70 whitespace-nowrap"
              >
                Privacy & Cookies Policy
              </a>
              <span> </span>
              <a
                href="#"
                className="underline hover:opacity-70 whitespace-nowrap"
              >
                Good Faith Estimate
              </a>
              <span> </span>
              <a
                href="#"
                className="underline hover:opacity-70 whitespace-nowrap"
              >
                Website Terms & Conditions
              </a>
              <span> </span>
              <a
                href="#"
                className="underline hover:opacity-70 whitespace-nowrap"
              >
                Disclaimer
              </a>
            </p>
            <p className="text-primary-text">
              Website Template Credits:{" "}
              <a href="#" className="underline hover:opacity-70 text-black">
                Go Bloom Creative
              </a>
            </p>
            <p className="md:pt-14 text-primary-text">
              All Rights Reserved © 2026 Your Business Name Here, LLC.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
