import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroCarousel } from "@/components/HeroCarousel";
import { CategoryCard } from "@/components/CategoryCard";
import { Button } from "@/components/ui/button";
import { QuoteRequestDialog } from "@/components/QuoteRequestDialog";
import { categorias } from "@/data/products";
import { Link } from "react-router-dom";
import { CheckCircle2, Truck, Clock, Award } from "lucide-react";

const Index = () => {
  const beneficios = [
    {
      icon: CheckCircle2,
      titulo: "Qualidade Garantida",
      descricao: "Produtos certificados e testados para máxima durabilidade"
    },
    {
      icon: Truck,
      titulo: "Entrega Rápida",
      descricao: "Logística eficiente para atender suas necessidades"
    },
    {
      icon: Clock,
      titulo: "20+ Anos de Experiência",
      descricao: "Expertise comprovada no mercado de fixadores"
    },
    {
      icon: Award,
      titulo: "Atendimento Premium",
      descricao: "Equipe técnica especializada à sua disposição"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <HeroCarousel />

        {/* Nossos Produtos - Categorias */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Nossos Produtos
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore nossa linha completa de parafusos, ferramentas e acessórios para fixação
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {categorias.map((categoria) => (
                <CategoryCard
                  key={categoria.id}
                  nome={categoria.nome}
                  descricao={categoria.descricao || `Produtos da categoria ${categoria.nome}`}
                  icon={categoria.icon}
                  slug={categoria.slug}
                />
              ))}
            </div>

            <div className="text-center">
              <Button asChild size="lg" variant="default">
                <Link to="/catalogo">Ver Categorias</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Benefícios */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Por Que Escolher a Malema?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {beneficios.map((beneficio, index) => {
                const Icon = beneficio.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">{beneficio.titulo}</h3>
                    <p className="text-muted-foreground">{beneficio.descricao}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-hero text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pronto para Começar?
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Entre em contato e solicite um orçamento personalizado
            </p>
            <QuoteRequestDialog 
              buttonVariant="secondary" 
              buttonSize="lg" 
              buttonClassName="text-lg"
              buttonText="Fale Conosco"
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
