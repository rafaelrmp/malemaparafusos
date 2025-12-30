import { Link } from "react-router-dom";
import { NavLink } from "@/components/NavLink";
import { Button } from "@/components/ui/button";
import { Phone, Mail, ChevronDown } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { QuoteRequestDialog } from "@/components/QuoteRequestDialog";
import mascoteLogo from "@/assets/mascote-malema.png";

export const Header = () => {

  const navItems = [
    { to: "/", label: "Início" },
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
              <a href="tel:+551142041222" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                <Phone className="h-4 w-4" />
                <span className="hidden sm:inline">Televendas: (11) 4204-1222</span>
              </a>
              <a href="tel:+5511940291064" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                <Phone className="h-4 w-4" />
                <span className="hidden sm:inline">WhatsApp: (11) 94029-1064</span>
              </a>
              <a href="mailto:vendas@malemaparafusos.com.br" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                <Mail className="h-4 w-4" />
                <span className="hidden sm:inline">vendas@malemaparafusos.com.br</span>
              </a>
            </div>
          </div>
        </div>

        {/* Main header */}
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-4">
              <Link to="/" className="flex items-center space-x-2">
                <div className="flex items-center gap-2">
                  <img 
                    src={mascoteLogo} 
                    alt="Malema Parafusos" 
                    className="h-12 w-auto object-contain drop-shadow-[0_0_12px_hsl(var(--primary)/0.6)]"
                  />
                  <div className="flex flex-col">
                    <span className="text-xl font-bold text-foreground">Malema</span>
                    <span className="text-xs text-muted-foreground">Parafusos</span>
                  </div>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
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

              <QuoteRequestDialog>
                <Button variant="default" size="sm" className="ml-2">
                  Solicitar Orçamento
                </Button>
              </QuoteRequestDialog>
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
                  <QuoteRequestDialog>
                    <Button variant="default" className="mt-4">
                      Solicitar Orçamento
                    </Button>
                  </QuoteRequestDialog>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

    </>
  );
};
