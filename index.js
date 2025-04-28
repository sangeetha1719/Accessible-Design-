function submitMessage() {
   
    const button = document.getElementById('submitButton');
    
  
    button.outerHTML = '<p id="submitButton" class="submit-message" aria-live="polite">Message sent! ✅</p>';
    
    
}