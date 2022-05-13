
class HardWorker{
    get age(){
  return this.fuck
    }
  
      set age(value){
          if(value >= 1 && value < 100){
            this.fuck = value
           } 
        
      }
      get salary(){
        return this.simple
      }
      set salary(value){
        if(value >= 0 && value < 10000){
          return this.simple = value
        }
      }
  
  
      
  
      toObject(){
        return {name : this.name,age : this.age,salary: this.salary}
    }
     
  }
  
  
  
  
  let worker = new HardWorker;
  
  worker.name = 'Bruce'
  console.log(worker.name);
  
  worker.age = 50;
  worker.salary = 1500;
  console.log(worker.toObject());
  
  worker.name = 'Linda'
  worker.age = 140
  console.log(worker.toObject())
  
  
  
  export default HardWorker
  