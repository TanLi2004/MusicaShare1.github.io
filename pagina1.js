// 使用JavaScript来添加更复杂的动画效果
const button = document.getElementById('myButton');

button.addEventListener('mouseenter', () => {
    button.style.background = 'linear-gradient(to right, #ff6b6b, #ffa07a)';
    button.style.transform = 'scale(1.1)';
});

button.addEventListener('mouseleave', () => {
    button.style.background = 'linear-gradient(to right, #4A90E2, #87CEEB)';
    button.style.transform = 'scale(1)';
});

const navar = document.querySelector(".navar");
const buttons = document.querySelectorAll(".navar .button");

// 鼠标悬停时的效果
navar.addEventListener("mouseenter", () => {
    navar.style.background = "linear-gradient(45deg, #ff6b6b, #f97777)"; // 渐变背景
    navar.style.height = "70px"; // 导航栏高度变大
});

navar.addEventListener("mouseleave", () => {
    navar.style.background = "rgba(0, 0, 0, 0.3)"; // 恢复原背景颜色
    navar.style.height = "50px"; // 恢复原导航栏高度
});

buttons.forEach(button => {
    button.addEventListener("mouseenter", () => {
        button.style.color = "#ff6b6b"; // 按钮文本颜色变化
    });

    button.addEventListener("mouseleave", () => {
        button.style.color = "rgb(255, 255, 255)"; // 恢复原文本颜色
    });
});
