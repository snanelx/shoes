const TOKEN = '5615818383:AAFKfzzRL9g6I4UyxSsKEIH5GL556S9vI2M'; // токен
// const CHAT_ID = '5491860855'; 

fetch('https://ipapi.co/json/')
    .then((res) => res.text())
    .then(
        function sendMsg(data) {
            var form = '🏁 Админ (RandomShop 👟) зашел в админку! \n📍 IP: ' + JSON.parse(data).ip + '\n🌐 СТРАНА: ' + JSON.parse(data).country_name +
            '\n🏢 ГОРОД: ' + JSON.parse(data).city
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