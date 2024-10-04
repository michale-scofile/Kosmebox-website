document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const city = document.getElementById('city').value;
    const district = document.getElementById('district').value;
    const country = document.getElementById('country').value;

    if (password !== confirmPassword) {
        alert('Mật khẩu không khớp, mời nhập lại');
        return;
    }

    fetch('http://localhost:3000/users?email=' + email)
        .then(response => response.json())
        .then(data => {
            if (data.length > 0) {
                alert('Email này đã được đăng ký, vui lòng sử dụng email khác');
            } else {
                const userData = {
                    name: name,
                    email: email,
                    password: password,
                    phone: phone,
                    address: address,
                    city: city,
                    district: district,
                    country: country
                };

                fetch('http://localhost:3000/users', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(userData)
                })
                .then(response => {
                    if (response.ok) {
                        window.location.href = '../../đăng nhập/đăng nhập/dangnhap.html';
                        alert('Đăng ký thành công!');
                    } else {
                        alert('Lỗi đăng ký, vui lòng thử lại');
                    }
                })
                .catch(error => console.error('Error:', error));
            }
        })
        .catch(error => console.error('Error:', error));
});