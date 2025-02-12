/*import { Injectable } from '@nestjs/common';

@Injectable()
export class JobsService {}*/

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Job } from './job.schema';

@Injectable()
export class JobsService {
  constructor(@InjectModel(Job.name) private jobModel: Model<Job>) {}

  async getAllJobs(): Promise<Job[]> {
    return this.jobModel.find().exec();
  }

  async getJobById(id: string): Promise<Job> {
    const job = await this.jobModel.findById(id).exec();
    if (!job) {
      throw new NotFoundException(`Job with ID ${id} not found`);
    }
    return job;
  }

  async addJob(data: Partial<Job>): Promise<Job> {
    return new this.jobModel(data).save();
  }

  async updateJob(id: string, data: Partial<Job>): Promise<Job> {
    const updatedJob = await this.jobModel.findByIdAndUpdate(id, data, { new: true }).exec();
    return updatedJob ?? {} as Job; // Return updatedJob or a default Job object
  }

  async deleteJob(id: string): Promise<Job> {
    const deletedJob = await this.jobModel.findByIdAndDelete(id).exec();
    return deletedJob ?? {} as Job; // Return deletedJob or a default Job object
  }
}
