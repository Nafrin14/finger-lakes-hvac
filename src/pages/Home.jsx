import {
  FiArrowUpRight,
  FiPhone,
  FiCheck,
  FiClock,
  FiWind,
  FiThermometer,
} from "react-icons/fi";

import heroImage from "../assets/images/hvac-hero.webp";

const Home = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      {/* =====================================================
          HOME / HERO SECTION
      ====================================================== */}
      <section
        id="home"
        className="relative min-h-screen overflow-hidden pt-24"
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Professional HVAC technician"
            className="w-full h-full object-cover"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#161616]/95 via-[#161616]/78 to-[#161616]/40" />
        </div>

        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="w-full h-full bg-[radial-gradient(circle_at_center,#f28c28_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>

        {/* Decorative Hexagon */}
        <div
          className="absolute top-32 -right-24 w-80 h-80 bg-[#f28c28]/20 pointer-events-none"
          style={{
            clipPath:
              "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
          }}
        />

        {/* Decorative Outline */}
        <div
          className="absolute bottom-10 -left-32 w-96 h-96 border border-[#f28c28]/20 pointer-events-none"
          style={{
            clipPath:
              "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
          }}
        />

        {/* Main Container */}
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 min-h-[calc(100vh-96px)] flex items-center">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center w-full py-16">

            {/* =================================================
                LEFT CONTENT
            ================================================== */}
            <div className="lg:col-span-7">

              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-7">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-[#f28c28] opacity-75 animate-ping" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#f28c28]" />
                </span>

                <span className="text-white text-sm font-semibold">
                  24/7 Emergency HVAC Service
                </span>
              </div>

              {/* Heading */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[0.98] tracking-tight">
                Comfort That
                <span className="block text-[#f28c28]">
                  Works For You.
                </span>
              </h1>

              {/* Description */}
              <p className="mt-7 max-w-2xl text-lg sm:text-xl text-gray-200 leading-8">
                Reliable heating, cooling and refrigeration solutions
                for homes, businesses and industrial facilities across
                the Finger Lakes region.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-9">

                {/* Request Service */}
                <button
                  onClick={() => scrollToSection("contact")}
                  className="group inline-flex items-center justify-center gap-2 bg-[#f28c28] hover:bg-[#ff9f3d] hover:scale-105 text-[#171717] px-7 py-4 rounded-xl font-extrabold transition-all duration-300"
                >
                  Request Service

                  <FiArrowUpRight className="text-xl group-hover:rotate-45 transition-transform duration-300" />
                </button>

                {/* Phone */}
                <a
                  href="tel:607-499-4822"
                  className="inline-flex items-center justify-center gap-2 border border-white/30 hover:bg-white hover:text-[#171717] text-white px-7 py-4 rounded-xl font-bold transition-all duration-300"
                >
                  <FiPhone />
                  (607) 499-4822
                </a>
              </div>

              {/* Trust Points */}
              <div className="flex flex-wrap gap-x-7 gap-y-3 mt-9">

                <div className="flex items-center gap-2 text-white/90 text-sm">
                  <FiCheck className="text-[#f28c28]" />
                  Licensed Professionals
                </div>

                <div className="flex items-center gap-2 text-white/90 text-sm">
                  <FiCheck className="text-[#f28c28]" />
                  Fast Response
                </div>

                <div className="flex items-center gap-2 text-white/90 text-sm">
                  <FiCheck className="text-[#f28c28]" />
                  Quality Service
                </div>

              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-5 mt-10 pt-7 border-t border-white/15 max-w-xl">

                <div>
                  <h3 className="text-2xl sm:text-3xl font-black text-[#f28c28]">
                    15+
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-300 mt-1">
                    Years Experience
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-black text-[#f28c28]">
                    500+
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-300 mt-1">
                    Projects Completed
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-black text-[#f28c28]">
                    24/7
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-300 mt-1">
                    Emergency Support
                  </p>
                </div>

              </div>
            </div>

            {/* =================================================
                RIGHT FLOATING CARD
            ================================================== */}
            <div className="lg:col-span-5 flex lg:justify-end">

              <div className="relative w-full max-w-sm">

                {/* Main Card */}
                <div className="bg-white/95 backdrop-blur-md border border-white/40 rounded-[2rem] p-7 shadow-[0_25px_60px_rgba(0,0,0,0.35)]">

                  {/* Card Header */}
                  <div className="flex items-center justify-between mb-7">

                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-gray-500 font-bold">
                        Our Expertise
                      </p>

                      <h2 className="text-2xl font-black text-[#171717] mt-1">
                        Complete HVAC Care
                      </h2>
                    </div>

                    <div
                      className="w-12 h-12 bg-[#171717] flex items-center justify-center text-[#f28c28] flex-shrink-0"
                      style={{
                        clipPath:
                          "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                      }}
                    >
                      <FiWind className="text-xl" />
                    </div>

                  </div>

                  {/* Services */}
                  <div className="space-y-3">

                    {/* Heating & Cooling */}
                    <div className="flex items-center gap-4 bg-[#f6f1e8] rounded-2xl p-4">

                      <div className="w-11 h-11 rounded-xl bg-orange-100 flex items-center justify-center text-[#f28c28] flex-shrink-0">
                        <FiThermometer />
                      </div>

                      <div>
                        <h3 className="font-bold text-[#171717]">
                          Heating & Cooling
                        </h3>

                        <p className="text-sm text-gray-500">
                          Installation & repair
                        </p>
                      </div>

                    </div>

                    {/* Refrigeration */}
                    <div className="flex items-center gap-4 bg-[#f6f1e8] rounded-2xl p-4">

                      <div className="w-11 h-11 rounded-xl bg-orange-100 flex items-center justify-center text-[#f28c28] flex-shrink-0">
                        <FiWind />
                      </div>

                      <div>
                        <h3 className="font-bold text-[#171717]">
                          Refrigeration
                        </h3>

                        <p className="text-sm text-gray-500">
                          Commercial solutions
                        </p>
                      </div>

                    </div>

                    {/* Emergency */}
                    <div className="flex items-center gap-4 bg-[#171717] rounded-2xl p-4 text-white">

                      <div className="w-11 h-11 rounded-xl bg-[#f28c28] flex items-center justify-center text-[#171717] flex-shrink-0">
                        <FiClock />
                      </div>

                      <div>
                        <h3 className="font-bold">
                          Emergency Service
                        </h3>

                        <p className="text-sm text-gray-400">
                          Available 24 hours
                        </p>
                      </div>

                    </div>

                  </div>

                  {/* Services Button */}
                  <button
                    onClick={() => scrollToSection("services")}
                    className="group mt-6 w-full inline-flex items-center justify-center gap-2 bg-[#171717] hover:bg-[#f28c28] hover:text-[#171717] text-white py-3.5 rounded-xl font-bold transition-all duration-300"
                  >
                    Explore Our Services

                    <FiArrowUpRight className="group-hover:rotate-45 transition-transform duration-300" />
                  </button>

                </div>

                {/* Floating Badge */}
                <div className="absolute -bottom-5 -left-5 sm:-left-8 bg-[#f28c28] rounded-2xl px-5 py-4 shadow-xl">

                  <p className="text-xs uppercase tracking-wider font-bold text-[#171717]/70">
                    Trusted Service
                  </p>

                  <p className="text-xl font-black text-[#171717]">
                    Finger Lakes
                  </p>

                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          QUICK SERVICE STRIP
      ====================================================== */}
      <section className="relative bg-[#171717]">

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          <div className="grid grid-cols-1 sm:grid-cols-3">

            {/* Emergency */}
            <div className="flex items-center gap-4 py-7 sm:pr-8">

              <div className="w-12 h-12 rounded-xl bg-[#f28c28] flex items-center justify-center text-[#171717] flex-shrink-0">
                <FiClock />
              </div>

              <div>
                <p className="text-white font-bold">
                  24/7 Emergency
                </p>

                <p className="text-gray-500 text-sm">
                  We're here when you need us
                </p>
              </div>

            </div>

            {/* HVAC Experts */}
            <div className="flex items-center gap-4 py-7 sm:px-8 sm:border-l sm:border-r border-white/10">

              <div className="w-12 h-12 rounded-xl bg-[#f28c28] flex items-center justify-center text-[#171717] flex-shrink-0">
                <FiWind />
              </div>

              <div>
                <p className="text-white font-bold">
                  HVAC Experts
                </p>

                <p className="text-gray-500 text-sm">
                  Heating & cooling solutions
                </p>
              </div>

            </div>

            {/* Quality */}
            <div className="flex items-center gap-4 py-7 sm:pl-8">

              <div className="w-12 h-12 rounded-xl bg-[#f28c28] flex items-center justify-center text-[#171717] flex-shrink-0">
                <FiCheck />
              </div>

              <div>
                <p className="text-white font-bold">
                  Quality First
                </p>

                <p className="text-gray-500 text-sm">
                  Professional service
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>
    </>
  );
};

export default Home;