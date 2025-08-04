import { Catch, ExceptionFilter } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Error } from 'src/shared/common/errors/Error';
import { Result } from 'src/shared/common/Result';

@Catch()
export class GrpcCatchEverythingFilter implements ExceptionFilter {
  catch(): Observable<any> {
    const result = Result.fail(Error.serverError());
    console.log('🚀 ~ GrpcCatchEverythingFilter ~ catch ~ result:', result);

    return new Observable((subscriber) => {
      subscriber.next({
        isSuccess: false,
        error: 'TEST',
        data: result.data,
      });
      subscriber.complete();
    });
  }
}
