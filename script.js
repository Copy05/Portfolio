const copyr = document.getElementById('copyr')

document.addEventListener("DOMContentLoaded", (e) => {
    copyr.innerHTML = `<span style="font-family: sans-serif;">&copy;</span> 2021 – ${new Date().getFullYear().toString()} Copy05. All Rights Reserved`
})