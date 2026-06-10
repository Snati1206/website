const canvas = document.getElementById("profilePic");
const ctx = canvas.getContext("2d");

const img = new Image();
img.src = "img/meImg/guitar.jpg";

img.onload = () => {
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;
    const scale = Math.min(canvasWidth / img.width, canvasHeight / img.height);
    const imageWidth = img.width * scale;
    const imageHeight = img.height * scale;
    const offsetX = (canvasWidth - imageWidth) / 2;
    const offsetY = (canvasHeight - imageHeight) / 2;

    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    ctx.drawImage(img, offsetX, offsetY, imageWidth, imageHeight);
};

img.onerror = () => {
    ctx.fillStyle = "#333";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#fff";
    ctx.font = "20px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("Image not found", canvas.width / 2, canvas.height / 2);
};



