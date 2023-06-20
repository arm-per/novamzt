function externalLink () {

    const svg = '<svg style="position: relative; top: 2px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"><path d="M10 6V8H5V19H16V14H18V20C18 20.5523 17.5523 21 17 21H4C3.44772 21 3 20.5523 3 20V7C3 6.44772 3.44772 6 4 6H10ZM21 3V11H19L18.9999 6.413L11.2071 14.2071L9.79289 12.7929L17.5849 5H13V3H21Z" fill="rgba(255,255,255,1)"></path></svg>';
    const links = document.querySelectorAll('#main-nav a');

    links.forEach(link => {
        if(link.target === '_blank'){
            link.innerHTML += ` ${svg}`;
        }
    })
}

export default externalLink;