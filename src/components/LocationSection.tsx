import { MapPin, Clock, MessageCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const LocationSection = () => {
  return (
    <section id="localizacao" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Localização
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Venha nos visitar! Estamos prontos para atendê-lo
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Info Card */}
          <Card className="h-full">
            <CardContent className="p-8 flex flex-col justify-center h-full space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 flex-shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-lg mb-1">Endereço</h3>
                  <p className="text-muted-foreground">
                    Rua São João, 287 - Centro<br />
                    Araçariguama - SP, CEP 18147-000
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 flex-shrink-0">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-lg mb-1">Horário de Funcionamento</h3>
                  <p className="text-muted-foreground">
                    Segunda a Sexta: 08:00 às 18:00<br />
                    Sábado: 08:00 às 13:00
                  </p>
                </div>
              </div>

              <Button
                asChild
                size="lg"
                className="w-full bg-[#25D366] hover:bg-[#1da851] text-white gap-2 mt-4"
              >
                <a
                  href="https://wa.me/5511940291064"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-5 w-5" />
                  Falar com Atendente
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* Map */}
          <div className="rounded-lg overflow-hidden shadow-lg h-[400px] lg:h-full min-h-[400px]">
            <iframe
              src="https://maps.google.com/maps?q=Malema+Com%C3%A9rcio+de+Parafusos+e+Ferramentas+Ara%C3%A7ariguama+SP&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Malema Parafusos"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
