/* eslint-disable */
import { Metadata } from "@grpc/grpc-js";
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";
import { ErrorResponse } from "./base";
import { User } from "./user";

export const protobufPackage = "auth";

/** LOGIN */
export interface UserAndToken {
  token: string;
  user: User | undefined;
}

export interface LoginResponse {
  isSuccess: boolean;
  error: ErrorResponse | undefined;
  data: UserAndToken | undefined;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export const AUTH_PACKAGE_NAME = "auth";

export interface AuthServiceClient {
  login(request: LoginRequest, metadata?: Metadata): Observable<LoginResponse>;
}

export interface AuthServiceController {
  login(request: LoginRequest, metadata?: Metadata): Promise<LoginResponse> | Observable<LoginResponse> | LoginResponse;
}

export function AuthServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["login"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("AuthService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("AuthService", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const AUTH_SERVICE_NAME = "AuthService";
