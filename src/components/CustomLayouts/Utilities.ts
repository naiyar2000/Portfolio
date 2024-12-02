export const drawPolkatDot = (canvas: HTMLCanvasElement, context: CanvasRenderingContext2D, cancelToken: { cancel: boolean, frameId?: number }) => {
    const ratio = window.devicePixelRatio || 1;
    canvas.width = window.innerWidth * ratio;
    canvas.height = window.innerHeight * ratio;
    context.scale(ratio, ratio); const dots: { x: number; y: number; r: number; speed: number }[] = [];
    const numDots = 100;
    // Number of dots
    // Initialize dots with random positions, sizes, and speeds 
    for (let i = 0; i < numDots; i++) {
        dots.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            r: Math.random() * 1 + 2,
            // Random radius between  and 8
            speed: Math.random() * 0.05 + 0.5,
            // Random speed between 0.5 and 1.5
        });
    }
    const drawPolka = () => {
        // Clear the canvas 
        context.clearRect(0, 0, canvas.width, canvas.height);
        if (cancelToken.cancel) {
            return; // Stop the animation if the cancel token is set
        }
        // Draw and update each dot 
        dots.forEach(dot => {
            // Draw the dot
            context.beginPath(); context.arc(dot.x, dot.y, dot.r, 0, Math.PI * 2); context.fillStyle = 'rgba(0, 255, 0, 0.7)';
            // Green polka dots 
            context.fill(); context.closePath();
            // Update the dot's position
            dot.x += dot.speed; if (dot.x > canvas.width) {
                dot.x = -dot.r; // Reset dot position to the left side of the canvas 
                dot.y = Math.random() * canvas.height; // Random new y position 
            }
        }); // Request next frame 
        requestAnimationFrame(drawPolka);
    }
    requestAnimationFrame(drawPolka);
}


export const matrixRain = (canvas: HTMLCanvasElement, context: CanvasRenderingContext2D, cancelToken: { cancel: boolean, frameId?: number }) => {
    const ratio = window.devicePixelRatio || 1;
    canvas.width = window.innerWidth * ratio;
    canvas.height = window.innerHeight * ratio;
    context.scale(ratio, ratio);

    const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
    const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const nums = '0123456789';
    const alphabet = katakana + latin + nums;
    const fontSize = 12;
    const columnWidth = fontSize + 4;
    const columns = Math.floor(window.innerWidth / columnWidth);
    const rainDrops = Array.from({ length: columns }, () => canvas.height);
    const frameRate = 30; // Desired frame rate
    const frameInterval = 2000 / frameRate; // Time interval between frames in milliseconds
    let lastTime = 0;

    // Create gradient
    const gradient = context.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, '#050506');
    gradient.addColorStop(0.5, '#0a1f1f');
    gradient.addColorStop(1, '#000000');

    // Draw gradient once initially
    context.fillStyle = gradient;
    context.fillRect(0, 0, canvas.width, canvas.height);


    const draw = (currentTime: number) => {
        if (cancelToken.cancel) {
            return; // Stop the animation if the cancel token is set
        }
        const deltaTime = currentTime - lastTime;
        // Clear the canvas with a semi-transparent black color to maintain the fading effect
        if (deltaTime >= frameInterval) {
            context.fillStyle = 'rgba(0, 0, 0, 0.05)';
            context.fillRect(0, 0, canvas.width, canvas.height);

            // Draw the rain effect
            context.fillStyle = '#0F0';
            context.font = `${fontSize}px monospace`;

            for (let i = 0; i < rainDrops.length; i++) {
                const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
                context.fillText(text, i * columnWidth, rainDrops[i] * fontSize);

                if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    rainDrops[i] = 0;
                }
                rainDrops[i]++;
            }
            lastTime = currentTime - (deltaTime % frameInterval)
        }
        cancelToken.frameId = requestAnimationFrame(draw);
    };

    cancelToken.frameId = requestAnimationFrame(draw);


}