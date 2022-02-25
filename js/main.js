// import Swiper from './swiper';
const boxs = document.querySelectorAll('#box');

boxs.forEach(x => {
    let classElement = x.className;
    x.addEventListener('click', () => {
        switch (classElement) {
            case 'box-1':
                console.log('box-1')
                break;
            case 'box-2':
                console.log('box-2')
                break;
            case 'box-3':
                console.log('box-3')
                break;
            case 'box-4':
                console.log('box-4')
                break;
        }
    })
})