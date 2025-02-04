const arguments = process.argv.slice(2);

if (arguments.length === 0) {
  console.error(
    "Le programme à besoin d'au moins un argument pour fonctionner."
  );
  process.exit();
}

for (const arg of arguments) console.log(arg);
