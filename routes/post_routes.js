const express = require('express');
const router = express.Router();
const {
	getAllPosts,
	getPostById,
	makePost,
	removePost,
	changePost,
} = require('../controllers/posts_controller');

router.get('/', getAllPosts);

router.get('/:id', getPostById);

module.exports = router;
