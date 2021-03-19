document.addEventListener('DOMContentLoaded', function() {
    // Use buttons to toggle between views
    document.querySelector('#Español').addEventListener('click', () => redirect() );


});

function redirect(){
    document.querySelector('#Ingles').click();
    window.location.href = 'https://tomasp92.github.io/';
}

