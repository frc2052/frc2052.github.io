    function showModal(modalName, src, caption) {
        var modal = document.getElementById(modalName);
        var modalImg = document.getElementById(modalName + "Image");
        var captionText = document.getElementById(modalName + "Caption");
        modal.style.display = "block";
        modalImg.src = src;
        captionText.innerHTML = caption;
    }

    function closeModal(modalName) {
        var modal = document.getElementById(modalName);
        modal.style.display = "none";
    }
