const increment = (counterVal: number) => {
  return counterVal + 1
}

const counter: number = increment(10)

let programmingLanguages: string[] = ["Javascript", "Typescript", "Phyton"]
programmingLanguages.push("Googlang")
console.log(programmingLanguages)

interface IUser {
  name: string,
  email: string,
  age: number,
  isMarried: boolean
}

const fetchData = (apiUrl: string): Promise<IUser> => {
  return fetch(apiUrl)
          .then((res) => (res.json()))
}


//always create interface when objects.

interface IProgrammingLanguage {
  name: string,
  awesome: boolean
  //can also make some of the properties optional
  age?: number
}

const typeScript: IProgrammingLanguage = {
  name: 'typescript',
  awesome: true
}

enum Cheese {
  cheddar= 'cheddar',
  gouda= 'gouda',
  goat= 'goat',
  blueMould= 'blueMould'
}

//if a function doesn't return anything, just set it up as void

const serveCheese = (cheeseType: Cheese, servings: number): void => {
  console.log(`You want ${servings} servings of ${cheeseType}`)
}

serveCheese(Cheese.blueMould, 3)