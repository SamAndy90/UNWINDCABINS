export const linksDecoration = () => {
    const links = document.getElementById('header-list');

    const changeClass = (el) => {
        for(let i = 0; i < links.children.length; i++ ) {
            links.children[i].firstChild.classList.remove('active');
        }
        el.classList.add('active');
    }

    links.addEventListener('click', e => changeClass(e.target))
}