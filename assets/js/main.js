window.addEventListener('scroll',()=>{document.getElementById('navbar').classList.toggle('scrolled',scrollY>40)});
  function openMob(){document.getElementById('mobMenu').classList.add('open')}
  function closeMob(){document.getElementById('mobMenu').classList.remove('open')}
  const obs=new IntersectionObserver((entries)=>{entries.forEach((e,i)=>{if(e.isIntersecting){setTimeout(()=>e.target.classList.add('visible'),i*65);obs.unobserve(e.target)}})},{threshold:.1});
  document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));
  function doSubmit(e){e.preventDefault();const t=document.getElementById('toast');t.classList.add('show');setTimeout(()=>t.classList.remove('show'),4000);e.target.reset()}