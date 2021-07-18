const accordions = document.querySelectorAll(".main__card__faq__qa");

accordions.forEach(accordion => {
    accordion.addEventListener("click", ()=>{
        closeOthers(accordion);
        accordion.classList.toggle("main__card__faq__qa--active");
    })
})

function closeOthers(currentAccordion){
    accordions.forEach(accordion => {
        if(accordion !== currentAccordion)
            accordion.classList.remove("main__card__faq__qa--active");
    })
}