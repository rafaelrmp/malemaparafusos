import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Subcategoria } from "@/data/products";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface CategoryTreeProps {
  items: Subcategoria[];
  parentSlug: string;
  level?: number;
  onItemClick?: () => void;
}

export const CategoryTree = ({ items, parentSlug, level = 0, onItemClick }: CategoryTreeProps) => {
  const paddingLeft = level * 12;

  return (
    <div className="flex flex-col">
      {items.map((item) => {
        const fullSlug = `${parentSlug}/${item.slug}`;
        const hasChildren = item.itens && item.itens.length > 0;

        if (hasChildren) {
          return (
            <Accordion key={item.slug} type="single" collapsible>
              <AccordionItem value={item.slug} className="border-0">
                <AccordionTrigger
                  className="py-2 px-4 text-sm font-medium text-foreground hover:bg-accent hover:no-underline [&[data-state=open]>svg]:rotate-90"
                  style={{ paddingLeft: `${16 + paddingLeft}px` }}
                >
                  <span className="text-left">{item.nome}</span>
                </AccordionTrigger>
                <AccordionContent className="pb-0">
                  <CategoryTree
                    items={item.itens!}
                    parentSlug={fullSlug}
                    level={level + 1}
                    onItemClick={onItemClick}
                  />
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          );
        }

        return (
          <Link
            key={item.slug}
            to={`/catalogo?categoria=${fullSlug}`}
            onClick={onItemClick}
            className="flex items-center justify-between py-2 px-4 text-sm text-muted-foreground hover:bg-accent hover:text-foreground transition-colors"
            style={{ paddingLeft: `${16 + paddingLeft}px` }}
          >
            <span>{item.nome}</span>
            <ChevronRight className="h-3 w-3 opacity-50" />
          </Link>
        );
      })}
    </div>
  );
};
