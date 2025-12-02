import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { categorias } from "@/data/products";
import { CategoryTree } from "./CategoryTree";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
        <ScrollArea className="h-[calc(100vh-65px)]">
          <nav className="flex flex-col py-2">
            {categorias.map((categoria) => {
              const hasSubcategorias = categoria.subcategorias && categoria.subcategorias.length > 0;

              if (hasSubcategorias) {
                return (
                  <Accordion key={categoria.id} type="single" collapsible>
                    <AccordionItem value={categoria.slug} className="border-0">
                      <AccordionTrigger className="py-3 px-4 text-sm font-semibold text-foreground hover:bg-accent hover:no-underline [&[data-state=open]>svg]:rotate-90">
                        <span className="text-left">{categoria.nome}</span>
                      </AccordionTrigger>
                      <AccordionContent className="pb-0">
                        <CategoryTree
                          items={categoria.subcategorias!}
                          parentSlug={categoria.slug}
                          onItemClick={() => onOpenChange(false)}
                        />
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                );
              }

              return (
                <a
                  key={categoria.id}
                  href={`/catalogo?categoria=${categoria.slug}`}
                  onClick={() => onOpenChange(false)}
                  className="flex items-center py-3 px-4 text-sm font-semibold text-foreground hover:bg-accent transition-colors"
                >
                  {categoria.nome}
                </a>
              );
            })}
          </nav>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};
