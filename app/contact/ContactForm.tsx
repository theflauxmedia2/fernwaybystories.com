import ReserveTableLink from "../components/ReserveTableLink";
import { BUSINESS } from "@/lib/site";

export default function ContactForm() {
  return (
    <div className="flex flex-col gap-8">
      <p className="body-text" style={{ maxWidth: "48ch" }}>
        Book your table online through ReserveGo — choose your date, time, and party size in a few
        steps.
      </p>
      <ReserveTableLink className="btn-dark" style={{ alignSelf: "flex-start" }}>
        Reserve Online
      </ReserveTableLink>
      <p className="body-text text-sm" style={{ maxWidth: "48ch", color: "var(--text-muted)" }}>
        Prefer to call or message? Reach us at{" "}
        <a href={`tel:${BUSINESS.phone}`} className="hover:underline" style={{ color: "var(--gold)" }}>
          {BUSINESS.phoneDisplay}
        </a>{" "}
        or{" "}
        <a
          href={BUSINESS.whatsapp}
          className="hover:underline"
          style={{ color: "var(--gold)" }}
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp
        </a>
        .
      </p>
    </div>
  );
}
