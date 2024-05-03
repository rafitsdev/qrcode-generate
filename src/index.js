import prompt from "prompt";
import promptSchemaMain from "./prompts-schema/prompt-schema-main.js";

// Files
import createQRCode from "./services/qr-code/create.js";
import createPassword from "./services/password/create.js";


async function main() {
  prompt.get(promptSchemaMain, async (err, choise) => {
    if (choise.select == 1) await createQRCode();
    if (choise.select == 2) await createPassword();
  });

  prompt.start();
}

main();