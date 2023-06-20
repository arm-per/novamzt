function breadCrump () {

    const lang = window.__currentLang__

    const place = document.getElementById('breadcrump');

    if(place){
        const currentPath = window.location.href;
        const paths = currentPath.trimEnd().split('/');
        paths.splice(0,2);
        let template = '';
        let breadCrumpPath = '';
        paths.forEach((path, index) => {
            if(path === '') return;
            if(index === 0){
                breadCrump += path;
                template = `<a href="/">${lang === 'es' ? 'Inicio' : 'Home'}</a>`
            }else{
                breadCrumpPath += `/${path}`;
                template += ` / <a href="${breadCrumpPath}">${path.split('.')[0]}</a>`
            }
        })

        return place.innerHTML = template;
        
    }

}

export default breadCrump;