function toggle() {
  var logo = document.getElementById("fbLogo"), text =  document.getElementById("myName");
  fbLogo.style.display="block";
  text.style.display="none"
  document.getElementById("fb-logo-container").onclick=function() {
    var showImage = fbLogo.style.display=="none";
    fbLogo.style.display=showImage?"block":"none";
    text.style.display=showImage?"none":"block"
  }
}
