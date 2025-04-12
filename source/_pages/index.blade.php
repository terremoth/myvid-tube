@extends('_layouts.main')

@section('body')

<section class="container mt-3">
    <a href="tag/tag-name" class="badge text-bg-danger link-underline-danger">Viral</a>
    <a href="tag/tag-name" class="badge text-bg-primary link-underline-primary">{{ __($page, "news") }}</a>
    <a href="tag/tag-name" class="badge text-bg-primary link-underline-primary">Music</a>
    <a href="tag/tag-name" class="badge text-bg-primary link-underline-primary">Entertainment</a>
    <a href="tag/tag-name" class="badge text-bg-primary link-underline-primary">Humor</a>
    <a href="tag/tag-name" class="badge text-bg-primary link-underline-primary">Sport</a>
    <a href="tag/tag-name" class="badge text-bg-primary link-underline-primary">Cars</a>
    <a href="tag/tag-name" class="badge text-bg-primary link-underline-primary">Kids</a>
    <a href="tag/tag-name" class="badge text-bg-primary link-underline-primary">Tech</a>
    <a href="tag/tag-name" class="badge text-bg-primary link-underline-primary">Science</a>
    <a href="tag/tag-name" class="badge text-bg-primary link-underline-primary">Games</a>
    <a href="tag/tag-name" class="badge text-bg-primary link-underline-primary">Documentary</a>
</section>

<main class="container">
    <div class="row gx-3">
        @for($i = 0; $i < 12; $i++)
            <div class="col-sm-6 col-md-4 col-xs-1 col-lg-3 mt-3">
                <div class="card h-100 shadow-sm placeholder-glow">
                    <div class="position-relative ratio-16x9">
                        <span class="text-white rounded px-2 bg-black z-1 position-absolute bottom-0 end-0 mb-1 me-1 border border-secondary video-duration col-2 pt-2 placeholder"></span>

                        <div class="spinner-card z-1 position-absolute top-50 start-50 translate-middle">
                            <div class="spinner-border" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                        </div>

                        <img class="w-100 rounded bd-placeholder-img" width="310" src="{{$page->baseUrl}}/assets/images/loading.webp" alt="Loading">
                    </div>

                    <div class="card-body">
                        <h6><a class="placeholder col-12" href="${locale_path_not_en()}video.html"></a></h6>
                        <small class="badge text-bg-secondary placeholder video-views"></small>
{{--                        <small class="ms-2 placeholder col-8"><time></time></small>--}}
                        <small class="placeholder col-8 ms-2"><time class="video-uploaded-at"></time></small>
                        <div class="card-footer mt-3 bg-transparent px-0">
                            <span class="placeholder col-6"> </span>
                            <strong class="small bold placeholder"><a href="${locale_path_not_en()}profile.html"></a></strong>
                        </div>
                    </div>
                </div>
            </div>
        @endfor
    </div>

    <nav aria-label="Page navigation" class="mt-4">
        <ul class="pagination">
            <li class="page-item previous-page disabled"><a class="page-link" href="#">Previous</a></li>
            <li class="page-item active" aria-current="page"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item"><a class="page-link" href="#">4</a></li>
            <li class="page-item"><a class="page-link" href="#">5</a></li>
            <li class="page-item next-page"><a class="page-link" href="#">Next</a></li>
            <li class="page-item last-page"><a class="page-link" href="#">Last</a></li>
        </ul>
    </nav>
</main>

@endsection

@section('scripts')
    <script type="text/javascript" src="{{$page->baseUrl . mix('js/home.js', 'assets/build') }}"></script>
@endsection