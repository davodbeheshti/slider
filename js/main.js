// import Swiper from './swiper';
const boxs = document.querySelectorAll('#box');
const imgsBox1 = ['img1.png', 'img2.png', 'img3.png', 'img4.png', 'img5.png', 'img6.png']
const imgsBox2 = ['img1.png', 'img2.png', 'img3.png', 'img4.png', 'img5.png', 'img6.png']
const imgsBox3 = ['img1.png', 'img2.png', 'img3.png', 'img4.png', 'img5.png', 'img6.png']
const imgsBox4 = ['img1.png', 'img2.png', 'img3.png', 'img4.png', 'img5.png', 'img6.png']

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

const appendSwiper = (arrayImgs) => {
    console.log(arrayImgs)
}