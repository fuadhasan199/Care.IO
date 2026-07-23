import React from 'react';

async function GetServices() {
  const res = await fetch(`http://localhost:3000/api/services`, { cache: "no-store" })
  return res.json()
}

const Services = async () => {
  const services = await GetServices()

  return (
    <div className="bg-base-100 p-5">

      {/* Heading & description */}
      <div className="max-w-7xl mx-auto text-center py-3 px-3">
        <span className="inline-block px-4 py-1 mb-4 text-sm font-semibold text-primary bg-primary/10 rounded-full">
          Our Services
        </span>

        <h1 className="text-4xl md:text-5xl font-bold text-base-content leading-tight">
          Find the Right Care for Your Loved Ones
        </h1>

        <p className="mt-5 text-base md:text-lg text-base-content/70 leading-8">
          Explore a wide range of personalized care services delivered by trained and
          verified professionals. Choose the support that best fits your family's
          needs.
        </p>
      </div>
      {/* Heading & description End */}

      {/* Search bar and filter */}
      <div className="flex items-center justify-between mx-12 p-8">
        <div>
          <input type="text" placeholder="Search Services" className="input input-md" />
        </div>

        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn m-1">Filter</div>
          <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
            <li><a>Item 1</a></li>
            <li><a>Item 2</a></li>
          </ul>
        </div>
      </div>

      {/* Service cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 pb-12">
        {services.map((s) => (
          <div
            key={s._id}
            className="group relative flex flex-col bg-white rounded-2xl overflow-hidden border border-black/5 shadow-sm hover:shadow-lg transition-shadow duration-300"
          >
            {/* Image */}
            <div className="relative h-48 w-full overflow-hidden">
              <img
                src={s.image}
                alt={s.title}
                className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-3 left-3 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold text-[#1F4D42]">
                {s.category}
              </span>
              <span className="absolute top-3 right-3 flex items-center gap-1 bg-[#1F4D42] text-white px-2.5 py-1 rounded-full text-xs font-semibold">
                ★ {s.rating}
              </span>
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 p-5">
              <h3 className="text-lg font-bold text-[#1F4D42] leading-snug">
                {s.title}
              </h3>
              <p className="mt-2 text-sm text-slate-500 leading-6 line-clamp-2">
                {s.shortDescription}
              </p>

              {/* Feature chips */}
              <div className="mt-4 flex flex-wrap gap-2">
                {s.features?.slice(0, 3).map((f, i) => (
                  <span
                    key={i}
                    className="text-[11px] font-medium text-[#E8846B] bg-[#E8846B]/10 px-2.5 py-1 rounded-full"
                  >
                    {f}
                  </span>
                ))}
              </div>

              {/* Footer */}
              <div className="mt-auto pt-5 flex items-center justify-between border-t border-black/5 mt-5">
                <div>
                  <span className="text-xl font-bold text-[#1F4D42]">
                    ৳{s.pricePerDay}
                  </span>
                  <span className="text-xs text-slate-400"> /day</span>
                </div>
                <button className="px-4 py-2 rounded-full bg-[#1F4D42] text-white text-sm font-semibold hover:bg-[#163931] transition-colors">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Services;