import { useEffect } from "react";
import { Link } from "react-router-dom";

const HOME_URL = "/";

const LuxuryWeddingPlanner = () => {
  useEffect(() => {
    const title =
      "Luxury Wedding Planner in India | Weddings by Kaarya";

    const description =
      "Weddings by Kaarya is a luxury wedding planning company creating bespoke Indian weddings, destination weddings, refined design experiences and seamless wedding execution across Hyderabad, India and global destinations.";

    document.title = title;

    // Meta Description
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

    // Canonical URL
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
      "https://kaaryaweddings.com/luxury-wedding-planner"
    );
  }, []);

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
        {/* Background */}

        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 50% 25%, rgba(201,164,107,0.18), transparent 45%), linear-gradient(180deg, #35151C 0%, #210D12 100%)",
            pointerEvents: "none",
          }}
        />

        {/* Border */}

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
            Weddings by Kaarya · Luxury Wedding Planning
          </p>

          <h1
            style={{
              fontFamily:
                "Georgia, 'Times New Roman', serif",
              fontWeight: 400,
              fontSize:
                "clamp(48px, 8vw, 104px)",
              lineHeight: 0.98,
              letterSpacing: "-0.035em",
              margin: "0 auto 36px",
              maxWidth: "1050px",
            }}
          >
            Luxury Wedding
            <br />
            Planner in India
          </h1>

          <p
            style={{
              maxWidth: "760px",
              margin: "0 auto 46px",
              color: "#E6DAD0",
              fontSize:
                "clamp(17px, 2vw, 21px)",
              lineHeight: 1.7,
            }}
          >
            Bespoke Indian weddings created around
            your story, your family and your vision —
            from intimate celebrations in Hyderabad
            to extraordinary destination weddings
            across India and beyond.
          </p>

          {/* ALL BUTTONS → HOME */}

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
              Explore Kaarya
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
              Plan Your Wedding
            </Link>
          </div>
        </div>
      </section>


      {/* =====================================================
          INTRODUCTION
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
              The Kaarya Approach
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
              A wedding is more
              <br />
              than an event.
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
              Weddings by Kaarya is a luxury wedding
              planning company focused on creating
              celebrations that feel deeply personal,
              visually refined and flawlessly executed.
            </p>

            <p>
              From the first conversation to the final
              farewell, we bring together planning,
              creative direction, hospitality, production,
              logistics and on-ground execution under
              one carefully managed experience.
            </p>

            <p>
              Our approach combines the richness of
              Indian wedding traditions with contemporary
              luxury, allowing every celebration to have
              its own identity.
            </p>
          </div>
        </div>
      </section>


      {/* =====================================================
          SERVICES
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
              Our Expertise
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
              From vision to execution
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
            {[
              {
                number: "01",
                title: "Wedding Planning",
                text:
                  "Complete wedding planning and coordination tailored to your celebration, family and guest experience.",
              },
              {
                number: "02",
                title: "Creative Direction",
                text:
                  "Concept development, visual storytelling, colour palettes, design language and bespoke wedding aesthetics.",
              },
              {
                number: "03",
                title: "Wedding Design",
                text:
                  "Thoughtful decor, floral design, installations, tablescapes and environments created around your story.",
              },
              {
                number: "04",
                title: "Destination Weddings",
                text:
                  "End-to-end destination wedding planning across India's most beautiful wedding destinations.",
              },
              {
                number: "05",
                title: "Hospitality & Logistics",
                text:
                  "Guest transportation, accommodation, welcome experiences, help desks, itineraries and on-ground hospitality.",
              },
              {
                number: "06",
                title: "Production & Execution",
                text:
                  "Technical production, vendor management, show flow and meticulous execution from setup to final farewell.",
              },
            ].map((service) => (
              <article
                key={service.number}
                style={{
                  background: "#35151C",
                  padding: "40px 34px",
                  minHeight: "250px",
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
                    fontSize: "28px",
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
          DESTINATIONS
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
              maxWidth: "760px",
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
              Destination Weddings
            </p>

            <h2
              style={{
                fontFamily:
                  "Georgia, 'Times New Roman', serif",
                fontWeight: 400,
                fontSize:
                  "clamp(40px, 6vw, 72px)",
                lineHeight: 1.05,
                marginBottom: "28px",
              }}
            >
              Celebrate somewhere
              unforgettable.
            </h2>

            <p
              style={{
                color: "#DCCDC5",
                lineHeight: 1.8,
                fontSize: "17px",
              }}
            >
              Whether you envision a palace wedding
              in Rajasthan, a coastal celebration in Goa,
              a sophisticated wedding in Hyderabad or
              an intimate destination celebration elsewhere
              in India, our planning process is built around
              the destination and the people who matter most.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "18px",
            }}
          >
            {[
              "Hyderabad",
              "Udaipur",
              "Jaipur",
              "Goa",
              "Jodhpur",
              "Kerala",
            ].map((destination) => (
              <div
                key={destination}
                style={{
                  minHeight: "190px",
                  border:
                    "1px solid rgba(201,164,107,0.3)",
                  display: "flex",
                  alignItems: "flex-end",
                  padding: "24px",
                  background:
                    "linear-gradient(145deg, rgba(201,164,107,0.08), rgba(0,0,0,0.15))",
                }}
              >
                <h3
                  style={{
                    fontFamily:
                      "Georgia, 'Times New Roman', serif",
                    fontWeight: 400,
                    fontSize: "30px",
                    margin: 0,
                  }}
                >
                  {destination}
                </h3>
              </div>
            ))}
          </div>

          {/* CLICK → HOME */}

          <div
            style={{
              textAlign: "center",
              marginTop: "45px",
            }}
          >
            <Link
              to={HOME_URL}
              style={{
                color: "#C9A46C",
                textDecoration: "none",
                textTransform: "uppercase",
                letterSpacing: "0.2em",
                fontSize: "12px",
              }}
            >
              Discover Our Destinations →
            </Link>
          </div>
        </div>
      </section>


      {/* =====================================================
          WHY KAARYA
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
            Why Weddings by Kaarya
          </p>

          <h2
            style={{
              fontFamily:
                "Georgia, 'Times New Roman', serif",
              fontWeight: 400,
              fontSize:
                "clamp(40px, 6vw, 74px)",
              lineHeight: 1.05,
              marginBottom: "30px",
            }}
          >
            Thoughtful planning.
            <br />
            Beautiful execution.
          </h2>

          <p
            style={{
              color: "#DCCDC5",
              fontSize: "18px",
              lineHeight: 1.85,
              maxWidth: "780px",
              margin: "0 auto",
            }}
          >
            A luxury wedding requires more than beautiful
            decor. It requires precise planning, thoughtful
            hospitality, experienced vendor management,
            production discipline and an understanding of
            how every moment should feel for the couple
            and their guests.
          </p>
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
              The Journey
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
                title: "Dream",
                text:
                  "We begin by understanding your story, priorities, traditions, family and the celebration you imagine.",
              },
              {
                number: "II",
                title: "Design",
                text:
                  "We translate that vision into a cohesive wedding experience through creative direction, design and planning.",
              },
              {
                number: "III",
                title: "Deliver",
                text:
                  "Our team brings every detail together through production, logistics, hospitality and meticulous execution.",
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
              Planning your celebration
            </h2>
          </div>

          <div>
            {[
              {
                question:
                  "What does a luxury wedding planner do?",
                answer:
                  "A luxury wedding planner manages the strategic, creative and operational aspects of a wedding. This can include venue selection, budgeting, design, decor, vendor management, guest hospitality, accommodation, transportation, production, timelines and on-ground execution.",
              },
              {
                question:
                  "Does Weddings by Kaarya plan destination weddings?",
                answer:
                  "Yes. Weddings by Kaarya plans destination weddings across India, bringing together venue planning, accommodation, hospitality, logistics, wedding design, production and execution into one coordinated experience.",
              },
              {
                question:
                  "Do you plan weddings in Hyderabad?",
                answer:
                  "Yes. Hyderabad is one of the locations served by Weddings by Kaarya. We plan celebrations across hotels, convention venues, private properties and destination-style wedding venues in and around Hyderabad.",
              },
              {
                question:
                  "Can you manage the complete wedding?",
                answer:
                  "Our planning approach can cover the complete wedding journey, from initial concept and venue planning through design, vendor coordination, hospitality, guest logistics, production and final execution.",
              },
              {
                question:
                  "How early should we hire a luxury wedding planner?",
                answer:
                  "For a large or destination wedding, beginning the planning process early allows more flexibility with venues, hotels, vendors, design and guest logistics. The ideal timeline depends on the destination, guest count and complexity of the celebration.",
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
            Begin Your Wedding Journey
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
            Your story deserves
            <br />
            to be beautifully told.
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
            Tell us about your celebration, your
            destination and the experience you want
            your guests to remember.
          </p>

          {/* CLICK → HOME */}

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
        Weddings by Kaarya · Luxury Wedding Planner
        · Hyderabad · India
      </div>

    </main>
  );
};

export default LuxuryWeddingPlanner;