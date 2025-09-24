document.addEventListener('DOMContentLoaded',function(){
  // year
  var y=document.getElementById('year');if(y){y.textContent=new Date().getFullYear();}
  // burger menu
  var burger=document.getElementById('burger');
  var nav=document.getElementById('mainNav');
  var MOBILE_BP=960;
  function isMobile(){return window.innerWidth<=MOBILE_BP}
  function openMenu(){if(nav){nav.classList.add('open');} if(burger){burger.setAttribute('aria-expanded','true');}}
  function closeMenu(){if(nav){nav.classList.remove('open');} if(burger){burger.setAttribute('aria-expanded','false');}}
  function toggleMenu(){if(nav&&nav.classList.contains('open')){closeMenu()}else{openMenu()}}
  if(burger&&nav){
    burger.addEventListener('click',function(){toggleMenu()});
    nav.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){if(isMobile()){closeMenu()}})});
    window.addEventListener('resize',function(){if(!isMobile()){closeMenu()}});
  }
  // preloader
  var pre=document.getElementById('preloader');
  if(pre){setTimeout(function(){pre.style.opacity='0';pre.style.pointerEvents='none';pre.style.transition='opacity .3s ease';setTimeout(function(){pre.parentNode&&pre.parentNode.removeChild(pre);},350);},300);} 
  // smooth anchors
  document.querySelectorAll('a[href^="#"]').forEach(function(a){
    a.addEventListener('click',function(e){
      var id=this.getAttribute('href').slice(1);
      var el=document.getElementById(id);
      if(el){e.preventDefault();el.scrollIntoView({behavior:'smooth',block:'start'});} 
    });
  });
  // autofill contact form from query
  try{
    var params=new URLSearchParams(location.search);
    var act=params.get('action');
    var product=params.get('product');
    var price=params.get('price');
    if((act||product)&&document.querySelector('.contact-form')){
      var textarea=document.querySelector('.contact-form textarea[name="message"]');
      if(textarea){
        var base=textarea.value?textarea.value+'\n\n':'';
        var text='Запрос: '+(act==='buy'?'покупка':'информация')+(product?' — '+product:'')+(price?' ('+price+')':'');
        textarea.value=base+text;
      }
    }
  }catch(e){}
});


