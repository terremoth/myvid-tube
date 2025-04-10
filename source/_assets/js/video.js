const {shuffle_array, is_mobile} = require('./helpers.js');

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
[...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

fetch('assets/videos.json').then(async resp => {
    const json = await resp.json();
    let videos = json.videos;
    let shuffle = shuffle_array(videos);
    let chosen_video = shuffle[0];
    
    console.log(chosen_video);

    let img = new Image();

    img.onload = function() {
        // document.querySelector('article video').height = img.height; 
        img = null;
    };
    img.src = chosen_video.thumb;

    let video_container = document.querySelector('article video');
    video_container.preload = 'metadata';
    video_container.poster = chosen_video.thumb;
    video_container.onloadedmetadata = function () {
        // logic here
    };

    video_container.src = chosen_video.sources[0];

    
    document.querySelector('article h1').innerHTML = chosen_video.title;
    document.querySelector('article video source').src = chosen_video.sources[0];
    document.querySelector('article a').innerHTML = chosen_video.subtitle;
    document.querySelector('article p').innerHTML = chosen_video.description;

});

const play_btn = document.querySelector('.video-play-btn');
const video = document.querySelector('video');

if (is_mobile()) {
    play_btn.classList.add('d-none');
}

video.addEventListener('play', () => {
    play_btn.classList.add('d-none');
});

video.addEventListener('pause', () => {
    if (!is_mobile()) {
        play_btn.classList.remove('d-none');
    }
});

play_btn.addEventListener('click', () => {
    play_btn.classList.add('d-none');
    video.play();
});

const like_btn = document.querySelector('.like');
const dislike_btn = document.querySelector('.dislike');
let like_counter = document.querySelector('.like-counter');
let dislike_counter = document.querySelector('.dislike-counter');

like_btn.addEventListener('click', () => {

    if (like_btn.classList.contains('btn-primary')) {
        like_btn.classList.remove('btn-primary');
        like_btn.classList.add('btn-outline-primary');
        like_counter.innerHTML = parseInt(like_counter.innerHTML) - 1;
        return;
    }

    if (dislike_btn.classList.contains('btn-warning')) {
        dislike_counter.innerHTML = parseInt(dislike_counter.innerHTML) - 1;
    }


    like_btn.classList.add('btn-primary');
    like_btn.classList.remove('btn-outline-primary');
    like_counter.innerHTML = parseInt(like_counter.innerHTML) + 1;
    dislike_btn.classList.remove('btn-warning')
    dislike_btn.classList.add('btn-outline-warning');
});

dislike_btn.addEventListener('click', () => {

    if (dislike_btn.classList.contains('btn-warning')) {
        dislike_btn.classList.remove('btn-warning');
        dislike_btn.classList.add('btn-outline-warning');
        dislike_counter.innerHTML = parseInt(dislike_counter.innerHTML) - 1;
        return;
    }

    if (like_btn.classList.contains('btn-primary')) {
        like_counter.innerHTML = parseInt(like_counter.innerHTML) - 1;
    }

    dislike_btn.classList.add('btn-warning');
    dislike_btn.classList.remove('btn-outline-warning');
    dislike_counter.innerHTML = parseInt(dislike_counter.innerHTML) + 1;

    like_btn.classList.remove('btn-primary')
    like_btn.classList.add('btn-outline-primary');
});

const favorite_btn = document.querySelector('.fav-btn');

favorite_btn.addEventListener('click', () => {

    if (favorite_btn.classList.contains('btn-success')) {
        favorite_btn.classList.remove('btn-success');
        favorite_btn.classList.add('btn-outline-primary');
        favorite_btn.innerHTML = '<i class="fa fa-heart"></i> Favorite';

        return;
    }

    favorite_btn.classList.remove('btn-outline-primary');
    favorite_btn.classList.add('btn-success');
    favorite_btn.innerHTML = '<i class="fa fa-check"></i> Favorited';

});

const submit_comment_btn = document.querySelector('.submit-comment');
const comment_box = document.querySelector('textarea[name="content"]');
const comment_counter = document.querySelector('.comments-counter');
const all_comments_area = document.querySelector('.all-comments');
// const toastLiveExample = document.getElementById('liveToast');

submit_comment_btn.addEventListener('click', () => {
    if (!comment_box.checkValidity()) {
        return comment_box.reportValidity();
    }

    let comment = DOMPurify.sanitize(comment_box.value, { ALLOWED_TAGS: [] });

    if (!comment) {
        return alert('Error while trying to comment. You probably cannot comment that.');
    }

    all_comments_area.innerHTML = `<div class="d-flex mb-4">
    <div class="flex-shrink-0">
        <img class="rounded-circle" src="https://dummyimage.com/50x50/ced4da/6c757d.jpg"
            alt="..." />
    </div>
    <div class="ms-3 text-break">
        <div class="fw-bold">You</div>
        ${comment}
    </div>
</div>` + all_comments_area.innerHTML;

comment_box.value = '';
comment_counter.innerHTML = String(parseInt(comment_counter.innerHTML.split(' ')[0]) + 1) + ' comments';

});
