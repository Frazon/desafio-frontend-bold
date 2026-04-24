const shareForm = document.getElementById('form_share');

shareForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const friendName = document.getElementById('name_friend').value.trim();
    const friendEmail = document.getElementById('email_friend').value.trim();

    if(friendName === "" || friendEmail === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }else if(friendName.length < 3){
        alert("Por favor, insira um nome válido.");
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(friendEmail)) {
        alert("Por favor, insira um e-mail válido.");
        return;
    }

    alert(`Sucesso! O convite foi enviado para ${friendName}.`);
    shareForm.reset();
});