// TABS
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
//

// POST

const sendData = async(url, data) => {
  const response  = await fetch(url, {
    method : 'POST',
    body : data,
  })
  return await response.json();
  
  
};

const sendCart = () => {

  const cartForm = document.querySelector('.addendum__form-add');


  cartForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const bookName = document.querySelector('.addendum__names-add');

    const formData = new FormData(cartForm);


    sendData('https://apiinterns.osora.ru/', formData)
    .then((data) => {
       console.log(decodeURIComponent(escape(data.text)))
       setToLocalStorage(data, bookName.value);
       cartForm.reset();

    });

  })
};
const setToLocalStorage = (data, bookName) => {
  if (!localStorage.getItem('books')){
    localStorage.setItem('books', JSON.stringify({}));
  }
  const booksObject = JSON.parse(localStorage.getItem('books'));
  booksObject[bookName] = decodeURIComponent(escape(data.text));
  localStorage.setItem('books', JSON.stringify(booksObject));
}


sendCart();

//


const formWrite = document.querySelector('.addendum__form-write');




formWrite.addEventListener('click',(e) => {
  e.preventDefault();
  const inputWrite = document.querySelector('.addendum__names-write');
  const areaWrite = document.querySelector('.addendum__text-write')
  
  writeLocalStorage(inputWrite.value , areaWrite.value);

})


const writeLocalStorage = (title , text) => {
  if (!localStorage.getItem('books')){
    localStorage.setItem('books', JSON.stringify({}));
  }
  const booksObject = JSON.parse(localStorage.getItem('books'));
  console.log(booksObject)
  booksObject[title] = decodeURIComponent(escape(text));
  localStorage.setItem('books',JSON.stringify(booksObject));
}