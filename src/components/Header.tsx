import { useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "@/components/NavLink";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Menu, ChevronDown } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { CategorySidebar } from "@/components/CategorySidebar";
import { categorias } from "@/data/products";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export const Header = () => {
  const [categorySidebarOpen, setCategorySidebarOpen] = useState(false);

  const navItems = [
    { to: "/", label: "Início" },
    { to: "/catalogo", label: "Catálogo" },
    { to: "/sobre", label: "Sobre" },
    { to: "/contato", label: "Contato" },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        {/* Top bar */}
        <div className="bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 py-2">
            <div className="flex items-center justify-end gap-6 text-sm">
              <a href="tel:+5511999999999" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                <Phone className="h-4 w-4" />
                <span className="hidden sm:inline">(11) 99999-9999</span>
              </a>
              <a href="mailto:contato@malemaparafusos.com.br" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                <Mail className="h-4 w-4" />
                <span className="hidden sm:inline">contato@malemaparafusos.com.br</span>
              </a>
            </div>
          </div>
        </div>

        {/* Main header */}
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Menu button + Logo */}
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setCategorySidebarOpen(true)}
                className="hover:bg-primary/10"
              >
                <Menu className="h-6 w-6" />
              </Button>

              <Link to="/" className="flex items-center space-x-2">
                <div className="flex items-center gap-2">
                  <div className="h-10 w-10 rounded-full bg-gradient-hero flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary-foreground">M</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xl font-bold text-foreground">Malema</span>
                    <span className="text-xs text-muted-foreground">Parafusos</span>
                  </div>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation with Categories */}
            <nav className="hidden lg:flex items-center space-x-1">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent">
                      Categorias
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-1 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                        {categorias.slice(0, 8).map((categoria) => (
                          <li key={categoria.id}>
                            <NavigationMenuLink asChild>
                              <Link
                                to={`/catalogo?categoria=${categoria.slug}`}
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              >
                                <div className="text-sm font-medium leading-none">
                                  {categoria.nome}
                                </div>
                                {categoria.subcategorias && (
                                  <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
                                    {categoria.subcategorias.slice(0, 2).join(", ")}...
                                  </p>
                                )}
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end
                  className="px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-primary rounded-md hover:bg-accent"
                  activeClassName="text-primary font-semibold bg-accent"
                >
                  {item.label}
                </NavLink>
              ))}

              <Button asChild variant="default" size="sm" className="ml-2">
                <Link to="/contato">Solicitar Orçamento</Link>
              </Button>
            </nav>

            {/* Mobile Navigation */}
            <Sheet>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon">
                  <ChevronDown className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                    <NavLink
                      key={item.to}
                      to={item.to}
                      end
                      className="text-lg font-medium text-foreground/80 transition-colors hover:text-primary py-2"
                      activeClassName="text-primary font-semibold"
                    >
                      {item.label}
                    </NavLink>
                  ))}
                  <Button asChild variant="default" className="mt-4">
                    <Link to="/contato">Solicitar Orçamento</Link>
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Categories bar - Desktop */}
        <div className="hidden md:block bg-secondary border-t">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-1 py-2 overflow-x-auto">
              {categorias.slice(0, 7).map((categoria) => (
                <Link
                  key={categoria.id}
                  to={`/catalogo?categoria=${categoria.slug}`}
                  className="px-3 py-1.5 text-xs font-medium text-foreground/80 hover:text-primary hover:bg-primary/10 rounded transition-colors whitespace-nowrap"
                >
                  {categoria.nome}
                </Link>
              ))}
              <Link
                to="/catalogo"
                className="px-3 py-1.5 text-xs font-medium text-primary hover:bg-primary/10 rounded transition-colors whitespace-nowrap"
              >
                Ver Todas →
              </Link>
            </div>
          </div>
        </div>
      </header>

      <CategorySidebar open={categorySidebarOpen} onOpenChange={setCategorySidebarOpen} />
    </>
  );
};
