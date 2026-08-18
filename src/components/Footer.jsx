import {
  FiPhone,
  FiMapPin,
  FiClock,
  FiArrowUp,
  FiMail,
  FiWind,
} from "react-icons/fi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollTo = (id) => {
    const el = document.getElementById(id);

    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="bg-[#0f0f0f] text-white">

      {/* Decorative Top Border */}
      <div className="h-1 bg-gradient-to-r from-[#f28c28] via-[#ff9f3d] to-[#f28c28]" />

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-16">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* =====================================================
              COMPANY
          ====================================================== */}
          <div>

            <div className="flex items-center gap-3 mb-6">

              <div
                className="w-12 h-12 flex items-center justify-center bg-[#f28c28]"
                style={{
                  clipPath:
                    "polygon(25% 6%, 75% 6%, 100% 50%, 75% 94%, 25% 94%, 0% 50%)",
                }}
              >
                <span className="text-[#1c1c1c] font-black text-lg">
                  FL
                </span>
              </div>

              <div>
                <p className="font-extrabold text-lg leading-tight">
                  Finger Lakes
                </p>

                <p className="text-[#f28c28] text-xs font-bold tracking-widest">
                  HVAC &amp; R INC.
                </p>
              </div>

            </div>

            <p className="text-gray-400 leading-7 text-sm">
              Reliable heating, cooling and refrigeration solutions for
              homes, businesses and industrial facilities across the
              Finger Lakes region.
            </p>

            <a
              href="tel:6074994822"
              className="inline-flex items-center gap-2 mt-6 bg-[#f28c28] hover:bg-[#ff9f3d] text-[#1c1c1c] px-5 py-3 rounded-xl font-extrabold text-sm transition-all hover:scale-105"
            >
              <FiPhone />
              607-499-4822
            </a>

          </div>

          {/* =====================================================
              QUICK LINKS
          ====================================================== */}
          <div>

            <h3 className="text-base font-black mb-6 uppercase tracking-widest text-[#f28c28]">
              Quick Links
            </h3>

            <ul className="space-y-3">

              {[
                { id: "home", label: "Home" },
                { id: "about", label: "About Us" },
                { id: "services", label: "Services" },
                { id: "reviews", label: "Reviews" },
                { id: "contact", label: "Contact" },
              ].map((link) => (

                <li key={link.id}>

                  <button
                    onClick={() => scrollTo(link.id)}
                    className="text-gray-400 hover:text-[#f28c28] transition font-medium text-sm"
                  >
                    {link.label}
                  </button>

                </li>

              ))}

            </ul>

          </div>

          {/* =====================================================
              SERVICES
          ====================================================== */}
          <div>

            <h3 className="text-base font-black mb-6 uppercase tracking-widest text-[#f28c28]">
              Our Services
            </h3>

            <ul className="space-y-3 text-gray-400 text-sm">

              {[
                "Heating Services",
                "Air Conditioning",
                "Commercial HVAC",
                "Refrigeration",
                "HVAC Maintenance",
                "Emergency Service",
              ].map((service) => (

                <li
                  key={service}
                  className="flex items-center gap-2"
                >
                  <FiWind className="text-[#f28c28] text-xs flex-shrink-0" />
                  {service}
                </li>

              ))}

            </ul>

          </div>

          {/* =====================================================
              CONTACT
          ====================================================== */}
          <div>

            <h3 className="text-base font-black mb-6 uppercase tracking-widest text-[#f28c28]">
              Contact Us
            </h3>

            <div className="space-y-4">

              {/* Address */}
              <div className="flex items-start gap-3">

                <FiMapPin className="text-[#f28c28] mt-1 shrink-0" />

                <p className="text-gray-400 leading-6 text-sm">
                 3162 NY-352, Big Flats, NY 14814, United States
                  <br />
                 NY 14814, United States
                </p>

              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">

                <FiPhone className="text-[#f28c28] shrink-0" />

                <a
                  href="tel:6074994822"
                  className="text-gray-400 hover:text-white transition text-sm"
                >
                  607-499-4822
                </a>

              </div>

              

              {/* Hours */}
              <div className="flex items-start gap-3">

                <FiClock className="text-[#f28c28] mt-1 shrink-0" />

                <p className="text-gray-400 text-sm">
                  24/7 Emergency Service
                  <br />

                  <span className="text-[#f28c28] font-bold">
                    Always Available
                  </span>
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* =====================================================
          BOTTOM FOOTER
      ====================================================== */}
      <div className="border-t border-white/5">

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">

          {/* Copyright */}
          <p className="text-sm text-gray-600 text-center sm:text-left">
            © {currentYear} Finger Lakes HVAC &amp; R Inc. All rights reserved.
          </p>

          {/* Bottom Links */}
          <div className="flex flex-wrap items-center justify-center gap-5">

            <a
              href="/terms-and-conditions"
              className="text-xs text-gray-500 hover:text-[#f28c28] transition"
            >
              Terms &amp; Conditions
            </a>

            <a
              href="/privacy-policy"
              className="text-xs text-gray-500 hover:text-[#f28c28] transition"
            >
              Privacy Policy
            </a>

            <button
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
              className="flex items-center gap-2 text-sm text-gray-500 hover:text-[#f28c28] transition group"
            >
              Back to Top

              <span className="w-7 h-7 rounded-full border border-gray-600 group-hover:border-[#f28c28] flex items-center justify-center transition">
                <FiArrowUp className="text-xs" />
              </span>

            </button>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;