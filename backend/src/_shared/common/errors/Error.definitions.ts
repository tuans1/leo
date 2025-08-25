export enum ErrorType {
  BAD_REQUEST = 'BAD_REQUEST',
  NOT_FOUND = 'NOT_FOUND',
  CONFLICT = 'CONFLICT',
  SERVER_ERROR = 'SERVER_ERROR',
  SIMPLE = 'SIMPLE',
}

export enum ErrorCode {
  BAD_REQUEST = 40000000,
  NOT_FOUND = 40000004,
  CONFLICT = 40000009,
  SERVER_ERROR = 50000000,
  SIMPLE = 0,
}

export enum ErrorStatusCode {
  BAD_REQUEST = 400,
  NOT_FOUND = 404,
  CONFLICT = 409,
  SERVER_ERROR = 500,
  SIMPLE = 0,
}
