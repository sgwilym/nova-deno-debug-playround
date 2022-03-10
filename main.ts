import getMessage from "./get_message.ts";

function main(isTrue: boolean) {
  const didPassTrue = isTrue;

  const message = getMessage(didPassTrue);

  console.log(`The first runtime argument passed was: ${Deno.args[0]}`);

  return message;
}

const message = main(true);

console.log(message);
