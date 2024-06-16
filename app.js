// ! 팝업창 
document.addEventListener('DOMContentLoaded', (event) => {
  const popup = document.getElementById('popup');
  const closePopupBtn = document.getElementById('closePopupBtn');

  // 페이지 로드 시 팝업 창을 표시
  popup.style.display = 'block';

  closePopupBtn.addEventListener('click', () => {
    popup.style.display = 'none';
  });

  window.addEventListener('click', (event) => {
    if (event.target === popup) {
      popup.style.display = 'none';
    }
  });
});


/* 일반함수 */
const label = document.querySelector('.label');
const options = document.querySelectorAll('.optionItem');
// 클릭한 옵션의 텍스트를 라벨 안에 넣음
const handleSelect = function(item) {
  label.innerHTML = item.textContent;
  label.parentNode.classList.remove('active');
}
// 옵션 클릭시 클릭한 옵션을 넘김
options.forEach(function(option){
  option.addEventListener('click', function(){handleSelect(option)})
})
// 라벨을 클릭시 옵션 목록이 열림/닫힘
label.addEventListener('click', function(){
  if(label.parentNode.classList.contains('active')) {
    label.parentNode.classList.remove('active');
  } else {
    label.parentNode.classList.add('active');
  }
});

        // 모든 'color-fill' 클래스를 가진 요소들을 선택합니다.
        const colorFills = document.querySelectorAll('.color-fill');

        // 각 요소에 클릭 이벤트 리스너를 추가합니다.
        colorFills.forEach(colorFill => {
            colorFill.addEventListener('click', () => {
                // 클릭된 요소가 이미 흰색 테두리를 가지고 있는지 확인합니다.
                const isSelected = colorFill.style.borderColor === 'white';

                // 모든 박스의 테두리 색상을 검정색으로 변경합니다.
                colorFills.forEach(box => box.style.borderColor = 'black');

                // 클릭된 요소가 선택되지 않은 상태였으면 흰색으로 변경합니다.
                if (!isSelected) {
                    colorFill.style.borderColor = 'white';
                }
            });
        });