import { Query, Mutation, Arg, FieldResolver, Root, Resolver } from "type-graphql";
import {CreateAppointmenteInput} from "../dtos/inputs/create-appoitmente-input";
import { Appointment } from "../dtos/models/appointmente-models";
import { Customer } from "../dtos/models/customer-model";


@Resolver(()=> Appointment)
export class AppointmentResolver{
    @Query(()=> [Appointment])
    async appointmente(){
        return [
            {
                startsAt: new Date(),
                endsAt: new Date()
            }
        ];
    }

    @Mutation(() => Appointment)
    async createAppointment(@Arg('data')data: CreateAppointmenteInput){

       const appointment =  {
        startsAt: data.startsAt,
        endsAt: data.endsAt,
       }
       return appointment;
    }

    @FieldResolver(()=> Customer)
    async customer(@Root()appointment: Appointment){
        return{
            name: 'David'
        }
    }

}