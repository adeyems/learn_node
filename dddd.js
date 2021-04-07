function johnMary(str) {
    let maryCount, johnCount
    johnCount = str.match(/John/gi)
    if (!!johnCount)
        johnCount = johnCount.length;


    maryCount = str.match(/Mary/gi)
    if (!!maryCount)
        maryCount = maryCount.length;

    return johnCount === maryCount;
}

console.log(johnMary("John&Marymary"));
