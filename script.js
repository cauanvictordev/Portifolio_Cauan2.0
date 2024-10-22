document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.section');

    function activateSection(section) {
        section.classList.add('active');
    }

    function handleScroll() {
        sections.forEach(section => {
            const sectionTop = section.offsetTop - window.innerHeight * 0.8;
            if (window.scrollY > sectionTop) {
                activateSection(section);
            }
        });
    }

    // Activate sections on page scroll
    window.addEventListener('scroll', handleScroll);

    // Prevent page reload when submitting the form
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // Add your form processing code here

        // Example: displaying success message
        alert('Message sent successfully!');
    });

    // Add a click event listener to all links with class "scroll-link"
    const links = document.querySelectorAll('.scroll-link');

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            const offset = targetElement.offsetTop;

            window.scrollTo({
                top: offset,
                behavior: 'smooth'
            });
        });
    });

    // Function to send contact information
    function enviarContato(contatoData) {
        fetch('/api/enviarContato', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(contatoData),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Error sending contact');
            }
            return response.json();
        })
        .then(data => {
            console.log('Contact sent successfully', data);
            // You can add additional logic here if needed
        })
        .catch(error => {
            console.error('Error sending contact', error);
            // Handle error if necessary
        });
    }

    // Function to send order information
    function enviarPedido(pedidoData) {
        fetch('/api/enviarPedido', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(pedidoData),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Error sending order');
            }
            return response.json();
        })
        .then(data => {
            console.log('Order sent successfully', data);
            // You can add additional logic here if needed
        })
        .catch(error => {
            console.error('Error sending order', error);
            // Handle error if necessary
        });
    }
});
