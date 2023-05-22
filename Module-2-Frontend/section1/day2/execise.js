// função que gera um número aleatório
const generateRandomNumber = () => Math.round(Math.random() * 10);

// promise resolvida retornando o número aleatório
const resolvedPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = generateRandomNumber();
      if (randomNumber % 2 === 0) {
        resolve(randomNumber);
      } else {
        reject(new Error('Invalid number'));
      }
    }, 3000);
  });

resolvedPromise()
    .then((response) => { console.log(`the number generate is ${response}`); })
    .catch((error) => { console.log(`Reject promisse: ${error.message}`); });
