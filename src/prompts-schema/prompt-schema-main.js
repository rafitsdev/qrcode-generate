import chalk from "chalk";

const promptSchemaMain = [
  {
    name: 'select',
    description: chalk.green.bold('\n Escolha a ferramenta:\n 1 - QRCODE \n ou \n 2 - PASSWORD'),
    pattern: /^[1-2]+$/,
    message: chalk.red.italic('Escolha apenas entre 1 e 2'),
    required: true,
  },
];

export default promptSchemaMain;