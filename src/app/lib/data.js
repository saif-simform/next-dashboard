import { Product, User } from "./models";
import { connectToDB } from "./utils";
import { ITEM_PER_PAGE } from "./config";

export const getUsers = async (query, page) => {
  const regex = new RegExp(query, "i");

  try {
    connectToDB();

    const count = await User.find({ username: { $regex: regex } }).count();
    const users = await User.find({ username: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { users, count };
  } catch (error) {
    console.log(error);
    throw new Error("Failed to get users!");
  }
};

export const getProducts = async (query, page) => {
  const regex = new RegExp(query, "i");

  try {
    connectToDB();

    const count = await Product.find({ title: { $regex: regex } }).count();
    const products = await Product.find({ title: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { products, count };
  } catch (error) {
    console.log(error);
    throw new Error("Failed to get products!");
  }
};

export const getUserById = async (id) => {
  try {
    connectToDB();

    const user = await User.findById(id);
    return user;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to get user!");
  }
};

export const getProductById = async (id) => {
  try {
    connectToDB();

    const product = await Product.findById(id);
    return product;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to get product!");
  }
};
