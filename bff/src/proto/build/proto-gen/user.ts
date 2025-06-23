/* eslint-disable */
import { Metadata } from "@grpc/grpc-js";
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";

export const protobufPackage = "user";

export interface User {
  name: string;
  email: string;
  avatar: string;
  userCreatedDt: string;
  id: string;
}

export interface UserRequest {
  keyword: string;
}

export interface UserResponse {
  user: User[];
}

export const USER_PACKAGE_NAME = "user";

export interface UserServiceClient {
  getUser(request: UserRequest, metadata?: Metadata): Observable<UserResponse>;
}

export interface UserServiceController {
  getUser(request: UserRequest, metadata?: Metadata): Promise<UserResponse> | Observable<UserResponse> | UserResponse;
}

export function UserServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["getUser"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("UserService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("UserService", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const USER_SERVICE_NAME = "UserService";
