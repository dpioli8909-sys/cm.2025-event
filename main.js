
(function(){
  const path = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  const allLinks = document.querySelectorAll('a[href]');
  allLinks.forEach(a=>{
    const href = (a.getAttribute('href')||'').toLowerCase();
    if(href === path){ a.classList.add('active'); }
  });

  const openBtn = document.getElementById('menuOpen');
  const backdrop = document.getElementById('navBackdrop');
  const closeBtn = document.getElementById('menuClose');
  function openDrawer(){
    backdrop.classList.add('open');
    backdrop.setAttribute('aria-hidden','false');
    closeBtn.focus();
  }
  function closeDrawer(){
    backdrop.classList.remove('open');
    backdrop.setAttribute('aria-hidden','true');
    openBtn.focus();
  }
  if(openBtn && backdrop && closeBtn){
    openBtn.addEventListener('click', openDrawer);
    closeBtn.addEventListener('click', closeDrawer);
    backdrop.addEventListener('click', (e)=>{ if(e.target===backdrop) closeDrawer(); });
    document.addEventListener('keydown', (e)=>{ if(e.key==='Escape' && backdrop.classList.contains('open')) closeDrawer(); });
  }

  const btn = document.getElementById('iscrizioniBtn');
  const modal = document.getElementById('modal');
  const mclose = document.getElementById('modalClose');
  if(btn && modal && mclose){
    const open=()=>{ modal.classList.add('open'); modal.setAttribute('aria-hidden','false'); mclose.focus(); };
    const shut=()=>{ modal.classList.remove('open'); modal.setAttribute('aria-hidden','true'); btn.focus(); };
    btn.addEventListener('click', open);
    mclose.addEventListener('click', shut);
    modal.addEventListener('click', (e)=>{ if(e.target===modal) shut(); });
    document.addEventListener('keydown',(e)=>{ if(e.key==='Escape' && modal.classList.contains('open')) shut(); });
  }
})();
