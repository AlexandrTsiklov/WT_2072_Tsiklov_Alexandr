window.addEventListener("DOMContentLoaded", function(){
    document.querySelectorAll(".items__filter-label").forEach(function(element) {
        element.addEventListener("click", function(event) {
            event.target.classList.toggle("items__filter-label_checked")
        })
    })
})
