import { ResolverMap } from "../../types/ResolverType";
import { Ingredient } from "../../entity/Ingredient";

const resolver: ResolverMap = {
  Query: {
    ingredient: (_, { id }) => Ingredient.findOne(id),
    ingredients: () => Ingredient.find(),
  },
  Mutation: {
    addIngredient: async (_, args) =>  await Ingredient.create(args).save(),
    updateIngredient: async (_, {id, ...args}) => {
      let ingredient = null;
      
      try {
        ingredient = await Ingredient.update(id, args);
      } catch (err) {
        return null;
      }

      return ingredient;
    },
    deleteIngredient: async (_, { id }) => {
      try {
        Ingredient.delete(id);
      } catch (err) {
        return false;
      }

      return true;
    }
  },
};

export default resolver;
