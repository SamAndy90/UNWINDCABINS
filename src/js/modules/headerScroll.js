export const headerScroll = (headerHight) => {
    window.onload = () => {
        if(window.innerWidth >= 768) {
            const header = document.querySelector('.header');
            const hero = document.querySelector('.page__hero');
        
            window.addEventListener('scroll', () => {
                if(window.scrollY > headerHight) header.style.opacity=0;
                if(window.scrollY > 500) {
                    header.classList.add('active');
                    hero.style.marginTop='100px';
                    header.style.opacity=1;
                } else {
                    header.style.opacity=1;
                    if(window.scrollY == 0) {
                        header.classList.remove('active');
                        hero.style.marginTop='0';
                    }
                };
            })
        }
    }
}
