import { Link } from "react-router-dom";

const hotspots = [
  { label: "Solutions", to: "/rate-calculator", className: "reference-hero__hotspot--solutions" },
  { label: "Integrations", to: "/contact", className: "reference-hero__hotspot--integrations" },
  { label: "Pricing", to: "/rate-calculator", className: "reference-hero__hotspot--pricing" },
  { label: "Resources", to: "/tracking", className: "reference-hero__hotspot--resources" },
  { label: "Company", to: "/contact", className: "reference-hero__hotspot--company" },
  { label: "Login", to: "/login", className: "reference-hero__hotspot--login" },
  { label: "Get Started", to: "/rate-calculator", className: "reference-hero__hotspot--top-cta" },
];

const pulses = [
  "reference-hero__pulse--map",
  "reference-hero__pulse--route",
  "reference-hero__pulse--bottom",
];

const shimmerLines = [
  "reference-hero__shimmer--one",
  "reference-hero__shimmer--two",
  "reference-hero__shimmer--three",
];

export default function ReferenceHero() {
  return (
    <section className="reference-hero" aria-label="IntleExpress smart courier network">
      <img
        alt="IntleExpress smart courier network hero with delivery route, van, live tracking cards, partner logos, and shipping calls to action."
        className="reference-hero__image"
        src="/hero/intlexpress-reference-hero.png"
      />

      <div className="reference-hero__motion-layer" aria-hidden="true">
        {shimmerLines.map((className) => (
          <span key={className} className={`reference-hero__shimmer ${className}`} />
        ))}
        {pulses.map((className) => (
          <span key={className} className={`reference-hero__pulse ${className}`} />
        ))}
        <span className="reference-hero__van-glow" />
        <span className="reference-hero__tail-light reference-hero__tail-light--one" />
        <span className="reference-hero__tail-light reference-hero__tail-light--two" />
        <span className="reference-hero__card-glow reference-hero__card-glow--tracking" />
        <span className="reference-hero__card-glow reference-hero__card-glow--rate" />
        <span className="reference-hero__card-glow reference-hero__card-glow--delivery" />
        <span className="reference-hero__scan-line" />
      </div>

      {hotspots.map((hotspot) => (
        <Link
          key={hotspot.label}
          aria-label={hotspot.label}
          className={`reference-hero__hotspot ${hotspot.className}`}
          to={hotspot.to}
        />
      ))}
    </section>
  );
}
