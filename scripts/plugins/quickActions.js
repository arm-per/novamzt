import socialMediaLink from "./socialMediaLink.js";

function quickActions () {

    const lang = window.__currentLang__;
    console.log(lang)
    const breadcrump = document.getElementById('breadcrump')

    const socialMedia = (content) => {
        let socialMediaGrid = '';
        const socialMedia = content.redesSociales;
    
        socialMedia.forEach(social => {
            return socialMediaGrid += socialMediaLink(social.icon, social.name, social.url)
        })

        return `<h2 class="socialMediaHeading">${lang === 'es' ? 'Nuestras redes': 'Our Social Media'}</h2><section class="socialMediaGrid">${socialMediaGrid}</section>`
    }

    const banners = () => {
        return (
            `<div class="quickActionBannerContainer">
                <h3>${lang === 'es'? 'Promociones' : 'Promotions'}</h3>
                <div class="quickActionBannerSlider">
                    <img class="quickActionBanner" src="../assets/bg/bannerDomingo.jpg">
                    <img class="quickActionBanner" src="../assets/bg/bannerLunes.jpg">
                    <img class="quickActionBanner" src="../assets/bg/bannerMartes.jpg">
                    <img class="quickActionBanner" src="../assets/bg/bannerMiercoles.jpg">
                    <img class="quickActionBanner" src="../assets/bg/bannerJueves.jpg">
                    <img class="quickActionBanner" src="../assets/bg/bannerViernes.jpg">
                    <img class="quickActionBanner" src="../assets/bg/bannerSabado.jpg">
                <div>
            </div>`
        )
    }

    const address = () => {
        return (`
            <section class="qa_address">
                <h3 class="socialMediaHeading">${lang === 'es' ? 'Contacto' : 'Contact Us'}</h3>
                <div class="qa_address-container">
                    <a target="_blank" rel="noreferrer noopener" href="https://goo.gl/maps/CRdVXeZgjLHvwzbj7">
                        <img src="../assets/icons/road-map-line.svg" alt="Map">
                        ${lang === 'es'? 'Centro' : 'Downtown area'}
                    </a>
                    <a target="_blank" rel="noreferrer noopener" href="https://goo.gl/maps/cSe88PcR28vKKq4a7">
                        <img src="../assets/icons/road-map-line.svg" alt="Map">
                        ${lang === 'es'? 'Centro Médico Marina' : 'Marina Medical Center'}
                    </a>
                    <a href="tel:6699915399">
                        <img src="../assets/icons/customer-service-line.svg" alt="Call Us">
                        ${lang === 'es'? 'Llámanos' : 'Call Us'}
                    </a>
                </div>
            </section>
        `)
    }

    const template = () => {
        return `
        <button id="quickActionsButton" class="quickActionsButton">
            <span>${lang === 'es'? 'Accesos rápidos': 'Quick Access'}</span> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M12 8L18 14H6L12 8Z" fill="rgba(255,255,255,1)"></path></svg>
        </button>
        <div class="quickActionsBackground">
            <button id="closeQuickActions">
                ${lang === 'es'? 'Minimizar': 'Minimize'}
            </button>
            <div class="quickActionsContainer">
                ${socialMedia({redesSociales: [{icon: '../assets/icons/facebook-circle-fill.svg', name: 'facebook', url: 'https://web.facebook.com/labnovamaz'},{icon: '../assets/icons/instagram-fill.svg', name: 'instagram', url: 'https://www.instagram.com/laboratorionovamx/'},{icon: '../assets/icons/whatsapp-fill.svg', name: 'whatsapp', url: 'https://wa.me/6692710282'},{icon: '../assets/icons/youtube-fill.svg', name: 'youtube', url: 'https://www.youtube.com/channel/UCp9wwNw9sUZSTp9JPfteTFw'}]})}
                ${address()}
                ${banners()}
            </div>
        </div>`
    }

    function transformScroll () {
        const position = breadcrump.getBoundingClientRect().top;
        if(position < 1){
            document.getElementById('quickActionsButton').classList.add('minimize');
        }
        if(position > 1){
            document.getElementById('quickActionsButton').classList.remove('minimize');
        }
    }

    window.addEventListener('scroll', transformScroll)

    return document.getElementById('root').innerHTML = template();

}

export default quickActions;