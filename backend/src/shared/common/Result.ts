import { Error } from './errors/Error';

type Props<TData, TError> = {
  isSuccess: boolean;
  data?: TData;
  error?: TError;
};

export class Result<TData = any, TError = Error> {
  private readonly _props: Props<TData, TError>;

  private constructor(props: Props<TData, TError>) {
    this._props = props;
  }

  public get data() {
    return this._props.data;
  }
  public get error() {
    return this._props.error;
  }
  public get isSuccess() {
    return this._props.isSuccess;
  }
  public get isFail() {
    return !this._props.isSuccess;
  }

  public static success<TData, TError>(data: TData) {
    return new Result<TData, TError>({
      isSuccess: true,
      data,
      error: undefined,
    });
  }

  public static error<TData, TError>(error: TError) {
    return new Result<TData, TError>({
      isSuccess: false,
      data: undefined,
      error,
    });
  }
}
