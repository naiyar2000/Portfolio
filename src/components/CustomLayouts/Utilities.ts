export const drawPolkatDot = (canvas: HTMLCanvasElement, cancelToken: { cancel: boolean, frameId?: number }) => {
    const ratio = window.devicePixelRatio || 1;
    const context = canvas.getContext("2d")
    if (context === null) return;
    canvas.width = window.innerWidth * ratio;
    canvas.height = window.innerHeight * ratio;
    context.scale(ratio, ratio);
    const dots: { x: number; y: number; r: number; speed: number }[] = [];
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


export const matrixRain = (canvas: HTMLCanvasElement, cancelToken: { cancel: boolean, frameId?: number }) => {
    const ratio = window.devicePixelRatio || 1;
    const context = canvas.getContext("2d")
    if (context === null) return;
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

export const mouseCloud = (canvas: HTMLCanvasElement, cancelToken: { cancel: boolean, frameId?: number }) => {
    const ctx = canvas.getContext("2d")
    if (!canvas && !ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const cloud: {
        x: number;
        y: number;
        segments: {
            x: number;
            y: number;
            alpha: number;
        }[];
        radius: number;
        dx: number;
        dy: number;
        friction: number;
        alpha?: number;
    } = {
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
        segments: Array.from({ length: 20 }, (_, i) => ({
            x: window.innerWidth / 2,
            y: window.innerHeight / 2,
            alpha: 1 - i * 0.05
        })),
        radius: 15,
        dx: 0,
        dy: 0,
        friction: 0.8,

    };

    const mouse = {
        x: null as number | null,
        y: null as number | null,
    };

    let mouseStopped = false;
    let stopTimer: NodeJS.Timeout;

    window.addEventListener('mousemove', (event) => {
        mouse.x = event.x;
        mouse.y = event.y;
        cloud.alpha = 1; // Reset alpha on mouse move
        mouseStopped = false;
        clearTimeout(stopTimer);
        stopTimer = setTimeout(() => {
            mouseStopped = true;
        }, 200); // Adjust the delay as needed
    });

    function drawCloud() {
        if (ctx === null) return;
        ctx.save();
        ctx.globalAlpha = 1;
        cloud.segments.forEach(segment => {
            ctx.globalAlpha = segment.alpha;
            const gradient = ctx.createRadialGradient(segment.x, segment.y, 0, segment.x, segment.y, cloud.radius);
            gradient.addColorStop(0, 'rgba(0, 255, 0, 0.7)');
            gradient.addColorStop(1, 'rgba(0, 255, 0, 0)');
            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(segment.x, segment.y, cloud.radius, 0, Math.PI * 2);
            ctx.closePath();
            ctx.fill();
        });
        ctx.restore();
    }

    function updateCloud() {
        if (mouse.x !== null && mouse.y !== null) {
            cloud.dx += (mouse.x - cloud.x) * 0.03;
            cloud.dy += (mouse.y - cloud.y) * 0.03;
        }

        cloud.dx *= cloud.friction;
        cloud.dy *= cloud.friction;

        cloud.x += cloud.dx;
        cloud.y += cloud.dy;

        // Update segment positions
        cloud.segments.unshift({ x: cloud.x, y: cloud.y, alpha: 1 });
        if (cloud.segments.length > 20) {
            cloud.segments.pop();
        }

        // Slow fade effect
        cloud.segments.forEach(segment => {
            if (mouseStopped) {
                segment.alpha *= 0.98; // Slow fade out
            }
        });
    }

    function animate() {
        if (cancelToken.cancel) {
            clearTimeout(stopTimer);
            return; // Stop the animation if the cancel token is set
        }
        if (ctx === null) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        updateCloud();
        drawCloud();
        requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
};



