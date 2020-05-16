import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ScullyLibModule } from '@scullyio/ng-lib';

import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogComponent } from './blog.component';
import { BlogRoutingModule } from './blog-routing.module';

@NgModule({
  declarations: [BlogListComponent, BlogComponent],
  imports: [CommonModule, MatCardModule, BlogRoutingModule, ScullyLibModule],
})
export class BlogModule {}
