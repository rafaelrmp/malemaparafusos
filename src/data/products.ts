export interface Product {
  id: number;
  categoria: string;
  nome: string;
  descricao: string;
  icon: string;
}

export interface Category {
  id: number;
  nome: string;
  slug: string;
  icon: string;
  subcategorias?: string[];
}

export const categorias: Category[] = [
  {
    id: 1,
    nome: "PARAFUSOS+",
    slug: "parafusos",
    icon: "wrench",
    subcategorias: ["Parafusos Sextavados", "Parafusos Allen", "Parafusos Auto-Atarraxantes", "Parafusos para Madeira"]
  },
  {
    id: 2,
    nome: "FERRAMENTAS",
    slug: "ferramentas",
    icon: "hammer",
    subcategorias: ["Chaves", "Alicates", "Martelos", "Ferramentas Elétricas"]
  },
  {
    id: 3,
    nome: "ABRAÇADEIRAS",
    slug: "abracadeiras",
    icon: "circle",
    subcategorias: ["Abraçadeiras de Nylon", "Abraçadeiras Metálicas", "Abraçadeiras Reguláveis"]
  },
  {
    id: 4,
    nome: "SOLDA",
    slug: "solda",
    icon: "flame",
    subcategorias: ["Eletrodos", "Arames de Solda", "Equipamentos de Solda"]
  },
  {
    id: 5,
    nome: "PERFURAÇÃO",
    slug: "perfuracao",
    icon: "target",
    subcategorias: ["Brocas para Metal", "Brocas para Concreto", "Brocas para Madeira"]
  },
  {
    id: 6,
    nome: "CORTE / DESBASTE / LIXA",
    slug: "corte-desbaste-lixa",
    icon: "scissors",
    subcategorias: ["Discos de Corte", "Discos de Desbaste", "Lixas", "Serras"]
  },
  {
    id: 7,
    nome: "ELETRODOMÉSTICOS",
    slug: "eletrodomesticos",
    icon: "plug",
    subcategorias: ["Conexões Elétricas", "Fios e Cabos", "Tomadas e Interruptores"]
  },
  {
    id: 8,
    nome: "CASA E JARDIM",
    slug: "casa-jardim",
    icon: "home",
    subcategorias: ["Jardinagem", "Irrigação", "Decoração"]
  },
  {
    id: 9,
    nome: "CUIDADOS AUTOMOTIVOS",
    slug: "automotivo",
    icon: "car",
    subcategorias: ["Óleos e Lubrificantes", "Acessórios", "Ferramentas Automotivas"]
  }
];

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

export const heroSlides = [
  {
    id: 1,
    title: "Parafusos de Alta Qualidade",
    subtitle: "Linha completa para indústria",
    image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800&h=600&fit=crop"
  },
  {
    id: 2,
    title: "Ferramentas Profissionais",
    subtitle: "Para todos os tipos de trabalho",
    image: "https://images.unsplash.com/photo-1581147036324-c17ac41f47b3?w=800&h=600&fit=crop"
  },
  {
    id: 3,
    title: "Fixadores Especiais",
    subtitle: "Soluções completas de fixação",
    image: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=800&h=600&fit=crop"
  }
];
