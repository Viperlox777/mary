document.addEventListener('DOMContentLoaded',function(){
  var grid=document.getElementById('productGrid');
  if(!grid){return}
  var products=[
    {id:'p1',title:'Крем Cinzinc',category:'skincare',price:6900,img:'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&w=1600&auto=format&fit=crop'},
    {id:'p2',title:'Крем увлажняющий 24h',category:'skincare',price:5200,img:'/assets/images/Hydro2 infusion cream.jpg'},
    {id:'p3',title:'Тушь для ресниц UltraBlack',category:'makeup',price:3100,img:'/assets/images/suprematic-ultra-black-0021.jpg'},
    {id:'p4',title:'Матовая помада Nude',category:'makeup',price:2700,img:'/assets/images/7bb873_lbox.jpg'},
    {id:'p5',title:'Сыворотка Erbology 50 мл',category:'fragrance',price:11900,img:'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?q=80&w=1600&auto=format&fit=crop'},
    {id:'p6',title:'Парфюм Chanel 100 мл',category:'fragrance',price:9900,img:'https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=1600&auto=format&fit=crop'}
  ];
  var search=document.getElementById('search');
  var category=document.getElementById('category');
  function formatPrice(n){return new Intl.NumberFormat('ru-RU').format(n)+' ₽'}
  function render(list){
    grid.innerHTML='';
    list.forEach(function(p){
      var card=document.createElement('div');card.className='product-card';
      var buyUrl='./contact.html?action=buy&product='+encodeURIComponent(p.title)+'&price='+encodeURIComponent(formatPrice(p.price))+'#form';
      var infoUrl='./contact.html?action=info&product='+encodeURIComponent(p.title)+'#form';
      card.innerHTML='\
        <img src="'+p.img+'" alt="'+p.title+'">\
        <div class="product-body">\
          <div class="product-title">'+p.title+'</div>\
          <div class="product-price">'+formatPrice(p.price)+'</div>\
          <div class="product-actions">\
            <a class="btn btn-primary" href="'+buyUrl+'" data-id="'+p.id+'">Купить</a>\
            <a class="btn btn-outline" href="'+infoUrl+'" data-id="'+p.id+'">Подробнее</a>\
          </div>\
        </div>';
      grid.appendChild(card);
    });
  }
  function apply(){
    var q=(search&&search.value||'').toLowerCase();
    var cat=(category&&category.value)||'all';
    var list=products.filter(function(p){
      var okCat=cat==='all'||p.category===cat;var okQ=p.title.toLowerCase().includes(q);
      return okCat&&okQ;
    });
    render(list);
  }
  if(search){search.addEventListener('input',apply)}
  if(category){category.addEventListener('change',apply)}
  apply();
});


