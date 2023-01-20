function updateElements(event) {
    if (event.type === 'mousemove') {
        document.documentElement.style.setProperty(`--${this.name}`, this.value + "px");
    }
    else {
        document.documentElement.style.setProperty(`--${this.name}`, this.value);
        console.log(this.value);
    };
};

const inputs = document.getElementsByTagName('input');
for (let i = 0; i < inputs.length-1; i++) {
    inputs[i].onmousemove = updateElements;
};
inputs[inputs.length-1].onchange = updateElements;