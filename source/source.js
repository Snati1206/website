
// Filter navigation bar behavior

// Contact infinite scrolling test
// const imgArray = [];
// const container = document.getElementById("contactContainer");

document.addEventListener("DOMContentLoaded",()=>{
        const divs = document.querySelectorAll("#portfolioContainer div")
        
        const observer = new IntersectionObserver((entries)=>{
        entries.forEach(entry=>{
            if(entry.isIntersecting){
                entry.target.classList.add("show");
            }
            else{
                entry.target.classList.remove("show");
            }
        })
        console.log(entries);
    },{})

    divs.forEach(item=>observer.observe(item));
})

// const URL = '../img/portfolio/';




// async function fillImgArray() {
//     try {
//         const response = await fetch("imgList.txt");

//         if (!response.ok) {
//             throw new Error(`Response status: ${response.status}`);
//         }

//         const text = await response.text();

//         text.split("\n")
//             .map(line => line.trim())
//             .filter(line => line.length > 0)
//             .forEach(img => imgArray.push(img));

//         console.log(imgArray);
//         console.log(location.href);s
//     } catch (error) {
//         console.error(error.message);
//     }
// }


