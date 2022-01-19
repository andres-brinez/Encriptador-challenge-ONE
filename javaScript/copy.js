
var  botom = document.querySelector("#btn-copy");
function copy() {
    var copyText = document.querySelector(".input-2");
    copyText.select();
    document.execCommand("copy");
  }
  
  botom.addEventListener("click", copy);


  