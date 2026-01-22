const translations = {
    en: {
        bio: `Hi, im <strong>Ike thexxxike</strong>. Im a developer with experience in backend, 
              frontend, and database work. I specialize in creating full-fledged web 
              applications and chatbots, as well as working with Linux servers based 
              on Debian and Arch distributions.`,
        forum: 'Forum',
        reviews: 'Reviews',
        source: 'Source',
        projects: 'Projects',
        additionalLinks: 'Additional links:',
        telegramChannel: 'Telegram-channel'
    },
    ru: {
        bio: `Привет, я <strong>Айк thexxxike</strong>. Я разработчик с опытом в бэкенде, 
              фронтенде и работе с базами данных. Специализируюсь на создании полноценных 
              веб-приложений и чат-ботов, а также работаю с Linux серверами на базе 
              дистрибутивов Debian и Arch.`,
        forum: 'Форум',
        reviews: 'Отзывы',
        source: 'Исходник',
        projects: 'Проекты',
        additionalLinks: 'Дополнительные ссылки:',
        telegramChannel: 'Телеграм-канал'
    }
};

let currentLang = localStorage.getItem('lang') || 'en';

function updateLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    
    const t = translations[lang];
    
    document.querySelector('.bio-card p').innerHTML = t.bio;
    
    const footerLinks = document.querySelectorAll('.footer-link');
    footerLinks[0].textContent = t.forum;
    footerLinks[1].textContent = t.source;
    footerLinks[2].textContent = t.reviews;
    footerLinks[3].textContent = t.projects;
    footerLinks[4].textContent = t.telegramChannel;
    
    document.querySelector('.footer-title').textContent = t.additionalLinks;
    
    document.querySelector('.lang-current').textContent = lang === 'en' ? 'English' : 'Русский';
    
    const langOption = document.querySelector('.lang-option');
    if (lang === 'en') {
        langOption.textContent = 'Русский';
        langOption.dataset.lang = 'ru';
    } else {
        langOption.textContent = 'English';
        langOption.dataset.lang = 'en';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const dropdown = document.querySelector('.lang-dropdown');
    const langBtn = document.querySelector('.lang-btn');
    const langOption = document.querySelector('.lang-option');
    
    updateLanguage(currentLang);
    
    langBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdown.classList.toggle('active');
    });
    
    langOption.addEventListener('click', () => {
        const lang = langOption.dataset.lang;
        updateLanguage(lang);
        dropdown.classList.remove('active');
    });
    
    document.addEventListener('click', (e) => {
        if (!dropdown.contains(e.target)) {
            dropdown.classList.remove('active');
        }
    });
});
