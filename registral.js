document.addEventListener("DOMContentLoaded", function () {
    const registrationForm = document.getElementById("registration-form");

    registrationForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // 获取已有用户数据或创建一个空数组
        const users = JSON.parse(localStorage.getItem("users")) || [];

        // 检查新用户名是否已存在
        const isUsernameTaken = users.some(user => user.username === username);

        if (isUsernameTaken) {
            alert("¡Lo siento! El nombre de usuario ya está en uso. Por favor, elige otro.");
        } else {
            // 如果用户名不被占用，添加新用户
            users.push({ username, password });

            // 将用户数据保存到LocalStorage
            localStorage.setItem("users", JSON.stringify(users));

            // 提示注册成功
            alert("¡Felicitaciones! Te has registrado exitosamente.");

            // 重定向到登录页面
            window.location.href = "menu.html";
        }
    });
});

