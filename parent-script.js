window.addEventListener('message', function(event) {
    if (event.data && event.data.status) {
      const modal = document.getElementById('messageModal');
      const modalMessage = document.getElementById('modalMessage');
      const closeButton = document.querySelector('.close-button');
  
      if (event.data.status === 'success') {
        modalMessage.textContent = event.data.message;
        modalMessage.style.color = 'green';
      } else if (event.data.status === 'error') {
        modalMessage.textContent = event.data.message;
        modalMessage.style.color = 'red';
      }
  
      // Show the modal
      modal.style.display = 'block';
  
      // Close the modal when the user clicks on <span> (x)
      closeButton.onclick = function() {
        modal.style.display = 'none';
      }
  
      // Close the modal when the user clicks anywhere outside of the modal
      window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = 'none';
        }
      }
    }
  });