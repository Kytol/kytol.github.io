import { Component, inject, signal } from '@angular/core';
import { FilterSidebarComponent } from '../../../../projects/raid-squad/src/app/components/filter-sidebar/filter-sidebar.component';
import { SearchSortBarComponent } from '../../../../projects/raid-squad/src/app/components/search-sort-bar/search-sort-bar.component';
import { MercenaryGridComponent } from '../../../../projects/raid-squad/src/app/components/mercenary-grid/mercenary-grid.component';
import { StatsHeaderComponent } from '../../../../projects/raid-squad/src/app/components/stats-header/stats-header.component';
import { ThemeToggleComponent } from '../../../../projects/raid-squad/src/app/components/theme-toggle/theme-toggle.component';
import { SquadPanelComponent } from '../../../../projects/raid-squad/src/app/components/squad-panel/squad-panel.component';
import { RecruitmentBoardComponent } from '../../../../projects/raid-squad/src/app/components/recruitment-board/recruitment-board.component';
import { NotificationBellComponent } from '../../../../projects/raid-squad/src/app/components/notification-bell/notification-bell.component';
import { MissionBoardComponent } from '../../../../projects/raid-squad/src/app/components/mission-board/mission-board.component';
import { ResourceHeaderComponent } from '../../../../projects/raid-squad/src/app/components/resource-header/resource-header.component';
import { TreasuryDashboardComponent } from '../../../../projects/raid-squad/src/app/components/treasury-dashboard/treasury-dashboard.component';
import { SocialHubComponent } from '../../../../projects/raid-squad/src/app/components/social-hub/social-hub.component';
import { ThemeService } from '../../../../projects/raid-squad/src/app/services/theme.service';
import { MissionService } from '../../../../projects/raid-squad/src/app/services/mission.service';
import { SocialService } from '../../../../projects/raid-squad/src/app/services/social.service';

type TabType = 'marketplace' | 'squad' | 'missions' | 'treasury' | 'social' | 'recruitment';

@Component({
  selector: 'app-raid-squad-view',
  standalone: true,
  imports: [
    FilterSidebarComponent, SearchSortBarComponent, MercenaryGridComponent,
    StatsHeaderComponent, ThemeToggleComponent, SquadPanelComponent,
    RecruitmentBoardComponent, NotificationBellComponent, MissionBoardComponent,
    ResourceHeaderComponent, TreasuryDashboardComponent, SocialHubComponent
  ],
  template: `
    <div class="raid-squad-wrapper">
      <div class="app-container">
        <header>
          <div class="header-top">
            <app-resource-header />
            <div class="header-actions">
              <app-notification-bell />
              <app-theme-toggle />
            </div>
          </div>
          <h1>{{ themeService.isDark() ? '🌑' : '🔥' }} Raid Squad</h1>
          <p class="subtitle">Gang Recruitment Portal</p>
          <p class="tagline">{{ themeService.isDark() ? 'Strike from the shadows of the eclipse!' : 'Burn your enemies with fire and fury!' }}</p>
        </header>

        <nav class="tabs">
          <button class="tab" [class.active]="activeTab() === 'marketplace'" (click)="activeTab.set('marketplace')">🏪 Market</button>
          <button class="tab" [class.active]="activeTab() === 'squad'" (click)="activeTab.set('squad')">⚔️ Squad</button>
          <button class="tab" [class.active]="activeTab() === 'missions'" (click)="activeTab.set('missions')">
            🗺️ Missions
            @if (missionService.inProgressMissions().length > 0) {
              <span class="badge">{{ missionService.inProgressMissions().length }}</span>
            }
          </button>
          <button class="tab" [class.active]="activeTab() === 'treasury'" (click)="activeTab.set('treasury')">🏦 Treasury</button>
          <button class="tab" [class.active]="activeTab() === 'social'" (click)="activeTab.set('social')">
            👥 Social
            @if (socialService.onlinePlayers().length > 0) {
              <span class="badge online">{{ socialService.onlinePlayers().length }}</span>
            }
          </button>
          <button class="tab" [class.active]="activeTab() === 'recruitment'" (click)="activeTab.set('recruitment')">📋 Recruit</button>
        </nav>

        @if (activeTab() === 'marketplace') {
          <app-stats-header />
          <div class="main-content">
            <app-filter-sidebar />
            <div class="content-area">
              <app-search-sort-bar />
              <app-mercenary-grid />
            </div>
          </div>
        }
        @if (activeTab() === 'squad') {
          <div class="squad-layout"><app-squad-panel /></div>
        }
        @if (activeTab() === 'missions') { <app-mission-board /> }
        @if (activeTab() === 'treasury') { <app-treasury-dashboard /> }
        @if (activeTab() === 'social') { <app-social-hub /> }
        @if (activeTab() === 'recruitment') { <app-recruitment-board /> }
      </div>
    </div>
  `,
  styleUrls: ['./raid-squad-view.component.css']
})
export class RaidSquadViewComponent {
  themeService = inject(ThemeService);
  missionService = inject(MissionService);
  socialService = inject(SocialService);
  activeTab = signal<TabType>('marketplace');
}
