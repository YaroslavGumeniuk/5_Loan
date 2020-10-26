export default class ShowInfo {
    constructor(btn, infoBlock) {
        this.btns = document.querySelectorAll(btn);
        this.infoBlocks = document.querySelectorAll(infoBlock);
    }

    showInfo(btns, infoBlocks) {
        infoBlocks.forEach((infoBlock) => {
            infoBlock.style.transition = 'ease-in 0.7s all';
            infoBlock.style.opacity = '0';
        })

        btns.forEach((btn) => {
            btn.addEventListener('click', function () {
                const sibling = btn.closest('.module__info-show').nextElementSibling;
                // sibling.classList.toggle('msg');
                // sibling.style.marginTop = '20px';

                if (getComputedStyle(sibling).display === 'none') {
                    sibling.style.display = 'block';
                    setTimeout(function () {
                        sibling.style.opacity = '1';
                    }, 20);
                    return;
                }

                if (getComputedStyle(sibling).display === 'block') {
                    setTimeout(function () {
                        sibling.style.display = 'none';
                    }, 500);
                    sibling.style.opacity = '0';
                    // sibling.style.opacity = '0';
                    return;
                }
            })
        })
    }

    init() {
        this.showInfo(this.btns, this.infoBlocks);
    }
}