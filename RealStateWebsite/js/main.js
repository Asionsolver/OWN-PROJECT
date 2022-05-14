// **============================= CHANGE BACKGROUND HEADER============================= **//

function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 50) header.classList.add('scroll-header'); 
    
    // else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

// **============================= Swiper POPULAR ============================= **//

const swiperPopular = new Swiper('.popular-container', {
    spaceBetween: 32,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,

    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev', 
    },
});

// **============================= VALUE ACCORDION ============================= **//

const accordionItems = document.querySelectorAll('.value-accordion-item')

accordionItems.forEach(item => {
    const accordionHeader = item.querySelector('.value-accordion-header')


    accordionHeader.addEventListener('click', () => {
        const openItem = document.querySelector('.accordion-open')
        toggleItem(item)
        if(openItem && openItem !== item){
            toggleItem(openItem)
        }
    })
})

const toggleItem = (item) => {
    const accordionContent = item.querySelector('.value-accordion-content')

    if(item.classList.contains('accordion-open')) {
        accordionContent.removeAttribute('style')
        item.classList.remove('accordion-open')
    } else {
        accordionContent.style.height = accordionContent.scrollHeight + 'px'
        item.classList.add('accordion-open')
    }

    // accordionContent.style.height = accordionContent.scrollHeight + 'px'
    // item.classlist.add('accordion-open')
}

//**=============== SCROLL SECTIONS ACTIVE LINK ===============**/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)
