declare function create2(o: object | null): void
create2({a: 123})
create2(null)

// create(0)
// create('search')
// create(true)
// create(undefined)

const someValue: any = 'a string'
const len = (someValue as string).length
const len2 = (<string> someValue).length
