import { plainToClass } from "class-transformer";
import "reflect-metadata";
import { Product } from "./product.model";

const products = [
  { title: "Book A", price: 10 },
  { title: "Book B", price: 11 },
];

// const loadedProducts: Product[] = products.map(
//   (p) => new Product(p.title, p.price)
// );
const loadedProducts: Product[] = plainToClass(Product, products);

for (const product of loadedProducts) {
  console.log(product.getInformation());
}
