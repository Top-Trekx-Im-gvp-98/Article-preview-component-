
const shareButton = document.querySelector('.share-button');
const shareIcons = document.querySelector('.share-icons');

shareButton.addEventListener('click', () => {
    shareIcons.classList.toggle('active');
});

