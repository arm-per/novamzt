function maps (lang){

    const btnMedicalCenter = document.getElementById('btn-medicalCenter');
    const btnDowntown = document.getElementById('btn-downtown');
    const mapview = document.getElementById('mapView');
    const BranchOffice = document.getElementById('branch');
     
    const Maps = {
        downtown: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.229265328201!2d-106.42247202422918!3d23.19831397905102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x869f53951dfa3251%3A0xdc24ffff73cf1f50!2sAquiles%20Serd%C3%A1n%201106%2C%20Centro%2C%2082000%20Mazatl%C3%A1n%2C%20Sin.!5e0!3m2!1sen!2smx!4v1684215703369!5m2!1sen!2smx',
        Marina: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3665.179535372567!2d-106.44931722422717!3d23.27292527899913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8698ab573554abd7%3A0xe2f7c2f77c653c62!2sAv.%20Carlos%20Canseco%206050-local%20101%20C%2C%20Marina%20Mazatl%C3%A1n%2C%2082103%20Mazatl%C3%A1n%2C%20Sin.!5e0!3m2!1sen!2smx!4v1684215574366!5m2!1sen!2smx'
    }
    
    const Address = {
        es: {
            marina: {
                name: 'Centro Médico Marina',
                address: 'Av. Carlos Canseco 6050, local 101 C. Marina Mazatlán, 82103 Mazatlán, Sin.',
            },
            downtown: {
                name: 'Centro',
                address: 'Aquiles Serdán 1106. Centro, 82000 Mazatlán Sin.',
            }
        },
        en: {
            marina: {
                name: 'Marina Medical Center',
                address: 'Av. Carlos Canseco 6050, local 101 C. Marina Mazatlán, 82103 Mazatlán, Sin.',
            },
            downtown: {
                name: 'Downtown Area',
                address: 'Aquiles Serdán 1106. Centro, 82000 Mazatlán Sin.',
            }
        }
    }

    btnMedicalCenter.addEventListener('click', (ev) => {
        document.querySelectorAll('button').forEach(button => {
            button.classList.remove('active')
        })
        ev.currentTarget.classList.add('active')
        mapview.src = Maps.Marina;
        const BranchName = BranchOffice.querySelector('h3');
        const BranchAddress = BranchOffice.querySelector('p');
        BranchName.innerHTML = Address[lang].marina.name;
        BranchAddress.innerHTML = Address[lang].marina.address;
    })

    btnDowntown.addEventListener('click', (ev) => {
        document.querySelectorAll('button').forEach(button => {
            button.classList.remove('active')
        })
        ev.currentTarget.classList.add('active')
        mapview.src = Maps.downtown;
        const BranchName = BranchOffice.querySelector('h3');
        const BranchAddress = BranchOffice.querySelector('p');
        BranchName.innerHTML = Address[lang].downtown.name;
        BranchAddress.innerHTML = Address[lang].downtown.address;
       
    })
    
}

export default maps;