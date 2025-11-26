import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Wrench, Hexagon, Circle, Square, Anchor, Box, Dot } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface ProductCardProps {
  nome: string;
  descricao: string;
  icon: string;
}

const iconMap: Record<string, LucideIcon> = {
  wrench: Wrench,
  hexagon: Hexagon,
  circle: Circle,
  cylinder: Square,
  anchor: Anchor,
  box: Box,
  dot: Dot,
};

export const ProductCard = ({ nome, descricao, icon }: ProductCardProps) => {
  const Icon = iconMap[icon] || Wrench;

  return (
    <Card className="group cursor-pointer transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 border-border bg-card">
      <CardHeader className="text-center">
        <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
          <Icon className="h-10 w-10 text-primary" />
        </div>
        <CardTitle className="text-lg font-semibold">{nome}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-center text-sm">
          {descricao}
        </CardDescription>
      </CardContent>
    </Card>
  );
};
