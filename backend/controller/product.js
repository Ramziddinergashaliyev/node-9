import { Products, validateProduct } from "../models/productSchema.js";

class ProductsController {
  async get(req, res) {
    try {
      const products = await Products.find()
        .populate([{ path: "userId", select: ["fname", "username"] }])
        .sort({ createdAt: -1 });
      if (!products) {
        return res.status(400).json({
          msg: "Product is not defined",
          variant: "error",
          payload: null,
        });
      }
      res.status(200).json({
        msg: "All Products",
        variant: "success",
        payload: products,
      });
    } catch {
      res.status(500).json({
        msg: "Server error",
        variant: "error",
        payload: null,
      });
    }
  }

  async create(req, res) {
    try {
      const urls = req.files.map(
        (i) => `${req.protocol}://${req.get("host")}/upload/${i.filename}`
      );
      let newProduct = { ...req.body, userId: req.user._id, urls };
      const { error } = validateProduct(newProduct);
      if (error) {
        return res.status(400).json({
          msg: error.details[0].message,
          variant: "warning",
          payload: null,
        });
      }
      const product = await Products.create(newProduct);
      return res.status(201).json({
        msg: "Product is created",
        variant: "success",
        payload: product,
      });
    } catch {
      return res.status(500).json({
        msg: "Server error",
        variant: "error",
        payload: null,
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      await Products.findByIdAndDelete(id);
      res.status(201).json({
        msg: "product is deleted",
        variant: "success",
        payload: null,
      });
    } catch {
      res.status(500).json({
        msg: "server error",
        variant: "error",
        payload: null,
      });
    }
  }
}

export default new ProductsController();
