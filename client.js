
document.addEventListener("DOMContentLoaded",function(){
  
  var icon = document.getElementById('icon');
  var nav = document.getElementById('mnav');
  function toggleNav(){
    
    if(nav.classList.contains('mnav-active')){
      console.log('it works')
      nav.classList.remove('mnav-active');
      nav.classList.add('mnav-inactive');
    }
    else if(nav.classList.contains('mnav-inactive')){
      console.log('still working')
      nav.classList.remove('mnav-inactive');
      nav.classList.add('mnav-active');
    }
  }
  icon.addEventListener('click',function(){
    toggleNav();
  })
})
