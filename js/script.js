document.addEventListener('DOMContentLoaded', function() {
    // Hiển thị thời gian hiện tại
    function updateTime() {
        const now = new Date();
        const timeString = now.toLocaleTimeString();
        document.getElementById('current-time').textContent = 'Thời gian hiện tại: ' + timeString;
    }
    setInterval(updateTime, 1000);

    // Thay đổi màu nền khi nhấp vào nút
    document.getElementById('change-bg-btn').addEventListener('click', function() {
        const colors = ['#f0f0f0', '#e0e0e0', '#d0d0d0'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        document.body.style.backgroundColor = randomColor;
    });

    // Xử lý form và hiển thị lời chào
    document.getElementById('name-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name-input').value;
        document.getElementById('greeting').textContent = `Xin chào, ${name}!`;
    });

    // Thêm hiệu ứng hover cho liên kết
    const links = document.querySelectorAll('nav ul li a');
    links.forEach(link => {
        link.addEventListener('mouseover', function() {
            this.classList.add('hover-effect');
        });
        link.addEventListener('mouseout', function() {
            this.classList.remove('hover-effect');
        });
    });
});
