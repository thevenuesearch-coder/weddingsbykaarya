import React, { useEffect } from "react";

const destinations = [
  {
    name: "Udaipur",
    subtitle: "Royal Destination Weddings",
    image:
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=85",
    description:
      "Udaipur's lakes, palaces and heritage architecture create an elegant setting for a royal Indian destination wedding.",
  },
  {
    name: "Jaipur",
    subtitle: "Heritage & Palace Weddings",
    image:
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=85",
    description:
      "Jaipur combines grand heritage architecture, vibrant Rajasthani culture and refined hospitality for unforgettable destination celebrations.",
  },
  {
    name: "Goa",
    subtitle: "Beach Destination Weddings",
    image:
      "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?auto=format&fit=crop&w=1200&q=85",
    description:
      "Goa offers tropical landscapes, luxury resorts and relaxed celebrations for couples dreaming of a beautiful beach destination wedding.",
  },
  {
    name: "Jodhpur",
    subtitle: "Grand Royal Weddings",
    image:
      "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1200&q=85",
    description:
      "With magnificent forts, heritage architecture and dramatic landscapes, Jodhpur creates a striking setting for grand celebrations.",
  },
  {
    name: "Kerala",
    subtitle: "Nature & Resort Weddings",
    image:
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=85",
    description:
      "Kerala offers lush landscapes, serene waterfront settings and luxury resorts for intimate destination wedding experiences.",
  },
];

const weddingStyles = [
  {
    title: "Royal Palace Wedding",
    icon: "♜",
    text:
      "Celebrate surrounded by heritage architecture, regal details and the grandeur of India's royal traditions.",
  },
  {
    title: "Luxury Resort Wedding",
    icon: "◇",
    text:
      "Bring your guests together for a multi-day celebration with accommodation, dining, events and hospitality.",
  },
  {
    title: "Beach Wedding",
    icon: "≈",
    text:
      "Exchange vows against a coastal backdrop with a celebration combining natural beauty and refined hospitality.",
  },
  {
    title: "Heritage Wedding",
    icon: "⌂",
    text:
      "Celebrate Indian traditions within historic architecture, cultural surroundings and timeless wedding design.",
  },
  {
    title: "Intimate Destination Wedding",
    icon: "♡",
    text:
      "Create a deeply personal celebration with your closest family and friends in a destination chosen around your story.",
  },
  {
    title: "Grand Indian Wedding",
    icon: "✦",
    text:
      "Bring together multiple wedding functions, large guest groups, entertainment and detailed event production.",
  },
];

const weddingFunctions = [
  {
    number: "01",
    title: "Welcome & Arrival",
    description:
      "Welcome your guests with thoughtfully planned arrivals, transportation, accommodation coordination and personalised hospitality.",
  },
  {
    number: "02",
    title: "Haldi",
    description:
      "Create a colourful and joyful Haldi celebration with traditional elements, personalised décor, music, food and family experiences.",
  },
  {
    number: "03",
    title: "Mehendi",
    description:
      "Design an intimate or elaborate Mehendi celebration around your preferred aesthetic, traditions, entertainment and guest experience.",
  },
  {
    number: "04",
    title: "Sangeet",
    description:
      "Bring families and friends together with choreography, entertainment, stage production, lighting, music and a celebration designed around your story.",
  },
  {
    number: "05",
    title: "Wedding Ceremony",
    description:
      "From traditional ceremonies to contemporary celebrations, every detail can be coordinated to reflect your family's traditions and vision.",
  },
  {
    number: "06",
    title: "Reception",
    description:
      "Complete the celebration with refined décor, dining, entertainment, guest management and seamless event execution.",
  },
];

const planningSteps = [
  {
    number: "01",
    title: "Understand Your Vision",
    text:
      "Begin with your wedding style, guest list, traditions and the atmosphere you want your celebration to create.",
  },
  {
    number: "02",
    title: "Choose Your Destination",
    text:
      "Consider accessibility, season, venue style, accommodation, travel requirements and the experience for your guests.",
  },
  {
    number: "03",
    title: "Select Your Venue",
    text:
      "Choose a venue that works for your guest count, accommodation requirements, wedding functions and event production.",
  },
  {
    number: "04",
    title: "Design The Celebration",
    text:
      "Bring together décor, florals, lighting, food, entertainment, photography and other details into one cohesive experience.",
  },
  {
    number: "05",
    title: "Coordinate Guests & Vendors",
    text:
      "Manage accommodation, transportation, vendor communication, timelines and guest requirements throughout the celebration.",
  },
  {
    number: "06",
    title: "Execute The Wedding",
    text:
      "On-ground coordination ensures that the planned experience comes together smoothly from guest arrival to the final farewell.",
  },
];

const faqs = [
  {
    question: "What is an Indian destination wedding?",
    answer:
      "An Indian destination wedding is a wedding celebration held away from the couple's hometown or regular place of residence. It can combine traditional Indian ceremonies, multiple wedding functions, accommodation, hospitality and celebrations at a resort, palace, heritage property, beach destination or another distinctive venue.",
  },
  {
    question: "Which are popular destination wedding locations in India?",
    answer:
      "Popular Indian destination wedding locations include Udaipur, Jaipur, Jodhpur, Goa and Kerala. The right destination depends on your guest list, wedding style, season, venue preferences, travel requirements and overall celebration plan.",
  },
  {
    question: "How much does a destination wedding in India cost?",
    answer:
      "The cost of a destination wedding in India varies depending on the destination, venue, number of guests, number of wedding days, accommodation, food and beverage, décor, entertainment, photography, transportation and other services.",
  },
  {
    question: "How early should we start planning a destination wedding?",
    answer:
      "Couples should ideally begin planning well in advance so there is enough time to shortlist destinations, compare venues, secure preferred dates, arrange accommodation, coordinate vendors and plan guest travel.",
  },
  {
    question: "What does a destination wedding planner do?",
    answer:
      "A destination wedding planner can coordinate destination selection, venue selection, vendor management, décor, hospitality, guest accommodation, transportation, event timelines, wedding functions, production, logistics and on-ground wedding execution.",
  },
  {
    question: "Can Kaarya Weddings help with wedding venue selection?",
    answer:
      "Yes. Venue selection is an important part of destination wedding planning. The right venue needs to work for your guest count, accommodation requirements, wedding functions, logistics, aesthetics and overall celebration plan.",
  },
];

function IndianDestinationWedding() {
  useEffect(() => {
    // =========================================================
    // SEO META INFORMATION
    // =========================================================

    const title =
      "Indian Destination Wedding | Luxury Destination Wedding Planner in India | Kaarya Weddings";

    const description =
      "Plan an unforgettable Indian destination wedding with Kaarya Weddings. Explore India's beautiful wedding destinations, luxury venues, wedding planning, guest hospitality, décor, entertainment and complete destination wedding experiences.";

    document.title = title;

    const setMeta = (name, content) => {
      let element = document.querySelector(`meta[name="${name}"]`);

      if (!element) {
        element = document.createElement("meta");
        element.setAttribute("name", name);
        document.head.appendChild(element);
      }

      element.setAttribute("content", content);
    };

    const setProperty = (property, content) => {
      let element = document.querySelector(
        `meta[property="${property}"]`
      );

      if (!element) {
        element = document.createElement("meta");
        element.setAttribute("property", property);
        document.head.appendChild(element);
      }

      element.setAttribute("content", content);
    };

    setMeta("description", description);

    setMeta(
      "keywords",
      [
        "Indian destination wedding",
        "destination wedding India",
        "destination wedding planner India",
        "Indian destination wedding planner",
        "luxury destination wedding India",
        "destination wedding venues India",
        "wedding destinations in India",
        "destination wedding planning India",
        "Indian wedding planner",
        "luxury Indian wedding",
        "royal wedding India",
        "palace wedding India",
        "resort wedding India",
        "Udaipur destination wedding",
        "Jaipur destination wedding",
        "Goa destination wedding",
        "Jodhpur destination wedding",
        "Kerala destination wedding",
        "destination wedding cost India",
        "destination wedding ideas India",
        "destination wedding planner Hyderabad",
      ].join(", ")
    );

    setProperty(
      "og:title",
      "Indian Destination Wedding | Kaarya Weddings"
    );

    setProperty("og:description", description);

    setProperty(
      "og:url",
      "https://kaaryaweddings.com/indian-destination-wedding"
    );

    setProperty("og:type", "website");

    setProperty("og:site_name", "Kaarya Weddings");

    setProperty(
      "og:image",
      "https://kaaryaweddings.com/images/indian-destination-wedding.jpg"
    );

    setProperty("twitter:card", "summary_large_image");

    setProperty(
      "twitter:title",
      "Indian Destination Wedding | Kaarya Weddings"
    );

    setProperty("twitter:description", description);

    // =========================================================
    // CANONICAL URL
    // =========================================================

    const canonicalUrl =
      "https://kaaryaweddings.com/indian-destination-wedding";

    let canonical = document.querySelector(
      'link[rel="canonical"]'
    );

    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }

    canonical.setAttribute("href", canonicalUrl);

    // =========================================================
    // STRUCTURED DATA
    // =========================================================

    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Kaarya Weddings",
      url: "https://kaaryaweddings.com",
      description:
        "Wedding planning and destination wedding experiences in India.",
    };

    const webpageSchema = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Indian Destination Wedding",
      url: canonicalUrl,
      description,
      publisher: {
        "@type": "Organization",
        name: "Kaarya Weddings",
        url: "https://kaaryaweddings.com",
      },
    };

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    };

    const schemas = [
      ["kaarya-organization-schema", organizationSchema],
      ["kaarya-webpage-schema", webpageSchema],
      ["kaarya-faq-schema", faqSchema],
    ];

    schemas.forEach(([id, data]) => {
      let script = document.getElementById(id);

      if (!script) {
        script = document.createElement("script");
        script.type = "application/ld+json";
        script.id = id;
        document.head.appendChild(script);
      }

      script.textContent = JSON.stringify(data);
    });

    return () => {
      schemas.forEach(([id]) => {
        const script = document.getElementById(id);

        if (script) {
          script.remove();
        }
      });
    };
  }, []);

  return (
    <main className="min-h-screen bg-[#35141C] text-[#E8D4CC]">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative min-h-[92vh] overflow-hidden bg-[#35141C]">

        <div className="absolute inset-0">

          <img
            src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=2200&q=90"
            alt="Indian destination wedding celebration"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-[#35141C]/70" />

          <div className="absolute inset-0 bg-gradient-to-t from-[#35141C] via-[#4B1D27]/45 to-[#54212C]/55" />

        </div>

        <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-7xl items-end px-6 pb-20 md:px-12 md:pb-28">

          <div className="max-w-5xl">

            <p className="mb-5 text-xs uppercase tracking-[0.4em] text-[#B79A5B] md:text-sm">
              THE INDIAN DESTINATION WEDDING
            </p>

            <h1 className="font-serif text-5xl leading-[0.9] tracking-tight text-[#E8D4CC] md:text-7xl lg:text-8xl">
              Indian
              <br />
              Destination
              <br />
              Wedding
            </h1>

            <div className="mt-8 h-px w-24 bg-[#B79A5B]" />

            <p className="mt-7 max-w-2xl text-base leading-8 text-[#C9AAA3] md:text-xl md:leading-9">
              Where timeless Indian traditions meet extraordinary
              destinations, refined hospitality and celebrations designed
              around your story.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">

              {/* MAIN WEBSITE HOME */}

              <a
                href="/"
                className="rounded-full bg-[#B79A5B] px-7 py-3.5 text-sm font-medium text-[#35141C] transition hover:bg-[#C9AD6D]"
              >
                Plan Your Wedding
              </a>

              {/* MAIN WEBSITE HOME */}

              <a
                href="/"
                className="rounded-full border border-[#B79A5B] px-7 py-3.5 text-sm font-medium text-[#E8D4CC] transition hover:bg-[#B79A5B]/15"
              >
                Explore Destinations
              </a>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          INTRODUCTION
      ===================================================== */}

      <section className="bg-[#4B1D27] px-6 py-20 md:px-12 md:py-32">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">

            <div>

              <p className="text-xs uppercase tracking-[0.3em] text-[#B79A5B]">
                THE INDIAN WEDDING EXPERIENCE
              </p>

              <h2 className="mt-5 font-serif text-4xl leading-tight text-[#E8D4CC] md:text-6xl">
                A celebration filled with culture, beauty and meaning.
              </h2>

            </div>

            <div className="space-y-6 text-base leading-8 text-[#C9AAA3] md:text-lg">

              <p>
                An Indian destination wedding is more than a wedding at a
                beautiful location. It is an experience that brings together
                family, friends, traditions, hospitality, food, design,
                celebration and the unique character of a destination.
              </p>

              <p>
                From grand palace weddings in Rajasthan to intimate resort
                celebrations in Goa and serene celebrations surrounded by the
                landscapes of Kerala, India offers an extraordinary variety of
                destinations for couples planning a memorable wedding.
              </p>

              <p>
                At Kaarya Weddings, destination wedding planning begins with
                understanding your vision. From discovering the right
                destination and wedding venue to coordinating hospitality,
                décor, vendors, transportation and event execution, every
                element is considered as part of one complete experience.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          WHY INDIA
      ===================================================== */}

      <section className="bg-[#54212C] px-6 py-20 md:px-12 md:py-32">

        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-3xl text-center">

            <p className="text-xs uppercase tracking-[0.3em] text-[#B79A5B]">
              WHY INDIA
            </p>

            <h2 className="mt-5 font-serif text-4xl leading-tight text-[#E8D4CC] md:text-6xl">
              A destination for every kind of love story.
            </h2>

            <p className="mt-6 text-base leading-8 text-[#C9AAA3] md:text-lg">
              India brings together heritage, architecture, landscapes,
              hospitality, cuisine and traditions in a way few destinations
              can replicate.
            </p>

          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

            {[
              {
                icon: "♜",
                title: "Royal Heritage",
                text:
                  "Palaces, forts and heritage properties create an unforgettable setting.",
              },
              {
                icon: "◇",
                title: "Luxury Hospitality",
                text:
                  "Luxury hotels and resorts can create a complete guest experience.",
              },
              {
                icon: "✦",
                title: "Rich Traditions",
                text:
                  "Indian wedding rituals provide countless opportunities for meaningful celebrations.",
              },
              {
                icon: "⌁",
                title: "Diverse Landscapes",
                text:
                  "From beaches and lakes to mountains and heritage cities, India offers remarkable variety.",
              },
            ].map((item) => (

              <article
                key={item.title}
                className="rounded-[2rem] border border-[#8A5A52]/55 bg-[#4B1D27] p-7"
              >

                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#B79A5B] text-xl text-[#B79A5B]">
                  {item.icon}
                </div>

                <h3 className="mt-7 font-serif text-2xl text-[#E8D4CC]">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#C9AAA3]">
                  {item.text}
                </p>

              </article>

            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          DESTINATIONS
      ===================================================== */}

      <section className="bg-[#421923] px-6 py-20 md:px-12 md:py-32">

        <div className="mx-auto max-w-7xl">

          <div className="max-w-3xl">

            <p className="text-xs uppercase tracking-[0.3em] text-[#B79A5B]">
              EXPLORE INDIA
            </p>

            <h2 className="mt-5 font-serif text-4xl leading-tight text-[#E8D4CC] md:text-6xl">
              Destination wedding locations in India
            </h2>

            <p className="mt-6 text-base leading-8 text-[#C9AAA3] md:text-lg">
              Choose a destination that reflects your personality, your
              traditions and the experience you want your guests to remember.
            </p>

          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-5">

            {destinations.map((destination) => (

              <article
                key={destination.name}
                className="group overflow-hidden rounded-[1.5rem] border border-[#8A5A52]/45 bg-[#4B1D27] transition duration-500 hover:-translate-y-1 hover:border-[#B79A5B]"
              >

                <div className="relative aspect-[4/5] overflow-hidden">

                  <img
                    src={destination.image}
                    alt={`${destination.name} destination wedding in India`}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#35141C]/90 via-transparent to-transparent" />

                  <div className="absolute bottom-0 left-0 p-5">

                    <h3 className="font-serif text-2xl text-[#E8D4CC]">
                      {destination.name}
                    </h3>

                  </div>

                </div>

                <div className="p-5">

                  <p className="text-xs uppercase tracking-wider text-[#B79A5B]">
                    {destination.subtitle}
                  </p>

                  <p className="mt-3 text-sm leading-6 text-[#C9AAA3]">
                    {destination.description}
                  </p>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          WEDDING STYLES
      ===================================================== */}

      <section className="bg-[#35141C] px-6 py-20 text-[#E8D4CC] md:px-12 md:py-32">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">

            <div>

              <p className="text-xs uppercase tracking-[0.3em] text-[#B79A5B]">
                FIND YOUR SETTING
              </p>

              <h2 className="mt-5 font-serif text-4xl leading-tight md:text-6xl">
                Destination wedding experiences designed around you.
              </h2>

              <p className="mt-7 text-base leading-8 text-[#C9AAA3] md:text-lg">
                Whether your vision is royal, intimate, contemporary,
                traditional or inspired by the coast, your destination should
                feel like an extension of your story.
              </p>

            </div>

            <div className="grid gap-4 sm:grid-cols-2">

              {weddingStyles.map((style) => (

                <article
                  key={style.title}
                  className="rounded-[1.5rem] border border-[#8A5A52]/50 bg-[#4B1D27] p-7 transition duration-300 hover:border-[#B79A5B] hover:bg-[#54212C]"
                >

                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#B79A5B] text-[#B79A5B]">
                    {style.icon}
                  </div>

                  <h3 className="mt-6 font-serif text-2xl text-[#E8D4CC]">
                    {style.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[#C9AAA3]">
                    {style.text}
                  </p>

                </article>

              ))}

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          WEDDING FUNCTIONS
      ===================================================== */}

      <section className="bg-[#4B1D27] px-6 py-20 md:px-12 md:py-32">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">

            <div>

              <p className="text-xs uppercase tracking-[0.3em] text-[#B79A5B]">
                YOUR WEDDING JOURNEY
              </p>

              <h2 className="mt-5 font-serif text-4xl leading-tight text-[#E8D4CC] md:text-6xl">
                Every celebration deserves its own moment.
              </h2>

              <p className="mt-6 text-base leading-8 text-[#C9AAA3] md:text-lg">
                An Indian destination wedding often brings together several
                celebrations over multiple days. Each function can have its
                own identity while remaining part of one cohesive wedding
                experience.
              </p>

            </div>

            <div>

              {weddingFunctions.map((item) => (

                <article
                  key={item.number}
                  className="border-b border-[#8A5A52]/45 py-7 first:pt-0"
                >

                  <div className="flex gap-6">

                    <span className="font-serif text-sm text-[#B79A5B]">
                      {item.number}
                    </span>

                    <div>

                      <h3 className="font-serif text-2xl text-[#E8D4CC]">
                        {item.title}
                      </h3>

                      <p className="mt-3 max-w-2xl text-sm leading-7 text-[#C9AAA3]">
                        {item.description}
                      </p>

                    </div>

                  </div>

                </article>

              ))}

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          PLANNING
      ===================================================== */}

      <section className="bg-[#54212C] px-6 py-20 text-[#E8D4CC] md:px-12 md:py-32">

        <div className="mx-auto max-w-7xl">

          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">

            <div className="max-w-3xl">

              <p className="text-xs uppercase tracking-[0.3em] text-[#B79A5B]">
                DESTINATION WEDDING PLANNING
              </p>

              <h2 className="mt-5 font-serif text-4xl leading-tight md:text-6xl">
                From the first idea to the final celebration.
              </h2>

            </div>

            <p className="max-w-md text-sm leading-7 text-[#C9AAA3]">
              A clear planning process helps bring every element together
              while preserving the emotion and excitement of the celebration.
            </p>

          </div>

          <div className="mt-16 grid border-y border-[#8A5A52]/50 md:grid-cols-3 lg:grid-cols-6">

            {planningSteps.map((step) => (

              <article
                key={step.number}
                className="border-b border-[#8A5A52]/40 p-6 md:border-b-0 md:border-r md:last:border-r-0"
              >

                <span className="font-serif text-sm text-[#B79A5B]">
                  {step.number}
                </span>

                <h3 className="mt-6 font-serif text-xl">
                  {step.title}
                </h3>

                <p className="mt-4 text-xs leading-6 text-[#C9AAA3]">
                  {step.text}
                </p>

              </article>

            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          VENUE
      ===================================================== */}

      <section className="bg-[#421923] px-6 py-20 md:px-12 md:py-32">

        <div className="mx-auto max-w-7xl">

          <div className="grid overflow-hidden rounded-[2rem] border border-[#8A5A52]/45 lg:grid-cols-2">

            <div className="flex flex-col justify-center p-8 md:p-14">

              <p className="text-xs uppercase tracking-[0.3em] text-[#B79A5B]">
                CHOOSING THE RIGHT VENUE
              </p>

              <h2 className="mt-5 font-serif text-4xl leading-tight text-[#E8D4CC] md:text-5xl">
                The venue sets the tone for the entire wedding.
              </h2>

              <p className="mt-6 text-base leading-8 text-[#C9AAA3]">
                Selecting a destination wedding venue is one of the most
                important decisions in the planning process. A beautiful
                venue needs to work not only visually, but also practically.
              </p>

              <p className="mt-5 text-base leading-8 text-[#C9AAA3]">
                Guest capacity, room inventory, accommodation, event spaces,
                food and beverage options, wedding functions, transportation,
                accessibility and event logistics all influence the suitability
                of a venue.
              </p>

            </div>

            <div className="min-h-[420px]">

              <img
                src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1400&q=85"
                alt="Elegant destination wedding venue in India"
                loading="lazy"
                className="h-full w-full object-cover"
              />

            </div>

          </div>

          <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">

            {[
              "Guest Capacity",
              "Room Availability",
              "Event Spaces",
              "Location & Access",
              "Food & Beverage",
              "Wedding Functions",
              "Guest Experience",
              "Event Logistics",
            ].map((item) => (

              <div
                key={item}
                className="rounded-xl border border-[#8A5A52]/45 bg-[#4B1D27] p-5 text-center text-sm text-[#E8D4CC]"
              >
                {item}
              </div>

            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          DESTINATION WEDDING COST
      ===================================================== */}

      <section className="bg-[#35141C] px-6 py-20 text-[#E8D4CC] md:px-12 md:py-32">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">

            <div>

              <p className="text-xs uppercase tracking-[0.3em] text-[#B79A5B]">
                DESTINATION WEDDING COST
              </p>

              <h2 className="mt-5 font-serif text-4xl leading-tight md:text-6xl">
                What influences the cost of an Indian destination wedding?
              </h2>

            </div>

            <div className="space-y-6 text-base leading-8 text-[#C9AAA3] md:text-lg">

              <p>
                There is no single destination wedding cost in India. Every
                celebration is different, and the overall investment depends
                on the scale, destination, venue and experience you choose.
              </p>

              <p>
                Important factors can include the destination, venue, number
                of guests, number of wedding days, accommodation, food and
                beverage, décor, entertainment, photography, transportation,
                production and guest experiences.
              </p>

              <p>
                A personalised wedding plan allows couples to understand where
                their budget is being allocated and prioritise the experiences
                that matter most to them.
              </p>

            </div>

          </div>

          <div className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-8">

            {[
              "Venue",
              "Accommodation",
              "Food & Beverage",
              "Décor",
              "Entertainment",
              "Photography",
              "Transportation",
              "Guest Experience",
            ].map((item) => (

              <div
                key={item}
                className="rounded-xl border border-[#8A5A52]/45 bg-[#4B1D27] p-4 text-center text-xs text-[#E8D4CC]"
              >
                {item}
              </div>

            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          GUEST EXPERIENCE
      ===================================================== */}

      <section className="bg-[#4B1D27] px-6 py-20 md:px-12 md:py-32">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24">

            <div>

              <p className="text-xs uppercase tracking-[0.3em] text-[#B79A5B]">
                GUEST EXPERIENCE
              </p>

              <h2 className="mt-5 font-serif text-4xl leading-tight text-[#E8D4CC] md:text-6xl">
                Your guests are part of the celebration.
              </h2>

              <p className="mt-7 max-w-2xl text-base leading-8 text-[#C9AAA3] md:text-lg">
                One of the defining characteristics of an Indian destination
                wedding is the experience shared with family and friends.
                Accommodation, transportation, welcome experiences, dining and
                event schedules all contribute to the journey.
              </p>

            </div>

            <div>

              {[
                "Arrival coordination",
                "Hotel & room coordination",
                "Guest transportation",
                "Welcome experiences",
                "Event schedules",
                "Dining experiences",
                "Family requirements",
                "Departure coordination",
              ].map((item, index) => (

                <div
                  key={item}
                  className="flex items-center gap-5 border-b border-[#8A5A52]/45 py-4"
                >

                  <span className="font-serif text-sm text-[#B79A5B]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="text-base text-[#E8D4CC]">
                    {item}
                  </span>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          KAARYA
      ===================================================== */}

      <section className="bg-[#35141C] px-6 py-20 text-[#E8D4CC] md:px-12 md:py-32">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24">

            <div>

              <p className="text-xs uppercase tracking-[0.3em] text-[#B79A5B]">
                WEDDINGS BY KAARYA
              </p>

              <h2 className="mt-5 font-serif text-4xl leading-tight md:text-6xl">
                Your destination.
                <br />
                Your traditions.
                <br />
                Your story.
              </h2>

              <div className="mt-8 space-y-6 text-base leading-8 text-[#C9AAA3] md:text-lg">

                <p>
                  Planning an Indian destination wedding requires more than
                  selecting a beautiful venue. It requires understanding the
                  people, traditions, timeline and details behind the
                  celebration.
                </p>

                <p>
                  Kaarya Weddings brings together destination discovery,
                  venue selection, wedding design, hospitality, vendor
                  coordination, logistics and on-ground execution.
                </p>

                <p>
                  The goal is to create a celebration that feels unmistakably
                  yours while giving your family and guests an experience they
                  will remember long after the wedding.
                </p>

              </div>

              {/* GO TO MAIN WEBSITE HOME */}

              <a
                href="/"
                className="mt-9 inline-flex rounded-full border border-[#B79A5B] bg-[#B79A5B] px-8 py-4 text-sm font-medium text-[#35141C] transition hover:bg-[#C9AD6D]"
              >
                Begin Your Wedding Journey
              </a>

            </div>

            <div className="rounded-[2rem] border border-[#8A5A52]/50 bg-[#4B1D27] p-8 md:p-10">

              <p className="text-xs uppercase tracking-[0.3em] text-[#B79A5B]">
                THE KAARYA APPROACH
              </p>

              <div className="mt-10 space-y-8">

                {[
                  {
                    number: "01",
                    title: "Discover",
                    text:
                      "Understand your story, guest list, destination preferences and wedding vision.",
                  },
                  {
                    number: "02",
                    title: "Design",
                    text:
                      "Build the destination, venue and celebration experience around your priorities.",
                  },
                  {
                    number: "03",
                    title: "Coordinate",
                    text:
                      "Bring together vendors, hospitality, accommodation, transportation and event logistics.",
                  },
                  {
                    number: "04",
                    title: "Execute",
                    text:
                      "Deliver the celebration on the ground, from guest arrival through the final farewell.",
                  },
                ].map((item) => (

                  <div
                    key={item.number}
                    className="border-b border-[#8A5A52]/45 pb-8 last:border-0 last:pb-0"
                  >

                    <span className="text-xs text-[#B79A5B]">
                      {item.number}
                    </span>

                    <h3 className="mt-2 font-serif text-2xl text-[#E8D4CC]">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-[#C9AAA3]">
                      {item.text}
                    </p>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          EXPLORE KAARYA
          ALL LINKS → MAIN HOME PAGE
      ===================================================== */}

      <section className="bg-[#421923] px-6 py-20 md:px-12 md:py-28">

        <div className="mx-auto max-w-7xl">

          <div className="text-center">

            <p className="text-xs uppercase tracking-[0.3em] text-[#B79A5B]">
              EXPLORE KAARYA
            </p>

            <h2 className="mt-5 font-serif text-4xl text-[#E8D4CC] md:text-5xl">
              Continue your wedding journey
            </h2>

          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

            {/* CARD 1 → HOME */}

            <a
              href="/"
              className="group rounded-[1.5rem] border border-[#8A5A52]/45 bg-[#4B1D27] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#B79A5B] hover:bg-[#54212C]"
            >

              <h3 className="font-serif text-2xl text-[#E8D4CC]">
                Destination Wedding Planner
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#C9AAA3]">
                Explore destination wedding planning with Kaarya Weddings.
              </p>

              <span className="mt-6 block text-xs uppercase tracking-widest text-[#B79A5B]">
                Explore →
              </span>

            </a>

            {/* CARD 2 → HOME */}

            <a
              href="/"
              className="group rounded-[1.5rem] border border-[#8A5A52]/45 bg-[#4B1D27] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#B79A5B] hover:bg-[#54212C]"
            >

              <h3 className="font-serif text-2xl text-[#E8D4CC]">
                Luxury Wedding Planner
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#C9AAA3]">
                Discover refined wedding planning and luxury celebration
                experiences.
              </p>

              <span className="mt-6 block text-xs uppercase tracking-widest text-[#B79A5B]">
                Explore →
              </span>

            </a>

            {/* CARD 3 → HOME */}

            <a
              href="/"
              className="group rounded-[1.5rem] border border-[#8A5A52]/45 bg-[#4B1D27] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#B79A5B] hover:bg-[#54212C]"
            >

              <h3 className="font-serif text-2xl text-[#E8D4CC]">
                Wedding Planner Hyderabad
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#C9AAA3]">
                Learn more about wedding planning services for couples in
                Hyderabad.
              </p>

              <span className="mt-6 block text-xs uppercase tracking-widest text-[#B79A5B]">
                Explore →
              </span>

            </a>

            {/* CARD 4 → HOME */}

            <a
              href="/"
              className="group rounded-[1.5rem] border border-[#8A5A52]/45 bg-[#4B1D27] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#B79A5B] hover:bg-[#54212C]"
            >

              <h3 className="font-serif text-2xl text-[#E8D4CC]">
                Wedding Services
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#C9AAA3]">
                Explore wedding services and experiences offered by Kaarya.
              </p>

              <span className="mt-6 block text-xs uppercase tracking-widest text-[#B79A5B]">
                Explore →
              </span>

            </a>

          </div>

        </div>

      </section>

      {/* =====================================================
          FAQ
      ===================================================== */}

      <section className="bg-[#54212C] px-6 py-20 text-[#E8D4CC] md:px-12 md:py-32">

        <div className="mx-auto max-w-5xl">

          <div className="text-center">

            <p className="text-xs uppercase tracking-[0.3em] text-[#B79A5B]">
              FREQUENTLY ASKED QUESTIONS
            </p>

            <h2 className="mt-5 font-serif text-4xl md:text-6xl">
              Indian Destination Wedding FAQ
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#C9AAA3]">
              Answers to common questions couples ask when planning a
              destination wedding in India.
            </p>

          </div>

          <div className="mt-14 divide-y divide-[#8A5A52]/50">

            {faqs.map((faq) => (

              <details
                key={faq.question}
                className="group py-7"
              >

                <summary className="flex cursor-pointer list-none items-center justify-between gap-8 font-serif text-xl text-[#E8D4CC] md:text-2xl">

                  <span>{faq.question}</span>

                  <span className="flex-shrink-0 text-2xl font-light text-[#B79A5B] transition duration-300 group-open:rotate-45">
                    +
                  </span>

                </summary>

                <p className="mt-5 max-w-4xl text-sm leading-7 text-[#C9AAA3] md:text-base">
                  {faq.answer}
                </p>

              </details>

            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          FINAL CTA → MAIN WEBSITE HOME
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#35141C] px-6 py-28 text-center text-[#E8D4CC] md:px-12 md:py-36">

        <div className="absolute inset-0 bg-gradient-to-br from-[#642936]/45 via-[#35141C]/20 to-[#35141C]" />

        <div className="relative z-10 mx-auto max-w-4xl">

          <p className="text-xs uppercase tracking-[0.35em] text-[#B79A5B]">
            BEGIN WITH A CONVERSATION
          </p>

          <div className="mx-auto mt-6 h-px w-20 bg-[#B79A5B]" />

          <h2 className="mt-7 font-serif text-5xl leading-tight text-[#E8D4CC] md:text-7xl">
            Your Indian destination wedding starts here.
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-[#C9AAA3] md:text-lg">
            Tell us your vision, destination preferences, guest count and
            celebration plans. Let Kaarya help turn the idea into an
            experience.
          </p>

          {/* MAIN WEBSITE HOME */}

          <a
            href="/"
            className="mt-9 inline-flex rounded-full border border-[#B79A5B] bg-[#B79A5B] px-8 py-4 text-sm font-medium text-[#35141C] transition hover:bg-[#C9AD6D]"
          >
            Plan Your Wedding
          </a>

        </div>

      </section>

    </main>
  );
}

export default IndianDestinationWedding;