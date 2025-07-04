import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CourseComponent } from './course/course.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { BlogComponent } from './blog/blog.component';
import { NewblogComponent } from './newblog/newblog.component';
import { OtherblogComponent } from './otherblog/otherblog.component';
import { profileGuardService } from './guards/profileGuard.services';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'course', component: CourseComponent,canActivate: [profileGuardService] },
   { path: 'blog', component: BlogComponent ,
    children: [{
      path: 'newBlog',component: NewblogComponent
    },
  {
      path: 'otherBlog',component: OtherblogComponent
    }
  ]
   },
  { path: 'course/:name', component: CourseDetailsComponent },
  { path: '**', component: PageNotFoundComponent }
];
