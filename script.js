let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");


function generateQR() {
  if(qrText.value.length>0){
    qrImage.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+qrText.value;
    imgBox.classList.add("show-img");
  }else{
    qrText.classList.add("error");
// Remove and reapply the error class to trigger the animation again
setTimeout(() => {
  qrText.classList.remove('error');
  void qrText.offsetWidth; // Trigger reflow to restart the animation
  qrText.classList.add('error');
}, 100);
}
}