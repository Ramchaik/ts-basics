import { Product } from "./product.model";

const products = [
  { title: "Book A", price: 10 },
  { title: "Book B", price: 11 },
];

const loadedProducts = products.map((p) => new Product(p.title, p.price));

for (const product of loadedProducts) {
  console.log(product.getInformation());
}
