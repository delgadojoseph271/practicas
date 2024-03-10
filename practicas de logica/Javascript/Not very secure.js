function alphanumeric(string){
    //your code here
    const regex = /[^\w\s]/g  
    const coincidence = string.match(regex);
    if(coincidence === null){
        return true
    }
    else{
        return false
    }

}
console.log(alphanumeric("hello world_"))