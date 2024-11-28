const commentForm = document.querySelector('form.comment-form');

commentForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = commentForm.querySelector('#author');
    const email = commentForm.querySelector('#email');
    const url = commentForm.querySelector('#url');
    const commentReplay = commentForm.querySelector('#comment-reply');


    const xht = new XMLHttpRequest();

    xht.open('POST', 'http://localhost/dhc-backend', true);
    xht.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xht.send(`name=${name.value}&email=${email.value}&message=${commentReplay.value}&url=${url.value}`);
});