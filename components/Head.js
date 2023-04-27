 class Helpers {

    createHeadAttributs() {
        const lang = document.querySelector('html');
        lang.setAttribute('lang', 'en');

        const title = document.createElement('title');
        title.innerHTML = 'New Document';
        // console.log(title);

        const metaUtF8 = document.createElement('meta');
        metaUtF8.setAttribute('charset', 'UTF-8');
        // console.log(metaUtF8);

        const meta2 = document.createElement('meta');
        meta2.setAttribute('http-equiv', 'X-UA-Compatible');
        meta2.setAttribute('content', 'IE=edge');

        // console.log(meta2);
        const meta3 = document.createElement('meta');
        meta3.setAttribute('name', 'viewport');
        meta3.setAttribute('content', 'width=device-width, initial-scale=1.0');
        // console.log(meta3);

        const link = document.createElement('link');
        link.setAttribute('rel', 'stylesheet');
        link.setAttribute('href', 'CSS/style.css')

        document.head.prepend(metaUtF8);
        metaUtF8.after(meta2);
        meta2.after(meta3);
        meta3.after(title);
        title.after(link)
    }

   
}

export const head = new Helpers()