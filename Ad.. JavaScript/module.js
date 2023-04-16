var firstname="shailendra"
 var lastname = "singh"
 var age = 26


const Fun1 = () => {

    console.log('I am Fun1 Present In From Module ')
}

const Fun2 = (x,y) => {

       return (x+y);
}

export {firstname,lastname,age,Fun1,Fun2}