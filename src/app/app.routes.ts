import { Routes } from '@angular/router';
import { AuthGuard } from './components/Auth/AuthGuard.guard';
import { CadastroComponent } from './components/cadastro/cadastro/cadastro.component';
import { DescricaoComponent } from './components/descricao/descricao/descricao.component';
import { EmprestimoComponent } from './components/Emprestimo/emprestimo/emprestimo.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login/login.component';
import { PerfilComponent } from './components/Perfil/perfil/perfil.component';

export const routes: Routes = [
    {path: "", redirectTo: "login", pathMatch: "full"},
    {path: "login", component: LoginComponent},
    {path: "cadastro", component: CadastroComponent},
    {path: "home", component: HomeComponent, canActivate: [AuthGuard]},
    {path: "perfil", component: PerfilComponent, canActivate: [AuthGuard]},
    {path: "emprestimo", component: EmprestimoComponent, canActivate: [AuthGuard]},
    {path: "descricao/:id", component: DescricaoComponent, canActivate: [AuthGuard]}
];
