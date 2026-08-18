import {
  FiArrowUpRight,
  FiPhone,
  FiCheck,
  FiTool,
  FiUsers,
  FiAward,
  FiShield,
} from "react-icons/fi";

const About = () => {
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
    <main id="about" className="bg-[#f6f1e8] text-[#171717]">

      {/* =====================================================
          ABOUT INTRO
      ====================================================== */}
      <section className="py-24 pt-32">

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* IMAGE */}
            <div className="relative">

              <div className="rounded-[2rem] overflow-hidden shadow-2xl">

                <img
                  src="/images/hvac-hero-new.jpg"
                  alt="Professional HVAC technician"
                  loading="lazy"
                  className="w-full h-[520px] object-cover"
                />

              </div>

              {/* Decorative Shape */}
              <div
                className="absolute -top-6 -left-6 w-24 h-24 bg-[#f28c28] pointer-events-none"
                style={{
                  clipPath:
                    "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                }}
              />

              {/* Experience Badge */}
              <div className="absolute -bottom-7 -right-4 sm:right-6 bg-[#f28c28] rounded-2xl px-6 py-5 shadow-xl">

                <p className="text-xs uppercase tracking-wider font-bold text-[#171717]/70">
                  Trusted Service
                </p>

                <p className="text-3xl font-black text-[#171717]">
                  15+ Years
                </p>

                <p className="text-sm font-semibold text-[#171717]/80">
                  HVAC Experience
                </p>

              </div>

            </div>


            {/* CONTENT */}
            <div>

              <p className="text-[#f28c28] font-bold uppercase tracking-[0.2em] text-sm">
                Who We Are
              </p>

              <h2 className="mt-3 text-4xl sm:text-5xl font-black leading-tight">
                Reliable HVAC Solutions
                <span className="block text-[#f28c28]">
                  You Can Count On.
                </span>
              </h2>

              <p className="mt-6 text-gray-600 leading-8">
                Finger Lakes HVAC & R Inc. provides dependable heating,
                cooling and refrigeration services for residential,
                commercial and industrial customers.
              </p>

              <p className="mt-4 text-gray-600 leading-8">
                Our team is committed to delivering quality workmanship,
                reliable solutions and professional customer service on
                every project.
              </p>


              {/* Features */}
              <div className="grid sm:grid-cols-2 gap-4 mt-8">

                {/* Feature 1 */}
                <div className="flex items-center gap-3">

                  <div className="w-10 h-10 rounded-xl bg-[#171717] text-[#f28c28] flex items-center justify-center flex-shrink-0">
                    <FiCheck />
                  </div>

                  <span className="font-bold">
                    Professional Service
                  </span>

                </div>


                {/* Feature 2 */}
                <div className="flex items-center gap-3">

                  <div className="w-10 h-10 rounded-xl bg-[#171717] text-[#f28c28] flex items-center justify-center flex-shrink-0">
                    <FiCheck />
                  </div>

                  <span className="font-bold">
                    Quality Workmanship
                  </span>

                </div>


                {/* Feature 3 */}
                <div className="flex items-center gap-3">

                  <div className="w-10 h-10 rounded-xl bg-[#171717] text-[#f28c28] flex items-center justify-center flex-shrink-0">
                    <FiCheck />
                  </div>

                  <span className="font-bold">
                    Fast Response
                  </span>

                </div>


                {/* Feature 4 */}
                <div className="flex items-center gap-3">

                  <div className="w-10 h-10 rounded-xl bg-[#171717] text-[#f28c28] flex items-center justify-center flex-shrink-0">
                    <FiCheck />
                  </div>

                  <span className="font-bold">
                    Customer Focused
                  </span>

                </div>

              </div>


              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-9">

                <button
                  onClick={() => scrollToSection("services")}
                  className="group inline-flex items-center justify-center gap-2 bg-[#171717] hover:bg-[#f28c28] hover:text-[#171717] text-white px-7 py-4 rounded-xl font-extrabold transition-all duration-300"
                >
                  Our Services

                  <FiArrowUpRight className="text-xl group-hover:rotate-45 transition-transform duration-300" />
                </button>


                <a
                  href="tel:607-499-4822"
                  className="inline-flex items-center justify-center gap-2 border-2 border-[#171717] hover:bg-[#171717] hover:text-white px-7 py-4 rounded-xl font-bold transition-all duration-300"
                >
                  <FiPhone />
                  607-499-4822
                </a>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          STATS
      ====================================================== */}
      <section className="bg-[#171717] py-16">

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="text-center">
              <h3 className="text-4xl sm:text-5xl font-black text-[#f28c28]">
                15+
              </h3>

              <p className="mt-2 text-gray-400">
                Years Experience
              </p>
            </div>


            <div className="text-center">
              <h3 className="text-4xl sm:text-5xl font-black text-[#f28c28]">
                500+
              </h3>

              <p className="mt-2 text-gray-400">
                Projects Completed
              </p>
            </div>


            <div className="text-center">
              <h3 className="text-4xl sm:text-5xl font-black text-[#f28c28]">
                24/7
              </h3>

              <p className="mt-2 text-gray-400">
                Emergency Service
              </p>
            </div>


            <div className="text-center">
              <h3 className="text-4xl sm:text-5xl font-black text-[#f28c28]">
                100%
              </h3>

              <p className="mt-2 text-gray-400">
                Customer Focus
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          WHY CHOOSE US
      ====================================================== */}
      <section className="bg-white py-24">

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          <div className="text-center max-w-2xl mx-auto mb-14">

            <p className="text-[#f28c28] font-bold uppercase tracking-[0.2em] text-sm">
              Why Choose Us
            </p>

            <h2 className="mt-3 text-4xl sm:text-5xl font-black">
              Service That Makes
              <span className="text-[#f28c28]">
                {" "}a Difference.
              </span>
            </h2>

            <p className="mt-5 text-gray-600 leading-7">
              We combine experience, quality and dependable service
              to provide HVAC solutions you can rely on.
            </p>

          </div>


          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            {/* Expert Work */}
            <div className="group bg-[#f6f1e8] rounded-3xl p-7 hover:-translate-y-2 transition-all duration-300">

              <div className="w-14 h-14 rounded-2xl bg-[#171717] text-[#f28c28] flex items-center justify-center text-2xl group-hover:bg-[#f28c28] group-hover:text-[#171717] transition-colors">
                <FiTool />
              </div>

              <h3 className="text-xl font-black mt-6">
                Expert Work
              </h3>

              <p className="text-gray-600 mt-3 leading-7">
                Professional HVAC service focused on reliable
                results and long-lasting solutions.
              </p>

            </div>


            {/* Customer First */}
            <div className="group bg-[#f6f1e8] rounded-3xl p-7 hover:-translate-y-2 transition-all duration-300">

              <div className="w-14 h-14 rounded-2xl bg-[#171717] text-[#f28c28] flex items-center justify-center text-2xl group-hover:bg-[#f28c28] group-hover:text-[#171717] transition-colors">
                <FiUsers />
              </div>

              <h3 className="text-xl font-black mt-6">
                Customer First
              </h3>

              <p className="text-gray-600 mt-3 leading-7">
                We listen to our customers and focus on their
                individual heating and cooling needs.
              </p>

            </div>


            {/* Quality Service */}
            <div className="group bg-[#f6f1e8] rounded-3xl p-7 hover:-translate-y-2 transition-all duration-300">

              <div className="w-14 h-14 rounded-2xl bg-[#171717] text-[#f28c28] flex items-center justify-center text-2xl group-hover:bg-[#f28c28] group-hover:text-[#171717] transition-colors">
                <FiAward />
              </div>

              <h3 className="text-xl font-black mt-6">
                Quality Service
              </h3>

              <p className="text-gray-600 mt-3 leading-7">
                Attention to detail and quality workmanship
                on every service and installation.
              </p>

            </div>


            {/* Dependable */}
            <div className="group bg-[#f6f1e8] rounded-3xl p-7 hover:-translate-y-2 transition-all duration-300">

              <div className="w-14 h-14 rounded-2xl bg-[#171717] text-[#f28c28] flex items-center justify-center text-2xl group-hover:bg-[#f28c28] group-hover:text-[#171717] transition-colors">
                <FiShield />
              </div>

              <h3 className="text-xl font-black mt-6">
                Dependable
              </h3>

              <p className="text-gray-600 mt-3 leading-7">
                Responsive and dependable HVAC support when
                you need it most.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          OUR COMMITMENT
      ====================================================== */}
      <section className="py-24 bg-[#f6f1e8]">

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* LEFT CONTENT */}
            <div>

              <p className="text-[#f28c28] font-bold uppercase tracking-[0.2em] text-sm">
                Our Commitment
              </p>

              <h2 className="mt-3 text-4xl sm:text-5xl font-black leading-tight">
                Keeping Your
                <span className="block text-[#f28c28]">
                  Comfort on Track.
                </span>
              </h2>

              <p className="mt-6 text-gray-600 leading-8">
                We understand how important reliable heating,
                cooling and refrigeration systems are to your home
                or business.
              </p>

              <p className="mt-4 text-gray-600 leading-8">
                That's why we focus on dependable service, quality
                workmanship and solutions designed around your needs.
              </p>


              <div className="mt-8 space-y-5">

                {/* Reliable Solutions */}
                <div className="flex items-start gap-4">

                  <div className="w-10 h-10 rounded-xl bg-[#171717] text-[#f28c28] flex items-center justify-center flex-shrink-0">
                    <FiCheck />
                  </div>

                  <div>
                    <h3 className="font-black">
                      Reliable Solutions
                    </h3>

                    <p className="text-gray-600 text-sm mt-1">
                      HVAC solutions designed for dependable
                      performance.
                    </p>
                  </div>

                </div>


                {/* Professional Approach */}
                <div className="flex items-start gap-4">

                  <div className="w-10 h-10 rounded-xl bg-[#171717] text-[#f28c28] flex items-center justify-center flex-shrink-0">
                    <FiCheck />
                  </div>

                  <div>
                    <h3 className="font-black">
                      Professional Approach
                    </h3>

                    <p className="text-gray-600 text-sm mt-1">
                      Clear communication and professional service
                      from start to finish.
                    </p>
                  </div>

                </div>


                {/* Long-Term Comfort */}
                <div className="flex items-start gap-4">

                  <div className="w-10 h-10 rounded-xl bg-[#171717] text-[#f28c28] flex items-center justify-center flex-shrink-0">
                    <FiCheck />
                  </div>

                  <div>
                    <h3 className="font-black">
                      Long-Term Comfort
                    </h3>

                    <p className="text-gray-600 text-sm mt-1">
                      Solutions that help keep your systems
                      performing reliably.
                    </p>
                  </div>

                </div>

              </div>

            </div>


            {/* RIGHT CARD */}
            <div className="relative">

              <div className="relative z-10 bg-[#171717] rounded-[2rem] p-8 sm:p-10 shadow-2xl">

                <div
                  className="w-20 h-20 bg-[#f28c28] flex items-center justify-center text-[#171717] text-3xl"
                  style={{
                    clipPath:
                      "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                  }}
                >
                  <FiTool />
                </div>

                <h3 className="text-3xl sm:text-4xl font-black text-white mt-8 leading-tight">
                  Heating.
                  <span className="block text-[#f28c28]">
                    Cooling.
                  </span>
                  <span className="block">
                    Refrigeration.
                  </span>
                </h3>

                <p className="text-gray-400 leading-7 mt-6">
                  Complete HVAC and refrigeration services for
                  residential, commercial and industrial customers.
                </p>

                <div className="mt-8 pt-6 border-t border-white/10">

                  <div className="flex items-center justify-between">

                    <span className="text-gray-400">
                      Emergency Service
                    </span>

                    <span className="text-[#f28c28] font-black">
                      24/7
                    </span>

                  </div>

                </div>

              </div>


              <div
                className="absolute -bottom-8 -right-8 w-32 h-32 bg-[#f28c28]/20 pointer-events-none"
                style={{
                  clipPath:
                    "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                }}
              />

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          ABOUT CTA
      ====================================================== */}
      <section className="bg-[#171717] py-20">

        <div className="max-w-5xl mx-auto px-5 text-center">

          <p className="text-[#f28c28] font-bold uppercase tracking-[0.2em] text-sm">
            Need HVAC Service?
          </p>

          <h2 className="text-4xl sm:text-5xl font-black text-white mt-3">
            Let Us Keep Your
            <span className="text-[#f28c28]">
              {" "}Comfort Running.
            </span>
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto leading-7">
            Contact Finger Lakes HVAC & R Inc. for dependable
            heating, cooling and refrigeration services.
          </p>


          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">

            <button
              onClick={() => scrollToSection("contact")}
              className="group inline-flex items-center justify-center gap-2 bg-[#f28c28] hover:bg-[#ff9f3d] text-[#171717] px-7 py-4 rounded-xl font-extrabold transition-all duration-300"
            >
              Request Service

              <FiArrowUpRight className="text-xl group-hover:rotate-45 transition-transform duration-300" />
            </button>


            <a
              href="tel:607-499-4822"
              className="inline-flex items-center justify-center gap-2 border border-white/25 hover:bg-white hover:text-[#171717] text-white px-7 py-4 rounded-xl font-bold transition-all duration-300"
            >
              <FiPhone />
              607-499-4822
            </a>

          </div>

        </div>
      </section>

    </main>
  );
};

export default About;