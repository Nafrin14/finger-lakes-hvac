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
// TERMS PAGE
// =====================================================
const TermsAndConditions = () => {
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

        {/* Pattern */}
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
            Terms & Conditions
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
              Welcome to{" "}
              <span className="text-[#171717] font-bold">
                Finger Lakes HVAC & R Inc.
              </span>{" "}
              By accessing this website or using our services, you agree to
              be bound by these Terms and Conditions. If you do not agree
              with any part of these terms, please do not use our website
              or services.
            </p>

          </div>


          {/* 1 */}
          <Section
            number="1"
            title="Business Identity"
          >
            <p>
              These Terms and Conditions govern your use of the services
              provided by{" "}
              <span className="text-[#171717] font-semibold">
                Finger Lakes HVAC & R Inc.
              </span>
            </p>

            <p>
              Our business address is{" "}
              <span className="text-[#171717] font-semibold">
                3162 NY-352, Big Flats, NY 14814, United States
              </span>
              .
            </p>

            <p>
              Phone:{" "}
              <a
                href="tel:6074994822"
                className="text-[#f28c28] font-semibold hover:underline"
              >
                607-499-4822
              </a>
            </p>
          </Section>


          {/* 2 */}
          <Section
            number="2"
            title="Age Requirement (18+)"
          >
            <p>
              By using this website or enrolling in our services, including
              SMS messaging, you confirm that you are at least 18 years of
              age. Our services and SMS program are not directed to
              individuals under 18.
            </p>
          </Section>


          {/* 3 */}
          <Section
            number="3"
            title="Terminology"
          >
            <p>
              "Client," "You," and "Your" refer to the user of this
              website or customer of our services.
            </p>

            <p>
              "The Company," "We," "Our," and "Us" refer to Finger Lakes
              HVAC & R Inc.
            </p>
          </Section>


          {/* 4 */}
          <Section
            number="4"
            title="SMS Messaging Terms of Service"
          >

            <SubSection
              id="4a."
              title="Program Description & Message Types"
            >
              <p>
                By providing your phone number and checking the SMS consent
                checkbox on our contact forms, you agree to receive
                recurring automated text messages from Finger Lakes HVAC &
                R Inc.
              </p>

              <p>
                Messages may include:
              </p>

              <BulletList
                items={[
                  "Service appointment confirmations and scheduling notifications",
                  "Appointment reminders and service updates",
                  "Customer support and follow-up communications",
                  "Estimate and project-related communications",
                  "Promotional offers and seasonal service announcements",
                ]}
              />
            </SubSection>


            <SubSection
              id="4b."
              title="Message Frequency"
            >
              <p>
                Message frequency varies based on your service activity
                and interactions with us. Message frequency may increase
                during active service periods.
              </p>
            </SubSection>


            <SubSection
              id="4c."
              title="Message & Data Rates"
            >
              <p>
                Message and data rates may apply for messages sent to you
                from us and to us from you. Charges are determined by your
                mobile carrier and individual service plan. Finger Lakes
                HVAC & R Inc. is not responsible for carrier charges.
              </p>
            </SubSection>


            <SubSection
              id="4d."
              title="How to Opt Out (STOP)"
            >
              <p>
                You can opt out of receiving SMS messages at any time by
                replying{" "}
                <span className="text-[#171717] font-bold">
                  STOP
                </span>{" "}
                to any message we send.
              </p>

              <p>
                After opting out, you will receive a one-time confirmation
                message and will no longer receive SMS messages from us
                unless you re-enroll.
              </p>
            </SubSection>


            <SubSection
              id="4e."
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


            <SubSection
              id="4f."
              title="Carrier Liability Disclaimer"
            >
              <p>
                Mobile carriers are not liable for delayed or undelivered
                messages. Finger Lakes HVAC & R Inc. cannot guarantee
                delivery of SMS messages.
              </p>
            </SubSection>


            <SubSection
              id="4g."
              title="Supported Carriers"
            >
              <p>
                Our SMS program may be supported by major U.S. wireless
                carriers. Carrier availability and message delivery may
                vary depending on your mobile provider and location.
              </p>
            </SubSection>

          </Section>


          {/* 5 */}
          <Section
            number="5"
            title="Cookies"
          >
            <p>
              We may use cookies and similar technologies to improve user
              experience, website functionality, and performance.
            </p>

            <p>
              For additional information, please review our{" "}
              <Link
                to="/privacy-policy"
                className="text-[#f28c28] hover:underline font-semibold"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </Section>


          {/* 6 */}
          <Section
            number="6"
            title="Intellectual Property & License"
          >
            <p>
              Unless otherwise stated, Finger Lakes HVAC & R Inc. owns or
              has appropriate rights to the intellectual property and
              content displayed on this website.
            </p>

            <p>
              You may not copy, reproduce, republish, sell, distribute, or
              otherwise use website content without prior written
              permission.
            </p>
          </Section>


          {/* 7 */}
          <Section
            number="7"
            title="User Content"
          >
            <p>
              If users submit information, comments, reviews, or other
              content through our website or services, they are responsible
              for ensuring that the information provided is accurate and
              does not violate applicable laws or the rights of others.
            </p>
          </Section>


          {/* 8 */}
          <Section
            number="8"
            title="Content Liability"
          >
            <p>
              We are not responsible for content appearing on external
              websites that link to or from our website. External websites
              are operated independently and may have their own terms and
              privacy policies.
            </p>
          </Section>


          {/* 9 */}
          <Section
            number="9"
            title="Disclaimer"
          >
            <p>
              To the maximum extent permitted by applicable law, Finger
              Lakes HVAC & R Inc. makes no warranties or representations
              regarding the uninterrupted availability, accuracy, or
              completeness of website content.
            </p>

            <p>
              We are not liable for losses or damages arising from the use
              of this website, except where such liability cannot be
              excluded under applicable law.
            </p>
          </Section>


          {/* 10 */}
          <Section
            number="10"
            title="Changes to These Terms"
          >
            <p>
              We reserve the right to update these Terms and Conditions at
              any time. Changes will be posted on this page with a revised
              "Last Updated" date.
            </p>

            <p>
              Continued use of our website or services after changes are
              posted constitutes acceptance of the updated terms.
            </p>
          </Section>


          {/* 11 */}
          <Section
            number="11"
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


          {/* LINKS */}
          <div className="border-t border-gray-200 pt-8 mt-14 flex flex-col sm:flex-row justify-between gap-4">

            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-[#f28c28] transition"
            >
              <FiArrowLeft />
              Back to Home
            </Link>

            <Link
              to="/privacy-policy"
              className="text-sm font-bold text-gray-500 hover:text-[#f28c28] transition"
            >
              View Privacy Policy →
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
                className="text-sm text-gray-400 hover:text-[#f28c28] transition"
              >
                Privacy Policy
              </Link>

              <Link
                to="/terms-and-conditions"
                className="text-sm text-[#f28c28] font-semibold"
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

export default TermsAndConditions;