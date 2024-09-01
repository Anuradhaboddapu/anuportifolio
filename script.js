//for section projects
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
  
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
  
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to the clicked button
            button.classList.add('active');
  
            // Show or hide items based on filter
            portfolioItems.forEach(item => {
                if (filter === 'all' || item.classList.contains(filter)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});





document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menu-icon');
    const nav = document.getElementById('nav');

    // Toggle nav visibility on menu icon click
    menuIcon.addEventListener('click', () => {
        nav.classList.toggle('active');
    });

    // Close the nav when clicking outside of it
    document.addEventListener('click', (event) => {
        if (!nav.contains(event.target) && !menuIcon.contains(event.target)) {
            nav.classList.remove('active');
        }
    });
});

//typing text

document.addEventListener('DOMContentLoaded', function () {
    const textArray = ["UI/UX Developer", "UI/UX Designer", "Web Developer", "Web Designer",];
    const typingElement = document.getElementById('typing-text');
    let currentIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingSpeed = 100; // Speed of typing
    const deletingSpeed = 50; // Speed of deleting
    const pauseTime = 2000; // Pause time between text changes

    function type() {
        const currentText = textArray[currentIndex];
        typingElement.textContent = currentText.substring(0, charIndex);

        if (isDeleting) {
            charIndex--;
        } else {
            charIndex++;
        }

        if (!isDeleting && charIndex === currentText.length) {
            setTimeout(() => isDeleting = true, pauseTime);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            currentIndex = (currentIndex + 1) % textArray.length;
            setTimeout(type, pauseTime);
            return;
        }

        const speed = isDeleting ? deletingSpeed : typingSpeed;
        setTimeout(type, speed);
    }

    type(); // Start typing
});
