import { useEffect } from "react";
import { Link } from "react-router-dom";

const HOME_URL = "/";

const DestinationWeddingPlanner = () => {
  useEffect(() => {
    document.title =
      "Destination Wedding Planner in India | Weddings by Kaarya";

    const description =
      "Weddings by Kaarya is a destination wedding planner in India creating bespoke celebrations across Udaipur, Jaipur, Goa, Hyderabad, Jodhpur and other luxury destinations.";

    let metaDescription = document.querySelector(
      'meta[name="description"]'
    );

    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }

    metaDescription.setAttribute(
      "content",
      description
    );

    let canonical = document.querySelector(
      'link[rel="canonical"]'
    );

    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }

    canonical.setAttribute(
      "href",
      "https://kaaryaweddings.com/destination-wedding-planner"
    );
  }, []);

  const destinations = [
    {
      title: "Udaipur",
      text:
        "Palace weddings, lakeside celebrations and grand destination experiences surrounded by the heritage of Rajasthan.",
    },
    {
      title: "Jaipur",
      text:
        "Royal architecture, historic venues and vibrant Indian celebrations brought together with contemporary design.",
    },
    {
      title: "Goa",
      text:
        "Elegant beachside weddings, relaxed celebrations and destination experiences designed around the coast.",
    },
    {
      title: "Jodhpur",
      text:
        "A majestic setting for couples looking for heritage, grandeur and an unforgettable Rajasthan wedding.",
    },
    {
      title: "Hyderabad",
      text:
        "Luxury hotels, heritage venues and sophisticated celebrations in one of India's most distinctive wedding cities.",
    },
    {
      title: "Kerala",
      text:
        "Intimate destination celebrations surrounded by tropical landscapes, heritage and serene hospitality.",
    },
  ];

  const services = [
    {
      number: "01",
      title: "Destination & Venue Selection",
      text:
        "We help identify destinations and venues that align with your guest count, wedding vision, budget and overall experience.",
    },
    {
      number: "02",
      title: "Accommodation & Hospitality",
      text:
        "Guest accommodation, rooming requirements, welcome experiences, help desks and hospitality planning managed as one experience.",
    },
    {
      number: "03",
      title: "Wedding Design",
      text:
        "Concept development, decor, floral design, tablescapes and environments designed specifically for the destination.",
    },
    {
      number: "04",
      title: "Guest Logistics",
      text:
        "Airport transfers, transportation, itineraries, movement planning and on-ground coordination for a seamless guest experience.",
    },
    {
      number: "05",
      title: "Wedding Production",
      text:
        "Technical production, lighting, sound, staging, entertainment coordination and show management.",
    },
    {
      number: "06",
      title: "Complete Execution",
      text:
        "From the first setup to the final farewell, our team coordinates the moving parts required to deliver the celebration.",
    },
  ];

  return (
    <main
      style={{
        background: "#35151C",
        color: "#F8F5EF",
        minHeight: "100vh",
      }}
    >

      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        style={{
          minHeight: "92vh",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          padding: "140px 24px 100px",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 50% 25%, rgba(201,164,107,0.18), transparent 45%), linear-gradient(180deg, #35151C 0%, #210D12 100%)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: "30px",
            border:
              "1px solid rgba(201,164,107,0.22)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 2,
            width: "100%",
            maxWidth: "1100px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <p
            style={{
              color: "#C9A46C",
              letterSpacing: "0.38em",
              textTransform: "uppercase",
              fontSize: "12px",
              marginBottom: "28px",
            }}
          >
            Weddings by Kaarya · India
          </p>

          <h1
            style={{
              fontFamily:
                "Georgia, 'Times New Roman', serif",
              fontWeight: 400,
              fontSize:
                "clamp(46px, 7.5vw, 100px)",
              lineHeight: 0.98,
              letterSpacing: "-0.035em",
              margin: "0 auto 36px",
              maxWidth: "1050px",
            }}
          >
            Destination Wedding
            <br />
            Planner in India
          </h1>

          <p
            style={{
              maxWidth: "780px",
              margin: "0 auto 46px",
              color: "#E6DAD0",
              fontSize:
                "clamp(17px, 2vw, 21px)",
              lineHeight: 1.7,
            }}
          >
            Bespoke destination weddings planned with
            thoughtful design, refined hospitality and
            seamless execution across India's most
            extraordinary wedding destinations.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "14px",
              flexWrap: "wrap",
            }}
          >
            <Link
              to={HOME_URL}
              style={{
                display: "inline-block",
                padding: "17px 34px",
                background: "#C9A46C",
                color: "#35151C",
                textDecoration: "none",
                textTransform: "uppercase",
                letterSpacing: "0.18em",
                fontSize: "12px",
                fontWeight: 600,
              }}
            >
              Plan Your Wedding
            </Link>

            <Link
              to={HOME_URL}
              style={{
                display: "inline-block",
                padding: "17px 34px",
                border:
                  "1px solid rgba(201,164,107,0.8)",
                color: "#F8F5EF",
                textDecoration: "none",
                textTransform: "uppercase",
                letterSpacing: "0.18em",
                fontSize: "12px",
              }}
            >
              Explore Kaarya
            </Link>
          </div>
        </div>
      </section>


      {/* =====================================================
          INTRO
      ===================================================== */}

      <section
        style={{
          padding: "120px 24px",
          background: "#3F1821",
        }}
      >
        <div
          style={{
            maxWidth: "1180px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "70px",
            alignItems: "start",
          }}
        >
          <div>
            <p
              style={{
                color: "#C9A46C",
                textTransform: "uppercase",
                letterSpacing: "0.3em",
                fontSize: "11px",
                marginBottom: "22px",
              }}
            >
              Destination Weddings
            </p>

            <h2
              style={{
                fontFamily:
                  "Georgia, 'Times New Roman', serif",
                fontWeight: 400,
                fontSize:
                  "clamp(38px, 5vw, 66px)",
                lineHeight: 1.05,
                margin: 0,
              }}
            >
              The destination
              <br />
              becomes part of
              <br />
              your story.
            </h2>
          </div>

          <div
            style={{
              color: "#E4D7D0",
              fontSize: "17px",
              lineHeight: 1.85,
            }}
          >
            <p>
              A destination wedding is not simply a
              wedding moved to another city. It is an
              experience created around the destination,
              the couple and the people travelling to
              celebrate with them.
            </p>

            <p>
              Weddings by Kaarya brings together venue
              planning, accommodation, hospitality,
              wedding design, guest logistics, production
              and execution under one coordinated
              planning process.
            </p>

            <p>
              From a palace in Rajasthan to a coastal
              celebration in Goa, every destination
              presents a different opportunity to create
              something memorable.
            </p>
          </div>
        </div>
      </section>


      {/* =====================================================
          DESTINATIONS
      ===================================================== */}

      <section
        style={{
          padding: "120px 24px",
          background: "#210D12",
        }}
      >
        <div
          style={{
            maxWidth: "1180px",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              textAlign: "center",
              marginBottom: "70px",
            }}
          >
            <p
              style={{
                color: "#C9A46C",
                textTransform: "uppercase",
                letterSpacing: "0.3em",
                fontSize: "11px",
                marginBottom: "20px",
              }}
            >
              Wedding Destinations
            </p>

            <h2
              style={{
                fontFamily:
                  "Georgia, 'Times New Roman', serif",
                fontWeight: 400,
                fontSize:
                  "clamp(40px, 6vw, 72px)",
                margin: 0,
              }}
            >
              India, beautifully celebrated.
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "18px",
            }}
          >
            {destinations.map((destination) => (
              <article
                key={destination.title}
                style={{
                  minHeight: "300px",
                  padding: "34px",
                  border:
                    "1px solid rgba(201,164,107,0.25)",
                  background:
                    "linear-gradient(145deg, rgba(201,164,107,0.08), rgba(0,0,0,0.12))",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                }}
              >
                <h3
                  style={{
                    fontFamily:
                      "Georgia, 'Times New Roman', serif",
                    fontWeight: 400,
                    fontSize: "34px",
                    margin:
                      "0 0 16px",
                  }}
                >
                  {destination.title}
                </h3>

                <p
                  style={{
                    color: "#D3C3BC",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  {destination.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>


      {/* =====================================================
          SERVICES
      ===================================================== */}

      <section
        style={{
          padding: "120px 24px",
          background: "#3F1821",
        }}
      >
        <div
          style={{
            maxWidth: "1180px",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              maxWidth: "800px",
              marginBottom: "65px",
            }}
          >
            <p
              style={{
                color: "#C9A46C",
                textTransform: "uppercase",
                letterSpacing: "0.3em",
                fontSize: "11px",
                marginBottom: "20px",
              }}
            >
              End-to-End Planning
            </p>

            <h2
              style={{
                fontFamily:
                  "Georgia, 'Times New Roman', serif",
                fontWeight: 400,
                fontSize:
                  "clamp(40px, 6vw, 72px)",
                lineHeight: 1.05,
                margin: 0,
              }}
            >
              Everything your
              destination wedding needs.
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1px",
              background:
                "rgba(201,164,107,0.25)",
            }}
          >
            {services.map((service) => (
              <article
                key={service.number}
                style={{
                  background: "#35151C",
                  padding: "40px 34px",
                  minHeight: "270px",
                }}
              >
                <div
                  style={{
                    color: "#C9A46C",
                    fontFamily:
                      "Georgia, 'Times New Roman', serif",
                    fontSize: "22px",
                    marginBottom: "28px",
                  }}
                >
                  {service.number}
                </div>

                <h3
                  style={{
                    fontFamily:
                      "Georgia, 'Times New Roman', serif",
                    fontWeight: 400,
                    fontSize: "27px",
                    margin:
                      "0 0 16px",
                  }}
                >
                  {service.title}
                </h3>

                <p
                  style={{
                    color: "#D8C9C1",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  {service.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>


      {/* =====================================================
          GUEST EXPERIENCE
      ===================================================== */}

      <section
        style={{
          padding: "120px 24px",
          background: "#210D12",
        }}
      >
        <div
          style={{
            maxWidth: "1000px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <p
            style={{
              color: "#C9A46C",
              textTransform: "uppercase",
              letterSpacing: "0.3em",
              fontSize: "11px",
              marginBottom: "24px",
            }}
          >
            Beyond The Wedding
          </p>

          <h2
            style={{
              fontFamily:
                "Georgia, 'Times New Roman', serif",
              fontWeight: 400,
              fontSize:
                "clamp(40px, 6vw, 72px)",
              lineHeight: 1.05,
              marginBottom: "30px",
            }}
          >
            The guest experience
            <br />
            matters too.
          </h2>

          <p
            style={{
              color: "#DCCDC5",
              fontSize: "18px",
              lineHeight: 1.85,
              maxWidth: "760px",
              margin:
                "0 auto 60px",
            }}
          >
            Destination weddings bring families and
            friends together for several days. From airport
            arrival to accommodation, welcome experiences,
            transportation, celebrations and farewell,
            every touchpoint contributes to how the wedding
            is remembered.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(190px, 1fr))",
              gap: "18px",
            }}
          >
            {[
              "Airport Transfers",
              "Accommodation",
              "Welcome Experiences",
              "Guest Hospitality",
              "Transportation",
              "Wedding Itineraries",
            ].map((item) => (
              <div
                key={item}
                style={{
                  padding: "25px 18px",
                  border:
                    "1px solid rgba(201,164,107,0.25)",
                  color: "#E4D7D0",
                  fontSize: "14px",
                  letterSpacing: "0.05em",
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* =====================================================
          PROCESS
      ===================================================== */}

      <section
        style={{
          padding: "120px 24px",
          background: "#3F1821",
        }}
      >
        <div
          style={{
            maxWidth: "1180px",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              textAlign: "center",
              marginBottom: "70px",
            }}
          >
            <p
              style={{
                color: "#C9A46C",
                textTransform: "uppercase",
                letterSpacing: "0.3em",
                fontSize: "11px",
                marginBottom: "20px",
              }}
            >
              Our Process
            </p>

            <h2
              style={{
                fontFamily:
                  "Georgia, 'Times New Roman', serif",
                fontWeight: 400,
                fontSize:
                  "clamp(40px, 6vw, 72px)",
                margin: 0,
              }}
            >
              Dream. Design. Deliver.
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "50px",
            }}
          >
            {[
              {
                number: "I",
                title: "Discover",
                text:
                  "We understand your story, guest profile, destination preferences, priorities and the experience you want to create.",
              },
              {
                number: "II",
                title: "Design",
                text:
                  "We develop the destination strategy, wedding concepts, venues, hospitality plan and visual direction.",
              },
              {
                number: "III",
                title: "Deliver",
                text:
                  "Our team coordinates the details and executes the celebration on the ground with precision.",
              },
            ].map((step) => (
              <div
                key={step.number}
                style={{
                  borderTop:
                    "1px solid rgba(201,164,107,0.4)",
                  paddingTop: "30px",
                }}
              >
                <div
                  style={{
                    color: "#C9A46C",
                    fontFamily:
                      "Georgia, 'Times New Roman', serif",
                    fontSize: "42px",
                    marginBottom: "25px",
                  }}
                >
                  {step.number}
                </div>

                <h3
                  style={{
                    fontFamily:
                      "Georgia, 'Times New Roman', serif",
                    fontSize: "34px",
                    fontWeight: 400,
                    marginBottom: "18px",
                  }}
                >
                  {step.title}
                </h3>

                <p
                  style={{
                    color: "#D8C9C1",
                    lineHeight: 1.8,
                    margin: 0,
                  }}
                >
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* =====================================================
          FAQ
      ===================================================== */}

      <section
        style={{
          padding: "120px 24px",
          background: "#210D12",
        }}
      >
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              textAlign: "center",
              marginBottom: "65px",
            }}
          >
            <p
              style={{
                color: "#C9A46C",
                textTransform: "uppercase",
                letterSpacing: "0.3em",
                fontSize: "11px",
                marginBottom: "20px",
              }}
            >
              Frequently Asked Questions
            </p>

            <h2
              style={{
                fontFamily:
                  "Georgia, 'Times New Roman', serif",
                fontWeight: 400,
                fontSize:
                  "clamp(38px, 5vw, 62px)",
                margin: 0,
              }}
            >
              Destination wedding planning
            </h2>
          </div>

          <div>
            {[
              {
                question:
                  "What is a destination wedding planner?",
                answer:
                  "A destination wedding planner coordinates the planning and execution of a wedding away from the couple's home city. This can include destination research, venue selection, accommodation, guest logistics, hospitality, wedding design, vendors, production and on-ground coordination.",
              },
              {
                question:
                  "Which destinations does Weddings by Kaarya plan weddings in?",
                answer:
                  "Weddings by Kaarya plans destination weddings across India, including destinations such as Udaipur, Jaipur, Goa, Jodhpur, Hyderabad and Kerala.",
              },
              {
                question:
                  "Can you manage accommodation and guest logistics?",
                answer:
                  "Yes. Destination wedding planning can include accommodation planning, rooming requirements, airport transfers, transportation, welcome experiences, guest itineraries and hospitality coordination.",
              },
              {
                question:
                  "Can you plan a complete multi-day destination wedding?",
                answer:
                  "Yes. A destination wedding often involves multiple celebrations and guest experiences across several days. Our planning approach brings the different elements together into one coordinated wedding experience.",
              },
              {
                question:
                  "How early should we start planning?",
                answer:
                  "Destination weddings benefit from early planning because venues, hotels, travel arrangements and specialist vendors need to be coordinated well in advance. The appropriate planning timeline depends on the destination, guest count and complexity.",
              },
            ].map((faq) => (
              <details
                key={faq.question}
                style={{
                  borderTop:
                    "1px solid rgba(201,164,107,0.25)",
                  padding: "26px 0",
                }}
              >
                <summary
                  style={{
                    cursor: "pointer",
                    listStyle: "none",
                    fontFamily:
                      "Georgia, 'Times New Roman', serif",
                    fontSize: "22px",
                    color: "#F8F5EF",
                    paddingRight: "30px",
                  }}
                >
                  {faq.question}
                </summary>

                <p
                  style={{
                    color: "#CDBDB5",
                    lineHeight: 1.8,
                    fontSize: "16px",
                    margin:
                      "18px 0 0",
                  }}
                >
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section
        style={{
          minHeight: "65vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "100px 24px",
          textAlign: "center",
          background:
            "radial-gradient(circle at center, rgba(201,164,107,0.16), transparent 55%), #35151C",
        }}
      >
        <div
          style={{
            maxWidth: "850px",
          }}
        >
          <p
            style={{
              color: "#C9A46C",
              textTransform: "uppercase",
              letterSpacing: "0.35em",
              fontSize: "11px",
              marginBottom: "25px",
            }}
          >
            Your Destination Awaits
          </p>

          <h2
            style={{
              fontFamily:
                "Georgia, 'Times New Roman', serif",
              fontWeight: 400,
              fontSize:
                "clamp(44px, 7vw, 88px)",
              lineHeight: 1,
              margin:
                "0 0 30px",
            }}
          >
            Choose the place.
            <br />
            We will create the story.
          </h2>

          <p
            style={{
              color: "#DCCDC5",
              fontSize: "18px",
              lineHeight: 1.7,
              maxWidth: "650px",
              margin:
                "0 auto 40px",
            }}
          >
            Tell us about your celebration and the
            destination you have imagined. Together,
            we can turn it into an experience your
            guests will remember.
          </p>

          <Link
            to={HOME_URL}
            style={{
              display: "inline-block",
              padding: "18px 40px",
              background: "#C9A46C",
              color: "#35151C",
              textDecoration: "none",
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              fontSize: "12px",
              fontWeight: 600,
            }}
          >
            Begin Your Wedding Journey
          </Link>
        </div>
      </section>


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <div
        style={{
          padding: "30px 24px",
          textAlign: "center",
          background: "#210D12",
          borderTop:
            "1px solid rgba(201,164,107,0.18)",
          color: "#9F8C84",
          fontSize: "12px",
          letterSpacing: "0.08em",
        }}
      >
        Weddings by Kaarya · Destination Wedding
        Planner · India
      </div>

    </main>
  );
};

export default DestinationWeddingPlanner;