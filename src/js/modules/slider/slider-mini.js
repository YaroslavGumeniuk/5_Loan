import Slider from './slider';

export default class MiniSlider extends Slider {
    constructor(container, next, prev, activeClass, animate, autoplay) {
        super(container, next, prev, activeClass, animate, autoplay);
    }

    decorizeSlides() {
        this.slides.forEach(slide => {
            slide.classList.remove(this.activeClass);
            if (this.animate) {
                slide.querySelector('.card__title').style.opacity = '0.4';
                slide.querySelector('.card__controls-arrow').style.opacity = '0';
            }
        });

        if (!this.slides[0].closest('button')) {
            this.slides[0].classList.add(this.activeClass);
        }

        if (this.animate) {
            this.slides[0].querySelector('.card__title').style.opacity = '1';
            this.slides[0].querySelector('.card__controls-arrow').style.opacity = '1';
        }
    }

    // nextSlide() {
    //     if (this.slides[0].tagName == "BUTTON" && this.slides[1].tagName == "BUTTON") {
    //         this.container.appendChild(this.slides[0]); // Slide
    //         this.container.appendChild(this.slides[1]); // Btn
    //         this.container.appendChild(this.slides[2]); // Btn
    //         this.decorizeSlides();
    //     } else if (this.slides[0].tagName == "BUTTON") {
    //         this.container.appendChild(this.slides[0]); // Slide
    //         this.container.appendChild(this.slides[1]); // Btn
    //         this.decorizeSlides();
    //     } else {
    //         this.container.appendChild(this.slides[0]);
    //         this.decorizeSlides();
    //     }
    // }

    // bindTriggers() {
    //     this.next.addEventListener('click', () => this.nextSlide());

    //     this.prev.addEventListener('click', () => {
    //         for (let i = this.slides.length - 1; i > 0; i--) {
    //             if (this.slides[i].tagName !== "BUTTON") {
    //                 let active = this.slides[i];
    //                 this.container.insertBefore(active, this.slides[0]);
    //                 this.decorizeSlides();
    //                 break;
    //             }
    //         }
    //     });
    // }

    moveButtonsToEnd() {
        this.slides.forEach((slide) => {
            if (slide.tagName === "BUTTON") {
                this.container.appendChild(slide);
            }
        });
    }

    nextSlide() {
        this.container.appendChild(this.slides[0]);
        this.decorizeSlides();
        this.moveButtonsToEnd();
    }

    bindTriggers() {
        this.next.addEventListener('click', () => this.nextSlide());

        this.prev.addEventListener('click', () => {
            let active = this.slides[0];
            this.container.insertBefore(active, this.slides[this.slides.length - 1]);
            this.decorizeSlides();
            this.moveButtonsToEnd();
        });
    }

    init() {
        this.container.style.cssText = `
            display: flex;
            flex-wrap: wrap;
            overflow: hidden;
            align-items: flex-start;
        `;

        this.bindTriggers();
        this.decorizeSlides();

        if (this.autoplay) {
            setInterval(() => this.nextSlide(), 5000);
        }
    }
}