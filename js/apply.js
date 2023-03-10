/**
 * Create an arrow function that will be called when an image is selected.
 */
function previewImage(event) {
    /**
     * Get the selected files.
     */
    const imageFiles = event.target.files;
    /**
     * Count the number of files selected.
     */
    const imageFilesLength = imageFiles.length;

    /**
         * Get the upload button.
         */
    const uploadBtn = document.getElementById('uploadBtn');

    /**
         * Get the image container.
         */
    const imgContainer = document.querySelector('.image-preview-container');

    /**
         * adding an eventlistener to the image container to toggle the upload button
         */

    imgContainer.addEventListener('mouseenter', ()=>{
        uploadBtn.style.display = 'block';
    })

    imgContainer.addEventListener('mouseleave', ()=>{
        uploadBtn.style.display = 'none';
    })
    /**
     * If at least one image is selected, then proceed to display the preview.
     */
    if (imageFilesLength > 0) {
        /**
         * Get the image path.
         */
        const imageSrc = URL.createObjectURL(imageFiles[0]);
        /**
         * Select the image preview element.
         */
        const imagePreviewElement = document.querySelector("#preview-selected-image");
        /**
         * Assign the path to the image preview element.
         */
        imagePreviewElement.src = imageSrc;
        /**
         * Show the element by changing the display value to "block".
         */
        imagePreviewElement.style.display = "block";
    }

        if(document.getElementById('preview-selected-image').style.display == 'block'){
            document.getElementById('uploadBtn').style.display = 'none';

            document.getElementById('uploadBtn').innerHTML = 'Change Image';
            document.getElementById('uploadBtn').classList.add('active');

            if(window.innerWidth < 1024){
                document.getElementById('small').style.display = 'block';
            }
        }

        
};
var form = document.getElementById("form-pdf");
    
    async function handleSubmit(event) {
      event.preventDefault();
    //   var status = document.getElementById("my-form-status");
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
        //   status.innerHTML = "Thanks for your submission!";
          form.reset()
        } else {
          response.json().then(data => {
            if (Object.hasOwn(data, 'errors')) {
            //   status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
            } else {
            //   status.innerHTML = "Oops! There was a problem submitting your form"
            }
          })
        }
      }).catch(error => {
        // status.innerHTML = "Oops! There was a problem submitting your form"
      });
    }
    form.addEventListener("submit", handleSubmit)