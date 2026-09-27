import type { Metadata } from "next";
import Link from "next/link";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Page not found",
  description: "This page is not on the Fernway by Stories website.",
};

export default function NotFound() {
  return (
    <>
      <Nav />
      <main className="section-bg-cream not-found-main">
        <p className="section-label">404</p>
        <h1 className="heading-display not-found-title">Page not found</h1>
        <p className="body-text not-found-copy">
          This page is not part of the Fernway by Stories website.
        </p>
        <div className="not-found-actions">
          <Link href="/" className="btn-dark">
            Back to home
          </Link>
          <Link href="/contact" className="btn-outline-dark">
            Contact
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
