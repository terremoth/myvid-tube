const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

function shuffle_array(array) {
    const arr = array.slice();

    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    
    return arr;
}

const request = fetch('videos.json').then(async resp => {
    const json = await resp.json();
    let videos = json.videos;
    let shuffle = shuffle_array(videos);
    let chosen_video = shuffle[0];
    
    console.log(chosen_video);

    document.querySelector('article h1').innerHTML = chosen_video.title;
    document.querySelector('article video source').src = chosen_video.sources[0];
    document.querySelector('article video').src = chosen_video.sources[0];
    document.querySelector('article video').poster = chosen_video.thumb;
    document.querySelector('article a').innerHTML = chosen_video.subtitle;
    document.querySelector('article p').innerHTML = chosen_video.description;

});

const play_btn = document.querySelector('.video-play-btn');
const video = document.querySelector('video');

video.addEventListener('play', () => {
    play_btn.classList.add('d-none');
});

video.addEventListener('pause', () => {
    play_btn.classList.remove('d-none');
});

play_btn.addEventListener('click', evt => {
    play_btn.classList.add('d-none');
    video.play();
});

let like_state = 0;

const like_btn = document.querySelector('.like');
const dislike_btn = document.querySelector('.dislike');
let like_counter = document.querySelector('.like-counter');
let dislike_counter = document.querySelector('.dislike-counter');

like_btn.addEventListener('click', evt => {

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

dislike_btn.addEventListener('click', evt => {

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

const fav_btn = document.querySelector('.fav-btn');

fav_btn.addEventListener('click', evt => {

    if (fav_btn.classList.contains('btn-success')) {
        fav_btn.classList.remove('btn-success');
        fav_btn.classList.add('btn-outline-primary');
        fav_btn.innerHTML = '<i class="fa fa-heart"></i> Favorite';

        return;
    }

    fav_btn.classList.remove('btn-outline-primary');
    fav_btn.classList.add('btn-success');
    fav_btn.innerHTML = '<i class="fa fa-check"></i> Favorited';

});

const submit_comment_btn = document.querySelector('.submit-comment');
const comment_box = document.querySelector('textarea[name="content"]');
const comment_counter = document.querySelector('.comments-counter');

const all_comments_area = document.querySelector('.all-comments');

submit_comment_btn.addEventListener('click', evt => {
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
    <div class="ms-3">
        <div class="fw-bold">You</div>
        ${comment}
    </div>
</div>` + all_comments_area.innerHTML;

comment_box.value = '';
comment_counter.innerHTML = String(parseInt(comment_counter.innerHTML.split(' ')[0]) + 1) + ' comments';

});

