import {
  FiPhone,
  FiMapPin,
  FiClock,
  FiArrowUpRight,
  FiCheck,
} from "react-icons/fi";
import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    const scriptId = "ghl-form-embed";

    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");

      script.id = scriptId;
      script.src = "https://link.kdlead.com/js/form_embed.js";
      script.async = true;

      document.body.appendChild(script);
    }

    return () => {
      // Keep the script available for the embedded GHL form
    };
  }, []);

  return (
    <main className="bg-[#f6f1e8] text-[#171717]">

     

      {/* =====================================================
          CONTACT CONTENT
      ====================================================== */}
      <section
        id="contact"
        className="py-24"
      >

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          {/* Section Heading */}
          <div className="text-center max-w-2xl mx-auto mb-16">

            <p className="text-[#f28c28] font-bold uppercase tracking-[0.2em] text-sm">
              Contact Us
            </p>

            <h2 className="mt-3 text-4xl sm:text-5xl font-black">
              Request HVAC
              <span className="text-[#f28c28]">
                {" "}Service.
              </span>
            </h2>

            <p className="mt-5 text-gray-600 leading-7">
              Tell us what you need and we'll help you find the right
              heating, cooling, or refrigeration solution.
            </p>

          </div>


          {/* Main Grid */}
          <div className="grid lg:grid-cols-12 gap-10 items-start">

            {/* =================================================
                LEFT SIDE
            ================================================== */}
            <div className="lg:col-span-5">

              {/* Contact Cards */}
              <div className="grid sm:grid-cols-2 gap-5">

                {/* Phone */}
                <div className="group bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

                  <div className="w-12 h-12 rounded-xl bg-[#171717] text-[#f28c28] flex items-center justify-center mb-5 group-hover:bg-[#f28c28] group-hover:text-[#171717] transition-colors">
                    <FiPhone className="text-xl" />
                  </div>

                  <p className="text-xs uppercase tracking-widest text-gray-400 font-bold">
                    Call Us
                  </p>

                  <a
                    href="tel:6074994822"
                    className="font-black text-lg text-[#171717] hover:text-[#f28c28] transition-colors mt-1 block"
                  >
                    607-499-4822
                  </a>

                  <p className="text-gray-500 text-xs mt-2">
                    Available 24/7 for emergencies
                  </p>

                </div>


                {/* Location */}
                <div className="group bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

                  <div className="w-12 h-12 rounded-xl bg-[#171717] text-[#f28c28] flex items-center justify-center mb-5 group-hover:bg-[#f28c28] group-hover:text-[#171717] transition-colors">
                    <FiMapPin className="text-xl" />
                  </div>

                  <p className="text-xs uppercase tracking-widest text-gray-400 font-bold">
                    Location
                  </p>

                  <p className="font-black text-[#171717] mt-1">
                   3162 NY-352, 
                  </p>

                  <p className="text-gray-500 text-xs mt-2">
                    Big Flats, NY 14814, United States
                  </p>

                </div>


                {/* Hours */}
                <div className="group bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

                  <div className="w-12 h-12 rounded-xl bg-[#171717] text-[#f28c28] flex items-center justify-center mb-5 group-hover:bg-[#f28c28] group-hover:text-[#171717] transition-colors">
                    <FiClock className="text-xl" />
                  </div>

                  <p className="text-xs uppercase tracking-widest text-gray-400 font-bold">
                    Hours
                  </p>

                  <p className="font-black text-[#171717] mt-1">
                    24/7 Emergency
                  </p>

                  <p className="text-gray-500 text-xs mt-2">
                    Office: Mon–Fri 8AM–5PM
                  </p>

                </div>


                {/* Service */}
                <div className="group bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

                  <div className="w-12 h-12 rounded-xl bg-[#171717] text-[#f28c28] flex items-center justify-center mb-5 group-hover:bg-[#f28c28] group-hover:text-[#171717] transition-colors">
                    <FiCheck className="text-xl" />
                  </div>

                  <p className="text-xs uppercase tracking-widest text-gray-400 font-bold">
                    Service
                  </p>

                  <p className="font-black text-[#171717] mt-1">
                    Residential & Commercial
                  </p>

                  <p className="text-gray-500 text-xs mt-2">
                    Heating, cooling & refrigeration
                  </p>

                </div>

              </div>


              {/* =================================================
                  SERVICE AREA IMAGE
              ================================================== */}
              <div className="relative rounded-3xl overflow-hidden h-72 shadow-xl mt-6">

                <img
                  src="/images/hvac-hero-new.jpg"
                  alt="Finger Lakes HVAC service area"
                  className="w-full h-full object-cover"
                  style={{
                    objectPosition: "center 30%",
                  }}
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#171717]/95 via-[#171717]/45 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-7">

                  <p className="text-[#f28c28] text-xs font-bold uppercase tracking-widest">
                    Service Area
                  </p>

                  <h3 className="text-white font-black text-2xl mt-1">
                    Finger Lakes Region
                  </h3>

                  <p className="text-gray-300 text-sm mt-2 leading-6">
                    Corning • Elmira • Watkins Glen • Bath
                    <br />
                    & surrounding areas
                  </p>

                </div>

              </div>


              {/* Emergency Notice */}
              <div className="mt-6 bg-[#171717] rounded-3xl p-7">

                <div className="flex items-start gap-4">

                  <div className="w-12 h-12 rounded-xl bg-[#f28c28] text-[#171717] flex items-center justify-center flex-shrink-0">
                    <FiClock className="text-xl" />
                  </div>

                  <div>

                    <h3 className="text-white font-black text-lg">
                      Need Emergency Service?
                    </h3>

                    <p className="text-gray-400 text-sm leading-6 mt-1">
                      We're available 24/7 for urgent heating,
                      cooling, and refrigeration problems.
                    </p>

                    <a
                      href="tel:6074994822"
                      className="inline-flex items-center gap-2 text-[#f28c28] font-bold text-sm mt-4 hover:gap-3 transition-all"
                    >
                      Call Now
                      <FiArrowUpRight />
                    </a>

                  </div>

                </div>

              </div>

            </div>


            {/* =================================================
                RIGHT SIDE - GHL FORM
            ================================================== */}
            <div
              id="contact-form"
              className="lg:col-span-7"
            >

              <div className="bg-white rounded-[2rem] overflow-hidden shadow-xl border border-gray-100">

                {/* Form Header */}
                <div className="bg-[#171717] px-7 sm:px-10 py-7">

                  <p className="text-[#f28c28] text-xs font-bold uppercase tracking-[0.2em]">
                    Request Service
                  </p>

                  <h3 className="text-2xl sm:text-3xl font-black text-white mt-2">
                    Tell Us How We Can Help.
                  </h3>

                  <p className="text-gray-400 text-sm mt-2">
                    Fill out the form and our team will get back to you.
                  </p>

                </div>


                {/* GHL Form */}
                <div className="bg-white">

                  <iframe
                    src="https://link.kdlead.com/widget/form/edzssY7O0Q7JQ97moS9m"
                    style={{
                      width: "100%",
                      height: "883px",
                      border: "none",
                    }}
                    id="inline-edzssY7O0Q7JQ97moS9m"
                    data-layout='{"id":"INLINE"}'
                    data-trigger-type="alwaysShow"
                    data-trigger-value=""
                    data-activation-type="alwaysActivated"
                    data-activation-value=""
                    data-deactivation-type="neverDeactivate"
                    data-deactivation-value=""
                    data-form-name="Finger Lakes HVAC & R Inc"
                    data-height="883"
                    data-layout-iframe-id="inline-edzssY7O0Q7JQ97moS9m"
                    data-form-id="edzssY7O0Q7JQ97moS9m"
                    title="Finger Lakes HVAC & R Inc Service Request Form"
                    loading="lazy"
                  />

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
};

export default Contact;