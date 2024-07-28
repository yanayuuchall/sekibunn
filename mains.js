const problems = [
    { number: 1, problem: "$$\\int (x^3 + 9x^2 - 7x + 5)\\,dx$$", solvable: true, weight: 1, solvedCount: 0 },
    { number: 2, problem: "$$\\int (3x^4 - 8x^2 + 4x - 6)\\,dx$$", solvable: true, weight: 1, solvedCount: 0 },
    { number: 3, problem: "$$\\int (4x^3 + 6\\sqrt{x} - 3)\\,dx$$", solvable: true, weight: 1, solvedCount: 0 },
    { number: 4, problem: "$$\\int (6x^2 + 4x\\sqrt{x} - \\frac{3}{x^2})\\,dx$$", solvable: true, weight: 1, solvedCount: 0 },
    { number: 5, problem: "$$\\int \\left(7x^2\\sqrt{x} - \\frac{3}{\\sqrt{x}} + \\frac{5}{x\\sqrt{x}}\\right)\\,dx$$", solvable: true, weight: 1, solvedCount: 0 },
    { number: 6, problem: "$$\\int (5x + 3)^4\\,dx$$", solvable: false, weight: 1, solvedCount: 0 },
    { number: 7, problem: "$$\\int \\frac{6}{(4x - 7)^3}\\,dx$$", solvable: false, weight: 1, solvedCount: 0 },
    { number: 8, problem: "$$\\int \\sqrt{7x + 2}\\,dx$$", solvable: false, weight: 1, solvedCount: 0 },
    { number: 9, problem: "$$\\int (3x - 5)\\sqrt{3x - 5}\\,dx$$", solvable: false, weight: 1, solvedCount: 0 },
    { number: 10, problem: "$$\\int \\frac{6}{(4x + 3)^2 \\sqrt{4x + 3}}\\,dx$$", solvable: false, weight: 1, solvedCount: 0 },
    { number: 11, problem: "$$\\int_{1}^{2} (x^3 - 8x^2 + 5x)\\,dx$$", solvable: true, weight: 1, solvedCount: 0 },
    { number: 12, problem: "$$\\int_{-1}^{2} (3x^4 - 9x^2 + 2)\\,dx$$", solvable: true, weight: 1, solvedCount: 0 },
    { number: 13, problem: "$$\\int_{1}^{4} (2x^2 - 3x\\sqrt{x} + \\frac{5}{\\sqrt{x}})\\,dx$$", solvable: true, weight: 1, solvedCount: 0 },
    { number: 14, problem: "$$\\int_{1}^{2} (2x^3 - 6\\sqrt{x} - \\frac{4}{x^3})\\,dx$$", solvable: true, weight: 1, solvedCount: 0 },
    { number: 15, problem: "$$\\int_{4}^{5} (2x - 8 + 3\\sqrt{7x} - 19)\\,dx$$", solvable: true, weight: 1, solvedCount: 0 },
    { number: 16, problem: "$$\\int_{-3}^{4} (x^2 - 5 + \\frac{2}{\\sqrt{3x + 13}})\\,dx$$", solvable: false, weight: 1, solvedCount: 0 },
    { number: 17, problem: "$$\\int_{1}^{7} (e^{2x + 3} + \\frac{3}{4x + 2})\\,dx$$", solvable: false, weight: 1, solvedCount: 0 },
    { number: 18, problem: "$$\\int_{1}^{5} (e^{5x - 3} + 2\\sqrt{8x - 4})\\,dx$$", solvable: false, weight: 1, solvedCount: 0 },
    { number: 19, problem: "$$\\int_{1}^{3} \\frac{x - 1}{3x^2 - 6x + 4}\\,dx$$", solvable: false, weight: 1, solvedCount: 0 },
    { number: 20, problem: "$$\\int_{1}^{2} \\frac{x^2 + 3}{x^3 + 9x - 6}\\,dx$$", solvable: false, weight: 1, solvedCount: 0 },
    { number: 21, problem: "$$\\int_{0}^{\\pi/4} \\sin^2(3x)\\,dx$$", solvable: true, weight: 1, solvedCount: 0 },
    { number: 22, problem: "$$\\int_{0}^{\\pi/6} \\cos^2(4x)\\,dx$$", solvable: true, weight: 1, solvedCount: 0 },
    { number: 23, problem: "$$\\int_{0}^{\\pi/6} 5x\\sin(2x)\\,dx$$", solvable: true, weight: 1, solvedCount: 0 },
    { number: 24, problem: "$$\\int_{0}^{\\pi/3} \\sin(4x)\\cos(x)\\,dx$$", solvable: true, weight: 1, solvedCount: 0 },
    { number: 25, problem: "$$\\int_{-1}^{\\sqrt{3}} \\frac{5}{\\sqrt{4 - x^2}}\\,dx$$", solvable: true, weight: 1, solvedCount: 0 },
    { number: 26, problem: "$$\\int_{2}^{6} \\frac{3}{12 + x^2}\\,dx$$", solvable: true, weight: 1, solvedCount: 0 },
    { number: 27, problem: "$$\\int_{\\sqrt{2}}^{2\\sqrt{6}} \\left(\\frac{x}{12 + x^2} + \\frac{3}{8 + x^2}\\right)\\,dx$$", solvable: false, weight: 1, solvedCount: 0 },
    { number: 28, problem: "$$\\int_{-3}^{3} \\left(\\frac{2}{\\sqrt{6 - x}} + \\frac{4}{\\sqrt{12 - x^2}}\\right)\\,dx$$", solvable: false, weight: 1, solvedCount: 0 },
    { number: 29, problem: "$$\\int_{-\\pi/4}^{\\pi/3} \\frac{\\cos(2x)}{\\sin(2x) + 2}\\,dx$$", solvable: false, weight: 1, solvedCount: 0 },
    { number: 30, problem: "$$\\int_{\\pi/6}^{\\pi/4} \\frac{\\sin(3x) - 1}{\\cos(3x) + 3x}\\,dx$$", solvable: false, weight: 1, solvedCount: 0 },
    { number: 31, problem: "$$\\int_{0}^{\\pi/6} 4\\sin^4(x)\\cos(x)\\,dx$$", solvable: false, weight: 1, solvedCount: 0 },
    { number: 32, problem: "$$\\int_{0}^{\\pi/4} 6\\cos^3(x)\\sin(x)\\,dx$$", solvable: false, weight: 1, solvedCount: 0 },
    { number: 33, problem: "$$\\int_{0}^{2} \\frac{x + 2}{\\sqrt{x^2 + 4x + 3}}\\,dx$$", solvable: false, weight: 1, solvedCount: 0 },
    { number: 34, problem: "$$\\int_{0}^{\\log(2)} \\frac{e^x}{(e^{3x} + 2)^2}\\,dx$$", solvable: false, weight: 1, solvedCount: 0 },
    { number: 35, problem: "$$\\int_{0}^{\\pi/4} (\\cos(2x) + 2x)^2(\\sin(2x) - 1)\\,dx$$", solvable: false, weight: 1, solvedCount: 0 },
    { number: 36, problem: "$$\\int_{1}^{2} (x^2 - 4x)e^{x^3 - 6x^2 + 5}\\,dx$$", solvable: false, weight: 1, solvedCount: 0 },
    { number: 37, problem: "$$\\int_{0}^{1} x\\cos\\left(\\frac{\\pi x^2}{3}\\right)\\,dx$$", solvable: false, weight: 1, solvedCount: 0 },
    { number: 38, problem: "$$\\int_{0}^{\\log(2)} e^{-2x}\\sin(\\pi e^{-2x})\\,dx$$", solvable: false, weight: 1, solvedCount: 0 },
    { number: 39, problem: "$$\\int_{1}^{e^4} \\frac{\\sqrt{5 + \\log(x)}}{x}\\,dx$$", solvable: false, weight: 1, solvedCount: 0 },
    { number: 40, problem: "$$\\int_{0}^{1/2} \\frac{\\pi\\cos(2\\pi x + x)}{\\sqrt{\\sin(2\\pi x + x^2)}}\\,dx$$", solvable: false, weight: 1, solvedCount: 0 },
    { number: 41, problem: "$$\\int_{0}^{2} x e^{5x}\\,dx$$", solvable: false, weight: 1, solvedCount: 0 },
    { number: 42, problem: "$$\\int_{0}^{\\pi/3} x\\sin(4x)\\,dx$$", solvable: false, weight: 1, solvedCount: 0 },
    { number: 43, problem: "$$\\int_{0}^{\\pi/6} x\\cos(2x)\\,dx$$", solvable: false, weight: 1, solvedCount: 0 },
    { number: 44, problem: "$$\\int_{1}^{e^3} x^4\\log(x)\\,dx$$", solvable: false, weight: 1, solvedCount: 0 },
    { number: 45, problem: "$$\\int_{2}^{3} x^2 e^{2x}\\,dx$$", solvable: false, weight: 1, solvedCount: 0 },
    { number: 46, problem: "$$\\int_{0}^{\\pi/3} x^2\\sin(3x)\\,dx$$", solvable: false, weight: 1, solvedCount: 0 },
    { number: 47, problem: "$$\\int_{2}^{5} \\frac{3x + 1}{x^2 + 2x - 3}\\,dx$$", solvable: false, weight: 1, solvedCount: 0 },
    { number: 48, problem: "$$\\int_{-2}^{1} \\frac{4x - 3}{x^2 - 5x + 6}\\,dx$$", solvable: false, weight: 1, solvedCount: 0 },
    { number: 49, problem: "$$\\int_{-1}^{2} \\frac{5x - 8}{x^2 - 6x + 9}\\,dx$$", solvable: false, weight: 1, solvedCount: 0 },
    { number: 50, problem: "$$\\int_{1}^{3} \\frac{3x + 7}{x^2 + 8x + 16}\\,dx$$", solvable: false, weight: 1, solvedCount: 0 },
    { number: 51, problem: "$$\\int_{1}^{4} \\frac{6x - 2}{x^2 - 2x + 5}\\,dx$$", solvable: false, weight: 1, solvedCount: 0 },
    { number: 52, problem: "$$\\int_{-1}^{1} \\frac{4x + 2}{x^2 + 4x + 7}\\,dx$$", solvable: false, weight: 1, solvedCount: 0 }
];

let currentProblem = null;
let solvedCount = 0;
let unsolvedCount = 0;
let solvedProblems = [];
let incorrectProblems = {};

// 初期化時にグリッドを作成
document.addEventListener("DOMContentLoaded", function() {
    loadSavedData();
    const gridDisplay = document.getElementById("gridDisplay");
    for (let i = 1; i <= 52; i++) {
        const gridItem = document.createElement("div");
        gridItem.className = "grid-item";
        gridItem.id = `grid-item-${i}`;
        gridItem.innerHTML = `<p>${i}</p>`;
        gridDisplay.appendChild(gridItem);
        updateGridItemColor(i, problems[i - 1].solvedCount); // 保存されたデータを基に色を更新
    }
});

document.getElementById("generateBtn").addEventListener("click", function() {
    const problem = generateRandomProblem();
    const problemDisplay = document.getElementById("problemDisplay");
    const solvableDisplay = document.getElementById("solvableDisplay");
    
    currentProblem = problem;
    problemDisplay.innerHTML = `問題 ${problem.number}: ${problem.problem}`;
    solvableDisplay.innerHTML = problem.solvable ? "この問題は解けます" : "この問題は解けません";

    MathJax.typesetPromise([problemDisplay, solvableDisplay]);
});

document.getElementById("solvedBtn").addEventListener("click", function() {
    if (currentProblem) {
        solvedCount++;
        currentProblem.weight *= 0.5;
        currentProblem.solvedCount++;
        updateGridItemColor(currentProblem.number, currentProblem.solvedCount);
        saveData(); // データを保存
    }
});

document.getElementById("unsolvedBtn").addEventListener("click", function() {
    if (currentProblem) {
        unsolvedCount++;
        solvedProblems.push(currentProblem.number);
        currentProblem.weight *= 2;
        if (incorrectProblems[currentProblem.number]) {
            incorrectProblems[currentProblem.number]++;
        } else {
            incorrectProblems[currentProblem.number] = 1;
        }
        saveData(); // データを保存
    }
});

function generateRandomProblem() {
    let totalWeight = problems.reduce((total, problem) => total + problem.weight, 0);
    let random = Math.random() * totalWeight;
    for (let problem of problems) {
        if (random < problem.weight) {
            return problem;
        }
        random -= problem.weight;
    }
}

function updateGridItemColor(problemNumber, solvedCount) {
    const gridItem = document.getElementById(`grid-item-${problemNumber}`);
    const intensity = Math.min(solvedCount * 20, 255); // 最大値は255
    gridItem.style.backgroundColor = `rgba(0, 128, 0, ${intensity / 255})`;
}

function saveData() {
    localStorage.setItem('problems', JSON.stringify(problems));
}

function loadSavedData() {
    const savedProblems = localStorage.getItem('problems');
    if (savedProblems) {
        const parsedProblems = JSON.parse(savedProblems);
        for (let i = 0; i < problems.length; i++) {
            problems[i].solvedCount = parsedProblems[i].solvedCount;
            problems[i].weight = parsedProblems[i].weight;
        }
    }
}
