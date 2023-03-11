let countsValue = document.getElementById("counts-value")
let addBtn = document.getElementById("add-btn")
let substractBtn = document.getElementById("substract-btn")
let counts = 0

addBtn.addEventListener("click", function(){
    counts = counts + 1
    countsValue.textContent = counts
})

substractBtn.addEventListener("click", function(){
    counts = counts - 1
    countsValue.textContent = counts
})