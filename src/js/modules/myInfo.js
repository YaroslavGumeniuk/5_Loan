export default class MyInfo {
    constructor(btn, infoBlock) {
        // this.btns = document.querySelectorAll(btn);
        // this.infoBlocks = document.querySelectorAll(infoBlock);
    }

    myInfo() {
        let infoBtn = document.createElement('div');
        let infoBlock = document.createElement('div');
        let close = document.createElement('div');

        infoBtn.innerHTML = "Что реализовано <br> в этом проекте?"
        infoBlock.innerHTML = "В этом проекте на 'чистом JS' в ООП стиле реализован следующий функционал: <br><br> 1. Главный слайдер (кнопка слева внизу). <br> 2. Всплывающий блок (3-я страница). <br> 3. Видеоплеер в модальном окне (1-я страница кнопка 'WHY'). <br> 4. Создан общий прототип слайдера и реализованы слайдеры на 1-й, 3-й и 5-й странице. <br> 5. Блок 'The difference' (2-я страница). <br> 6. Форма данных (4-я и 6-я страница). <br><br> Далее - страница 'modules.html'. <br> 7. Слайдер (кнопка слева внизу, кнопки вперед - назад внизу). <br> 8. Динамический видеоплеер на странице с модулями (нижний становится доступным после окончания просмотра верхнего). <br> 9. Загрузка файлов (кнопка 'Download PDF'). <br> 10. Разворачивание контента (кнопка '+')."
        close.innerHTML = "&times";

        infoBtn.style.cssText = `
                // display: none;
                background: rgba(255, 245, 255, 0.7);
                transition: ease-in 0.7s all;
                width: 300px;
                height: 100px;
                border: 3px solid red;
                position: absolute;
                left: 500px;
                top: 50px;
                border-radius: 20px;
                cursor: pointer;
                font-size: 30px;
                color: #2546bc;
                text-align: center;
                line-height: 46px;
            `;

        infoBlock.style.cssText = `
                display: none;
                opacity: 0;
                padding: 15px;
                font-size: 18px;
                background: rgba(255, 245, 255, 0.7);
                transition: ease-in 0.7s all;
                width: 480px;
                height: 510px;
                border: 2px solid #2546bc;
                position: absolute;
                left: 500px;
                top: 50px;
                border-radius: 20px;
            `;

        close.style.cssText = `
                position: absolute;
                left: 480px;
                top: -15px;
                width: 50px;
                height: 50px;
                font-size: 60px;
                color: red;
                line-height: 42px;
                text-align: center;
                cursor: pointer;
            `;

        document.body.append(infoBtn);
        document.body.append(infoBlock);
        infoBlock.append(close);

        infoBtn.addEventListener('click', () => {
            infoBtn.style.display = 'none';
            infoBtn.style.opacity = '0';
            infoBlock.style.display = 'block';
            setTimeout(() => {
                infoBlock.style.opacity = '1';
            }, 20);
        })

        close.addEventListener('click', () => {
            infoBtn.style.display = 'block';
            setTimeout(() => {
                infoBtn.style.opacity = '1';
            }, 20);
            infoBlock.style.opacity = '0';
            setTimeout(() => {
                infoBlock.style.display = 'none';
            }, 500);

        })
    }


    init() {
        this.myInfo();
    }
}