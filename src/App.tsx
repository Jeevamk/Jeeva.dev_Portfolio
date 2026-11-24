import { useEffect, useState } from 'react'

type IconName =
  | 'arrow'
  | 'code'
  | 'layers'
  | 'calendar'
  | 'github'
  | 'linkedin'
  | 'mail'
  | 'phone'
  | 'check'
  | 'spark'
  | 'menu'
  | 'close'
  | 'sun'
  | 'moon'

function Icon({ name, className = 'size-5' }: { name: IconName; className?: string }) {
  const paths: Record<IconName, React.ReactNode> = {
    arrow: <><path d="M5 12h14M13 6l6 6-6 6" /></>,
    code: <><path d="m8 9-4 3 4 3M16 9l4 3-4 3M14 5l-4 14" /></>,
    layers: <><path d="m12 2 9 5-9 5-9-5 9-5Z" /><path d="m3 12 9 5 9-5M3 17l9 5 9-5" /></>,
    calendar: <><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M16 3v4M8 3v4M3 10h18" /></>,
    github: <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.8-1.6 6.8-7A5.4 5.4 0 0 0 19.3 4 5 5 0 0 0 19.1.5S18 0 15 1.8a13.4 13.4 0 0 0-7 0C5 0 3.9.5 3.9.5A5 5 0 0 0 3.7 4a5.4 5.4 0 0 0-1.5 3.7c0 5.4 3.5 6.6 6.8 7A4.8 4.8 0 0 0 8 18v4M8 19c-3 .9-3-1.5-4-2" />,
    linkedin: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6ZM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" /></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
    phone: <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.4 2.1L8.1 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.6 1.9Z" />,
    check: <path d="m5 12 4 4L19 6" />,
    spark: <><path d="m12 3-1.4 4.1a5.5 5.5 0 0 1-3.5 3.5L3 12l4.1 1.4a5.5 5.5 0 0 1 3.5 3.5L12 21l1.4-4.1a5.5 5.5 0 0 1 3.5-3.5L21 12l-4.1-1.4a5.5 5.5 0 0 1-3.5-3.5L12 3Z" /></>,
    menu: <><path d="M4 7h16M4 12h16M4 17h16" /></>,
    close: <><path d="m6 6 12 12M18 6 6 18" /></>,
    sun: <><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></>,
    moon: <path d="M20 14.5A8 8 0 0 1 9.5 4 8 8 0 1 0 20 14.5Z" />,
  }

  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name]}
    </svg>
  )
}

const projects = [
  {
    number: '01',
    title: 'Lead Engine',
    context: 'Company project',
    type: 'Multichannel Outreach Automation',
    description: 'A visual, tree-based workflow platform for building and running multichannel email and LinkedIn campaigns with AI-assisted replies and lead qualification.',
    tags: ['NestJS', 'BullMQ', 'Redis', 'MongoDB'],
    color: '#E55C3B',
    visual: 'workflow',
  },
  {
    number: '02',
    title: 'We-Link API',
    context: 'Company project',
    type: 'LinkedIn Automation API',
    description: 'A developer-first API provider with 50+ endpoints for automating LinkedIn actions, supported by secure API keys, team permissions, queues, and webhooks.',
    tags: ['NestJS', 'RabbitMQ', 'BullMQ', 'React'],
    color: '#26756F',
    visual: 'api',
  },
  {
    number: '03',
    title: 'Sappy',
    context: 'Company project',
    type: 'Customer Support Chat Platform',
    description: 'A customer support platform with live chat, ticketing, localization, and an embeddable multi-iframe JavaScript widget.',
    tags: ['Node.js', 'React', 'JavaScript SDK'],
    color: '#5F52A2',
    visual: 'shop',
  },
  {
    number: '04',
    title: 'Warehouse',
    context: 'Company project',
    type: 'IP & Proxy Management Service',
    description: 'A microservices system for IP allocation, rotation, quarantine, and bulk imports, with provider fallback and automated Slack alerts.',
    tags: ['NestJS', 'RabbitMQ', 'Redis', 'MongoDB'],
    color: '#2563EB',
    visual: 'dashboard',
  },
  {
    number: '05',
    title: 'Taskvane',
    context: 'Personal project',
    type: 'Multi-tenant Workflow Automation',
    description: 'A secure SaaS platform that keeps Trello, Google Sheets, and Slack in sync with reliable, duplicate-free delivery.',
    tags: ['NestJS', 'OAuth 2.0', 'MongoDB', 'APIs'],
    color: '#26756F',
    visual: 'analytics',
  },
]

function ProjectVisual({ type }: { type: string }) {
  if (type === 'workflow') {
    return (
      <div className="workflow-window">
        <div className="workflow-toolbar">
          <div><b>Overview</b><span>Stats</span><span>Inbox</span></div>
          <small>Published 13 days ago&nbsp; | &nbsp;Last updated today</small>
        </div>
        <div className="workflow-subbar"><strong>Multichannel outreach campaign</strong><i>● Live</i></div>
        <div className="workflow-content">
          <div className="workflow-rail"><b>W</b><span>⌘</span><span>□</span><span>◇</span><span>△</span><span>⚙</span></div>
          <div className="workflow-canvas">
            <svg className="flow-connections" viewBox="0 0 600 340" preserveAspectRatio="none">
              <path d="M300 54V82M300 119V143H160V167M300 143H430V167M160 201V224H85V248M430 201V222H330V248M430 201V222H505V248M330 282V306" />
            </svg>
            <div className="real-flow-node setup"><span>◈</span><div><small>Start campaign setup</small><i>Define audience & settings</i></div></div>
            <div className="real-flow-node connected"><span>↗</span><div><small>If connected</small><i>Condition</i></div><b>✓</b></div>
            <div className="real-flow-node message"><span>▣</span><div><small>Send message</small><i>Immediately</i></div></div>
            <div className="real-flow-node profile"><span>↗</span><div><small>If Open profile</small><i>LinkedIn action</i></div><b>✓</b></div>
            <div className="real-flow-node end-one"><span>◇</span><div><small>End workflow</small><i>Completed</i></div></div>
            <div className="real-flow-node inmail"><span>◉</span><div><small>Send InMail</small><i>Immediately</i></div></div>
            <div className="real-flow-node credits"><span>↗</span><div><small>If InMail credit remaining</small><i>Condition</i></div><b>✓</b></div>
            <div className="real-flow-node end-two"><span>◇</span><div><small>End workflow</small><i>Completed</i></div></div>
          </div>
          <div className="workflow-activity">
            <div><strong>Activities</strong><small>All activity⌄</small></div>
            <b>Today</b>
            <span><i />Workflow Completed. <em>Phillip Thayer</em><small>02:23 PM</small></span>
            <span><i />Premium In-Mail sent to <em>Giselle Bamberg</em><small>02:08 PM</small></span>
            <span><i />Workflow Completed. <em>Rich S.</em><small>01:45 PM</small></span>
            <span><i />Premium In-Mail sent to <em>Cecilia Sullivan</em><small>01:29 PM</small></span>
          </div>
        </div>
      </div>
    )
  }

  if (type === 'api') {
    return (
      <div className="api-window">
        <div className="api-sidebar"><b>WL</b><span>Overview</span><span className="active">Endpoints</span><span>API keys</span><span>Webhooks</span></div>
        <div className="api-main">
          <div className="api-top"><div><small>We-Link API</small><strong>LinkedIn endpoints</strong></div><b>50+ APIs</b></div>
          <div className="endpoint"><i className="get">GET</i><span>/v1/profiles/{'{id}'}</span><small>Profile details</small></div>
          <div className="endpoint"><i className="post">POST</i><span>/v1/connections</span><small>Send invitation</small></div>
          <div className="endpoint"><i className="post">POST</i><span>/v1/messages</span><small>Send message</small></div>
          <div className="endpoint"><i className="get">GET</i><span>/v1/conversations</span><small>List conversations</small></div>
        </div>
      </div>
    )
  }

  if (type === 'dashboard') {
    return (
      <div className="mock-window">
        <div className="mock-sidebar">
          <span className="mock-logo" />
          {[1, 2, 3, 4].map((n) => <span key={n} className={`mock-nav ${n === 1 ? 'active' : ''}`} />)}
        </div>
        <div className="mock-main">
          <div className="mock-top"><span /><i /></div>
          <div className="mock-title" />
          <div className="mock-columns">
            {[1, 2, 3].map((column) => (
              <div className="mock-column" key={column}>
                <b />
                {[1, 2, 3].slice(0, column === 3 ? 2 : 3).map((card) => <span key={card}><i /></span>)}
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  if (type === 'shop') {
    return (
      <div className="phone-wrap">
        <div className="phone">
          <div className="phone-bar"><b>sappy.</b><i /></div>
          <div className="phone-hero chat-preview">
            <span>Hi Jeeva! How can<br />we help you today?</span>
            <i /><i /><i />
          </div>
          <small>Support is online</small>
          <div className="product-row"><i /><i /><i /></div>
        </div>
        <div className="floating-card"><span>New reply received</span><b><Icon name="check" className="size-3" /></b></div>
      </div>
    )
  }

  return (
    <div className="analytics-window">
      <div className="analytics-head"><b>pulse.</b><span /><i /></div>
      <div className="analytics-body">
        <div className="chart-card">
          <small>Team velocity</small><strong>+24%</strong>
          <div className="bars">{[35, 50, 42, 70, 56, 83, 76].map((h, i) => <i key={i} style={{ height: `${h}%` }} />)}</div>
        </div>
        <div className="score-card"><small>Sprint health</small><strong>92</strong><span>Excellent</span></div>
        <div className="line-card"><small>Project progress</small><svg viewBox="0 0 160 46"><path d="M2 39 C25 40, 25 22, 48 26 S75 36, 91 18 S122 24, 158 5" /></svg></div>
      </div>
    </div>
  )
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const [theme, setTheme] = useState<'light' | 'dark'>(() =>
    document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light',
  )

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try { localStorage.setItem('theme', theme) } catch {}
  }, [theme])

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))
  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <header className="nav-wrap">
        <a className="brand" href="#home" onClick={closeMenu}>J<span>.</span></a>
        <nav className={menuOpen ? 'open' : ''} aria-label="Main navigation">
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#work" onClick={closeMenu}>Work</a>
          <a href="#experience" onClick={closeMenu}>Experience</a>
          <a href="#contact" className="nav-cta" onClick={closeMenu}>Let’s talk <Icon name="arrow" className="size-4" /></a>
        </nav>
        <div className="nav-tools">
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
          >
            <Icon name={theme === 'dark' ? 'sun' : 'moon'} className="size-4" />
          </button>
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            <Icon name={menuOpen ? 'close' : 'menu'} />
          </button>
        </div>
      </header>

      <main>
        <section className="hero section-pad" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span /> Hello, I’m Jeeva</div>
            <h1>I build digital products <em>and</em> bring teams together.</h1>
            <p>Software engineer, full-stack developer, and project coordinator with 2+ years of experience building scalable services, automation platforms, and dependable digital products.</p>
            <div className="hero-actions">
              <a href="#work" className="button primary">View my work <Icon name="arrow" /></a>
              <a href="#contact" className="text-link">Get in touch <span>↗</span></a>
            </div>
          </div>
          <div className="hero-art" aria-label="Developer profile summary">
            <div className="developer-card">
              <div className="code-header">
                <div><i /><i /><i /></div>
                <span>jeeva.profile.ts</span>
                <small>01</small>
              </div>
              <div className="code-body">
                <p><b>01</b><span className="pink">const</span> <span className="blue">developer</span> = {'{'}</p>
                <p><b>02</b>&nbsp;&nbsp;name: <span className="green">'Jeeva MK'</span>,</p>
                <p><b>03</b>&nbsp;&nbsp;role: <span className="green">'Software Engineer'</span>,</p>
                <p><b>04</b>&nbsp;&nbsp;focus: [</p>
                <p><b>05</b>&nbsp;&nbsp;&nbsp;&nbsp;<span className="green">'Full-stack'</span>, <span className="green">'Automation'</span>,</p>
                <p><b>06</b>&nbsp;&nbsp;&nbsp;&nbsp;<span className="green">'Project coordination'</span></p>
                <p><b>07</b>&nbsp;&nbsp;],</p>
                <p><b>08</b>&nbsp;&nbsp;location: <span className="green">'Calicut, Kerala'</span></p>
                <p><b>09</b>{'}'};</p>
                <p><b>10</b><span className="muted">// building reliable products</span></p>
              </div>
            </div>
            <div className="hero-metrics">
              <div><strong>2+</strong><span>Years<br />experience</span></div>
              <div><strong>5+</strong><span>Products<br />delivered</span></div>
            </div>
            <div className="status-pill"><span /> Available for opportunities</div>
          </div>
          <div className="scroll-note"><span /> Scroll to explore</div>
        </section>

        <section className="about section-pad" id="about">
          <div className="section-label">01 / About me</div>
          <div className="about-grid">
            <h2>Equal parts <em>builder</em>,<br />organizer, and problem solver.</h2>
            <div className="about-copy">
              <p className="lead">I care about the full journey—from defining the right feature to shipping resilient systems.</p>
              <p>With a strong backend focus, I build full-stack products using Node.js, NestJS, React, and Next.js. I also coordinate projects, design workflow automation, improve platform security, and keep teams aligned from requirements through release.</p>
              <div className="strengths">
                <div><span><Icon name="code" /></span><b>Backend engineering</b><small>Scalable APIs, microservices, queues, and automation.</small></div>
                <div><span><Icon name="layers" /></span><b>Project coordination</b><small>Owning features and delivery from planning to release.</small></div>
                <div><span><Icon name="spark" /></span><b>Reliable systems</b><small>Security, fault tolerance, testing, and performance.</small></div>
              </div>
            </div>
          </div>
        </section>

        <section className="work section-pad" id="work">
          <div className="work-heading">
            <div><div className="section-label">02 / Selected work</div><h2>Products I’ve built<br /><em>and contributed to.</em></h2></div>
            <p>Company products I helped develop professionally, alongside Taskvane—my independently built workflow automation platform.</p>
          </div>
          <div className="projects">
            {projects.map((project) => (
              <article className="project-card" key={project.title} style={{ '--accent': project.color } as React.CSSProperties}>
                <div className="project-info">
                  <span className="project-number">{project.number}</span>
                  <div>
                    <span className={`project-context ${project.context === 'Personal project' ? 'personal' : ''}`}>{project.context}</span>
                    <small>{project.type}</small>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                  </div>
                  <div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  <a href="#contact" aria-label={`Learn more about ${project.title}`}>Explore project <Icon name="arrow" /></a>
                </div>
                <div className={`project-visual ${project.visual}`}><ProjectVisual type={project.visual} /></div>
              </article>
            ))}
          </div>
        </section>

        <section className="experience section-pad" id="experience">
          <div className="section-label">03 / Experience</div>
          <div className="experience-grid">
            <div className="experience-intro">
              <h2>Growing through<br /><em>doing.</em></h2>
              <p>2+ years of building full-stack products, owning complex backend systems, and coordinating delivery across teams.</p>
              <a href="#contact" className="text-link">Request my résumé <span>↗</span></a>
            </div>
            <div className="timeline">
              <div className="timeline-item current">
                <div className="timeline-marker"><span /></div>
                <div className="timeline-meta"><span>Aug 2024 — Present</span><small>Cloudstack Automation</small></div>
                <h3>Software Engineer <span>&amp; Project Coordinator</span></h3>
                <p>Building automation platforms and message-driven services while owning feature planning, documentation, testing, and cross-functional delivery.</p>
                <ul>
                  <li>Owned Lead Engine’s campaign execution and workflow systems</li>
                  <li>Built RabbitMQ, BullMQ, RBAC, authentication, and API integrations</li>
                  <li>Led platform security vulnerability management through resolution</li>
                  <li>Earned Sprint Champion and Perfect Sync awards</li>
                </ul>
              </div>
              <div className="timeline-item">
                <div className="timeline-marker"><span /></div>
                <div className="timeline-meta"><span>Jun 2023 — Aug 2024</span><small>Self Stack</small></div>
                <h3>MERN Stack Developer <span>— Calicut, Kerala</span></h3>
                <p>Built web applications with React, Node.js, Express, and MongoDB—developing frontend components, REST APIs, database integrations, and testing features before delivery.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="skills section-pad">
          <div className="section-label light">04 / Toolkit</div>
          <div className="skills-heading"><h2>Tools I use to turn<br />ideas into <em>impact.</em></h2><p>Always learning. Always adding to the toolkit.</p></div>
          <div className="skill-groups">
            <div><small>Frontend</small><p><span>React.js</span><span>Next.js</span><span>TypeScript</span><span>Redux Toolkit</span><span>React Query</span><span>Tailwind CSS</span></p></div>
            <div><small>Backend</small><p><span>Node.js</span><span>NestJS</span><span>Express.js</span><span>Microservices</span><span>REST APIs</span><span>Swagger</span></p></div>
            <div><small>Data & queues</small><p><span>MongoDB</span><span>MySQL</span><span>Redis</span><span>RabbitMQ</span><span>BullMQ</span><span>Webhooks</span></p></div>
            <div><small>Security</small><p><span>OAuth 2.0</span><span>JWT</span><span>RBAC</span><span>Passport.js</span><span>NextAuth.js</span><span>AES-256-GCM</span></p></div>
            <div><small>Testing & DevOps</small><p><span>Jest</span><span>Playwright</span><span>Vitest</span><span>Docker</span><span>Nginx</span><span>AWS S3</span></p></div>
            <div><small>Integrations</small><p><span>n8n</span><span>Slack API</span><span>Trello API</span><span>Google Sheets API</span><span>AI Services</span></p></div>
          </div>
        </section>

        <section className="contact section-pad" id="contact">
          <div className="contact-orbit"><span /><span /></div>
          <div className="section-label">05 / Let’s connect</div>
          <div className="contact-content">
            <p>Have a project, opportunity, or good idea?</p>
            <h2>Let’s make something<br /><em>meaningful together.</em></h2>
            <a className="button primary contact-button" href="mailto:jeevamkdev@gmail.com">Say hello <Icon name="arrow" /></a>
            <div className="contact-details">
              <a href="mailto:jeevamkdev@gmail.com"><Icon name="mail" /> jeevamkdev@gmail.com</a>
              <a href="tel:+917510328839"><Icon name="phone" /> +91 75103 28839</a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <a className="brand" href="#home">J<span>.</span></a>
        <p>Designed & built with care by Jeeva © 2025</p>
        <div className="socials">
          <a href="https://github.com/Jeevamk" target="_blank" rel="noreferrer" aria-label="Jeeva on GitHub"><Icon name="github" /></a>
          <a href="https://www.linkedin.com/in/jeeva-mk/" target="_blank" rel="noreferrer" aria-label="Jeeva on LinkedIn"><Icon name="linkedin" /></a>
          <a href="mailto:jeevamkdev@gmail.com" aria-label="Email Jeeva"><Icon name="mail" /></a>
          <a href="tel:+917510328839" aria-label="Call Jeeva"><Icon name="phone" /></a>
        </div>
      </footer>
    </div>
  )
}
