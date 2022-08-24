function inicialModal(modalID) {
  const modal = document.getElementById(modalID);
  modal.classList.add("mostrar");
  modal.addEventListener('click', (e) => {
     if(e.target.className == 'fechar' ) {
      modal.classList.remove("mostrar");
     }
  })
}

 const sala = document.querySelector('.sala');
 sala.addEventListener('click', function () {
  inicialModal('modal-sala');
 });

function secondModal(modalID) {
  const modal = document.getElementById(modalID);
  modal.classList.add("mostrar");
  modal.addEventListener('click', (e) => {
     if(e.target.className == 'fechar' ) {
      modal.classList.remove("mostrar");
     }
  })
}

 const lab = document.querySelector('.lab');
 lab.addEventListener('click', function () {
  inicialModal('modal-lab');
 });

