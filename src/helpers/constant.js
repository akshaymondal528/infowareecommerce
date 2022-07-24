exports.STATUS_CODE = {
    OK: 200,
    INTERNAL_SERVER_ERROR: 500,
    UNAUTHORISED: 401,
    BADREQUEST: 400,
    NOTFOUND: 404
};

exports.SUCCESS = {
    ADMIN: {
        REGISTRATION: {
            statuscode: this.STATUS_CODE.OK,
            success: true,
            message: "Admin register successfully!"
        },
    },
    CUSTOMER: {
        REGISTRATION: {
            statuscode: this.STATUS_CODE.OK,
            success: true,
            message: "Customer register successfully!"
        }
    }
};

exports.ERROR = {
    INTERNAL_SERVER_ERROR: {
        statuscode: this.STATUS_CODE.INTERNAL_SERVER_ERROR,
        success: false,
        message: "Internal server error!"
    },
    PAGE_NOT_FOUND: {
        statuscode: this.STATUS_CODE.NOTFOUND,
        success: false,
        message: "Page not found!"
    },
}