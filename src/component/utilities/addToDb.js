const addToDb = (value) => {

    let saveTime = { value };
    localStorage.setItem("practice-time", JSON.stringify(saveTime));



};
const getTime = () => {
    let getTime = localStorage.getItem("practice-time");

    if (getTime) {
        const storeTime = JSON.parse(getTime);
        return storeTime;
    }
    else {
        
        getTime = 0;
        return getTime;
    }


};
export {
    addToDb,
    getTime
};