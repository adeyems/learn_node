async function retryRequest(promiseFunc, nrOfRetries) {
    let p = Promise.reject();
    for (let  i = 0; i < nrOfRetries; i++){
        p = p.catch(promiseFunc);
    }
    return p.then(promiseFunc)
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
