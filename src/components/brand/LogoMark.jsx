import { brand } from "../../data/siteData";

export default function LogoMark({ compact = false }) {
  return (
    <div
      aria-label={brand.logoAlt}
      className={`logo-lockup ${compact ? "logo-lockup--compact" : ""}`.trim()}
    >
      <span className={`logo-mark ${compact ? "logo-mark--compact" : ""}`.trim()} aria-hidden="true">
        IX
      </span>
      <span className="logo-word">{brand.name}</span>
    </div>
  );
}
