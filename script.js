const form = document.getElementById('formCadastro');

if(form) {
    form.addEventListener ('submit', (event) => {
        event.preventDefault();
        const nome = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const senha = document.getElementById('password').value;  

     if (senha.length < 6) {
        alert('A senha deve ter pelo menos 6 caracteres.');
        return;
     } else {
        alert('Cadastro realizado com sucesso!');
        form.reset();
     } 
     alert(`Bem-vindo(a), ${nome}! Seu cadastro foi realizado com sucesso. 🌸`);

    });
}

// Doing this to see and unsee the password
const iconLock = document.querySelector('.bx-lock');
const passwordInput = document.getElementById('password');
if (iconLock && passwordInput) { iconLock.addEventListener('click', () => { 
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        iconLock.classList.replace('bx-lock', 'bxs-show');
    } else {
        passwordInput.type = 'password';
        iconLock.classList.replace('bxs-show', 'bxs-lock-alt');
    }
 });
}