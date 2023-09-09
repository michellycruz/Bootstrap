let alertPlaceholder = document.getElementById('liveAlertPlaceholder')
let alertTrigger = document.getElementById('liveAlertBtn')
let alertBtnFalse = document.getElementById('liveAlertBtnFalse')

function alert(message, type) {
    let wrapper = document.createElement('div')
    wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'

    alertPlaceholder.append(wrapper)
}

    if (alertTrigger) {
        alertTrigger.addEventListener('click', function () {
            alert('Muito bom programador, você vai ter muito sucesso na carreira!', 'success')
        })
    } 

    if(alertBtnFalse){
        alertBtnFalse.addEventListener('click', function(){
            alert('Nos informe como podemos melhorar', 'danger')
        })
    }