"use server";
import { signIn, signOut } from "./auth";
import { User } from "./models";
import { connectToDb } from "./utils";

export const handleGithubLogin = async () => {
  "use server";
  await signIn("github");
};

export const handleLogout = async () => {
  "use server";
  await signOut();
};

export const register = async () => {
  const { username, email, password, passwordRepeat, img } = formData;

  if (password !== passwordRepeat) {
    return "Passwords do not match.";
  }

  try {
    connectToDb();
    
    const user = await User.findOne({username});

    if (user) {
      return "User already exists.";
    }

    const newUser = new User({
      username,
      email,
      password,
      img,
    });
    await newUser.save();
    console.log("saved to DB");
  } catch (error) {
    console.log(error);
    return { error: "Couldnt save to DB" };
  }
};
