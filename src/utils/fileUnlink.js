const fs = require("fs");

exports.fileUnlik = async (path) => {
    try {
        path = `public${path}`;
        if (fs.existsSync(path)) {
            fs.unlinkSync(path);
        }
    } catch (error) {
        return error;
    }
};
