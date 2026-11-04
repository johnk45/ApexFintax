import { useEffect, useState } from 'react'
import heroImage from '../../assets/img/team/services.jpg'
import aboutImage from '../../assets/img/team/about.jpg'
import partnerOne from '../../assets/img/team/team1.jpg'
import partnerTwo from '../../assets/img/team/team2.jpg'
import partnerThree from '../../assets/img/team/team3.jpg'
import partnerFour from '../../assets/img/team/team4.jpg'
import projectOne from '../../assets/img/portfolio/project1.jpg'
import projectTwo from '../../assets/img/portfolio/project2.jpg'
import projectThree from '../../assets/img/portfolio/project3.jpg'
import './App.css'

const services = [
  {
    number: '01',
    icon: 'chart',
    title: 'Accounting & tax',
    description:
      'Dependable reporting and practical tax guidance that keeps your business in control and ready for what is next.',
    points: ['Bookkeeping & reporting', 'Tax planning & compliance'],
  },
  {
    number: '02',
    icon: 'compass',
    title: 'Business advisory',
    description:
      'Clear commercial advice for teams making important choices about investment, growth, and change.',
    points: ['Financial modelling', 'Growth & transaction support'],
  },
  {
    number: '03',
    icon: 'shield',
    title: 'Risk & assurance',
    description:
      'Independent assurance and stronger controls to support sound governance and lasting confidence.',
    points: ['Internal & external audit', 'Risk and controls review'],
  },
]

const people = [
  { image: partnerOne, name: 'David Mwangi', title: 'Managing Partner', area: 'Strategy & Advisory' },
  { image: partnerTwo, name: 'Njeri Wambui', title: 'Director, Tax', area: 'Tax & Compliance' },
  { image: partnerThree, name: 'Kelvin Otieno', title: 'Director, Assurance', area: 'Audit & Risk' },
  { image: partnerFour, name: 'Amina Hassan', title: 'Head of Analytics', area: 'Data & Insights' },
]

const projects = [
  {
    image: projectOne,
    category: 'Financial transformation',
    title: 'Regional banking group',
    result: 'A simpler reporting model helped teams close the books with greater confidence.',
  },
  {
    image: projectTwo,
    category: 'Growth advisory',
    title: 'Emerging insurance platform',
    result: 'A robust forecast brought clarity to the next stage of the company’s growth.',
  },
  {
    image: projectThree,
    category: 'Risk & assurance',
    title: 'Pan-African manufacturer',
    result: 'A practical controls framework supported expansion across new markets.',
  },
]

const clients = [
  { name: 'KCB', src: '/logos/kcb.png', shape: 'wordmark' },
  { name: 'NCBA', src: '/logos/ncba.svg', shape: 'wordmark' },
  { name: 'Jubilee Group', src: '/logos/jubilee.png', shape: 'wordmark' },
  { name: 'Britam', src: '/logos/britam.png', shape: 'wordmark' },
  { name: 'ABSA', src: '/logos/absa.jpg', shape: 'badge' },
  { name: 'Old Mutual', src: '/logos/old-mutual.png', shape: 'badge', label: 'Old Mutual' },
  { name: 'Stanbic Bank', src: '/logos/stanbic.png', shape: 'badge', label: 'Stanbic' },
  { name: 'CIC Group', src: '/logos/cic.png', shape: 'badge' },
]

const testimonials = [
  {
    quote:
      'ApexFintax helped us bring structure to a complex regional operation. Their team pairs technical depth with thoughtful commercial advice.',
    name: 'Sarah Kilonzo',
    role: 'Chief Finance Officer, Meridian Holdings',
    stat: '34%',
    statLabel: 'faster reporting cycle',
    initials: 'SK',
  },
  {
    quote:
      'We finally have a clear view of the numbers behind our next move. The team made a complicated process feel manageable.',
    name: 'Peter Njoroge',
    role: 'Managing Director, Eastline Group',
    stat: '5',
    statLabel: 'markets aligned',
    initials: 'PN',
  },
]

function ArrowIcon({ diagonal = false }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="arrow-icon">
      {diagonal ? (
        <path d="M5 15 15 5M6 5h9v9" />
      ) : (
        <path d="M3.5 10h12m-5-5 5 5-5 5" />
      )}
    </svg>
  )
}

function Brand({ light = false }) {
  return (
    <a className={`brand${light ? ' brand-light' : ''}`} href="/" aria-label="ApexFintax home">
      <span className="brand-mark" aria-hidden="true">
        <i />
        <i />
        <i />
      </span>
      <span className="brand-word">
        APEX<span>FINTAX</span>
      </span>
    </a>
  )
}

function ServiceIcon({ name }) {
  if (name === 'shield') {
    return (
      <svg aria-hidden="true" viewBox="0 0 32 32">
        <path d="M16 3 26 7v8c0 6.5-4.3 11-10 14C10.3 26 6 21.5 6 15V7l10-4Z" />
        <path d="m11.5 15.5 3 3 6-6" />
      </svg>
    )
  }
  if (name === 'compass') {
    return (
      <svg aria-hidden="true" viewBox="0 0 32 32">
        <circle cx="16" cy="16" r="12" />
        <path d="m20.5 11.5-3 6-6 3 3-6 6-3Z" />
      </svg>
    )
  }
  return (
    <svg aria-hidden="true" viewBox="0 0 32 32">
      <path d="M5 26V6m0 20h23" />
      <path d="m8 20 6-6 5 3 8-9" />
      <path d="M21 8h6v6" />
    </svg>
  )
}

function AccountingTaxPage() {
  const accountingOfferings = [
    {
      image: projectOne,
      imageAlt: 'Insurance documents and a calculator on a desk',
      title: 'Accounting & reporting',
      description: 'Reliable books and management reports that give you a clear view of performance and cash flow.',
      items: ['Bookkeeping & month-end close', 'Management accounts', 'Financial statement preparation'],
    },
    {
      image: projectTwo,
      imageAlt: 'A team discussing plans around a table',
      title: 'Tax planning & compliance',
      description: 'Practical tax support that helps you meet deadlines, manage exposure, and plan with confidence.',
      items: ['Corporate and individual tax', 'VAT and withholding tax', 'Returns, filings & compliance'],
    },
    {
      image: projectThree,
      imageAlt: 'Business professionals gathered around a conference table with laptops',
      title: 'Payroll & business support',
      description: 'Day-to-day finance support that gives your team more time to focus on running the business.',
      items: ['Payroll processing', 'Statutory deductions', 'Finance process improvement'],
    },
  ]

  return (
    <div className="accounting-page">
      <header className="accounting-page-header">
        <div className="utility-bar">
          <div className="utility-inner">
            <div className="utility-details">
              <a href="tel:+254791302316"><span aria-hidden="true">☎</span> +254 791 302 316</a>
              <a href="mailto:hello@apexfintax.co.ke"><span aria-hidden="true">✉</span> hello@apexfintax.co.ke</a>
              <span><span aria-hidden="true">◷</span> Mon–Fri, 8:00–17:00</span>
            </div>
            <div className="social-links" aria-label="Social media">
              <span>Follow us</span>
              <a href="mailto:hello@apexfintax.co.ke" aria-label="LinkedIn">in</a>
              <a href="mailto:hello@apexfintax.co.ke" aria-label="X">X</a>
              <a href="mailto:hello@apexfintax.co.ke" aria-label="Facebook">f</a>
            </div>
          </div>
        </div>
        <div className="navigation-wrap">
          <div className="navigation-inner">
            <Brand />
            <nav className="accounting-navigation" aria-label="Main navigation">
              <a href="/#home">Home</a>
              <a href="/#about">About</a>
              <a className="active" href="/#services">Services</a>
              <a href="/#team">Our team</a>
            </nav>
            <a className="button button-dark header-cta" href="mailto:hello@apexfintax.co.ke">
              Talk to an expert <ArrowIcon diagonal />
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="accounting-hero">
          <div className="accounting-hero-copy">
            <a className="accounting-back-link" href="/#services"><ArrowIcon /> All services</a>
            <p className="eyebrow"><span /> Accounting & tax</p>
            <h1>Know your numbers.<br /><em>Move with confidence.</em></h1>
            <p className="hero-description">
              From everyday bookkeeping to considered tax advice, we make the financial details easier to manage—and easier to act on.
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href="mailto:hello@apexfintax.co.ke">Let’s talk <ArrowIcon diagonal /></a>
              <a className="text-link" href="#accounting-services">Explore our services <ArrowIcon /></a>
            </div>
            <div className="accounting-hero-caption">
              <span className="accounting-caption-mark">01</span>
              <span>Clear reporting. Thoughtful guidance.<br />Support built around your business.</span>
            </div>
          </div>
          <div className="accounting-hero-visual">
            <img src={heroImage} alt="Finance team collaborating over a laptop in a bright office" />
            <div className="accounting-visual-note">
              <span className="note-icon" aria-hidden="true">↗</span>
              <p><strong>Clarity you can use.</strong><br />Good finance is a foundation for growth.</p>
            </div>
          </div>
        </section>

        <section className="accounting-intro section-shell">
          <div className="section-kicker">Finance, made practical</div>
          <div className="accounting-intro-content">
            <h2>More than keeping the books.<br /><em>A partner in your progress.</em></h2>
            <p>Every business deserves financial information it can trust. Our team brings dependable processes and straight-talking expertise to help you stay compliant, see what is changing, and make your next move with confidence.</p>
          </div>
        </section>

        <section className="accounting-services" id="accounting-services">
          <div className="section-shell">
            <div className="section-heading">
              <div>
                <div className="section-kicker">How we can help</div>
                <h2>The right support for <em>every number.</em></h2>
              </div>
              <p>Choose the support you need today, with room to grow as your business changes.</p>
            </div>
            <div className="accounting-offering-grid">
              {accountingOfferings.map((offering, index) => (
                <article className="accounting-offering" key={offering.title}>
                  <div className="accounting-offering-photo">
                    <img src={offering.image} alt={offering.imageAlt} loading="lazy" />
                    <span>0{index + 1}</span>
                  </div>
                  <div className="accounting-offering-content">
                    <h3>{offering.title}</h3>
                    <p>{offering.description}</p>
                    <ul>
                      {offering.items.map((item) => <li key={item}><span aria-hidden="true">↗</span>{item}</li>)}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="accounting-approach section-shell">
          <div className="accounting-approach-photo">
            <img src={aboutImage} alt="Business owner reviewing financial information at a desk" loading="lazy" />
            <span>Built around your business.</span>
          </div>
          <div className="accounting-approach-copy">
            <div className="section-kicker">A better way to work</div>
            <h2>Good advice starts with <em>listening.</em></h2>
            <p>We get to know how your business works before recommending a way forward. You get a responsive team, clear answers, and no surprises about what happens next.</p>
            <div className="accounting-steps">
              <div><span>01</span><p><strong>Understand</strong> — your goals, systems, and current challenges.</p></div>
              <div><span>02</span><p><strong>Make a plan</strong> — practical priorities and clear responsibilities.</p></div>
              <div><span>03</span><p><strong>Keep improving</strong> — consistent support and useful insight over time.</p></div>
            </div>
          </div>
        </section>

        <section className="accounting-cta">
          <div className="section-shell accounting-cta-inner">
            <div>
              <div className="section-kicker">Let’s get started</div>
              <h2>Make your next financial decision <em>with confidence.</em></h2>
            </div>
            <div>
              <p>Tell us what you need help with. We’ll arrange a conversation and find the right next step for your business.</p>
              <a className="button button-light" href="mailto:hello@apexfintax.co.ke">Book a consultation <ArrowIcon diagonal /></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="accounting-page-footer">
        <div className="section-shell">
          <Brand light />
          <p>Clear numbers. Confident decisions. Enduring value.</p>
          <a href="/">Back to ApexFintax home <ArrowIcon /></a>
        </div>
      </footer>
    </div>
  )
}

function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [testimonialIndex, setTestimonialIndex] = useState(0)
  const testimonial = testimonials[testimonialIndex]

  const closeMenu = () => setMenuOpen(false)
  const changeTestimonial = (direction) => {
    setTestimonialIndex((current) => (current + direction + testimonials.length) % testimonials.length)
  }

  return (
    <>
      <header className="site-header">
        <div className="utility-bar">
          <div className="utility-inner">
            <div className="utility-details">
              <a href="tel:+254791302316"><span aria-hidden="true">☎</span> +254 791 302 316</a>
              <a href="mailto:hello@apexfintax.co.ke"><span aria-hidden="true">✉</span> austin.ouko@apexfintax.co.ke</a>
              <span><span aria-hidden="true">◷</span> Mon–Fri, 8:00–17:00</span>
            </div>
            <div className="social-links" aria-label="Social media">
              <span>Follow us</span>
              <a href="#contact" aria-label="LinkedIn">in</a>
              <a href="#contact" aria-label="X">X</a>
              <a href="#contact" aria-label="Facebook">f</a>
            </div>
          </div>
        </div>
        <div className="navigation-wrap">
          <div className="navigation-inner">
            <Brand />
            <button
              className="menu-toggle"
              type="button"
              aria-expanded={menuOpen}
              aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span />
              <span />
            </button>
            <nav className={menuOpen ? 'main-navigation is-open' : 'main-navigation'} aria-label="Main navigation">
              <a className="active" href="#home" onClick={closeMenu}>Home</a>
              <a href="#about" onClick={closeMenu}>About</a>
              <a href="#services" onClick={closeMenu}>Services</a>
              <a href="#projects" onClick={closeMenu}>Projects</a>
              <a href="#team" onClick={closeMenu}>Our team</a>
              <a href="#contact" onClick={closeMenu}>Contact</a>
            </nav>
            <a className="button button-dark header-cta" href="#contact">
              Book a consultation <ArrowIcon diagonal />
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <p className="eyebrow"><span /> Finance. Clarity. Forward.</p>
            <h1>Confidence in every <em>decision.</em></h1>
            <p className="hero-description">
              We help ambitious organizations make sense of their finances, manage risk, and move forward with purpose.
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href="#services">Explore our services <ArrowIcon /></a>
              <a className="text-link" href="#about">Discover ApexFintax <ArrowIcon /></a>
            </div>
            <div className="hero-stats" aria-label="ApexFintax at a glance">
              <div><strong>12<span>+</span></strong><span>Years of combined<br />expertise</span></div>
              <div><strong>98<span>%</span></strong><span>Client retention<br />rate</span></div>
              <div><strong>7</strong><span>African markets<br />supported</span></div>
            </div>
          </div>
          <div className="hero-visual">
            <img src={heroImage} alt="Colleagues working together in a bright office" />
            <div className="hero-image-shade" />
            <div className="hero-index">01 <span>/ 03</span></div>
            <div className="hero-note">
              <span className="note-icon" aria-hidden="true">↗</span>
              <p><strong>Built for momentum.</strong><br />Insight that moves business forward.</p>
            </div>
          </div>
        </section>

        <section className="intro-section section-shell" id="about">
          <div className="section-kicker">Who we are</div>
          <div className="intro-content">
            <h2>We make complex finance feel <em>clear.</em></h2>
            <div className="intro-aside">
              <p>Behind every confident decision is a clear view of the numbers. We bring careful expertise and practical thinking to help leaders move from questions to action.</p>
              <a className="text-link" href="#team">Meet the people behind the work <ArrowIcon /></a>
            </div>
          </div>
          <div className="intro-image">
            <img src={aboutImage} alt="A business owner reviewing financial information at a desk" />
            <span>Clarity creates room to grow.</span>
          </div>
        </section>

        <section className="services-section" id="services">
          <div className="section-shell">
            <div className="section-heading">
              <div>
                <div className="section-kicker">What we do</div>
                <h2>Expertise that creates <em>real advantage.</em></h2>
              </div>
              <p>Integrated finance, tax, assurance, and advisory support shaped around the realities of modern business.</p>
            </div>
            <div className="service-grid">
              {services.map((service) => (
                <article className="service-card" key={service.number}>
                  <div className="service-number">{service.number}</div>
                  <div className="service-icon"><ServiceIcon name={service.icon} /></div>
                  <h3>{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                  <ul>
                    {service.points.map((point) => <li key={point}><span aria-hidden="true">↗</span>{point}</li>)}
                  </ul>
                  <a href={service.title === 'Accounting & tax' ? '/accounting-tax' : '#contact'} className="text-link">
                    {service.title === 'Accounting & tax' ? 'Explore more' : 'Explore service'} <ArrowIcon />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="client-strip" aria-label="Selected client relationships">
          <div className="client-strip-heading">
            <span>Trusted by leaders across banking & insurance</span>
            <span>Selected relationships</span>
          </div>
          <div className="client-logos" role="list" aria-label="Selected client relationships">
            {clients.map(({ name, src, shape, label }) => (
              <div className="client-logo" key={name} role="listitem">
                <img className={`client-logo-image ${shape}`} src={src} alt={label ? '' : name} loading="lazy" />
                {label && <span className="client-logo-name">{label}</span>}
              </div>
            ))}
          </div>
        </section>

        <section className="team-section section-shell" id="team">
          <div className="section-heading">
            <div>
              <div className="section-kicker">Our people</div>
              <h2>Expert minds. <em>Human approach.</em></h2>
            </div>
            <div className="heading-aside">
              <p>Experienced specialists who listen closely, think commercially, and stay accountable to the outcomes that matter.</p>
              <a href="#contact" className="text-link">Meet the full team <ArrowIcon /></a>
            </div>
          </div>
          <div className="team-grid">
            {people.map((person) => (
              <article className="team-card" key={person.name}>
                <div className="team-photo"><img src={person.image} alt={`Portrait of a finance professional, ${person.title}`} /><a href="#contact" aria-label={`${person.name} on LinkedIn`}>in</a></div>
                <div className="team-info">
                  <div><h3>{person.name}</h3><p>{person.title}</p></div>
                  <span>{person.area}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="projects-section" id="projects">
          <div className="section-shell">
            <div className="section-heading">
              <div>
                <div className="section-kicker">Selected work</div>
                <h2>Impact, in practice.</h2>
              </div>
              <a className="text-link" href="#contact">View all projects <ArrowIcon /></a>
            </div>
            <div className="project-grid">
              {projects.map((project, index) => (
                <article className="project-card" key={project.title}>
                  <div className="project-photo"><img src={project.image} alt="" /><span>0{index + 1}</span></div>
                  <div className="project-content">
                    <span className="project-category">{project.category}</span>
                    <h3>{project.title}</h3>
                    <p>{project.result}</p>
                    <a className="text-link" href="#contact">See how we helped <ArrowIcon /></a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="testimonial-section">
          <div className="testimonial-inner section-shell">
            <div className="testimonial-label"><span className="section-kicker">Client perspective</span><span className="quote-mark">“</span></div>
            <div className="testimonial-copy">
              <p className="testimonial-quote">“{testimonial.quote}”</p>
              <div className="testimonial-person">
                <span className="person-initials">{testimonial.initials}</span>
                <div><strong>{testimonial.name}</strong><span>{testimonial.role}</span></div>
              </div>
            </div>
            <div className="testimonial-outcome">
              <strong>{testimonial.stat}</strong>
              <span>{testimonial.statLabel}</span>
              <div className="testimonial-controls">
                <button type="button" onClick={() => changeTestimonial(-1)} aria-label="Previous testimonial">←</button>
                <button type="button" onClick={() => changeTestimonial(1)} aria-label="Next testimonial">→</button>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-banner section-shell" id="contact">
          <div>
            <div className="section-kicker">Start a conversation</div>
            <h2>Your next confident decision <em>starts here.</em></h2>
          </div>
          <div className="contact-banner-aside">
            <p>Tell us where you want to take your business. Let’s make the financial picture clearer together.</p>
            <a className="button button-light" href="mailto:hello@apexfintax.co.ke">Book a consultation <ArrowIcon diagonal /></a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-main section-shell">
          <div className="footer-brand">
            <Brand light />
            <p>Clear numbers. Confident decisions.<br />Enduring value.</p>
            <div className="social-links footer-social">
              <a href="#contact" aria-label="LinkedIn">in</a>
              <a href="#contact" aria-label="X">X</a>
              <a href="#contact" aria-label="Facebook">f</a>
            </div>
          </div>
          <div className="footer-column"><strong>Company</strong><a href="#about">About us</a><a href="#team">Our team</a><a href="#projects">Projects</a><a href="#contact">Careers</a></div>
          <div className="footer-column"><strong>Expertise</strong><a href="/accounting-tax">Accounting & tax</a><a href="#services">Business advisory</a><a href="#services">Risk & assurance</a><a href="#services">Data & analytics</a></div>
          <div className="footer-column footer-contact"><strong>Get in touch</strong><span>The Address, Muthangari Drive<br />Nairobi, Kenya</span><a href="tel:+254700480220">+254 700 480 220</a><a href="mailto:hello@apexfintax.co.ke">hello@apexfintax.co.ke</a></div>
        </div>
        <div className="footer-bottom section-shell">
          <span>© 2025 ApexFintax Advisory LLP. All rights reserved.</span>
          <div><a href="#contact">Privacy policy</a><a href="#contact">Terms of use</a><a href="#contact">Cookie policy</a></div>
        </div>
      </footer>
    </>
  )
}

function App() {
  const isAccountingTax = window.location.pathname.replace(/\/+$/, '') === '/accounting-tax'

  useEffect(() => {
    document.title = isAccountingTax ? 'Accounting & Tax | ApexFintax' : 'ApexFintax | Finance. Clarity. Forward.'
  }, [isAccountingTax])

  return isAccountingTax ? <AccountingTaxPage /> : <HomePage />
}

export default App
