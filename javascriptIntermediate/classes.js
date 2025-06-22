// class Dog {
//   constructor(name) {
//     this._name = name;
//     this._behavior = 0;
//   }

//   get name() {
//     return this._name;
//   }
//   get behavior() {
//     return this._behavior;
//   }   

//   incrementBehavior() {
//     this._behavior ++;
//   }
// }

// const dog1 = new Dog("buddy");

// console.log(dog1.name)
// console.log(dog1.behavior);
// dog1.incrementBehavior();

//==============================================constructor==========================================

// class Surgeon{
//   constructor(name, department){
//     this.name = name;
//     this.department = department;
//   }
// }

//===================================================instance==========================================
// class Surgeon {
//   constructor(name, department) {
//     this.name = name;
//     this.department = department;
//   }
// }

// const surgeonRomero = new Surgeon('Francisco Romero', 'Cardiovascular');
// const surgeonJackson = new Surgeon('Ruth Jackson', 'Orthopedics'); 

// console.log(surgeonRomero.name);
// console.log(surgeonRomero.department);

//=================================================methods==============================================
// class Surgeon {
//   constructor(name, department) {
//     this._name = name;
//     this._department = department;
//     this._remainingVacationDays = 20;
//   }
//   get name(){
//     return this._name;
//   }
//   get department(){
//     return this._department;
//   }
//   get remainingVacationDays(){
//     return this._remainingVacationDays;
//   }
//    takeVacationDays (daysOff){
//     this._remainingVacationDays = this._remainingVacationDays - daysOff;
//   }
// }

// const surgeonRomero = new Surgeon('Francisco Romero', 'Cardiovascular');
// const surgeonJackson = new Surgeon('Ruth Jackson', 'Orthopedics');
// surgeonRomero.takeVacationDays(5)

// console.log(surgeonRomero.remainingVacationDays);

//==================================================method calls===============================================
// class Surgeon {
//   constructor(name, department) {
//     this._name = name;
//     this._department = department;
//     this._remainingVacationDays = 20;
//   }
  
//   get name() {
//     return this._name;
//   }
  
//   get department() {
//     return this._department;
//   }
  
//   get remainingVacationDays() {
//     return this._remainingVacationDays;
//   }
  
//   takeVacationDays(daysOff) {
//     this._remainingVacationDays -= daysOff;
//   }
// }

// const surgeonRomero = new Surgeon('Francisco Romero', 'Cardiovascular');
// const surgeonJackson = new Surgeon('Ruth Jackson', 'Orthopedics');

// console.log(surgeonRomero.name);
// surgeonRomero.takeVacationDays(3);
// console.log(surgeonRomero.remainingVacationDays);

//===================================================inheritence========================================
// class Doctor {
//   constructor(name){
//     this._name = name;
//     this._remainingVacationDays = 20;
//     this._insurance;
//   }
//   takeVacationDays(){

//   }
// }


// class Nurse {
//   constructor(name){
//     this._name = name;
//     this._remainingVacationDays = 20;
//     this._insurance;
//   }
//   takeVacationDays(){

//   }

//   addCertifications(){

//   }
// }

// class HospitalEmployee{
//   constructor(name){
//     this._name = name;
//     this._remainingVacationDays = 20;
//   }

//   get name(){
//     return this._name;
//   }

//   get remainingVacationDays(){
//     return this._remainingVacationDays; 
//   }

//   takeVacationDays(daysOff){
//     this._remainingVacationDays -= daysOff
// }
// }

//===================================================more inheritance================================================
// class HospitalEmployee {
//   constructor(name) {
//     this._name = name;
//     this._remainingVacationDays = 20;
//   }
  
//   get name() {
//     return this._name;
//   }
  
//   get remainingVacationDays() {
//     return this._remainingVacationDays;
//   }
  
//   takeVacationDays(daysOff) {
//     this._remainingVacationDays -= daysOff;
//   }
// }


// class Nurse extends HospitalEmployee{
//   constructor(name, certifications){
//     super(name)
//     this._certifications = certifications;
//   }
// }
// const nurseOlynyk = new Nurse('Olynyk', ['Trauma', 'Pediatrics']);


//================================================moreee inheritance=====================================================
// class HospitalEmployee {
//   constructor(name) {
//     this._name = name;
//     this._remainingVacationDays = 20;
//   }
  
//   get name() {
//     return this._name;
//   }
  
//   get remainingVacationDays() {
//     return this._remainingVacationDays;
//   }
  
//   takeVacationDays(daysOff) {
//     this._remainingVacationDays -= daysOff;
//   }
// }

// class Nurse extends HospitalEmployee {
//  constructor(name, certifications) {
//    super(name);
//    this._certifications = certifications;
//  } 
// }

// const nurseOlynyk = new Nurse('Olynyk', ['Trauma','Pediatrics']);
// nurseOlynyk.takeVacationDays(5);
// console.log(nurseOlynyk.remainingVacationDays);


//======================================================================================

class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }
  
  get name() {
    return this._name;
  }
  
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
}

class Nurse extends HospitalEmployee {
  constructor(name, certifications) {
    super(name);
    this._certifications = certifications;
  }
  get certifications(){
  return this._certifications 
  }
addCertification(newCertification){
  this._certifications.push(newCertification)
}

}

const nurseOlynyk = new Nurse('Olynyk', ['Trauma','Pediatrics']);
nurseOlynyk.takeVacationDays(5);
console.log(nurseOlynyk.remainingVacationDays);
nurseOlynyk.addCertification('Genetics');
console.log(nurseOlynyk.certifications);