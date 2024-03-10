const filter = document.querySelector('#filter');
const ulList = document.querySelector('#ulList');

filter.addEventListener('input', function(e){
    searchContact(e);
    e.preventDefault;
});

function searchContact(e){
    let search = e.target.value.toLowerCase();
    let lists = ulList.querySelectorAll('li');
        lists.forEach(function(list){
         if(list.firstChild.textContent.toLowerCase().indexOf(search) == -1){
             list.style.display = 'none';
         } else{
             list.style.display = 'block';
         }
        });
    }
