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
        const lastMonth = new Date(cdt.getFullYear(), cdt.getMonth(), 0); 
        ageDays += lastMonth.getDate();
    }

    if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
    }

    document.getElementById('result').textContent = `Your age is ${ageYears} years, ${ageMonths} months, and ${ageDays} days.`;
}
