function getLanguage () {
    return window.location.href.split('/')[3]
}

export default getLanguage