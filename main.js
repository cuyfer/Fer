function muncul() {
  document.querySelector('.lyan').style.display = 'block';
  setTimeout(function () {
    window.open('https://www.instagram.com/khoirulyan_id?igsh=MWZxdWhhd2g2M3J2cw==')
  },1000)
  
  setTimeout(function () {
      document.querySelector('.lyan').style.display = 'none';

  },5000)
}

window.addEventListener('load', function(){
  setTimeout(function () {
    let loader = document.querySelector('.loading');
            loader.style.display = 'none';
            document.querySelector('.konten').style.display='flex'
            document.querySelector('.kata').style.display='block'

  }, 2000)
           
        });
        
       