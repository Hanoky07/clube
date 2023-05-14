const menuBtn = document.getElementById('menu-btn');
const navigation = document.querySelector('.navigation');

menuBtn.addEventListener('change', function() {
  if (this.checked) {
    navigation.style.left = '0';
  } else {
    navigation.style.left = '100%';
  }
});
