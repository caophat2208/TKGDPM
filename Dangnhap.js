function validateForm() {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    // Ẩn tất cả các thông báo lỗi trước đó
    document.getElementById("email-error").style.display = "none";
    document.getElementById("password-error").style.display = "none";

    let errors = false;

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

    return !errors; // Nếu không có lỗi, cho phép gửi biểu mẫu
}