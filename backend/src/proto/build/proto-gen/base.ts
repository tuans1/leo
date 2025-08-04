/* eslint-disable */
import { Any } from "./google/protobuf/any";

export const protobufPackage = "base";

export interface ErrorResponse {
  type?: string | undefined;
  statusCode?: string | undefined;
  description?: string | undefined;
  data?: Any | undefined;
}

export const BASE_PACKAGE_NAME = "base";
