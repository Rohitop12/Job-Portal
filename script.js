document.addEventListener("DOMContentLoaded", function () {
    const jobsList = document.getElementById("jobs-list");
    
    // Sample data for jobs
    const jobsData = [
      { title: "Web Developer", company: "ABC Inc.", location: "New York" },
      { title: "Graphic Designer", company: "XYZ Corp.", location: "Los Angeles" },
      { title: "Marketing Specialist", company: "123 Enterprises", location: "Chicago" }
    ];
  
    // Function to display jobs
    function displayJobs() {
      jobsList.innerHTML = "";
      jobsData.forEach(job => {
        const li = document.createElement("li");
        li.textContent = `${job.title} at ${job.company} (${job.location})`;
        jobsList.appendChild(li);
      });
    }
  
    // Display initial jobs
    displayJobs();
  
    // Form submission event listener
    const applyForm = document.getElementById("apply-form");
    applyForm.addEventListener("submit", function (event) {
      event.preventDefault();
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const resume = document.getElementById("resume").files[0];
      
      // Logic for handling form submission (e.g., sending data to server)
      console.log("Name:", name);
      console.log("Email:", email);
      console.log("Resume:", resume);
      
      // Reset form fields after submission
      applyForm.reset();
    });
  });
  