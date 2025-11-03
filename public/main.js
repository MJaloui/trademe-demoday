// main.js - JavaScript for TradeMe Demo Day
// Logic will be added later
// help with co-pilot, used previous project as a template
// Category filter functionality (UI only - logic to be added)
document.addEventListener('DOMContentLoaded', function () {
    var filterButtons = document.querySelectorAll('.filter-btn');

    filterButtons.forEach(function (btn) {
        btn.addEventListener('click', function () {
            // Remove active class from all buttons
            filterButtons.forEach(function (b) {
                b.classList.remove('active');
            });
            // Add active class to clicked button
            this.classList.add('active');

            // Filter logic will be added here
            var category = this.getAttribute('data-category');
            console.log('Filter by category:', category);
        });
    });

    // "I'm Interested" button functionality (UI only)
    var interestedButtons = document.querySelectorAll('.interested-btn');

    interestedButtons.forEach(function (btn) {
        btn.addEventListener('click', function () {
            var contactInfo = this.getAttribute('data-contact');
            document.getElementById('contact-info-display').textContent = contactInfo;
            $('#contactModal').modal('show');
        });
    });

    // Delete button functionality (UI only - logic to be added)
    var deleteButtons = document.querySelectorAll('.delete-btn');

    deleteButtons.forEach(function (btn) {
        btn.addEventListener('click', function () {
            var itemId = this.getAttribute('data-item-id');
            if (confirm('Are you sure you want to delete this item?')) {
                console.log('Delete item:', itemId);
                // Delete logic will be added here
            }
        });
    });
});

