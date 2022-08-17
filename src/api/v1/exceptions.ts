export class HttpNoContentError extends Error {
    public statusCode: number
    public status: number
    constructor() {
        super();
        this.message = null;
        this.statusCode = 204;
    }
}

export class HttpNotFoundError extends Error {
    public statusCode: number
    public status: number
    constructor() {
        super();
        this.message = "No data available for this request";
        this.statusCode = 404;
    }
}

export class HttpUnprocessedEntityError extends Error {
    public statusCode: number
    public status: number
    public errors: Array<string>;
    constructor(message: string, errors?: Array<string>) {
        super();
        this.message = message;
        this.statusCode = 422;
        this.errors! = errors;
    }
}