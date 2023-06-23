export const scrollAnimation = () => {
    const animItems = document.querySelectorAll('._anim-scroll');
    if(animItems.length > 0) {
        const animOnScroll = () => {
            for(let i = 0; i < animItems.length; i++) {
                const animItem = animItems[i];
                const animItemHeight = animItem.offsetHeight;
                const animItemOffset = offset(animItem).top;
                const animStart = 4;

                let animItemPoint = window.innerHeight - animItemHeight/animStart;
                if(animItemHeight > window.innerHeight) {
                    animItemPoint = window.innerHeight - window.innerHeight/animStart;
                }
                if((window.scrollX > animItemOffset - animItemPoint) && window.scrollY < (animItemOffset + animItemHeight )) {
                    animItem.classList.add('_active');
                } else {
                    if(!animItem.classList.contains('_anim-hide')) {
                        animItem.classList.remove('_active');
                    }
                }
            }
        }
        function offset (el) {
            const rect = el.getBoundingClientRect(),
                scrollLeft = window.scrollX || document.documentElement.scrollLeft,
                scrollTop = window.scrollY || document.documentElement.scrollTop;
            return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
        }

        window.addEventListener('scroll', animOnScroll);
        setTimeout(() => {
            animOnScroll()
        }, 300);
    }
}