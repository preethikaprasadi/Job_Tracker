import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Job, JobSchema } from './job.schema';
import { JobsService } from './jobs.service';
import { JobsController } from './jobs.controller';

/*@Module({
  providers: [JobsService],
  controllers: [JobsController]
})
export class JobsModule {} */

@Module({
  imports: [MongooseModule.forFeature([{ name: Job.name, schema: JobSchema }])],
  controllers: [JobsController],
  providers: [JobsService],
})
export class JobsModule {}
