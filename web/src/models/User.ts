import {Model} from './Model'
import {ApiSync} from './ApiSync'
import {Eventing} from './Eventing'
import {Attributes} from './Attributes'

const rootUrl = 'http://localhost:3000/users';

export interface UserProps{
  id?: number
  name?: string;
  age?: number
}

export class User extends Model<UserProps> {
  static buildUser(atttrs: UserProps): User{
    return new User(
      new Attributes<UserProps>(atttrs),
      new Eventing(),
      new ApiSync<UserProps>(rootUrl)
    );
  }
}