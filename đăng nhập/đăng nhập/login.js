document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    fetch('http://localhost:3000/users?email=' + email + '&password=' + password)
        .then(response => response.json())
        .then(data => {
            if (data.length > 0) {
                alert('Đăng nhập thành công!');
                window.location.href = '../../index.html';
            } else {
                alert('Email hoặc mật khẩu không đúng, vui lòng thử lại');
            }
        })
        .catch(error => console.error('Error:', error));
});