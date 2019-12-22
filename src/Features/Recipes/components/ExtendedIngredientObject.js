export var ExtendedIngredientObject = {
  aisle: "aisle", //string
  amount: 0, //  number
  consistency: "consistency", // string, god, i want static typing
  id: 0, // number
  image: "image url", // string
  measures: {
    metric: {
      amount: 0, // number
      unitLong: "metric unit long",
      unitShort: "metric unitShort"
    },
    us: {
      amount: 0, // number
      unitLong: "us unit long",
      unitShort: "us unitShort"
    }
  },
  meta: [],
  metaInformation: [],
  name: "extendedIngredient name",
  original: "extendedIngredient orignal",
  originalName: "extendedIngredient Name",
  unit: "extended Ingredient unit (tbsb)"
};
