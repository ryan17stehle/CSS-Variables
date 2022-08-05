const inputs = document.querySelectorAll('.controls input');
inputs.forEach(input => input.addEventListener('change', handleUpdate));
// inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

function handleUpdate() {
    const suffix = this.dataset.sizing;

    // document.documentElement returns the root element (:root)
    // setProperty(propertyName, value)
    document.documentElement.style.setProperty(`--${this.name}`, `${this.value}${suffix}`);
}
