import {Sorter} from './Sorter'
import {NumbersCollection} from './NumbersCollection'
import {CharactersCollection} from './CharactersCollection'
import {LinkedList} from './LinkedList'

const numbersCollection = new NumbersCollection([8,-9,0,-3,18,2])
numbersCollection.sort()
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection('ZaXayU')

charactersCollection.sort()
console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(500)
linkedList.add(-10)
linkedList.add(3)
linkedList.add(0)
linkedList.add(7)

linkedList.sort()
linkedList.print();
