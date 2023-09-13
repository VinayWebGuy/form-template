document.querySelectorAll(".otp-number").forEach(function (input, index, inputs) {
    input.addEventListener("input", function (e) {
        const maxLength = parseInt(input.getAttribute("maxlength"));
        const currentLength = input.value.length;

        if (currentLength === 1) {
            if (index < inputs.length - 1) {
                inputs[index + 1].focus();
            }
        } else if (currentLength > 1) {
            input.value = input.value.charAt(0); // Keep only the first character
        } else if (currentLength === 0 && index > 0) {
            inputs[index - 1].focus();
        }
    });

    input.addEventListener("keydown", function (e) {
        if (e.key === "Backspace" && input.value.length === 0 && index > 0) {
            inputs[index - 1].focus();
        }
    });
});

let upload = document.querySelector('.upload');
upload.addEventListener('click', function () {
    let fileInput = document.querySelector('.input-file');
    fileInput.click();
    fileInput.addEventListener('change', function() {
        let uploadedIcon = document.querySelector('.uploaded');
        
        if (fileInput.files.length > 0) {
            uploadedIcon.innerHTML = '(Uploaded <i class="fa fa-check uploaded"></i>)';
        } else {
            uploadedIcon.innerHTML = '';
        }
    });
});
