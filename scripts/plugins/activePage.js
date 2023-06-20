function activePage () {
    const currentPath = window.location.href;
    const links = document.querySelectorAll('#main-nav a');

    links.forEach(link => {
        if(link.href === currentPath){
            link.classList.add('active');
        }
    })
}

export default activePage;