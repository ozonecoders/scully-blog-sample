import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogListComponent {
  blogs$ = this.srs.available$.pipe(
    map((routeList) =>
      routeList.filter((route: ScullyRoute) => route.route.startsWith(`/blog/`))
    ),
    map((blogs) => blogs.sort((a, b) => (a.date < b.date ? -1 : 1)))
  );

  constructor(private srs: ScullyRoutesService) {}
}
