

## Padronizar imagens das subcategorias como icones compactos

### Problema
As imagens dos itens finais (como as arruelas individuais) estao sendo exibidas em tamanho grande (`aspect-square`, ocupando toda a largura do card). O usuario quer que todas as subcategorias usem o mesmo layout compacto com icone pequeno ao lado do nome, como ja acontece com as subcategorias que tem filhos (ex: "Arruelas - 9 itens").

### Solucao
Alterar a renderizacao dos **itens finais** (sem filhos) no `Catalogo.tsx` para usar o mesmo layout de card compacto com imagem pequena (60x60 ou 80x80px) ao lado do texto, em vez do layout com imagem grande em `aspect-square`.

### Alteracao no arquivo `src/pages/Catalogo.tsx`

Substituir o bloco de renderizacao dos itens finais (linhas ~175-200) que usa `aspect-square` por um layout horizontal compacto similar ao das subcategorias com filhos:

- Imagem pequena `w-16 h-16` com `rounded-lg` e fundo escuro
- Nome do item ao lado da imagem
- Icone do WhatsApp mantido
- Remover o `aspect-square` e o `CardHeader` separado

O resultado visual sera um card horizontal compacto com a imagem como icone, identico ao exemplo fornecido pelo usuario.

