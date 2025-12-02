import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, MessageCircle } from "lucide-react";

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
              Especialistas em fixação, ferramentas e ferragens industriais. Qualidade e variedade para seu projeto.
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
              <li>
                <Link to="/catalogo?categoria=parafusos" className="text-muted-foreground hover:text-primary transition-colors">
                  Parafusos
                </Link>
              </li>
              <li>
                <Link to="/catalogo?categoria=ferramentas" className="text-muted-foreground hover:text-primary transition-colors">
                  Ferramentas
                </Link>
              </li>
              <li>
                <Link to="/catalogo?categoria=abracadeiras" className="text-muted-foreground hover:text-primary transition-colors">
                  Abraçadeiras
                </Link>
              </li>
              <li>
                <Link to="/catalogo?categoria=solda" className="text-muted-foreground hover:text-primary transition-colors">
                  Solda
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contato</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Rua São João nº 287 - Centro<br />Araçariguama - SP, CEP 18147-000</span>
              </li>
              <li>
                <a href="tel:+551142041222" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                  <Phone className="h-4 w-4 flex-shrink-0" />
                  <span>Televendas: (11) 4204-1222</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://wa.me/5511940291064" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-[#25D366] transition-colors"
                >
                  <MessageCircle className="h-4 w-4 flex-shrink-0" />
                  <span>WhatsApp: (11) 94029-1064</span>
                </a>
              </li>
              <li>
                <a href="mailto:vendas@malemaparafusos.com.br" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                  <Mail className="h-4 w-4 flex-shrink-0" />
                  <span>vendas@malemaparafusos.com.br</span>
                </a>
              </li>
            </ul>

            <div className="flex items-center gap-3 mt-4">
              <a 
                href="https://www.facebook.com/MalemaParafusos" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://www.instagram.com/malemaparafusos" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
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
