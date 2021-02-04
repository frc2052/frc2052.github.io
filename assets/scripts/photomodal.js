//for photo pop-ups on home page and members
    function showModal(modalName, src, caption) { //gets the element image and caption and sets it to the display
        var modal = document.getElementById(modalName);
        var modalImg = document.getElementById(modalName + "Image");
        var captionText = document.getElementById(modalName + "Caption");
        modal.style.display = "block";
        modalImg.src = src;
        captionText.innerHTML = caption;
    }

    function closeModal(modalName) { //closes the modal
        var modal = document.getElementById(modalName);
        modal.style.display = "none";
    }
