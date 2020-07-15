// Function to send email from website to gmail via emailjsn with promise/tests
function sendMail(contactForm) {
    emailjs.send("gmail", "template_ILtxQsXF", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.email.value,
        "clientversion": contactForm.my_version.value
    })
    .then( 
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page when "Share" is clicked
}