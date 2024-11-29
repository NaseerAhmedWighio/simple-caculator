let expression: string = "";
let buttons: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.button');

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e: Event) => {
        const target = e.target as HTMLElement;

        if (target.innerHTML === '=') {
            try {
                expression = eval(expression);
                const input = document.querySelector('input') as HTMLInputElement;
                if (input) input.value = expression;
            } catch (error) {
                console.error("Error evaluating the expression", error);
            }
        } else if (target.innerHTML === 'C') {
            expression = "";
            const input = document.querySelector('input') as HTMLInputElement;
            if (input) input.value = expression;
        } else {
            console.log(target);
            expression += target.innerHTML;
            const input = document.querySelector('input') as HTMLInputElement;
            if (input) input.value = expression;
        }
    });
});
