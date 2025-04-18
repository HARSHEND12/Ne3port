// Set event listeners for buttons
document.getElementById("aboutMe").addEventListener("click", function() {
    updateContent("About Me", "Hi, I am Harshendu. I have a passion for technology and science, always curious to learn new things. I enjoy working on projects that involve innovation and creativity.");
  });
  
  document.getElementById("projects").addEventListener("click", function() {
    updateContent("Projects", "Currently, I am Studying in AKTU and pursuing B_TECH in C.S .In the past, I have completed various tech projects, including building web applications and learning new languages like I have alredy learnt python basics and HTML+CSS+Js and now now  i have more plans ready to work on.... .");
  });
  
  document.getElementById("hobbies").addEventListener("click", function() {
    updateContent("Hobbies", "Some of my hobbies include reading science fiction, experimenting with electronics, coding, and spending time with my German Shepherd.");
  });
  
  document.getElementById("contactInfo").addEventListener("click", function() {
    updateContent("Contact Info", "You can reach me at: <br>Email: hgiri1957@gmail.com <br>Phone: **********");
  });
  
  // Function to dynamically update the content area
  function updateContent(title, description) {
    document.getElementById("content").innerHTML = `
      <h2>${title}</h2>
      <p>${description}</p>
    `;
  }
  