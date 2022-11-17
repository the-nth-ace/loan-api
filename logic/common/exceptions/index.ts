export class HttpError extends Error {
  statusCode: number;
  constructor(obj: { msg?: string; statusCode: number }) {
    super(obj.msg);
    this.statusCode = obj.statusCode;
  }
}

// FIXME status codes

export class InternalServerError extends HttpError {
  constructor(msg?: string, statusCode?: number) {
    super({
      msg: msg,
      statusCode: 500,
    });
  }
}

export class ValidationError extends HttpError {
  constructor(msg?: string, statusCode?: number) {
    super({
      msg: msg,
      statusCode: 400,
    });
  }
}

export class UnauthorizedError extends HttpError {
  constructor(msg?: string, statusCode?: number) {
    super({
      msg: msg,
      statusCode: 401,
    });
  }
}

export class NotFoundError extends HttpError {
  constructor(msg?: string, statusCode?: number) {
    super({
      msg: msg || "Resource not found",
      statusCode: 401,
    });
  }
}

export class BadRequestError extends HttpError {
  constructor(msg: string, statusCode?: number) {
    super({
      msg: msg || "Bad Request",
      statusCode: 4001,
    });
  }
}
