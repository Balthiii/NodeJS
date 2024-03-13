import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.render("addproduct", {});
});

export default router;
