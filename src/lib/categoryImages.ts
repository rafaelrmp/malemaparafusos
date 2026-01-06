// Mapeamento de imagens para categorias do catálogo
import parafusosImg from "@/assets/catalogo/parafusos.jpg";
import ferramentasImg from "@/assets/catalogo/ferramentas.jpg";
import abracadeirasImg from "@/assets/catalogo/abracadeiras.jpg";
import soldaImg from "@/assets/catalogo/solda.jpg";
import perfuracaoImg from "@/assets/catalogo/perfuracao.jpg";
import corteDesbasteImg from "@/assets/catalogo/corte-desbaste-lixa.jpg";
import eletrodomesticosImg from "@/assets/catalogo/eletrodomesticos.jpg";
import fixadoresImg from "@/assets/catalogo/fixadores-acessorios.jpg";
import amarracaoImg from "@/assets/catalogo/amarracao-icamento.jpg";
import segurancaImg from "@/assets/catalogo/seguranca.jpg";
import organizadoresImg from "@/assets/catalogo/organizadores.jpg";
import pecasAutomotivasImg from "@/assets/catalogo/pecas-automotivas.jpg";
import quimicosTintasImg from "@/assets/catalogo/quimicos-tintas.jpg";
import sinalizacaoImg from "@/assets/catalogo/sinalizacao.jpg";
import termoplasticosImg from "@/assets/catalogo/termoplasticos.jpg";
import casaJardimImg from "@/assets/catalogo/casa-jardim.jpg";

// Subcategorias Parafusos
import agricolasImg from "@/assets/catalogo/parafusos/agricolas.jpg";
import arruelasImg from "@/assets/catalogo/parafusos/arruelas.jpg";
import parafusosTiposImg from "@/assets/catalogo/parafusos/parafusos-tipos.jpg";
import porcasImg from "@/assets/catalogo/parafusos/porcas.jpg";
import parafusosAutomotivosImg from "@/assets/catalogo/parafusos/parafusos-automotivos.jpg";

// Subcategorias Ferramentas
import ferramentasCombustaoImg from "@/assets/catalogo/ferramentas/ferramentas-combustao.jpg";
import ferramentasAutomotivasImg from "@/assets/catalogo/ferramentas/ferramentas-automotivas.jpg";
import ferramentasEletricasImg from "@/assets/catalogo/ferramentas/ferramentas-eletricas.jpg";
import ferramentasManuaisImg from "@/assets/catalogo/ferramentas/ferramentas-manuais.jpg";
import ferramentasPneumaticasImg from "@/assets/catalogo/ferramentas/ferramentas-pneumaticas.jpg";
import ferramentasTornoImg from "@/assets/catalogo/ferramentas/ferramentas-torno.jpg";

// Subcategorias Corte/Desbaste/Lixa
import discoCorteImg from "@/assets/catalogo/corte-desbaste-lixa/disco-corte.jpg";

// Mapeamento de slug da categoria para imagem
export const categoryImages: Record<string, string> = {
  // Categorias principais
  "parafusos": parafusosImg,
  "ferramentas": ferramentasImg,
  "abracadeiras": abracadeirasImg,
  "solda": soldaImg,
  "perfuracao": perfuracaoImg,
  "corte-desbaste-lixa": corteDesbasteImg,
  "eletrodomesticos": eletrodomesticosImg,
  "elementos-fixacao": fixadoresImg,
  "elevacao-carga": amarracaoImg,
  "epi": segurancaImg,
  "organizadores": organizadoresImg,
  "pecas-automotivas": pecasAutomotivasImg,
  "quimicos-tintas": quimicosTintasImg,
  "sinalizacao": sinalizacaoImg,
  "termoplasticos-termofixos": termoplasticosImg,
  "casa-jardim": casaJardimImg,
  
  // Subcategorias Parafusos
  "parafusos/agricolas": agricolasImg,
  "parafusos/arruelas": arruelasImg,
  "parafusos/parafusos-tipos": parafusosTiposImg,
  "parafusos/porcas": porcasImg,
  "parafusos/parafusos-automotivos": parafusosAutomotivosImg,
  
  // Subcategorias Ferramentas
  "ferramentas/ferramentas-combustao": ferramentasCombustaoImg,
  "ferramentas/ferramentas-automotivas": ferramentasAutomotivasImg,
  "ferramentas/ferramentas-eletricas": ferramentasEletricasImg,
  "ferramentas/ferramentas-manuais": ferramentasManuaisImg,
  "ferramentas/ferramentas-pneumaticas": ferramentasPneumaticasImg,
  "ferramentas/ferramentas-torno": ferramentasTornoImg,
  
  // Subcategorias Corte/Desbaste/Lixa
  "corte-desbaste-lixa/disco-corte": discoCorteImg,
};

// Função para obter imagem da categoria pelo slug
export const getCategoryImage = (slug: string): string | undefined => {
  return categoryImages[slug];
};
