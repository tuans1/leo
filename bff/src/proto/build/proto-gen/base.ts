/* eslint-disable */
import { Any } from "./google/protobuf/any";

export interface ErrorResponse {
  type?: string | undefined;
  statusCode?: string | undefined;
  description?: string | undefined;
  data?: Any | undefined;
}
