document.getElementById('Post').addEventListener('click', function() {
    const postContent = document.querySelector('.postArea').value;

    if (postContent.trim() === '') {
        alert('Please enter something to post.');
        return;
    }

    const post = document.createElement('div');
    post.classList.add('post');

    const postHeader = document.createElement('div');
    postHeader.classList.add('post-header');
    postHeader.innerHTML = '<img src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/031/original/profile_image.png?1706888739" alt="Profile picture">';

    const postContentDiv = document.createElement('div');
    postContentDiv.classList.add('post-content');
    postContentDiv.innerHTML = `<p>${postContent}</p>`;

    const postFooter = document.createElement('div');
    postFooter.classList.add('post-footer');

    const likeButton = document.createElement('button');
    likeButton.classList.add('like');
    likeButton.textContent = 'Like';

    const commentButton = document.createElement('button');
    commentButton.classList.add('comment');
    commentButton.textContent = 'Comment';

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete');
    deleteButton.textContent = 'Delete';

    postFooter.appendChild(likeButton);
    postFooter.appendChild(commentButton);
    postFooter.appendChild(deleteButton);

    post.appendChild(postHeader);
    post.appendChild(postContentDiv);
    post.appendChild(postFooter);

    const container = document.querySelector('.container');
    const lastChild = container.lastElementChild;
    if (lastChild) {
        container.insertBefore(post, lastChild.nextSibling);
    } else {
        container.appendChild(post);
    }

    document.querySelector('.postArea').value = '';

    likeButton.addEventListener('click', function() {
        likeButton.textContent = 'Liked';
        likeButton.disabled = true;
    });

    commentButton.addEventListener('click', function() {
        const comment = prompt('Enter your comment:');
        if (comment.trim() !== '') {
            const commentDiv = document.createElement('div');
            commentDiv.classList.add('comment');
            commentDiv.innerHTML = `<p>${comment}</p>`;
            post.appendChild(commentDiv);
        }
    });

    deleteButton.addEventListener('click', function() {
        post.remove();
    });
});