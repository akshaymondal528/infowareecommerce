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
        LOGIN: {
            statuscode: this.STATUS_CODE.OK,
            success: true,
            message: "Admin login successfully!"
        },
        ADD_PRODUCT: {
            statuscode: this.STATUS_CODE.OK,
            success: true,
            message: "Product added successfully!"
        }
    },
    CUSTOMER: {
        REGISTRATION: {
            statuscode: this.STATUS_CODE.OK,
            success: true,
            message: "Customer register successfully!"
        },
        LOGIN: {
            statuscode: this.STATUS_CODE.OK,
            success: true,
            message: "Customer login successfully!"
        },
        GET_CUSTOMER: {
            statuscode: this.STATUS_CODE.OK,
            success: true,
            message: "Customer data!"
        },
        UPDATE_CUSTOMER: {
            statuscode: this.STATUS_CODE.OK,
            success: true,
            message: "Customer update successfully!"
        },
        DELETE_CUSTOMER: {
            statuscode: this.STATUS_CODE.OK,
            success: true,
            message: "Customer deleted successfully!"
        },
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
    UNAUTH: {
        statuscode: this.STATUS_CODE.UNAUTHORISED,
        success: false,
        message: "Invalid token!"
    },
    USERNAME_EXIST: {
        statuscode: this.STATUS_CODE.BADREQUEST,
        success: false,
        message: "Username already exist!"
    },
    EMAIL_EXIST: {
        statuscode: this.STATUS_CODE.BADREQUEST,
        success: false,
        message: "Email already exist!"
    },
    MOBILE_EXIST: {
        statuscode: this.STATUS_CODE.BADREQUEST,
        success: false,
        message: "Mobile number already exist!"
    },
    CONFIRM_PASSWORD_NOT_MATCH: {
        statuscode: this.STATUS_CODE.BADREQUEST,
        success: false,
        message: "Confirm password not match!"
    },
    INVALID_CREDENTIALS: {
        statuscode: this.STATUS_CODE.BADREQUEST,
        success: false,
        message: "Invalid credentials!"
    },
    PRODUCT_NOT_ADD: {
        statuscode: this.STATUS_CODE.BADREQUEST,
        success: false,
        message: "Product did not added!"
    },
    ADMIN: {
        ADMIN_NOT_FOUND: {
            statuscode: this.STATUS_CODE.NOTFOUND,
            success: false,
            message: "Admin not found!"
        },
    },
    CUSTOMER: {
        CUSTOMER_NOT_FOUND: {
            statuscode: this.STATUS_CODE.NOTFOUND,
            success: false,
            message: "Customer not found!"
        },
        CAN_NOT_UPDATE_EMAIL: {
            statuscode: this.STATUS_CODE.BADREQUEST,
            success: false,
            message: "Can not update email!"
        },
        CUSTOMER_NOT_UPDATE: {
            statuscode: this.STATUS_CODE.BADREQUEST,
            success: false,
            message: "Customer not update!"
        }
    }
}