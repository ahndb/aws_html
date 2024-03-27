// kakao https://developers.kakao.com/
function onKakaoButtonClickHandler(event) {
  window.location.href = 'https://developers.kakao.com/';
}

// naver https://developers.naver.com/
function onNaverButtonClickHandler(event) {
  window.location.href = 'https://developers.naver.com/';
}

const kakaoButtonElement = document.getElementById('kakao-button');
kakaoButtonElement.addEventListener('click', onKakaoButtonClickHandler);
const naverButtonElement = document.getElementById('naver-button');
naverButtonElement.addEventListener('click', onNaverButtonClickHandler);