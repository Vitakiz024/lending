function setLanguage(lang) {
    if (lang === 'uk') {
        document.querySelector('h1').innerText = 'Ласкаво просимо до Livelab';
        document.querySelector('.hero h2').innerText = 'Розвивайте свої навички з Livelab';
        document.querySelector('.hero p').innerText = 'Наша платформа пропонує унікальні можливості для навчання та розвитку.';
        document.querySelector('.registration h3').innerText = 'Зареєструйтесь зараз';
        document.querySelector('label[for="name"]').innerText = 'Ім\'я:';
        document.querySelector('label[for="email"]').innerText = 'Email:';
        document.querySelector('button[type="submit"]').innerText = 'Зареєструватись';
    } else {
        document.querySelector('h1').innerText = 'Welcome to Livelab';
        document.querySelector('.hero h2').innerText = 'Develop your skills with Livelab';
        document.querySelector('.hero p').innerText = 'Our platform offers unique opportunities for learning and growth.';
        document.querySelector('.registration h3').innerText = 'Register Now';
        document.querySelector('label[for="name"]').innerText = 'Name:';
        document.querySelector('label[for="email"]').innerText = 'Email:';
        document.querySelector('button[type="submit"]').innerText = 'Register';
    }
}

document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    fetch('/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email })
    })
    .then(response => response.json())
    .then(data => {
        alert('Дані надіслано!');
        document.getElementById('registrationForm').reset(); // Очистити форму
    })
    .catch(error => {
        console.error('Помилка:', error);
    });
});