import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
   imports: [
    CommonModule,
    FormsModule
  ]
})

export class AccountComponent implements OnInit {
  user: any;
  editName: string = '';
  editEmail: string = '';
  editAvatarUrl: string = '';
  avatarFile: File | null = null;
  message: string = '';
  error: string = '';
  loading: boolean = false;

  constructor(public authService: AuthService) {}

  ngOnInit() {
    this.loadUser();
  }

  loadUser() {
    this.user = this.authService.getUser();
    this.editName = this.user?.name || '';
    this.editEmail = this.user?.email || '';
    this.editAvatarUrl = this.user?.avatarUrl || 'assets/default-avatar.png';
  }

  onAvatarSelected(event: any) {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
      this.avatarFile = file;
      const reader = new FileReader();
      reader.onload = e => this.editAvatarUrl = e.target?.result as string;
      reader.readAsDataURL(file);
    } else {
      this.error = 'Por favor, selecciona una imagen válida.';
    }
  }

  saveChanges() {
    this.error = '';
    this.message = '';
    if (!this.editName.trim() || !this.editEmail.trim()) {
      this.error = 'Nombre y correo son obligatorios.';
      return;
    }

    this.loading = true;

    // Simulamos guardado con timeout
    setTimeout(() => {
      this.user.name = this.editName;
      this.user.email = this.editEmail;
      if (this.avatarFile) {
        this.user.avatarUrl = this.editAvatarUrl;
      }
      localStorage.setItem('user', JSON.stringify(this.user));

      // Importante: si userSubject es privado, usa un método público para actualizarlo
      this.authService.userSubject.next(this.user);  // o this.authService.updateUser(this.user);

      this.message = 'Perfil actualizado correctamente.';
      this.loading = false;
    }, 1500);
  }

  logout() {
    this.authService.logout();
  }

  refreshUser() {
    this.authService.refreshUser();
    this.loadUser();
  }
}
