export enum ErrorType {
  BadRequest,
  NotFound,
  Conflict,
  ServerError,
  RateLimit,
}

export enum ErrorCode {
  BadRequest = 40000000,
  NotFound = 40000004,
  Conflict = 40000009,
  ServerError = 50000000,
  TooManyRequest = 42900000,
}

export enum ErrorStatusCode {
  BadRequest = 400,
  NotFound = 404,
  Conflict = 409,
  ServerError = 500,
  TooManyRequest = 429,
}
