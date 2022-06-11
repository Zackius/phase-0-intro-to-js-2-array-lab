// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

const destructivelyAppendCat = (Ralph) =>{
    cats.push(Ralph)
}
const destructivelyPrependCat = (Bob) =>{
    cats.unshift(Bob)
}
const destructivelyRemoveLastCat = () =>{
    cats.pop()
}
const destructivelyRemoveFirstCat = () =>{
    cats.shift()
}
const appendCat = (Broom) => {
    let newCats = [...cats, Broom]
     return newCats
}
const prependCat = (Arnold) => {
    let newArray = [Arnold, ...cats]
    return newArray

}
const removeLastCat = () =>{
   let newArray = cats.slice(0, 2)
   return newArray
}
const removeFirstCat = () =>{
    let fast = cats.slice(1)
    return fast
}
