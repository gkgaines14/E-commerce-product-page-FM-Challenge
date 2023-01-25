let image;
let loc;
let quantity =0 ;
let cartCount = 0;
let cartValue = 0;
let print = false;
let imgPos = 0;

const lightbox = document.createElement('div');
lightbox.id = 'lightbox';

// Dom elements

const thumbnails = document.querySelectorAll('.thumbnail');
const minusButton = document.getElementById('minus-btn');
const plusButton = document.getElementById('plus-btn');
const addCartButton = document.getElementById('cart-btn');
const counter = document.getElementById('counter');
const shoppingCart = document.getElementById('shopping-cart');
const cartIcon = document.getElementById('cart');
const deleteButton = document.getElementById('delete-btn');

const backButtonMobile = document.getElementById('back-btn-mbl');
const nextButtonMobile = document.getElementById('next-btn-mbl');
const mainImage = document.getElementById('main-img-mbl');
const menuButton = document.getElementById('hamburger-menu');

let imageArr =[
    'images/image-product-1.jpg',
    'images/image-product-2.jpg',
    'images/image-product-3.jpg',
    'images/image-product-4.jpg'
]

// Event Listners

cartIcon.addEventListener('click',()=>{
    if(shoppingCart.style.visibility=='visible'){
        shoppingCart.style.visibility = 'hidden';
    }else{
        shoppingCart.style.visibility='visible';
    }
});

thumbnails.forEach(item=>{
    item.addEventListener('click',lightBox(item));
});

plusButton.addEventListener('click',()=>{
    quantity++;
    counter.innerHTML = quantity;
});

minusButton.addEventListener('click',()=>{
    quantity--;
    if(quantity<0){
        quantity = 0;
    }
    counter.innerHTML = quantity;
});

addCartButton.addEventListener('click',()=>{
    cartCount +=quantity;
    quantity = 0;
    counter.innerHTML = quantity;
    cartValue = cartCount*125;
    const cartData = document.createElement('div');
    cartData.id = 'cart-bottom';

    if(cartCount!=0){
        document.getElementById('cart-count').style.visibility = 'visible';
        document.getElementById('cart-count').innerHTML = cartCount;


        if(print===true){
            document.getElementById('cart-bottom').remove();

            cartData.innerHTML = `
            <div id="cart-content-card">
                <img src="images/image-product-1.jpg" alt="item-image" id="cart-item-img">
                <div id="cart-desc">
                    <div id="cart-item-name">
                        Fall Limited Edition Sneakers
                    </div>
                    <div id="cart-pricing">
                        $125.00 x ${cartCount}  <span id="cart-total">$${cartValue}.00</span>
                    </div>
                </div>
                <img src="images/icon-delete.svg" alt="cart-trash-button" id="delete-btn">
            </div>
            <div id="checkout-btn">Checkout</div>
            `;

            shoppingCart.appendChild(cartData);
            
        }else{
            cartData.innerHTML = `
            <div id="cart-content-card">
                <img src="images/image-product-1.jpg" alt="item-image" id="cart-item-img">
                <div id="cart-desc">
                    <div id="cart-item-name">
                        Fall Limited Edition Sneakers
                    </div>
                    <div id="cart-pricing">
                        $125.00 x ${cartCount}  <span id="cart-total">$${cartValue}.00</span>
                    </div>
                </div>
                <img src="images/icon-delete.svg" alt="cart-trash-button" id="delete-btn">
            </div>
            <div id="checkout-btn">Checkout</div>
            `;
                
            shoppingCart.appendChild(cartData);
            document.getElementById('empty-cart').style.display = 'none'
            print = true;

        }
        
    }
    const deleteButton = document.getElementById('delete-btn');
    console.log(deleteButton)

    deleteButton.addEventListener('click',()=>{
        console.log('hi')
        document.getElementById('cart-bottom').remove();
        print = false;
        cartCount = 0;
        cartValue =0;
        document.getElementById('cart-count').style.visibility = 'hidden';
        document.getElementById('empty-cart').style.display = 'flex'

    })
})



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
                <div class="overlay" data-thumbloc="1"></div>
                <img src="images/image-product-1-thumbnail.jpg" alt="thumbnail-one" class="thumbnail-lb" data-pic = "images/image-product-1.jpg">
            </div>
            <div id=" id="thumb-two-lb" class="thumb-box">
                <div class="overlay" data-thumbloc="2"></div>
                <img src="images/image-product-2-thumbnail.jpg" alt="thumbnail-two" class="thumbnail-lb" data-pic = "images/image-product-2.jpg">
            </div>
            <div id=" id="thumb-three-lb" class="thumb-box">
                <div class="overlay" data-thumbloc="3" id="overlay-the"></div>
                <img src="images/image-product-3-thumbnail.jpg" alt="thumbnail-three" class="thumbnail-lb" data-pic = "images/image-product-3.jpg">
            </div>
            <div id=" id="thumb-four-lb" class="thumb-box">
                <div class="overlay" data-thumbloc="4"></div>
                <img src="images/image-product-4-thumbnail.jpg" alt="thumbnail-four" class="thumbnail-lb" data-pic = "images/image-product-4.jpg">
            </div>
        </div>
        
        
        `;
        
        lightbox.appendChild(lightCard);
        document.body.appendChild(lightbox);

        loc = item.dataset.loc
        document.querySelector(`[data-thumbloc="${loc}"]`).className='active'
        document.querySelector(`[data-thumbloc="${loc}"]`).style.visibility='visible'



    // Nav buttons --------------------------------------------------------------------

        const backButton = document.getElementById('back-btn')
        const nextButton = document.getElementById('next-btn')

        backButton.addEventListener('click',()=>{
            document.querySelector(`[data-thumbloc="${loc}"]`).className='overlay'
            document.querySelector(`[data-thumbloc="${loc}"]`).style.visibility='hidden'
            loc == 1 ? loc = 4: loc--;
            console.log(loc)
            document.querySelector(`[data-thumbloc="${loc}"]`).className='active'
            document.querySelector(`[data-thumbloc="${loc}"]`).style.visibility='visible'
            
            document.getElementById('light-img').remove()
            image = document.querySelector(`[data-loc="${loc}"]`).dataset.pic
                    
            let div = document.createElement('img')
            div.src=image
            div.id='light-img';
            document.getElementById('lb-img-container').appendChild(div)



        })

        nextButton.addEventListener('click',()=>{
            document.querySelector(`[data-thumbloc="${loc}"]`).className='overlay'
            document.querySelector(`[data-thumbloc="${loc}"]`).style.visibility='hidden'
            loc == 4 ? loc = 1: loc++;
            console.log(loc)
            document.querySelector(`[data-thumbloc="${loc}"]`).className='active'
            document.querySelector(`[data-thumbloc="${loc}"]`).style.visibility='visible'
            
            // replace image
            document.getElementById('light-img').remove()
            image = document.querySelector(`[data-loc="${loc}"]`).dataset.pic                       
            
            const div = document.createElement('img');
            div.src=image;
            div.id='light-img';
            document.getElementById('lb-img-container').appendChild(div);
        })

    //arrow highlights-------------------------------------------------------------------------

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
    
    // Thumbnail controls-----------------------------------------------------------------------

        const thumbBoxes = document.querySelectorAll('.thumb-box');
        thumbBoxes.forEach((item)=> {
                item.addEventListener('mouseover',()=>{
               
                    if(item.children[0].className=='active'){
                        item.children[0].className='active'
                        item.children[0].style.visibility='visible'
                    }else{
                        item.children[0].className='overlay'
                        item.children[0].style.visibility='visible'
                    }
                    
                })

                item.addEventListener('mouseout',()=>{
                    
                    if(item.children[0].className=='active'){
                        item.children[0].className=='active'
                    }else{
                        item.children[0].style.visibility ='hidden'
                    }
                })

                item.addEventListener('click',()=>{
                    console.log(item.children[0].className)
                    console.log(document.querySelector('.active'))


                    document.querySelector('.active').style.visibility = 'hidden'
                    document.querySelector('.active').className = 'overlay'

                    item.children[0].className='active'
                    item.children[0].style.visibility='visible'

                    // replace image
                    document.getElementById('light-img').remove()
                    image = item.children[1].dataset.pic

                    const div = document.createElement('img');
                    div.src=image;
                    div.id='light-img';
                    document.getElementById('lb-img-container').appendChild(div);

                    
                    loc = item.children[0].dataset.thumbloc
                    console.log(item.children[0].dataset.thumbloc)
                })
            });

        const closeBtn = document.getElementById('close-btn');
        closeBtn.addEventListener('click',()=>{
            lightbox.style.display='none';
            document.querySelector('#light-card').remove();

        })

    })
}


nextButtonMobile.addEventListener('click',()=>{
    imgPos++
    console.log(imgPos)
    if(imgPos==4){
        imgPos=0
        mainImage.style.backgroundImage = `url(${imageArr[imgPos]})`

    }else{
        mainImage.style.backgroundImage = `url(${imageArr[imgPos]})`
    }
});

backButtonMobile.addEventListener('click',()=>{
    imgPos--
    console.log(imgPos)
    if(imgPos==-1){
        imgPos=3
        mainImage.style.backgroundImage = `url(${imageArr[imgPos]})`

    }else{
        mainImage.style.backgroundImage = `url(${imageArr[imgPos]})`
    }
});

menuButton.addEventListener('click',()=>{
    const menu = document.getElementById("menu")
    menu.style.display = 'block'
    const closebtn = document.getElementById("menu-close")
    closebtn.addEventListener('click',()=>{
        menu.style.display = 'none'
    })

});