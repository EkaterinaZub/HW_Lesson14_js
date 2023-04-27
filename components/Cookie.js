export function setCookie(name, value, options = {}) {

    // console.log('hello')

    options = {
        path: '/',

        ...options
    };

    // console.log(options)

    if (options.expires instanceof Date) {
        console.log(Date)

        options.expires = options.expires.toUTCString();
    }

    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

    for (let optionKey in options) {
        updatedCookie += "; " + optionKey;
        let optionValue = options[optionKey];
        if (optionValue !== true) {
            updatedCookie += "=" + optionValue;
        }
    }

    document.cookie = updatedCookie;
}


export function getCookie(name) {
    let matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

// console.log(getCookie(element.title));


