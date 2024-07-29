"use strict"

require("@scss/index.scss")

const { search, info } = require("./api/product")

const testTemplate = require("./templates/test.ejs")
console.log(testTemplate({ name: "TEST!" }))

document.getElementById('app').innerHTML = testTemplate({ name: "TEST!" })

search("Apple").then((res) => {
    console.log(res);
    const resultsDiv = document.createElement('div');
    resultsDiv.innerHTML = `<p>Results for Apple: ${res}</p>`;
    document.getElementById('app').appendChild(resultsDiv);
})
// info(171689).then((res) => console.log(res))
