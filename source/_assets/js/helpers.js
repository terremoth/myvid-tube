function generate_video_duration() {
    const gen_num = () => String(Math.floor(Math.random() * 60));
    const minutes = gen_num();
    const seconds = gen_num().padStart(2, "0");
    return `${minutes}:${seconds}`;
}

function generate_random_views() {
    const skewed = Math.pow(Math.random(), 9.6); // Mais inclinado para números pequenos

    const min = 153;
    const max = 2_000_000;
    let num = Math.floor(skewed * (max - min) + min);

    if (num > 2_500_000) {
        num = Math.floor(num / 3);
    }

    let formatted;
    if (num < 1_000) {
        formatted = `${num}`;
    } else if (num < 1_000_000) {
        formatted = (num / 1_000).toFixed(1).replace(/\.0$/, '') + 'K';
    } else {
        formatted = (num / 1_000_000).toFixed(1).replace(/\.0$/, '') + 'M';
    }

    return `${formatted} views`;
}

function shuffle_array(array) {
    const arr = array.slice();

    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    return arr;
}

function generate_uploaded_at() {
    let timing = ['minutes', 'hours', 'days', 'weeks', 'months', 'years'];
    let time, time_table = {minutes: 60,hours: 24,days: 30,weeks: 4,months: 12,years: 6};
    timing = shuffle_array(timing);
    time = timing = timing.shift();
    timing = time_table[timing];
    return `${Math.floor(Math.random() * timing) + 1} ${time} ago`;
}

function is_mobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(navigator.userAgent);
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

    if (typeof BASE_URL === 'undefined') {
        window.BASE_URL = window.location.origin;
    }

    return BASE_URL + '/' + append;
}

module.exports = {
    shuffle_array,
    is_mobile,
    get_locale,
    locale_path_not_en,
    base_url,
    generate_video_duration,
    generate_random_views,
    generate_uploaded_at
};