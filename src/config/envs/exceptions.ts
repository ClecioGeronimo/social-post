export class ErrorHandler extends Error {
    public statusCode: any;
    public status: string;
    public response: any;
    public errors: any;
    constructor(message, code?, errors?: Array<string>, response?: any) {
        super();
        this.message = message;
        this.statusCode = code || 500;
        this.status = 'error';
        this.errors! = errors;
        this.response! = response;
    }
}