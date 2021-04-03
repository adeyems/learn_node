function johnMary(str) {
    let mcount = 0, jcount = 0
    jcount = str.match(/John/gi)
    if (!!jcount)
        jcount = jcount.length;


    mcount = str.match(/Mary/gi)
    if (!!mcount)
        mcount = mcount.length;

    console.log(jcount, mcount)
    return jcount === mcount;
}

console.log(johnMary("John&Marymary"));
