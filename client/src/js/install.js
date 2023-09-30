const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    console.log('beforeinstallprompt fired');
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    event.preventDefault();
    // Stash the event so it can be triggered later
    const deferredPrompt = event;

    // Show the install button
    butInstall.style.display = 'block';

    butInstall.addEventListener('click', () => {
        // hide our user interface that shows our A2HS button
        butInstall.style.display = 'none';
        // Show the prompt
        deferredPrompt.prompt();
        // Wait for the user to respond to the prompt
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('User accepted the A2HS prompt');
            } else {
                console.log('User dismissed the A2HS prompt');
            }
            deferredPrompt = null;
        });
    });
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    console.log('butInstall button clicked');
    // Logic to install the app goes here
    // The 'beforeinstallprompt' event handler above should actually handle the installation process
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    console.log('👍', 'appinstalled', event);
    // App was installed, you can add some logic here, for example, to change the UI or inform the user
    alert('Thank you for installing our app!');
});
