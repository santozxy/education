/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/pages/**/*.tsx", "./src/components/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        primary: "#FFCE1F", // Cor de componentes, ícones, butões, coisas destacáveis.
        secondary: "#2F2F2F", // Cor de fundo ou fonte.
        terciary: "#f5f5f5", // Cor de fonte ou de fundo.
        quaternary: "#000", // Cor de fonte, bordas, sombras.
        sucess: "#47CC1C", // Sucesso
        error: "#D03232", // Erros
        disabled: "#BFBFBF", // Botão quando desabilitado.
        placeHolder: "#AAA"
      },
    },
  },
  plugins: [],
}

