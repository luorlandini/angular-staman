import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { QuizPageComponent } from './pages/quiz-page/quiz-page.component';


const routes: Routes = [
  {
     path: 'welcome',
     component: WelcomeComponent
  },
  {
    path: 'quiz',
    component: QuizPageComponent
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
