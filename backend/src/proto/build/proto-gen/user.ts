/* eslint-disable */
import { Metadata } from "@grpc/grpc-js";
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";
import { ErrorResponse } from "./base";

export const protobufPackage = "user";

/** GET LIST USER */
export interface GetListUserRequest {
  keyword: string;
}

export interface GetListUserResponse {
  isSuccess: boolean;
  error: ErrorResponse | undefined;
  data: User[];
}

/** CREATE USER */
export interface CreateUserRequest {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface CreateUserResponse {
  isSuccess: boolean;
  error: ErrorResponse | undefined;
  data: User | undefined;
}

export interface User {
  fullName: string;
  email: string;
  avatar?: string | undefined;
  createdAt: number;
  updatedAt: number;
  userId: string;
  password: string;
  isActive: boolean;
}

export const USER_PACKAGE_NAME = "user";

export interface UserServiceClient {
  getListUser(request: GetListUserRequest, metadata?: Metadata): Observable<GetListUserResponse>;

  createUser(request: CreateUserRequest, metadata?: Metadata): Observable<CreateUserResponse>;
}

export interface UserServiceController {
  getListUser(
    request: GetListUserRequest,
    metadata?: Metadata,
  ): Promise<GetListUserResponse> | Observable<GetListUserResponse> | GetListUserResponse;

  createUser(
    request: CreateUserRequest,
    metadata?: Metadata,
  ): Promise<CreateUserResponse> | Observable<CreateUserResponse> | CreateUserResponse;
}

export function UserServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["getListUser", "createUser"];
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
