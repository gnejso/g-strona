// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });
    // Close on outside click
    document.addEventListener('click', (e) => {
        if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
            navLinks.classList.remove('show');
        }
    });
}

// Scroll Reveal Animation
const observerOptions = { threshold: 0.12 };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Booking Form Validation
const bookingForm = document.getElementById('bookingForm');
if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const dateInput = document.getElementById('date');
        if (dateInput && dateInput.value) {
            const dateVal = new Date(dateInput.value);
            const day = dateVal.getDay();
            
            if (day === 0) {
                alert('Firma jest nieczynna w niedziele. Proszę wybrać inny termin.');
                return;
            }
        }

        bookingForm.innerHTML = `
            <div style="text-align:center; padding: 60px 40px; background: var(--off-white); border: 2px solid var(--orange);">
                <div style="font-size: 3rem; margin-bottom: 20px;">✅</div>
                <h3 style="color: var(--orange); font-family: Oswald; font-size: 2rem; margin-bottom: 12px;">DZIĘKUJEMY!</h3>
                <p style="font-size: 1.1rem; color: #555;">Twoje zapytanie zostało wysłane.<br>Oddzwonimy wkrótce!</p>
            </div>`;
    });
}

// Set min date for date input to today
const dateInput = document.getElementById('date');
if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);
}
