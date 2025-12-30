import { useSearchParams, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CategoryCard } from "@/components/CategoryCard";
import { CategoryBreadcrumb } from "@/components/CategoryBreadcrumb";
import { categorias, Subcategoria, Category } from "@/data/products";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";

const Catalogo = () => {
  const [searchParams] = useSearchParams();
  const categoriaParam = searchParams.get("categoria");
  
  // Parse the category path (e.g., "parafusos/agricolas/parafuso-aro-roda")
  const categoryPath = categoriaParam ? categoriaParam.split("/") : [];
  
  // Find the current category/subcategory based on the path
  const findCategoryData = () => {
    if (categoryPath.length === 0) {
      return { type: "root" as const, items: categorias, breadcrumb: [] };
    }
    
    // Find main category
    const mainCategory = categorias.find(c => c.slug === categoryPath[0]);
    if (!mainCategory) {
      return { type: "root" as const, items: categorias, breadcrumb: [] };
    }
    
    const breadcrumb = [{ label: mainCategory.nome, slug: mainCategory.slug }];
    
    // If only main category is selected, show its subcategories
    if (categoryPath.length === 1) {
      return {
        type: "subcategories" as const,
        items: mainCategory.subcategorias || [],
        breadcrumb,
        parentSlug: mainCategory.slug,
        parentCategory: mainCategory
      };
    }
    
    // Navigate through the subcategory tree
    let currentItems: Subcategoria[] = mainCategory.subcategorias || [];
    let parentSlug = mainCategory.slug;
    
    for (let i = 1; i < categoryPath.length; i++) {
      const segment = categoryPath[i];
      const found = currentItems.find(s => s.slug === segment);
      
      if (!found) {
        return { type: "root" as const, items: categorias, breadcrumb: [] };
      }
      
      breadcrumb.push({ label: found.nome, slug: found.slug });
      parentSlug = `${parentSlug}/${found.slug}`;
      
      // If this item has children, show them
      if (found.itens && found.itens.length > 0) {
        currentItems = found.itens;
      } else {
        // This is a leaf item - show it as a final item
        return {
          type: "leaf" as const,
          item: found,
          breadcrumb,
          parentSlug
        };
      }
    }
    
    return {
      type: "subcategories" as const,
      items: currentItems,
      breadcrumb,
      parentSlug
    };
  };
  
  const data = findCategoryData();
  
  const getPageTitle = () => {
    if (data.type === "root") return "Catálogo de Produtos";
    if (data.breadcrumb.length > 0) {
      return data.breadcrumb[data.breadcrumb.length - 1].label;
    }
    return "Catálogo de Produtos";
  };
  
  const getPageDescription = () => {
    if (data.type === "root") {
      return "Explore nossa linha completa de fixadores, ferramentas e acessórios para todas as suas necessidades";
    }
    if (data.type === "subcategories" && "parentCategory" in data && data.parentCategory) {
      return data.parentCategory.descricao || `Produtos da categoria ${data.parentCategory.nome}`;
    }
    return "Selecione uma subcategoria para ver os produtos disponíveis";
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-hero text-primary-foreground py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{getPageTitle()}</h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl">
              {getPageDescription()}
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            {/* Breadcrumb */}
            {data.breadcrumb.length > 0 && (
              <CategoryBreadcrumb items={data.breadcrumb} />
            )}

            {/* Main Categories Grid */}
            {data.type === "root" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {data.items.map((categoria) => (
                  <CategoryCard
                    key={(categoria as Category).id}
                    nome={(categoria as Category).nome}
                    descricao={(categoria as Category).descricao || `Produtos da categoria ${(categoria as Category).nome}`}
                    icon={(categoria as Category).icon}
                    slug={(categoria as Category).slug}
                  />
                ))}
              </div>
            )}

            {/* Subcategories List */}
            {data.type === "subcategories" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {data.items.map((item) => {
                  const hasChildren = item.itens && item.itens.length > 0;
                  const fullSlug = `${data.parentSlug}/${item.slug}`;
                  
                  return (
                    <Link 
                      key={item.slug} 
                      to={`/catalogo?categoria=${fullSlug}`}
                    >
                      <Card className="group cursor-pointer transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 border-border bg-card h-full">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg font-semibold flex items-center justify-between">
                            <span>{item.nome}</span>
                            <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                          </CardTitle>
                        </CardHeader>
                        {hasChildren && (
                          <CardContent className="pt-0">
                            <p className="text-sm text-muted-foreground">
                              {item.itens!.length} {item.itens!.length === 1 ? "item" : "itens"}
                            </p>
                          </CardContent>
                        )}
                      </Card>
                    </Link>
                  );
                })}
              </div>
            )}

            {/* Leaf Item - Final product category */}
            {data.type === "leaf" && (
              <div className="max-w-2xl mx-auto">
                <Card className="border-border bg-card">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-center">
                      {data.item.nome}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground mb-6">
                      Para mais informações sobre este produto, entre em contato conosco.
                    </p>
                    <a
                      href="/contato"
                      className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8"
                    >
                      Solicitar Orçamento
                    </a>
                  </CardContent>
                </Card>
              </div>
            )}
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
