// Hero 슬라이드 텍스트 애니메이션
const heroTexts = [
  "Creative Developer & Designer",
  "Web Experience Maker",
  "UI/UX Enthusiast"
];
let idx = 0;
const subtitle = document.querySelector('.subtitle');
function nextHeroText() {
  idx = (idx + 1) % heroTexts.length;
  subtitle.textContent = heroTexts[idx];
}
setInterval(nextHeroText, 2200);

// 3D 카드 효과(마우스 따라 회전)
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateY = (x / rect.width - 0.5) * 16;
    const rotateX = (0.5 - y / rect.height) * 16;
    card.style.transform = `scale3d(1.04,1.04,1.04) rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
    card.style.boxShadow = '0 12px 48px rgba(45,45,255,0.18)';
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
    card.style.boxShadow = '';
  });
});
