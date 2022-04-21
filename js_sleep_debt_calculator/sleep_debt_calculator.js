const getSleepHours = (day) => {

    if (day === 'Monday') {
        return 8;
    } else if (day === 'Tuesday') {
        return 7;
    } else if (day === 'Wednesday') {
        return 8;
    } else if (day === 'Thursday') {
        return 9;
    } else if (day === 'Friday') {
        return 10;
    } else if (day === 'Saturday') {
        return 5;
    } else if (day === 'Sunday') {
        return 4;
    } else {
        return 'void';
    }

    // switch (day) {
    //     case 0:
    //         day === 'Monday';
    //         return 8;
    //     break;
    //     case 1:
    //         day === 'Tuesday';
    //         return 8;
    //     break;
    //     case 2:
    //         day === 'Wednesday';
    //         return 8;    
    //     break;
    //     case 3:
    //         day === 'Thursday';
    //         return 8;
    //     break;
    //     case 4:
    //         day === 'Friday';
    //         return 8;
    //     break;
    //     case 5:
    //         day === 'Saturday';
    //         return 8;    
    //     break;
    //     case 6:
    //         day === 'Sunday';
    //         return 8;    
    //     break;   
            
    // }

}

const getActualSleepHours = () => {
    const total = getSleepHours('Monday')+
    getSleepHours('Tuesday')+
    getSleepHours('Wednesday')+
    getSleepHours('Thursday')+
    getSleepHours('Friday')+
    getSleepHours('Saturday')+
    getSleepHours('Sunday');
        return total;
}


const getIdealSleepHours = (idealHours) => {
        return idealHours*7;
}

const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours(8);

    if (actualSleepHours > idealSleepHours){
        return console.log('you slept ' + (actualSleepHours - idealSleepHours) + ' to many hours');
    } else if (actualSleepHours < idealSleepHours){
        return console.log('you still need ' + (idealSleepHours - actualSleepHours) + ' more hours of sleep');
    } else (actualSleepHours === idealSleepHours)
        return console.log('youve acheived the ideal amount of hours');
}

calculateSleepDebt();