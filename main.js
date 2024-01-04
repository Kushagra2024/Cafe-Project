gsap.to("#logo_text", {
    backgroundColor: "#000",
    height: "50px",
    color: "white",
    duration: 1,
    scrollTrigger:{
        trigger:"#logo_text",
        scroller:"body",
        start: "top, -5%",
        end: "top, -7%",
        scrub: 1
    }
})

const tabs = document.querySelectorAll('.tab');
const menus = document.querySelectorAll('.menu');

tabs.forEach((tab) => {
    tab.addEventListener('click', (e) => {
        tabs.forEach((tb) => {
            tb.classList.remove('active');
            tb.children[0].classList.remove('active');
            tb.children[1].classList.remove('active');
        })

        tab.classList.add('active');
        tab.children[0].classList.add('active');
        tab.children[1].classList.add('active');

        menus.forEach((menu) => {
            menu.classList.remove('show');

            if(tab.id === menu.id)
            {
                menu.classList.add('show');
            }
        })
    })
})

const beverage_list = document.querySelectorAll('#beverages_list .menu_heading');
const beverage_card = document.querySelectorAll('.beverage_card');

beverage_list.forEach((list_item) => {
    list_item.addEventListener('click', (e) => {
        beverage_list.forEach((list) => {
            list.classList.remove('active');
        })

        list_item.classList.add('active');

        beverage_card.forEach((card) => {
            card.classList.remove('show');

            if(list_item.id === card.id)
            {
                card.classList.add('show');
            }
        })
    })
})

const food_list = document.querySelectorAll('#food_list .menu_heading');
const food_card = document.querySelectorAll('.food_card');

food_list.forEach((list_item) => {
    list_item.addEventListener('click', (e) => {
        food_list.forEach((list) => {
            list.classList.remove('active');
        })

        list_item.classList.add('active');

        food_card.forEach((card) => {
            card.classList.remove('show');

            if(list_item.id === card.id)
            {
                card.classList.add('show');
            }
        })
    })
})