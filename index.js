/* Your Code Here */

function createEmployeeRecord (empArr){
    let newRecord = {
        firstName: empArr[0],
        familyName: empArr[1],
        title: empArr[2],
        payPerHour: empArr[3],
        timeInEvents: [],
        timeOutEvents: [],

    };
    return newRecord;

}

function createEmployeeRecords(empsArr){

    let newEmpArrs = [];

    for(let i = 0; i < empsArr.length; i++){
        newEmpArrs[i] = createEmployeeRecord(empsArr[i]);

    }
    return newEmpArrs;


}

function createTimeInEvent(eventStr){

    let dateTime = eventStr.split(` `);
    let newEventObj = {
        type: "TimeIn",
        hour: parseInt(dateTime[1]),
        date: dateTime[0],
    }
    
    this.timeInEvents.push(newEventObj);
    return this;
    


}

function createTimeOutEvent(eventStr){


    let dateTime = eventStr.split(` `);
    let newEventObj = {
        type: "TimeOut",
        hour: parseInt(dateTime[1]),
        date: dateTime[0],
    }
    this.timeOutEvents.push(newEventObj);

    return this;
    


}


function hoursWorkedOnDate(targetDate){
    let loopCounter = 0; 

    while(this.timeInEvents[loopCounter].date !== targetDate){
        loopCounter++;
    }
    return (this.timeOutEvents[loopCounter].hour - this.timeInEvents[loopCounter].hour)/100;

}


function wagesEarnedOnDate(targetDate){

    return this.payPerHour * (hoursWorkedOnDate.call(this, targetDate));


}

function findEmployeeByFirstName(srcArray, firstName){
    let loopCounter = 0;
    while(srcArray[loopCounter].firstName !== firstName){
        loopCounter++;
    }
    return srcArray[loopCounter];

}

function calculatePayroll(srcArray){
    let wages = 0;

    for(let i = 0; i < srcArray.length; i++){
        wages = wages + (allWagesFor.call(srcArray[i]));
    }
    return wages;
}


/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

