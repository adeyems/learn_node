
function numberOfItems(arr, item) {
    let count = 0;
    let counter = (arr, item) => {
        arr.forEach(element => {
            if (Array.isArray(element))
                return counter(element, item)
            else {
                if (element === item) {
                    count++
                }
            }
        })
    }
    counter(arr, item);

    return count;
}

var arr = [
    25,
    "apple",
    ["banana", "strawberry", "apple", 25]
];
console.log(numberOfItems(arr, 25));
console.log(numberOfItems(arr, "apple"));
