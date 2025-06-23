export enum ErrorType {
  BAD_REQUEST,
  NOT_FOUND,
  CONFLICT,
  SERVER_ERROR,
}

export enum ErrorCode {
  BAD_REQUEST = 40000000,
  NOT_FOUND = 40000004,
  CONFLICT = 40000009,
  SERVER_ERROR = 50000000,
}

export enum ErrorStatusCode {
  BAD_REQUEST = 400,
  NOT_FOUND = 404,
  CONFLICT = 409,
  SERVER_ERROR = 500,
}
