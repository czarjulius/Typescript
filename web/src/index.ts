import {User} from './models/User';

const user = new User({name: 'Julius', age: 90})
user.on('click', ()=>{
  console.log('click event triggered');
  
})
user.trigger('click')
user.trigger('clickgjgjjgj')