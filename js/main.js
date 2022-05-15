const boxs = document.querySelectorAll('#box');

const imgsBox1 = {
    address: './img/img-box1',
    images: ['img-1.jpg', 'img-2.jpg', 'img-3.jpg', 'img-4.jpg', 'img-5.jpg', 'img-6.jpg']
}
const imgsBox2 = {
    address: './img/img-box2',
    images: ['img-1.jpg', 'img-2.jpg', 'img-3.jpg', 'img-4.jpg', 'img-5.jpg', 'img-6.jpg']
}
const imgsBox3 = {
    address: './img/img-box3',
    images: ['img-1.jpg', 'img-2.jpg', 'img-3.jpg', 'img-4.jpg', 'img-5.jpg', 'img-6.jpg']
}
const imgsBox4 = {
    address: './img/img-box4',
    images: ['img-1.jpg', 'img-2.jpg', 'img-3.jpg', 'img-4.jpg', 'img-5.jpg', 'img-6.jpg', 'img-7.jpg']
}

boxs.forEach(x => {
    let classElement = x.className;
    x.addEventListener('click', () => {
        switch (classElement) {
            case 'box-1':
                setTransition("#ffffff", "#ffffff", "all .3s ease");
                setTimeout(() => {
                    appendSwiper(imgsBox1)
                }, 1000);
                break;
            case 'box-2':
                setTransition("#ffffff", "#ffffff", "all .6s ease");
                setTimeout(() => {
                    appendSwiper(imgsBox2)
                }, 1000);
                break;
            case 'box-3':
                setTransition("#ffffff", "#ffffff", "all .9s ease");
                setTimeout(() => {
                    appendSwiper(imgsBox3)
                }, 1000);
                break;
            case 'box-4':
                setTransition("#ffffff", "#ffffff", "all 1.1s ease");
                setTimeout(() => {
                    appendSwiper(imgsBox4)
                }, 1000);
                break;
        }
    })
})

const setTransition = (backgroundColor, borderColor, transition) => {
    for (let i = 1; i <= 4; i++) {
        document.querySelector('.box-' + i).style.background = backgroundColor;
        document.querySelector('.box-' + i).style.borderColor = borderColor;
        document.querySelector('.box-' + i).style.transition = transition;
    }
}

const appendSwiper = (arrayImgs) => {
    let appendSliderElement = document.querySelector('.main-background');
    appendSliderElement.style.display = 'none';
    let sectionSlider = document.querySelector('.convert-section-slider');
    sectionSlider.appendChild(createTagElement('div', 'swiper mySwiper'))
        // appendSliderElement.classList = 'swiper mySwiper';
    const mySwiper = document.querySelector('.swiper')
    const swiperWrapper = createTagElement('div', 'swiper-wrapper');
    mySwiper.append(swiperWrapper);
    arrayImgs.images.map(itemsImg => {
        const swiperSlide = createTagElement('div', 'swiper-slide');
        const img = createTagElement('img', '');
        const btnBack = createTagElement('span', 'btn-back')
        const iconBack = createTagElement('i', 'fa fa-arrow-left');
        btnBack.appendChild(iconBack);
        img.src = arrayImgs.address + '/' + itemsImg;
        swiperSlide.appendChild(img);
        swiperSlide.appendChild(btnBack);
        swiperWrapper.append(swiperSlide);
    })
    const nextBtn = createTagElement('div', 'swiper-button-next');
    const prevBtn = createTagElement('div', 'swiper-button-prev');
    const paging = createTagElement('div', 'swiper-pagination');
    mySwiper.append(nextBtn)
    mySwiper.append(prevBtn)
    mySwiper.append(paging)
    swiperSlider();
    const btnBack = document.querySelectorAll('.btn-back')
    btnBack.forEach(btns => {
        btns.addEventListener('click', () => {
            if (btns.parentElement.className.includes('swiper-slide-active')) {
                // click to first img section
                hidesImgSlider(mySwiper, btns, 'nextElementSibling');
            } else if (btns.parentElement.className.includes('swiper-slide-next')) {
                // click to img center section
                hidesImgCenterSlider(mySwiper, btns);
            } else {
                // click to last img section
                hidesImgSlider(mySwiper, btns, 'previousElementSibling');
            }
        })
    })
}

const swiperSlider = () => {
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
}

const createTagElement = (tagName, classList) => {
    const el = document.createElement(tagName);
    el.classList = classList;
    return el;
}

// click btn back in img slider first or last
const hidesImgSlider = (swiper, btns, preveORnextElement, command) => {
    btns.parentElement.style.transition = 'all .3s ease';
    btns.parentElement.style.opacity = 0;
    btns.parentElement[preveORnextElement].style.transition = 'all .7s ease';
    btns.parentElement[preveORnextElement].style.opacity = 0;
    btns.parentElement[preveORnextElement][preveORnextElement].style.transition = 'all 1.1s ease';
    btns.parentElement[preveORnextElement][preveORnextElement].style.opacity = 0;
    setTimeout(() => {
        swiper.remove();
        let appendSliderElement = document.querySelector('.main-background');
        appendSliderElement.style.display = 'flex';
        setTransition("", "", "");
        setTransition("", "", "");
        setTransition("", "", "");
        setTransition("", "", "");
    }, 1100);
}

// click btn back in img slider center
const hidesImgCenterSlider = (swiper, btns) => {
    btns.parentElement.style.transition = 'all .3s ease';
    btns.parentElement.style.opacity = 0;
    btns.parentElement.nextElementSibling.style.transition = 'all .8s ease';
    btns.parentElement.nextElementSibling.style.opacity = 0;
    btns.parentElement.previousElementSibling.style.transition = 'all .8s ease';
    btns.parentElement.previousElementSibling.style.opacity = 0;
    setTimeout(() => {
        swiper.remove();
        let appendSliderElement = document.querySelector('.main-background');
        appendSliderElement.style.display = 'flex';
        setTransition("", "", "");
        setTransition("", "", "");
        setTransition("", "", "");
        setTransition("", "", "");
    }, 800);
}