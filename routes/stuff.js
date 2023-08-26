const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth')
const multer = require('../middleware/multer-config')

const stuffCtrl = require('../controllers/stuff');


router.get('/', auth, stuffCtrl.getAllStuff); // La on sur simplifie avec les données déja traitée sur controllers s
router.post('/', auth, multer, stuffCtrl.createThing); // Il est important que le auth soit en deuxieme sinon comme le code se lit de droite a gauche alors les routes qui ont besoin d'authentification ne serviron a rien 
router.get('/:id', auth, stuffCtrl.getOneThing);
router.put('/:id', auth, stuffCtrl.modifyThing);
router.delete('/:id', auth, stuffCtrl.deleteThing);

module.exports = router;