export default function getMessage(isTrue: boolean) {
  if (isTrue) {
    console.log("Psst... it was true!");
    return "Hi, it's true!";
  }

  return "Hi, it's false.";
}
