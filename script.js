document.addEventListener('DOMContentLoaded', () => {

    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.header__nav');
    const navItems = document.querySelectorAll('.header__nav-item');
    const body = document.body;

    // Функция для закрытия меню
    const closeMenu = () => {
        burger.classList.remove('active');
        nav.classList.remove('active');
        body.style.overflow = ''; // Восстанавливаем скролл страницы
    };

    // Обработчик для бургера
    burger.addEventListener('click', function () {
        this.classList.toggle('active');
        nav.classList.toggle('active');
        body.style.overflow = this.classList.contains('active') ? 'hidden' : '';
    });

    // Закрытие меню при клике на ссылки
    navItems.forEach(item => {
        item.addEventListener('click', closeMenu);
    });

    // Закрытие меню при клике вне его области
    document.addEventListener('click', (e) => {
        if (!nav.contains(e.target) && !burger.contains(e.target) && nav.classList.contains('active')) {
            closeMenu();
        }
    });

    navItems.forEach(item => {
        item.addEventListener('click', function (e) {
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    closeMenu();
                    setTimeout(() => {
                        target.scrollIntoView({ behavior: 'smooth' });
                    }, 300); // Задержка для анимации закрытия меню
                }
            } else {
                closeMenu();
            }
        });
    });


    const header = document.querySelector('.header');
    const headerSubname = document.querySelector('.header__subname');
    const headerName = document.querySelector('.header__name');
    const scrollTrigger = 100;

    if (!header || !headerSubname) return;

    function handleScroll() {
        if (window.scrollY > scrollTrigger) {
            headerSubname.style.display = 'none';
            headerName.style.padding = '0'
        } else {
            headerSubname.style.display = 'block';
            headerName.style.padding = '22px 0'
        }
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll();


    document.addEventListener('DOMContentLoaded', function () {
        // Инициализация попапа
        const devPopup = document.getElementById('devPopup');
        const popupClose = document.querySelector('.dev-popup__close');

        // Функция для показа попапа
        function showDevPopup() {
            devPopup.classList.add('dev-popup--show');
            document.body.style.overflow = 'hidden'; // Блокируем скролл страницы
        }

        // Функция для скрытия попапа
        function hideDevPopup() {
            devPopup.classList.remove('dev-popup--show');
            document.body.style.overflow = ''; // Восстанавливаем скролл
        }

        // Закрытие по крестику
        if (popupClose) {
            popupClose.addEventListener('click', hideDevPopup);
        }

        // Закрытие по клику вне попапа
        devPopup.addEventListener('click', function (e) {
            if (e.target === devPopup) {
                hideDevPopup();
            }
        });

        // Добавляем обработчики для всех кнопок с классом .dev-button
        document.querySelectorAll('.dev-button').forEach(button => {
            button.addEventListener('click', function (e) {
                e.preventDefault();
                showDevPopup();
            });
        });
    });
})
