import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  Wrench, Hexagon, Circle, Square, Anchor, Box, Dot, 
  Hammer, Flame, Target, Scissors, Plug, Home, Car, 
  Droplet, AlertTriangle, Layers, ArrowUp, HardHat
} from "lucide-react";
import { LucideIcon } from "lucide-react";

interface CategoryCardProps {
  nome: string;
  descricao: string;
  icon: string;
  slug: string;
  imagem?: string;
}

const iconMap: Record<string, LucideIcon> = {
  wrench: Wrench,
  hexagon: Hexagon,
  circle: Circle,
  cylinder: Square,
  anchor: Anchor,
  box: Box,
  dot: Dot,
  hammer: Hammer,
  flame: Flame,
  target: Target,
  scissors: Scissors,
  plug: Plug,
  home: Home,
  car: Car,
  droplet: Droplet,
  "alert-triangle": AlertTriangle,
  layers: Layers,
  "arrow-up": ArrowUp,
  "hard-hat": HardHat,
};

export const CategoryCard = ({ nome, descricao, icon, slug, imagem }: CategoryCardProps) => {
  const Icon = iconMap[icon] || Wrench;

  return (
    <Link to={`/catalogo?categoria=${slug}`}>
      <Card className="group cursor-pointer transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 border-border bg-card h-full">
        <CardHeader className="text-center pb-2">
          <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors overflow-hidden">
            {imagem ? (
              <img 
                src={imagem} 
                alt={nome} 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            ) : (
              <Icon className="h-10 w-10 text-primary" />
            )}
          </div>
          <CardTitle className="text-lg font-semibold">{nome}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-center text-sm">
            {descricao}
          </CardDescription>
        </CardContent>
      </Card>
    </Link>
  );
};
