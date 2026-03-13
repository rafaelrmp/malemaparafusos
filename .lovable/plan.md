

## Adicionar imagens aos itens de Parafuso Allen

### Mapeamento imagem -> item

| Item | Slug completo | Imagem |
|------|---------------|--------|
| Parafuso Allen Cabeca Chata | `parafusos/parafusos-tipos/parafuso-allen/allen-cabeca-chata` | image-16.png |
| Parafuso Allen Cilindrica MM | `parafusos/parafusos-tipos/parafuso-allen/allen-cilindrica-mm` | image-17.png |
| Parafuso Allen Cilindrica Polegada | `parafusos/parafusos-tipos/parafuso-allen/allen-cilindrica-polegada` | image-18.png |
| Parafuso Allen Sem Cabeca | `parafusos/parafusos-tipos/parafuso-allen/allen-sem-cabeca` | image-19.png |

### Etapas

1. Copiar as 4 imagens para `src/assets/catalogo/parafusos/` com nomes correspondentes aos slugs
2. Adicionar imports e mapeamentos em `src/lib/categoryImages.ts`

### Detalhes tecnicos

**Arquivos criados:**
- `src/assets/catalogo/parafusos/allen-cabeca-chata.jpg`
- `src/assets/catalogo/parafusos/allen-cilindrica-mm.jpg`
- `src/assets/catalogo/parafusos/allen-cilindrica-polegada.jpg`
- `src/assets/catalogo/parafusos/allen-sem-cabeca.jpg`

**Arquivo editado:**
- `src/lib/categoryImages.ts` - adicionar 4 imports e 4 entradas no mapeamento com o caminho completo `parafusos/parafusos-tipos/parafuso-allen/[slug]`

