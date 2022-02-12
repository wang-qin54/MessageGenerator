// This is Qin
const dataPool = {
    vege: ["cucumbers", "avocados", "tomatos", "lettuce", "Chinese choi", "brocolli"],
    meat: ["pork", "beef", "chicken", "fish", "eggs" ],
    carb: ["potatos", "rice", "pasta", "bread"]
};

const ranGen = (list) => {
    let ranIndex = Math.floor(Math.random() * list.length);
    return list[ranIndex];
};

const vegeSelect = ranGen(dataPool.vege);
const meatSelect = ranGen(dataPool.meat);
const carbSelect = ranGen(dataPool.carb);

let menuRobot = `${vegeSelect}, ${meatSelect}, ${carbSelect}`;

console.log (menuRobot);
