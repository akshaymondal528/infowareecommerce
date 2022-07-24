// global imports
const multer = require("multer");
const fs = require("fs");

const storage = (uploadDir) => {
    return multer.diskStorage({
        destination: function (req, file, cb) {
            if (!req.body.typename) req.body.typename = uploadDir
            let dir = `public/${req.body.typename}`;
            if (!fs.existsSync(dir)) {
                fs.mkdirSync(dir, { recursive: true });
            }
            cb(null, dir);
        },
        filename: function (req, file, cb) {
            let extension = file.originalname.split(".").pop();
            let filename = `${Date.now()}.${extension}`;
            cb(null, filename);
        },
    });
}

exports.upload = (uploadDir) => {
    return multer({
        storage: storage(uploadDir),
        fileFilter: (req, file, cb) => {
            cb(null, true);
        },
    });
}
