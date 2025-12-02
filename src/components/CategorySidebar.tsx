import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { categorias } from "@/data/products";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

interface CategorySidebarProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const CategorySidebar = ({ open, onOpenChange }: CategorySidebarProps) => {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="left" className="w-[320px] p-0">
        <SheetHeader className="p-4 border-b bg-primary">
          <SheetTitle className="text-primary-foreground text-left">Categorias</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col">
          {categorias.map((categoria) => (
            <Link
              key={categoria.id}
              to={`/catalogo?categoria=${categoria.slug}`}
              onClick={() => onOpenChange(false)}
              className="flex items-center justify-between px-4 py-3 text-sm font-medium text-foreground hover:bg-accent border-b border-border/50 transition-colors"
            >
              <span>{categoria.nome}</span>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};
