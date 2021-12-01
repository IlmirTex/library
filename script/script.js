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

  const cartForm = document.querySelector('.addendum__form-write');

  cartForm.addEventListener('submit', e => {
    e.preventDefault();

  const formData = new FormData(cartForm);
    sendData('https://apiinterns.osora.ru/', formData)
    .then(() => {
      cartForm.reset();
    });

  })
};

sendCart();


//