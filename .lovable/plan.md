

## Adicionar imagens aos itens de Parafusos

### Mapeamento imagem -> item

| Item | Slug | Imagem |
|------|------|--------|
| Parafuso Frances | `parafuso-frances` | image-9.png |
| Barra Roscada | `barra-roscada` | image-10.png |
| Parafusos Fendados | `parafusos-fendados` | image-11.png |
| Parabolt / Chumbador | `parabolt-chumbador` | image-12.png |
| Parafusos Brocante | `parafusos-brocante` | image-13.png |
| Parafusos Inoxidaveis | `parafusos-inoxidaveis` | image-14.png |
| Rosca Soberba | `rosca-soberba` | image-15.png |

Nota: "parafuso fendados" e "parafuso fendado" sao o mesmo item no catalogo (`parafusos-fendados`), entao 7 imagens para 7 itens finais.

### Etapas

1. Copiar as 7 imagens para `src/assets/catalogo/parafusos/` com nomes correspondentes aos slugs
2. Adicionar imports e mapeamentos em `src/lib/categoryImages.ts` usando o padrao de slug completo `parafusos/parafusos-tipos/[slug]`

### Detalhes tecnicos

**Arquivos criados:**
- `src/assets/catalogo/parafusos/parafuso-frances.jpg`
- `src/assets/catalogo/parafusos/barra-roscada.jpg`
- `src/assets/catalogo/parafusos/parafusos-fendados.jpg`
- `src/assets/catalogo/parafusos/parabolt-chumbador.jpg`
- `src/assets/catalogo/parafusos/parafusos-brocante.jpg`
- `src/assets/catalogo/parafusos/parafusos-inoxidaveis.jpg`
- `src/assets/catalogo/parafusos/rosca-soberba.jpg`

**Arquivo editado:**
- `src/lib/categoryImages.ts` - adicionar 7 imports e 7 entradas no mapeamento

