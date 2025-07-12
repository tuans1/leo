import { ErrorStatusCode, ErrorType } from './Error.definitions';

type Props<TData> = {
  type?: ErrorType;
  statusCode?: ErrorStatusCode;
  description?: string;
  data?: TData;
};

export class Error<TData = any> {
  private readonly _props: Props<TData>;

  private constructor(props: Props<TData>) {
    this._props = props;
  }

  public get type() {
    return this._props.type;
  }

  public get statusCode() {
    return this._props.statusCode;
  }

  public get description() {
    return this._props.description;
  }

  public get data() {
    return this._props.data;
  }

  public static simple<TData = any>(
    description?: string,
    data?: TData,
  ): Error<TData> {
    return new Error<TData>({
      type: ErrorType.SIMPLE,
      statusCode: ErrorStatusCode.SIMPLE,
      description,
      data,
    });
  }

  public static badRequest<TData = any>(
    description?: string,
    data?: TData,
  ): Error<TData> {
    return new Error<TData>({
      type: ErrorType.BAD_REQUEST,
      statusCode: ErrorStatusCode.BAD_REQUEST,
      description,
      data,
    });
  }

  public static conflict<TData = any>(
    description?: string,
    data?: TData,
  ): Error<TData> {
    return new Error<TData>({
      type: ErrorType.CONFLICT,
      statusCode: ErrorStatusCode.CONFLICT,
      description,
      data,
    });
  }

  public static serverError<TData = any>(
    description?: string,
    data?: TData,
  ): Error<TData> {
    return new Error<TData>({
      type: ErrorType.SERVER_ERROR,
      statusCode: ErrorStatusCode.SERVER_ERROR,
      description,
      data,
    });
  }

  public static notFound<TData = any>(
    description?: string,
    data?: TData,
  ): Error<TData> {
    return new Error<TData>({
      type: ErrorType.NOT_FOUND,
      statusCode: ErrorStatusCode.NOT_FOUND,
      description,
      data,
    });
  }
}
