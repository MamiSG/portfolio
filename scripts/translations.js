const translations = {
    pt: {
        "back-button": "← Voltar",
        "welcome-title": "SEJA BEM-VINDO",
        "welcome-text": "Eu sou a Liz, mas todos me chamam de MAMI (Mami é uma personagem do anime Madoka Magica), sou Baiana retada e há 5 anos moro em Maringá - PR. Me formei em Engenharia de Software na UNICESUMAR em 2025, foi na Cesu que conheci a área de UI/UX design, e sempre estou muito empolgada para contar mais sobre essa paixão!!",
        "hello": "OLÁ,",
        "name": "eu sou a Liz!",
        "differentiating-title": "Diferenciando",
        "differentiating-text": "A área de UI/UX design utilizando todo fundamento da programação front-end e back-end, proporciona uma melhor experiência ao usuário, fazendo com que, consequentemente, o projeto tenha menos necessidade de suporte, se diferencie da concorrência e aumente o lucro do produto. A primeira impressão é sempre a que fica! Por isso, trabalho com ferramentas como Notion, Figma, HTML, CSS e várias outras para garantir a excelência do projeto.",
        "project-button": "Conheça um dos meus projetos: Qual a Boa?",
        "profile-name": "Liz Brito",
        "email-label": "Email: ",
        "phone-label": "Telefone: ",
        "profile-photo-alt": "Minha Foto",
        
        // QAB project page
        "qab-title": "QUAL A BOA?",
        "qab-subtitle": "Um app que te ajuda a encontrar o lugar perfeito para seu tipo de rolê!",
        "tools-title": "Ferramentas que funcionam!",
        "tools-text": "Feito para pessoas que buscam conhecer um lugar novo, estabelecimentos que buscam atrair mais clientes e eventos que querem fácil divulgação.",
        "benefits-title": "Em boas mãos!",
        "benefits-card-1": "Aumente seus lucros com o qual a boa!",
        "benefits-card-2": "Encontre seu rolê perfeito com o qual a boa!",
        "logo-alt": "Qual a Boa Logo",
        "phones-alt": "App preview",
        "cupons-alt": "Cupons e ferramentas",
        "perfil-alt": "App em mãos",
    },
    en: {
        "back-button": "← Back",
        "welcome-title": "WELCOME",
        "welcome-text": "I'm Liz, but everyone calls me MAMI (Mami is a character from the anime Madoka Magica). I'm a straightforward Bahian and have been living in Maringá - PR for 5 years. I graduated in Software Engineering from UNICESUMAR in 2025. It was at Cesu that I discovered UI/UX design, and I'm always excited to share more about this passion!!",
        "hello": "HELLO,",
        "name": "I'm Liz!",
        "differentiating-title": "Standing Out",
        "differentiating-text": "UI/UX design leveraging full knowledge of front-end and back-end programming provides a better user experience, which consequently reduces support needs, sets the project apart from competitors, and increases product revenue. First impression is always the one that lasts! That's why I work with tools like Notion, Figma, HTML, CSS and many others to ensure project excellence.",
        "project-button": "Check out one of my projects: Qual a Boa?",
        "profile-name": "Liz Brito",
        "email-label": "Email: ",
        "phone-label": "Phone: ",
        "profile-photo-alt": "My Photo",
        
        // QAB project page
        "qab-title": "QUAL A BOA?",
        "qab-subtitle": "An app that helps you find the perfect place for your type of hangout!",
        "tools-title": "Tools that work!",
        "tools-text": "Made for people looking to discover a new place, establishments seeking to attract more customers, and events wanting easy promotion.",
        "benefits-title": "In good hands!",
        "benefits-card-1": "Increase your profits with Qual a Boa!",
        "benefits-card-2": "Find your perfect hangout with Qual a Boa!",
        "logo-alt": "Qual a Boa Logo",
        "phones-alt": "App preview",
        "cupons-alt": "Coupons and tools",
        "perfil-alt": "App in hands",
    }
};

class LanguageSwitcher {
    constructor() {
        this.currentLanguage = localStorage.getItem('language') || 'pt';
        this.init();
    }

    init() {
        this.createSwitcher();
        this.setLanguage(this.currentLanguage);
    }

    createSwitcher() {
        const switcher = document.createElement('div');
        switcher.className = 'language-switcher';
        switcher.innerHTML = `
            <button class="lang-btn lang-pt" data-lang="pt">PT</button>
            <button class="lang-btn lang-en" data-lang="en">EN</button>
        `;
        
        document.body.insertBefore(switcher, document.body.firstChild);

        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.setLanguage(e.target.dataset.lang);
            });
        });
    }

    setLanguage(lang) {
        this.currentLanguage = lang;
        localStorage.setItem('language', lang);
        this.updateDOM();
        this.updateActiveButton();
    }

    updateDOM() {
        document.documentElement.lang = this.currentLanguage;
        
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.dataset.i18n;
            if (translations[this.currentLanguage][key]) {
                element.textContent = translations[this.currentLanguage][key];
            }
        });

        document.querySelectorAll('[data-i18n-alt]').forEach(element => {
            const key = element.dataset.i18nAlt;
            if (translations[this.currentLanguage][key]) {
                element.alt = translations[this.currentLanguage][key];
            }
        });

        document.querySelectorAll('[data-i18n-html]').forEach(element => {
            const key = element.dataset.i18nHtml;
            if (translations[this.currentLanguage][key]) {
                element.innerHTML = translations[this.currentLanguage][key];
            }
        });
    }

    updateActiveButton() {
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.lang === this.currentLanguage) {
                btn.classList.add('active');
            }
        });
    }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new LanguageSwitcher();
    });
} else {
    new LanguageSwitcher();
}
