import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Job extends Document {
  @Prop({ required: true })
  company: string;

  @Prop({ required: true })
  position: string;

  @Prop({ enum: ['Applied', 'Interview', 'Rejected', 'Offer'], default: 'Applied' })
  status: string;

  @Prop()
  notes: string;

  @Prop({ type: Date, default: Date.now })
  dateApplied: Date;
}

export const JobSchema = SchemaFactory.createForClass(Job);
