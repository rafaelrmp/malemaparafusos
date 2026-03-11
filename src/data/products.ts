export interface Product {
  id: number;
  categoria: string;
  nome: string;
  descricao: string;
  icon: string;
}

export interface Subcategoria {
  nome: string;
  slug: string;
  imagem?: string;
  itens?: Subcategoria[];
}

export interface Category {
  id: number;
  nome: string;
  slug: string;
  icon: string;
  imagem?: string;
  descricao?: string;
  subcategorias?: Subcategoria[];
}

export const categorias: Category[] = [
  {
    id: 1,
    nome: "PARAFUSOS",
    slug: "parafusos",
    icon: "cog",
    imagem: "/images/icon-parafuso.png",
    descricao: "Linha completa de parafusos para todas as aplicações industriais, comerciais e agrícolas",
    subcategorias: [
      
      {
        nome: "Arruelas",
        slug: "arruelas",
        itens: [
          { nome: "Arruela de Alumínio", slug: "arruela-aluminio" },
          { nome: "Arruela de Cabeçote", slug: "arruela-cabecote" },
          { nome: "Arruela de Cobre", slug: "arruela-cobre" },
          { nome: "Arruela de Encosto", slug: "arruela-encosto" },
          { nome: "Arruela de Fibra", slug: "arruela-fibra" },
          { nome: "Arruela Dentada", slug: "arruela-dentada" },
          { nome: "Arruela de Pressão", slug: "arruela-pressao" },
          { nome: "Arruela Lisa", slug: "arruela-lisa" },
          { nome: "Arruela Ondulada", slug: "arruela-ondulada" }
        ]
      },
      {
        nome: "Parafusos",
        slug: "parafusos-tipos",
        itens: [
          { nome: "Barra Roscada", slug: "barra-roscada" },
          { nome: "Parabolt / Chumbador", slug: "parabolt-chumbador" },
          {
            nome: "Parafuso Allen",
            slug: "parafuso-allen",
            itens: [
              { nome: "Parafuso Allen Cabeça Chata", slug: "allen-cabeca-chata" },
              { nome: "Parafuso Allen Cilíndrica MM", slug: "allen-cilindrica-mm" },
              { nome: "Parafuso Allen Cilíndrica Polegada", slug: "allen-cilindrica-polegada" },
              { nome: "Parafuso Allen Sem Cabeça", slug: "allen-sem-cabeca" }
            ]
          },
          { nome: "Parafuso Francês", slug: "parafuso-frances" },
          { nome: "Parafusos Brocante", slug: "parafusos-brocante" },
          {
            nome: "Parafuso Sextavado",
            slug: "parafuso-sextavado",
            itens: [
              { nome: "Sextavado Flangeado Aço 10.9", slug: "sextavado-flangeado-10-9" },
              { nome: "Sextavado Flangeado Aço 8.8", slug: "sextavado-flangeado-8-8" },
              { nome: "Sextavado Milímetro Aço 10.9", slug: "sextavado-mm-10-9" },
              { nome: "Sextavado Milímetro Aço 8.8", slug: "sextavado-mm-8-8" },
              { nome: "Sextavado Polegada Aço Gr 5 8.8", slug: "sextavado-polegada-gr5" }
            ]
          },
          { nome: "Parafusos Fendados", slug: "parafusos-fendados" },
          { nome: "Parafusos Inoxidáveis", slug: "parafusos-inoxidaveis" },
          { nome: "Rosca Soberba", slug: "rosca-soberba" }
        ]
      },
      {
        nome: "Porcas",
        slug: "porcas",
        itens: [
          { nome: "Aço", slug: "porca-aco" },
          { nome: "Castelo", slug: "porca-castelo" },
          { nome: "Duplas", slug: "porca-duplas" },
          { nome: "Especiais", slug: "porca-especiais" },
          { nome: "Ferro", slug: "porca-ferro" },
          { nome: "Flangeadas", slug: "porca-flangeadas" },
          { nome: "Inoxidável", slug: "porca-inoxidavel" },
          { nome: "Travantes Nylon", slug: "porca-travantes-nylon" },
          { nome: "Travante Torque", slug: "porca-travante-torque" }
        ]
      },
      {
        nome: "Parafusos Automotivos",
        slug: "parafusos-automotivos",
        itens: [
          { nome: "Bujão Carter", slug: "bujao-carter" },
          { nome: "Parafuso Cardan", slug: "parafuso-cardan" },
          { nome: "Parafuso e Porca de Roda", slug: "parafuso-porca-roda" },
          { nome: "Parafusos Moto", slug: "parafusos-moto" },
          { nome: "Prisioneiro", slug: "prisioneiro" }
        ]
      }
    ]
  },
  {
    id: 2,
    nome: "FERRAMENTAS",
    slug: "ferramentas",
    icon: "hammer",
    descricao: "Ferramentas profissionais manuais, elétricas e pneumáticas para montagem e manutenção",
    subcategorias: [
      {
        nome: "Ferramentas a Combustão",
        slug: "ferramentas-combustao",
        itens: [
          { nome: "Gerador", slug: "gerador" },
          { nome: "Roçadeira", slug: "rocadeira-combustao" },
          { nome: "Soprador", slug: "soprador-combustao" }
        ]
      },
      {
        nome: "Ferramentas Automotivas",
        slug: "ferramentas-automotivas",
        itens: [
          { nome: "Acessórios", slug: "acessorios-automotivos" },
          { nome: "Bomba Abastecimento", slug: "bomba-abastecimento" },
          { nome: "Bombas de Graxa", slug: "bombas-graxa" },
          { nome: "Calibrador de Pneu", slug: "calibrador-pneu" },
          { nome: "Carregador de Bateria", slug: "carregador-bateria" },
          { nome: "Chave Saca Filtro", slug: "chave-saca-filtro" },
          { nome: "Compressor Portátil", slug: "compressor-portatil" },
          { nome: "Elevação", slug: "elevacao" },
          { nome: "Encolhedor de Mola", slug: "encolhedor-mola" },
          { nome: "Esteira para Mecânico", slug: "esteira-mecanico" },
          { nome: "Funilaria", slug: "funilaria" },
          { nome: "Kit Remendo", slug: "kit-remendo" },
          { nome: "Medidor de Pressão", slug: "medidor-pressao" },
          { nome: "Saca Polia", slug: "saca-polia" },
          { nome: "Scanner", slug: "scanner" }
        ]
      },
      {
        nome: "Ferramentas Elétricas",
        slug: "ferramentas-eletricas",
        itens: [
          {
            nome: "Acessórios para Máquinas Elétricas",
            slug: "acessorios-maquinas-eletricas",
            itens: [
              { nome: "Mandril", slug: "mandril" },
              { nome: "Misturador de Tinta", slug: "misturador-tinta" },
              { nome: "Ponteira Bits", slug: "ponteira-bits" },
              { nome: "Suporte Disco de Borracha", slug: "suporte-disco-borracha" }
            ]
          },
          { nome: "Chave de Impacto", slug: "chave-impacto-eletrica" },
          { nome: "Compressores", slug: "compressores" },
          { nome: "Esmerilhadeira", slug: "esmerilhadeira" },
          { nome: "Ferramentas a Bateria", slug: "ferramentas-bateria" },
          { nome: "Fresadora / Frisadeira", slug: "fresadora-frisadeira" },
          {
            nome: "Furadeira",
            slug: "furadeira",
            itens: [
              { nome: "Furadeira de Bancada", slug: "furadeira-bancada" }
            ]
          },
          { nome: "Grampeador / Pinador Elétrico", slug: "grampeador-pinador-eletrico" },
          { nome: "Lixadeira e Politriz", slug: "lixadeira-politriz" },
          { nome: "Máquina de Solda", slug: "maquina-solda" },
          { nome: "Martelete Elétrico", slug: "martelete-eletrico" },
          { nome: "Moto Esmeril", slug: "moto-esmeril" },
          { nome: "Multiferramenta Oscilante", slug: "multiferramenta-oscilante" },
          { nome: "Parafusadeira de Precisão", slug: "parafusadeira-precisao" },
          { nome: "Parafusadeiras", slug: "parafusadeiras" },
          { nome: "Pistola de Pintura", slug: "pistola-pintura-eletrica" },
          { nome: "Policorte", slug: "policorte" },
          { nome: "Politriz", slug: "politriz" },
          { nome: "Retificadeiras", slug: "retificadeiras" },
          {
            nome: "Retificadeiras Elétricas",
            slug: "retificadeiras-eletricas",
            itens: [
              { nome: "Acessórios Micro Retífica", slug: "acessorios-micro-retifica" }
            ]
          },
          { nome: "Serra de Esquadria", slug: "serra-esquadria" },
          { nome: "Serra Elétrica", slug: "serra-eletrica" },
          { nome: "Serra Mármore", slug: "serra-marmore" },
          { nome: "Serra Tico-Tico", slug: "serra-tico-tico" },
          { nome: "Soprador Elétrico", slug: "soprador-eletrico" },
          { nome: "Soprador Térmico", slug: "soprador-termico" },
          { nome: "Tupias e Plainas", slug: "tupias-plainas" }
        ]
      },
      {
        nome: "Ferramentas Manuais",
        slug: "ferramentas-manuais",
        itens: [
          { nome: "Acessórios", slug: "acessorios-manuais" },
          {
            nome: "Alicates",
            slug: "alicates",
            itens: [
              { nome: "Alicate de Pressão", slug: "alicate-pressao" },
              { nome: "Alicate Descascador", slug: "alicate-descascador" },
              { nome: "Alicate de Trava", slug: "alicate-trava" },
              { nome: "Alicate para Abraçadeiras", slug: "alicate-abracadeiras" }
            ]
          },
          { nome: "Aplicador Rosca Postiça", slug: "aplicador-rosca-postica" },
          { nome: "Arco de Serra", slug: "arco-serra" },
          { nome: "Bico Encher Pneu", slug: "bico-encher-pneu" },
          { nome: "Cabo de Força P/ Soquetes", slug: "cabo-forca-soquetes" },
          { nome: "Catraca Reversível", slug: "catraca-reversivel" },
          { nome: "Chave Allen", slug: "chave-allen" },
          { nome: "Chave Biela / L", slug: "chave-biela-l" },
          { nome: "Chave Canhão", slug: "chave-canhao" },
          { nome: "Chave de Roda", slug: "chave-roda" },
          { nome: "Chave Grifo / Cano", slug: "chave-grifo-cano" },
          { nome: "Chave Inglesa / Ajustável", slug: "chave-inglesa-ajustavel" },
          { nome: "Chaves Combinada", slug: "chaves-combinada" },
          { nome: "Chaves Estrela / Frezada", slug: "chaves-estrela-frezada" },
          { nome: "Chaves Fenda e Philips", slug: "chaves-fenda-philips" },
          { nome: "Chaves Fixas / Boca", slug: "chaves-fixas-boca" },
          { nome: "Chave Torx", slug: "chave-torx" },
          { nome: "Cortador de Piso", slug: "cortador-piso" },
          { nome: "Cortador de Vidro", slug: "cortador-vidro" },
          { nome: "Engraxadeira", slug: "engraxadeira" },
          { nome: "Ferramentas de Medição", slug: "ferramentas-medicao" },
          { nome: "Ferramentas Isoladas", slug: "ferramentas-isoladas" },
          { nome: "Grampo Sargento", slug: "grampo-sargento" },
          { nome: "Grampo Tensor", slug: "grampo-tensor" },
          {
            nome: "Kit de Ferramentas",
            slug: "kit-ferramentas",
            itens: [
              { nome: "Jogo Allen", slug: "jogo-allen" },
              { nome: "Jogo Chave Combinada", slug: "jogo-chave-combinada" },
              { nome: "Jogo Chave Fixa", slug: "jogo-chave-fixa" },
              { nome: "Jogo Chave Frezada", slug: "jogo-chave-frezada" },
              { nome: "Jogo Fenda / Phillips", slug: "jogo-fenda-phillips" },
              { nome: "Jogo Soquete", slug: "jogo-soquete" }
            ]
          },
          { nome: "Kits de Pontas / Bits", slug: "kits-pontas-bits" },
          { nome: "Marretas", slug: "marretas" },
          { nome: "Martelos", slug: "martelos" },
          {
            nome: "Medição",
            slug: "medicao",
            itens: [
              { nome: "Micrômetro", slug: "micrometro" },
              { nome: "Relógio Comparador", slug: "relogio-comparador" },
              { nome: "Trena a Laser", slug: "trena-laser" },
              { nome: "Trenas", slug: "trenas" }
            ]
          },
          { nome: "Pé de Cabra", slug: "pe-cabra" },
          { nome: "Pegador Magnético", slug: "pegador-magnetico" },
          { nome: "Rebitador", slug: "rebitador" },
          { nome: "Saca Gaxetas", slug: "saca-gaxetas" },
          { nome: "Soquetes", slug: "soquetes" },
          { nome: "Talhadeiras", slug: "talhadeiras" },
          { nome: "Torquímetro", slug: "torquimetro" }
        ]
      },
      {
        nome: "Ferramentas Pneumáticas",
        slug: "ferramentas-pneumaticas",
        itens: [
          {
            nome: "Acessórios Pneumático",
            slug: "acessorios-pneumatico",
            itens: [
              { nome: "Engate Rápido", slug: "engate-rapido" }
            ]
          },
          { nome: "Bico Limpeza / Pulverizador", slug: "bico-limpeza-pulverizador" },
          { nome: "Catraca Pneumática", slug: "catraca-pneumatica" },
          { nome: "Chave de Impacto Pneumática", slug: "chave-impacto-pneumatica" },
          { nome: "Furadeira Pneumática", slug: "furadeira-pneumatica" },
          { nome: "Grampeador Pneumático", slug: "grampeador-pneumatico" },
          { nome: "Manômetros", slug: "manometros" },
          { nome: "Pistola de Pintura Pneumática", slug: "pistola-pintura-pneumatica" },
          { nome: "Pistola Jato de Areia", slug: "pistola-jato-areia" }
        ]
      },
      {
        nome: "Ferramentas p/ Torno",
        slug: "ferramentas-torno",
        itens: [
          { nome: "Inserto P/ Torno", slug: "inserto-torno" },
          { nome: "Porta Bedame", slug: "porta-bedame" },
          { nome: "Porta Ferramenta Inserto", slug: "porta-ferramenta-inserto" }
        ]
      }
    ]
  },
  {
    id: 3,
    nome: "ABRAÇADEIRAS",
    slug: "abracadeiras",
    icon: "circle",
    descricao: "Abraçadeiras de nylon, metálicas e especiais para fixação de tubos e mangueiras",
    subcategorias: [
      { nome: "Abraçadeira para Canos", slug: "abracadeira-canos" },
      { nome: "Bico Injetor", slug: "bico-injetor" },
      { nome: "Borracha", slug: "abracadeira-borracha" },
      { nome: "Canaleta", slug: "abracadeira-canaleta" },
      { nome: "Intercooler", slug: "abracadeira-intercooler" },
      { nome: "Mangote", slug: "abracadeira-mangote" },
      { nome: "Nylon", slug: "abracadeira-nylon" },
      { nome: "Radial", slug: "abracadeira-radial" },
      { nome: "Tipo Fita", slug: "abracadeira-fita" },
      { nome: "Tipo Janela", slug: "abracadeira-janela" },
      { nome: "Tipo Norma", slug: "abracadeira-norma" },
      { nome: "Tipo U", slug: "abracadeira-u" },
      { nome: "Tucho", slug: "abracadeira-tucho" }
    ]
  },
  {
    id: 4,
    nome: "SOLDA",
    slug: "solda",
    icon: "flame",
    descricao: "Equipamentos e consumíveis para solda MIG, TIG, eletrodo e muito mais",
    subcategorias: [
      {
        nome: "Acessórios",
        slug: "acessorios-solda",
        itens: [
          { nome: "Esquadro Magnético", slug: "esquadro-magnetico" },
          { nome: "Porta Eletrodo", slug: "porta-eletrodo" },
          { nome: "Tochas de Solda", slug: "tochas-solda" }
        ]
      },
      { nome: "Eletrodo / MMA", slug: "eletrodo-mma" },
      { nome: "Fluxo de Solda", slug: "fluxo-solda" },
      { nome: "Maçaricos", slug: "macaricos" },
      { nome: "MIG", slug: "mig" },
      { nome: "Plasma / Carvão", slug: "plasma-carvao" },
      { nome: "Regulador de Pressão", slug: "regulador-pressao" },
      { nome: "TIG", slug: "tig" }
    ]
  },
  {
    id: 5,
    nome: "PERFURAÇÃO",
    slug: "perfuracao",
    icon: "crosshair",
    descricao: "Brocas, serras copo, fresas e acessórios para perfuração em diversos materiais",
    subcategorias: [
      {
        nome: "Brocas",
        slug: "brocas",
        itens: [
          { nome: "Broca para Aço", slug: "broca-aco" },
          { nome: "Broca para Madeira", slug: "broca-madeira" },
          { nome: "Broca Vídea", slug: "broca-videa" }
        ]
      },
      { nome: "Cossinete", slug: "cossinete" },
      { nome: "Fresas", slug: "fresas" },
      { nome: "Macho Manual de Rosca", slug: "macho-manual-rosca" },
      {
        nome: "Serra Copo",
        slug: "serra-copo",
        itens: [
          { nome: "Serra Copo Aço", slug: "serra-copo-aco" },
          { nome: "Serra Copo Madeira", slug: "serra-copo-madeira" },
          { nome: "Serra Copo Vídea", slug: "serra-copo-videa" }
        ]
      },
      { nome: "Talhadeiras/Ponteiras", slug: "talhadeiras-ponteiras" },
      { nome: "Vazador", slug: "vazador" }
    ]
  },
  {
    id: 6,
    nome: "CORTE / DESBASTE / LIXA",
    slug: "corte-desbaste-lixa",
    icon: "disc",
    descricao: "Discos de corte, desbaste, lixas e ferramentas abrasivas profissionais",
    subcategorias: [
      { nome: "Acessórios Corte / Lixa", slug: "acessorios-corte-lixa" },
      { nome: "Disco de Corte", slug: "disco-corte" },
      { nome: "Disco de Desbaste", slug: "disco-desbaste" },
      { nome: "Disco de Lixa", slug: "disco-lixa" },
      { nome: "Disco Flap", slug: "disco-flap" },
      { nome: "Disco Serra Circular", slug: "disco-serra-circular" },
      { nome: "Disco Serra Mármore", slug: "disco-serra-marmore" },
      { nome: "Escovas", slug: "escovas" },
      { nome: "Estilete", slug: "estilete" },
      { nome: "Fibra Abrasiva", slug: "fibra-abrasiva" },
      { nome: "Lâminas de Serra", slug: "laminas-serra" },
      { nome: "Lima", slug: "lima" },
      { nome: "Lixas", slug: "lixas" },
      { nome: "Ponta Montada", slug: "ponta-montada" },
      { nome: "Rebolo", slug: "rebolo" },
      { nome: "Retificador Diamantado", slug: "retificador-diamantado" }
    ]
  },
  {
    id: 7,
    nome: "ELETRODOMÉSTICOS",
    slug: "eletrodomesticos",
    icon: "plug",
    descricao: "Eletrodomésticos e acessórios para casa e ambiente de trabalho",
    subcategorias: [
      {
        nome: "Acessórios Eletrodomésticos",
        slug: "acessorios-eletrodomesticos",
        itens: [
          { nome: "Saco Coletor de Pó", slug: "saco-coletor-po" }
        ]
      },
      {
        nome: "Para a Casa",
        slug: "para-casa",
        itens: [
          { nome: "Aspirador de Pó", slug: "aspirador-po" }
        ]
      }
    ]
  },
  {
    id: 8,
    nome: "ELEMENTOS DE FIXAÇÃO",
    slug: "elementos-fixacao",
    icon: "pin",
    descricao: "Rebites, anéis de retenção, chavetas e elementos diversos de fixação",
    subcategorias: [
      { nome: "Anel de Retenção", slug: "anel-retencao" },
      { nome: "Chavetas", slug: "chavetas" },
      { nome: "Cupilhas", slug: "cupilhas" },
      { nome: "Esfera de Aço", slug: "esfera-aco" },
      { nome: "Pino Elástico", slug: "pino-elastico" },
      {
        nome: "Rebites",
        slug: "rebites",
        itens: [
          { nome: "Rebater", slug: "rebater" },
          { nome: "Repuxo / Pop", slug: "repuxo-pop" }
        ]
      },
      { nome: "Rosca Postiça / Suplemento", slug: "rosca-postica-suplemento" },
      { nome: "Trava Externa", slug: "trava-externa" },
      { nome: "Trava Interna", slug: "trava-interna" }
    ]
  },
  {
    id: 9,
    nome: "ELEVAÇÃO E CARGA",
    slug: "elevacao-carga",
    icon: "arrow-up",
    descricao: "Cabos de aço, correntes, catracas e equipamentos para elevação de cargas",
    subcategorias: [
      { nome: "Anilha / Sapatilha", slug: "anilha-sapatilha" },
      { nome: "Cabo de Aço", slug: "cabo-aco" },
      { nome: "Catraca para Amarração", slug: "catraca-amarracao" },
      { nome: "Clips para Cabo de Aço", slug: "clips-cabo-aco" },
      { nome: "Corrente", slug: "corrente" },
      { nome: "Esticador P/ Cabo", slug: "esticador-cabo" },
      { nome: "Fita para Amarração", slug: "fita-amarracao" },
      { nome: "Gancho Olhal", slug: "gancho-olhal" },
      { nome: "Guincho Elétrico", slug: "guincho-eletrico" },
      { nome: "Manilha", slug: "manilha" },
      { nome: "Moitão", slug: "moitao" },
      { nome: "Olhal para Cabo Aço", slug: "olhal-cabo-aco" },
      { nome: "Talha de Elevação", slug: "talha-elevacao" },
      { nome: "Tirfor", slug: "tirfor" }
    ]
  },
  {
    id: 10,
    nome: "E.P.I",
    slug: "epi",
    icon: "hard-hat",
    descricao: "Equipamentos de proteção individual para segurança no trabalho",
    subcategorias: [
      { nome: "Avental", slug: "avental" },
      { nome: "Botina", slug: "botina" },
      { nome: "Capacete", slug: "capacete" },
      { nome: "Cintos", slug: "cintos" },
      { nome: "Luvas", slug: "luvas" },
      { nome: "Máscaras", slug: "mascaras" },
      { nome: "Óculos", slug: "oculos" },
      { nome: "Protetor Auricular", slug: "protetor-auricular" },
      { nome: "Protetor Facial", slug: "protetor-facial" },
      { nome: "Protetor Solar", slug: "protetor-solar" },
      { nome: "Touca Soldador", slug: "touca-soldador" }
    ]
  },
  {
    id: 11,
    nome: "ORGANIZADORES",
    slug: "organizadores",
    icon: "box",
    descricao: "Caixas, carros, maletas e gaveteiros para organização de ferramentas",
    subcategorias: [
      { nome: "Bandejas Magnética", slug: "bandejas-magnetica" },
      { nome: "Bolsa de Cintura", slug: "bolsa-cintura" },
      { nome: "Caixa de Ferramentas", slug: "caixa-ferramentas" },
      { nome: "Carro de Ferramentas", slug: "carro-ferramentas" },
      { nome: "Gaveteiros", slug: "gaveteiros" },
      { nome: "Maleta e Bolsa de Ferramentas", slug: "maleta-bolsa-ferramentas" }
    ]
  },
  {
    id: 12,
    nome: "PEÇAS AUTOMOTIVAS",
    slug: "pecas-automotivas",
    icon: "car",
    descricao: "Peças, acessórios e componentes para manutenção automotiva",
    subcategorias: [
      { nome: "Abraçadeira Cano Injetor", slug: "abracadeira-cano-injetor" },
      {
        nome: "Acessórios para Hidráulicos",
        slug: "acessorios-hidraulicos",
        itens: [
          { nome: "Olhal Hidráulico", slug: "olhal-hidraulico" },
          { nome: "Parafuso Oco", slug: "parafuso-oco" }
        ]
      },
      { nome: "Bujão Carter", slug: "bujao-carter-auto" },
      { nome: "Calota Cubo", slug: "calota-cubo" },
      { nome: "Galão de Gasolina", slug: "galao-gasolina" },
      { nome: "Graxeiras", slug: "graxeiras" },
      { nome: "Molas", slug: "molas" },
      { nome: "Óleo Automotivo", slug: "oleo-automotivo" },
      { nome: "Parafusos de Cabeçote", slug: "parafusos-cabecote" },
      { nome: "Parafusos e Porcas Geral", slug: "parafusos-porcas-geral" },
      { nome: "Pino de Centro", slug: "pino-centro" },
      { nome: "Presilhas Plástica", slug: "presilhas-plastica" },
      { nome: "Quebra Galho", slug: "quebra-galho" },
      { nome: "Sangrias", slug: "sangrias" },
      { nome: "Terminais Articulados", slug: "terminais-articulados" },
      { nome: "Tomadas 12V", slug: "tomadas-12v" },
      { nome: "Trava Aranha", slug: "trava-aranha" }
    ]
  },
  {
    id: 13,
    nome: "QUÍMICOS / TINTAS",
    slug: "quimicos-tintas",
    icon: "droplet",
    descricao: "Tintas spray, colas, graxas, silicones e produtos químicos",
    subcategorias: [
      { nome: "Automotivos", slug: "quimicos-automotivos" },
      { nome: "Colas", slug: "colas" },
      { nome: "Graxas", slug: "graxas" },
      { nome: "Outros - Químicos", slug: "outros-quimicos" },
      { nome: "Pasta Abrasiva", slug: "pasta-abrasiva" },
      { nome: "Primer", slug: "primer" },
      { nome: "Silicones", slug: "silicones" },
      { nome: "Thinner", slug: "thinner" },
      { nome: "Tinta Spray", slug: "tinta-spray" },
      { nome: "Vaselinas", slug: "vaselinas" },
      { nome: "Veda-Choque", slug: "veda-choque" }
    ]
  },
  {
    id: 14,
    nome: "SINALIZAÇÃO",
    slug: "sinalizacao",
    icon: "alert-triangle",
    descricao: "Cones, fitas zebradas e correntes para sinalização de segurança",
    subcategorias: [
      { nome: "Cone", slug: "cone" },
      { nome: "Corrente Plástica", slug: "corrente-plastica" },
      { nome: "Fita Zebrada", slug: "fita-zebrada" }
    ]
  },
  {
    id: 15,
    nome: "TERMOPLÁSTICOS E TERMOFIXOS",
    slug: "termoplasticos-termofixos",
    icon: "layers",
    descricao: "Manípulos, alavancas, botões e componentes plásticos industriais",
    subcategorias: [
      { nome: "Alavanca Plástica", slug: "alavanca-plastica" },
      { nome: "Alavancas", slug: "alavancas" },
      { nome: "Alça", slug: "alca" },
      { nome: "Botões", slug: "botoes" },
      { nome: "Chave Fecho", slug: "chave-fecho" },
      { nome: "Dobradiças Plásticas", slug: "dobradicas-plasticas" },
      { nome: "Manípulos", slug: "manipulos" },
      { nome: "Manopla", slug: "manopla" },
      { nome: "Pé Nivelador", slug: "pe-nivelador" },
      { nome: "Vibra-Stop", slug: "vibra-stop" },
      { nome: "Volante 2 Raios", slug: "volante-2-raios" }
    ]
  },
  {
    id: 16,
    nome: "CASA E JARDIM",
    slug: "casa-jardim",
    icon: "home",
    descricao: "Produtos para casa, jardim, limpeza e cuidados automotivos",
    subcategorias: [
      {
        nome: "Acessórios de Limpeza",
        slug: "acessorios-limpeza",
        itens: [
          { nome: "Rodos", slug: "rodos" },
          { nome: "Vassouras", slug: "vassouras" }
        ]
      },
      { nome: "Aparador de Grama", slug: "aparador-grama" },
      { nome: "Buchas", slug: "buchas" },
      { nome: "Cadeados", slug: "cadeados" },
      { nome: "Cordas", slug: "cordas" },
      { nome: "Esguicho de Água", slug: "esguicho-agua" },
      { nome: "Extensão Elétrica", slug: "extensao-eletrica" },
      { nome: "Fechaduras Elétrica", slug: "fechaduras-eletrica" },
      {
        nome: "Ferragens em Geral",
        slug: "ferragens-geral",
        itens: [
          { nome: "Espátulas de Aço", slug: "espatulas-aco" }
        ]
      },
      {
        nome: "Fitas Adesivas",
        slug: "fitas-adesivas",
        itens: [
          { nome: "Fita Dupla Face", slug: "fita-dupla-face" }
        ]
      },
      { nome: "Grampo Tapeceiro", slug: "grampo-tapeceiro" },
      { nome: "Lâmpadas", slug: "lampadas" },
      { nome: "Lanternas", slug: "lanternas" },
      { nome: "Lavadora de Alta Pressão", slug: "lavadora-alta-pressao" },
      { nome: "Manta Adesiva Asfáltica", slug: "manta-adesiva-asfaltica" },
      {
        nome: "Materiais Elétricos",
        slug: "materiais-eletricos",
        itens: [
          { nome: "Tubo Espaguete Isolante", slug: "tubo-espaguete-isolante" }
        ]
      },
      { nome: "Pad Pintura", slug: "pad-pintura" },
      { nome: "Pincel", slug: "pincel" },
      { nome: "Registro de Gás", slug: "registro-gas" },
      { nome: "Roçadeiras", slug: "rocadeiras" },
      { nome: "Suportes", slug: "suportes" },
      {
        nome: "Cuidados Automotivos",
        slug: "cuidados-automotivos",
        itens: [
          { nome: "Desengraxantes", slug: "desengraxantes" },
          { nome: "Escova Limpeza Detalhada", slug: "escova-limpeza-detalhada" },
          { nome: "Escova para Limpeza", slug: "escova-limpeza" },
          { nome: "Kit Acessórios para Limpeza", slug: "kit-acessorios-limpeza" },
          { nome: "Pulverizador de Sabão", slug: "pulverizador-sabao" },
          { nome: "Toalhas de Microfibra", slug: "toalhas-microfibra" }
        ]
      }
    ]
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
