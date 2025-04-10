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
                    class="btn btn-primary opacity-75 video-play-btn top-50 start-50 translate-middle position-absolute border z-1 rounded-circle btn-2xl px-4 py-4 shadow"><i
                        class="fa fa-play fa-2xl ms-1 px-lg-3 py-lg-4"></i></button>
                <video height="" controls class="ratio ratio-16x9 w-100">
                    <source type="video/mp4">
                </video>
            </div>
            <h1 class="display-6 my-2"></h1>

            <div class="row mt-3">
                <div class="col-md-6 d-flex align-items-center">
                    <small class="badge text-bg-secondary">14K views</small>
                    <strong class="small bold ms-2"><a href="profile.html"></a></strong>
                    <time class="badge text-black">1 week ago</time>
                </div>
                <div class="col-md-6 text-sm-start text-md-end mt-3 mt-sm-3 mt-md-0">
                    <a class="btn btn-lg btn-outline-primary shadow-sm like" data-bs-toggle="tooltip"
                       data-bs-placement="top" data-bs-title="Like"><i class="fa fa-thumbs-up"></i></a>
                    <span class="badge text-black bg-body-secondary like-counter">43</span>
                    <a class="btn btn-lg btn-outline-warning dislike" data-bs-toggle="tooltip"
                       data-bs-placement="top" data-bs-title="Dislike"><i class="fa fa-thumbs-down"></i></a>
                    <span class="badge bg-body-secondary shadow-sm text-black dislike-counter">6</span>
                    <a class="btn btn-outline-primary ms-4 fav-btn"><i class="fa fa-heart"></i> Favorite</a>
                </div>
            </div>

            <div class="toast-container position-fixed bottom-0 end-0 p-3">
                <div id="liveToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
                    <div class="toast-header">
                        <strong class="me-auto">MY-Vid Tube</strong>
                        <small></small>
                        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                    </div>
                    <div class="toast-body">
                        {message}
                    </div>
                </div>
            </div>

            <p class="mt-3"></p>
            <hr class="hr">
            <h3 class="h3 mb-3">Comments</h3>
            <textarea maxlength="1024" name="content" class="form-control" required rows="3"
                      placeholder="Join the discussion and leave a comment!"></textarea>
            <button type="button" class="btn btn-primary mt-3 submit-comment"><i class="fa fa-comment-dots"></i>
                Comment</button>
            <hr>
            <h5 class="mb-3 comments-counter">3 comments</h5>
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
            <h2 class="mb-3 mb-lg-2">Related videos</h2>
            <div class="col mb-3">
                <div class="card">
                    <img src="https://picsum.photos/id/30/320/180">
                    <div class="card-body">
                        <h6><a href="video.html">Create your own cup design</a></h6>
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
                    <img src="https://picsum.photos/id/55/320/180">
                    <div class="card-body">
                        <h6><a href="video.html">This flower isn't what you think!</a></h6>
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
                    <img src="https://picsum.photos/id/99/320/180">
                    <div class="card-body">
                        <h6><a href="video.html">The old times were better times...</a></h6>
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
                    <img src="https://picsum.photos/id/779/320/180">
                    <div class="card-body">
                        <h6><a href="video.html">I visited Machu Picchu, and what I imagined happened!</a></h6>
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
                    <img src="https://picsum.photos/id/616/320/180">
                    <div class="card-body">
                        <h6><a href="video.html">The most immersive and ancient city in Bangladesh</a></h6>
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
    <script type="text/javascript" src="{{ mix('js/video.js', 'assets/build') }}"></script>
@endsection
