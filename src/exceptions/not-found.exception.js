const {HttpCodes} = require("../enums/http-codes.enum");
module.exports = class NotFoundException extends Error {
    status;
    constructor(message) {
        super(message);
        this.status = HttpCodes.NOT_FOUND;
    }
}