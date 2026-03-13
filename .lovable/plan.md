

## Usar favicon como imagem de preview do WhatsApp

### Problema
As meta tags `og:image` e `twitter:image` apontam para `https://lovable.dev/opengraph-image-p98pqg.png`, mostrando o ícone do Lovable ao compartilhar.

### Solução
Atualizar `index.html` para usar o `favicon.png` já existente no projeto como imagem de Open Graph. A URL precisa ser absoluta, então usaremos a URL do site publicado.

### Alteração
**`index.html`** — linhas 14 e 17-18:
- `og:image` → `https://malemaparafusos.lovable.app/favicon.png`
- `twitter:image` → `https://malemaparafusos.lovable.app/favicon.png`
- Remover `twitter:site` do Lovable

### Observação
O favicon funciona como preview, mas imagens de OG ideais são 1200x630px. O favicon sendo menor pode aparecer pequeno em alguns apps. Se quiser uma imagem maior no futuro, basta enviar uma arte personalizada.

