const spinner2 = () => {
  const spin = ["|", "/", "-", "\\"];
  let index = 0;

  for (let i = 100; i <= 1700; i += 200) {
    setTimeout(() => {
      process.stdout.write(`\r${spin[index]}   `);
      if (index === 3) {
        index = 0;
      } else {
        index += 1;
      }
    }, i);
  }
};

spinner2();