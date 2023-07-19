
import { Field, InputType } from "type-graphql";
@InputType()
export class CreateAppointmenteInput{
    @Field()
    customerId: string;
    @Field()
    startsAt: Date;
    @Field()
    endsAt: Date;
}