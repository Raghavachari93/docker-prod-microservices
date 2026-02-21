const mongoose = require("mongoose");

const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI)
  .then(() => console.log("Worker connected to MongoDB"));

const Job = mongoose.model("Job", { task: String });

setInterval(async () => {
  const jobs = await Job.find();
  console.log("Worker processing jobs:", jobs.length);
}, 5000);

