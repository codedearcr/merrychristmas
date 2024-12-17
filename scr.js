const correctPassword = "24122024"; // Thay đổi mật khẩu tại đây

function validatePassword() {
    const passwordInput = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    if (passwordInput === correctPassword) {
        // Chuyển hướng đến file HTML khác
        window.location.href = "index1.html"; // Thay đổi tên file nếu cần
    } else {
        // Hiển thị thông báo lỗi
        errorMessage.textContent = "Sai mật khẩu rồi, thử lại đi Hương :v";
    }
}
