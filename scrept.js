document.addEventListener("mousemove", function (e) {
    const cursor = document.querySelector(".cursor");
    cursor.style.left = e.pageX - cursor.offsetWidth / 2 + "px";
    cursor.style.top = e.pageY - cursor.offsetHeight / 2 + "px";
});