 class Footer {
    constructor() {
        // this.initFooter()
    }

     createFooter() {
       
        const footer = document.createElement('footer')
        footer.className = 'footer'
        this.footer = footer

        const logoFooter = document.createElement('div')
        logoFooter.className = 'logo__footer'
        footer.append(logoFooter)

        const footerImg = document.createElement('img')
        footerImg.className = 'footer__img'
        footerImg.setAttribute('src','/image/logo.png')
        footerImg.setAttribute('alt','logo')
        logoFooter.prepend(footerImg)

        const contactsFooter = document.createElement('div')
        contactsFooter.className = 'contacts__footer'
        footer.append(contactsFooter)

        const address = document.createElement('h4')
        address.className = 'contacts'
        address.innerHTML = 'Address'
        contactsFooter.append(address)

        const footerAddress = document.createElement('a')
        footerAddress.setAttribute('href', '#')
        footerAddress.className = 'footer__contacts'
        footerAddress.innerHTML = '88 Road, Brooklyn Street, USA'
        contactsFooter.append(footerAddress)




        const email = document.createElement('h4')
        email.className = 'contacts'
        email.innerHTML = 'Email'
        contactsFooter.append(email)

        const footerEmail = document.createElement('a')
        footerEmail.setAttribute('href', '#')
        footerEmail.className = 'footer__contacts'
        footerEmail.innerHTML = 'info@examle.com'
        contactsFooter.append(footerEmail)

        const phone = document.createElement('h4')
        phone.className = 'contacts'
        phone.innerHTML = 'Phone'
        contactsFooter.append(phone)

        const footerPhone = document.createElement('a')
        footerPhone.setAttribute('href', '#')
        footerPhone.className = 'footer__contacts'
        footerPhone.innerHTML = '123 (1254) 1452'
        contactsFooter.append(footerPhone)


        return this.footer
        
    }

     initFooter() {
        return this.createFooter()
       
    }

}


export const footer = new Footer().initFooter();