const args = process.argv.slice(2);

if (args.length === 0) {
  console.error("Le programme à besoin d'au moins un argument pour fonctionner.");
  process.exit();
}

for (const arg of args) console.log(arg);
