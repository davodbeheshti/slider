// import Swiper from './swiper';
const boxs = document.querySelectorAll('#box');
const imgsBox1 = {
    address: '../img/img-box1',
    images: ['img-1.jpg', 'img-2.jpg', 'img-3.jpg', 'img-4.jpg', 'img-5.jpg', 'img-6.jpg']
}
const imgsBox2 = {
    address: '../img/img-box2',
    images: ['img-1.jpg', 'img-2.jpg', 'img-3.jpg', 'img-4.jpg', 'img-5.jpg', 'img-6.jpg']
}
const imgsBox3 = {
    address: '../img/img-box3',
    images: ['img-1.jpg', 'img-2.jpg', 'img-3.jpg', 'img-4.jpg', 'img-5.jpg', 'img-6.jpg']
}
const imgsBox4 = {
    address: '../img/img-box4',
    images: ['img-1.jpg', 'img-2.jpg', 'img-3.jpg', 'img-4.jpg', 'img-5.jpg', 'img-6.jpg', 'img-7.jpg']
}

boxs.forEach(x => {
    let classElement = x.className;
    x.addEventListener('click', () => {
        switch (classElement) {
            case 'box-1':
                console.log('box-1')
                appendSwiper(imgsBox1)
                break;
            case 'box-2':
                console.log('box-2')
                appendSwiper(imgsBox2)
                break;
            case 'box-3':
                console.log('box-3')
                appendSwiper(imgsBox3)
                break;
            case 'box-4':
                console.log('box-4')
                appendSwiper(imgsBox4)
                break;
        }
    })
})

function appendSwiper(arrayImgs) {
    console.log(arrayImgs)
    const appendSliderElement = document.querySelector('.main-background');
    appendSliderElement.innerHTML = null;
    appendSliderElement.classList = 'swiper mySwiper';
    const mySwiper = document.querySelector('.swiper')
    const swiperWrapper = document.createElement('div');
    swiperWrapper.classList = 'swiper-wrapper';
    mySwiper.append(swiperWrapper);
    arrayImgs.images.map(itemsImg => {
        const swiperSlide = document.createElement('div');
        swiperSlide.classList = 'swiper-slide';
        const img = document.createElement('img');
        img.src = arrayImgs.address + '/' + itemsImg;
        // img.classList = 'swiper-slide'
        // swiperSlide.textContent = 'slide'
        swiperSlide.appendChild(img)
        swiperWrapper.append(swiperSlide);
    })
    const nextBtn = document.createElement('div');
    const prevBtn = document.createElement('div');
    const paging = document.createElement('div');
    nextBtn.classList = 'swiper-button-next';
    prevBtn.classList = 'swiper-button-prev';
    paging.classList = 'swiper-pagination';
    mySwiper.append(nextBtn)
    mySwiper.append(prevBtn)
    mySwiper.append(paging)
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        spaceBetween: 30,
        slidesPerView: 3,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
    // var swiper = new Swiper(".mySwiper", {
    //     slidesPerView: "auto",
    //     spaceBetween: 30,
    //     pagination: {
    //         el: ".swiper-pagination",
    //         clickable: true,
    //     },
    //     navigation: {
    //         nextEl: ".swiper-button-next",
    //         prevEl: ".swiper-button-prev",
    //     },
    // });
}