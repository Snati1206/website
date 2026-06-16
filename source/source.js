


document.addEventListener("DOMContentLoaded",()=>{
    const container = document.getElementById("portfolioContainer");
    if (!container) return;

    // observe only the direct child divs (these wrap images, text, iframes, etc.)
    const items = Array.from(container.children).filter(el => el.tagName === "DIV");

    const observerOptions = {
        root: null,
        rootMargin: "-10px -10px -10px -10px",
        threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const target = entry.target;
            if (entry.isIntersecting) {
                target.classList.add("show");
            } else {
                target.classList.remove("show");
            }
        });
    }, observerOptions);

    items.forEach(item => observer.observe(item));
});


