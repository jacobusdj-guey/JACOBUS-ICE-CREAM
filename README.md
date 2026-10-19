# Jacobus Ice Cream

Web de la heladería artesana de Elda. Next.js (App Router) + TypeScript + CSS Modules.

## Ejecutar en local

```bash
npm install
npm run dev
```

Abre http://localhost:3000. El sistema de diseño está en `/styleguide`.

## Dónde se edita cada cosa

| Qué | Archivo |
| --- | --- |
| Colores, tipos, espaciados, radios, sombras | `app/globals.css` (`:root`) |
| Sabores (carta, ticker, novedades) | `data/sabores.ts` |
| Tarrinas y packs | `data/tarrinas.ts` |
| Dirección, horario, teléfono, redes, datos legales | `data/local.ts` |
| Vídeos de "En redes" | `data/redes.ts` |

Busca `TODO` para ver todo lo que falta por completar (fotos, dirección, horario, textos legales…).
Las fotos van en `/public` y se enlazan con el campo `foto` / `portada` de cada dato.

## Desplegar en Vercel

1. Sube el repositorio a GitHub.
2. En vercel.com → **Add New… → Project** → importa el repositorio. Vercel detecta Next.js solo; no hace falta configurar nada.
3. **Deploy**. Cada push a `main` vuelve a desplegar.
4. Dominio propio: **Project → Settings → Domains**.

Alternativa por terminal: `npx vercel` (preview) y `npx vercel --prod` (producción).
