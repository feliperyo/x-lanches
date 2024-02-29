const list = document.querySelector(".ul-lanches")
const sumList = document.querySelector(".ul-sum")
let myLi = ''

function showAll(itensArray) {
    myLi = ''

    itensArray.forEach(item => {
        myLi += `
            <li>
                <img src=${item.src}>
                <p>${item.name}</p>
                <p class="item-price">R$${item.price}</p>
            </li>
            `

    })
    list.innerHTML = myLi
}

function priceDiscount() {

    const discount = menuOptions.map(item => ({
        ...item,
        price: Math.floor(item.price * 0.9),
    }))

    showAll(discount)
}

function sumPrice() {

    const sumOriginalPrice = menuOptions.reduce((acc, item) => {
        return acc + item.price
    }, 0)


    sumList.innerHTML = `
                    <li>
                    <p>O valor total sem cupom é de R$${sumOriginalPrice}</p>
                    <br>
                    <p>Com cupom: R$${sumOriginalPrice * 0.9}</p>
                    </li>`
}

function veganLanches() {

    const justVegan = menuOptions.filter(item => {
        if (item.vegan === true) {
            return true
        } else {
            return false
        }
    })
    showAll(justVegan)
    sumList.innerHTML = ''
}