setTimeout(() => console.log("Goodbye"), 10000);

function sayLater(text, when) {
  const task = () => console.log(text);
  setTimeout(task, when);
}

sayLater("hello", 5000);
