import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { MatCheckboxModule } from '@angular/material/checkbox';

import { BankAccountComponent } from './bank-account/bank-account.component';
import { HttpClientModule } from '@angular/common/http';
import { BankService } from './shared/bank.service';
import { BankAccountService } from './shared/bank-account.service';
import { HomeComponent } from './home/home.component';
import { FollowersComponent } from './followers/followers.component';
import { ProfileComponent } from './profile/profile.component';
import { PostsComponent } from './posts/posts.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { AllImportsComponent } from './all-imports/all-imports.component';
import { MaterailsComponent } from './materails/materails.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseComponent } from './course/course.component';

@NgModule({
  declarations: [
    AppComponent,
    BankAccountComponent,
    HomeComponent,
    FollowersComponent,
    PostsComponent,
    NotfoundComponent,
    NavbarComponent,
    ContactFormComponent,
    AllImportsComponent,
    MaterailsComponent,
    CoursesComponent,
    CourseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'followers/:username', component: FollowersComponent },
      { path: 'followers', component: FollowersComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'posts', component: PostsComponent },
      { path: 'course/:id', component: CourseComponent },
      { path: 'bank-accounts', component: BankAccountComponent },
      { path: 'contact-form', component: ContactFormComponent },
      { path: 'all-imports', component: AllImportsComponent },
      { path: 'materials', component: MaterailsComponent },
      { path: '**', component: NotfoundComponent },
    ]),
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatCheckboxModule,
  ],
  providers: [BankService, BankAccountService],
  bootstrap: [AppComponent],
})
export class AppModule {}
