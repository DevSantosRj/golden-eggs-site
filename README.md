# Golden Eggs - Site da Granja de Galinhas Caipiras

Site oficial da Golden Eggs, granja especializada em ovos caipiras frescos e naturais localizada em Divinópolis-MG.

## 🥚 Sobre o Projeto

Este é um site moderno e responsivo desenvolvido em React que apresenta:

- **Página Inicial**: Apresentação da empresa e seus diferenciais
- **Raças**: Informações detalhadas sobre ISA Brown e Novagen Tinted
- **Serviços**: Produção de ovos, venda de galinhas e cama aviária
- **Planos**: Opções de assinatura para clientes finais
- **Contato**: Formulário e informações de localização
- **Sistema de Login**: Para clientes finais e comerciantes

## 🌍 Idiomas Suportados

- 🇧🇷 Português (Brasil)
- 🇺🇸 English (Estados Unidos)
- 🇪🇸 Español (América Latina)

## 🚀 Tecnologias Utilizadas

- **React 18** - Framework principal
- **Vite** - Build tool e dev server
- **Tailwind CSS** - Estilização
- **Lucide React** - Ícones
- **React Router** - Navegação
- **i18next** - Internacionalização

## 📦 Instalação e Execução

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### Passos para executar localmente:

1. Clone o repositório:
```bash
git clone [URL_DO_SEU_REPOSITORIO]
cd golden_eggs_frontend
```

2. Instale as dependências:
```bash
npm install
```

3. Execute em modo de desenvolvimento:
```bash
npm run dev
```

4. Acesse: `http://localhost:5173`

## 🏗️ Build para Produção

```bash
npm run build
```

Os arquivos otimizados serão gerados na pasta `dist/`.

## 🌐 Deploy no GitHub Pages

Este projeto está configurado para deploy automático no GitHub Pages através do GitHub Actions.

### Como fazer o deploy:

1. Faça push para a branch `main`
2. O GitHub Actions irá automaticamente:
   - Instalar dependências
   - Fazer build do projeto
   - Fazer deploy para GitHub Pages

### Configuração necessária:

1. Vá em **Settings** > **Pages** no seu repositório
2. Selecione **Source**: GitHub Actions
3. O site estará disponível em: `https://[seu-usuario].github.io/[nome-do-repositorio]`

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── Header.jsx      # Cabeçalho com navegação
│   ├── Footer.jsx      # Rodapé
│   └── LanguageSelector.jsx # Seletor de idiomas
├── pages/              # Páginas da aplicação
│   ├── Home.jsx        # Página inicial
│   ├── Racas.jsx       # Página das raças
│   ├── Servicos.jsx    # Página de serviços
│   ├── Planos.jsx      # Página de planos
│   ├── Contato.jsx     # Página de contato
│   └── Sobre.jsx       # Página sobre
├── contexts/           # Contextos React
│   ├── AuthContext.jsx # Contexto de autenticação
│   └── LanguageContext.jsx # Contexto de idiomas
├── locales/            # Arquivos de tradução
│   ├── pt-BR.json      # Português
│   ├── en.json         # Inglês
│   └── es-LA.json      # Espanhol
└── App.jsx             # Componente principal
```

## 🎨 Características do Design

- **Cores**: Paleta verde inspirada no campo e agronegócio
- **Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **Acessível**: Seguindo boas práticas de acessibilidade
- **Performance**: Otimizado para carregamento rápido

## 📞 Contato

**Golden Eggs**
- 📍 Zona Rural, Divinópolis - MG
- 📱 (37) 99999-9999
- 📧 contato@goldeneggsrwa.com

---

Desenvolvido com ❤️ para a Golden Eggs

