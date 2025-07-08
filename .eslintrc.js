module.exports = {
  env: {
    browser: true,       // Permite globals de navegador (window, document)
    es2021: true         // Habilita sintaxe ES2021
  },
  extends: [
    'eslint:recommended',               // Regras recomendadas do ESLint
    'plugin:react/recommended',         // Recomendações para React
    'plugin:jsx-a11y/recommended',      // Acessibilidade em JSX
    'plugin:import/errors',             // Verificação de importações
    'plugin:import/warnings',
    'plugin:import/react',
    'prettier'                          // Desativa regras conflitantes com Prettier
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true                         // Habilita parsing de JSX
    },
    ecmaVersion: 12,                    // Permite sintaxe moderna
    sourceType: 'module'                // Suporte a imports/exports
  },
  plugins: [
    'react', 
    'react-hooks', 
    'jsx-a11y', 
    'import', 
    'prettier'
  ],
  rules: {
    'prettier/prettier': 'error',       // Trata erros do Prettier como ESLint error
    'react/prop-types': 'off'           // Desativa checagem de propTypes (opcional)
  },
  settings: {
    react: {
      version: 'detect'                 // Detecta automaticamente a versão do React
    }
  }
};