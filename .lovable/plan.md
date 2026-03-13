

## Corrigir mapa do Google Maps na seção de Localização

### Problema
O iframe do Google Maps está usando coordenadas genéricas que não mostram o pin correto da "Malema Comércio de Parafusos e Ferramentas".

### Solução
Atualizar a URL do iframe em `src/components/LocationSection.tsx` para usar o modo `place` do Google Maps Embed, buscando diretamente pelo nome do estabelecimento:

```
https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3660.0!2d-47.06042!3d-23.43852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf5a0e4b5c7d3b%3A0x...!2sMalema+Com%C3%A9rcio+de+Parafusos+e+Ferramentas!5e0!3m2!1spt-BR!2sbr
```

Ou, de forma mais confiável, usar o modo `search` com o nome do negócio:

```
https://www.google.com/maps/embed/v1/place?key=...&q=Malema+Comércio+de+Parafusos+e+Ferramentas+Araçariguama+SP
```

Como a API de embed com chave requer API key, a melhor alternativa gratuita é usar a URL de embed padrão buscando pelo nome do negócio:

```
https://maps.google.com/maps?q=Malema+Comércio+de+Parafusos+e+Ferramentas+Araçariguama+SP&t=&z=16&ie=UTF8&iwloc=&output=embed
```

### Arquivo editado
- `src/components/LocationSection.tsx` — trocar apenas a URL `src` do iframe (linha ~71)

