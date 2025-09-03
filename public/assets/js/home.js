document.addEventListener('DOMContentLoaded', () => {
    // Navbar background change on scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Search box functionality
    const searchBox = document.querySelector('.search-box');
    const searchBtn = document.querySelector('.search-btn');
    searchBtn.addEventListener('click', () => {
        searchBox.classList.toggle('active');
        if (searchBox.classList.contains('active')) {
            searchBox.querySelector('input').focus();
        }
    });

    // Close search box when clicking outside
    document.addEventListener('click', (e) => {
        if (!searchBox.contains(e.target)) {
            searchBox.classList.remove('active');
        }
    });

    // Slider functionality
    class Slider {
        constructor(container) {
            this.container = container;
            this.sliderContainer = container.querySelector('.slider-container');
            this.prevBtn = container.querySelector('.slider-arrow.prev');
            this.nextBtn = container.querySelector('.slider-arrow.next');
            this.itemWidth = this.sliderContainer.querySelector('.slider-item').offsetWidth;
            this.visibleItems = Math.floor(this.sliderContainer.offsetWidth / this.itemWidth);

            this.setupEventListeners();
        }

        setupEventListeners() {
            this.nextBtn.addEventListener('click', () => this.slide('next'));
            this.prevBtn.addEventListener('click', () => this.slide('prev'));

            // Update item width on window resize
            window.addEventListener('resize', () => {
                this.itemWidth = this.sliderContainer.querySelector('.slider-item').offsetWidth;
                this.visibleItems = Math.floor(this.sliderContainer.offsetWidth / this.itemWidth);
            });
        }

        slide(direction) {
            const currentScroll = this.sliderContainer.scrollLeft;
            const scrollAmount = this.itemWidth * this.visibleItems;

            if (direction === 'next') {
                this.sliderContainer.scrollLeft = currentScroll + scrollAmount;
            } else {
                this.sliderContainer.scrollLeft = currentScroll - scrollAmount;
            }
        }
    }

    // Initialize all sliders
    document.querySelectorAll('.slider').forEach(slider => new Slider(slider));
});
