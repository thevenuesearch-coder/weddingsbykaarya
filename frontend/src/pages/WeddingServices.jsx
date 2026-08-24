import { useEffect } from "react";
import { Link } from "react-router-dom";

const HOME_URL = "/";

const WeddingServices = () => {
  useEffect(() => {
    document.title =
      "Wedding Planning Services in India | Weddings by Kaarya";

    const description =
      "Explore complete wedding planning services by Weddings by Kaarya, including wedding design, decor, hospitality, logistics, production, guest management and destination wedding planning across India.";

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
      "https://kaaryaweddings.com/wedding-services"
    );
  }, []);

  const services = [
    {
      number: "01",
      title: "Wedding Planning",
      text:
        "A structured planning process that brings together your wedding vision, family requirements, guest experience, vendors, timelines and execution.",
    },
    {
      number: "02",
      title: "Wedding Design & Decor",
      text:
        "Bespoke concepts, colour palettes, floral installations, stage design, tablescapes and environments created around the character of your celebration.",
    },
    {
      number: "03",
      title: "Venue Selection",
      text:
        "Venue research and evaluation based on guest capacity, location, accommodation, event requirements, hospitality and the overall wedding experience.",
    },
    {
      number: "04",
      title: "Hospitality Management",
      text:
        "Guest welcome, room allocation, help desks, hampers, hospitality teams, guest communication and on-ground coordination.",
    },
    {
      number: "05",
      title: "Guest Logistics",
      text:
        "Airport and railway transfers, transportation planning, vehicle movement, guest itineraries and movement coordination.",
    },
    {
      number: "06",
      title: "Wedding Production",
      text:
        "Stage, sound, lighting, technical production, power, show flow and production management coordinated for every celebration.",
    },
    {
      number: "07",
      title: "Entertainment",
      text:
        "Entertainment planning and artist coordination designed to complement the wedding format, audience and celebration.",
    },
    {
      number: "08",
      title: "Photography & Films",
      text:
        "Photography and cinematography planning focused on documenting the people, details and emotions that define your celebration.",
    },
    {
      number: "09",
      title: "Wedding Branding",
      text:
        "A cohesive visual identity across invitations, signage, stationery, digital communication, guest experiences and event environments.",
    },
    {
      number: "10",
      title: "RSVP & Guest Management",
      text:
        "Guest information, RSVP coordination, attendance tracking and communication designed to make planning easier for families and guests.",
    },
    {
      number: "11",
      title: "Vendor Management",
      text:
        "Coordination across specialist vendors, timelines, deliverables, approvals and execution requirements.",
    },
    {
      number: "12",
      title: "On-Ground Coordination",
      text:
        "A dedicated execution layer managing the details on the wedding days so families can focus on being present.",
    },
  ];

  const experiences = [
    {
      title: "Intimate Celebrations",
      text:
        "Thoughtfully planned weddings for couples and families looking for intimacy, personalisation and attention to detail.",
    },
    {
      title: "Luxury Weddings",
      text:
        "Sophisticated celebrations where design, hospitality, production and service are coordinated to create an elevated experience.",
    },
    {
      title: "Destination Weddings",
      text:
        "Multi-day celebrations involving venues, accommodation, guest travel, hospitality, logistics and wedding production.",
    },
    {
      title: "Large-Scale Weddings",
      text:
        "Complex celebrations requiring detailed guest management, multiple vendors, production planning and disciplined execution.",
    },
  ];

  const process = [
    {
      number: "I",
      title: "Understand",
      text:
        "We begin by understanding your story, priorities, family, guest profile, destination preferences and the experience you want to create.",
    },
    {
      number: "II",
      title: "Plan",
      text:
        "We build the planning framework covering venues, services, vendors, design, hospitality, logistics, production and timelines.",
    },
    {
      number: "III",
      title: "Design",
      text:
        "We translate the vision into a cohesive visual and experiential direction for the wedding.",
    },
    {
      number: "IV",
      title: "Coordinate",
      text:
        "Our team aligns the different stakeholders, vendors and moving parts before the celebration.",
    },
    {
      number: "V",
      title: "Execute",
      text:
        "The plan comes together on the ground through structured coordination and real-time execution.",
    },
  ];

  const faqs = [
    {
      question:
        "What wedding planning services does Weddings by Kaarya provide?",
      answer:
        "Our wedding planning services can include venue selection, wedding design, decor, hospitality, guest logistics, transportation, production, entertainment, photography coordination, branding, RSVP management, vendor coordination and on-ground execution.",
    },
    {
      question:
        "Do you provide complete wedding planning?",
      answer:
        "Yes. Our planning approach can cover the wedding journey from initial planning and design through vendor coordination and on-ground execution.",
    },
    {
      question:
        "Do you plan destination weddings?",
      answer:
        "Yes. Destination wedding planning can include venue selection, accommodation, guest hospitality, transportation, wedding design, production and multi-day event coordination.",
    },
    {
      question:
        "Can we hire Kaarya for specific wedding services?",
      answer:
        "Wedding requirements differ from family to family. Services can be structured around the scope and requirements of each celebration.",
    },
    {
      question:
        "Where does Weddings by Kaarya provide wedding planning services?",
      answer:
        "Weddings by Kaarya plans and executes weddings across India, including Hyderabad and major destination wedding locations.",
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
          minHeight: "90vh",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          padding: "140px 24px 100px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 50% 25%, rgba(201,164,107,0.18), transparent 45%), linear-gradient(180deg, #35151C 0%, #210D12 100%)",
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: "30px",
            border:
              "1px solid rgba(201,164,107,0.22)",
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 2,
            maxWidth: "1100px",
          }}
        >
          <p
            style={{
              color: "#C9A46C",
              letterSpacing: "0.35em",
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
                "clamp(46px, 7vw, 92px)",
              lineHeight: 0.98,
              letterSpacing: "-0.035em",
              margin: "0 auto 36px",
            }}
          >
            Wedding Planning
            <br />
            Services in India
          </h1>

          <p
            style={{
              maxWidth: "780px",
              margin: "0 auto 45px",
              color: "#E6DAD0",
              fontSize:
                "clamp(17px, 2vw, 21px)",
              lineHeight: 1.7,
            }}
          >
            From the first idea to the final farewell,
            we bring planning, design, hospitality,
            logistics and execution together to create
            celebrations that feel effortless.
          </p>

          <Link
            to={HOME_URL}
            style={{
              display: "inline-block",
              padding: "18px 38px",
              background: "#C9A46C",
              color: "#35151C",
              textDecoration: "none",
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              fontSize: "12px",
              fontWeight: 600,
            }}
          >
            Plan Your Wedding
          </Link>
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
              More Than Coordination
            </p>

            <h2
              style={{
                fontFamily:
                  "Georgia, 'Times New Roman', serif",
                fontWeight: 400,
                fontSize:
                  "clamp(40px, 5vw, 68px)",
                lineHeight: 1.05,
                margin: 0,
              }}
            >
              One team.
              <br />
              One vision.
              <br />
              Every detail.
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
              A wedding is made up of hundreds of
              decisions and countless moving parts.
              The venue, decor, hospitality, logistics,
              production, entertainment and guest
              experience all need to work together.
            </p>

            <p>
              Our role is to bring these elements into
              one coherent planning and execution
              framework.
            </p>

            <p>
              Whether it is an intimate celebration,
              luxury wedding or multi-day destination
              wedding, the objective remains the same:
              create an experience that feels considered,
              personal and beautifully executed.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          SERVICES GRID
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
              Our Services
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
              Everything required
              <br />
              to bring the wedding together.
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
                  padding: "38px 32px",
                  minHeight: "280px",
                }}
              >
                <div
                  style={{
                    color: "#C9A46C",
                    fontFamily:
                      "Georgia, 'Times New Roman', serif",
                    fontSize: "21px",
                    marginBottom: "25px",
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
                    lineHeight: 1.15,
                    margin:
                      "0 0 17px",
                  }}
                >
                  {service.title}
                </h3>

                <p
                  style={{
                    color: "#D5C5BE",
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
          EXPERIENCE TYPES
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
              Celebrations We Plan
            </p>

            <h2
              style={{
                fontFamily:
                  "Georgia, 'Times New Roman', serif",
                fontWeight: 400,
                fontSize:
                  "clamp(40px, 6vw, 70px)",
                margin: 0,
              }}
            >
              Different weddings.
              <br />
              One standard of care.
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(270px, 1fr))",
              gap: "18px",
            }}
          >
            {experiences.map((experience) => (
              <article
                key={experience.title}
                style={{
                  padding: "38px 30px",
                  minHeight: "280px",
                  border:
                    "1px solid rgba(201,164,107,0.25)",
                }}
              >
                <h3
                  style={{
                    fontFamily:
                      "Georgia, 'Times New Roman', serif",
                    fontWeight: 400,
                    fontSize: "30px",
                    margin:
                      "0 0 20px",
                  }}
                >
                  {experience.title}
                </h3>

                <p
                  style={{
                    color: "#D4C4BD",
                    lineHeight: 1.75,
                    margin: 0,
                  }}
                >
                  {experience.text}
                </p>
              </article>
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
              maxWidth: "750px",
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
              How We Work
            </p>

            <h2
              style={{
                fontFamily:
                  "Georgia, 'Times New Roman', serif",
                fontWeight: 400,
                fontSize:
                  "clamp(40px, 6vw, 70px)",
                lineHeight: 1.05,
                margin: 0,
              }}
            >
              From first conversation
              <br />
              to final farewell.
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(210px, 1fr))",
              gap: "35px",
            }}
          >
            {process.map((step) => (
              <article
                key={step.number}
                style={{
                  borderTop:
                    "1px solid rgba(201,164,107,0.45)",
                  paddingTop: "28px",
                }}
              >
                <div
                  style={{
                    color: "#C9A46C",
                    fontFamily:
                      "Georgia, 'Times New Roman', serif",
                    fontSize: "38px",
                    marginBottom: "22px",
                  }}
                >
                  {step.number}
                </div>

                <h3
                  style={{
                    fontFamily:
                      "Georgia, 'Times New Roman', serif",
                    fontWeight: 400,
                    fontSize: "28px",
                    margin:
                      "0 0 15px",
                  }}
                >
                  {step.title}
                </h3>

                <p
                  style={{
                    color: "#CDBDB5",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  {step.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          SEO CONTENT
      ===================================================== */}

      <section
        style={{
          padding: "120px 24px",
          background: "#3F1821",
        }}
      >
        <div
          style={{
            maxWidth: "950px",
            margin: "0 auto",
          }}
        >
          <p
            style={{
              color: "#C9A46C",
              textTransform: "uppercase",
              letterSpacing: "0.3em",
              fontSize: "11px",
              marginBottom: "22px",
            }}
          >
            Wedding Planning in India
          </p>

          <h2
            style={{
              fontFamily:
                "Georgia, 'Times New Roman', serif",
              fontWeight: 400,
              fontSize:
                "clamp(38px, 5vw, 62px)",
              lineHeight: 1.1,
              marginBottom: "35px",
            }}
          >
            Creating celebrations
            with purpose and precision.
          </h2>

          <div
            style={{
              color: "#D8C9C1",
              fontSize: "17px",
              lineHeight: 1.9,
            }}
          >
            <p>
              Weddings by Kaarya provides wedding
              planning services for couples and families
              looking for a considered approach to their
              celebration. Our planning process combines
              creative direction with detailed operational
              planning.
            </p>

            <p>
              Wedding planning can involve venue
              selection, accommodation, decor, hospitality,
              transportation, guest management,
              entertainment, photography, production and
              on-ground coordination. Bringing these
              functions together allows the wedding to
              operate as one experience rather than a
              collection of independent services.
            </p>

            <p>
              For destination weddings, the planning
              extends further into guest travel,
              accommodation, welcome experiences,
              multi-day itineraries and destination-specific
              logistics.
            </p>

            <p>
              Our objective is not simply to coordinate
              vendors. It is to create a celebration where
              the design, guest experience and execution
              work together from beginning to end.
            </p>
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
              marginBottom: "60px",
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
              Wedding planning services
            </h2>
          </div>

          {faqs.map((faq) => (
            <details
              key={faq.question}
              style={{
                borderTop:
                  "1px solid rgba(201,164,107,0.25)",
                padding: "27px 0",
              }}
            >
              <summary
                style={{
                  cursor: "pointer",
                  listStyle: "none",
                  fontFamily:
                    "Georgia, 'Times New Roman', serif",
                  fontSize: "21px",
                  lineHeight: 1.4,
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
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section
        style={{
          minHeight: "60vh",
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
            Weddings by Kaarya
          </p>

          <h2
            style={{
              fontFamily:
                "Georgia, 'Times New Roman', serif",
              fontWeight: 400,
              fontSize:
                "clamp(44px, 7vw, 86px)",
              lineHeight: 1,
              margin:
                "0 0 30px",
            }}
          >
            Your celebration.
            <br />
            Thoughtfully planned.
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
            Tell us about your wedding, your family
            and the experience you want to create.
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

      <footer
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
        Weddings by Kaarya · Wedding Planning Services
        · India
      </footer>
    </main>
  );
};

export default WeddingServices;