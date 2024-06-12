let more = document.querySelector('.button_modal');
   let modal = document.querySelector('.modal');
   let  close = document.querySelector('.close');
    more.addEventListener('click', function() {
        modal.style.display = 'block';
        modal.classList.add('modal-animation');
    });
    close.addEventListener('click', function() {
        modal.style.display = 'none';
        modal.classList.remove('modal-animation');
    });

