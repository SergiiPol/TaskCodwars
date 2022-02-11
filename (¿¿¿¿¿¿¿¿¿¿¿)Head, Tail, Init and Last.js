function compareNum(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1; };

    
function head(arr){
    (arr.length > 1) ? console.log(arr.splice(0, 1).toString()*1) : console.log([]);
};
function init(arr){
    (arr.length > 2) ? console.log(arr.sort(compareNum).splice(0, arr.length -1)) : console.log(arr);
};
function tail(arr){
    (arr.length > 2) ? console.log(arr.sort(compareNum).splice(1, arr.length)): console.log(arr);
};
function last(arr){
    (arr.length > 1) ? console.log(arr.splice(-1, 1).toString()*1): console.log([]);
};

head([1,2,3,4,5,6,7,8,9]);
init([11,52,33,41,5,6,17,8,19]);
tail([1,2,3,4,5,6,7,8,9]);
last([1,2,3,4,5,6,7,8,9]);   