import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { CONTACT_EMAIL, NAV_LINKS, SITE_NAME, SITE_TAGLINE, SOCIAL_LINKS } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="border-t border-line bg-paper-alt">
      <Container className="py-16">
        <div className="grid gap-12 sm:grid-cols-3">
          <div>
            <p className="font-display text-xl text-ink">{SITE_NAME}</p>
            <p className="mt-3 max-w-xs text-sm text-ink-muted">{SITE_TAGLINE}</p>
          </div>
          <div>
            <p className="text-sm font-medium uppercase tracking-wider text-ink-muted">Explore</p>
            <ul className="mt-4 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-ink-muted hover:text-ink">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-medium uppercase tracking-wider text-ink-muted">Contact</p>
            <ul className="mt-4 space-y-3 text-sm text-ink-muted">
              <li>
                <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-ink">
                  {CONTACT_EMAIL}
                </a>
              </li>
              {SOCIAL_LINKS.map((social) => (
                <li key={social.href}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-ink"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-line pt-8 text-xs text-ink-muted">
          <p>
            © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
