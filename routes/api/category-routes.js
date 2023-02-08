const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", async (req, res) => {
  try {
    const categoryData = await Category.findAll({
      include: [{ model: Product }],
    });
    res.json(categoryData);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const categoryData = await Category.findOne({
      where: { id: req.params.id },
      include: [{ model: Product }],      
    });
    res.json(categoryData);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post("/", async (req, res) => {
  // create a new category
  try {
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
});

router.put("/:id", (req, res) => {
  // update a category by its `id` value
  try {
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }       
});

router.delete("/:id", async (req, res) => {
  // delete a category by its `id` value
  try {
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
});

module.exports = router;
