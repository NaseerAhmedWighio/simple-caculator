var expression = "";
var buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach(function (button) {
    button.addEventListener('click', function (e) {
        var target = e.target;
        if (target.innerHTML === '=') {
            try {
                expression = eval(expression);
                var input = document.querySelector('input');
                if (input)
                    input.value = expression;
            }
            catch (error) {
                console.error("Error evaluating the expression", error);
            }
        }
        else if (target.innerHTML === 'C') {
            expression = "";
            var input = document.querySelector('input');
            if (input)
                input.value = expression;
        }
        else {
            console.log(target);
            expression += target.innerHTML;
            var input = document.querySelector('input');
            if (input)
                input.value = expression;
        }
    });
});
