import { dynamicImageMap } from "./dynamicImageMap";

const GITHUB_BASE_URL =
  "https://raw.githubusercontent.com/Peclat/malemaparafusos/main/Cat%C3%A1logo%20Malema%20Completo/";

/**
 * Busca a imagem pelo **nome** exato do produto/categoria.
 * 1. Consulta o dynamicImageMap[nome].
 * 2. Se encontrar, constrói a URL raw do GitHub.
 * 3. Retorna undefined se não encontrar.
 */
export const getCategoryImage = (nome: string): string | undefined => {
  const mappedPath = dynamicImageMap[nome];
  if (!mappedPath) return undefined;

  // Remove o prefixo "/catalogo-pronto/" e concatena com a URL base do GitHub
  const fileName = mappedPath.replace("/catalogo-pronto/", "");
  return GITHUB_BASE_URL + encodeURIComponent(fileName);
};
