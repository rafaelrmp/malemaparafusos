

## Adicionar botao "Localização" no header + seção de mapa na pagina inicial

### Resumo

Baseado nas imagens enviadas, o usuario quer:
1. Um botao "Localização" no header (nav desktop e mobile), entre "Contato" e "Solicitar Orçamento"
2. Um link "Localização" no footer em "Links Rápidos"
3. Uma seção de localização na pagina inicial com mapa do Google Maps e informações de contato

### Etapas

**1. Adicionar botao "Localização" no Header (`src/components/Header.tsx`)**
- Adicionar `MapPin` ao import do lucide-react
- Inserir um botao/link "Localização" na nav desktop (entre Contato e Solicitar Orçamento) que faz scroll ate a seção de localização ou abre Google Maps
- Mesmo botao no menu mobile
- Estilo: mesmo padrão dos outros nav items, mas com icone MapPin

**2. Adicionar link no Footer (`src/components/Footer.tsx`)**
- Adicionar "Localização" na lista de "Links Rápidos" apontando para a seção na home ou para a pagina de contato

**3. Criar componente LocationSection (`src/components/LocationSection.tsx`)**
- Layout em duas colunas (responsivo: empilha em mobile)
- Coluna esquerda: card com endereco completo, horário de funcionamento (Seg-Sex 08:00-18:00, Sab 08:00-13:00), botao WhatsApp "Falar com Atendente"
- Coluna direita: iframe do Google Maps com coordenadas -23.43852, -47.06042, zoom 16
- Mapa com bordas arredondadas e sombra

**4. Adicionar seção na pagina inicial (`src/pages/Index.tsx`)**
- Inserir `<LocationSection />` antes do CTA final (seção "Pronto para Começar?")
- Seção com id="localizacao" para ancoragem

### Arquivos editados
- `src/components/Header.tsx` - botao Localização na nav
- `src/components/Footer.tsx` - link Localização nos Links Rápidos
- `src/components/LocationSection.tsx` - novo componente
- `src/pages/Index.tsx` - incluir LocationSection

