const menuBtn = document.getElementById('menu-btn');
const navigation = document.querySelector('.navigation');

menuBtn.addEventListener('change', function() {
  if (this.checked) {
    navigation.style.right = '0';
  } else {
    navigation.style.right = '100%';
  }
});
