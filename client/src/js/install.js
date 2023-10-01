const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    butInstall.style.visibility = 'visible';
    textHeader.textContent = 'Click the button to install!';

    butInstall.addEventListener('click', () => {
        event.prompt();
        butInstall.setAttribute('disabled', true);
        butInstall.textContent = 'Installed!';
    });
});

butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;

    if (!promptEvent) {
        return;
    }

    // Show the install prompt
    promptEvent.prompt();

    // Reset the deferred prompt variable, it can only be used once
    window.deferredPrompt = null;

    // Hide the install button after user's response
    butInstall.classList.toggle('hidden', true);
});

window.addEventListener('appinstalled', (evt) => {
    console.log('The app was installed successfully!');
    butInstall.style.display = 'none'; // You can hide or disable the install button here
});
