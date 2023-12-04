function validateLogin() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    // Dummy validation - Replace this with your actual validation logic
    if (username === 'user' && password === 'password') {
      alert('Login successful');
      // Redirect to main menu page or perform other actions
      window.location.href = 'main-menu.html';
    } else {
      alert('Invalid username or password');
    }
  }
  
  function validateLogin() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    // Dummy validation - Replace this with your actual validation logic
    if (username === 'user' && password === 'password') {
      alert('Login successful');
      
      // Hide login slide, show main menu slide
      document.getElementById('loginSlide').style.display = 'none';
      document.getElementById('mainMenuSlide').style.display = 'block';
    } else {
      alert('Invalid username or password');
    }
  }
  