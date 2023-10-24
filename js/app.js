
let sidebarBtn=document.querySelector('.menuBtn')
let sidebar=document.querySelector('.sidebar')

sidebarBtn.addEventListener('click', ()=>{


    sidebar.classList.add('active')

})


  let crossBtn=document.querySelector('.bi')
  function cancelSidebar(event){

    if(
      event.target.classList.contains('sidebar') || 
      event.target.classList.contains('bi')
      ){

        sidebar.classList.remove('active')
    }
}

  crossBtn.addEventListener('click',cancelSidebar)
  sidebar.addEventListener('click',cancelSidebar)

