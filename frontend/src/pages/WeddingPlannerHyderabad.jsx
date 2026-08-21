import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const WeddingPlannerHyderabad = () => {
  useEffect(() => {
    document.title =
      "Wedding Planner in Hyderabad | Weddings by Kaarya";

    const metaDescription =
      "Weddings by Kaarya is a luxury wedding planner in Hyderabad specialising in bespoke weddings, destination weddings, design, hospitality and seamless execution.";

    let descriptionTag = document.querySelector(
      'meta[name="description"]'
    );

    if (!descriptionTag) {
      descriptionTag = document.createElement("meta");
      descriptionTag.setAttribute("name", "description");
      document.head.appendChild(descriptionTag);
    }

    descriptionTag.setAttribute("content", metaDescription);

    const canonicalUrl =
      "https://kaaryaweddings.com/wedding-planner-hyderabad";

    let canonicalTag = document.querySelector(
      'link[rel="canonical"]'
    );

    if (!canonicalTag) {
      canonicalTag = document.createElement("link");
      canonicalTag.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalTag);
    }

    canonicalTag.setAttribute("href", canonicalUrl);

    return () => {
      document.title = "Weddings by Kaarya";
    };
  }, []);

  return (
    <main className="bg-[#210d12] text-[#f5eadf] min-h-screen">

      {/* HERO */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#35151c] via-[#210d12] to-[#210d12]" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 text-center">
          <p className="uppercase tracking-[0.35em] text-sm text-[#c9a46c] mb-6">
            Weddings by Kaarya · Hyderabad
          </p>

          <h1 className="font-serif text-5xl md:text-7xl leading-tight mb-8">
            Wedding Planner
            <br />
            in Hyderabad
          </h1>

          <p className="max-w-3xl mx-auto text-lg md:text-xl leading-8 text-[#e6d7cf] mb-10">
            Bespoke wedding planning and destination wedding experiences
            crafted with refined design, thoughtful hospitality and seamless
            execution — in Hyderabad and across India.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="px-8 py-4 border border-[#c9a46c] bg-[#c9a46c] text-[#210d12] uppercase tracking-[0.2em] text-sm hover:bg-transparent hover:text-[#c9a46c] transition"
            >
              Plan Your Wedding
            </Link>

            <Link
              to="/"
              className="px-8 py-4 border border-[#c9a46c] text-[#c9a46c] uppercase tracking-[0.2em] text-sm hover:bg-[#c9a46c] hover:text-[#210d12] transition"
            >
              Discover Our Journey
            </Link>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-start">

          <div>
            <p className="uppercase tracking-[0.3em] text-sm text-[#c9a46c] mb-5">
              Wedding Planning in Hyderabad
            </p>

            <h2 className="font-serif text-4xl md:text-5xl leading-tight">
              Celebrations designed around your story.
            </h2>
          </div>

          <div className="text-[#dbcac1] text-lg leading-8">
            <p className="mb-6">
              Weddings by Kaarya is a luxury wedding planning studio based in
              Hyderabad, creating thoughtfully designed celebrations for
              couples and families across India.
            </p>

            <p>
              From intimate family celebrations to multi-day destination
              weddings, our team brings together planning, design, production,
              hospitality and logistics under one carefully coordinated
              experience.
            </p>
          </div>

        </div>
      </section>

      {/* WHY KAARYA */}
      <section className="border-y border-[#6b4149] bg-[#2a1118]">
        <div className="max-w-6xl mx-auto px-6 py-24">

          <div className="max-w-3xl mb-16">
            <p className="uppercase tracking-[0.3em] text-sm text-[#c9a46c] mb-5">
              The Kaarya Approach
            </p>

            <h2 className="font-serif text-4xl md:text-5xl mb-6">
              Dream. Design. Deliver.
            </h2>

            <p className="text-[#dbcac1] text-lg leading-8">
              Every celebration begins with understanding your vision and
              evolves through thoughtful design and precise execution.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="border border-[#6b4149] p-8">
              <span className="text-[#c9a46c] text-3xl font-serif">I</span>

              <h3 className="font-serif text-2xl mt-6 mb-4">
                Dream
              </h3>

              <p className="text-[#dbcac1] leading-7">
                We understand your story, family, traditions, priorities and
                the experience you want your guests to remember.
              </p>
            </div>

            <div className="border border-[#6b4149] p-8">
              <span className="text-[#c9a46c] text-3xl font-serif">II</span>

              <h3 className="font-serif text-2xl mt-6 mb-4">
                Design
              </h3>

              <p className="text-[#dbcac1] leading-7">
                We develop the visual language, décor, experiences and
                production details around your celebration.
              </p>
            </div>

            <div className="border border-[#6b4149] p-8">
              <span className="text-[#c9a46c] text-3xl font-serif">III</span>

              <h3 className="font-serif text-2xl mt-6 mb-4">
                Deliver
              </h3>

              <p className="text-[#dbcac1] leading-7">
                Our team coordinates the details behind the scenes so that
                your family and guests can remain fully present in the
                celebration.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="max-w-6xl mx-auto px-6 py-24">

        <div className="max-w-3xl mb-14">
          <p className="uppercase tracking-[0.3em] text-sm text-[#c9a46c] mb-5">
            Our Expertise
          </p>

          <h2 className="font-serif text-4xl md:text-5xl mb-6">
            End-to-end wedding planning services
          </h2>

          <p className="text-[#dbcac1] text-lg leading-8">
            From the first planning conversation to the final farewell,
            Kaarya brings together the essential elements required to create
            an exceptional wedding experience.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">

          {[
            "Wedding Planning & Coordination",
            "Destination Wedding Planning",
            "Wedding Design & Décor",
            "Production & Technical Management",
            "Guest Hospitality",
            "Transportation & Logistics",
            "Venue & Vendor Coordination",
            "Entertainment & Experiences",
            "Wedding Branding & Stationery",
          ].map((service) => (
            <div
              key={service}
              className="border border-[#6b4149] p-6 hover:border-[#c9a46c] transition"
            >
              <h3 className="font-serif text-xl">
                {service}
              </h3>
            </div>
          ))}

        </div>
      </section>

      {/* HYDERABAD */}
      <section className="bg-[#2a1118] border-y border-[#6b4149]">
        <div className="max-w-6xl mx-auto px-6 py-24">

          <div className="grid md:grid-cols-2 gap-16">

            <div>
              <p className="uppercase tracking-[0.3em] text-sm text-[#c9a46c] mb-5">
                Hyderabad Weddings
              </p>

              <h2 className="font-serif text-4xl md:text-5xl leading-tight">
                A Hyderabad wedding, elevated.
              </h2>
            </div>

            <div className="text-[#dbcac1] text-lg leading-8">
              <p className="mb-6">
                Hyderabad brings together royal heritage, contemporary luxury,
                rich culinary traditions and a diverse collection of wedding
                venues. We create celebrations that respect these traditions
                while giving each wedding its own distinctive identity.
              </p>

              <p>
                Whether you are planning a traditional multi-day celebration,
                an intimate luxury wedding or a large family gathering, our
                planning approach is built around your guest experience,
                design vision and priorities.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* DESTINATION CONNECTION */}
      <section className="max-w-6xl mx-auto px-6 py-24">

        <div className="max-w-4xl">
          <p className="uppercase tracking-[0.3em] text-sm text-[#c9a46c] mb-5">
            Beyond Hyderabad
          </p>

          <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-8">
            From Hyderabad to India's most memorable destinations.
          </h2>

          <p className="text-[#dbcac1] text-lg leading-8 mb-10">
            For families looking beyond Hyderabad, Kaarya also plans bespoke
            destination weddings across India. From venue selection and guest
            hospitality to décor, production and logistics, we bring the same
            level of planning and execution to celebrations across destinations.
          </p>

          <Link
            to="/"
            className="inline-block border-b border-[#c9a46c] text-[#c9a46c] pb-2 uppercase tracking-[0.2em] text-sm"
          >
            Explore Wedding Destinations →
          </Link>

        </div>
      </section>

      {/* REAL WEDDINGS */}
      <section className="bg-[#2a1118] border-y border-[#6b4149]">
        <div className="max-w-6xl mx-auto px-6 py-24 text-center">

          <p className="uppercase tracking-[0.3em] text-sm text-[#c9a46c] mb-5">
            Our Work
          </p>

          <h2 className="font-serif text-4xl md:text-5xl mb-8">
            Celebrations we've brought to life.
          </h2>

          <p className="max-w-2xl mx-auto text-[#dbcac1] text-lg leading-8 mb-10">
            Explore selected celebrations and discover how our planning,
            design and execution come together across different wedding
            experiences.
          </p>

          <Link
            to="/"
            className="inline-block border border-[#c9a46c] px-8 py-4 text-[#c9a46c] uppercase tracking-[0.2em] text-sm hover:bg-[#c9a46c] hover:text-[#210d12] transition"
          >
            Explore Real Weddings
          </Link>

        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-5xl mx-auto px-6 py-24">

        <p className="uppercase tracking-[0.3em] text-sm text-[#c9a46c] mb-5">
          Frequently Asked Questions
        </p>

        <h2 className="font-serif text-4xl md:text-5xl mb-12">
          Hyderabad wedding planning, answered.
        </h2>

        <div className="space-y-8">

          <div>
            <h3 className="font-serif text-2xl mb-3">
              How much does a wedding planner in Hyderabad cost?
            </h3>

            <p className="text-[#dbcac1] leading-7">
              Wedding planning costs vary depending on guest count, venue,
              number of events, design requirements, hospitality and the level
              of production involved. Kaarya develops proposals based on the
              specific requirements of each celebration.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-2xl mb-3">
              Does Kaarya plan destination weddings from Hyderabad?
            </h3>

            <p className="text-[#dbcac1] leading-7">
              Yes. Our team plans destination weddings across India, managing
              venue coordination, design, hospitality, logistics and event
              execution.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-2xl mb-3">
              What does a wedding planner manage?
            </h3>

            <p className="text-[#dbcac1] leading-7">
              Depending on the scope, wedding planning can include venue
              coordination, design, décor, vendor management, hospitality,
              guest logistics, production, entertainment and on-ground event
              coordination.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-2xl mb-3">
              Does Kaarya work with families travelling to Hyderabad?
            </h3>

            <p className="text-[#dbcac1] leading-7">
              Yes. We can coordinate guest hospitality, accommodation,
              transportation and event logistics for families and guests
              travelling to Hyderabad for wedding celebrations.
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[#6b4149]">
        <div className="max-w-5xl mx-auto px-6 py-28 text-center">

          <p className="uppercase tracking-[0.3em] text-sm text-[#c9a46c] mb-6">
            Begin Your Wedding Journey
          </p>

          <h2 className="font-serif text-4xl md:text-6xl mb-8">
            Let's create something unforgettable.
          </h2>

          <p className="max-w-2xl mx-auto text-[#dbcac1] text-lg leading-8 mb-10">
            Tell us about your celebration, your vision and the people who
            matter most. We'll take it from there.
          </p>

          <Link
            to="/"
            className="inline-block px-10 py-5 bg-[#c9a46c] text-[#210d12] uppercase tracking-[0.2em] text-sm hover:bg-transparent hover:text-[#c9a46c] border border-[#c9a46c] transition"
          >
            Plan Your Wedding
          </Link>

        </div>
      </section>

    </main>
  );
};

export default WeddingPlannerHyderabad;