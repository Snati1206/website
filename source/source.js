
// Filter navigation bar behavior

// Contact infinite scrolling test


const imgArray = [];

async function fillImgArray() {
    try {
        const response = await fetch("imgList.txt");

        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const text = await response.text();

        text.split("\n")
            .map(line => line.trim())
            .filter(line => line.length > 0)
            .forEach(img => imgArray.push(img));

        console.log(imgArray);
    } catch (error) {
        console.error(error.message);
    }
}


