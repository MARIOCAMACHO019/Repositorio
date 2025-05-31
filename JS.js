document.addEventListener('DOMContentLoaded', () => {
    // Código para el cursor personalizado (si ya lo tienes, déjalo)
    const cursor = document.querySelector('.cursor');
    const cursorFollower = document.querySelector('.cursor-follower');

    if (cursor && cursorFollower) {
        window.addEventListener('mousemove', e => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
            cursorFollower.style.left = e.clientX + 'px';
            cursorFollower.style.top = e.clientY + 'px';
        });
    }

    // Lógica para el typewriter y su cursor
    const typewriterElement = document.querySelector('.typewriter');
    if (typewriterElement) {
        const text = typewriterElement.textContent;
        const typingSpeed = 70; // milisegundos por carácter
        const delayAfterTyping = 1000; // milisegundos de espera antes de que desaparezca el cursor

        // Reinicia el texto para la animación
        typewriterElement.textContent = '';
        let i = 0;

        function typeWriter() {
            if (i < text.length) {
                typewriterElement.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, typingSpeed);
            } else {
                // Cuando termina de escribir, añade la clase para ocultar el cursor después de un breve retardo
                setTimeout(() => {
                    typewriterElement.classList.add('finished');
                }, delayAfterTyping);
            }
        }

        // Inicia la animación al cargar la página
        typeWriter();
    }
});

// Código para las barras de habilidad (si ya lo tienes, déjalo)
document.addEventListener('DOMContentLoaded', () => {
    const skillProgressBars = document.querySelectorAll('.skill-progress');

    const activateSkillBars = () => {
        skillProgressBars.forEach(bar => {
            const level = bar.dataset.level;
            bar.style.setProperty('--skill-level', level + '%');
        });
    };

    // Usar Intersection Observer para activar la animación cuando la sección sea visible
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                activateSkillBars();
                observer.disconnect(); // Deja de observar una vez que se activa
            }
        });
    }, {
        threshold: 0.5 // Cuando el 50% de la sección es visible
    });

    const skillsSection = document.getElementById('habilidades');
    if (skillsSection) {
        observer.observe(skillsSection);
    }
});

// Código para el gráfico de radar (si ya lo tienes, déjalo)
document.addEventListener('DOMContentLoaded', () => {
    const ctx = document.getElementById('skillsRadarChart');
    if (ctx) {
        new Chart(ctx, {
            type: 'radar',
            data: {
                labels: ['Sistemas', 'Redes', 'Seguridad', 'Automatización', 'Cloud', 'Bases de Datos', 'Scripting'],
                datasets: [{
                    label: 'Nivel de Habilidad',
                    data: [90, 85, 80, 70, 75, 80, 65], // Ajusta estos valores según tus habilidades reales
                    backgroundColor: 'rgba(100, 255, 218, 0.2)',
                    borderColor: 'var(--secondary-color)',
                    borderWidth: 2,
                    pointBackgroundColor: 'var(--secondary-color)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'var(--secondary-color)'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    r: {
                        angleLines: {
                            color: 'rgba(255, 255, 255, 0.2)'
                        },
                        grid: {
                            color: 'rgba(255, 255, 255, 0.2)'
                        },
                        pointLabels: {
                            color: 'var(--text-primary)',
                            font: {
                                size: 14,
                                family: var(--font-main)
                            }
                        },
                        ticks: {
                            display: false, // Ocultar los valores de los ticks
                            beginAtZero: true,
                            max: 100
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }
        });
    }
});
