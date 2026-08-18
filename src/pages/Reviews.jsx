import {
  FiStar,
  FiMapPin,
} from "react-icons/fi";

// =====================================================
// REVIEWS DATA
// =====================================================

const reviews = [
  {
    name: "Sarah M.",
    location: "Corning, NY",
    rating: 5,
    text: "Finger Lakes HVAC came out within hours when our furnace broke down in the middle of winter. Professional, fast and the price was very reasonable. Highly recommend!",
    service: "Heating Repair",
    avatar: "SM",
    color: "bg-orange-500",
  },
  {
    name: "James T.",
    location: "Elmira, NY",
    rating: 5,
    text: "Had them install a new central air system. The team was knowledgeable, clean and finished ahead of schedule. Our house has never been more comfortable.",
    service: "AC Installation",
    avatar: "JT",
    color: "bg-blue-500",
  },
  {
    name: "Linda K.",
    location: "Watkins Glen, NY",
    rating: 5,
    text: "Used them for our restaurant's commercial refrigeration. They diagnosed the issue quickly and had us back up and running the same day. Outstanding service!",
    service: "Commercial Refrigeration",
    avatar: "LK",
    color: "bg-purple-500",
  },
  {
    name: "Robert D.",
    location: "Bath, NY",
    rating: 5,
    text: "Been using Finger Lakes HVAC for our annual maintenance for years. They're always on time, thorough, and genuinely care about their customers. Best in the region.",
    service: "HVAC Maintenance",
    avatar: "RD",
    color: "bg-teal-500",
  },
  {
    name: "Patricia W.",
    location: "Hammondsport, NY",
    rating: 5,
    text: "Called late on a Friday evening with a broken AC during a heat wave. They came out Saturday morning and fixed it quickly. True professionals!",
    service: "Emergency Service",
    avatar: "PW",
    color: "bg-red-500",
  },
  {
    name: "Michael B.",
    location: "Horseheads, NY",
    rating: 5,
    text: "Very professional team. They replaced our old HVAC system and explained everything clearly. Fair pricing and excellent craftsmanship. Couldn't be happier.",
    service: "System Replacement",
    avatar: "MB",
    color: "bg-green-500",
  },
];

// =====================================================
// REVIEWS SECTION
// =====================================================

const Reviews = () => {
  return (
    <section
      id="reviews"
      className="bg-[#f6f1e8] text-[#171717]"
    >
      {/* =====================================================
          REVIEWS HEADER
      ===================================================== */}

      <div className="relative bg-[#171717] overflow-hidden py-24 sm:py-28">

        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="w-full h-full bg-[radial-gradient(circle_at_center,#f28c28_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>

        {/* Decorative Shape */}
        <div
          className="absolute top-10 -right-32 w-96 h-96 bg-[#f28c28]/15 pointer-events-none"
          style={{
            clipPath:
              "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
          }}
        />

        <div
          className="absolute -bottom-20 -left-24 w-72 h-72 border border-[#f28c28]/20 pointer-events-none"
          style={{
            clipPath:
              "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          <div className="max-w-3xl mx-auto text-center">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-7">

              <span className="w-2.5 h-2.5 rounded-full bg-[#f28c28]" />

              <span className="text-white text-sm font-semibold">
                Customer Testimonials
              </span>

            </div>

            {/* Heading */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
              What Our Customers

              <span className="block text-[#f28c28]">
                Are Saying.
              </span>
            </h2>

            {/* Description */}
            <p className="mt-6 text-lg text-gray-300 leading-8 max-w-2xl mx-auto">
              Hear from homeowners and businesses we've served
              across the Finger Lakes region.
            </p>

            {/* Rating */}
            <div className="inline-flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl px-6 py-4 mt-8">

              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FiStar
                    key={star}
                    className="text-[#f28c28] fill-[#f28c28] text-xl"
                  />
                ))}
              </div>

              <div className="h-7 w-px bg-white/20" />

              <div className="text-left">

                <p className="text-white font-black text-lg">
                  5.0
                </p>

                <p className="text-gray-400 text-xs">
                  Average Rating
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* =====================================================
          REVIEWS GRID
      ===================================================== */}

      <div className="py-24">

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">

            {reviews.map(
              (
                {
                  name,
                  location,
                  rating,
                  text,
                  service,
                  avatar,
                  color,
                },
                index
              ) => (

                <article
                  key={name}
                  className={`group rounded-3xl p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
                    index % 3 === 1
                      ? "bg-[#f28c28] text-[#171717]"
                      : "bg-white text-[#171717] border border-gray-100"
                  }`}
                >

                  {/* Stars */}
                  <div className="flex gap-1 mb-5">

                    {[...Array(rating)].map((_, i) => (
                      <FiStar
                        key={i}
                        className={`text-lg ${
                          index % 3 === 1
                            ? "text-[#171717] fill-[#171717]"
                            : "text-[#f28c28] fill-[#f28c28]"
                        }`}
                      />
                    ))}

                  </div>

                  {/* Review */}
                  <p
                    className={`leading-7 text-sm ${
                      index % 3 === 1
                        ? "text-[#171717]/80"
                        : "text-gray-600"
                    }`}
                  >
                    "{text}"
                  </p>

                  {/* Service */}
                  <div className="mt-5">

                    <span
                      className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-bold ${
                        index % 3 === 1
                          ? "bg-[#171717]/10 text-[#171717]"
                          : "bg-[#f6f1e8] text-[#f28c28]"
                      }`}
                    >
                      {service}
                    </span>

                  </div>

                  {/* Customer */}
                  <div
                    className={`flex items-center gap-3 mt-6 pt-5 border-t ${
                      index % 3 === 1
                        ? "border-[#171717]/10"
                        : "border-gray-100"
                    }`}
                  >

                    <div
                      className={`w-12 h-12 rounded-full ${color} flex items-center justify-center text-white font-black text-sm flex-shrink-0`}
                    >
                      {avatar}
                    </div>

                    <div>

                      <p className="font-black">
                        {name}
                      </p>

                      <div
                        className={`flex items-center gap-1 text-xs mt-1 ${
                          index % 3 === 1
                            ? "text-[#171717]/60"
                            : "text-gray-500"
                        }`}
                      >
                        <FiMapPin />

                        {location}

                      </div>

                    </div>

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

export default Reviews;