// CGPA Calculation
function generateCGPAInputs() {
  const numSubjects = document.getElementById("num-subjects").value;
  const container = document.getElementById("cgpa-subjects-inputs");
  container.innerHTML = ""; // Clear previous inputs

  for (let i = 0; i < numSubjects; i++) {
    const inputField = document.createElement("div");
    inputField.innerHTML = `  
      <label for="subject${i + 1}">Subject ${i + 1} - Credits and Grade</label>
      <input type="number" id="credits${i + 1}" placeholder="Credits for subject ${i + 1}" />
      <input type="text" id="grade${i + 1}" placeholder="Grade for subject ${i + 1} (A, B, C, etc.)" />
    `;
    container.appendChild(inputField);
  }
}

function calculateCGPA() {
  const numSubjects = document.getElementById("num-subjects").value;
  let totalCredits = 0;
  let totalPoints = 0;

  for (let i = 0; i < numSubjects; i++) {
    const credits = parseFloat(document.getElementById(`credits${i + 1}`).value);
    const grade = document.getElementById(`grade${i + 1}`).value.toUpperCase();

    let gradePoint = 0;
    switch (grade) {
      case "A":
        gradePoint = 4;
        break;
      case "B":
        gradePoint = 3;
        break;
      case "C":
        gradePoint = 2;
        break;
      case "D":
        gradePoint = 1;
        break;
      case "F":
        gradePoint = 0;
        break;
    }

    totalCredits += credits;
    totalPoints += credits * gradePoint;
  }

  const cgpa = totalPoints / totalCredits;
  document.getElementById("cgpa-output").textContent = cgpa.toFixed(2);
}

// GPA Calculation
function calculateGPA() {
  const grades = document.getElementById("gpa-subjects").value.split(",");
  const gradePoints = {
    "A": 4, "B": 3, "C": 2, "D": 1, "F": 0
  };
  let totalPoints = 0;
  grades.forEach(grade => {
    grade = grade.trim().toUpperCase();
    totalPoints += gradePoints[grade] || 0;
  });
  const gpa = totalPoints / grades.length;
  document.getElementById("gpa-output").textContent = gpa.toFixed(2);
}

// Percentage Calculation
function calculatePercentage() {
  const marksObtained = parseFloat(document.getElementById("marks-obtained").value);
  const totalMarks = parseFloat(document.getElementById("total-marks").value);
  const percentage = (marksObtained / totalMarks) * 100;
  document.getElementById("percentage-output").textContent = percentage.toFixed(2);
}

// Average Marks Calculation
function calculateAverage() {
  const marks = document.getElementById("total-marks-obtained").value.split(",").map(Number);
  const totalMarks = marks.reduce((sum, mark) => sum + mark, 0);
  const average = totalMarks / marks.length;
  document.getElementById("average-output").textContent = average.toFixed(2);
}

// Reset Fields
function resetFields() {
  document.getElementById("num-subjects").value = "";
  document.getElementById("cgpa-subjects-inputs").innerHTML = "";
  document.getElementById("gpa-subjects").value = "";
  document.getElementById("marks-obtained").value = "";
  document.getElementById("total-marks").value = "";
  document.getElementById("total-marks-obtained").value = "";
  document.getElementById("cgpa-output").textContent = "0";
  document.getElementById("gpa-output").textContent = "0";
  document.getElementById("percentage-output").textContent = "0";
  document.getElementById("average-output").textContent = "0";
}
// Disable right click
document.addEventListener("contextmenu", (e) => e.preventDefault());
// Disable F12 / inspect
document.onkeydown = function (e) {
  if (e.keyCode == 123) return false; // F12
  if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) return false;
};