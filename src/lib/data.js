import { Post, User } from "./models";
import { connectToDb } from "./utils";
import { unstable_noStore as noStore } from "next/cache";

// TEMPORARY DATA
// const users = [
//   { id: 1, name: "John" },
//   { id: 2, name: "Jane" },
// ];

// const posts = [
//   { id: 1, title: "Post 1", body: "Lorem Ipsum", userId: 1 },
//   { id: 2, title: "Post 2", body: "Lorem Ipsum", userId: 1 },
//   { id: 3, title: "Post 3", body: "Lorem Ipsum", userId: 2 },
//   { id: 4, title: "Post 4", body: "Lorem Ipsum", userId: 2 },
// ];

export const getPosts = async () => {
  try {
    connectToDb();
    const posts = await Post.find();
    return posts;
  } catch (error) {
    console.error(
      error + "\nError in fetching posts from the DB, check data.js"
    );
  }
};

export const getPost = async (slug) => {
  try {
    await connectToDb();
    const post = await Post.findOne({ slug });
    return post;
  } catch (error) {
    console.error(
      error + "\nError in fetching a post from the DB, check data.js"
    );
  }
};

export const getUser = async (id) => {
  noStore();
  try {
    await connectToDb();
    const user = await User.findById(id);
    return user;
  } catch (error) {
    console.error(
      error + "\nError in fetching a user from the DB, check data.js"
    );
  }
};

export const getUsers = async () => {
  try {
    await connectToDb();
    const users = await User.find();
    return users;
  } catch (error) {
    console.error(
      error + "\nError in fetching users from the DB, check data.js"
    );
  }
};
