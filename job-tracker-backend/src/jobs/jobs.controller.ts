/*import { Controller } from '@nestjs/common';

@Controller('jobs')
export class JobsController {}*/

import { Controller, Get, Post, Put, Delete, Body, Param, NotFoundException } from '@nestjs/common';
import { JobsService } from './jobs.service';
import { Job } from './job.schema';

@Controller('jobs')
export class JobsController {
  constructor(private readonly jobsService: JobsService) {}

  @Get()
  getAllJobs(): Promise<Job[]> {
    return this.jobsService.getAllJobs();
  }

  @Get(':id')
  async getJobById(@Param('id') id: string) {
    const job = await this.jobsService.getJobById(id);
    if (!job) {
      throw new NotFoundException(`Job with ID ${id} not found`);
    }
    return job;
  }

  @Post()
  addJob(@Body() data: Partial<Job>): Promise<Job> {
    return this.jobsService.addJob(data);
  }

  @Put(':id')
  updateJob(@Param('id') id: string, @Body() data: Partial<Job>): Promise<Job> {
    return this.jobsService.updateJob(id, data);
  }

  @Delete(':id')
  deleteJob(@Param('id') id: string): Promise<Job> {
    return this.jobsService.deleteJob(id);
  }
}
