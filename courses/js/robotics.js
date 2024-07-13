document.addEventListener('DOMContentLoaded', () => {
    // Add smooth scrolling to all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
  
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
  
    // Robot Animation
    const robot = document.createElement('div');
    robot.classList.add('tiny-robot');
    document.body.appendChild(robot);

    // Function to move robot in a more complex path
    const moveRobot = () => {
        const path = [
            { transform: 'translate(0, 0)' },
            { transform: 'translate(100px, 0)' },
            { transform: 'translate(100px, 100px)' },
            { transform: 'translate(0, 100px)' },
            { transform: 'translate(0, 0)' }
        ];
        
        const options = {
            duration: 10000,
            iterations: Infinity,
            easing: 'ease-in-out'
        };

        robot.animate(path, options);
    };

    moveRobot();
});
