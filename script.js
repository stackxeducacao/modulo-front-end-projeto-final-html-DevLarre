function handlePlaceholder(element, placeholder) {
    element.addEventListener('focus', function() {
        if (this.placeholder === placeholder) {
            this.placeholder = '';
        }
    });

element.addEventListener('blur', function(){
    if (this.placeholder === '') {
        this.placeholder = placeholder;
    }
});
}

handlePlaceholder(placeEnd, 'NAME');
handlePlaceholder(placeEnd1, 'E-MAIL');
handlePlaceholder(message, 'MESSAGE');