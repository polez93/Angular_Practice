import { Component } from '@angular/core';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [],
  template: `
    <h3>Comentarios varios</h3>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY8mGaarQ22D-kBHmuUJf5-VKLJZ8ooJlHUw&s" alt="">
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, officiis! Nisi molestiae numquam laborum, ex dolorum itaque vel impedit exercitationem rem beatae, consequatur fuga nemo!
    </p>
  `,
  styles: `
  img{
    width: 100%;
    height: auto;
  }
  `
})
export class CommentsComponent {

}
