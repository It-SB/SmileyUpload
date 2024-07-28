document.getElementById('uploadForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('file', document.getElementById('file').files[0]);
    formData.append('documentType', document.getElementById('documentType').value);
    formData.append('name', document.getElementById('name').value);
    formData.append('surname', document.getElementById('surname').value);

    try {
        const response = await fetch('http://localhost:3000/upload', {
            method: 'POST',
            body: formData,
        });

        const data = await response.json();
        document.getElementById('responseMessage').innerText = `Document uploaded successfully! URL: ${data.fileUrl}`;
    } catch (error) {
        console.error('Error uploading file:', error);
        document.getElementById('responseMessage').innerText = 'Failed to upload document.';
    }
});
