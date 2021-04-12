import { validate } from "class-validator";
import { Product } from "./product.model";

const p = new Product("", -10);
validate(p).then((errors) => {
  if (errors.length > 0) {
    console.log("Validation Errors!");
    console.log(errors);
    return;
  }

  console.log(p.getInformation());
});
