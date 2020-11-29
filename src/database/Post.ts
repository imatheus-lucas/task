import { Model } from '@nozbe/watermelondb'
import { field } from '@nozbe/watermelondb/decorators'


interface Props {
  title:string;
  body:string;
}
export default class Post extends Model implements Props {
  static table = 'posts'
  @field('title') title: any;
  @field('body') body: any;
}