function validateForm() {
    const email = document.getElementById("email").value.trim();


    // Ẩn tất cả các thông báo lỗi trước đó
    document.getElementById("email-error").style.display = "none";

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

    return !errors; // Nếu không có lỗi, cho phép gửi biểu mẫu
}