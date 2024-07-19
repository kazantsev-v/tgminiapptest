let tg = window.Telegram.WebApp
tg.initData
Telegram.WebApp.ready();

axios.defaults.headers.post['Content-Type'] = 'application/json';

let theme = document.querySelector(`.theme`)
let search = document.querySelector(`.search`)
let userText = document.querySelector(`.text`)
let userFind = document.querySelector(`.user-find`)
let buttons = document.querySelectorAll(`.button`)

search.addEventListener('click', async function () {
    buttons[0].classList.add('hide')
    buttons[1].classList.add('hide')
    select = theme.value;
    console.log(select)
    let response = await axios.get(`/search`, { params: { theme: select } });
    USER = response.data;
    console.log(USER);
    userFind.innerHTML = `Найден пользователь <a href="https://t.me/${USER.userid}">${USER.name}</a>`
});