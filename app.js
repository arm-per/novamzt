(function(){
    function $ (element) {
        return document.querySelectorAll(element)
    }

    const links = $('a');
    links.forEach(function(link){
        const href = link.href;
        link.addEventListener('click', function (ev) {
            ev.preventDefault();
            const langpref = $('#langpreference');
            if(langpref[0].checked){
                if(href.includes('/es/')){
                    window.localStorage.setItem('preferlang', 'es');
                }else{
                    window.localStorage.setItem('preferlang', 'en');
                }
            }
            
            window.location.href = href;
        })
    })
})()