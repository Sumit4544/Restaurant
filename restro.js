let food1s =document.getElementById('food1')
let food2s =document.getElementById('food2')
let foods = document.getElementById('food')




food1s.addEventListener('click', () => {
    foods.style.backgroundImage = "url(https://media.istockphoto.com/id/1190330112/photo/fried-pork-and-vegetables-on-white-background.jpg?s=612x612&w=0&k=20&c=TzvLLGGvPAmxhKJ6fz91UGek-zLNNCh4iq7MVWLnFwo=)"
})
food2s.addEventListener('click', () => {
    foods.style.backgroundImage = "url(https://media.istockphoto.com/id/1348318884/photo/plate-of-mexican-food-tacos.jpg?s=612x612&w=0&k=20&c=Vt8vi4-sCaum6YrzAiAkH7lUJK5mtp2zYT3uYw1M7iA=)"
})

function showFoodList(){

    let order = document.getElementById('orderpage')

    if(order.style.display === 'none' || order.style.display === ''){
        order.style.display = 'block'
    }
    else{
        order.style.display = 'none'
    }
}

