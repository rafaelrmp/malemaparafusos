import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Target, Users, TrendingUp, Award } from "lucide-react";

const Sobre = () => {
  const valores = [
    {
      icon: Target,
      titulo: "Missão",
      descricao: "Fornecer soluções em fixação de alta qualidade, contribuindo para o sucesso dos nossos clientes."
    },
    {
      icon: Users,
      titulo: "Equipe",
      descricao: "Profissionais experientes e capacitados para oferecer o melhor atendimento e suporte técnico."
    },
    {
      icon: TrendingUp,
      titulo: "Crescimento",
      descricao: "Expansão contínua de nosso portfólio para atender todas as necessidades do mercado."
    },
    {
      icon: Award,
      titulo: "Qualidade",
      descricao: "Compromisso com produtos certificados e processos que garantem máxima satisfação."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-hero text-primary-foreground py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Sobre a Malema</h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl">
              Mais de duas décadas de experiência no fornecimento de soluções em fixação
            </p>
          </div>
        </section>

        {/* História */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-6">Nossa História</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Fundada há mais de 20 anos, a Malema Parafusos nasceu com o objetivo de atender
                      a demanda crescente do mercado industrial por produtos de fixação de alta qualidade
                      e confiabilidade.
                    </p>
                    <p>
                      Ao longo dos anos, consolidamos nossa posição como referência no setor,
                      expandindo nosso portfólio de produtos e serviços para melhor atender
                      nossos clientes em diversos segmentos.
                    </p>
                    <p>
                      Hoje, contamos com uma equipe especializada e um amplo estoque de produtos,
                      prontos para atender projetos de qualquer porte com agilidade e eficiência.
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <div className="aspect-square rounded-lg bg-gradient-hero opacity-10"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl font-bold text-primary mb-2">20+</div>
                      <div className="text-xl font-semibold text-foreground">Anos de Experiência</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Valores */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Nossos Valores
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Os pilares que guiam nosso trabalho e relacionamento com clientes
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {valores.map((valor, index) => {
                const Icon = valor.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">{valor.titulo}</h3>
                    <p className="text-muted-foreground">{valor.descricao}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Diferenciais */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Nossos Diferenciais</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 rounded-lg bg-card border border-border shadow-card">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Amplo Estoque</h3>
                  <p className="text-muted-foreground">
                    Mantemos um estoque diversificado para atendimento imediato às suas necessidades.
                  </p>
                </div>
                <div className="p-6 rounded-lg bg-card border border-border shadow-card">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Assessoria Técnica</h3>
                  <p className="text-muted-foreground">
                    Nossa equipe oferece suporte especializado para escolha dos produtos adequados.
                  </p>
                </div>
                <div className="p-6 rounded-lg bg-card border border-border shadow-card">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Qualidade Certificada</h3>
                  <p className="text-muted-foreground">
                    Trabalhamos apenas com produtos certificados e de fabricantes reconhecidos.
                  </p>
                </div>
                <div className="p-6 rounded-lg bg-card border border-border shadow-card">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Logística Eficiente</h3>
                  <p className="text-muted-foreground">
                    Sistema de entrega ágil para atender prazos críticos de seus projetos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Sobre;
