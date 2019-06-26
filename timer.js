const schedule = require('node-schedule');

const task1 = schedule.scheduleJob('*/5 * 14 * * 3', () => {
  console.log('Executing task 1!', new Date().getSeconds());
});

setTimeout(() => {
  task1.cancel();
  console.log('Canceling task');
}, 20000);

// setImmediate
// setInterval

const rule = new schedule.RecurrenceRule();
rule.dayOfWeek = [new schedule.Range(1, 5)];
rule.hour = 14;
rule.second = 30;

const task2 = schedule.scheduleJob(rule, () => {
  console.log('Executing task 2!', new Date().getSeconds());
});
