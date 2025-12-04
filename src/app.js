const allBtn = document.getElementsByClassName("add-btn");
  let count = 0;
for (const btn of allBtn) {

  btn.addEventListener("click", function (e) {
    count+=1;
    setInnerText('cart', count);
    playerName =e.target.parentNode.childNodes[1];
});

};
