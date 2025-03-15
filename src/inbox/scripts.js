// Get the elements
const popupSidebar = document.getElementById('popUpSidebar');
const overlay = document.getElementById('overlay');
const openPopupBtn = document.querySelector('.open-popup-btn');
const closeBtn = document.querySelector('.close-btn');

// Function to open the sidebar
function openSidebar() {
  popupSidebar.style.width = '250px';
  overlay.style.display = 'block';
}

// Function to close the sidebar
function closeSidebar() {
  popupSidebar.style.width = '0';
  overlay.style.display = 'none';
}

// Event listeners
openPopupBtn.addEventListener('click', openSidebar);
closeBtn.addEventListener('click', closeSidebar);
overlay.addEventListener('click', closeSidebar);
