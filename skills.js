$(document).ready(function() {
    // Initialize AOS
    AOS.init();

    // Filter Skills
    $('.btn-filter').on('click', function() {
        const filter = $(this).data('filter');
        $('.btn-filter').removeClass('active');
        $(this).addClass('active');

        if (filter === 'all') {
            $('.skill-category').show();
        } else {
            $('.skill-category').hide();
            $(`.skill-category[data-category="${filter}"]`).show();
        }
    });

    // Dark Mode Toggle
    const themeToggle = $('#theme-toggle');
    const body = $('body');

    themeToggle.on('click', function() {
        body.toggleClass('dark-mode');
        const isDarkMode = body.hasClass('dark-mode');
        themeToggle.html(isDarkMode ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>');
    });
});