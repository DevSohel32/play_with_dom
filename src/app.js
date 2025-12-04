const allBtn = document.getElementsByClassName("add-btn");
  let count = 0;
for (const btn of allBtn) {

  btn.addEventListener("click", function (e) {
    count+=1;
    setInnerText('cart', count);
    playerName = e.target.parentNode.childNodes[1].innerText;
    price = e.target.parentNode.childNodes[3].innerText;
     category = e.target.parentNode.childNodes[5].innerText;
     console.log(category)
   const selectedContainer = document.getElementById('elected-players-container');



});

};
