import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GraphService } from 'src/app/graphql/graph.service';

@Component({
  selector: 'app-share-page',
  templateUrl: './share-page.component.html',
  styleUrls: ['./share-page.component.scss'],
})
export class SharePageComponent {
  userName = localStorage.getItem('USER_NAME');
  sharedUserName: string = '';
  topic: string = '';
  score: number = 0;

  constructor(
    private readonly router: Router,
    private route: ActivatedRoute,
    private graphService: GraphService
  ) {
    console.log(this.route.snapshot.params);
    this.sharedUserName = this.route.snapshot.params['userName'];
    this.topic = this.route.snapshot.params['topic'];

    this.loadinfo();
  }

  loadinfo() {
    this.graphService
      .getInfoAboutUser(this.sharedUserName, this.topic)
      .subscribe((data) => {
        console.log(data);
        this.score = data.score;
      });
  }

  passTest() {
    localStorage.setItem('pickedTopic', this.topic);
    this.router.navigate(['/graph']);
  }
}
