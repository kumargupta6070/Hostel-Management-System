// JavaScript to handle image preview and form responsiveness
document.querySelectorAll('input[type="file"]').forEach(input => {
    input.addEventListener('change', function(event) {
        const previewId = this.id.replace('Upload', 'Preview');
        const preview = document.getElementById(previewId);
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                preview.src = e.target.result;
                preview.style.display = 'block';
            };
            reader.readAsDataURL(file);
        }
    });
});

const form = document.getElementById('studentForm');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Form submitted successfully!');
});
