import { dynamicImageMap } from "./dynamicImageMap";

const GITHUB_BASE_URL =
  "https://raw.githubusercontent.com/Peclat/malemaparafusos/2334751d2c0f1049b68fa5c53583840751a56bdc/Cat%C3%A1logo%20Malema%20Completo/";

// Mapeamento de nome do arquivo → pasta no GitHub (verificado manualmente no repo)
const fileToFolder: Record<string, string> = {
  // PARAFUSOS
  "Arruela Dentada.jpg": "PARAFUSOS", "Arruela Lisa.jpg": "PARAFUSOS", "Arruela Ondulada.jpg": "PARAFUSOS",
  "Arruela de Alumínio.jpg": "PARAFUSOS", "Arruela de Cabeçote.jpg": "PARAFUSOS", "Arruela de Cobre.jpg": "PARAFUSOS",
  "Arruela de Encosto.jpg": "PARAFUSOS", "Arruela de Fibra.jpg": "PARAFUSOS", "Arruela de Pressão.jpg": "PARAFUSOS",
  "Arruelas.jpg": "PARAFUSOS", "Aço.jpg": "PARAFUSOS", "Barra Roscada.jpg": "PARAFUSOS",
  "Castelo.jpg": "PARAFUSOS", "Duplas.jpg": "PARAFUSOS", "Especiais.jpg": "PARAFUSOS",
  "Ferro.jpg": "PARAFUSOS", "Flangeadas.jpg": "PARAFUSOS", "Inoxidável.jpg": "PARAFUSOS",
  "Parafuso Allen Cabeça Chata.jpg": "PARAFUSOS", "Parafuso Allen Cilíndrica MM.jpg": "PARAFUSOS",
  "Parafuso Allen Cilíndrica Polegada.jpg": "PARAFUSOS", "Parafuso Allen Sem Cabeça.jpg": "PARAFUSOS",
  "Parafuso Allen.jpg": "PARAFUSOS", "Parafuso Cardan.jpg": "PARAFUSOS", "Parafuso Francês.jpg": "PARAFUSOS",
  "Parafuso Sextavado.jpg": "PARAFUSOS", "Parafuso e Porca de Roda.jpg": "PARAFUSOS",
  "Parafusos Automotivos.jpg": "PARAFUSOS", "Parafusos Brocante.jpg": "PARAFUSOS",
  "Parafusos Fendados.jpg": "PARAFUSOS", "Parafusos Inoxidáveis.jpg": "PARAFUSOS",
  "Parafusos Moto.jpg": "PARAFUSOS", "Parafusos.jpg": "PARAFUSOS", "Prisioneiro.jpg": "PARAFUSOS",
  "Rosca Soberba.jpg": "PARAFUSOS", "Sextavado Flangeado Aço 10.9.jpg": "PARAFUSOS",
  "Sextavado Flangeado Aço 8.8.jpg": "PARAFUSOS", "Sextavado Milímetro Aço 10.9.jpg": "PARAFUSOS",
  "Sextavado Milímetro Aço 8.8.jpg": "PARAFUSOS", "Sextavado Polegada Aço Gr 5 8.8.jpg": "PARAFUSOS",
  "Travante Torque.jpg": "PARAFUSOS", "Travantes Nylon.jpg": "PARAFUSOS",

  // FERRAMENTAS
  "Acessórios Micro Retífica.jpg": "FERRAMENTAS", "Acessórios Pneumático.jpg": "FERRAMENTAS",
  "Acessórios para Máquinas Elétricas.jpg": "FERRAMENTAS", "Alicate Descascador.jpg": "FERRAMENTAS",
  "Alicate de Pressão.jpg": "FERRAMENTAS", "Alicate de Trava.jpg": "FERRAMENTAS",
  "Alicate para Abraçadeiras.jpg": "FERRAMENTAS", "Alicates.jpg": "FERRAMENTAS",
  "Aplicador Rosca Postiça.jpg": "FERRAMENTAS", "Arco de Serra.jpg": "FERRAMENTAS",
  "Bico Encher Pneu.jpg": "FERRAMENTAS", "Bomba Abastecimento.jpg": "FERRAMENTAS",
  "Bombas de Graxa.jpg": "FERRAMENTAS", "Calibrador de Pneu.jpg": "FERRAMENTAS",
  "Carregador de Bateria.jpg": "FERRAMENTAS", "Catraca Pneumática.jpg": "FERRAMENTAS",
  "Catraca Reversível.jpg": "FERRAMENTAS", "Chave Allen.jpg": "FERRAMENTAS",
  "Chave Canhão.jpg": "FERRAMENTAS", "Chave Saca Filtro.jpg": "FERRAMENTAS",
  "Chave Torx.jpg": "FERRAMENTAS", "Chave de Impacto Pneumática.jpg": "FERRAMENTAS",
  "Chave de Impacto.jpg": "FERRAMENTAS", "Chave de Roda.jpg": "FERRAMENTAS",
  "Chaves Combinada.jpg": "FERRAMENTAS", "Chaves Fenda e Philips.jpg": "FERRAMENTAS",
  "Compressor Portátil.jpg": "FERRAMENTAS", "Compressores.jpg": "FERRAMENTAS",
  "Cortador de Piso.jpg": "FERRAMENTAS", "Cortador de Vidro.jpg": "FERRAMENTAS",
  "Elevação.jpg": "FERRAMENTAS", "Encolhedor de Mola.jpg": "FERRAMENTAS",
  "Engate Rápido.jpg": "FERRAMENTAS", "Engraxadeira.jpg": "FERRAMENTAS",
  "Esmerilhadeira.jpg": "FERRAMENTAS", "Esteira para Mecânico.jpg": "FERRAMENTAS",
  "Ferramentas Automotivas.jpg": "FERRAMENTAS", "Ferramentas Elétricas.jpg": "FERRAMENTAS",
  "Ferramentas Isoladas.jpg": "FERRAMENTAS", "Ferramentas Manuais.jpg": "FERRAMENTAS",
  "Ferramentas Pneumáticas.jpg": "FERRAMENTAS", "Ferramentas a Bateria.jpg": "FERRAMENTAS",
  "Ferramentas a Combustão.jpg": "FERRAMENTAS", "Ferramentas de Medição.jpg": "FERRAMENTAS",
  "Ferramentas.jpg": "FERRAMENTAS", "Funilaria.jpg": "FERRAMENTAS",
  "Furadeira Pneumática.jpg": "FERRAMENTAS", "Furadeira de Bancada.jpg": "FERRAMENTAS",
  "Furadeira.jpg": "FERRAMENTAS", "Gerador.jpg": "FERRAMENTAS",
  "Grampeador Pneumático.jpg": "FERRAMENTAS", "Grampo Sargento.jpg": "FERRAMENTAS",
  "Grampo Tensor.jpg": "FERRAMENTAS", "Jogo Allen.jpg": "FERRAMENTAS",
  "Jogo Chave Combinada.jpg": "FERRAMENTAS", "Jogo Chave Fixa.jpg": "FERRAMENTAS",
  "Jogo Chave Frezada.jpg": "FERRAMENTAS", "Jogo Soquete.jpg": "FERRAMENTAS",
  "Kit Remendo.jpg": "FERRAMENTAS", "Kit de Ferramentas.jpg": "FERRAMENTAS",
  "Lixadeira e Politriz.jpg": "FERRAMENTAS", "Mandril.jpg": "FERRAMENTAS",
  "Manômetros.jpg": "FERRAMENTAS", "Marretas.jpg": "FERRAMENTAS",
  "Martelete Elétrico.jpg": "FERRAMENTAS", "Martelos.jpg": "FERRAMENTAS",
  "Medidor de Pressão.jpg": "FERRAMENTAS", "Medição.jpg": "FERRAMENTAS",
  "Micrômetro.jpg": "FERRAMENTAS", "Misturador de Tinta.jpg": "FERRAMENTAS",
  "Moto Esmeril.jpg": "FERRAMENTAS", "Multiferramenta Oscilante.jpg": "FERRAMENTAS",
  "Máquina de Solda.jpg": "FERRAMENTAS", "Parafusadeira de Precisão.jpg": "FERRAMENTAS",
  "Parafusadeiras.jpg": "FERRAMENTAS", "Pegador Magnético.jpg": "FERRAMENTAS",
  "Pistola Jato de Areia.jpg": "FERRAMENTAS", "Pistola de Pintura Pneumática.jpg": "FERRAMENTAS",
  "Pistola de Pintura.jpg": "FERRAMENTAS", "Policorte.jpg": "FERRAMENTAS",
  "Politriz.jpg": "FERRAMENTAS", "Ponteira Bits.jpg": "FERRAMENTAS",
  "Porta Bedame.jpg": "FERRAMENTAS", "Porta Ferramenta Inserto.jpg": "FERRAMENTAS",
  "Pé de Cabra.jpg": "FERRAMENTAS", "Rebitador.jpg": "FERRAMENTAS",
  "Relógio Comparador.jpg": "FERRAMENTAS", "Retificadeiras Elétricas.jpg": "FERRAMENTAS",
  "Retificadeiras.jpg": "FERRAMENTAS", "Roçadeira.jpg": "FERRAMENTAS",
  "Saca Gaxetas.jpg": "FERRAMENTAS", "Saca Polia.jpg": "FERRAMENTAS",
  "Scanner.jpg": "FERRAMENTAS", "Serra Elétrica.jpg": "FERRAMENTAS",
  "Serra Mármore.jpg": "FERRAMENTAS", "Serra Tico-Tico.jpg": "FERRAMENTAS",
  "Serra de Esquadria.jpg": "FERRAMENTAS", "Soprador Elétrico.jpg": "FERRAMENTAS",
  "Soprador Térmico.jpg": "FERRAMENTAS", "Soprador.jpg": "FERRAMENTAS",
  "Soquetes.jpg": "FERRAMENTAS", "Suporte Disco de Borracha.jpg": "FERRAMENTAS",
  "Talhadeiras.jpg": "FERRAMENTAS", "Torquímetro.jpg": "FERRAMENTAS",
  "Trena a Laser.jpg": "FERRAMENTAS", "Trenas.jpg": "FERRAMENTAS",
  "Tupias e Plainas.jpg": "FERRAMENTAS",

  // ABRAADEIRAS
  "Abraçadeira para Canos.jpg": "ABRAADEIRAS", "Bico Injetor.jpg": "ABRAADEIRAS",
  "Borracha.jpg": "ABRAADEIRAS", "Canaleta.jpg": "ABRAADEIRAS", "Intercooler.jpg": "ABRAADEIRAS",
  "Mangote.jpg": "ABRAADEIRAS", "Nylon.jpg": "ABRAADEIRAS", "Radial.jpg": "ABRAADEIRAS",
  "Tipo Fita.jpg": "ABRAADEIRAS", "Tipo Janela.jpg": "ABRAADEIRAS", "Tipo Norma.jpg": "ABRAADEIRAS",
  "Tipo U.jpg": "ABRAADEIRAS", "Tucho.jpg": "ABRAADEIRAS",

  // SOLDA
  "Acessórios.jpg": "SOLDA", "Esquadro Magnético.jpg": "SOLDA", "Fluxo de Solda.jpg": "SOLDA",
  "MIG.jpg": "SOLDA", "Maçaricos.jpg": "SOLDA", "Porta Eletrodo.jpg": "SOLDA",
  "Regulador de Pressão.jpg": "SOLDA", "TIG.jpg": "SOLDA", "Tochas de Solda.jpg": "SOLDA",

  // EPI
  "Avental.jpg": "EPI", "Botina.jpg": "EPI", "Capacete.jpg": "EPI", "Cintos.jpg": "EPI",
  "Luvas.jpg": "EPI", "Máscaras.jpg": "EPI", "Protetor Auricular.jpg": "EPI",
  "Protetor Facial.jpg": "EPI", "Protetor Solar.jpg": "EPI", "Touca Soldador.jpg": "EPI",
  "Óculos.jpg": "EPI",

  // PERFURAO
  "Broca Vídea.jpg": "PERFURAO", "Broca para Aço.jpg": "PERFURAO", "Broca para Madeira.jpg": "PERFURAO",
  "Cossinete.jpg": "PERFURAO", "Fresas.jpg": "PERFURAO", "Macho Manual de Rosca.jpg": "PERFURAO",
  "Serra Copo Aço.jpg": "PERFURAO", "Serra Copo Madeira.jpg": "PERFURAO",
  "Serra Copo Vídea.jpg": "PERFURAO", "Vazador.jpg": "PERFURAO",

  // CORTE  DESBASTE  LIXA
  "Disco Flap.jpg": "CORTE  DESBASTE  LIXA", "Disco Serra Circular.jpg": "CORTE  DESBASTE  LIXA",
  "Disco Serra Mármore.jpg": "CORTE  DESBASTE  LIXA", "Disco de Corte.jpg": "CORTE  DESBASTE  LIXA",
  "Disco de Desbaste.jpg": "CORTE  DESBASTE  LIXA", "Disco de Lixa.jpg": "CORTE  DESBASTE  LIXA",
  "Escovas.jpg": "CORTE  DESBASTE  LIXA", "Estilete.jpg": "CORTE  DESBASTE  LIXA",
  "Fibra Abrasiva.jpg": "CORTE  DESBASTE  LIXA", "Lima.jpg": "CORTE  DESBASTE  LIXA",
  "Lixas.jpg": "CORTE  DESBASTE  LIXA", "Lâminas de Serra.jpg": "CORTE  DESBASTE  LIXA",
  "Ponta Montada.jpg": "CORTE  DESBASTE  LIXA", "Rebolo.jpg": "CORTE  DESBASTE  LIXA",
  "Retificador Diamantado.jpg": "CORTE  DESBASTE  LIXA",

  // ELEMENTOS DE FIXAO
  "Anel de Retenção.jpg": "ELEMENTOS DE FIXAO", "Chavetas.jpg": "ELEMENTOS DE FIXAO",
  "Cupilhas.jpg": "ELEMENTOS DE FIXAO", "Esfera de Aço.jpg": "ELEMENTOS DE FIXAO",
  "Pino Elástico.jpg": "ELEMENTOS DE FIXAO", "Rebater.jpg": "ELEMENTOS DE FIXAO",
  "Trava Externa.jpg": "ELEMENTOS DE FIXAO", "Trava Interna.jpg": "ELEMENTOS DE FIXAO",

  // ELETRODOMSTICOS
  "Aspirador de Pó.jpg": "ELETRODOMSTICOS", "Saco Coletor de Pó.jpg": "ELETRODOMSTICOS",

  // ELEVAO E CARGA
  "Cabo de Aço.jpg": "ELEVAO E CARGA", "Catraca para Amarração.jpg": "ELEVAO E CARGA",
  "Clips para Cabo de Aço.jpg": "ELEVAO E CARGA", "Corrente.jpg": "ELEVAO E CARGA",
  "Fita para Amarração.jpg": "ELEVAO E CARGA", "Gancho Olhal.jpg": "ELEVAO E CARGA",
  "Guincho Elétrico.jpg": "ELEVAO E CARGA", "Manilha.jpg": "ELEVAO E CARGA",
  "Moitão.jpg": "ELEVAO E CARGA", "Olhal para Cabo Aço.jpg": "ELEVAO E CARGA",
  "Talha de Elevação.jpg": "ELEVAO E CARGA", "Tirfor.jpg": "ELEVAO E CARGA",

  // ORGANIZADORES
  "Bandejas Magnética.jpg": "ORGANIZADORES", "Bolsa de Cintura.jpg": "ORGANIZADORES",
  "Caixa de Ferramentas.jpg": "ORGANIZADORES", "Carro de Ferramentas.jpg": "ORGANIZADORES",
  "Gaveteiros.jpg": "ORGANIZADORES", "Maleta e Bolsa de Ferramentas.jpg": "ORGANIZADORES",

  // PEAS AUTOMOTIVAS
  "Abraçadeira Cano Injetor.jpg": "PEAS AUTOMOTIVAS", "Bujão Carter.jpg": "PEAS AUTOMOTIVAS",
  "Calota Cubo.jpg": "PEAS AUTOMOTIVAS", "Galão de Gasolina.jpg": "PEAS AUTOMOTIVAS",
  "Graxeiras.jpg": "PEAS AUTOMOTIVAS", "Molas.jpg": "PEAS AUTOMOTIVAS",
  "Olhal Hidráulico.jpg": "PEAS AUTOMOTIVAS", "Parafuso Oco.jpg": "PEAS AUTOMOTIVAS",
  "Parafusos de Cabeçote.jpg": "PEAS AUTOMOTIVAS", "Parafusos e Porcas Geral.jpg": "PEAS AUTOMOTIVAS",
  "Pino de Centro.jpg": "PEAS AUTOMOTIVAS", "Presilhas Plástica.jpg": "PEAS AUTOMOTIVAS",
  "Quebra Galho.jpg": "PEAS AUTOMOTIVAS", "Sangrias.jpg": "PEAS AUTOMOTIVAS",
  "Terminais Articulados.jpg": "PEAS AUTOMOTIVAS", "Tomadas 12V.jpg": "PEAS AUTOMOTIVAS",
  "Trava Aranha.jpg": "PEAS AUTOMOTIVAS", "Óleo Automotivo.jpg": "PEAS AUTOMOTIVAS",

  // SINALIZAO
  "Cone.jpg": "SINALIZAO", "Corrente Plástica.jpg": "SINALIZAO", "Fita Zebrada.jpg": "SINALIZAO",

  // QUMICOS  TINTAS (double space in folder name)
  "Automotivos.jpg": "QUMICOS  TINTAS", "Colas.jpg": "QUMICOS  TINTAS", "Graxas.jpg": "QUMICOS  TINTAS",
  "Pasta Abrasiva.jpg": "QUMICOS  TINTAS", "Primer.jpg": "QUMICOS  TINTAS", "Silicones.jpg": "QUMICOS  TINTAS",
  "Thinner.jpg": "QUMICOS  TINTAS", "Tinta Spray.jpg": "QUMICOS  TINTAS", "Vaselinas.jpg": "QUMICOS  TINTAS",
  "Veda-Choque.jpg": "QUMICOS  TINTAS",

  // CASA E JARDIM
  "Aparador de Grama.jpg": "CASA E JARDIM", "Buchas.jpg": "CASA E JARDIM", "Cadeados.jpg": "CASA E JARDIM",
  "Cordas.jpg": "CASA E JARDIM", "Desengraxantes.jpg": "CASA E JARDIM", "Escova Limpeza Detalhada.jpg": "CASA E JARDIM",
  "Escova para Limpeza.jpg": "CASA E JARDIM", "Esguicho de Água.jpg": "CASA E JARDIM", "Espátulas de Aço.jpg": "CASA E JARDIM",
  "Extensão Elétrica.jpg": "CASA E JARDIM", "Fechaduras Elétrica.jpg": "CASA E JARDIM", "Fita Dupla Face.jpg": "CASA E JARDIM",
  "Grampo Tapeceiro.jpg": "CASA E JARDIM", "Kit Acessórios para Limpeza.jpg": "CASA E JARDIM", "Lanternas.jpg": "CASA E JARDIM",
  "Lavadora de Alta Pressão.jpg": "CASA E JARDIM", "Lâmpadas.jpg": "CASA E JARDIM", "Manta Adesiva Asfáltica.jpg": "CASA E JARDIM",
  "Pad Pintura.jpg": "CASA E JARDIM", "Pincel.jpg": "CASA E JARDIM", "Pulverizador de Sabão.jpg": "CASA E JARDIM",
  "Registro de Gás.jpg": "CASA E JARDIM", "Rodos.jpg": "CASA E JARDIM", "Roçadeiras.jpg": "CASA E JARDIM",
  "Suportes.jpg": "CASA E JARDIM", "Toalhas de Microfibra.jpg": "CASA E JARDIM", "Tubo Espaguete Isolante.jpg": "CASA E JARDIM",
  "Vassouras.jpg": "CASA E JARDIM",

  // TERMOPLSTICOS E TERMOFIXOS
  "Alavanca Plástica.jpg": "TERMOPLSTICOS E TERMOFIXOS", "Alavancas.jpg": "TERMOPLSTICOS E TERMOFIXOS",
  "Alça.jpg": "TERMOPLSTICOS E TERMOFIXOS", "Botões.jpg": "TERMOPLSTICOS E TERMOFIXOS",
  "Chave Fecho.jpg": "TERMOPLSTICOS E TERMOFIXOS", "Dobradiças Plásticas.jpg": "TERMOPLSTICOS E TERMOFIXOS",
  "Manopla.jpg": "TERMOPLSTICOS E TERMOFIXOS", "Manípulos.jpg": "TERMOPLSTICOS E TERMOFIXOS",
  "Pé Nivelador.jpg": "TERMOPLSTICOS E TERMOFIXOS", "Vibra-Stop.jpg": "TERMOPLSTICOS E TERMOFIXOS",
  "Volante 2 Raios.jpg": "TERMOPLSTICOS E TERMOFIXOS",

  // Outros (subpastas compostas)
  "Anilha / Sapatilha.jpg": "Outros/Anilha",
  "Bico Limpeza / Pulverizador.jpg": "Outros/Bico Limpeza",
  "Cabo de Força P/ Soquetes.jpg": "Outros/Cabo de For\u00e7a P",
  "Chave Biela / L.jpg": "Outros/Chave Biela",
  "Chave Grifo / Cano.jpg": "Outros/Chave Grifo",
  "Chave Inglesa / Ajustável.jpg": "Outros/Chave Inglesa",
  "Chaves Estrela / Frezada.jpg": "Outros/Chaves Estrela",
  "Chaves Fixas / Boca.jpg": "Outros/Chaves Fixas",
  "Eletrodo / MMA.jpg": "Outros/Eletrodo",
  "Esticador P/ Cabo.jpg": "Outros/Esticador P",
  "Fresadora / Frisadeira.jpg": "Outros/Fresadora",
  "Grampeador / Pinador Elétrico.jpg": "Outros/Grampeador",
  "Inserto P/ Torno.jpg": "Outros/Inserto P",
  "Jogo Fenda / Phillips.jpg": "Outros/Jogo Fenda",
  "Kits de Pontas / Bits.jpg": "Outros/Kits de Pontas",
  "Parabolt / Chumbador.jpg": "Outros/Parabolt",
  "Plasma / Carvão.jpg": "Outros/Plasma",
  "Repuxo / Pop.jpg": "Outros/Repuxo",
  "Rosca Postiça / Suplemento.jpg": "Outros/Rosca Posti\u00e7a",
  "Talhadeiras/Ponteiras.jpg": "Outros/Talhadeiras",
  "image.jpg": "Outros",
};

/**
 * Busca a imagem pelo **nome** exato do produto/categoria.
 * 1. Consulta o dynamicImageMap[nome].
 * 2. Extrai o nome do arquivo.
 * 3. Busca a pasta correta no fileToFolder.
 * 4. Constrói a URL raw do GitHub com pasta + arquivo.
 */
export const getCategoryImage = (nome: string): string | undefined => {
  const mappedPath = dynamicImageMap[nome];
  if (!mappedPath) {
    console.log(`[IMG DEBUG] No mapping for: "${nome}"`);
    return undefined;
  }

  const fileName = mappedPath.replace("/catalogo-pronto/", "");

  // Para itens do tipo "Outros" com subpasta (ex: "Talhadeiras/Ponteiras.jpg")
  // e para itens com "/" no nome do arquivo (ex: "Anilha / Sapatilha.jpg")
  const folder = fileToFolder[fileName];

  if (folder) {
    if (folder.startsWith("Outros/")) {
      // Encode each path segment separately to preserve "/"
      const folderEncoded = folder.split("/").map(encodeURIComponent).join("/");
      
      // "Anilha / Sapatilha.jpg" → file is "Sapatilha.jpg" inside Outros/Anilha
      const parts = fileName.split(" / ");
      if (parts.length === 2) {
        return GITHUB_BASE_URL + folderEncoded + "/" + encodeURIComponent(parts[1]);
      }
      // "Talhadeiras/Ponteiras.jpg" → file is "Ponteiras.jpg" inside Outros/Talhadeiras
      const slashParts = fileName.split("/");
      if (slashParts.length === 2) {
        return GITHUB_BASE_URL + folderEncoded + "/" + encodeURIComponent(slashParts[1]);
      }
    }
    return GITHUB_BASE_URL + encodeURIComponent(folder) + "/" + encodeURIComponent(fileName);
  }

  // Fallback: tenta sem pasta (não deve acontecer se o mapa estiver completo)
  return GITHUB_BASE_URL + encodeURIComponent(fileName);
};
