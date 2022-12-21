function createQuote(quote, callback) {
    let myQuote = "Like I always say," + quote;
    callback(myQoute); // 2
}

function logQoute(qoute) {
    console.log(qoute + 'Yes..');
}

createQuote(" you wil getting better!", logQoute); // 1
