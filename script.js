document.addEventListener("DOMContentLoaded", function () {
  // --- お知らせの「もっと見る」 ---
  const newsItems = document.querySelectorAll(".news-list li");
  const toggleBtn = document.getElementById("toggle-news");

  let expanded = false;

  function updateView() {
    newsItems.forEach((item, index) => {
      if (!expanded && index >= 3) {
        item.classList.remove("visible");
      } else {
        item.classList.add("visible");
      }
    });
    toggleBtn.textContent = expanded ? "閉じる" : "もっと見る";
  }

  toggleBtn.addEventListener("click", function () {
    expanded = !expanded;
    updateView();
  });

  // 初期表示（3件だけ）
  updateView();


  // --- ハンバーガーメニュー 外クリックで閉じる ---
  const navToggle = document.getElementById('nav-toggle');
  const siteNav = document.querySelector('.site-nav');

  document.body.addEventListener('click', (e) => {
    // メニュー内クリックやハンバーガーボタンは無視
    if (!siteNav.contains(e.target) &&
        e.target !== navToggle &&
        !e.target.matches('.hamburger, .hamburger *')) {
      navToggle.checked = false; // メニューを閉じる
    }
  });


  // ページ内リンクをスムーススクロール
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    const header = document.querySelector('header'); // 固定ヘッダー

    if (targetElement) {
      const headerHeight = header ? header.offsetHeight : 0;
      const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});


var swiper = new Swiper('.mySwiper', {
  loop: true,                 // 無限ループ
  slidesPerView: 1.3,         // 1枚ちょい見せ（スマホで“横並び感”）
  centeredSlides: false,
  spaceBetween: 10,// スライド間の余白
  autoplay: {
    delay: 2000,// 2秒ごとにスライド
    disableOnInteraction: false// ユーザー操作後も自動再生継続
  },
  breakpoints: {
    960: {                    // PC幅
      slidesPerView: 3,       // 横に3枚並べる
      centeredSlides: false,
      spaceBetween: 12
    }
  }
});

});
