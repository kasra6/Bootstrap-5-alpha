let toastElList = [].slice.call(document.querySelectorAll('.toast'));
let toastEl = toastElList.map(function(toast){
  return new bootstrap.Toast(toast)
})

toastEl[0].show();
