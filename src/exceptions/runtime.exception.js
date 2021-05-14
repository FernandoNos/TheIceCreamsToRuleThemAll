const {HttpCodes} = require("../enums/http-codes.enum");
module.exports = class RuntimeException extends Error {
    constructor(status = HttpCodes.INTERNAL_SERVER_ERROR, message) {
        super(message);
        this.status = status;
    }
}