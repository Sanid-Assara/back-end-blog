import { DataTypes } from "sequelize";
import sequelize from "../db/index.js";

export const Post = sequelize.define("Post", {
  author: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  cover: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
});

Post.sync();

export default Post;