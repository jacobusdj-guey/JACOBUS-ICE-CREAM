"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Logo } from "./Logo";
import { headerCta, navItems } from "./nav";
import styles from "./Header.module.css";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Cierra el menú al navegar y con Escape
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) => !href.startsWith("/#") && pathname.startsWith(href);

  return (
    <header className={`${styles.header} on-dark`}>
      <div className={`${styles.inner} container`}>
        <Logo />

        <nav aria-label="Principal" className={styles.desktopNav}>
          <ul className={styles.list}>
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`${styles.link} label`}
                  aria-current={isActive(item.href) ? "page" : undefined}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.actions}>
          <Button href={headerCta.href} className={styles.cta}>
            {headerCta.label}
          </Button>
          <button
            type="button"
            className={styles.burger}
            aria-expanded={open}
            aria-controls="menu-movil"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className={styles.burgerBars} data-open={open} aria-hidden="true" />
          </button>
        </div>
      </div>

      <nav
        id="menu-movil"
        aria-label="Principal (móvil)"
        className={styles.mobileNav}
        data-open={open}
        hidden={!open}
      >
        <ul className={styles.mobileList}>
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={styles.mobileLink}
                aria-current={isActive(item.href) ? "page" : undefined}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <p className={`${styles.mobileTagline} label`}>Aquí no se pide perdón, se pide otra bola.</p>
      </nav>
    </header>
  );
}
