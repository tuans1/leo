/* eslint-disable */
import { Metadata } from "@grpc/grpc-js";
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";
import { Timestamp } from "./google/protobuf/timestamp";

export const protobufPackage = "user";

export interface User {
  username: string;
  email: string;
  avatar: string;
  createdAt: Timestamp | undefined;
  updatedAt: Timestamp | undefined;
  userId: string;
  password: string;
  isActive: boolean;
}

export interface GetListUserRequest {
  keyword: string;
}

export interface GetListUserResponse {
  listUser: User[];
}

export const USER_PACKAGE_NAME = "user";

export interface UserServiceClient {
  getListUser(request: GetListUserRequest, metadata?: Metadata): Observable<GetListUserResponse>;
}

export interface UserServiceController {
  getListUser(
    request: GetListUserRequest,
    metadata?: Metadata,
  ): Promise<GetListUserResponse> | Observable<GetListUserResponse> | GetListUserResponse;
}

export function UserServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["getListUser"];
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
