async function retryRequest(promiseFunc, nrOfRetries) {
    let i = 1;
    promiseFunc.then(success => success)
        .catch(fail => {
            if (i <= nrOfRetries){
                i++;
                retryRequest(promiseFunc, nrOfRetries)
            }
        })
}

let hasFailed = false;
function getUserInfo() {
    return new Promise((resolve, reject) => {
        if(!hasFailed) {
            hasFailed = true;
            reject("Exception!");
        } else {
            resolve("Fetched user!");
        }
    });
}
let promise = retryRequest(getUserInfo, 3);
if(promise) {
    promise.then((result) => console.log(result))
        .catch((error) => console.log("Error!"));
}
module.exports.retryRequest = retryRequest;
