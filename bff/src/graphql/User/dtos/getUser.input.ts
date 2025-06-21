import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class GetUserArgs {
  @Field(() => String, { nullable: true })
  type?: string;

  @Field(() => String)
  name: string;
}
