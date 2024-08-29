document.addEventListener('DOMContentLoaded', (event) => {
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('currentDate').value = today;
});

function Cal() {
    const dobin = document.getElementById('dob').value;
    const cdtin = document.getElementById('currentDate').value;

    if (!dobin || !cdtin) {
        alert("Enter both Date of Birth and Current date");
        return;
    }

    const dob = new Date(dobin);
    const cdt = new Date(cdtin);

    let ageYears = cdt.getFullYear() - dob.getFullYear();
    let ageMonths = cdt.getMonth() - dob.getMonth();
    let ageDays = cdt.getDate() - dob.getDate();

    if (ageDays < 0) {
        ageMonths--;
        const lastMonthDate = new Date(cdt.getFullYear(), cdt.getMonth() - 1, dob.getDate());
        ageDays += (cdt - lastMonthDate) / (1000 * 60 * 60 * 24); 
    }

    if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12; 
    }

    document.getElementById('result').textContent = `Your age is ${ageYears} years, ${ageMonths} months, and ${Math.floor(ageDays)} days.`;
}
