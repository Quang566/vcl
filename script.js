// Lắng nghe sự kiện khi nút được nhấn
document.getElementById('birthday-btn').addEventListener('click', function() {
    // Hiển thị trang "Chúc mừng sinh nhật"
    document.getElementById('message-container').style.display = 'block';

    // Tạo hiệu ứng pháo giấy
    createConfetti();
});

// Hàm tạo pháo giấy ngẫu nhiên
function createConfetti() {
    const body = document.body;
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.animationDelay = Math.random() * 2 + 's';
        body.appendChild(confetti);
    }
}
