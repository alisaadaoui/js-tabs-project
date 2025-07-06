
// Tab switching logic
document.addEventListener('DOMContentLoaded', function () {
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabPanels = document.querySelectorAll('.tab-panel');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      // Remove active from all buttons
      tabBtns.forEach(b => b.classList.remove('active'));
      // Hide all panels
      tabPanels.forEach(panel => panel.classList.remove('active'));
      // Activate clicked button
      this.classList.add('active');
      // Show corresponding panel
      const tabId = this.getAttribute('data-tab');
      document.getElementById(tabId).classList.add('active');
    });
  });
});
