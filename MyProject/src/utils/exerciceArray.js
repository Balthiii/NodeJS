export function displayArray() {
    const tableau = [1,2,3,4,5,6,7,8,9,10];
    return tableau
}

export function displayFirstDayWeek(arrayWeek) {
    return arrayWeek[0]
}

export function sumArray(arrayPairNumber) {
    let initialValue = 0
    for (let i=0; i < arrayPairNumber.length; i++) {
        initialValue += arrayPairNumber[i];
    }
    return initialValue
}

export function arrayAddFruit(arrayFruits) {
    arrayFruits.push("Grenade")
    return arrayFruits
}

export function NoteAverage(arrayNote) {
    let initial = 0
    for (let i=0; i < arrayNote.length; i++) {
        initial += arrayNote[i];
    }
    return initial/arrayNote.length
}

export function SearchBird(arrayBird,bird) {
   for (let i = 0; i < bird.length; i++) {
        if (arrayBird[i] === bird)
        return "L'oiseau est bien dans le tableau"
   }
   return "L'oiseau n'est pas dans le tableau"
}
