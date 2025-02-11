"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { api } from "../app/utils/api";

// Define the Job interface
interface Job {
  id: string;
  title: string;
  company: string;
  status: string;
}

const JobList = () => {
  // Specify the type of the jobs state as an array of Job objects
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    api.get("/jobs")
      .then((res) => setJobs(res.data))
      .catch((err) => console.error("Error fetching jobs:", err));
  }, []);

  return (
    <div>
      <h1>Job Tracker</h1>
      <Link href="/jobs/create">
        <button>Add New Job</button>
      </Link>
      {jobs.length > 0 ? (
        jobs.map((job) => (
          <div key={job.id}>
            <h2>{job.title}</h2>
            <p>{job.company} - {job.status}</p>
            <Link href={`/jobs/${job.id}`}>
              <button>View Details</button>
            </Link>
          </div>
        ))
      ) : (
        <p>No jobs found</p>
      )}
    </div>
  );
};

export default JobList;