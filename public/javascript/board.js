/* eslint-disable */

/* Hide input drawer and show + icon */
var footer = document.getElementById('add_topic');
footer.classList.add('footer--hidden');
var drawerButton = document.getElementById('drawerButton');
drawerButton.addEventListener('click', function() {
  footer.classList.toggle('footer--hidden');
  drawerButton.classList.toggle('drawer-button--hidden');
});

var deleteButtons = document.querySelectorAll('.delete');

/* add event listeners to delete items */

for (var i = 0; i < deleteButtons.length; i++) {
  deleteButtons[i].addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = '/removetopic/' + event.target.id;
  });
}
