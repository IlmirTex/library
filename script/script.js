
const tabBtn = document.querySelectorAll(".addendum__tab");
const tabsItems = document.querySelectorAll(".tabs__content");

tabBtn.forEach(function(item){
  item.addEventListener("click", function(){
      const currentBtn = item;
      const tabId = currentBtn.getAttribute("data-tab");
      const currentTab = document.querySelector(tabId);

      tabBtn.forEach(function(item) {
          item.classList.remove('active');
      })
      tabsItems.forEach(function(item) {
        item.classList.remove('active_content');

      currentBtn.classList.add('active');
      currentTab.classList.add('active_content');
    })
})
})


// const formText = document.getElementById('form__add');

// formText.addEventListener('change', () => {
//   uploadFile(formText.files[0]);
// });



// function uploadFile(file) {
//   if (!['s/txt'].includes(file.type)){
//     alert('Разрешены только текстовые документы');
//   };
// }