class Timer {
  timeoutID;
  constructor(title, delay, stopCount) {
    this.title = title;
    this.delay = delay;
    this.stopCount = stopCount;
    this.start();
  }
  start() {
    console.log(
      `Timer ${this.title} started (delay=${this.delay}, stopCount=${this.stopCount})`
    );
    const NikitaDontUnderstandJS = () => this.tick();
    this.timeoutID = setInterval(NikitaDontUnderstandJS, this.delay);
  }

  tick() {
    this.stopCount--;
    let title = this.title;
    console.log(`Timer ${title} Tick! | cycles left ${this.stopCount}`);
    if(this.stopCount === 0 ){
        this.stop();
    }
  }
  stop() {
    console.log("method stop");
    clearInterval(this.timeoutID);
  }
}

function runTimer(id, delay, counter) {
  new Timer(id, delay, counter);
}

runTimer("Nikitos", 1000, 5);

// let count = 5
// let intId = setInterval(counter,1000)

// function counter(){
//     console.log(count--);
//     if(count < 0){
//         clearInterval(intId)
//     }
// }
// console.log(count);
