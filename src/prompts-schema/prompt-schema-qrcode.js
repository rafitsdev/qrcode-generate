import chalk from "chalk";

const promptSchemaQRCode = [
  {
    name: 'link',
    description: chalk.green.bold('\nDigite o link para gerar o QR Code'),
  },
  {
    name: 'type',
    description: chalk.green('Escolha entre o tipo de QR Code\n 1- NORMAL\n ou\n 2 - TERMINAL'),
    pattern: /^[1-2]+$/,
    message: chalk.red.italic('Escolha apenas entre 1 e 2'),
    required: true
  }
];

export default promptSchemaQRCode;