// code fragment
var data = {
    service_id: 'gmail',
    template_id: 'template_ILtxQsXF',
    user_id: 'user_JgZuqNv3HmCtebiGlulvo',
    template_params: {
        'username': 'Honey',
        'notes': 'Look at my version of this recipe '
    }
};
 
function email(contactForm) {
    emailjs.send("gmail", "template_ILtxQsXF", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "my_version": contactForm.myversion.value
    })

$.ajax('https://api.emailjs.com/api/v1.0/email/send', {
    type: 'POST',
    data: JSON.stringify(data),
    contentType: 'application/json'
}).done(function() {
    alert('Your mail is sent!');
}).fail(function(error) {
    alert('Oops... ' + JSON.stringify(error));
});


// code fragment