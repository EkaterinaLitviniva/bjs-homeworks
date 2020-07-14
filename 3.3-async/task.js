'use strict';

class AlarmClock {

    constructor(){
        this.alarmCollection = [];
        this.timerId = [];
    }
    aaddClock(time, callback, id){
        if (id === undefined) {
      console.error('Не задан идентификатор таймера');
      return;
        }
        if (this.alarmCollection.find(item => item.id === id)) {
      console.error('Таймер с заданным идентификатором уже существует');
      return;
        }
        this.alarmCollection.push({ id, time, callback });
    };

    removeClock(id){
        const alarm = this.id.filter(al => al.id === id)
        if(alarm){
            delete this.id[alarm];
            return 'Звонок удален';
        }
         return 'Звонок не найден';
    };

    getCurrentFormattedTime(){
        let now = new Date();
        return `${now.getHours()}:${now.getMinutes()}`;
    };

    start(){
        let checkClock = (alarm) => {
            if (alarm.time == this.getCurrentFormattedTime()){ alarm.callback();}
        }
        this.timerId = setInterval(() => this.alarmCollection.forEach(element => checkClock(element)),1000);
    };

    stop(){
        if (this.timerID !== null) {
            clearInterval(this.timerID);
            this.timerId = null;
        }
    };

    printAlarms() {
        this.alarmCollection.forEach(item => console.log(`Будильник №${item.id} заведён на ${item.time}`));
      };

    clearAlarms() {
        this.stop;
        this.alarmCollection = [];
    };
};

function testCase(){
    const phoneAlarm = new AlarmClock;
    phoneAlarm.addClock('09:00',() => console.log('Пора вставать'),1);
    phoneAlarm.addClock('09:05',() => {console.log('Давай, вставай уже!'); phoneAlarm.removeClock(2)},2);
    phoneAlarm.addClock('09:10',() => console.log('Иди умываться'));
    phoneAlarm.addClock('09:12',() => {
        console.log('Вставай, а то проспишь!');
    phoneAlarm.clearAlarms();
    phoneAlarm.printAlarms();
      },3);
    phoneAlarm.addClock('09:13',()=>console.log('Вставай!'),1);
    phoneAlarm.printAlarms();
    phoneAlarm.start();
};

testCase();