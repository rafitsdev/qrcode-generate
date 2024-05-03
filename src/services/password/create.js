import chalk from "chalk";
import handler from "./handler.js";

async function createPassword() {
  console.log(chalk.green('\npassword:'));
  const password = await handler();
  console.log(`\n${password}`);
}

export default createPassword;