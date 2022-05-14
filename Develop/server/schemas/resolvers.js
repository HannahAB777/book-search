const { Book, User } = require('../models');
const {signToken} = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
        if(!context.user){
          throw new Error("Please loggin to view");
        }

        const user = context.user;

        const foundUser = await User.findOne({
          _id: user._id,
        });

        if(!foundUser){
          throw new Error ("User not found!");
        }

        return foundUser;
    },
   
  },


  Mutation: {
    login: async (parent, args, context) =>{

    }

    addUser: async (parent, args, context) =>{

    },

    saveBook: async (parent, args, context) =>{

    },

    removeBook: async (parent, args, context) =>{

    },

  
  },
};

module.exports = resolvers;
