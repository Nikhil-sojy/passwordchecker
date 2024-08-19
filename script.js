document.getElementById('password').addEventListener('input', function() {
    var password = this.value;
    
    // Criteria
    var lengthCriteria = password.length >= 8;
    var uppercaseCriteria = /[A-Z]/.test(password);
    var lowercaseCriteria = /[a-z]/.test(password);
    var numberCriteria = /[0-9]/.test(password);
    var specialCriteria = /[!@#$%^&*()_+{}\[\]:;"'<>,.?~`]/.test(password);
    
    // Elements
    document.getElementById('length').className = lengthCriteria ? 'valid' : 'invalid';
    document.getElementById('uppercase').className = uppercaseCriteria ? 'valid' : 'invalid';
    document.getElementById('lowercase').className = lowercaseCriteria ? 'valid' : 'invalid';
    document.getElementById('number').className = numberCriteria ? 'valid' : 'invalid';
    document.getElementById('special').className = specialCriteria ? 'valid' : 'invalid';
});
