const { Book, User } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (!context.user) {
        throw new Error("Please loggin to view");
      }

      const user = context.user;

      const foundUser = await User.findOne({
        _id: user._id,
      });

      if (!foundUser) {
        throw new Error("User not found!");
      }

      return foundUser;
    },
  },

  Mutation: {
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email: email });

      if (!user) {
        throw new Error("No user found matching that email");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new Error("password is incorrect");
      }

      const token = signToken(user);

      return { token, user };
    },

    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });

      if (!user) {
        throw new Error("oops! something went wrong!");
      }

      const token = signToken(user);

      return { token, user };
    },

    saveBook: async (
      parent,
      { authors, description, title, image, link, bookId },
      context
    ) => {
      const user = context.user;
     
      const payload = { authors, description, title, image, link, bookId };
      try {
        const updatedUser = await User.findOneAndUpdate(
          { _id: user._id },
          { $addToSet: { savedBooks: payload } },
          { new: true, runValidators: true }
        );

        return updatedUser;
      } catch (err) {
        throw new Error(err);
      }
    },

    removeBook: async (parent, { bookId }, context) => {
      const user = await context.user;

      const updatedUser = await User.findOneAndUpdate(
        { _id: user._id },
        { $pull: { savedBooks: { _id: bookId } } },
        { new: true }
      );
      if (!updatedUser) {
        return res
          .status(404)
          .json({ message: "Couldn't find user with this id!" });
      }
      return res.json(updatedUser);
    },
  },
};

module.exports = resolvers;
