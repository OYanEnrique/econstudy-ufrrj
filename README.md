# 📊 EconStudy - Guia Interativo de Economia UFRRJ

<div align="center">

![Status](https://img.shields.io/badge/Status-Ativo-success)
![Versão](https://img.shields.io/badge/Versão-1.0.0-blue)
![Licença](https://img.shields.io/badge/Licença-MIT-green)

**Plataforma web interativa para estudo de História Econômica Geral e Macroeconomia 1**

[🚀 Ver Demo](https://oyanenrique.github.io/econstudy-ufrrj/) | [📖 Documentação](#sobre-o-projeto) | [👨‍💻 Desenvolvedor](https://linkedin.com/in/yanenrique)

</div>

---

## 📋 Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [O Problema e a Solução](#o-problema-e-a-solução)
- [Funcionalidades](#funcionalidades)
- [Design e UX](#design-e-ux)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Como Usar](#como-usar)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Roadmap](#roadmap)
- [Contribuições](#contribuições)
- [Desenvolvedor](#desenvolvedor)
- [Licença](#licença)

---

## 🎯 Sobre o Projeto

**EconStudy** é uma aplicação web desenvolvida para auxiliar estudantes do curso de Economia da **Universidade Federal Rural do Rio de Janeiro (UFRRJ)** na preparação para provas de **História Econômica Geral** e **Macroeconomia 1**.

O projeto nasceu da necessidade de organizar e tornar mais acessível o vasto conteúdo dessas disciplinas pra todos os alunos. Todo o material foi originado a partir de **anotações feitas à mão durante as aulas**, que posteriormente foram digitadas em arquivos de texto (.txt) e, finalmente, estruturadas em formato JSON para uso na aplicação web. Esse processo de transformação permitiu criar uma base de conhecimento pesquisável, organizada e sempre disponível.

### 🎓 Contexto Acadêmico

- **Instituição:** UFRRJ - Universidade Federal Rural do Rio de Janeiro
- **Curso:** Bacharelado em Ciências Econômicas
- **Disciplinas:** 
  - História Econômica Geral
  - Macroeconomia 1
- **Objetivo:** Facilitar o estudo e revisão de conceitos fundamentais
- **Origem do Conteúdo:** Anotações do caderno → TXT → JSON estruturado

---

## 💡 O Problema e a Solução

### 🔴 O Problema

Estudantes de Economia enfrentam diversos desafios durante a preparação para provas:

1. **Volume de conteúdo extenso** - Centenas de conceitos, teorias e definições para memorizar
2. **Informação dispersa** - Notas de aula, livros, PDFs e materiais em diferentes formatos
3. **Dificuldade de revisão rápida** - Impossível reler todo o material antes da prova
4. **Falta de organização** - Conceitos importantes se perdem em meio a textos longos
5. **Conexão entre tópicos** - Difícil visualizar relações entre História Econômica e Macroeconomia

### ✅ A Solução

O **EconStudy** resolve esses problemas através de:

- **📚 Centralização** - Todos os conceitos importantes em um único lugar
- **🔍 Busca inteligente** - Encontre qualquer conceito em segundos
- **🏷️ Organização por tags** - Navegação intuitiva por temas relacionados
- **📱 Acesso multiplataforma** - Estude no celular, tablet ou computador
- **🖨️ Versão para impressão** - Gere resumos físicos quando necessário
- **⚡ Revisão rápida** - Cards objetivos com as informações essenciais

---

## 📝 Processo de Criação do Conteúdo

O desenvolvimento da base de dados seguiu um processo acadêmico autêntico:

### 1. **📖 Anotações em Aula**
Durante as aulas de História Econômica Geral e Macroeconomia 1, os conceitos foram anotados à mão no caderno, organizando ideias, definições e relações entre tópicos.

### 2. **⌨️ Digitalização em TXT**
As anotações manuscritas foram digitadas em arquivos de texto (disponíveis em `data/*.txt`), preservando a estrutura original e adicionando detalhes para maior clareza.

### 3. **🔄 Estruturação em JSON**
Os arquivos TXT foram transformados em um banco de dados JSON estruturado, com campos organizados:
- `materia`: Disciplina do conceito
- `topico`: Tema relacionado
- `conceito`: Nome do conceito
- `definicao`: Explicação completa
- `relevancia`: Importância para as provas
- `tags`: Palavras-chave para busca

### 4. **💻 Desenvolvimento da Aplicação**
Com a base de dados pronta, foi desenvolvida a interface web para tornar o material acessível, pesquisável e visualmente organizado.

Esse processo garantiu que o conteúdo fosse **autêntico**, **personalizado** e **alinhado** com o que realmente é ensinado nas disciplinas da UFRRJ.

---

## ✨ Funcionalidades

### 🔍 Busca e Filtros

- **Busca em tempo real** por conceitos, definições, tópicos ou tags
- **Filtros por matéria** (História Econômica ou Macroeconomia)
- **Indicadores de relevância** (alta ⭐ ou média 📌)
- **Busca inteligente** que pesquisa em todos os campos simultaneamente

### 📊 Organização do Conteúdo

- **30+ conceitos fundamentais** catalogados e estruturados
- **Cards informativos** com:
  - Nome do conceito
  - Tópico relacionado
  - Definição completa
  - Tags para navegação
  - Indicação de matéria
  - Nível de relevância
- **Estatísticas em tempo real** mostrando número de resultados

### 📱 Responsividade Total

- **Desktop** (1200px+) - Layout em grid com 3-4 colunas
- **Tablet** (900px - 1199px) - Layout adaptado com 2 colunas
- **Mobile** (até 899px) - Layout de coluna única otimizado
- **Impressão** - Versão clean sem elementos de navegação

### 🎨 Interface Intuitiva

- Design minimalista e profissional
- Navegação clara e objetiva
- Feedback visual em todas as interações
- Acessibilidade com ARIA labels

---

## 🎨 Design e UX

### 🧠 Design Thinking

O desenvolvimento seguiu as etapas do Design Thinking:

#### 1. **Empatia**
- Análise das dificuldades reais de estudantes de economia
- Identificação de pain points no processo de estudo

#### 2. **Definição**
- Problema central: **"Como facilitar a revisão de conceitos econômicos?"**
- Público-alvo: Estudantes de Economia da UFRRJ

#### 3. **Ideação**
- Brainstorming de soluções digitais
- Decisão por uma aplicação web simples e acessível

#### 4. **Prototipagem**
- Criação de wireframes minimalistas
- Estruturação da base de dados em JSON

#### 5. **Teste**
- Validação com conteúdo real das disciplinas
- Ajustes na busca e nos filtros

### 🎨 Escolha de Cores

A paleta de cores foi cuidadosamente selecionada para transmitir **profissionalismo acadêmico** e facilitar a **leitura prolongada**:

```css
--primary-color: #2c5f7c     /* Azul Acadêmico */
--secondary-color: #1a3a4f   /* Azul Escuro */
--accent-color: #f4a261      /* Laranja Suave */
--text-primary: #1a1a1a      /* Cinza Escuro */
--bg-primary: #ffffff        /* Branco Puro */
--bg-secondary: #f8f9fa      /* Cinza Muito Claro */
```

> 💡 **Nota:** O ícone do projeto (logo e favicon) foi criado utilizando o **Google Gemini**, seguindo fielmente a mesma paleta de cores para manter a consistência visual e identidade da marca.

#### 🔵 Azul Acadêmico (`#2c5f7c`)
- **Significado:** Confiança, conhecimento, seriedade
- **Uso:** Títulos, botões primários, elementos de destaque
- **Psicologia:** Estimula concentração e aprendizado

#### 🟠 Laranja Suave (`#f4a261`)
- **Significado:** Energia, entusiasmo, criatividade
- **Uso:** Badges, elementos de destaque, hover states
- **Psicologia:** Mantém o usuário engajado sem cansar a visão

#### ⚪ Branco e Cinza Claro
- **Significado:** Clareza, simplicidade, minimalismo
- **Uso:** Backgrounds, espaçamento, respiração visual
- **Psicologia:** Reduz fadiga visual durante estudo prolongado

### 🖥️ Princípios de UX Aplicados

#### 1. **Clareza Visual**
- Hierarquia tipográfica bem definida
- Espaçamento generoso entre elementos
- Contraste adequado para leitura confortável

#### 2. **Feedback Imediato**
- Hover states em todos os elementos interativos
- Transições suaves (0.3s)
- Indicadores visuais de estado ativo

#### 3. **Consistência**
- Padrão de design unificado em todos os componentes
- Nomenclatura consistente (conceito, tópico, definição)
- Estrutura de cards padronizada

#### 4. **Acessibilidade**
- Labels ARIA para leitores de tela
- Contraste WCAG AA em todos os textos
- Navegação por teclado funcional

#### 5. **Performance**
- Carregamento assíncrono de dados
- Renderização eficiente com JavaScript vanilla
- CSS otimizado sem dependências externas

### 📐 Layout e Hierarquia

```
┌─────────────────────────────────────┐
│         HEADER (Sticky)             │
│  Logo + Busca + Filtros             │
├─────────────────────────────────────┤
│         MAIN CONTENT                │
│  ┌─────────┐ ┌─────────┐            │
│  │ Card 1  │ │ Card 2  │            │
│  └─────────┘ └─────────┘            │
│  ┌─────────┐ ┌─────────┐            │
│  │ Card 3  │ │ Card 4  │            │
│  └─────────┘ └─────────┘            │
├─────────────────────────────────────┤
│         FOOTER                      │
│  Info + Links                       │
└─────────────────────────────────────┘
```

---

## 🛠️ Tecnologias Utilizadas

### Frontend

- **HTML5** - Estrutura semântica e acessível
- **CSS3** - Estilização moderna com Grid, Flexbox e variáveis CSS
- **JavaScript (ES6+)** - Lógica de busca, filtros e renderização dinâmica

### 🤖 Inteligência Artificial

- **Google Gemini** - Utilizado como assistente fundamental no desenvolvimento do CSS e JavaScript do projeto
  - **Estilização avançada**: Auxiliou na criação de um design responsivo e profissional, com componentes modernos e acessíveis
  - **Lógica de programação**: Contribuiu no desenvolvimento das funcionalidades de busca, filtros e renderização dinâmica
  - **Otimizações**: Sugeriu melhorias de performance e boas práticas de código
  - **Resolução de problemas**: Apoiou na depuração e refinamento da experiência do usuário
  
O Gemini foi essencial para acelerar o desenvolvimento e garantir qualidade no código, especialmente na implementação de recursos como o menu hambúrguer mobile e o sistema de busca inteligente.
- **JSON** - Estruturação da base de dados

### Conceitos Aplicados

- **Responsividade** com Mobile-First
- **Progressive Enhancement**
- **Semantic HTML**
- **CSS Variables** para temas
- **Async/Await** para requisições
- **DOM Manipulation** eficiente
- **Event Handling** otimizado

### Ferramentas de Desenvolvimento

- **VS Code** - Editor de código
- **Git** - Controle de versão
- **GitHub** - Hospedagem e versionamento

---

## 🚀 Como Usar

### 📥 Instalação

1. **Clone o repositório:**
```bash
git clone https://github.com/OYanEnrique/econstudy-ufrrj.git
```

2. **Entre na pasta do projeto:**
```bash
cd econstudy-ufrrj
```

3. **Inicie um servidor local:**

**Opção 1 - Python:**
```bash
python -m http.server 8000
```

**Opção 2 - Node.js:**
```bash
npx http-server -p 8000
```

**Opção 3 - PHP:**
```bash
php -S localhost:8000
```

4. **Acesse no navegador:**
```
http://localhost:8000
```

> ⚠️ **Importante:** É necessário usar um servidor local devido às políticas CORS do navegador ao fazer requisições `fetch` de arquivos JSON.

### 💻 Uso da Aplicação

#### 🔍 Buscar Conceitos
1. Digite o termo no campo de busca
2. Pressione **Enter** ou clique em **"🔍 Buscar"**
3. Os resultados aparecem instantaneamente

#### 🏷️ Filtrar por Matéria
- Clique em **"Todas"** para ver todos os conceitos
- Clique em **"História Econômica"** para ver apenas conceitos dessa matéria
- Clique em **"Macroeconomia 1"** para ver apenas conceitos dessa matéria

#### 🧹 Limpar Filtros
- Clique em **"Limpar"** para resetar busca e filtros

#### 🖨️ Imprimir Conteúdo
1. Use **Ctrl+P** (Windows/Linux) ou **Cmd+P** (Mac)
2. A página será formatada automaticamente para impressão
3. Elementos de navegação serão ocultados

---

### 📂 Estrutura do Projeto

```
econstudy-ufrrj/
│
├── index.html                      # Página principal
├── README.md                       # Documentação completa
│
├── assets/                         # Recursos do projeto
│   ├── css/
│   │   ├── style.css              # Estilos principais
│   │   └── print.css              # Estilos para impressão
│   │
│   ├── js/
│   │   └── script.js              # Lógica da aplicação
│   │
│   └── images/
│       └── icon.png               # Ícone do projeto (logo e favicon)
│
└── data/
    ├── conceitos.json             # Base de dados estruturada (30+ conceitos)
    ├── História econômica geral.txt  # Fonte: anotações digitalizadas
    └── Macroeconomia.txt          # Fonte: anotações digitalizadas
```

### 📄 Arquivos Principais

- **`index.html`** - Estrutura HTML semântica com header, main e footer
- **`assets/css/style.css`** - 400+ linhas de CSS responsivo com variáveis e media queries
- **`assets/css/print.css`** - Estilos específicos para impressão limpa
- **`assets/js/script.js`** - 200+ linhas de JavaScript vanilla para toda a lógica
- **`data/conceitos.json`** - 30+ conceitos estruturados originados de anotações do caderno
- **`assets/images/icon.png`** - Ícone utilizado como logo e favicon

---

## 🗺️ Roadmap

### ✅ Versão 1.0 (Atual)
- [x] Base de dados com 30+ conceitos
- [x] Sistema de busca funcional
- [x] Filtros por matéria
- [x] Design responsivo (mobile, tablet, desktop)
- [x] Versão para impressão
- [x] README profissional

### 🔜 Versão 1.1 (Próxima)
- [ ] Expandir base de dados para 60+ conceitos
- [ ] Sistema de favoritos (localStorage)
- [ ] Modo escuro
- [ ] Filtros por tags
- [ ] Ordenação (alfabética, relevância)

### 🚀 Versão 2.0 (Futuro)
- [ ] Sistema de flashcards
- [ ] Quiz interativo
- [ ] Gráfico de progresso de estudos
- [ ] PWA (Progressive Web App)
- [ ] Exportação em PDF

---

## 🤝 Contribuições

Contribuições são sempre bem-vindas! Se você é um entusiasta ou estudante de Economia da UFRRJ e quer adicionar mais conceitos:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/NovoConceito`)
3. Edite o arquivo `conceitos.json` seguindo a estrutura existente
4. Faça commit das mudanças (`git commit -m 'Adiciona conceito de...'`)
5. Push para a branch (`git push origin feature/NovoConceito`)
6. Abra um Pull Request

---

## 👨‍💻 Desenvolvedor

<div align="center">

### Yan Enrique

**Estudante de Economia | Analista de Dados | Desenvolvedor Web**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/yanenrique)
[![Portfolio](https://img.shields.io/badge/Portfolio-FF5722?style=for-the-badge&logo=google-chrome&logoColor=white)](https://yanenrique.carrd.co/)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/OYanEnrique)

</div>

---

## 🎓 Créditos

Este projeto foi desenvolvido durante a **10ª Imersão Dev com Google Gemini** da [Alura](https://www.alura.com.br/), aplicando os conhecimentos de HTML, CSS, JavaScript e IA adquiridos no programa.

**Agradecimentos especiais:**
- Alura - Pela imersão de qualidade
- UFRRJ - Pelo conteúdo das disciplinas
- Comunidade Dev - Pelo apoio e inspiração

---

## 📜 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

```
MIT License

Copyright (c) 2025 Yan Enrique

É concedida permissão, gratuitamente, a qualquer pessoa que obtenha uma cópia
deste software e arquivos de documentação associados, para usar, copiar, 
modificar, mesclar, publicar, distribuir e/ou vender cópias do Software.
```

---

## 📞 Contato

Dúvidas, sugestões ou feedback? Entre em contato:

- 📧 Email: [através do LinkedIn](https://linkedin.com/in/yanenrique)
- 💼 LinkedIn: [linkedin.com/in/yanenrique](https://linkedin.com/in/yanenrique)
- 🌐 Website: [yanenrique.carrd.co](https://yanenrique.carrd.co/)

---

<div align="center">

**⭐ Se este projeto te ajudou nos estudos, considere dar uma estrela!**

Desenvolvido com 💙 e ☕ por Yan Enrique

</div>