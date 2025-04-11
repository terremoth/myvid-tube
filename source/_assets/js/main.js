document.querySelector('.notifications-menu').addEventListener('click', evt => {
    document.querySelector('.notification-balloon')?.remove();
});

const input_search = document.getElementById('search');
let trend_history = document.getElementById('trend-history');
let currentFocus = -1;

for (let option of trend_history.options) {
    option.addEventListener('click', () => {
        input_search.value = option.value;
        trend_history.classList.remove('d-block');
    });
}

input_search.addEventListener('focus', () => {
    input_search.classList.add('rounded-top-0', 'rounded-0');
    trend_history.classList.add('d-block');
});

input_search.addEventListener('input', () => {
    input_search.classList.add('rounded-top-0', 'rounded-0');
    currentFocus = -1;
    let text = input_search.value.toUpperCase();
    for (let option of trend_history.options) {
        if (option.value.toUpperCase().indexOf(text) > -1) {
            option.classList.add('d-block');
        } else {
            option.classList.remove('d-block');
        }
    }
});


input_search.addEventListener('keydown', (e) => {
    if (e.keyCode === 40) {
        currentFocus++
        addActive(trend_history.options);
    } else if (e.keyCode === 38) {
        currentFocus--
        addActive(trend_history.options);
    } else if (e.keyCode === 13) {
        e.preventDefault();
        if (currentFocus > -1) {
            /*and simulate a click on the "active" item:*/
            if (trend_history.options) trend_history.options[currentFocus].click();
        }
    }
});

input_search.addEventListener('focusout', _ => {
    input_search.classList.remove('rounded-top-0', 'rounded-0');
    setTimeout(_ => trend_history.classList.remove('d-block'), 100);
});

trend_history.querySelectorAll('option').forEach(option => {
    option.addEventListener('mouseover', _ => {
        option.classList.remove('text-black', 'bg-white');
        option.classList.add('bg-primary', 'text-white');
    });

    option.addEventListener('mouseout', _ => {
        option.classList.add('text-black', 'bg-white');
        option.classList.remove('bg-primary', 'text-white');
    });
});


function addActive(x) {
    if (!x) return false;
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    x[currentFocus].classList.add("active");
}

function removeActive(x) {
    for (let i = 0; i < x.length; i++) {
        x[i].classList.remove("active");
    }
}

let pagination_links = document.querySelectorAll('.pagination .page-item');

pagination_links.forEach(el => {
    el.addEventListener('click', _ => {
        pagination_links.forEach(el => el.classList.remove('active'));
        el.classList.add('active');
    });
});


document.getElementById('subscribe-newsletter-btn').addEventListener('click', evt => {
    evt.preventDefault();
    const email_input = document.getElementById('newsletter1');
    if (!email_input.checkValidity()) {
        return email_input.reportValidity();
    }

    const modal = `
        <div class="modal fade" id="subscribe-modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Successfully Subscribed</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        You have subscribed to our newsletter. Check your email!
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-success" data-bs-dismiss="modal"><i class="fa fa-check"></i> Close</button>
                    </div>
                </div>
            </div>
        </div>`;

    const template = document.createElement('template');
    template.innerHTML = modal.trim();
    let modal_element = template.content.firstElementChild;
    document.body.append(modal_element);
    modal_element = document.getElementById('subscribe-modal');

    const modal_bootstrap = new bootstrap.Modal(modal_element, {});
    modal_bootstrap.show();
    modal_element.addEventListener('hidden.bs.modal', event => {
        modal_element.remove();
    });
});

const layout_theme_changer = document.querySelector('.layout-theme');
layout_theme_changer.addEventListener('click', () => {
    const theme = document.documentElement.dataset;
    let next_theme = 'dark';
    let next_description = `<i class="fa fa-moon me-2"></i> Theme: dark</a>`;
    if (theme.bsTheme !== 'light') {
        next_theme = 'light';
        next_description = `<i class="fa fa-sun me-2"></i> Theme: light</a>`;
    }

    theme.bsTheme = next_theme;
    layout_theme_changer.innerHTML = next_description;
});