import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { UserService } from './user.service';
import { AuthGuard } from './auth.guard';
import { RolemapComponent } from './rolemap/rolemap.component';
import { FormComponent } from './form/form.component';
import { EditComponent } from './edit/edit.component';
import { EnterRoleComponent } from './enter-role/enter-role.component';
import { UserRoleComponent } from './user-role/user-role.component';
import { ChangepComponent } from './changep/changep.component';
import { UpdatepComponent } from './updatep/updatep.component';
import { UserComponent } from './user/user.component';
import { EdituserComponent } from './edituser/edituser.component';
import { EdituroleComponent } from './editurole/editurole.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { Ng2SmartTableModule } from '../../node_modules/ng2-smart-table';
import { AddedComponent } from './added/added.component';
import { UpdateuComponent } from './updateu/updateu.component';
import { AddUserComponent } from './add-user/add-user.component';
import {DataTableModule} from "angular-6-datatable";
import { EaduserComponent } from './eaduser/eaduser.component';
import { ViewroleComponent } from './viewrole/viewrole.component';
import { Ng2Webstorage} from 'ngx-webstorage';
import { ProfileComponent } from './profile/profile.component';
import { PcmessageComponent } from './pcmessage/pcmessage.component';
import { ProfmesComponent } from './profmes/profmes.component' ;
import { TaskListComponent } from './task-list/task-list.component';
import { EnterTaskComponent } from './enter-task/enter-task.component';
import { EdittaskComponent } from './edittask/edittask.component';
import { AdminComponent } from './admin/admin.component';
import { AssociateComponent } from './associate/associate.component';
import { HeadComponent } from './head/head.component';
import { LeadsComponent } from './leads/leads.component';
import { TdetailsComponent } from './tdetails/tdetails.component';
import { AtaskComponent } from './atask/atask.component';
import { VtaskmemComponent } from './vtaskmem/vtaskmem.component';
import { VtaskrepComponent } from './vtaskrep/vtaskrep.component';
import { AssignComponent } from './assign/assign.component';
import { TaskuserComponent } from './taskuser/taskuser.component';
import { Assign1Component } from './assign1/assign1.component';
import { TaskreportComponent } from './taskreport/taskreport.component';
import { UnassignComponent } from './unassign/unassign.component';
import { Unassign1Component } from './unassign1/unassign1.component';
const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard', canActivate:[AuthGuard], component: DashboardComponent },
  { path: 'dashboard/rolemap',canActivate:[AuthGuard], component: RolemapComponent},
  { path: 'form',canActivate:[AuthGuard], component: FormComponent },
  {  path: 'dashboard/rolemap/edit',canActivate:[AuthGuard], component:EditComponent },
  { path: 'dashboard/enterrole' ,canActivate:[AuthGuard], component:EnterRoleComponent},
  { path: 'dashboard/userrole' ,canActivate:[AuthGuard], component:UserRoleComponent},
  { path:'dashboard/changep' ,canActivate:[AuthGuard],  component: ChangepComponent},
  { path:'updatep' ,canActivate:[AuthGuard], component: UpdatepComponent },
  { path:'dashboard/user' ,canActivate:[AuthGuard], component: UserComponent },
  { path:'editdeluser/edituser' ,canActivate:[AuthGuard], component: EdituserComponent },
  { path:'dashboard/adduser' ,canActivate:[AuthGuard], component: AddUserComponent },
  { path: 'dashboard/userrole/editurole' ,canActivate:[AuthGuard], component:EdituroleComponent},
  { path: 'added' ,canActivate:[AuthGuard], component:AddedComponent},
  { path: 'userupdate',canActivate:[AuthGuard], component: UpdateuComponent},
  { path: 'editdeluser',canActivate:[AuthGuard], component: EaduserComponent},
 { path: 'viewuserrole',canActivate:[AuthGuard], component: ViewroleComponent},
 { path: 'cpmessage',canActivate:[AuthGuard], component: PcmessageComponent},
 { path: 'uprofile',canActivate:[AuthGuard], component: ProfileComponent},
 { path: 'profmessage',canActivate:[AuthGuard], component: ProfmesComponent},
 { path: 'tasklist',canActivate:[AuthGuard], component: TaskListComponent},
 { path: 'entertask',canActivate:[AuthGuard], component: EnterTaskComponent},
 { path: 'tasklist/edittask',canActivate:[AuthGuard], component: EdittaskComponent},
 { path: 'lead', canActivate:[AuthGuard], component:LeadsComponent },
 { path: 'head', canActivate:[AuthGuard], component: HeadComponent },
 { path: 'associate', canActivate:[AuthGuard], component: AssociateComponent },
 { path: 'admin', canActivate:[AuthGuard], component:AdminComponent  },
 { path: 'tdetails', canActivate:[AuthGuard], component:TdetailsComponent},
 { path: 'atask', canActivate:[AuthGuard], component:AtaskComponent},
 { path: 'viewtaskmem', canActivate:[AuthGuard], component:VtaskmemComponent},
 { path: 'viewtaskr', canActivate:[AuthGuard], component:VtaskrepComponent},
 { path: 'assign', canActivate:[AuthGuard], component:AssignComponent},
 { path: 'assign1', canActivate:[AuthGuard], component:Assign1Component},
 { path: 'taskuser', canActivate:[AuthGuard], component:TaskuserComponent},
 { path: 'taskreport', canActivate:[AuthGuard], component:TaskreportComponent},
 { path: 'unassign', canActivate:[AuthGuard], component:UnassignComponent},
 { path: 'unassign1', canActivate:[AuthGuard], component:Unassign1Component}
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    RolemapComponent,
    FormComponent,
    EditComponent,
    EnterRoleComponent,
    UserRoleComponent,
    ChangepComponent,
    UpdatepComponent,
    AddUserComponent,
    UserComponent,
    EdituserComponent,
    EdittaskComponent,
    EdituroleComponent,
    SidebarComponent,
    HeaderComponent,
    AddedComponent,
    UpdateuComponent,
    EaduserComponent,
    ViewroleComponent,
    ProfileComponent,
    PcmessageComponent,
    ProfmesComponent,
    EnterTaskComponent,
    TaskListComponent,
    AdminComponent,
    AssociateComponent,
    HeadComponent,
    LeadsComponent,
    TdetailsComponent,
    AtaskComponent,
    VtaskmemComponent,
    VtaskrepComponent,
    AssignComponent,
    TaskuserComponent,
    Assign1Component,
    TaskreportComponent,
    UnassignComponent,
    Unassign1Component
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    DataTableModule,
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SmartTableModule,
    Ng2Webstorage

  ],
  providers: [AppComponent,UserService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
