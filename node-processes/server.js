const express = require("express")
const app = express();
const fetch = require("node-fetch")

app.get("/getFibonacci", async (req, res) => {
    const startTime = new Date()
    const result = await fibonacciWithPromise(parseInt(req.query.number))
    const endTime = new Date()
    res.json({
        number: parseInt(req.query.number),
        fibonacci: result,
        time: endTime.getTime() - startTime.getTime() + "ms",
    })
})

app.get("/call-to-slow-server", async (req, res) => {
    const result = await fetch("http://localhost:5000/slowrequest") //fetch returns a promise
    const resJson = await result.json()
    res.json(resJson)
})

app.get("/isPrime", async (req, res) => {
    const startTime = new Date()
    const result = await isPrime(parseInt(req.query.number)) //parseInt is for converting string to number
    const endTime = new Date()
    res.json({
        number: parseInt(req.query.number),
        isPrime: result,
        time: endTime.getTime() - startTime.getTime() + "ms",
    })
})

app.get("/test-request", (req, res) => {
    res.send("I am unblocked now")
})


const fibonacci = n => {
    if (n <= 1) {
        return 1
    }

    return fibonacci(n - 1) + fibonacci(n - 2)
}

const fibonacciWithPromise = n => {
    return new Promise((resolve, reject) => {
        if (n <= 1)
            resolve(1)

        resolve(fibonacci(n - 1) + fibonacci(n - 2))
    })
}

const isPrime = number => {
    return new Promise(resolve => {
        let isPrime = true
        for (let i = 3; i < number; i++) {
            if (number % i === 0) {
                isPrime = false
                break
            }
        }
        resolve(isPrime)
    })
}

app.listen(3000, () => console.log("listening on port 3000"))
