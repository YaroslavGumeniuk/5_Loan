export default class Slider {
    constructor(page, btns) {
        this.page = document.querySelector(page);
        this.slides = this.page.children;
        this.btns = document.querySelectorAll(btns);
        this.slideIndex = 1;
    }

    showSlides(n) {
        if (n > this.slides.length) {
            this.slideIndex = 1;
        }

        if (n < 1) {
            this.slideIndex = this.slides.length;
        }

        // появление блока "hanson"
        try {
            this.hanson.style.opacity = '0';

            if (n == 3) {
                this.hanson.classList.add('animated');
                setTimeout(() => {
                    this.hanson.style.opacity = '1';
                    this.hanson.classList.add('slideInUp');
                }, 3000);
            } else {
                this.hanson.classList.remove('slideInUp');
            }
        } catch (e) { console.log(e) }

        this.slides.forEach(slide => {
            slide.style.display = 'none';
            slide.style.opacity = '0';
        });

        // this.slides[this.slideIndex - 1].style.display = 'block';
        // this.slides[this.slideIndex - 1].style.opacity = '1';

        // анимируем слайдер внутри класса
        let self = this;
        self.slides[self.slideIndex - 1].style.display = 'block';
        self.slides[self.slideIndex - 1].style.transition = 'ease-in 0.8s all';
        setTimeout(function () {
            self.slides[self.slideIndex - 1].style.opacity = '1';
        }, 20);

    }

    plusSlides(n) {
        this.showSlides(this.slideIndex += n);
    }

    render() {
        try {
            this.hanson = document.querySelector('.hanson');
        } catch (e) { console.log(e) }

        this.btns.forEach(item => {
            item.addEventListener('click', () => {
                this.plusSlides(1);
            });

            item.parentNode.previousElementSibling.addEventListener('click', (e) => {
                e.preventDefault();
                this.slideIndex = 1;
                this.showSlides(this.slideIndex);
            });
        });

        this.showSlides(this.slideIndex);
    }
}