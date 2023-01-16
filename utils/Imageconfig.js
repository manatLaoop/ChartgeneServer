const multer = require('multer');
const fs = require('fs');
const path = require('path');

module.exports = {
    imageconfig: {
        storage: multer.diskStorage({
            destination: function (req, file, next) {
                const folder = path.join(__dirname, '../upload/image');

                if (!fs.existsSync(folder)) {
                    fs.mkdirSync(folder)
                    console.log();
                }
                console.log(folder);
                next(null, folder)
            },

            filename: function (req, file, next) {                
                const ext = file.mimetype.split('/')[1]
                const imagename = `${file.fieldname}-${Date.now()}.${ext}`;
                next(null, imagename)
            },
            limits: { fieldSize: 1024 * 1024 * 5 },
            fileFilter: (req, file, next) => {
                const image = file.mimetype.startsWith('image/')
                if (image) {
                    next(null, true)
                } else {
                    next({ message: "image is not false" }, false)
                }
            }
        })
    },
    keyUpload: "Photo"
}