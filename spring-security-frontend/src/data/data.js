export const Data = {
  addressList: [
    {
      id: 1,
      street: "1000 N. 4th St.",
      zip: 52557,
      city: "FairField",
    },
    {
      id: 2,
      street: "1001 N. 5th St.",
      zip: 52885,
      city: "Sigourney",
    },
  ],
  categoryList: [
    {
      id: 1,
      name: "Laptop",
    },
    {
      id: 2,
      name: "Phone",
    },
  ],
  productList: [
    {
      id: 1,
      name: "Macbook",
      price: 1000,
      rating: 4,
      category: {
        id: 1,
        name: "Laptop",
      },
    },
    {
      id: 2,
      name: "Acer",
      price: 700,
      rating: 5,
      category: {
        id: 1,
        name: "Laptop",
      },
    },
    {
      id: 3,
      name: "Pixel",
      price: 500,
      rating: 5,
      category: {
        id: 2,
        name: "Phone",
      },
    },
    {
      id: 4,
      name: "Samsung",
      price: 300,
      rating: 6,
      category: {
        id: 2,
        name: "Phone",
      },
    },
  ],
};
export default Data;
