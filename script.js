function calculateCosineLaw(a,b, angleC) {
    return Math.sqrt(a ** 2 + b ** 2 - 2 * a * b * Math.cos(angleC * (Math.PI / 180)));

}

document.getElementById("calculateCosine").addEventListener("click", () => {
    const a = parseFloat(document.getElementById("sideA").value);
    const b = parseFloat(document.getElementById("sideB").value);
    const angleC = parseFloat(document.getElementById("angleC").value);
    const result = calculateCosineLaw(a,b,angleC);
    document.getElementById("cosineResult").textContent = result

});