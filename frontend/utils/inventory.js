import { v4 as uuid } from "uuid"

let inventory = [
  {
    categories: ["vegetables"],
    name: "Brinjol",
    price: "1000",
    image: "/products/vege1.png",
    description: "100% Organic with guranteed freshness.",
    brand: "Farm fresh",
    currentInventory: 4,
  },
  {
    categories: ["vegetables"],
    name: "Carrot",
    price: "1000",
    image: "/products/vege2.png",
    description: "100% Organic with guranteed freshness.",
    brand: "Farm fresh",
    currentInventory: 2,
  },
  {
    categories: ["vegetables"],
    name: "Cabbage",
    price: "800",
    image: "/products/vege3.png",
    description: "100% Organic with guranteed freshness.",
    brand: "Farm fresh",
    currentInventory: 8,
  },
  {
    categories: ["vegetables"],
    name: "Green beans",
    price: "900",
    image: "/products/vege4.png",
    description: "100% Organic with guranteed freshness.",
    brand: "Farm fresh",
    currentInventory: 10,
  },
  {
    categories: ["fruits"],
    name: "Avacado",
    price: "1200",
    image: "/products/frut1.png",
    description: "100% Organic with guranteed freshness.",
    brand: "Farm fresh",
    currentInventory: 7,
  },
  {
    categories: ["fruits"],
    name: "Banana",
    price: "500",
    image: "/products/frut2.png",
    description: "100% Organic with guranteed freshness.",
    brand: "Farm fresh",
    currentInventory: 13,
  },
  {
    categories: ["fruits"],
    name: "KC Mango",
    price: "650",
    image: "/products/frut3.png",
    description: "100% Organic with guranteed freshness.",
    brand: "Farm fresh",
    currentInventory: 9,
  },
  {
    categories: ["fruits"],
    name: "Mangoose",
    price: "1230",
    image: "/products/frut4.png",
    description: "100% Organic with guranteed freshness.",
    brand: "Farm fresh",
    currentInventory: 24,
  },

  {
    categories: ["fruits"],
    name: "WoodApple",
    price: "800",
    image: "/products/frut5.png",
    description: "100% Organic with guranteed freshness.",
    brand: "Farm fresh",
    currentInventory: 43,
  },
  {
    categories: ["grocery"],
    name: "Ice-cream Chocolate",
    price: "800",
    image: "/products/groc3.png",
    description: "100% orginal prouduct.",
    brand: "Farm fresh",
    currentInventory: 43,
  },
  {
    categories: ["grocery"],
    name: "Lakspray Milk",
    price: "800",
    image: "/products/groc2.png",
    description: "100% orginal prouduct.",
    brand: "Farm fresh",
    currentInventory: 43,
  },
  {
    categories: ["grocery"],
    name: "Kist Apple nectar",
    price: "800",
    image: "/products/groc5.png",
    description: "100% orginal prouduct.",
    brand: "Farm fresh",
    currentInventory: 43,
  },
  {
    categories: ["grocery"],
    name: "Revello Chocolate",
    price: "800",
    image: "/products/groc4.png",
    description: "100% orginal prouduct.",
    brand: "Farm fresh",
    currentInventory: 43,
  },

  //
]

inventory.map((i) => {
  i.id = uuid()
  return i
})

export default inventory
