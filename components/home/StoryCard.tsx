import type { PostRedes } from "@/data/redes";
import { Photo } from "@/components/ui/Placeholder";
import { SocialIcon } from "@/components/ui/SocialIcon";
import styles from "./StoryCard.module.css";

const redLabel = { instagram: "Instagram", tiktok: "TikTok" } as const;

/** Tarjeta vertical 9:16 tipo story para vídeos de Instagram/TikTok. */
export function StoryCard({ post }: { post: PostRedes }) {
  return (
    <a
      href={post.url}
      className={styles.story}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${post.titulo}. Ver vídeo en ${redLabel[post.red]} (pestaña nueva)`}
    >
      <Photo src={post.portada} alt={`Portada del vídeo: ${post.titulo}`} ratio="9/16" tone={post.pastel} />
      <span className={styles.badge} aria-hidden="true">
        <SocialIcon red={post.red} size={20} />
      </span>
      <span className={styles.play} aria-hidden="true">
        ▶
      </span>
      <span className={`${styles.caption} label`}>{post.titulo}</span>
    </a>
  );
}
