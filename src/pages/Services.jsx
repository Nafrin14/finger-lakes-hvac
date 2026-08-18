import {
  FiArrowUpRight,
  FiPhone,
  FiThermometer,
  FiWind,
  FiZap,
  FiDroplet,
  FiTool,
  FiClock,
} from "react-icons/fi";

const services = [
  {
    icon: FiThermometer,
    title: "Heating Services",
    desc: "Expert heating installation, repair, and maintenance to keep your home or business warm and comfortable throughout the winter.",
    tags: ["Furnace Repair", "Boiler Service", "Heat Pumps"],
    image:
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1000&h=700&fit=crop&auto=format",
  },
  {
    icon: FiWind,
    title: "Air Conditioning",
    desc: "Professional air conditioning installation, repair, and maintenance designed to keep your property cool and comfortable.",
    tags: ["AC Installation", "AC Repair", "Tune-Ups"],
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1000&h=700&fit=crop&auto=format",
  },
  {
    icon: FiZap,
    title: "Commercial HVAC",
    desc: "Complete commercial HVAC solutions for offices, retail locations, warehouses, and industrial facilities.",
    tags: ["Commercial Units", "Rooftop Systems", "Ductwork"],
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1000&h=700&fit=crop&auto=format",
  },
  {
    icon: FiDroplet,
    title: "Refrigeration",
    desc: "Reliable commercial and industrial refrigeration services for businesses that depend on properly operating cooling systems.",
    tags: ["Walk-In Coolers", "Freezers", "Ice Machines"],
    image:
      "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=1000&h=700&fit=crop&auto=format",
  },
  {
    icon: FiTool,
    title: "HVAC Maintenance",
    desc: "Preventive maintenance services designed to improve system efficiency, reduce unexpected breakdowns, and extend equipment life.",
    tags: ["Filter Change", "System Check", "Cleaning"],
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1000&h=700&fit=crop&auto=format",
  },
  {
    icon: FiClock,
    title: "Emergency HVAC Service",
    desc: "24/7 emergency HVAC support when you need immediate assistance with heating, cooling, or refrigeration problems.",
    tags: ["24/7 Available", "Fast Response", "All Systems"],
    image:
      "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=1000&h=700&fit=crop&auto=format",
    emergency: true,
  },
];

const Services = () => {
  const scrollToContact = (e) => {
    e.preventDefault();

    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section
      id="services"
      className="bg-[#f6f1e8] text-[#171717]"
    >
      {/* =====================================================
          OUR SERVICES
      ===================================================== */}
      <div className="bg-[#f6f1e8] py-24">

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          {/* Section Heading */}
          <div className="text-center max-w-2xl mx-auto mb-16">

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black">
              Our Services
              <span className="block text-[#f28c28]">
                HVAC Solutions You Can Trust.
              </span>
            </h1>

            <p className="mt-5 text-gray-600 leading-7">
              Comprehensive heating, cooling, refrigeration, and HVAC
              solutions for homes, businesses, and industrial facilities.
            </p>

          </div>

          {/* Service Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {services.map(
              ({
                icon: Icon,
                title,
                desc,
                tags,
                image,
                emergency,
              }) => (
                <article
                  key={title}
                  className={`group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                    emergency
                      ? "ring-2 ring-[#f28c28]/50"
                      : ""
                  }`}
                >

                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">

                    <img
                      src={image}
                      alt={title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    {/* Icon */}
                    <div className="absolute top-5 left-5">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl flex items-center justify-center text-white text-xl">
                        <Icon />
                      </div>
                    </div>

                    {/* Emergency Badge */}
                    {emergency && (
                      <div className="absolute top-5 right-5 bg-[#f28c28] text-[#171717] text-xs font-black px-3 py-1.5 rounded-full">
                        24/7 AVAILABLE
                      </div>
                    )}

                    {/* Title */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h2 className="text-2xl font-black text-white">
                        {title}
                      </h2>
                    </div>

                  </div>

                  {/* Content */}
                  <div className="p-7">

                    <p className="text-gray-600 leading-7">
                      {desc}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mt-5">

                      {tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs bg-[#f6f1e8] text-[#171717] font-semibold px-3 py-1.5 rounded-full border border-[#f28c28]/30"
                        >
                          {tag}
                        </span>
                      ))}

                    </div>

                    {/* Request Service */}
                    <a
                      href="#contact"
                      onClick={scrollToContact}
                      className="group/link mt-6 inline-flex items-center gap-2 text-[#f28c28] font-bold hover:gap-3 transition-all"
                    >
                      Request This Service

                      <FiArrowUpRight className="group-hover/link:rotate-45 transition-transform" />
                    </a>

                  </div>

                </article>
              )
            )}

          </div>
        </div>
      </div>

    </section>
  );
};

export default Services;