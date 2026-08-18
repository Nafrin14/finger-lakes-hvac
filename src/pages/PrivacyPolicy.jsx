import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FiArrowLeft,
  FiPhone,
  FiMenu,
  FiX,
} from "react-icons/fi";
import { useState } from "react";

// =====================================================
// SECTION
// =====================================================
const Section = ({ number, title, children }) => (
  <div className="mb-12">
    <h2 className="text-2xl font-black text-[#171717] mb-4">
      <span className="text-[#f28c28]">{number}.</span>{" "}
      {title}
    </h2>

    <div className="text-gray-600 leading-8 space-y-4 text-sm sm:text-base">
      {children}
    </div>
  </div>
);

// =====================================================
// SUB SECTION
// =====================================================
const SubSection = ({ id, title, children }) => (
  <div className="mt-6">
    <h3 className="text-lg font-bold text-[#171717] mb-3">
      <span className="text-[#f28c28]">{id}</span> {title}
    </h3>

    <div className="text-gray-600 leading-8 space-y-3 text-sm sm:text-base">
      {children}
    </div>
  </div>
);

// =====================================================
// BULLET LIST
// =====================================================
const BulletList = ({ items }) => (
  <ul className="space-y-3 ml-1">
    {items.map((item, i) => (
      <li key={i} className="flex items-start gap-3">
        <span className="text-[#f28c28] mt-2 text-xs flex-shrink-0">
          ▸
        </span>

        <span>{item}</span>
      </li>
    ))}
  </ul>
);

// =====================================================
// NAVBAR
// =====================================================
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="h-20 flex items-center justify-between">

          {/* LOGO */}
          <Link
            to="/"
            onClick={closeMenu}
            className="flex items-center gap-3"
          >
            <div
              className="w-11 h-11 bg-[#171717] text-[#f28c28] flex items-center justify-center font-black text-lg"
              style={{
                clipPath:
                  "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
              }}
            >
              FL
            </div>

            <div className="leading-tight">
              <p className="font-black text-[#171717] text-sm sm:text-base">
                FINGER LAKES
              </p>

              <p className="text-[10px] sm:text-xs font-bold text-[#f28c28] tracking-widest">
                HVAC & R INC.
              </p>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-8">

            <Link
              to="/"
              className="text-sm font-bold text-gray-600 hover:text-[#f28c28] transition"
            >
              Home
            </Link>

            <Link
              to="/#about"
              className="text-sm font-bold text-gray-600 hover:text-[#f28c28] transition"
            >
              About
            </Link>

            <Link
              to="/services"
              className="text-sm font-bold text-gray-600 hover:text-[#f28c28] transition"
            >
              Services
            </Link>

            <Link
              to="/#reviews"
              className="text-sm font-bold text-gray-600 hover:text-[#f28c28] transition"
            >
              Reviews
            </Link>

            <Link
              to="/#contact"
              className="inline-flex items-center gap-2 bg-[#f28c28] hover:bg-[#ff9f3d] text-[#171717] px-5 py-3 rounded-xl text-sm font-extrabold transition-all hover:scale-105"
            >
              <FiPhone />
              Request Service
            </Link>

          </nav>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-11 h-11 rounded-xl bg-[#171717] text-[#f28c28] flex items-center justify-center"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <FiX className="text-xl" />
            ) : (
              <FiMenu className="text-xl" />
            )}
          </button>
        </div>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div className="md:hidden border-t border-gray-200 py-5">
            <nav className="flex flex-col gap-2">

              <Link
                to="/"
                onClick={closeMenu}
                className="px-4 py-3 rounded-xl text-sm font-bold text-gray-700 hover:bg-[#f6f1e8] hover:text-[#f28c28]"
              >
                Home
              </Link>

              <Link
                to="/#about"
                onClick={closeMenu}
                className="px-4 py-3 rounded-xl text-sm font-bold text-gray-700 hover:bg-[#f6f1e8] hover:text-[#f28c28]"
              >
                About
              </Link>

              <Link
                to="/services"
                onClick={closeMenu}
                className="px-4 py-3 rounded-xl text-sm font-bold text-gray-700 hover:bg-[#f6f1e8] hover:text-[#f28c28]"
              >
                Services
              </Link>

              <Link
                to="/#reviews"
                onClick={closeMenu}
                className="px-4 py-3 rounded-xl text-sm font-bold text-gray-700 hover:bg-[#f6f1e8] hover:text-[#f28c28]"
              >
                Reviews
              </Link>

              <Link
                to="/#contact"
                onClick={closeMenu}
                className="mt-2 inline-flex items-center justify-center gap-2 bg-[#f28c28] text-[#171717] px-5 py-3 rounded-xl text-sm font-extrabold"
              >
                <FiPhone />
                Request Service
              </Link>

            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

// =====================================================
// PRIVACY POLICY PAGE
// =====================================================
const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, []);

  return (
    <div className="min-h-screen bg-[#f6f1e8] text-[#171717]">

      {/* =================================================
          NAVBAR
      ================================================= */}
      <Navbar />

      {/* =================================================
          HERO
      ================================================= */}
      <section className="relative bg-[#171717] pt-32 pb-20 overflow-hidden">

        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="w-full h-full bg-[radial-gradient(circle_at_center,#f28c28_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>

        {/* Decorative Shape */}
        <div
          className="absolute -right-24 top-24 w-80 h-80 bg-[#f28c28]/15 pointer-events-none"
          style={{
            clipPath:
              "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
          }}
        />

        <div className="relative max-w-5xl mx-auto px-5 sm:px-8">

          {/* Back */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-[#f28c28] text-sm font-semibold transition mb-8"
          >
            <FiArrowLeft />
            Back to Home
          </Link>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-6">
            <span className="w-2.5 h-2.5 rounded-full bg-[#f28c28]" />

            <span className="text-[#f28c28] text-xs font-bold tracking-widest uppercase">
              Legal
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
            Privacy Policy
          </h1>

          <p className="text-gray-400 text-sm mt-5">
            <span className="text-gray-300 font-semibold">
              Effective Date:
            </span>{" "}
            January 19, 2025

            <span className="mx-3 text-gray-600">|</span>

            <span className="text-gray-300 font-semibold">
              Last Updated:
            </span>{" "}
            August 18, 2026
          </p>

        </div>
      </section>

      {/* =================================================
          CONTENT
      ================================================= */}
      <section className="py-16 sm:py-20">

        <div className="max-w-4xl mx-auto px-5 sm:px-8">

          {/* INTRO */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-200 mb-12">

            <p className="text-gray-600 text-sm sm:text-base leading-8">
              Finger Lakes HVAC & R Inc. ("we," "our," or "us") is
              committed to protecting your privacy and personal
              information. This Privacy Policy explains how we collect,
              use, disclose, and safeguard your information when you use
              our website or services.
            </p>

          </div>

          {/* 1 */}
          <Section
            number="1"
            title="Information We Collect"
          >
            <p>
              We may collect the following categories of personal
              information when you contact us, request a quote, submit a
              web form, or use our services:
            </p>

            <BulletList
              items={[
                "Full name",
                "Mailing or service address",
                "Email address",
                "Mobile phone number",
                "Service request details and project descriptions",
                "Communication history and preferences",
              ]}
            />
          </Section>

          {/* 2 */}
          <Section
            number="2"
            title="SMS / Text Message Communications"
          >

            <SubSection
              id="2a."
              title="How We Collect Your Mobile Number"
            >
              <p>
                We collect your mobile phone number when you voluntarily
                provide it through our website contact forms, phone calls,
                or other direct communication channels. By providing your
                mobile number and checking the SMS consent checkbox on our
                forms, you expressly consent to receive SMS communications
                from Finger Lakes HVAC & R Inc.
              </p>
            </SubSection>

            <SubSection
              id="2b."
              title="Types of Messages We Send"
            >
              <p>
                By opting in, you may receive recurring automated text
                messages from Finger Lakes HVAC & R Inc., including:
              </p>

              <BulletList
                items={[
                  "Service appointment confirmations and reminders",
                  "Project status updates and scheduling notifications",
                  "Customer support and follow-up communications",
                  "Estimate and project-related communications",
                  "Promotional offers and seasonal service announcements",
                ]}
              />
            </SubSection>

            <SubSection
              id="2c."
              title="Message Frequency"
            >
              <p>
                Message frequency varies based on your interactions with
                us, ongoing service needs, and active promotions.
              </p>
            </SubSection>

            <SubSection
              id="2d."
              title="Message & Data Rates"
            >
              <p>
                Message and data rates may apply. Charges are determined
                by your mobile carrier and individual service plan.
                Finger Lakes HVAC & R Inc. is not responsible for
                carrier charges.
              </p>
            </SubSection>

            <SubSection
              id="2e."
              title="How to Opt Out (STOP)"
            >
              <p>
                You may cancel SMS messages at any time by replying{" "}
                <span className="text-[#171717] font-bold">
                  STOP
                </span>{" "}
                to any text message you receive from us.
              </p>

              <p>
                After opting out, you will receive a one-time
                confirmation message and will no longer receive SMS
                communications unless you re-enroll.
              </p>
            </SubSection>

            <SubSection
              id="2f."
              title="How to Get Help (HELP)"
            >
              <p>
                For help with our SMS program, reply{" "}
                <span className="text-[#171717] font-bold">
                  HELP
                </span>{" "}
                to any message or contact us directly.
              </p>

              <BulletList
                items={[
                  "Phone: 607-499-4822",
                ]}
              />
            </SubSection>

          </Section>

          {/* 3 */}
          <Section
            number="3"
            title="Mobile Information & SMS Consent — No Third-Party Sharing"
          >
            <p>
              No mobile information, including your mobile phone number
              and SMS opt-in consent data, will be shared with third
              parties or affiliates for marketing or promotional
              purposes.
            </p>

            <p>
              Text messaging originator opt-in data and consent
              information will not be shared with third parties under
              any circumstances.
            </p>
          </Section>

          {/* 4 */}
          <Section
            number="4"
            title="How We Use Your Information"
          >
            <p>
              We use the personal information we collect to:
            </p>

            <BulletList
              items={[
                "Provide and manage HVAC and refrigeration services",
                "Respond to inquiries and service requests",
                "Schedule appointments and send reminders",
                "Send promotional communications with your consent",
                "Improve our website and service quality",
                "Comply with applicable laws and regulations",
              ]}
            />
          </Section>

          {/* 5 */}
          <Section
            number="5"
            title="Cookies and Tracking Technologies"
          >
            <p>
              We may use cookies and similar technologies to improve
              website functionality, analyze traffic, and enhance user
              experience.
            </p>

            <p>
              Cookies do not store sensitive personal information.
            </p>
          </Section>

          {/* 6 */}
          <Section
            number="6"
            title="Data Security"
          >
            <p>
              We implement reasonable administrative, technical, and
              physical security measures to protect your personal data
              against unauthorized access, disclosure, alteration, or
              destruction.
            </p>

            <p>
              However, no method of electronic transmission or storage
              is completely secure.
            </p>
          </Section>

          {/* 7 */}
          <Section
            number="7"
            title="Data Retention"
          >
            <p>
              We retain your personal information only for as long as
              necessary to fulfill the purposes outlined in this Privacy
              Policy or as required by applicable law.
            </p>

            <p>
              When your information is no longer needed, we may securely
              delete or anonymize it.
            </p>
          </Section>

          {/* 8 */}
          <Section
            number="8"
            title="Your Privacy Rights"
          >
            <p>
              Depending on your location, you may have the following
              rights regarding your personal data:
            </p>

            <BulletList
              items={[
                "Access: Request a copy of the personal data we hold about you",
                "Correction: Request correction of inaccurate personal data",
                "Deletion: Request deletion of your personal data",
                "Opt-Out of SMS: Reply STOP to any text message at any time",
                "Opt-Out of Marketing: Contact us to be removed from marketing lists",
              ]}
            />

            <p>
              To exercise any of these rights, contact us or call{" "}
              <a
                href="tel:6074994822"
                className="text-[#f28c28] hover:underline font-semibold"
              >
                607-499-4822
              </a>
              .
            </p>
          </Section>

          {/* 9 */}
          <Section
            number="9"
            title="Changes to This Privacy Policy"
          >
            <p>
              We may update this Privacy Policy from time to time.
              Updated versions will be posted on this page with a revised
              "Last Updated" date.
            </p>

            <p>
              Continued use of our website or services after changes are
              posted constitutes acceptance of the updated policy.
            </p>
          </Section>

          {/* 10 */}
          <Section
            number="10"
            title="Contact Information"
          >
            <div className="bg-white rounded-3xl p-7 sm:p-8 border border-gray-200 shadow-sm">

              <p className="text-xl font-black text-[#171717] mb-5">
                Finger Lakes HVAC & R Inc.
              </p>

              <div className="space-y-4 text-sm sm:text-base">

                <p className="text-gray-600">
                  <span className="font-bold text-[#171717]">
                    Address:
                  </span>{" "}
                  3162 NY-352, Big Flats, NY 14814, United States
                </p>

                <p className="text-gray-600">
                  <span className="font-bold text-[#171717]">
                    Phone:
                  </span>{" "}
                  <a
                    href="tel:6074994822"
                    className="text-[#f28c28] hover:underline font-semibold"
                  >
                    607-499-4822
                  </a>
                </p>

              </div>

            </div>
          </Section>

          {/* =================================================
              PAGE LINKS
          ================================================= */}
          <div className="border-t border-gray-200 pt-8 mt-14 flex flex-col sm:flex-row justify-between gap-4">

            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-[#f28c28] transition"
            >
              <FiArrowLeft />
              Back to Home
            </Link>

            <Link
              to="/terms-and-conditions"
              className="text-sm font-bold text-gray-500 hover:text-[#f28c28] transition"
            >
              View Terms & Conditions →
            </Link>

          </div>

        </div>
      </section>

      {/* =================================================
          FOOTER
      ================================================= */}
      <footer className="bg-[#171717] border-t border-white/10">

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-10">

          <div className="flex flex-col md:flex-row items-center justify-between gap-5">

            <div className="text-center md:text-left">

              <p className="text-white font-black">
                Finger Lakes HVAC & R Inc.
              </p>

              <p className="text-gray-500 text-sm mt-1">
                Reliable Heating, Cooling & Refrigeration
              </p>

            </div>

            <div className="flex items-center gap-6">

              <Link
                to="/privacy-policy"
                className="text-sm text-[#f28c28] font-semibold"
              >
                Privacy Policy
              </Link>

              <Link
                to="/terms-and-conditions"
                className="text-sm text-gray-400 hover:text-[#f28c28] transition"
              >
                Terms & Conditions
              </Link>

            </div>

          </div>

          <div className="border-t border-white/10 mt-7 pt-7 text-center">

            <p className="text-xs text-gray-600">
              © {new Date().getFullYear()} Finger Lakes HVAC & R Inc. All
              rights reserved.
            </p>

          </div>

        </div>

      </footer>

    </div>
  );
};

export default PrivacyPolicy;