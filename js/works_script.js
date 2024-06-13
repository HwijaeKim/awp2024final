//외부 스크립트 참조 없이 타이핑 애니메이션 구현
document.addEventListener('DOMContentLoaded', () => {
    let text = "WORKS>>><br>DESIGN, MOTION,<br>FRONTEND.";
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




//모달 구현
let modal = document.getElementById('modal');
let modalBtn = document.querySelector('.close');
let modalImg = document.querySelector('.modal_img');
let bg = document.getElementById('dark_bg');
let imgsClick = document.querySelectorAll('.imgs');


let modalTitle = document.querySelector('.modal_title');
let modalSub = document.querySelector('.modal_sub');
let texts = [
    {
        title: 'FINDING PARADISE',
        sub: '2020.08 <br><br>고등학교 3학년, 졸업작품 프로젝트로 진행한 비주얼 모션그래픽스 동영상의 포스터다.<br>' +
            '닌텐도사의 <동물의숲> 시리즈를 모티브로 제작한 비주얼 모션이며 처음으로 거의 대부분의 소스를 직접 제작하는 것을 도전하였고,' +
            '여러 시행착오와 새로운 시도 끝에 최종 프로젝트에 적용시켰다.' +
            '<br><br>제목 <FINDING PARADISE>는 뜻 그대로 낙원을 찾아 떠난다는 의미를 담고 있다.' +
            '<br>WORKS 페이지의 VISUAL MOTION에서 감상할 수 있다.'
    },
    {
        title: 'Game 3D Modeling',
        sub: '2020.07 <br><br>' +
            '닌텐도사의 <젤다의 전설: 브레스 오브 더 와일드>의 인게임 집을' +
            '<br>3Ds MAX와 Cinema 4D + Octane Render를 이용하여 제작하였다.' +
            '<br><br>3Ds MAX로는 오브젝트 모델링을 진행하였고, 재질과 라이팅을 Cinema 4D와 Octane Render를 이용하여 제작했다.'
    },
    {
        title: '아라비아 사막의 반도체 이야기',
        sub: '2023.12 <br><br>' +
            '대학교 [콘텐츠디자인] 중간과 기말 프로젝트로 UI/UX 관련 가상의 페이지를 제작하였다.' +
            '<br>큰 키워드 아랍 에미리트라는 국가를 지정하였고 사막의 반도체를 생각하며 콘텐츠를 기획했다.'

    },
    {
        title: 'MOTION GRAPHICS COPY',
        sub: '2021.05 <br><br>' +
            '개인창작 작품인 아닌 카피 결과물로 개인 모션그래픽 운용능력 강화를 위해 똑같게 보이도록 제작하였다.' +
            '<br><br>CES2021의 삼성부문 어워드에 관한 2D 모션그래픽으로 원작자는 VEGI다.'
    },
    {
        title: 'Notion AD 30"',
        sub: '2024.06 <br><br>' +
            '대학교 [모션그래픽스] 중간프로젝트로 진행한 2D 모선그래픽 비디오다.' +
            '<br>문서 서비서 Notion의 30초 분량의 광고영상 콘셉트로 작업을 진행했으며 모든 UI 소스는 직접 제작하였다.'
    },
    {
        title: 'Sayonara Wild Hearts',
        sub: '2020.0' +
            '인디게임 <Sayonara Wild Hearts(사요나라 와일드 하츠)>에서 영감을 받아 Cinema 4D와 After Effects를 이용하여 제작하였다.' +
            '<br>처음으로 툰렌더 방식을 사용하여 만화 느낌의 라이팅과 셰도우를 적용했으며 After Effects에서 후반 라이팅 작업과 별 효과 등 후보정을 진행했다.'
    },
    {
        title: 'NO CSS CLUB 미니게임',
        sub: '2024.06<br><br>' +
            'JavaScript를 적극 활용하여 제작한 웹 미니게임으로 실제 존재하는 사이트인 No CSS Club에 영감을 받아' +
            '클래스가 존재할 것 같은 요소를 클릭해 클래스를 제거해 나가는 미니게임을 제작했다.' +
            '<br><br>디자인 콘셉트는 Windows 95~2000스타일을 적용하였고 사용자명, 카운트, 남은 시간 등의 게임 기능을 구현하였다.'
    },
    {
        title: '첫 번째 포트폴리오 웹',
        sub: '2023.12<br><br>' +
            '대학교 [웹 퍼블리싱] 기말 프로젝트로 진행한 개인 포트폴리오 웹사이트를 제작했다.' +
            '<br>디자인 콘셉트는 macOS UI에 영감을 받아 적용하였고, 총 5개의 서브페이지가 존재한다.' +
            '<br><br>처음으로 추진한 HTML/CSS를 제대로 활용한 프로젝트였으며 반응형까지 구현된 것은 아니다.'
    },
    {
        title: 'PERSONAL PROFILE',
        sub: '2021.03 <br><br>' +
            '대학 [드로잉기초] 프로젝트 초반 작업물로 그렸던 캐리커처로 이후로도 개인 프로필로 이용되고 있다.'
    },
];



imgsClick.forEach((img, index) => {
    img.addEventListener('click', (event) => {
        let src;
        if (img.querySelector('img')) {
            src = img.querySelector('img').src;
        } else if (img.querySelector('video')) {
            src = img.querySelector('video').src;
        }


        if(img.classList.contains('item4')) {
            modalImg.innerHTML = '<video src="./sources/item4_samsung.mp4" muted autoplay loop controls></video>'

            modalImg.style.backgroundImage = 'url('+ src +')';
            modalTitle.innerHTML = texts[index].title;
            modalSub.innerHTML = texts[index].sub;

            modal.classList.add('active');
            bg.classList.add('active');
        }


        else if(img.classList.contains('item5')) {
            modalImg.innerHTML = '<video src="./sources/item5_notion.mp4" muted autoplay loop controls></video>'

            modalImg.style.backgroundImage = 'url('+ src +')';
            modalTitle.innerHTML = texts[index].title;
            modalSub.innerHTML = texts[index].sub;

            modal.classList.add('active');
            bg.classList.add('active');
        }


        else if(img.classList.contains('item6')) {
            modalImg.innerHTML = '<video src="./sources/item6_sayonara.mp4" muted autoplay loop controls></video>'

            modalImg.style.backgroundImage = 'url('+ src +')';
            modalTitle.innerHTML = texts[index].title;
            modalSub.innerHTML = texts[index].sub;

            modal.classList.add('active');
            bg.classList.add('active');
        }


        else {
            modalImg.style.backgroundImage = 'url('+ src +')';
            modalTitle.innerHTML = texts[index].title;
            modalSub.innerHTML = texts[index].sub;

            modal.classList.add('active');
            bg.classList.add('active');
        }


    })
})

modalBtn.addEventListener('click', () => {
    modalImg.innerHTML = '';
    modal.classList.remove('active');
    bg.classList.remove('active');
})