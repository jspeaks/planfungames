import Image from "next/image";
import type { SiteConfig } from "@/sites";
import { HubMark } from "./HubMark";
import { MascotWelcome } from "./MascotWelcome";

function Visual({ site }: { site: SiteConfig }) {
  const { visual } = site;
  if (visual.kind === "mascot") {
    return <MascotWelcome src={visual.src} alt={visual.alt} />;
  }
  if (visual.kind === "image") {
    return (
      <Image
        src={visual.src}
        alt={visual.alt}
        width={447}
        height={512}
        className="sport-mark"
        priority
      />
    );
  }
  return <HubMark alt={visual.alt} />;
}

export function SiteLanding({ site }: { site: SiteConfig }) {
  return (
    <div className="site" style={{ ["--accent" as string]: site.accent }}>
      <header className="site-top">
        <span className="site-brand">PlanFunGames</span>
        <span className="site-kicker">{site.hero.kicker}</span>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <h1>{site.hero.headline}</h1>
          <p className="hero-sub">{site.hero.subhead}</p>
          <a className="cta" href="#start">
            {site.hero.cta}
          </a>
        </div>
        <div className="hero-visual">
          <Visual site={site} />
        </div>
      </section>

      <section className="how" aria-labelledby="how-heading">
        <h2 id="how-heading">How it works</h2>
        <ol>
          {site.howItWorks.map((step, i) => (
            <li key={step.title}>
              <span className="step-n">{i + 1}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="fab" aria-labelledby="fab-heading">
        <h2 id="fab-heading">Why it works</h2>
        <div className="fab-grid">
          {site.fab.map((card) => (
            <article key={card.title}>
              <h3>{card.title}</h3>
              <dl>
                <div>
                  <dt>Feature</dt>
                  <dd>{card.feature}</dd>
                </div>
                <div>
                  <dt>Advantage</dt>
                  <dd>{card.advantage}</dd>
                </div>
                <div>
                  <dt>Benefit</dt>
                  <dd>{card.benefit}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </section>

      <section className="start" id="start">
        <h2>Bring the group you already have.</h2>
        <p>
          Setup that attaches PlanFunGames to your GroupMe is next. This
          page is the front door — not a new social network.
        </p>
        <a className="cta" href="mailto:hello@planfungames.com?subject=Bring%20my%20GroupMe">
          {site.hero.cta}
        </a>
      </section>

      <footer className="site-foot">
        <span>PlanFunGames.com</span>
      </footer>
    </div>
  );
}
