document.getElementById('clickMeButton').addEventListener('click', function() {
  const message = document.getElementById('message');
  message.textContent = "You clicked the button! ??";
  message.style.color = "#6200ea";
  message.style.fontWeight = "bold";
});
