(function() {
  'use strict';
  // 사용할 앱의 JavaScript 키를 설정해 주세요.
  Kakao.init('appKey');

  Kakao.Auth.getStatus(function(statusObj) {
    if(statusObj.status === 'not_connected') {
      // 카카오 로그인 버튼을 생성합니다.
      Kakao.Auth.createLoginButton({
        container: '#kakao-login-btn',
        success: function(authObj) {
          Kakao.Auth.getStatus(function(statusObj) {
            console.log(statusObj);
            location.reload();
          });
        },
        fail: function(err) {
          alert(JSON.stringify(err));
        }
      });
    } else {
      var logoutBtn = document.getElementById('kakao-login-btn');
      logoutBtn.innerText = '로그아웃';
      logoutBtn.addEventListener('click', function() {
        Kakao.Auth.logout(function() {
          location.reload();
        });
      });
    }
  });
}());
