function disabledLinks () {

    const lang = window.__currentLang__ 

    const links = document.querySelectorAll('.isDisabled');

    links.forEach(link => {
        link.addEventListener('click', (ev) => {
            ev.preventDefault();
            window.alert(lang === 'es' ? 'Pronto estará disponible está funcionalidad' : 'This feature is Coming Soon')
        });
    })
}

export default disabledLinks;