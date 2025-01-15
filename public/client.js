// Connect to the Socket.IO server
const socket = io("https://cfsoundscape-backend.onrender.com");

// Select the trigger box
const triggerBox = document.querySelector("#trigger-box");

// Handle click events on the trigger box
triggerBox.addEventListener("click", () => {
  console.log("Sound triggered!");

  // Emit a "playSound" event with the sound's position and file
  socket.emit("playSound", {
    position: triggerBox.getAttribute("position"),
    audio: "assets/audio1.mp3"
  });
});

// Play sounds triggered by other users
socket.on("playSound", (data) => {
  console.log("Playing sound from another user:", data);

  // Create a temporary sound entity
  const sound = document.createElement("a-sound");
  sound.setAttribute("src", data.audio);
  sound.setAttribute("position", data.position);
  sound.setAttribute("autoplay", "true");

  // Add the sound to the scene
  document.querySelector("a-scene").appendChild(sound);

  // Remove the sound after it finishes playing
  sound.addEventListener("sound-ended", () => {
    sound.parentNode.removeChild(sound);
  });
});
