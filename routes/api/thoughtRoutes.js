const router = require('express').Router();
const {
  getthoughts,
  getSinglethought,
  createthought,
  updatethought,
  deletethought,
} = require('../../controllers/thoughtController.js');

// /api/thoughts
router.route('/').get(getthoughts).post(createthought);

// /api/thoughts/:thoughtId
router
  .route('/:thoughtId')
  .get(getSinglethought)
  .put(updatethought)
  .delete(deletethought);

module.exports = router;
