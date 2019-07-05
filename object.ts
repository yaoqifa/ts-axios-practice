declare function create(o: object | null): void
create({a: 123})
create(null)

// create(0)
// create('search')
// create(true)
// create(undefined)

const someValue: any = 'a string'
const len = (someValue as string).length
const len2 = (<string> someValue).length
