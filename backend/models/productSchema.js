import { Schema, model } from "mongoose";
import Joi from "joi";

const productSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    oldPrice: {
      type: Number,
      required: false,
      default: 0,
    },
    info: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: false,
      default: 0,
    },
    urls: {
      type: Array,
      required: false,
      default: [""],
    },
    available: {
      type: Boolean,
      required: true,
    },
    stock: {
      type: Number,
      required: false,
      default: 0,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

export const Products = model("product", productSchema);

export const validateProduct = (body) => {
  const schema = Joi.object({
    title: Joi.string().required(),
    desc: Joi.string().required(),
    price: Joi.number().required(),
    oldPrice: Joi.number().allow(0),
    info: Joi.string().required(),
    category: Joi.string().required(),
    rating: Joi.number().allow(0),
    urls: Joi.array(),
    available: Joi.boolean().required(),
    stock: Joi.number().allow(0),
    userId: Joi.string(),
  });
  return schema.validate(body);
};
