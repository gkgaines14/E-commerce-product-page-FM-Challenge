let image

const lightbox = document.createElement('div');
lightbox.id = 'lightbox'

// Dom elements

const thumbnails = document.querySelectorAll('.thumbnail');



// Event Listners

thumbnails.forEach(item=>{
    item.addEventListener('click',lightBox(item))
})

console.log(thumbnails)

function lightBox(item){
    item.addEventListener('click',()=>{
        lightbox.style.display = 'flex';
        image = item.dataset.pic;
        
        // Lightbox ----------------------------------------------------
        
        const lightCard = document.createElement('div');
        lightCard.id = 'light-card';
        lightCard.innerHTML=
        `
        <div id="close-btn-card">
            <svg viewBox="-1 0 10 20" width=35 height=30 xmlns="http://www.w3.org/2000/svg" id="close-btn"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="#69707D" fill-rule="evenodd"/ class="close-x"></svg>
        </div>
        <div id="lb-img-container">
            <img src="${image}" id="light-img" draggable="false">
        </div>
        <div id="button-bar">
            <svg viewBox="-3 -13 20 45" xmlns="http://www.w3.org/2000/svg" class="nav-btn" id="back-btn"><path d="M11 1 3 9l8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd"/ class="back-arrow"></svg>
            <svg viewBox="-5 -13 20 45" xmlns="http://www.w3.org/2000/svg" class="nav-btn" id="next-btn"><path d="m2 1 8 8-8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd"/ class="next-arrow"></svg>
        </div>
        <div id="img-card-light">
            <div id="thumb-one-lb" class="thumb-box">
                <div class="overlay" data-thumbLoc="1"></div>
                <img src="images/image-product-1-thumbnail.jpg" alt="thumbnail-one" class="thumbnail-lb">
            </div>
            <div id=" id="thumb-two-lb" class="thumb-box">
                <div class="overlay" data-thumbLoc="2"></div>
                <img src="images/image-product-2-thumbnail.jpg" alt="thumbnail-two" class="thumbnail-lb">
            </div>
            <div id=" id="thumb-three-lb" class="thumb-box">
                <div class="overlay" data-thumbLoc="3"></div>
                <img src="images/image-product-3-thumbnail.jpg" alt="thumbnail-three" class="thumbnail-lb">
            </div>
            <div id=" id="thumb-four-lb" class="thumb-box">
                <div class="overlay" data-thumbLoc="4"></div>
                <img src="images/image-product-4-thumbnail.jpg" alt="thumbnail-four" class="thumbnail-lb">
            </div>
        </div>
        
        
        `;
        
        lightbox.appendChild(lightCard);
        document.body.appendChild(lightbox);

        let loc = item.dataset.loc
        document.querySelector(`[data-thumbLoc="${loc}"]`).style.visibility='visible'

        const backButton = document.getElementById('back-btn')
        const nextButton = document.getElementById('next-btn')

        backButton.addEventListener('click',()=>{
            document.querySelector(`[data-thumbLoc="${loc}"]`).style.visibility='hidden'
            loc == 1 ? loc = 4: loc--;
            console.log(loc)

            document.querySelector(`[data-thumbLoc="${loc}"]`).style.visibility='visible'
            document.getElementById('light-img').remove()

            image = document.querySelector(`[data-loc="${loc}"]`).dataset.pic
            
            '<img src="${image}" id="light-img" draggable="false"></img>'
            
            let div = document.createElement('img')
            div.src=image
            div.id='light-img';
            document.getElementById('lb-img-container').appendChild(div)
        })

        nextButton.addEventListener('click',()=>{
            document.querySelector(`[data-thumbLoc="${loc}"]`).style.visibility='hidden'
            loc == 4 ? loc = 1: loc++;
            console.log(loc)

            document.querySelector(`[data-thumbLoc="${loc}"]`).style.visibility='visible'
            document.getElementById('light-img').remove()

            image = document.querySelector(`[data-loc="${loc}"]`).dataset.pic
                        
            let div = document.createElement('img');
            div.src=image;
            div.id='light-img';
            document.getElementById('lb-img-container').appendChild(div);
        })

    //arrow highlights 
        backButton.addEventListener('mouseover',()=>{
            document.querySelector('.back-arrow').style.stroke='var(--orange)'
        })
        backButton.addEventListener('mouseout',()=>{
            document.querySelector('.back-arrow').style.stroke='#1D2026'
        })
        nextButton.addEventListener('mouseover',()=>{
            document.querySelector('.next-arrow').style.stroke='var(--orange)'
        })
        nextButton.addEventListener('mouseout',()=>{
            document.querySelector('.next-arrow').style.stroke='#1D2026'
        })


        const closeBtn = document.getElementById('close-btn');
        closeBtn.addEventListener('click',()=>{
            lightbox.style.display='none';
            document.querySelector('#light-card').remove();

        })

    })
}

// console.log(image)









const thumbBoxes = document.querySelectorAll('.thumb-box');
thumbBoxes.forEach((item)=> {
        item.addEventListener('mouseover',()=>{
            console.log(item)
            console.log(item.firstChild)
        })
    });




// Shopping Cart ----------------------------------------------------
