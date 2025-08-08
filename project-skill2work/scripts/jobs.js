const jobs = [
  { "jobtitle": "Frontend Developer", "location": "Berlin, Germany", "type": "Full-time", "category": "Technology & Development" },
  { "jobtitle": "Backend Engineer", "location": "Toronto, Canada", "type": "Full-time", "category": "Technology & Development" },
  { "jobtitle": "Mobile App Developer", "location": "Nairobi, Kenya", "type": "Full-time", "category": "Technology & Development" },
  { "jobtitle": "Data Scientist", "location": "London, United Kingdom", "type": "Full-time", "category": "Technology & Development" },
  { "jobtitle": "Cybersecurity Analyst", "location": "Austin, USA", "type": "Full-time", "category": "Technology & Development" },
  { "jobtitle": "DevOps Engineer", "location": "Sydney, Australia", "type": "Full-time", "category": "Technology & Development" },
  { "jobtitle": "QA Automation Tester", "location": "Bangalore, India", "type": "Part-time", "category": "Technology & Development" },
  { "jobtitle": "Graphic Designer", "location": "Amsterdam, Netherlands", "type": "Full-time", "category": "Creative & Design" },
  { "jobtitle": "UI/UX Designer", "location": "Paris, France", "type": "Full-time", "category": "Creative & Design" },
  { "jobtitle": "Video Editor", "location": "Los Angeles, USA", "type": "Part-time", "category": "Creative & Design" },
  { "jobtitle": "Content Creator", "location": "Cape Town, South Africa", "type": "Full-time", "category": "Creative & Design" },
  { "jobtitle": "Illustrator", "location": "Tokyo, Japan", "type": "Part-time", "category": "Creative & Design" },
  { "jobtitle": "Digital Marketing Specialist", "location": "New York, USA", "type": "Full-time", "category": "Marketing & Sales" },
  { "jobtitle": "SEO Analyst", "location": "Madrid, Spain", "type": "Full-time", "category": "Marketing & Sales" },
  { "jobtitle": "Affiliate Marketing Manager", "location": "Rome, Italy", "type": "Part-time", "category": "Marketing & Sales" },
  { "jobtitle": "Sales Executive", "location": "Singapore, Singapore", "type": "Full-time", "category": "Marketing & Sales" },
  { "jobtitle": "Product Marketing Manager", "location": "Stockholm, Sweden", "type": "Full-time", "category": "Marketing & Sales" },
  { "jobtitle": "Technical Writer", "location": "Dublin, Ireland", "type": "Full-time", "category": "Writing & Communication" },
  { "jobtitle": "Blogger", "location": "Lisbon, Portugal", "type": "Part-time", "category": "Writing & Communication" },
  { "jobtitle": "Editor", "location": "Vancouver, Canada", "type": "Full-time", "category": "Writing & Communication" },
  { "jobtitle": "Translator", "location": "Zurich, Switzerland", "type": "Part-time", "category": "Writing & Communication" },
  { "jobtitle": "Customer Service Representative", "location": "Mexico City, Mexico", "type": "Full-time", "category": "Customer & Client Support" },
  { "jobtitle": "Technical Support Specialist", "location": "Manila, Philippines", "type": "Full-time", "category": "Customer & Client Support" },
  { "jobtitle": "Client Success Manager", "location": "Melbourne, Australia", "type": "Full-time", "category": "Customer & Client Support" },
  { "jobtitle": "Community Manager", "location": "Lagos, Nigeria", "type": "Part-time", "category": "Customer & Client Support" },
  { "jobtitle": "Project Manager", "location": "Helsinki, Finland", "type": "Full-time", "category": "Business & Operations" },
  { "jobtitle": "Operations Manager", "location": "Oslo, Norway", "type": "Full-time", "category": "Business & Operations" },
  { "jobtitle": "HR Specialist", "location": "Brussels, Belgium", "type": "Part-time", "category": "Business & Operations" },
  { "jobtitle": "Virtual Assistant", "location": "Kuala Lumpur, Malaysia", "type": "Full-time", "category": "Business & Operations" },
  { "jobtitle": "Executive Assistant", "location": "Warsaw, Poland", "type": "Part-time", "category": "Business & Operations" },
  { "jobtitle": "Accountant", "location": "Chicago, USA", "type": "Full-time", "category": "Finance & Legal" },
  { "jobtitle": "Financial Analyst", "location": "Vienna, Austria", "type": "Full-time", "category": "Finance & Legal" },
  { "jobtitle": "Tax Consultant", "location": "Auckland, New Zealand", "type": "Part-time", "category": "Finance & Legal" },
  { "jobtitle": "Online Tutor", "location": "Athens, Greece", "type": "Part-time", "category": "Education & Training" },
  { "jobtitle": "Course Developer", "location": "Cairo, Egypt", "type": "Full-time", "category": "Education & Training" },
  { "jobtitle": "Instructional Designer", "location": "Seoul, South Korea", "type": "Full-time", "category": "Education & Training" },
  { "jobtitle": "Corporate Trainer", "location": "Bangkok, Thailand", "type": "Full-time", "category": "Education & Training" },
  { "jobtitle": "Legal Consultant", "location": "Abu Dhabi, UAE", "type": "Full-time", "category": "Finance & Legal" }
];

const jobcategories = [
  "Technology & Development",
  "Creative & Design",
  "Marketing & Sales",
  "Writing & Communication",
  "Customer & Client Support",
  "Business & Operations",
  "Finance & Legal",
  "Education & Training"
];

const createjobcard = (job) => `<div class="job-card">
    <div class="job-banner">
        &#x1F4BC;
    </div>
    <div>
        <p class='bold'>${job.jobtitle}</p>
        <p class='highlight'>&#x1F4CD; ${job.location}</p>
        <p class='italic'>${job.type}</p>
        <span class='job-category'>${job.category}</span>
    </div>
</div>`;

const generatejobslistingtemplate = (jobs) => jobs.map(course => createjobcard(course)).join('');
document.querySelector('#jobs-listing').innerHTML = generatejobslistingtemplate(jobs);

const jobcategoryoptions = jobcategories.map(jobcategory => `<option value='${jobcategory}'>${jobcategory}</option>`).join('');
document.querySelector('#jobcategory').insertAdjacentHTML('beforeend', jobcategoryoptions);;

document.querySelector('#jobfilter').addEventListener('submit', (event) => {
  event.preventDefault();
  const filteredjobs = jobs.filter(job => job.category === document.querySelector('#jobcategory').value);
  document.querySelector('#jobcount').innerHTML = `${filteredjobs.length} jobs`;
  document.querySelector('#jobs-listing').innerHTML = generatejobslistingtemplate(filteredjobs);
});
