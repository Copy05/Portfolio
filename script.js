/**
 * Copyright Copy05 2023. All Rights Reserved
 */

const copyr = document.getElementById('copyr')

document.addEventListener("DOMContentLoaded", (e) => {
    copyr.innerHTML = `Copyright 2021 – ${new Date().getFullYear().toString()} Copy05. All Rights Reserved`
})