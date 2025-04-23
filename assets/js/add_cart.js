document.querySelector('.cart-element').style.display = 'flex'
                document.querySelector('.itog').style.display = 'block'
                document.querySelector('.empty').style.display = 'none'
                document.querySelector('.checkout').style.display = 'block'
             if (!localStorage.getItem("item") && !localStorage.getItem("item2")) {
                document.querySelector('.itog').style.display = 'none'
                document.querySelector('.empty').style.display = 'flex'
                document.querySelector('.cart').style.marginBottom = '350px'
                document.querySelector('.checkout').style.display = 'none'
             }
             if (!localStorage.getItem("item")) {
              
                document.querySelector('.cart-el1').style.display = 'none'
             }
             document.getElementById('count').innerHTML = 1
             document.getElementById('count2').innerHTML = 1
             let item2 = JSON.parse(localStorage.getItem("item2"))
            if(localStorage.getItem("item2")) {
               
                document.querySelector('.cart-el2').style.display = 'flex'

                document.getElementById('name2').innerHTML = item2[0]
                document.getElementById('size2').innerHTML = item2[1]
                document.getElementById('price2').innerHTML = item2[2]
                document.querySelector(".img2").src=item2[3];
            }
             let item = JSON.parse(localStorage.getItem("item"))

             document.getElementById('name').innerHTML = item[0]
             document.getElementById('size').innerHTML = item[1]
             document.getElementById('price').innerHTML = item[2]
             document.querySelector("img").src=item[3];

             for_itog1 = document.getElementById('price').textContent.replaceAll(' ', '')
             for_itog2 = document.getElementById('price2').textContent.replaceAll(' ', '')
             document.getElementById('itogi').innerHTML = Number(for_itog1) + Number(for_itog2)

             function plus() {
                let count = document.getElementById('count').innerHTML
                if ( document.getElementById('count').innerHTML > 5) {
                    document.getElementById("plus").disabled = true; 
                }
                if ( document.getElementById('count').innerHTML < 5) {
                    document.getElementById("plus").disabled = false; 
                    let summ = document.getElementById('price').textContent
                    summ = summ.replaceAll(' ', '')
                    document.getElementById('price').innerHTML = Number(summ) + Number(item[2].replaceAll(' ', ''))
                    document.getElementById('count').innerHTML = Number(count)+Number(1)
                    for_itog1 = document.getElementById('price').textContent.replaceAll(' ', '')
                    for_itog2 = document.getElementById('price2').textContent.replaceAll(' ', '')
                    document.getElementById('itogi').innerHTML = Number(for_itog1) + Number(for_itog2)
                }
             }
             function minus() {
                let count = document.getElementById('count').innerHTML
                if ( document.getElementById('count').innerHTML < 1) {
                    document.getElementById("min").disabled = true; 
                }                
                if ( document.getElementById('count').innerHTML > 1) {
                    document.getElementById("min").disabled = false; 
                    let summ = document.getElementById('price').textContent
                    summ = summ.replaceAll(' ', '')
                    document.getElementById('price').innerHTML = Number(summ) - Number(item[2].replaceAll(' ', ''))
                    document.getElementById('itogi').innerHTML = Number(summ) - Number(item[2].replaceAll(' ', ''))
                    document.getElementById('count').innerHTML = Number(count)-Number(1)
                    for_itog1 = document.getElementById('price').textContent.replaceAll(' ', '')
                    for_itog2 = document.getElementById('price2').textContent.replaceAll(' ', '')
                    document.getElementById('itogi').innerHTML = Number(for_itog1) + Number(for_itog2)
                }
             }
             function reset() {
                localStorage.removeItem('item');
                location.reload()
             }





             function reset2() {
                localStorage.removeItem('item2');
                location.reload()
             }




             function plus2() {
                let count = document.getElementById('count2').innerHTML
                if ( document.getElementById('count2').innerHTML > 5) {
                    document.getElementById("plus2").disabled = true; 
                }
                if ( document.getElementById('count2').innerHTML < 5) {
                    document.getElementById("plus2").disabled = false; 
                    let summ = document.getElementById('price2').textContent
                    summ = summ.replaceAll(' ', '')
                    document.getElementById('price2').innerHTML = Number(summ) + Number(item2[2].replaceAll(' ', ''))
                    document.getElementById('count2').innerHTML = Number(count)+Number(1)
                    for_itog1 = document.getElementById('price').textContent.replaceAll(' ', '')
                    for_itog2 = document.getElementById('price2').textContent.replaceAll(' ', '')
                    document.getElementById('itogi').innerHTML = Number(for_itog1) + Number(for_itog2)
                }
             }
             function minus2() {
                let count = document.getElementById('count2').innerHTML
                if ( document.getElementById('count2').innerHTML < 1) {
                    document.getElementById("min2").disabled = true; 
                }                
                if ( document.getElementById('count2').innerHTML > 1) {
                    document.getElementById("min2").disabled = false; 
                    let summ = document.getElementById('price2').textContent
                    summ = summ.replaceAll(' ', '')
                    document.getElementById('price2').innerHTML = Number(summ) - Number(item2[2].replaceAll(' ', ''))
                    document.getElementById('count2').innerHTML = Number(count)-Number(1)
                    for_itog1 = document.getElementById('price').textContent.replaceAll(' ', '')
                    for_itog2 = document.getElementById('price2').textContent.replaceAll(' ', '')
                    document.getElementById('itogi').innerHTML = Number(for_itog1) + Number(for_itog2)
                }
             }
            