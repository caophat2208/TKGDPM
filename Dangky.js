function validateForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const passwordConfirmation = document.getElementById("password_confirmation").value;

    // Ẩn tất cả các thông báo lỗi trước đó
    document.getElementById("name-error").style.display = "none";
    document.getElementById("email-error").style.display = "none";
    document.getElementById("password-error").style.display = "none";
    document.getElementById("password-confirmation-error").style.display = "none";

    let errors = false;

    if (!name) {
        document.getElementById("name-error").innerText = "Họ và tên không được để trống.";
        document.getElementById("name-error").style.display = "block";
        errors = true;
    }
    if (!email) {
        document.getElementById("email-error").innerText = "Email không được để trống.";
        document.getElementById("email-error").style.display = "block";
        errors = true;
    } else {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Kiểm tra định dạng email
        if (!emailPattern.test(email)) {
            document.getElementById("email-error").innerText = "Email không hợp lệ.";
            document.getElementById("email-error").style.display = "block";
            errors = true;
        }
    }
    if (!password) {
        document.getElementById("password-error").innerText = "Mật khẩu không được để trống.";
        document.getElementById("password-error").style.display = "block";
        errors = true;
    }
    if (password !== passwordConfirmation) {
        document.getElementById("password-confirmation-error").innerText = "Mật khẩu xác nhận không khớp.";
        document.getElementById("password-confirmation-error").style.display = "block";
        errors = true;
    }

    return !errors; // Nếu không có lỗi, cho phép gửi biểu mẫu
}