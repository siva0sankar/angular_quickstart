import { Component } from '@angular/core';
import { PostService} from '../services/post.service';

@Component({
  moduleId : module.id,
  selector: 'user',
  templateUrl: 'user.components.html',
  providers : [PostService]
})
export class UserComponent  {
     name : string;
     address : address;
     language : string[];
     showLang : boolean;
     posts : Posts[];

     constructor(private postService : PostService){
         this.name = 'Sankar Siva';
         this.address = {
             street : '67 , VRS Nagar',
             city : 'Polur'
         }
         this.language = ['Tamil','English','Hindi'];
         this.showLang = false;
         this.postService.getPosts().subscribe(posts => {
             this.posts = posts;
         })
     }

     toggleLang(){
         if(this.showLang){
             this.showLang = false;
         }else{
             this.showLang = true;
         }

     }

     addLang(newLang:string){
         this.language.push(newLang);
     }

     deleteLang(i:number){
         this.language.splice(i,1);
     }
}

interface address {
    street : string,
    city : string
}

interface Posts{
    title : string,
    body : string
}