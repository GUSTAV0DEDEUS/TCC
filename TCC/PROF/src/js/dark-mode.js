const $html = document.querySelector('html')
const $checkbox = document.querySelector('#darkmode-toggle')

$checkbox.addEventListener('change', function(){
  $html.classList.toggle('dark-mode')
})