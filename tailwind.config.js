/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/pages/**/*.tsx", "./src/components/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        primary: "#8962D4",// Cor de componentes, ícones, butões, coisas destacáveis.
        secondary: "#2F2F2F", // Cor de fundo ou fonte.
        terciary: "#f8f8f8", // Cor de fonte ou de fundo.
        quaternary: "#1d1d1d", // Cor de fonte, bordas, sombras.
        sucess: "#47CC1C", // Sucesso
        error: "#D03232", // Erros
        disabled: "#BFBFBF", // Botão quando desabilitado.
        placeHolder: "#656464",
        btnHover: "#6c4aa1"
      },
    },
  },
  plugins: [],
}

