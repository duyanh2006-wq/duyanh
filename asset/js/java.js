const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Ngăn form reload trang
        
        // Thông báo mô phỏng (nếu cần gửi thật thì tích hợp API/Email)
        alert("Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất có thể.");
        
        // Reset form về trạng thái ban đầu
        contactForm.reset();
    });
}