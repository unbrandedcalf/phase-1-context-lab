function createEmployeeRecord(employeeData){
    const employee = {
    firstName: employeeData[0],
    familyName: employeeData[1],
    title: employeeData[2],
    payPerHour: employeeData[3],
    timeInEvents: [],
    timeOutEvents: []
    }
    return employee
}

function createEmployeeRecords(employeeDataArray) {
    return employeeDataArray.map(employeeData => createEmployeeRecord(employeeData));
  }
                       
  function createTimeInEvent(dateStamp) {
    const timeInEventObject = {
      type: "TimeIn",
      hour: parseInt(dateStamp.substring(11, 15)),
      date: dateStamp.substring(0, 10)
      }
      this.timeInEvents.push(timeInEventObject)
      return this;
  }  

  function createTimeOutEvent(dateStamp) {
    const timeOutEventObject = {
      type: "TimeOut",
      hour: parseInt(dateStamp.substring(11, 15)),
      date: dateStamp.substring(0, 10)
    }
    this.timeOutEvents.push(timeOutEventObject)
    return this;
  }  

  function hoursWorkedOnDate(date) {
    const timeInEvent = this.timeInEvents.find(event => event.date === date);
    const timeOutEvent = this.timeOutEvents.find(event => event.date === date);
    const hoursWorked = (timeOutEvent.hour - timeInEvent.hour) / 100;
    return hoursWorked
  }

  function wagesEarnedOnDate(date) {
    const hoursWorked = hoursWorkedOnDate.call(this, date)
    return this.payPerHour * hoursWorked
  }

  function findEmployeeByFirstName(employeeRecords, firstName) {
    return employeeRecords.find(record => record.firstName === firstName);
  }

  function calculatePayroll(employeeRecords) {
    let totalPay = 0;
    
    employeeRecords.forEach((employee) => {
    totalPay += allWagesFor.call(employee);
    });
    
    return totalPay;
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

