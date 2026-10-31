lucide.createIcons();

        // Mobile Menu Toggle
        const menuBtn = document.getElementById('menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Filter Functionality
        const filterBtns = document.querySelectorAll('.filter-btn');
        const projectCards = document.querySelectorAll('.project-card');

        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => {
                    b.classList.remove('bg-indigo-600', 'text-white');
                    b.classList.add('bg-brand-card', 'text-gray-400');
                });
                btn.classList.add('bg-indigo-600', 'text-white');
                btn.classList.remove('bg-brand-card', 'text-gray-400');

                const filter = btn.getAttribute('data-filter');
                projectCards.forEach(card => {
                    if (filter === 'all' || card.getAttribute('data-category') === filter) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });

        // Modal Functionality
        const modal = document.getElementById('project-modal');
        const closeModal = document.getElementById('close-modal');
        const modalImg = document.getElementById('modal-img');
        const modalTitle = document.getElementById('modal-title');
        const modalDesc = document.getElementById('modal-desc');

        projectCards.forEach(card => {
            card.addEventListener('click', () => {
                modalImg.src = card.getAttribute('data-img');
                modalTitle.textContent = card.getAttribute('data-title');
                modalDesc.textContent = card.getAttribute('data-desc');
                modal.classList.remove('hidden');
            });
        });

        closeModal.addEventListener('click', () => {
            modal.classList.add('hidden');
        });

        // Quote Calculator
        const checkboxes = document.querySelectorAll('#quote-form input[type="checkbox"]');
        const totalPriceEl = document.getElementById('total-price');

        checkboxes.forEach(cb => {
            cb.addEventListener('change', () => {
                let total = 0;
                checkboxes.forEach(box => {
                    if (box.checked) {
                        total += parseInt(box.value);
                    }
                });
                totalPriceEl.textContent = `$${total}`;
            });
        });