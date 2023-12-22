window.onscroll = () => checkPosition();

// тепер призначимо обробником подій трохи загальмовану функцію:
; (() => {
    window.addEventListener('scroll', throttle(checkPosition, 250));
    window.addEventListener('resize', throttle(checkPosition, 250));
})()

async function checkPosition() {
    const body = document.querySelector('body');
    // Нам потрібно знати висоту документа та висоту екрану:
    const bodyHeight = document.body.offsetHeight;
    const screenHeight = window.innerHeight;
    // Записуємо, скільки пікселів користувач вже проскролив:
    const scrolled = window.scrollY;
    // Позначимо поріг, після наближення якого викликатимемо якусь дію. У нашому випадку – чверть екрана до кінця сторінки:
    const threshold = bodyHeight - screenHeight / 4;
    // Відстежуємо, де знаходиться низ екрана щодо сторінки:
    const position = scrolled + screenHeight;

    if (position > threshold) {
        // Якщо ми перетнули смугу-поріг, викликаємо потрібну дію.
        // await fetchPictures()
        body.classList.add('body--no-transparency');
    } else {
        body.classList.remove('body--no-transparency');
    }
}


function throttle(callee, timeout) {
    // Обробку прокручування варто трохи пригальмовувати, щоб вона виконувалася трохи рідше і таким чином менше навантажувала браузер. Додамо функцію throttle()
    let timer = null;

    return function perform(...args) {
        if (timer) return;

        timer = setTimeout(() => {
            callee(...args);

            clearTimeout(timer);
            timer = null;
        }, timeout)
    }
}

// Наступну частину коду копіюєте до себе
// Слухач заганяємо в умову: активний, якщо карток більш однієї сторінки
//  if (totalImages > perPage) {
// window.addEventListener('scroll', handleScroll);
//         }

// Функція для бескінечного скролу
// function handleScroll() {
//     const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

//     if (scrollTop + clientHeight >= scrollHeight - 1) {
// запускаємо функцію завантаження наступної сторінки
// onLoadMore();
//     }
// }