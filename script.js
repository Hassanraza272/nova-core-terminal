// Function to check login status on every page load
document.addEventListener("DOMContentLoaded", function() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const authGroup = document.getElementById('authGroup');
    const userGroup = document.getElementById('userGroup');

    // Agar dashboard par hain aur elements maujood hain
    if (authGroup && userGroup) {
        if (isLoggedIn === 'true') {
            authGroup.style.display = 'none';
            userGroup.style.display = 'flex';
            
            // UI mein data bharna
            document.getElementById('userNameDisplay').innerText = localStorage.getItem('userName') || 'Operative';
            document.getElementById('userImgDisplay').src = localStorage.getItem('userPic') || 'https://via.placeholder.com/32';
        } else {
            authGroup.style.display = 'flex';
            userGroup.style.display = 'none';
        }
    }
});

// Profile Setup Save Function
function saveProfileData() {
    const name = document.getElementById('username').value;
    if(!name) { alert("Please enter a username!"); return; }

    localStorage.setItem('userName', name);
    localStorage.setItem('isLoggedIn', 'true'); // Sab se zaroori line
    
    console.log("Profile Saved Successfully");
    window.location.href = 'dashboard.html';
}

// Logout Function
function logoutUser() {
    localStorage.setItem('isLoggedIn', 'false');
    location.reload();
}