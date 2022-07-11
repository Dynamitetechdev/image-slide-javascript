
let image_slider = [
    {
        "text": "Star Wars",
        "images": "img-1"
    },
    {
        "text": "Two Star Wars Fighting",
        "images": "img-2"
    },
    {
        "text": "Star Wars Imagination",
        "images": "img-3"
    },
];

let buttons = document.querySelectorAll(".slide_button");
let image_div = document.querySelector(".image_wrapper");
let count = 0;

buttons.forEach(function(button){
    button.addEventListener('click', function(e){
        if(button.classList.contains("left_button")){
            count--
            if(count < 0){
                count = image_slider.length - 1;
            }
            image_div.style.background = `url(./asset/${image_slider[count].images}.jpg) center/cover fixed no-repeat`
            document.querySelector(".images_name").textContent = image_slider[count].text;
        }
        if(button.classList.contains("right_button")){
            count++
            if(count > image_slider.length - 1){
                count = 0;
            }
            image_div.style.background = `url(./asset/${image_slider[count].images}.jpg) center/cover fixed no-repeat`
            document.querySelector(".images_name").textContent = image_slider[count].text;
        }
    })
})