import { Button } from "@/components/ui/Button";
import { PageHeader } from "@/components/ui/PageHeader";

export default function NotFound() {
  return (
    <>
      <PageHeader
        kicker="Error 404"
        title="Esta bola cayó"
        drip="¡Plof!"
        tone="fresa"
        intro={
          <>
            <p>La página que buscas se ha derretido o nunca existió.</p>
            <div>
              <Button href="/" variant="dark">
                Volver al inicio
              </Button>
            </div>
          </>
        }
      />
    </>
  );
}
