function cosLaw(a,b, angleC) {
    return Math.sqrt(a ** 2 + b ** 2 - 2 * a * b * Math.cos(angleC * (Math.PI / 180)));

}

document.getElementById("calculateCosine").addEventListener("click", () => {
    const a = Number(document.getElementById("sideA").value);
    const b = Number(document.getElementById("sideB").value);
    const angleC = Number(document.getElementById("angleC").value);
    const result = cosLaw(a,b,angleC);
    document.getElementById("cosineResult").textContent = result

});

function findAsymptote(m,n) {
    if (m = n) {
        return "The asymptote is horizontal";
    } else if (n< m) {
        return "The asymptote is the x-axis";
    }else {
        const degreeDifference = m - n;
        const names = ["Linear", "Quadratic", "Cubic", "Quartic","Quintic", "Sextic", "Septic", "Octic", "Nonic", "Decic"];
        return names[degreeDifference - 1] ? names[degreeDifference - 1] : "Higher-degree asymptote";
    
    }
}

document.getElementById("findAsymptote").addEventListener("click", () => {
    const m = parseInt(document.getElementById("numeratorDegree").value, 10);
    const n = parseInt(document.getElementById("denominatorDegree").value, 10);
    const result = findAsymptote(m,n);
    document.getElementById("asymptoteResult").textContent = result;
});




