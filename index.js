let qr_inp = document.querySelector('.input')
qr_btn = document.querySelector('.btn')
img_box = document.querySelector('.box-image')
qr_img = document.querySelector('.qr-image')

function getQr(){
    qr_img.src = " https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qr_inp.value;
    img_box.classList.add("show")
}