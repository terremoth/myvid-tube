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

    </div>

    <nav aria-label="Page navigation" class="mt-4">
        <ul class="pagination">
            <li class="page-item disabled"><a class="page-link" href="#">Previous</a></li>
            <li class="page-item active" aria-current="page"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item"><a class="page-link" href="#">4</a></li>
            <li class="page-item"><a class="page-link" href="#">5</a></li>
            <li class="page-item"><a class="page-link" href="#">Next</a></li>
            <li class="page-item"><a class="page-link" href="#">Last</a></li>
        </ul>
    </nav>
</main>

@endsection

@section('scripts')
    <script type="text/javascript" src="{{ mix('js/home.js', 'assets/build') }}"></script>
@endsection