const items = ["Milk", "Egg", "", "Cheese"];
const enclose = function (tag, item) {
  return `<${tag}>${item}</${tag}>`;
};
const html = enclose(
  "ul",
  items
    .filter((i) => i.trim() !== "")
    .map((i) => enclose("li", i))
    .join("")
);
console.log(html);

const numbers = [1, 2, -3, -4, 9, -0];
const count = numbers.filter((i) => i < 0).length;
console.log(count);
