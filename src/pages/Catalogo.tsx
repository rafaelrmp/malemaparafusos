import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CategoryCard } from "@/components/CategoryCard";
import { categorias } from "@/data/products";

const Catalogo = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-hero text-primary-foreground py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Catálogo de Produtos</h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl">
              Explore nossa linha completa de fixadores, ferramentas e acessórios para todas as suas necessidades
            </p>
          </div>
        </section>

        {/* Categories Grid */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
          </div>
        </section>

        {/* Additional Info */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Não Encontrou o Que Procura?
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Nossa equipe está pronta para ajudar você a encontrar a solução ideal para seu projeto.
                Entre em contato conosco para mais informações sobre nossos produtos e serviços.
              </p>
              <a
                href="/contato"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8"
              >
                Fale Conosco
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Catalogo;
