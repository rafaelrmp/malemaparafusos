import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-secondary border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-full bg-gradient-hero flex items-center justify-center">
                <span className="text-2xl font-bold text-primary-foreground">M</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-foreground">Malema</span>
                <span className="text-xs text-muted-foreground">Parafusos</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Especialistas em fixação e ferramentas industriais há mais de 20 anos.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/catalogo" className="text-muted-foreground hover:text-primary transition-colors">
                  Catálogo
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="text-muted-foreground hover:text-primary transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-muted-foreground hover:text-primary transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Categorias */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Categorias</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-muted-foreground">Parafusos</li>
              <li className="text-muted-foreground">Porcas</li>
              <li className="text-muted-foreground">Arruelas</li>
              <li className="text-muted-foreground">Ferramentas</li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contato</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Rua Exemplo, 123<br />São Paulo - SP</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>(11) 99999-9999</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>contato@malemaparafusos.com.br</span>
              </li>
            </ul>

            <div className="flex items-center gap-3 mt-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Malema Parafusos. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
