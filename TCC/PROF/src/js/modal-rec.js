function inicialModal(modalID) {
  const modal = document.getElementById(modalID);
  modal.classList.add("mostrar");
  modal.addEventListener('click', (e) => {
     if(e.target.className == 'fechar' ) {
      modal.classList.remove("mostrar");
     }
  })
}

 const sala = document.querySelector('.cam');
 sala.addEventListener('click', function () {
  inicialModal('modal-cam');
 });