import { local } from "@/data/local";
import { posts } from "@/data/redes";
import { novedades, saboresDeLaSemana } from "@/data/sabores";
import { tarrinas } from "@/data/tarrinas";
import { FlavorCard } from "@/components/flavors/FlavorCard";
import { TarrinaCard } from "@/components/flavors/TarrinaCard";
import { Carousel } from "@/components/home/Carousel";
import { Hero } from "@/components/home/Hero";
import { SloganBand } from "@/components/home/SloganBand";
import { StoryCard } from "@/components/home/StoryCard";

const instagram = local.redes.find((r) => r.red === "instagram");

export default function Home() {
  return (
    <>
      <Hero />

      {/* neón: pink (stickers) + lima (subrayado) · pastel: tarjetas */}
      <Carousel
        id="sabores"
        kicker="Esta semana en la vitrina"
        title="Sabores de la semana"
        link={{ href: "/carta", label: "Carta completa" }}
      >
        {saboresDeLaSemana.map((s) => (
          <FlavorCard key={s.id} sabor={s} />
        ))}
      </Carousel>

      {/* neón: lima (NUEVO) · pastel: pistacho */}
      <Carousel
        id="novedades"
        kicker="Recién salidos del obrador"
        title="Novedades"
        tone="pistacho"
        link={{ href: "/carta", label: "Ver en la carta" }}
      >
        {novedades.map((s) => (
          <FlavorCard key={s.id} sabor={s} />
        ))}
      </Carousel>

      <SloganBand />

      {/* neón: naranja (ofertas) · pastel: tarjetas */}
      <Carousel
        id="para-llevar"
        kicker="Tarrinas y packs"
        title="Para llevar"
        link={{ href: "/tarrinas", label: "Todas las tarrinas" }}
      >
        {tarrinas.map((t) => (
          <TarrinaCard key={t.id} tarrina={t} />
        ))}
      </Carousel>

      {/* neón: pink (play) · pastel: lavanda */}
      <Carousel
        id="redes"
        kicker={instagram?.handle}
        title="En redes"
        tone="lavanda"
        itemSize="story"
        link={instagram && { href: instagram.url, label: "Síguenos", external: true }}
      >
        {posts.map((p) => (
          <StoryCard key={p.id} post={p} />
        ))}
      </Carousel>
    </>
  );
}
