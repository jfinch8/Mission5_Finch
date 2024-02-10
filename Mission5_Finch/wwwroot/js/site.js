// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
$(document).ready(function () {
    $('#calculateBtn').click(function () {
        // Get the entered hours
        var hours = parseFloat($('#hours').val());

        // Validate input
        if (isNaN(hours) || hours < 0) {
            alert('Please enter a valid, positive number of hours.');
            return;
        }

        // Set your hourly rate
        var hourlyRate = 20.00;

        // Calculate total
        var total = hours * hourlyRate;

        // Display the total
        $('#total').val('$' + total.toFixed(2));
    });
});
