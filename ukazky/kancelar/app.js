(function(){
  var hd=document.getElementById('hd');
  addEventListener('scroll',function(){hd.classList.toggle('sc',scrollY>10);},{passive:true});
  var bu=document.getElementById('burger');
  bu.addEventListener('click',function(){var o=hd.classList.toggle('open');bu.setAttribute('aria-expanded',o);});
  var f=document.getElementById('f');
  if(f) f.addEventListener('submit',function(e){e.preventDefault();document.getElementById('ok').style.display='block';});
  var st=document.getElementById('status');
  if(st){
    var n=new Date(), d=n.getDay(), m=n.getHours()*60+n.getMinutes();
    var close = d>=1&&d<=4 ? 16*60+30 : d===5 ? 14*60 : 0;
    var on = close && m>=8*60 && m<close;
    st.classList.toggle('on',!!on);
    st.lastElementChild.textContent = on ? 'Teď máme otevřeno, do '+(d===5?'14:00':'16:30') : 'Teď máme zavřeno';
    var row=document.querySelector('#hours tr[data-d="'+(d===0?6:d)+'"]'); if(row) row.classList.add('today');
  }
  var els=document.querySelectorAll('.fade');
  if(!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('in')});return;}
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});},{threshold:.12});
  els.forEach(function(el){io.observe(el);});
})();
