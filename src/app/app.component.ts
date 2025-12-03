import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterOutlet],
  template: `
    <div class="app-shell">
      <nav class="main-nav">
        <div class="nav-brand">🎃 Goblin Realm</div>
        <div class="nav-links">
          <a routerLink="/ui-demo" routerLinkActive="active">📦 UI Demo</a>
          <a routerLink="/goblin-tasks" routerLinkActive="active">🧌 Goblin Tasks</a>
          <a routerLink="/raid-squad" routerLinkActive="active">⚔️ Raid Squad</a>
        </div>
      </nav>
      <main class="main-content">
        <router-outlet />
      </main>
    </div>
  `,
  styles: [`
    .app-shell {
      min-height: 100vh;
      background: #0a0a0a;
    }
    .main-nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 12px 24px;
      background: #111;
      border-bottom: 1px solid #333;
      position: sticky;
      top: 0;
      z-index: 100;
    }
    .nav-brand {
      font-size: 1.25rem;
      font-weight: bold;
      color: #ffd700;
    }
    .nav-links {
      display: flex;
      gap: 8px;
    }
    .nav-links a {
      padding: 8px 16px;
      color: #888;
      text-decoration: none;
      border-radius: 8px;
      transition: all 0.2s;
      font-size: 0.9rem;
    }
    .nav-links a:hover {
      color: #fff;
      background: #222;
    }
    .nav-links a.active {
      color: #ffd700;
      background: rgba(255, 215, 0, 0.1);
    }
    .main-content {
      min-height: calc(100vh - 60px);
    }
  `]
})
export class AppComponent {}
