function cart () {
    document.getElementById('error').innerHTML = ''


    let name = document.getElementById('sneak').textContent
    let src = document.getElementById('src').value
    let size = document.getElementById('size').value
    let price = document.getElementById('price').textContent
    if (localStorage.getItem("item") && !localStorage.getItem("item2") && localStorage.getItem("bruh")) {
        if (localStorage.getItem("name") == name || localStorage.getItem("name2") == name) {
            document.getElementById('error').innerHTML = 'Товар уже в корзине'
        }
        else {
            let item2 = []
            localStorage.setItem("name2", name);
            localStorage.setItem("size2", size);
            localStorage.setItem("price2", price);
            localStorage.setItem("src2", src);
            item2.push (
                localStorage.getItem("name2"),
                localStorage.getItem("size2"),
                localStorage.getItem("price2"),
                localStorage.getItem("src2")
            )
            document.querySelector('.buy-btn').innerHTML = 'Товар в корзине'
            localStorage.setItem('item2', JSON.stringify(item2));
            document.getElementById('error').innerHTML = ''
        }
    }
    if (localStorage.getItem("item2") && localStorage.getItem("item")) {
        document.getElementById('error').innerHTML = 'Теперь корзина заполнена <br>Максимальное количество товаров в корзине: 2'
    }
    if (!localStorage.getItem("item2") && !localStorage.getItem("bruh")) {
        
        let item = []
        localStorage.setItem("name", name);
        localStorage.setItem("size", size);
        localStorage.setItem("price", price);
        localStorage.setItem("src", src);
        item.push (
            localStorage.getItem("name"),
            localStorage.getItem("size"),
            localStorage.getItem("price"),
            localStorage.getItem("src")
        )
        document.querySelector('.buy-btn').innerHTML = 'Товар в корзине'
            localStorage.setItem('item', JSON.stringify(item));
    }

    if (!localStorage.getItem("item")) {
        let item = []
        localStorage.setItem("name", name);
        localStorage.setItem("size", size);
        localStorage.setItem("price", price);
        localStorage.setItem("src", src);
        item.push (
            localStorage.getItem("name"),
            localStorage.getItem("size"),
            localStorage.getItem("price"),
            localStorage.getItem("src")
        )
            document.querySelector('.buy-btn').innerHTML = 'Товар в корзине'
            localStorage.setItem('item', JSON.stringify(item));
    }
    localStorage.setItem("bruh", 1)
   

  
    



}