const routes: Routes = [
    { path: 'users', component: UserListComponent },
    { path: 'users/:id', component: UserDetailsComponent },
    { path: 'admin', component: AdminDashboardComponent },
    { path: '', redirectTo: '/users', pathMatch: 'full' }
];
