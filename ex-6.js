

const thinkGrade = (grade) => {
  switch (true) {
    case grade >= 80:
      console.log("Grade: A")
      break;
    case grade >= 70:
      console.log("Grade: B")
      break;
    case grade >= 60:
      console.log("Grade: C")
      break;
    case grade >= 50:
      console.log("Grade: D")
      break;
    case grade >= 0:
      console.log("Grade: E")
      break;
    default:
      console.log('Default case');
  }
}

thinkGrade(0);
thinkGrade(49.9);
thinkGrade(50);
thinkGrade(59.9);
thinkGrade(60);
thinkGrade(69.9);
thinkGrade(70);
thinkGrade(79.9);
thinkGrade(80);
thinkGrade(100);