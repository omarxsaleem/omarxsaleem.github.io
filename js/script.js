
// Add up-down movement to websites
// Source: https://www.youtube.com/watch?v=rPqghJhc5IA&t=514s
let timer = 0.1;
window.addEventListener('load', (event) => {
    let intersectionObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                console.log()
                setTimeout(countingAnimation(entry.target), timer);
                // timer += 50;
                intersectionObserver.unobserve(entry.target);
                // setTimeout(function() {timer = 0;} , 1000)
            }
        });
    });

    document.querySelectorAll('.counter').forEach(obj => {
        intersectionObserver.observe(obj);
    });
});

// Counting Animation
// Source: https://www.youtube.com/watch?v=a6XIMIKmj9k
function countingAnimation(counter) {
    // const counters = document.querySelectorAll('.counter');
    // let speed = 700.0; 
    
    // Set intial color to white and transition to rgb(119, 181, 254)
    let red = 255;
    let green = 255;
    let blue = 255;

    // Determine the intial font size
    var style = window.getComputedStyle(counter, null).getPropertyValue('font-size');
    var fontSize = parseFloat(style); 
    // console.log(fontSize);

    // Increment
    var inc = 0;

    var iterations = 0;

    // counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;

            // Lower inc to slow and higher to slow
            // const inc = target / speed;
            inc += 0.00025;
            iterations++;

            // console.log(inc);
            // console.log(count);

            // Alter the colors per iteration
            // red -= 0.34517;
            // green -= 0.18782;
            // blue -= 0.0025380711;
            red -= ((255.0 - 119.0) / 179);
            green -= ((255.0 - 181.0) / 179);
            blue -= ((255.0 - 254.0) / 179);

            counter.style.color = "rgb(" + red + ", " + green + ", " + blue + ")";

            // Alter the font-size
            // fontSize += 0.05;
            // counter.style["font-size"] = fontSize + "px";
    
            if (count < target) {

                // if (count > (target * 0.70)) {
                //     // counter.style["font-size"] = fontSize + "px";
                //     speed = 700;



                // }

                // Add inc to count and output in counter
                counter.innerText = (count + inc).toFixed(2);
                
                // Call function every ms
                setTimeout(updateCount, 1);
            } else {
                counter.innerText = target;
                console.log(iterations);

                console.log(red);
                console.log(green);
                console.log(blue);
            }
        };

        updateCount();
    // })
}

