// var timestamp = 1712739600000;
// const date = new Date(timestamp);
// const options = {year: 'numeric', month: 'numeric', day: 'numeric'};
// const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);
// console.log(formattedDate);

let foo = function(timestamp) {
    let javaStamp = timestamp * 1000;
    const date = new Date(javaStamp);
    const options = {year: 'numeric', month: 'numeric', day: 'numeric'};
    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);

    return formattedDate.toString();
}

// module.exports = formatDate;