import { Module } from '@nestjs/common';
//import { AppController } from './app.controller';
//import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { JobsModule } from './jobs/jobs.module';
//import { JobsModule } from './jobs/jobs.module';

/*@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}*/

@Module({
  imports: [
    ConfigModule.forRoot(), // Load environment variables
    MongooseModule.forRoot(process.env.MONGO_URI || 'mongodb://localhost:27017/job-tracker'),     // Connect to MongoDB
    JobsModule, // Import Jobs module
  ],
})
export class AppModule {}
