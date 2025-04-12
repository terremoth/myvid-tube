const {shuffle_array, locale_path_not_en, generate_video_duration, generate_random_views, generate_uploaded_at} = require('./helpers.js');

const video_block = (title, user) => `
<div class="col-sm-6 col-md-4 col-xs-1 col-lg-3 mt-3">
    <div class="card h-100 shadow-sm">
        <div class="position-relative ratio-16x9">
            <span class="text-white rounded px-2 bg-black z-1 position-absolute bottom-0 end-0 mb-1 me-1 border border-secondary">${generate_video_duration()}</span>
            
            <div class="spinner-card z-1 position-absolute top-50 start-50 translate-middle">
                <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
            
            <img class="w-100 rounded bd-placeholder-img" width="320" height="180" src="${BASE_URL}/assets/images/loading.webp" alt="Loading">
        </div>

        <div class="card-body">
            <h6><a href="${locale_path_not_en()}video.html">${title}</a></h6>
            <small class="badge text-bg-secondary">${generate_random_views()}</small>
            <small class="ms-2"><time>${generate_uploaded_at()}</time></small>
            <div class="card-footer mt-3 bg-transparent px-0">
                <span>By </span>
                <strong class="small bold"><a href="${locale_path_not_en()}profile.html">${user}</a></strong>
            </div>
        </div>  
    </div>
</div>
`;

let video_titles = [
    "10 Things You Didn't Know About Space",
    "How to Make the Perfect Pancakes",
    "I Tried Waking Up at 5AM for a Week",
    "The Truth About Fast Food",
    "Top 5 Budget Travel Destinations",
    "Unboxing the New iPhone 15 Pro",
    "Reacting to My Old Cringe Videos",
    "This App Will Change Your Life!",
    "Beginner's Guide to Investing",
    "What Happens If You Don’t Sleep for 72 Hours?",
    "24 Hours in the World’s Quietest Room",
    "My Dog Picks My Outfits for a Day",
    "Extreme Room Makeover 2025",
    "You Won’t Believe What I Found in the Woods",
    "5-Minute Crafts That Actually Work",
    "Trying Viral TikTok Recipes",
    "Day in the Life of a Software Engineer",
    "The Most Satisfying Video You’ll Watch Today",
    "Living on $1 a Day in New York",
    "I Learned Guitar in 30 Days",
    "Why Nobody Talks About This Anymore",
    "Can You Beat Minecraft Without Jumping?",
    "100 Layers of Duct Tape Challenge",
    "I Survived on Only Water for 3 Days",
    "The Evolution of Internet Memes",
    "What Happens If You Pour Lava on Ice?",
    "Top 10 Scariest Moments Caught on Camera",
    "Building a PC with My Dad",
    "Every Marvel Movie Ranked Worst to Best",
    "How I Lost 20 Pounds in 2 Months",
    "I Let an AI Control My Life for 24 Hours",
    "Behind the Scenes of a YouTube Video",
    "The Smartest Way to Study for Exams",
    "This Island Has No Laws",
    "Trying Every Starbucks Drink on the Menu",
    "$1 vs $1,000 Food Challenge",
    "My Honest College Experience",
    "The Most Expensive House on Zillow",
    "Secrets TikTok Doesn’t Want You to Know",
    "Reacting to Life Hacks with My Grandma",
    "What If Earth Stopped Spinning?",
    "How I Made $10,000 in a Month Online",
    "I Tried Living Like MrBeast",
    "The Best Free Video Editors in 2025",
    "Flying to Another Country Just for Lunch",
    "What School Doesn’t Teach You",
    "Learning to Dance in 7 Days",
    "Can You Survive in the Wild Without Tools?",
    "This Website Is Actually Genius",
    "If You Laugh, You Lose – Impossible Edition"
];

let user_names = [
    "James Smith", "Mary Johnson", "John Williams", "Patricia Brown", "Robert Jones",
    "Jennifer Garcia", "Michael Miller", "Linda Davis", "William Rodriguez", "Elizabeth Martinez",
    "David Hernandez", "Barbara Lopez", "Richard Gonzalez", "Susan Wilson", "Joseph Anderson",
    "Jessica Thomas", "Thomas Taylor", "Sarah Moore", "Charles Jackson", "Karen Martin",
    "Christopher Lee", "Nancy Perez", "Daniel Thompson", "Lisa White", "Matthew Harris",
    "Margaret Sanchez", "Anthony Clark", "Betty Ramirez", "Donald Lewis", "Sandra Robinson",
    "Mark Walker", "Ashley Young", "Paul Allen", "Kimberly King", "Steven Wright",
    "Emily Scott", "Andrew Green", "Donna Adams", "Joshua Baker", "Michelle Nelson",
    "Kevin Hall", "Carol Rivera", "Brian Campbell", "Amanda Mitchell", "George Carter",
    "Melissa Roberts", "Edward Gomez", "Stephanie Phillips", "Ronald Evans", "Rebecca Turner"
];


// const max_videos_per_page = 12;
// const main = document.querySelector('main div.row');

video_titles = shuffle_array(video_titles);
user_names = shuffle_array(user_names);

// for (let i = 0; i < max_videos_per_page; i++) {
//
//     let body = video_block(title, user);
//     // main.innerHTML += body;
// }

document.querySelectorAll('.card').forEach(card => {
    let title = video_titles.shift();
    let user = user_names.shift();
    let video_duration = card.querySelector('.video-duration');
    video_duration.classList.remove('col-2', 'pt-2');
    video_duration.innerHTML = generate_video_duration();
    video_title = card.querySelector('h6 a');
    video_title.setAttribute('href', '#');
    video_title.innerHTML = title;
    card.querySelector('.video-views').innerHTML = generate_random_views();
    card.querySelector('.video-uploaded-at').innerHTML = generate_uploaded_at();
    card.querySelector('.card-footer span').innerHTML = 'by';
    card.querySelector('.card-footer strong a').innerHTML = user;
});

document.querySelectorAll('.placeholder,.placeholder-glow').forEach(el => {
    el.classList.remove('placeholder', 'placeholder-glow');
});

function load_random_img(el) {

    const rand_img = Math.floor(Math.random() * 1080) + 1;
    let parent = el.parentElement


    let image = new Image();
    image.onload = function () {
        parent.querySelector('.spinner-card')?.remove();
        el.setAttribute('loading', 'eager');
        el.setAttribute('fetchpriority', 'high');
        el.setAttribute('src', `https://picsum.photos/id/${rand_img}/320/180`);
        el.setAttribute('alt', parent.querySelector('body h6 a')?.innerHTML);
    };

    image.onerror = function () {
        load_random_img(el);
    };

    image.src = `https://picsum.photos/id/${rand_img}/320/180`;
}

document.querySelectorAll('.bd-placeholder-img').forEach(el => {
    load_random_img(el);
});
