(function(){
    if(window.localStorage.getItem('preferlang')){
        const lang = window.localStorage.getItem('preferlang');
        window.location.href = `${window.origin}/${lang}/`
    }
})();