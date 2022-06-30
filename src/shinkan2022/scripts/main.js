//開始時の動作
window.onload = () => {
    const loader = document.getElementById("loader");
    const loadtxt = document.getElementById("loadtxt");
    setTimeout(function() {
        loader.classList.add("loaded");
        loadtxt.classList.add("loaded");
    }, 1000);
    setTimeout(function() {
        loader.remove();
    }, 2500);
}