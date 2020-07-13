class AlarmClock {
    constructor(){
        this.alarmCollections = [];
        this.timerId = [];
    }
    addClock(time,callBack,alarmId){
        const exist = this.alarmCollections.id.find(alarm => alarm.id == alarmId);
        if (alarmId == undefined){
            throw new Error('error text');
        } else if (exist){
            return console.error(e);
        };
        this.alarmCollections.push({id: alarmId, time: time, callBack: callBack})
    };
    removeClock(alarmId){
        
    }
};