const add = (num,mum) => {
    return num + mum
}

const sumObj = (obj) =>  {
    return Object.keys(obj).reduce((sum,key)=>sum+parseFloat(obj[key]||0),0);
}

module.exports = {sumObj, add};