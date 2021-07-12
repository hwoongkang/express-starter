import { RequestHandler } from "express";
import { loadUsers, registerUser } from "../api/users";

export const getUsers: RequestHandler = async (req, res, next) => {
  try {
    const users = await loadUsers();
    return res.json({ success: true, payload: users });
  } catch (err) {
    console.error(err);
    next(err);
  }
};

export const register: RequestHandler = async (req, res, next) => {
  const { name, age } = req.body;
  if (!name || !age) {
    return res.json({
      success: false,
      message: "please send user as json body",
    });
  }

  try {
    const newUser = await registerUser(name, age);
    return res.json({ success: true, payload: newUser });
  } catch (err) {
    next(err);
  }
};
