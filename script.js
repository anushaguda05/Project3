document.addEventListener('DOMContentLoaded', () => {
    const jobForm = document.getElementById('jobForm');
    const jobList = document.getElementById('jobList');
    const searchInput = document.getElementById('searchInput');

    let jobs = [];

    // Add a new job
    jobForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const title = document.getElementById('title').value;
        const company = document.getElementById('company').value;
        const location = document.getElementById('location').value;
        const description = document.getElementById('description').value;

        const job = { title, company, location, description };
        jobs.push(job);

        displayJobs(jobs);
        jobForm.reset();
    });

    // Display jobs in the list
    function displayJobs(jobArray) {
        jobList.innerHTML = '';
        jobArray.forEach(job => {
            const jobItem = document.createElement('li');

            jobItem.innerHTML = `
                <p class="job-title">${job.title}</p>
                <p class="job-company">${job.company} - ${job.location}</p>
                <p>${job.description}</p>
            `;

            jobList.appendChild(jobItem);
        });
    }

    // Filter jobs based on search input
    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();
        const filteredJobs = jobs.filter(job => 
            job.title.toLowerCase().includes(query) ||
            job.company.toLowerCase().includes(query) ||
            job.location.toLowerCase().includes(query) ||
            job.description.toLowerCase().includes(query)
        );

        displayJobs(filteredJobs);
    });
});