class ApiError extends Error {
    
    
    constructor(
        statuscode,
        message = "Something went wrong",
        error = [],
        stactck = "",
    ) {
        super(message);
        this.statuscode = statuscode;
        this.data = null;
        this.message = message;
        this.error = error;
        this.stactck = stactck;
    }
    if(stactck) {
        this.stack = stactck;
    }
}
