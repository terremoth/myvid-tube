const video_block = (title, user, views, uploaded_at) => `
<div class="col-sm-6 col-md-4 col-xs-1 col-lg-3 mt-3">
    <div class="card">
        <svg class="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" 
            aria-label="Placeholder" preserveAspectRatio="xMidYMid slice">
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#868e96"></rect>
        </svg>
        <div class="card-body">
            <h6><a href="/video.html">${title}</a></h6>
            <small class="badge text-bg-secondary">${views}</small>
            <time class="badge text-black">${uploaded_at}</time>
            <div class="card-footer mt-1 bg-transparent px-0">
                <span>By </span>
                <strong class="small bold"><a href="/profile">${user}</a></strong>
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

let video_views = [
    "1.2K views", "3.4K views", "567 views", "10K views", "23K views",
    "1.1M views", "876K views", "2.3M views", "98 views", "34K views",
    "4.5K views", "8.9K views", "741 views", "12M views", "6.2K views",
    "3.1K views", "55 views", "7.8K views", "2.7M views", "999K views",
    "301 views", "17K views", "49K views", "6.7M views", "803 views",
    "5.5K views", "2K views", "9.3K views", "1.8K views", "5.6M views",
    "432 views", "3.9K views", "600K views", "4.4M views", "2.2K views",
    "1K views", "900 views", "1.9K views", "7.1K views", "3M views",
    "5.2K views", "4.8K views", "79 views", "1.6M views", "2.8K views",
    "10M views", "157 views", "11K views", "700 views", "8.2K views"
];

let uploaded_at = [
    "2 minutes ago", "5 minutes ago", "30 minutes ago", "1 hour ago", "2 hours ago",
    "5 hours ago", "12 hours ago", "23 hours ago", "1 day ago", "2 days ago",
    "3 days ago", "6 days ago", "1 week ago", "2 weeks ago", "3 weeks ago",
    "4 weeks ago", "1 month ago", "2 months ago", "3 months ago", "5 months ago",
    "7 months ago", "9 months ago", "11 months ago", "1 year ago", "2 years ago",
    "3 years ago", "4 years ago", "5 years ago", "6 years ago", "7 years ago",
    "8 years ago", "9 years ago", "10 years ago", "15 minutes ago", "45 minutes ago",
    "6 hours ago", "18 hours ago", "10 days ago", "13 days ago", "2 weeks ago",
    "6 weeks ago", "8 weeks ago", "4 months ago", "10 months ago", "1.5 years ago",
    "2.5 years ago", "3.5 years ago", "12 years ago", "14 years ago", "20 years ago"
];
  

const max_videos_per_page = 12;
const main = document.querySelector('main div.row');

function shuffle_array(array) {
    const arr = array.slice();

    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    
    return arr;
}

video_titles = shuffle_array(video_titles);
user_names = shuffle_array(user_names);
video_views = shuffle_array(video_views);
uploaded_at = shuffle_array(uploaded_at);


for (let i = 0; i < max_videos_per_page; i++) {
    let title = video_titles.shift();
    let user = user_names.shift();
    let view = video_views.shift();
    let uploaded_time = uploaded_at.shift();

    let body = video_block(title, user, view, uploaded_time);
    main.innerHTML += body;
}

function load_random_img(el) {

    const rand_img = Math.floor(Math.random() * 1080) + 1;
    let image = new Image();
    image.onload = function () {
        let card = el.parentElement;
        el.remove();
        card.innerHTML = this.outerHTML + card.innerHTML;
    };
    
    image.onerror = function (evt, source, line, col, error) {
        load_random_img(el);
    };

    image.src = `https://picsum.photos/id/${rand_img}/320/180`;
}

document.querySelectorAll('svg.bd-placeholder-img').forEach(el => {
    load_random_img(el);
});

