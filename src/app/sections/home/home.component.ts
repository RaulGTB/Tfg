import { Component, OnInit } from '@angular/core'; // Agregué OnInit para usar ngOnInit
import { CommonModule } from '@angular/common';
import { DataService } from './../../data.service';
import { AuthService } from '../../auth.service';

interface FavoriteResponse {
  itemType: string;
  itemId: number;
  itemData?: any; // opcional, para info extra
  id?: number; // el id único en la base de datos para borrar el favorito
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'], // Corregí 'styleUrl' por 'styleUrls'
})
export class HomeComponent implements OnInit {
  games: any[] = [];
  filteredGames: any[] = [];
  teams: any[] = [];
  players: any[] = [];
  matches: any[] = [];
  currentView: string = 'teams';
  successMsg: string = '';
  errorMsg: string = '';

  // Lista local de favoritos guardados: {itemType, itemId}
  favorites: FavoriteResponse[] = [];

  // === Tarjetas de videojuegos ===
  gameCards = [
    {
      name: 'League of Legends',
      img: 'assets/images/lol-home.jpg',
      desc: '5v5 MOBA by Riot Games. Objective: destroy the enemy nexus.',
      open: false,
    },
    {
      name: 'Dota 2',
      img: 'assets/images/dota2-home.jpg',
      desc: 'MOBA by Valve based on the original Warcraft III mod.',
      open: false,
    },
    {
      name: 'CS:GO',
      img: 'assets/images/csgo-home.jpg',
      desc: '5v5 tactical shooter. Terrorists vs Counter-Terrorists.',
      open: false,
    },
    {
      name: 'Valorant',
      img: 'assets/images/valorant-home.jpg',
      desc: 'Tactical shooter by Riot with unique abilities per agent.',
      open: false,
    },
  ];

  constructor(private data: DataService, private authService: AuthService) {
    // No recomiendo llamar aquí porque no está seguro que ngOnInit ya se haya ejecutado,
    // pero si quieres mantenerlo, está OK.
    this.getDpts();
    this.getTeams();
    this.getPlayers();
    this.getMatches();
  }

  toggleCard(i: number): void {
    this.gameCards.forEach((c, index) => (c.open = i === index));
  }

  // === Lógica de datos ===
  getDpts() {
    this.data.getLeagues().subscribe((res: any) => {
      this.games = res;
      this.filteredGames = this.games;
    });
  }

  getTeams() {
    this.data.getTeams().subscribe((res: any) => {
      this.teams = res;
      this.currentView = 'teams';
    });
  }

  getPlayers() {
    this.data.getPlayers().subscribe((res: any) => {
      this.players = res;
      this.currentView = 'players';
    });
  }

  getMatches() {
    this.data.getmatches().subscribe((res: any) => {
      this.matches = res;
      this.currentView = 'matches';
    });
  }

  filtrarLol() {
    this.filteredGames = this.games.filter(
      (g) => g.class_name.toLowerCase() === 'lol'
    );
  }

  filtrarDota2() {
    this.filteredGames = this.games.filter((g) => g.class_name === 'Dota 2');
  }

  filtrarCsgo() {
    this.filteredGames = this.games.filter((g) => g.class_name === 'CS:GO');
  }

  FiltrarOtros() {
    this.filteredGames = this.games.filter((g) => g.class_name === 'Other');
  }

  // Añadir favorito sin toggle (por si lo necesitas)

  ngOnInit(): void {
    this.authService.refreshUser();
    this.loadFavorites();
  }

  loadFavorites() {
    this.data.getFavorites().subscribe({
      next: (res) => {
        this.favorites = res.map((f: any) => ({
          id: f.id, // <--- Aquí agregamos el id para poder borrar
          itemType: f.itemType,
          itemId: f.itemId,
          itemData: f.itemData, // opcional, si lo usas en UI
        }));
      },
      error: (err) => {
        console.error('Error cargando favoritos', err);
      },
    });
  }

  addToFavorites(type: string, referenceId: number) {
    const alreadyExists = this.favorites.some(
      (fav) => fav.itemId === referenceId && fav.itemType === type
    );

    if (alreadyExists) {
      this.errorMsg = 'Este ítem ya está en favoritos.';
      return;
    }

    const payload = { referenceId, type };
    this.data.addFavorite(payload).subscribe({
      next: (res) => {
        this.successMsg = 'Añadido correctamente.';
        this.favorites.push({
          id: res.id,
          itemId: referenceId,
          itemType: type,
          itemData: res.itemData || {},
        });
      },
      error: (err) => {
        this.errorMsg = 'Error al añadir a favoritos.';
        console.error(err);
      },
    });
  }
}
