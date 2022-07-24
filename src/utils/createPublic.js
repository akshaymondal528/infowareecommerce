const fs = require("fs");

exports.createPublic = async () => {
    try {
        if (!fs.existsSync('public')) {
            fs.mkdirSync('public', { recursive: true });
        }
    } catch (error) {
        return error;
    }
};