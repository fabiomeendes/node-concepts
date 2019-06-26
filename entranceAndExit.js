const anonymous = process.argv.indexOf('-a') !== -1;
console.log(anonymous, 'anonymous');

if (anonymous) {
  process.stdout.write('Talk anonymous!\n');
  process.exit();
} else {
  process.stdout.write('Enter your name: ');

  process.stdin.on('data', (data) => {
    const name = data.toString().replace('\n', '');
    process.stdout.write(`Talk ${name}\n`);
    process.exit();
  });
}
