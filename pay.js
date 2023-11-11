function validatePaymentForm() {

 
    const expiryInput = document.getElementById('expiry');
    const cvvInput = document.getElementById('cvv');

    // Check if the expiry date is valid (MM/YY format)
    const expiryValue = expiryInput.value;
    const expiryPattern = /^(0[1-9]|1[0-2])\/(\d{2})$/;
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear() % 100; // Get last 2 digits of the current year
    const currentMonth = currentDate.getMonth() + 1; // Get current month
  
    if (!expiryPattern.test(expiryValue)) {
        alert('Invalid Expiry Date. Please use the MM/YY format.');
        return false;
    }

    const [, month, year] = expiryValue.match(expiryPattern);

    if (parseInt(year) < currentYear || (parseInt(year) === currentYear && parseInt(month) < currentMonth)) {
        alert('Invalid Expiry Date. The card has expired.');
        return false;
    }

    // Check if the CVV is a valid 3-digit number
    const cvvValue = cvvInput.value;
    const cvvPattern = /^\d{3}$/;
    if (!cvvPattern.test(cvvValue)) {
        alert('Invalid CVV. Please enter a 3-digit number.');
        return false;
    }

    // If both validation checks pass, show a success message and redirect
    alert('Payment Successful!');
    window.location.href = "addcart.html";
    return false;
}