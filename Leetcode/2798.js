var numberOfEmployeesWhoMetTarget = function(hours, target) {
counter = 0;
    for(i=0; i < hours.length; i++) {
        if(hours[i] >= target){
            counter++;
        }
    }
    return counter;   
};

const hours = [0,1,2,3,4];
console.log(numberOfEmployeesWhoMetTarget(hours, 2));