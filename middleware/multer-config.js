const multer = require('multer')


// Constante dictionnaire de type MIME pour résoudre l'extension de fichier appropriée
const MIMES_TYPES = {
    'image/jpg': 'jpg',
    'image/jpeg': 'jpg',
    'image/png': 'png'
}

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'images') // Indique à multer d'enregistrer les fichiers dans le dossier images
    },
    filename: (req, file, callback) => {
        const name = file.originalname.split(' ').join('_');
        const extension = MIMES_TYPES[file.mimetype]
        callback(null, name + Date.now() + '.' + extension) //indique à multer d'utiliser le nom d'origine, de remplacer les espaces par des underscores et d'ajouter un timestamp Date.now()
    }
})

module.exports = multer({ storage }).single('image'); //lui passons notre constante storage et lui indiquons que nous gérerons uniquement les téléchargements de fichiers image.