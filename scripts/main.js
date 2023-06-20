import quickActions from "./plugins/quickActions.js";
import getLanguage from "./plugins/getLanguage.js";
import gallery from "./plugins/gallery.js";
import maps from "./plugins/maps.js";
import breadCrump from "./plugins/breadcrump.js";
import activePage from "./plugins/activePage.js";
import externalLink from "./plugins/externalLink.js";
import disabledLinks from "./plugins/disabledLinks.js";

(function(){
    window.__currentLang__ = getLanguage();
    quickActions();
    activePage();
    externalLink();
    disabledLinks();

    if(window.location.href === `${window.origin}/es/` || window.location.href === `${window.origin}/en/` ){
        document.querySelector('.quickActionsBackground').style.display = 'flex';
    }

   

    const signature = document.getElementById('currentYear');
   
    if(signature){
        signature.innerText = new Date().getFullYear();
    }

    const galleryNode = document.querySelector('.gallery-content');
    gallery(galleryNode);
    
    if(window.location.pathname.includes('contact')){
        maps(window.__currentLang__);
    }
    
    function closeModal () {
        const modal = document.querySelector('.quickActionsBackground');
        modal.style.display = 'none';
    }

    function openModal (){
        const modal = document.querySelector('.quickActionsBackground');
        modal.style.display = 'flex';
    }

    window.addEventListener('DOMContentLoaded', ()=>{
        document.getElementById('quickActionsButton').addEventListener('click', openModal)
        document.getElementById('closeQuickActions').addEventListener('click', closeModal)
    })

    breadCrump();
   
})()