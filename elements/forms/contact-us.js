function openGmail(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const service = document.getElementById('service').value;
    const message = document.getElementById('message').value;
    
    const subject = encodeURIComponent('Contact Form Submission from ' + name);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nService Interested In: ${service}\nMessage: ${message}`);
    
    const mailtoLink = `mailto:sales@vrianta.in?subject=${subject}&body=${body}`;
    
    window.location.href = mailtoLink;
}