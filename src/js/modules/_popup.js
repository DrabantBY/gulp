const popupLinks = document.getElementsByClassName('popup-link');

btnSignIn.onclick = () => {
    (!email.value || !password.value) && alert('Please сomplete all input fields');
    email.value && password.value && alert('Email: ' + email.value +'\n' + 'Password: ' + password.value);
}

[...popupLinks].forEach(link => {
    link.addEventListener('click', (e) => {
        const popupId = link.getAttribute('href').replace('#', '');
        const currentPopup = document.getElementById(popupId);
        popupOpen(currentPopup);
        e.preventDefault();
    });
})

function popupOpen(popup) {
    const popupActive = document.querySelector('.popup.open');
    popupActive && popupClose(popupActive);
    popup.classList.add('open');
    popup.onclick = () => !event.target.closest('.popup__body') && popupClose(event.target.closest('.popup'));
}

function popupClose(popup) {
    popup.classList.remove('open');
}