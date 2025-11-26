import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative bg-gradient-hero text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>
      
      <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Soluções Completas em <span className="text-accent">Fixação</span> e <span className="text-accent">Ferramentas</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90">
            Há mais de 20 anos fornecendo produtos de qualidade para indústria e comércio
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" variant="secondary" className="text-lg">
              <Link to="/catalogo">
                Ver Catálogo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link to="/contato">Solicitar Orçamento</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 opacity-10">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path fill="currentColor" d="M39.5,-65.7C50.9,-58.3,59.7,-46.7,66.2,-34.1C72.7,-21.5,76.9,-7.9,76.8,5.7C76.7,19.3,72.3,33,64.3,44.3C56.3,55.6,44.7,64.5,31.8,70.1C18.9,75.7,4.7,78,-9.2,76.8C-23.1,75.6,-36.7,70.9,-48.5,63.5C-60.3,56.1,-70.3,46,-75.8,33.9C-81.3,21.8,-82.3,7.7,-79.7,-5.3C-77.1,-18.3,-71,-30.2,-62.3,-40.5C-53.6,-50.8,-42.3,-59.5,-30.1,-66.5C-17.9,-73.5,-4.8,-78.8,7.5,-78.3C19.8,-77.8,28.1,-73.1,39.5,-65.7Z" transform="translate(100 100)" />
        </svg>
      </div>
    </section>
  );
};
