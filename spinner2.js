const spinnerAnimation = ["\r|   ", "\r/   ", "\r-   ", "\r\\   ", "\r|   "];

const delay = num => {
  for (const char of spinnerAnimation) {
    setTimeout(() => {
      process.stdout.write(char);
    }, num);
    num += 200;
  }
};

delay(0);
