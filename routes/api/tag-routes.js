const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint





router.get("/", async (req, res) => {
    try {
      const tagData = await Tag.findAll({
        include: [{ model: Product }],       
      });
      res.json(tagData);
    } catch (error) {
      console.log(error);
      res.status(400).json(error);
    }
    // * find all tags
    // * be sure to include its associated Product data
});

router.get('/:id', async (req, res) => {
  try {
    const tagData = await Tag.findOne({
      where: { id: req.params.id },
      include: [{ model: Product }],
    })
    res.json(tagData);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
  // * find a single tag by its `id`
  // * be sure to include its associated Product data
});

router.post('/', async (req, res) => {
  try {
    const tagData = await Tag.create({ tag_name: req.body.tag_name
    })
    res.json(tagData)

  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
  // * create a new tag
});

router.put('/:id', async (req, res) => {
  try {
    const tagData = await Tag.findOne({ where: { id: req.params.id},
    });
    await tagData.update({ tag_name: req.body.tag_name})
    res.json(tagData);

  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }// * update a tag's name by its `id` value
});

router.delete('/:id', async (req, res) => {
  try {
    await Tag.destroy({
      where: { id: req.params.id },
    })
    res.status(204).send('');  

  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }// delete on tag by its `id` value
});

module.exports = router;
