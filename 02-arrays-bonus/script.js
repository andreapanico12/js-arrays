const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers

// =====SOLUZIONE CON METODO CERCATO IN DOCUMENTAZIONE====

// const reversedTeachers = teachers.toReversed();
// console.log(reversedTeachers)

// =====SOLUZUONE CON LOGICA "FOR"======

const reversedTeachers = [];
for (i=teachers.length -1; i >= 0; i--){
  reversedTeachers.push(teachers[i])
}
console.log(reversedTeachers)
  


// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri

// =====SOLUZIONE CON METODO CERCATO IN DOCUMENTAZIONE====

// const longNames = teachers.filter(name => name.length >= 5);
// console.log(longNames)

// =====SOLUZUONE CON LOGICA "FOR"======

const longNames = [];
for (i=0; i< teachers.length; i++){
  if( teachers[i].length >= 5)
    longNames.push(teachers[i])
}
console.log(longNames)


// 3. Rimuovi 'Ed' dall'array teachers
teachers.splice(1,1)
console.log(teachers)