const multer = require("multer")

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './images')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
})

const upload = multer({ storage: storage })

// const diskStorage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cd (null, './images')
//     },

//     filename: (req, file, cb) => {
//         // const mimeType = file.mimetype.split("/")
//         // const fileType = mimeType[1]
//         const fileName = file.originalname
//         cb(null, fileName)
//     }
// })

// // const fileFilter = (req, file, cb) => {
// //     const allowedMimeTypes = ["image/png", "image/jpeg", "image/jpg"]
// //     allowedMimeTypes.includes(file.mimetype) ? cb(null, true) : cb(null, false)
// // }

// const storage = multer({storage: diskStorage})

module.exports = {upload}