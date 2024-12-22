function nextSlide(slideNumber) {
    const currentSlide = document.querySelector('.story-slide:not([style*="display: none"])');
    const nextSlide = document.getElementById(`slide${slideNumber}`);
  
    currentSlide.style.display = 'none';
    nextSlide.style.display = 'block';
  }
  
  function prevSlide(slideNumber) {
    const currentSlide = document.querySelector('.story-slide:not([style*="display: none"])');
    const prevSlide = document.getElementById(`slide${slideNumber}`);
  
    currentSlide.style.display = 'none';
    prevSlide.style.display = 'block';
  }
  
  function restartStory() {
    document.querySelectorAll('.story-slide').forEach(slide => (slide.style.display = 'none'));
    document.getElementById('slide1').style.display = 'block';
  }
  
  const music = document.getElementById('background-music');
const musicToggle = document.getElementById('music-toggle');

function toggleMusic() {
  if (music.paused) {
    music.play();
    musicToggle.textContent = 'Pause Music';
  } else {
    music.pause();
    musicToggle.textContent = 'Play Music';
  }
}
