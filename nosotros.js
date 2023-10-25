const articles = document.querySelectorAll('.article');
const content = document.querySelectorAll('.content');

// 遍历所有文章
articles.forEach((article, index) => {
    article.addEventListener('click', () => {
        // 隐藏所有内容
        content.forEach((c) => {
            c.style.display = 'none';
        });
        // 根据点击的文章显示相应内容
        content[index].style.display = 'block';
    });
});
function showContent(contentId) {
    const content = document.getElementById(contentId);

    // 在鼠标进入时应用动画效果
    content.addEventListener('mouseenter', () => {
        content.style.transform = 'scale(1.05)';
        content.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    });

    // 在鼠标离开时取消动画效果
    content.addEventListener('mouseleave', () => {
        content.style.transform = 'scale(1)';
        content.style.boxShadow = 'none';
    });

    // 隐藏其他内容
    const contents = document.querySelectorAll('.content > div');
    contents.forEach(item => {
        if (item.id !== contentId) {
            item.classList.add('hidden');
        }
    });

    // 显示特定内容
    content.classList.remove('hidden');
}
