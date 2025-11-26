export interface Product {
  id: number;
  categoria: string;
  nome: string;
  descricao: string;
  icon: string;
}

export const produtos: Product[] = [
  {
    id: 1,
    categoria: "Parafusos",
    nome: "Parafusos",
    descricao: "Linha completa de parafusos para todas as aplicações industriais e comerciais",
    icon: "wrench"
  },
  {
    id: 2,
    categoria: "Porcas",
    nome: "Porcas",
    descricao: "Porcas em diversos materiais e especificações técnicas",
    icon: "hexagon"
  },
  {
    id: 3,
    categoria: "Arruelas",
    nome: "Arruelas",
    descricao: "Arruelas lisas, de pressão e especiais para fixação segura",
    icon: "circle"
  },
  {
    id: 4,
    categoria: "Buchas",
    nome: "Buchas",
    descricao: "Buchas de fixação para alvenaria e concreto",
    icon: "cylinder"
  },
  {
    id: 5,
    categoria: "Ferramentas",
    nome: "Ferramentas",
    descricao: "Ferramentas profissionais para montagem e manutenção",
    icon: "wrench"
  },
  {
    id: 6,
    categoria: "Fixadores",
    nome: "Fixadores",
    descricao: "Sistemas completos de fixação para diversas aplicações",
    icon: "anchor"
  },
  {
    id: 7,
    categoria: "Rebites",
    nome: "Rebites",
    descricao: "Rebites e ferramentas de rebitagem profissional",
    icon: "dot"
  },
  {
    id: 8,
    categoria: "Acessórios",
    nome: "Acessórios",
    descricao: "Acessórios complementares para fixação e montagem",
    icon: "box"
  }
];

export const destaques: Product[] = produtos.slice(0, 4);
