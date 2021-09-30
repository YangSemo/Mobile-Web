class Student {
    constructor (name, age, enrolled, score) {
        this.name=name;
        this.age=age;
        this.enrolled=enrolled;
        this.score=score;
    }
}

const students = [
    new Student("RM", 21, true, 75),
    new Student("진",23,false, 80),
    new Student("슈가", 24, false, 90),
    new Student("제이홉", 22, true, 87),
    new Student("지민", 25, true, 90),
    new Student("뷔", 21, true, 89),
    new Student("정국", 22, true, 95),
];

// 성적이 90이면 반환(첫 번 째 요소를 반환 후 종료)
const findStudent = students.find((student) => {
    return student.score==90;
});
console.log(findStudent);

// 코드 간략화
const findStudent2 = students.find((student) => student.score==90);
console.log(findStudent2);

// 등록 학생이고 성적이 90이면 반환(첫 번 째 요소를 반환 후 종료)
const findStudent3 = students.find((student) => {
    return student.enrolled==true && student.score==90;
});
console.log(findStudent3);


// filter: 모든 요소 출력
const filterStudents = students.filter((student) => {
    return student.enrolled==true;
});
console.log(filterStudents);

const filterStudents2 = students.filter((student) => {
    return student.enrolled==true && student.score>=90;
});
console.log(filterStudents2);


// map: 배열의 특정 값을 변경하여 새로운 배열 만들기
const scoreArr = students.map((student) => student.score);
console.log(scoreArr);

// reduce: 배열의 합계 평균 구하기
// 총점 계산
const scoreSum = students.reduce((sum,curr) => sum + curr.score, 0);
// 평균 계산
// toFixed(소수점자리수): 원하는 자리 수까지 표현(반올림)
const scoreAvg = (scoreSum/ students.length).toFixed(1);
console.log(`scoreSum: ${scoreSum}, scoreAvg: ${scoreAvg}`);