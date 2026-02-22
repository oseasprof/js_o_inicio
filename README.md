# js_o_inicio

Uma aplicação interativa de desenho amigável para iniciantes, construída com p5.js. Clique e arraste seu mouse para desenhar retângulos azuis em uma tela.

## 📋 Visão Geral

**js_o_inicio** (JavaScript - O Início) é um projeto simples mas envolvente de programação visual que demonstra conceitos básicos de JavaScript combinados com a biblioteca p5.js para programação criativa. Perfeito para quem está começando sua jornada no desenvolvimento web e gráficos interativos.

## 🎨 Características

- **Tela Interativa**: Uma superfície de desenho de 800x400 pixels
- **Desenho Controlado pelo Mouse**: Crie retângulos pressionando e movimentando seu mouse
- **Simples e Limpo**: Código mínimo, máximo aprendizado
- **Powered by p5.js**: Aproveita a biblioteca p5.js para programação criativa

## 🚀 Começando

### Pré-requisitos

Nenhuma instalação necessária! Este projeto é executado diretamente em seu navegador web.

### Instalação

1. Clone este repositório:
   ```bash
   git clone https://github.com/oseasprof/js_o_inicio.git
   cd js_o_inicio
   ```

2. Abra o arquivo `index.html` em seu navegador web

3. Pronto! Comece a desenhar clicando e arrastando seu mouse na tela.

## 📚 Como Funciona

### Componentes Principais

**index.html**
- Estrutura HTML com importações da biblioteca p5.js
- Links para arquivos de estilo e scripts JavaScript externos

**sketch.js**
- `setup()`: Inicializa uma tela branca (800×400 pixels) com um cabeçalho de instrução
- `draw()`: Executa continuamente para verificar a entrada do mouse
- Cria retângulos azuis (20×10 pixels) onde quer que seu mouse seja pressionado

**style.css**
- Remove margens e preenchimento padrão do HTML
- Garante que a tela seja exibida corretamente como um elemento bloco

## 🎮 Como Usar

1. Abra a aplicação em seu navegador
2. Você verá a mensagem: **"Pressione o mouse para gerar uma saída!"**
3. Clique e arraste seu mouse na tela para desenhar
4. Veja os retângulos azuis aparecendo seguindo seu cursor

## 📖 Objetivos de Aprendizagem

Este projeto ensina:
- Configuração básica de p5.js e funções de desenho
- Manipulação de eventos com `mouseIsPressed`
- Sistema de coordenadas de tela
- Integração de HTML/CSS/JavaScript
- Fundamentos de programação criativa

## 📝 Destaques do Código

```javascript
// Verifica se o mouse está pressionado e desenha retângulos
if (mouseIsPressed) {
  rect(mouseX, mouseY, 20, 10);
}
```

Este simples condicional demonstra manipulação de entrada em tempo real em programação criativa.

## 🔧 Tecnologias Utilizadas

- **HTML5**: Estrutura e marcação
- **CSS3**: Estilo e layout
- **JavaScript**: Lógica de programação
- **p5.js**: Biblioteca de programação criativa (v1.9.1)
- **p5.sound**: Capacidades de áudio (incluído)

## 📄 Licença

Este trabalho está licenciado sob a [Licença CC BY 4.0](https://creativecommons.org/licenses/by/4.0/?ref=chooser-v1).

## 🤝 Contribuindo

Sinta-se livre para fazer um fork deste projeto e experimentar! Aqui estão algumas ideias:
- Alterar cores ou tamanhos de retângulos
- Adicionar diferentes formas (círculos, linhas, triângulos)
- Implementar seletor de cores
- Adicionar controles de teclado
- Implementar funcionalidade de desfazer/limpar

## 💡 Melhorias Futuras

- [ ] Seletor de paleta de cores
- [ ] Ajuste de tamanho do pincel
- [ ] Salvar desenho como imagem
- [ ] Diferentes formas de desenho
- [ ] Atalhos de teclado para ferramentas

---

**Feliz Codificação!** 🎨✨