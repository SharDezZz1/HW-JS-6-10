document.getElementById('submit-btn').addEventListener('click', function (e) {
    e.preventDefault();
    const NAME = document.getElementById('name').value;
    const EMAIL = document.getElementById('email').value;
    const PHONE = document.getElementById('phone').value;
    const AGE = document.getElementById('age').value;

    if (NAME && EMAIL && PHONE && AGE) {

        if (AGE < 18 && AGE >= 0) {
            document.querySelector('.content-img').classList.add('show');
        } else if (AGE < 0) {
            alert('Invalid value of age');
        } else {
            document.querySelector('.content-text').classList.add('show');
        }
    } else  {
        document.querySelector('.input-area').classList.add('invalid');
    }
});