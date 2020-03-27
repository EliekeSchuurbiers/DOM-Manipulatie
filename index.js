

const buttonClicked = document.querySelectorAll(".big-five-button");
buttonClicked.forEach(function (button) {
    button.addEventListener("click", function (c) {
        const newLi = document.createElement("li")
        const list = document.getElementById("spotted-animals-list")
        list.appendChild(newLi);

        newLi.innerHTML = c.toElement.innerHTML;

    });

});

const removeFirstitem = document.getElementById("remove-first-item-button");
removeFirstitem.addEventListener("click", function () {
    const list = document.getElementById("spotted-animals-list")
    list.firstElementChild.remove();
});

const removeAll = document.getElementById("remove-all-button");
removeAll.addEventListener("click", function () {
    const list = document.getElementById("spotted-animals-list")
    while (list.hasChildNodes) {
        list.firstChild.remove()
    };


});

