import Link from "next/link";
import styles from "./Logo.module.css";

// TODO: sustituir por el logo definitivo cuando exista.
export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={[styles.logo, className].filter(Boolean).join(" ")}>
      <span className={styles.main}>Jacobus</span>
      <span className={`${styles.sub} label`}>Ice Cream</span>
    </Link>
  );
}
