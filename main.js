setTimeout(function () {
    fetch("https://script.google.com/macros/s/AKfycbzYqBCZ-IJ336PKORcp9IN7UAjowGRXCf7N_fy51zytPl3yy0X17ZqQx0fb36QMD_rRaw/exec")
        .catch(err => console.error("Error al registrar visita:", err));

    window.location.href = "https://www.instagram.com/mogul.uy/#";
}, 3000);
