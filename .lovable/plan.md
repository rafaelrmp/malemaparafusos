
## Plano: Usar Imagens do Catálogo na Seção "Nossos Produtos" da Página Inicial

### Problema Identificado

Na página inicial (Index.tsx), os cards de categorias na seção "Nossos Produtos" estão exibindo apenas **ícones**, enquanto na página do Catálogo as mesmas categorias exibem as **imagens** que foram geradas.

**Causa:** A página Index não está passando a prop `imagem` para o componente `CategoryCard`.

| Página | Código atual | Resultado |
|--------|-------------|-----------|
| Catálogo | `imagem={getCategoryImage(categoria.slug)}` | Mostra imagem |
| Index | Sem prop `imagem` | Mostra apenas ícone |

---

### Solução

Modificar `src/pages/Index.tsx` para importar e usar a função `getCategoryImage()` do arquivo de mapeamento de imagens.

---

### Alterações Necessárias

**Arquivo:** `src/pages/Index.tsx`

1. **Adicionar import** da função `getCategoryImage`:

```typescript
import { getCategoryImage } from "@/lib/categoryImages";
```

2. **Passar a prop `imagem`** para o CategoryCard:

```typescript
{categorias.map((categoria) => (
  <CategoryCard
    key={categoria.id}
    nome={categoria.nome}
    descricao={categoria.descricao || `Produtos da categoria ${categoria.nome}`}
    icon={categoria.icon}
    slug={categoria.slug}
    imagem={getCategoryImage(categoria.slug)}
  />
))}
```

---

### Resultado Esperado

Após a alteração, a seção "Nossos Produtos" na página inicial exibirá as mesmas imagens das categorias que aparecem na página do Catálogo:

- PARAFUSOS → imagem de parafusos
- FERRAMENTAS → imagem de ferramentas
- ABRAÇADEIRAS → imagem de abraçadeiras
- etc.

As imagens serão exibidas no círculo arredondado (80x80px) que atualmente mostra os ícones.
