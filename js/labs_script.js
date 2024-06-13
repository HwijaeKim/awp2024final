//외부 스크립트 참조 없이 타이핑 애니메이션 구현
document.addEventListener('DOMContentLoaded', () => {
    let text = "LABS>>>>>><br>SOMETHING NEW.";
    let typingContainer = document.getElementById('title_typing');
    let index = 0;

    function typing() {
        if (index < text.length) {
            typingContainer.innerHTML = text.slice(0, index + 1);
            index++;
            setTimeout(typing, 45);
        }
        else {
            typingContainer.innerHTML = text;
        }
    }

    typing();
});
