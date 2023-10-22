document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');
    const errorMessage = document.getElementById('error-message');

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const username = loginForm.username.value;
        const password = loginForm.password.value;

        // 获取保存在localStorage中的用户数据
        const users = JSON.parse(localStorage.getItem('users')) || [];

        // 查找匹配的用户
        const user = users.find(u => u.username === username && u.password === password);

        if (user) {
            // 登录成功，可以在此处添加重定向或其他操作
            alert('Bienvenido ' + user.username);
            window.location.href = 'home.html'; // 重定向到主页
        } else {
            // 登录失败，显示错误消息
            errorMessage.textContent = 'Nombre de usuario o contraseña incorrectos. Inténtelo de nuevo.';
        }
    });
});
