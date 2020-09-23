export default class Difference {
    constructor(oldOfficer, newOffocer, items) {
        this.oldOfficer = document.querySelector(oldOfficer);
        this.newOfficer = document.querySelector(newOffocer);
        this.oldItems = this.oldOfficer.querySelectorAll(items);
        this.newItems = this.newOfficer.querySelectorAll(items);
        this.oldCounter = 0;
        this.newCounter = 0;
    }

    animated(item) {
        item.style.transition = 'ease-in 0.8s all';
        item.style.display = 'flex';
        setTimeout(function () {
            item.style.opacity = '1';
        }, 20);
    }

    bindTriggers(officer, items, counter) {

        officer.querySelector('.plus').addEventListener('click', () => {
            if (counter !== items.length - 2) {
                this.animated(items[counter]);
                counter++;
            } else {
                this.animated(items[counter]);
                items[items.length - 1].style.display = 'none';
            }
        })
    }

    hideItems(items) {
        items.forEach((item, i, arr) => {
            if (i !== arr.length - 1) {
                item.style.opacity = '0';
                item.style.display = 'none';
            }
        })
    }

    init() {
        this.hideItems(this.oldItems);
        this.hideItems(this.newItems);
        this.bindTriggers(this.oldOfficer, this.oldItems, this.oldCounter);
        this.bindTriggers(this.newOfficer, this.newItems, this.newCounter);
    }
}