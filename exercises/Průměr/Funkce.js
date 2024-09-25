// Přidání dalšího řádku pro zadání známky a váhy
document.getElementById("add-row").addEventListener("click", function() {
    const inputFields = document.getElementById("input-fields");
    const gradeRow = document.createElement("div");
    gradeRow.className = "grade-row";
    gradeRow.innerHTML = `
        <input type="number" class="grade" placeholder="Známka" min="1" max="5">
        <input type="number" class="weight" placeholder="Váha" min="1" max="10">
    `;
    inputFields.appendChild(gradeRow);
});

// Výpočet váženého aritmetického průměru
document.getElementById("calculate").addEventListener("click", function() {
    const grades = document.querySelectorAll(".grade");
    const weights = document.querySelectorAll(".weight");

    let totalWeightedSum = 0;
    let totalWeight = 0;

    grades.forEach((grade, index) => {
        const gradeValue = parseFloat(grade.value);
        const weightValue = parseFloat(weights[index].value);
        console.log(gradeValue, weightValue);

        if (!isNaN(gradeValue) && !isNaN(weightValue)) {
            totalWeightedSum += gradeValue * weightValue;
            totalWeight += weightValue;
        }
    });

    if (totalWeight > 0) {
        const weightedAverage = totalWeightedSum / totalWeight;
        console.log("$Total váha je větší než nula 1 ${weightedAverage}");
        document.getElementById("result").textContent = `Vážený průměr: ${weightedAverage.toFixed(2)}`;
    } else {
        console.log("Total váha je menší než nula 2")
        document.getElementById("result").textContent = "Zadej prosím platné známky a váhy.";
    }
});