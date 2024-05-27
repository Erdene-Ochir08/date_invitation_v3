document.addEventListener('DOMContentLoaded', function() {
    emailjs.init("IBjfjHLbfCQuiVlYK"); // Replace with your EmailJS API key
});
const text = document.querySelector(".text");
document.addEventListener("DOMContentLoaded", function() {
    const message = "Hey!.. Long time no see. Thank you for meeting me all this time. If I've made you uncomfortable for any reason, I am really sorry. Meeting you has been full of excitement and happiness. Recently, I realized that no one else makes me feel the way you do... I really want to see you again.";
    const speed = 50; // Typing speed in milliseconds
    let index = 0;
    function typeMessage() {
        if (index < message.length) {
            text.textContent += message.charAt(index);
            index++;
            setTimeout(typeMessage, speed);
        }
    }
    typeMessage();
});
document.getElementById('sendButton').addEventListener('click', function() {
    var templateParams = {
        to_name: 'Recipient Name',
        from_name: 'Your Name',
        message: 'This is a test message'
    };

    emailjs.send('service_3632rnn', 'template_0812kjs', templateParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert("Thank you for accepting. I've prepared date at my office. Let's see there :)");
        }, function(error) {
            console.log('FAILED...', error);
            // alert('Failed to send email.');
        });
});
