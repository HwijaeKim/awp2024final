//외부 라이브러리 참조 없이 타이핑 애니메이션 구현
document.addEventListener('DOMContentLoaded', () => {
    let text = "INSIGHT>>><br>INSPIRED BY<br>YOUTH SIGHT.";
    let typingContainer = document.getElementById('title_typing');
    let index = 0;

    function typing() {
        if (index < text.length) {
            typingContainer.innerHTML = text.slice(0, index + 1);
            index++;
            setTimeout(typing, 35);
        }
        else {
            typingContainer.innerHTML = text;
        }
    }

    typing();
});
