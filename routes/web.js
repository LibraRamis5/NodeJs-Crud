const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController.js");

// router.get('/', (req, res) => {
//     res.send('Hello World!!! yes');
//   });

router.get('/', postController.getData);
router.post('/insert', postController.insert);
router.get('/edit/:id', postController.edit);
router.post('/update/:id', postController.update);
router.post('/delete/:id', postController.delete);

module.exports = router;