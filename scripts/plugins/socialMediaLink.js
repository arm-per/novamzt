function socialMediaLink (icon, name, url) {

    return `<a class="qa_socialMedia" href=${url} target="_blank" rel="noopener noreferrer">
        <div class="qa_SM_icon">
            <img src="${icon}" alt="${name}"/>
        </div>
        <div class="qa_SM_title">
            <h2>${name}</h2>
        </div>
    </a>`

}

export default socialMediaLink;