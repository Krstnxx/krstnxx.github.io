const progressBar = document.getElementsByClassName('progress-bar')[0]
setInterval(() => {
  const computedStyle = getComputedStyle(progressBar)
  const width = parseFloat(computedStyle.getPropertyValue('--width')) || 0
  progressBar.style.setProperty('--width', width + .1)
}, 5)


var modal = document.getElementById('id01');
	

window.onclick = function(event) {
  if (event.target == modal) {
  modal.style.display = "modal";
  }
}
