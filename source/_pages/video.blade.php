@extends('_layouts.main')

@section('body')

<section class="container mt-3">
    <a href="tag/tag-name" class="badge text-bg-danger link-underline-danger">Viral</a>
    <a href="tag/tag-name" class="badge text-bg-primary link-underline-primary">Entertainment</a>
</section>

<main class="container mt-2">
    <div class="row">
        <article class="col-lg-9">
            <div class="position-relative">
                <button
                        aria-label="Play video button"
                        title="Play video button"
                    class="video-play-btn opacity-75 bg-transparent top-50 start-50 translate-middle position-absolute z-1 border-0 rounded-circle">
                    <span class="fa-stack fa-3x">
                        <i class="fa-solid text-primary fa-circle fa-stack-2x"></i>
                        <i class="fa fa-play fa-stack-1x fa-inverse"></i>
                    </span>
{{--                    <i class="fa fa-play fa-2xl ms-1 px-lg-3 py-lg-4"></i>--}}
                </button>
                <video poster="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg"
                       controls
                       preload="metadata"
                       class="ratio ratio-16x9 w-100">
                    <source type="video/mp4" src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4">
                    <track  label="English"
                            kind="subtitles"
                            srclang="en"
                            default
                            src="{{$page->baseUrl}}/assets/big-buck-bunny.srt">
                </video>
            </div>
            <h1 class="display-6 my-2">Big Buck Bunny</h1>

            <div class="row mt-3">
                <div class="col-md-6 d-flex align-items-center">
                    <small class="badge text-bg-secondary">14K views</small>
                    <strong class="small bold ms-2"><a href="profile.html">By Blender Foundation</a></strong>
                    <time class="ms-2 bg-body-tertiary p-1 rounded">1 week ago</time>
                </div>
                <div class="col-md-6 text-sm-start text-md-end mt-3 mt-sm-3 mt-md-0">
                    <button aria-label="Like button" title="Like button"
                            class="btn btn-lg btn-outline-primary shadow-sm like" data-bs-toggle="tooltip"
                       data-bs-placement="top" data-bs-title="Like"><i class="fa fa-thumbs-up"></i></button>
                    <span class="small p-1 bg-body-secondary rounded like-counter like-counter">43</span>
                    <button aria-label="Dislike button" title="Dislike button"
                            class="btn btn-lg btn-outline-warning dislike" data-bs-toggle="tooltip"
                       data-bs-placement="top" data-bs-title="Dislike"><i class="fa fa-thumbs-down"></i></button>
                    <span class="small p-1 bg-body-secondary rounded like-counter dislike-counter">6</span>
                    <button aria-label="Favorite button" title="Favorite button" class="btn btn-outline-primary ms-4 fav-btn"><i class="fa fa-heart"></i> Favorite</button>
                </div>
            </div>

            <p class="mt-3">
                {!!nl2br("Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain\"t no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.

                Licensed under the Creative Commons Attribution license
                https://www.bigbuckbunny.org</p>") !!}
            <hr class="hr">
            <h2 class="h3 mb-3">Comments</h2>
            <textarea maxlength="1024" name="content" class="form-control" required rows="3"
                      placeholder="Join the discussion and leave a comment!"></textarea>
            <button type="button" class="btn btn-primary mt-3 submit-comment"><i class="fa fa-comment-dots"></i>
                Comment</button>
            <hr>
            <h3 class="h4 mb-3 comments-counter">3 comments</h3>
            <div class="all-comments">
                <div class="d-flex mb-4">
                    <div class="flex-shrink-0">
                        <img class="rounded-circle" src="https://dummyimage.com/50x50/ced4da/6c757d.jpg"
                             alt="..." />
                    </div>
                    <div class="ms-3 text-break">
                        <div class="fw-bold">John Doe</div>
                        This was my favorite until they release the next one

                        <div class="d-flex mt-4">
                            <div class="flex-shrink-0">
                                <img class="rounded-circle" src="https://dummyimage.com/50x50/ced4da/6c757d.jpg"
                                     alt="..." />
                            </div>
                            <div class="ms-3 text-break">
                                <div class="fw-bold">Renato Balestin</div>
                                And under those conditions, you cannot establish a capital-market evaluation of that
                                enterprise. You can't get investors.
                            </div>
                        </div>
                        <div class="d-flex mt-4">
                            <div class="flex-shrink-0"><img class="rounded-circle"
                                                            src="https://dummyimage.com/50x50/ced4da/6c757d.jpg" alt="..." /></div>
                            <div class="ms-3 text-break">
                                <div class="fw-bold">TheBadDancer</div>
                                When you put money directly to a problem, it makes a good headline.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </article>
        <div class="border mb-3 d-lg-none"></div>
        <aside class="col-lg-3">
            <h3 class="mb-3 mb-lg-2">Related videos</h3>
            <div class="col mb-3">
                <div class="card">

                    <img alt="video sample" src="https://picsum.photos/id/30/320/180">
                    <div class="card-body">
                        <h4 class="h6"><a href="video.html">Create your own cup design</a></h4>
                        <small class="badge text-bg-secondary">1,2K views</small>
                        <time class="badge text-black">8h ago</time>
                        <div class="card-footer mt-1 bg-transparent px-0">
                            <span>By </span>
                            <strong class="small bold"><a href="profile.html">Pikonic Mandala</a></strong>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col mb-3">
                <div class="card">
                    <img alt="video sample" src="https://picsum.photos/id/55/320/180">
                    <div class="card-body">
                        <h4 class="h6"><a href="video.html">This flower isn't what you think!</a></h4>
                        <small class="badge text-bg-secondary">17K views</small>
                        <time class="badge text-black">2w ago</time>
                        <div class="card-footer mt-1 bg-transparent px-0">
                            <span>By </span>
                            <strong class="small bold"><a href="profile.html">Roger Masda</a></strong>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col mb-3">
                <div class="card">
                    <img alt="video sample" src="https://picsum.photos/id/99/320/180">
                    <div class="card-body">
                        <h4 class="h6"><a href="video.html">The old times were better times...</a></h4>
                        <small class="badge text-bg-secondary">1M views</small>
                        <time class="badge text-black">2d ago</time>
                        <div class="card-footer mt-1 bg-transparent px-0">
                            <span>By </span>
                            <strong class="small bold"><a href="profile.html">Old West Stories</a></strong>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col mb-3">
                <div class="card">
                    <img alt="video sample" src="https://picsum.photos/id/779/320/180">
                    <div class="card-body">
                        <h4 class="h6"><a href="video.html">I visited Machu Picchu, and what I imagined happened!</a></h4>
                        <small class="badge text-bg-secondary">107K views</small>
                        <time class="badge text-black">16h ago</time>
                        <div class="card-footer mt-1 bg-transparent px-0">
                            <span>By </span>
                            <strong class="small bold"><a href="profile.html">The German Traveler</a></strong>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col mb-3">
                <div class="card">
                    <img alt="video sample" src="https://picsum.photos/id/616/320/180">
                    <div class="card-body">
                        <h4 class="h6"><a href="video.html">The most immersive and ancient city in Bangladesh</a></h4>
                        <small class="badge text-bg-secondary">44K views</small>
                        <time class="badge text-black">2y ago</time>
                        <div class="card-footer mt-1 bg-transparent px-0">
                            <span>By </span>
                            <strong class="small bold"><a href="profile.html">Curious Talent</a></strong>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    </div>
</main>

@endsection

@section('scripts')
    <script src="https://cdnjs.cloudflare.com/ajax/libs/dompurify/3.2.5/purify.min.js"
            integrity="sha512-/CUtA84sWWqWEBejNrrtWa7Yc4cth3Ome2ymvCKOo9YcZ4sh98tndUy4LutE2xGcAgD4fyz16y+gSyJdGCB5ww=="
            crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script type="text/javascript" src="{{$page->baseUrl . mix('js/video.js', 'assets/build') }}"></script>
@endsection
