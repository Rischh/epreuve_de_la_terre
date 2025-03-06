const args = process.argv.splice(2);

if (args.length !== 3) {
  console.error("Le programme a besoin de 3 arguments pour fonctionner.");
  process.exit();
}

let a = args[0];
let b = args[1];
let c = args[2];

if (
  a === "" ||
  b === "" ||
  c === "" ||
  !Number.isInteger(+a) ||
  !Number.isInteger(+b) ||
  !Number.isInteger(+c)
) {
  console.error("Le programme a besoin de 3 entiers.");
  process.exit();
}

a = +a;
b = +b;
c = +c;

if ((a > b && a < c) || (a > c && a < b)) console.log(a);
else if ((b > a && b < c) || (b > c && b < a)) console.log(b);
else console.log(c);
