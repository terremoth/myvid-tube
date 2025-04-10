function shuffle_array(array) {
    const arr = array.slice();

    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    return arr;
}

function is_mobile() {
    const toMatch = [
        /Android/i,
        /webOS/i,
        /iPhone/i,
        /iPad/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i
    ];

    return toMatch.some((toMatchItem) => {
        return navigator.userAgent.match(toMatchItem);
    });
}

function getCookie(name) {
    return document.cookie
        .split('; ')
        .find(row => row.startsWith(name + '='))
        ?.split('=')[1] || null;
}

function get_locale() {
    return document.documentElement.lang ||
        document.querySelector('meta[http-equiv="Content-Language"]')?.content ||
        document.body.dataset.locale ||
        getCookie('lang') ||
        localStorage.getItem('lang') ||
        new URLSearchParams(location.search).get('lang') ||
        new URLSearchParams(location.search).get('locale') ||
        navigator.language ||
        Intl.NumberFormat().resolvedOptions().locale ||
        'en';
}

function locale_path_not_en() {
    let locale = get_locale();
    if (locale === 'en') {
        return '';
    }

    return locale + '/';
}

function base_url(append = '') {
    return window.location.origin + '/' + append;
}

module.exports = {
    shuffle_array,
    is_mobile,
    get_locale,
    locale_path_not_en,
    base_url
};