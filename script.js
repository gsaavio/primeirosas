function mundar_imagem() {
    const image_display = document.getElementById("main_image").style.display;
    console.log(image_display)
    if (image_display == "block") {
        hide_image();
    } else {
        show_image();
    }
}

function show_image() {
    document.getElementById("main_image").style.display = "block";
}

function hide_image() {
    document.getElementById("main_image").style.display = "none";
}
