//외부 스크립트 참조 없이 타이핑 애니메이션 구현
document.addEventListener('DOMContentLoaded', () => {
    let text = "새로운 시작.";
    let typingContainer = document.getElementById('title_typing');
    let index = 0;

    function typing() {
        if (index < text.length) {
            typingContainer.innerHTML = text.slice(0, index + 1);
            index++;
            setTimeout(typing, 100);
        }
        else {
            typingContainer.innerHTML = text;
        }
    }

    typing();
});