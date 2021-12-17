// Сделайте функцию, каждый вызов который будет генерировать
// случайные числа от 1 до 100, но так, чтобы они не повторялись,
//     пока не будут перебраны все числа из этого промежутка.
//     Решите задачу через замыкания - в замыкании должен хранится
//     массив чисел, которые уже были сгенерированы функцией.

const getRandomNumber = () => Math.floor(Math.random() * 100) +1;

function generateId() {
    const newArray = [];

    function generateNumber() {
        const randomNum = getRandomNumber();

        if (newArray.length === 100) return newArray;
        
        if (newArray.includes(randomNum)) {
            return generateNumber();
        } 

        newArray.push(randomNum);
        return newArray;
       
        
    }

    return generateNumber;
}

const idGenerator = generateId();
let foo;

for (let i = 0; i <= 100; i++){
    foo = idGenerator();
}
//сортировка
// foo = foo.sort((a, b) => a - b);

console.log(foo);


    



