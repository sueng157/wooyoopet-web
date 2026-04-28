/* ===================================
   우유펫 공식 홈페이지 - main.js
   바닐라 JavaScript
   =================================== */

document.addEventListener('DOMContentLoaded', function () {

  /* ---------- 1. 헤더 스크롤 감지 ---------- */
  const header = document.getElementById('header');

  function handleScroll() {
    if (window.scrollY > 10) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // 초기 상태 체크


  /* ---------- 2. 모바일 햄버거 메뉴 ---------- */
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileOverlay = document.getElementById('mobileOverlay');

  function openMobileMenu() {
    hamburgerBtn.classList.add('active');
    hamburgerBtn.setAttribute('aria-label', '메뉴 닫기');
    mobileMenu.classList.add('open');
    mobileOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    hamburgerBtn.classList.remove('active');
    hamburgerBtn.setAttribute('aria-label', '메뉴 열기');
    mobileMenu.classList.remove('open');
    mobileOverlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  hamburgerBtn.addEventListener('click', function () {
    if (mobileMenu.classList.contains('open')) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  });

  mobileOverlay.addEventListener('click', closeMobileMenu);


  /* ---------- 3. 메뉴 클릭 → 스크롤 & 모바일 메뉴 닫기 ---------- */
  var navLinks = document.querySelectorAll('.nav-desktop a, .mobile-menu a');

  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      closeMobileMenu();
    });
  });


  /* ---------- 4. FAQ 아코디언 ---------- */
  var faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(function (item) {
    var btn = item.querySelector('.faq-question');

    btn.addEventListener('click', function () {
      var isActive = item.classList.contains('active');

      // 다른 항목 닫기
      faqItems.forEach(function (other) {
        other.classList.remove('active');
      });

      // 현재 항목 토글
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });


  /* ---------- 5. QR 코드 생성 ---------- */
  var PLAYSTORE_URL = 'https://play.google.com/store/apps/details?id=com.wooyoopet&pcampaignid=web_share';
  var APPSTORE_URL = 'https://apps.apple.com/kr/app/wooyoopet/id6755390763';

  // QR 코드 생성 함수
  function generateQR(elementId, url, size) {
    var container = document.getElementById(elementId);
    if (!container) return;

    // 컨테이너 초기화
    container.innerHTML = '';

    try {
      new QRCode(container, {
        text: url,
        width: size,
        height: size,
        colorDark: '#1A1A2E',
        colorLight: '#FFFFFF',
        correctLevel: QRCode.CorrectLevel.M
      });
    } catch (e) {
      // QRCode 라이브러리 로드 실패 시 대체 텍스트
      container.innerHTML = '<span style="font-size:12px;color:#999;">QR 로드 실패</span>';
    }
  }

  // 히어로 섹션 QR (작은 사이즈)
  generateQR('qrPlayStore', PLAYSTORE_URL, 96);
  generateQR('qrAppStore', APPSTORE_URL, 96);

  // 다운로드 섹션 QR (큰 사이즈)
  generateQR('qrPlayStoreBottom', PLAYSTORE_URL, 120);
  generateQR('qrAppStoreBottom', APPSTORE_URL, 120);

});
