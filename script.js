

function toggleMode(){
  const html = document.documentElement
  const img = document.querySelector(".profile ");
  if(html.classList.contains('light')){
    html.classList.remove('light');
    img.setAttribute('src', '../img/photo_profile_light.jpeg');
  }else{
    html.classList.add('light');
     img.setAttribute('src', '../img/photo_profile.jpg');
  }
  /*versão simplificada
  html.classList.toggle("light");
  */
}
