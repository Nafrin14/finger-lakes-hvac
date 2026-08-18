import { useState, useEffect } from "react";
import {
  FiMenu,
  FiX,
  FiPhone,
  FiArrowUpRight,
} from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Services", id: "services" },
    { name: "Reviews", id: "reviews" },
    { name: "Contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = [
        "home",
        "about",
        "services",
        "reviews",
        "contact",
      ];

      let currentSection = "home";

      sections.forEach((id) => {
        const section = document.getElementById(id);

        if (section) {
          const rect = section.getBoundingClientRect();

          if (rect.top <= 140 && rect.bottom >= 140) {
            currentSection = id;
          }
        }
      });

      setActiveSection(currentSection);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);

    if (element) {
      const navbarOffset = 100;
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;

      window.scrollTo({
        top: elementPosition - navbarOffset,
        behavior: "smooth",
      });
    }

    setActiveSection(id);
    setIsOpen(false);
  };

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4">

      <div className="max-w-6xl mx-auto">

        {/* =====================================================
            NAVBAR CONTAINER
        ====================================================== */}
        <div
          className={`
            rounded-2xl
            border border-white/10
            shadow-2xl
            transition-all duration-300
            ${
              scrolled
                ? "bg-[#171717]/95 backdrop-blur-xl"
                : "bg-[#171717]"
            }
          `}
        >

          {/* =================================================
              NAVBAR MAIN
          ================================================== */}
          <div className="h-[76px] px-4 sm:px-7 flex items-center justify-between">

            {/* =================================================
                LOGO
            ================================================== */}
            <button
              onClick={() => scrollTo("home")}
              className="flex items-center gap-3 group"
              aria-label="Go to homepage"
            >

              {/* Logo Icon */}
              <div
                className="
                  w-11 h-11 sm:w-12 sm:h-12
                  flex items-center justify-center
                  bg-[#f28c28]
                  group-hover:scale-105
                  transition-transform duration-300
                "
                style={{
                  clipPath:
                    "polygon(25% 6%, 75% 6%, 100% 50%, 75% 94%, 25% 94%, 0% 50%)",
                }}
              >
                <span className="text-[#171717] font-black text-base sm:text-lg">
                  FL
                </span>
              </div>

              {/* Logo Text */}
              <div className="leading-tight text-left">

                <p className="text-white font-extrabold text-sm sm:text-lg">
                  Finger Lakes
                </p>

                <p className="text-[#f28c28] text-[9px] sm:text-xs font-bold tracking-[0.16em] sm:tracking-[0.18em]">
                  HVAC &amp; R INC.
                </p>

              </div>

            </button>


            {/* =================================================
                DESKTOP NAVIGATION
            ================================================== */}
            <nav
              className="
                hidden lg:flex
                items-center
                bg-[#292929]
                rounded-full
                p-1
              "
            >

              {navLinks.map((link) => (

                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className={`
                    px-5
                    py-2.5
                    rounded-full
                    text-sm
                    font-semibold
                    transition-all
                    duration-300
                    ${
                      activeSection === link.id
                        ? "bg-[#f28c28] text-[#171717] shadow-md"
                        : "text-gray-300 hover:text-white hover:bg-white/10"
                    }
                  `}
                >
                  {link.name}
                </button>

              ))}

            </nav>


            {/* =================================================
                DESKTOP CALL BUTTON
            ================================================== */}
            <a
              href="tel:6074994822"
              className="
                hidden lg:flex
                items-center
                gap-2
                bg-[#f28c28]
                hover:bg-[#ff9f3d]
                text-[#171717]
                px-5
                py-3
                rounded-xl
                font-extrabold
                text-sm
                transition-all
                duration-300
                hover:scale-105
              "
            >
              <FiPhone />

              Call Now

              <FiArrowUpRight />
            </a>


            {/* =================================================
                MOBILE MENU BUTTON
            ================================================== */}
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              className="
                lg:hidden
                w-11
                h-11
                rounded-xl
                bg-[#f28c28]
                text-[#171717]
                flex
                items-center
                justify-center
                hover:bg-[#ff9f3d]
                transition-colors
              "
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <FiX className="text-xl" />
              ) : (
                <FiMenu className="text-xl" />
              )}
            </button>

          </div>


          {/* =================================================
              MOBILE MENU
          ================================================== */}
          <div
            className={`
              lg:hidden
              overflow-hidden
              transition-all
              duration-300
              ${
                isOpen
                  ? "max-h-[500px] opacity-100"
                  : "max-h-0 opacity-0"
              }
            `}
          >

            <div className="px-4 sm:px-5 pb-5">

              <div className="bg-[#292929] rounded-2xl p-3">

                {/* Mobile Links */}
                <nav className="space-y-1">

                  {navLinks.map((link) => (

                    <button
                      key={link.id}
                      onClick={() => scrollTo(link.id)}
                      className={`
                        w-full
                        text-left
                        flex
                        items-center
                        justify-between
                        px-4
                        py-3.5
                        rounded-xl
                        font-semibold
                        text-sm
                        transition-all
                        duration-200
                        ${
                          activeSection === link.id
                            ? "bg-[#f28c28] text-[#171717]"
                            : "text-gray-300 hover:bg-white/10 hover:text-white"
                        }
                      `}
                    >

                      <span>{link.name}</span>

                      {activeSection === link.id && (
                        <span className="w-2 h-2 rounded-full bg-[#171717]" />
                      )}

                    </button>

                  ))}

                </nav>


                {/* Mobile Call Button */}
                <a
                  href="tel:6074994822"
                  onClick={() => setIsOpen(false)}
                  className="
                    mt-3
                    flex
                    items-center
                    justify-center
                    gap-2
                    bg-[#f28c28]
                    hover:bg-[#ff9f3d]
                    text-[#171717]
                    px-4
                    py-3.5
                    rounded-xl
                    font-extrabold
                    transition-colors
                  "
                >
                  <FiPhone />

                  (607) 499-4822

                  <FiArrowUpRight />
                </a>

              </div>

            </div>

          </div>

        </div>

      </div>

    </header>
  );
};

export default Navbar;