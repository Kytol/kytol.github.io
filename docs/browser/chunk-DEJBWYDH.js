import {
  SearchComponent
} from "./chunk-JJWZPSGC.js";
import {
  ButtonComponent,
  DefaultValueAccessor,
  FormsModule,
  MaxLengthValidator,
  MaxValidator,
  MinValidator,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-JV73OLQQ.js";
import {
  CommonModule,
  DecimalPipe,
  EventEmitter,
  TitleCasePipe,
  __spreadProps,
  __spreadValues,
  computed,
  effect,
  inject,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtextInterpolate4,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-YID5YRT4.js";

// projects/raid-squad/src/app/services/mercenary.service.ts
var MercenaryService = class _MercenaryService {
  mercenaries = signal(this.generateMercenaries());
  filters = signal({
    races: [],
    classes: [],
    levelRange: [1, 100],
    costRange: [0, 1e4],
    status: "all"
  });
  searchQuery = signal("");
  sortOption = signal("rating-desc");
  allMercenaries = this.mercenaries.asReadonly();
  filteredMercenaries = computed(() => {
    let result = [...this.mercenaries()];
    const f = this.filters();
    const query = this.searchQuery().toLowerCase();
    if (query) {
      result = result.filter((m) => m.name.toLowerCase().includes(query) || m.race.toLowerCase().includes(query) || m.class.toLowerCase().includes(query) || m.specialty.toLowerCase().includes(query));
    }
    if (f.races.length > 0) {
      result = result.filter((m) => f.races.includes(m.race));
    }
    if (f.classes.length > 0) {
      result = result.filter((m) => f.classes.includes(m.class));
    }
    result = result.filter((m) => m.level >= f.levelRange[0] && m.level <= f.levelRange[1]);
    result = result.filter((m) => m.hireCost >= f.costRange[0] && m.hireCost <= f.costRange[1]);
    if (f.status !== "all") {
      result = result.filter((m) => m.status === f.status);
    }
    const sort = this.sortOption();
    result.sort((a, b) => {
      switch (sort) {
        case "level-asc":
          return a.level - b.level;
        case "level-desc":
          return b.level - a.level;
        case "cost-asc":
          return a.hireCost - b.hireCost;
        case "cost-desc":
          return b.hireCost - a.hireCost;
        case "rating-desc":
          return b.rating - a.rating;
        case "name-asc":
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });
    return result;
  });
  stats = computed(() => ({
    total: this.mercenaries().length,
    available: this.mercenaries().filter((m) => m.status === "available").length,
    hired: this.mercenaries().filter((m) => m.status === "hired").length,
    onMission: this.mercenaries().filter((m) => m.status === "on-mission").length
  }));
  updateFilters(filters) {
    this.filters.update((f) => __spreadValues(__spreadValues({}, f), filters));
  }
  setSearch(query) {
    this.searchQuery.set(query);
  }
  setSort(option) {
    this.sortOption.set(option);
  }
  hireMercenary(id) {
    this.mercenaries.update((list) => list.map((m) => m.id === id ? __spreadProps(__spreadValues({}, m), { status: "hired" }) : m));
  }
  releaseMercenary(id) {
    this.mercenaries.update((list) => list.map((m) => m.id === id ? __spreadProps(__spreadValues({}, m), { status: "available" }) : m));
  }
  setOnMission(id) {
    this.mercenaries.update((list) => list.map((m) => m.id === id ? __spreadProps(__spreadValues({}, m), { status: "on-mission" }) : m));
  }
  returnFromMission(id) {
    this.mercenaries.update((list) => list.map((m) => m.id === id && m.status === "on-mission" ? __spreadProps(__spreadValues({}, m), { status: "hired" }) : m));
  }
  getMercenaryById(id) {
    return this.mercenaries().find((m) => m.id === id);
  }
  generateMercenaries() {
    const races = ["Orc", "Goblin", "Warlock", "Troll", "Undead", "Demon", "Dark Elf"];
    const classes = ["Warrior", "Assassin", "Mage", "Tank", "Healer", "Berserker", "Necromancer"];
    const names = [
      "Grommash",
      "Zul'jin",
      "Kael'thas",
      "Arthas",
      "Illidan",
      "Thrall",
      "Sylvanas",
      "Gul'dan",
      "Mannoroth",
      "Archimonde",
      "Kel'Thuzad",
      "Anub'arak",
      "Malfurion",
      "Tyrande",
      "Vol'jin",
      "Cairne",
      "Rexxar",
      "Jaina",
      "Medivh",
      "Garona",
      "Durotan",
      "Orgrim",
      "Blackhand",
      "Ner'zhul",
      "Teron",
      "Cho'gall",
      "Kilrogg",
      "Zuluhed",
      "Dentarg",
      "Rend",
      "Maim",
      "Dal'rend",
      "Nekros",
      "Draka"
    ];
    const specialties = [
      "Siege Warfare",
      "Assassination",
      "Dark Magic",
      "Frontline Combat",
      "Healing Arts",
      "Beast Taming",
      "Necromancy",
      "Stealth Operations",
      "Fire Magic",
      "Frost Magic",
      "Shadow Magic",
      "Blood Magic"
    ];
    return names.map((name, i) => {
      const level = Math.floor(Math.random() * 99) + 1;
      const race = races[i % races.length];
      const cls = classes[i % classes.length];
      return {
        id: crypto.randomUUID(),
        name,
        race,
        class: cls,
        level,
        specialty: specialties[i % specialties.length],
        stats: {
          strength: Math.floor(Math.random() * 80) + 20,
          agility: Math.floor(Math.random() * 80) + 20,
          magic: Math.floor(Math.random() * 80) + 20,
          defense: Math.floor(Math.random() * 80) + 20,
          health: Math.floor(Math.random() * 800) + 200
        },
        hireCost: Math.floor(level * 50 + Math.random() * 500),
        dailyUpkeep: Math.floor(level * 5 + Math.random() * 50),
        status: ["available", "available", "available", "hired", "on-mission"][Math.floor(Math.random() * 5)],
        skills: this.generateSkills(cls),
        equipment: this.generateEquipment(),
        avatar: this.getAvatar(race),
        rating: Math.round((Math.random() * 2 + 3) * 10) / 10,
        missionsCompleted: Math.floor(Math.random() * 100)
      };
    });
  }
  generateSkills(cls) {
    const skillSets = {
      "Warrior": [
        { id: "1", name: "Cleave", description: "Sweeping attack hitting multiple enemies", cooldown: 8, damage: 150 },
        { id: "2", name: "Shield Bash", description: "Stuns enemy for 2 seconds", cooldown: 12 }
      ],
      "Assassin": [
        { id: "1", name: "Backstab", description: "Critical hit from behind", cooldown: 6, damage: 200 },
        { id: "2", name: "Vanish", description: "Become invisible for 5 seconds", cooldown: 20 }
      ],
      "Mage": [
        { id: "1", name: "Fireball", description: "Launches a ball of fire", cooldown: 4, damage: 180 },
        { id: "2", name: "Frost Nova", description: "Freezes nearby enemies", cooldown: 15 }
      ],
      "Tank": [
        { id: "1", name: "Taunt", description: "Forces enemies to attack you", cooldown: 10 },
        { id: "2", name: "Iron Skin", description: "Reduces damage by 50%", cooldown: 25 }
      ],
      "Healer": [
        { id: "1", name: "Heal", description: "Restores 300 health", cooldown: 5 },
        { id: "2", name: "Resurrection", description: "Revives fallen ally", cooldown: 60 }
      ],
      "Berserker": [
        { id: "1", name: "Rage", description: "Increases damage by 100%", cooldown: 30 },
        { id: "2", name: "Whirlwind", description: "Spin attack hitting all nearby", cooldown: 10, damage: 120 }
      ],
      "Necromancer": [
        { id: "1", name: "Raise Dead", description: "Summons undead minion", cooldown: 20 },
        { id: "2", name: "Life Drain", description: "Steals health from enemy", cooldown: 8, damage: 100 }
      ]
    };
    return skillSets[cls] || [];
  }
  generateEquipment() {
    return [
      { id: "1", name: "Battle Axe", slot: "weapon", bonus: { strength: 15 } },
      { id: "2", name: "Chain Mail", slot: "armor", bonus: { defense: 20 } }
    ];
  }
  getAvatar(race) {
    const avatars = {
      "Orc": "\u{1F479}",
      "Goblin": "\u{1F47A}",
      "Warlock": "\u{1F9D9}",
      "Troll": "\u{1F9CC}",
      "Undead": "\u{1F480}",
      "Demon": "\u{1F608}",
      "Dark Elf": "\u{1F9DD}"
    };
    return avatars[race];
  }
  static \u0275fac = function MercenaryService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MercenaryService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _MercenaryService, factory: _MercenaryService.\u0275fac, providedIn: "root" });
};

// projects/raid-squad/src/app/models/mercenary.model.ts
var RACE_CONFIG = {
  "Orc": { emoji: "\u{1F479}", color: "#4a7c4e" },
  "Goblin": { emoji: "\u{1F47A}", color: "#6b9a4c" },
  "Warlock": { emoji: "\u{1F9D9}", color: "#6b4c9a" },
  "Troll": { emoji: "\u{1F9CC}", color: "#4c6b9a" },
  "Undead": { emoji: "\u{1F480}", color: "#5a5a6a" },
  "Demon": { emoji: "\u{1F608}", color: "#9a4c4c" },
  "Dark Elf": { emoji: "\u{1F9DD}", color: "#4c4c9a" }
};
var CLASS_CONFIG = {
  "Warrior": { icon: "\u2694\uFE0F", color: "#c4a35a" },
  "Assassin": { icon: "\u{1F5E1}\uFE0F", color: "#5a5a5a" },
  "Mage": { icon: "\u{1F52E}", color: "#7a5ac4" },
  "Tank": { icon: "\u{1F6E1}\uFE0F", color: "#5a8ac4" },
  "Healer": { icon: "\u{1F49A}", color: "#5ac47a" },
  "Berserker": { icon: "\u{1FA93}", color: "#c45a5a" },
  "Necromancer": { icon: "\u2620\uFE0F", color: "#8a5a8a" }
};

// projects/raid-squad/src/app/components/filter-sidebar/filter-sidebar.component.ts
function FilterSidebarComponent_For_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 3)(1, "input", 14);
    \u0275\u0275listener("change", function FilterSidebarComponent_For_8_Template_input_change_1_listener() {
      const race_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleRace(race_r2));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const race_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r2.isRaceSelected(race_r2));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r2.getRaceEmoji(race_r2), " ", race_r2, "");
  }
}
function FilterSidebarComponent_For_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 3)(1, "input", 14);
    \u0275\u0275listener("change", function FilterSidebarComponent_For_14_Template_input_change_1_listener() {
      const cls_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleClass(cls_r5));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const cls_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r2.isClassSelected(cls_r5));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r2.getClassIcon(cls_r5), " ", cls_r5, "");
  }
}
var FilterSidebarComponent = class _FilterSidebarComponent {
  mercenaryService = inject(MercenaryService);
  filters = this.mercenaryService.filters;
  races = ["Orc", "Goblin", "Warlock", "Troll", "Undead", "Demon", "Dark Elf"];
  classes = ["Warrior", "Assassin", "Mage", "Tank", "Healer", "Berserker", "Necromancer"];
  getRaceEmoji(race) {
    return RACE_CONFIG[race].emoji;
  }
  getClassIcon(cls) {
    return CLASS_CONFIG[cls].icon;
  }
  isRaceSelected(race) {
    return this.filters().races.includes(race);
  }
  isClassSelected(cls) {
    return this.filters().classes.includes(cls);
  }
  toggleRace(race) {
    const current = this.filters().races;
    const races = current.includes(race) ? current.filter((r) => r !== race) : [...current, race];
    this.mercenaryService.updateFilters({ races });
  }
  toggleClass(cls) {
    const current = this.filters().classes;
    const classes = current.includes(cls) ? current.filter((c) => c !== cls) : [...current, cls];
    this.mercenaryService.updateFilters({ classes });
  }
  updateLevelMin(e) {
    const val = +e.target.value;
    this.mercenaryService.updateFilters({ levelRange: [val, this.filters().levelRange[1]] });
  }
  updateLevelMax(e) {
    const val = +e.target.value;
    this.mercenaryService.updateFilters({ levelRange: [this.filters().levelRange[0], val] });
  }
  updateCostMin(e) {
    const val = +e.target.value;
    this.mercenaryService.updateFilters({ costRange: [val, this.filters().costRange[1]] });
  }
  updateCostMax(e) {
    const val = +e.target.value;
    this.mercenaryService.updateFilters({ costRange: [this.filters().costRange[0], val] });
  }
  updateStatus(e) {
    const status = e.target.value;
    this.mercenaryService.updateFilters({ status });
  }
  resetFilters() {
    this.mercenaryService.updateFilters({
      races: [],
      classes: [],
      levelRange: [1, 100],
      costRange: [0, 1e4],
      status: "all"
    });
  }
  static \u0275fac = function FilterSidebarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FilterSidebarComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FilterSidebarComponent, selectors: [["app-filter-sidebar"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 45, vars: 5, consts: [[1, "filter-sidebar"], [1, "filter-section"], [1, "checkbox-group"], [1, "checkbox-item"], [1, "range-inputs"], ["type", "number", "min", "1", "max", "100", 3, "change", "value"], ["type", "number", "min", "0", 3, "change", "value"], ["type", "number", 3, "change", "value"], [3, "change", "value"], ["value", "all"], ["value", "available"], ["value", "hired"], ["value", "on-mission"], ["variant", "outline", 3, "clicked"], ["type", "checkbox", 3, "change", "checked"]], template: function FilterSidebarComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "aside", 0)(1, "h3");
      \u0275\u0275text(2, "\u{1F50D} Filters");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 1)(4, "h4");
      \u0275\u0275text(5, "Race");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "div", 2);
      \u0275\u0275repeaterCreate(7, FilterSidebarComponent_For_8_Template, 4, 3, "label", 3, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div", 1)(10, "h4");
      \u0275\u0275text(11, "Class");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "div", 2);
      \u0275\u0275repeaterCreate(13, FilterSidebarComponent_For_14_Template, 4, 3, "label", 3, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "div", 1)(16, "h4");
      \u0275\u0275text(17, "Level Range");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "div", 4)(19, "input", 5);
      \u0275\u0275listener("change", function FilterSidebarComponent_Template_input_change_19_listener($event) {
        return ctx.updateLevelMin($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "span");
      \u0275\u0275text(21, "to");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "input", 5);
      \u0275\u0275listener("change", function FilterSidebarComponent_Template_input_change_22_listener($event) {
        return ctx.updateLevelMax($event);
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(23, "div", 1)(24, "h4");
      \u0275\u0275text(25, "Hire Cost");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "div", 4)(27, "input", 6);
      \u0275\u0275listener("change", function FilterSidebarComponent_Template_input_change_27_listener($event) {
        return ctx.updateCostMin($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "span");
      \u0275\u0275text(29, "to");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "input", 7);
      \u0275\u0275listener("change", function FilterSidebarComponent_Template_input_change_30_listener($event) {
        return ctx.updateCostMax($event);
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(31, "div", 1)(32, "h4");
      \u0275\u0275text(33, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "select", 8);
      \u0275\u0275listener("change", function FilterSidebarComponent_Template_select_change_34_listener($event) {
        return ctx.updateStatus($event);
      });
      \u0275\u0275elementStart(35, "option", 9);
      \u0275\u0275text(36, "All");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "option", 10);
      \u0275\u0275text(38, "Available");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "option", 11);
      \u0275\u0275text(40, "Hired");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "option", 12);
      \u0275\u0275text(42, "On Mission");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(43, "ui-button", 13);
      \u0275\u0275listener("clicked", function FilterSidebarComponent_Template_ui_button_clicked_43_listener() {
        return ctx.resetFilters();
      });
      \u0275\u0275text(44, "Reset Filters");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275repeater(ctx.races);
      \u0275\u0275advance(6);
      \u0275\u0275repeater(ctx.classes);
      \u0275\u0275advance(6);
      \u0275\u0275property("value", ctx.filters().levelRange[0]);
      \u0275\u0275advance(3);
      \u0275\u0275property("value", ctx.filters().levelRange[1]);
      \u0275\u0275advance(5);
      \u0275\u0275property("value", ctx.filters().costRange[0]);
      \u0275\u0275advance(3);
      \u0275\u0275property("value", ctx.filters().costRange[1]);
      \u0275\u0275advance(4);
      \u0275\u0275property("value", ctx.filters().status);
    }
  }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, ButtonComponent], styles: ["\n\n.filter-sidebar[_ngcontent-%COMP%] {\n  background: var(--bg-card);\n  border: 2px solid var(--border-primary);\n  border-radius: 12px;\n  padding: 20px;\n  height: fit-content;\n  position: sticky;\n  top: 24px;\n}\nh3[_ngcontent-%COMP%] {\n  color: var(--accent-gold);\n  margin: 0 0 20px;\n  font-size: 1.25rem;\n}\nh4[_ngcontent-%COMP%] {\n  color: var(--text-primary);\n  margin: 0 0 12px;\n  font-size: 0.9rem;\n}\n.filter-section[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  padding-bottom: 16px;\n  border-bottom: 1px solid var(--border-secondary);\n}\n.checkbox-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.checkbox-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  color: var(--text-secondary);\n  font-size: 0.85rem;\n  cursor: pointer;\n}\n.checkbox-item[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  accent-color: var(--accent-purple);\n}\n.range-inputs[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.range-inputs[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 80px;\n  padding: 8px;\n  background: var(--input-bg);\n  color: var(--text-primary);\n  border: 1px solid var(--border-primary);\n  border-radius: 6px;\n}\n.range-inputs[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n}\nselect[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px;\n  background: var(--input-bg);\n  color: var(--text-primary);\n  border: 1px solid var(--border-primary);\n  border-radius: 6px;\n}\n/*# sourceMappingURL=filter-sidebar.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FilterSidebarComponent, { className: "FilterSidebarComponent", filePath: "projects\\raid-squad\\src\\app\\components\\filter-sidebar\\filter-sidebar.component.ts", lineNumber: 104 });
})();

// projects/raid-squad/src/app/components/search-sort-bar/search-sort-bar.component.ts
var SearchSortBarComponent = class _SearchSortBarComponent {
  mercenaryService = inject(MercenaryService);
  onSearch(query) {
    this.mercenaryService.setSearch(query);
  }
  onSort(e) {
    const option = e.target.value;
    this.mercenaryService.setSort(option);
  }
  static \u0275fac = function SearchSortBarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SearchSortBarComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SearchSortBarComponent, selectors: [["app-search-sort-bar"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 21, vars: 3, consts: [[1, "search-sort-bar"], [1, "search-wrapper"], ["placeholder", "Search mercenaries...", 3, "valueChange", "value"], [1, "sort-wrapper"], [3, "change", "value"], ["value", "rating-desc"], ["value", "level-desc"], ["value", "level-asc"], ["value", "cost-asc"], ["value", "cost-desc"], ["value", "name-asc"], [1, "results-count"]], template: function SearchSortBarComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "ui-search", 2);
      \u0275\u0275listener("valueChange", function SearchSortBarComponent_Template_ui_search_valueChange_2_listener($event) {
        return ctx.onSearch($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(3, "div", 3)(4, "label");
      \u0275\u0275text(5, "Sort by:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "select", 4);
      \u0275\u0275listener("change", function SearchSortBarComponent_Template_select_change_6_listener($event) {
        return ctx.onSort($event);
      });
      \u0275\u0275elementStart(7, "option", 5);
      \u0275\u0275text(8, "\u2B50 Rating (High to Low)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "option", 6);
      \u0275\u0275text(10, "\u{1F4C8} Level (High to Low)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "option", 7);
      \u0275\u0275text(12, "\u{1F4C9} Level (Low to High)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "option", 8);
      \u0275\u0275text(14, "\u{1F4B0} Cost (Low to High)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "option", 9);
      \u0275\u0275text(16, "\u{1F4B0} Cost (High to Low)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "option", 10);
      \u0275\u0275text(18, "\u{1F524} Name (A-Z)");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(19, "div", 11);
      \u0275\u0275text(20);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("value", ctx.mercenaryService.searchQuery());
      \u0275\u0275advance(4);
      \u0275\u0275property("value", ctx.mercenaryService.sortOption());
      \u0275\u0275advance(14);
      \u0275\u0275textInterpolate1(" ", ctx.mercenaryService.filteredMercenaries().length, " mercenaries found ");
    }
  }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, SearchComponent], styles: ["\n\n.search-sort-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  background: var(--bg-card);\n  border: 2px solid var(--border-primary);\n  border-radius: 12px;\n  padding: 16px 20px;\n  margin-bottom: 24px;\n  flex-wrap: wrap;\n}\n.search-wrapper[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 250px;\n}\n.sort-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.sort-wrapper[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font-size: 0.9rem;\n  white-space: nowrap;\n}\n.sort-wrapper[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  background: var(--input-bg);\n  color: var(--text-primary);\n  border: 1px solid var(--border-primary);\n  border-radius: 6px;\n  padding: 10px 14px;\n  font-size: 0.9rem;\n  min-width: 200px;\n}\n.results-count[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 0.85rem;\n  margin-left: auto;\n}\n/*# sourceMappingURL=search-sort-bar.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SearchSortBarComponent, { className: "SearchSortBarComponent", filePath: "projects\\raid-squad\\src\\app\\components\\search-sort-bar\\search-sort-bar.component.ts", lineNumber: 76 });
})();

// projects/raid-squad/src/app/components/mercenary-card/mercenary-card.component.ts
function MercenaryCardComponent_For_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const star_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(star_r1);
  }
}
function MercenaryCardComponent_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ui-button", 20);
    \u0275\u0275listener("clicked", function MercenaryCardComponent_Conditional_46_Template_ui_button_clicked_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.hire($event));
    });
    \u0275\u0275text(1, "Hire");
    \u0275\u0275elementEnd();
  }
}
function MercenaryCardComponent_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ui-button", 21);
    \u0275\u0275listener("clicked", function MercenaryCardComponent_Conditional_47_Template_ui_button_clicked_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.release($event));
    });
    \u0275\u0275text(1, "Release");
    \u0275\u0275elementEnd();
  }
}
var MercenaryCardComponent = class _MercenaryCardComponent {
  mercenary;
  viewDetails = new EventEmitter();
  hireClick = new EventEmitter();
  releaseClick = new EventEmitter();
  getRaceEmoji(race) {
    return RACE_CONFIG[race]?.emoji || "";
  }
  getRaceColor(race) {
    return RACE_CONFIG[race]?.color || "#666";
  }
  getClassIcon(cls) {
    return CLASS_CONFIG[cls]?.icon || "";
  }
  getClassColor(cls) {
    return CLASS_CONFIG[cls]?.color || "#666";
  }
  getStatusLabel(status) {
    return { available: "Available", hired: "Hired", "on-mission": "On Mission" }[status] || status;
  }
  getStars(rating) {
    const full = Math.floor(rating);
    const half = rating % 1 >= 0.5 ? 1 : 0;
    return [...Array(full).fill("\u2B50"), ...Array(half).fill("\u2728"), ...Array(5 - full - half).fill("\u2606")];
  }
  hire(e) {
    e.stopPropagation();
    this.hireClick.emit(this.mercenary);
  }
  release(e) {
    e.stopPropagation();
    this.releaseClick.emit(this.mercenary);
  }
  static \u0275fac = function MercenaryCardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MercenaryCardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MercenaryCardComponent, selectors: [["app-mercenary-card"]], inputs: { mercenary: "mercenary" }, outputs: { viewDetails: "viewDetails", hireClick: "hireClick", releaseClick: "releaseClick" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 48, vars: 25, consts: [[1, "mercenary-card", 3, "click"], [1, "card-header"], [1, "avatar"], [1, "level-badge"], [1, "status-badge"], [1, "card-body"], [1, "tags"], [1, "tag", "race"], [1, "tag", "class"], [1, "specialty"], [1, "stats-preview"], [1, "stat"], [1, "rating"], [1, "rating-value"], [1, "card-footer"], [1, "cost"], [1, "hire-cost"], [1, "upkeep"], ["variant", "primary", "size", "sm"], ["variant", "outline", "size", "sm"], ["variant", "primary", "size", "sm", 3, "clicked"], ["variant", "outline", "size", "sm", 3, "clicked"]], template: function MercenaryCardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275listener("click", function MercenaryCardComponent_Template_div_click_0_listener() {
        return ctx.viewDetails.emit(ctx.mercenary);
      });
      \u0275\u0275elementStart(1, "div", 1)(2, "span", 2);
      \u0275\u0275text(3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 3);
      \u0275\u0275text(5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "div", 4);
      \u0275\u0275text(7);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 5)(9, "h3");
      \u0275\u0275text(10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "div", 6)(12, "span", 7);
      \u0275\u0275text(13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "span", 8);
      \u0275\u0275text(15);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "p", 9);
      \u0275\u0275text(17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "div", 10)(19, "div", 11)(20, "span");
      \u0275\u0275text(21, "\u2694\uFE0F");
      \u0275\u0275elementEnd();
      \u0275\u0275text(22);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "div", 11)(24, "span");
      \u0275\u0275text(25, "\u{1F3C3}");
      \u0275\u0275elementEnd();
      \u0275\u0275text(26);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "div", 11)(28, "span");
      \u0275\u0275text(29, "\u2728");
      \u0275\u0275elementEnd();
      \u0275\u0275text(30);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "div", 11)(32, "span");
      \u0275\u0275text(33, "\u{1F6E1}\uFE0F");
      \u0275\u0275elementEnd();
      \u0275\u0275text(34);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(35, "div", 12);
      \u0275\u0275repeaterCreate(36, MercenaryCardComponent_For_37_Template, 2, 1, "span", null, \u0275\u0275repeaterTrackByIndex);
      \u0275\u0275elementStart(38, "span", 13);
      \u0275\u0275text(39);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(40, "div", 14)(41, "div", 15)(42, "span", 16);
      \u0275\u0275text(43);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "span", 17);
      \u0275\u0275text(45);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(46, MercenaryCardComponent_Conditional_46_Template, 2, 0, "ui-button", 18)(47, MercenaryCardComponent_Conditional_47_Template, 2, 0, "ui-button", 19);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275classMap(ctx.mercenary.status);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.mercenary.avatar);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("Lv.", ctx.mercenary.level, "");
      \u0275\u0275advance();
      \u0275\u0275classMap(ctx.mercenary.status);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.getStatusLabel(ctx.mercenary.status), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.mercenary.name);
      \u0275\u0275advance(2);
      \u0275\u0275styleProp("background", ctx.getRaceColor(ctx.mercenary.race));
      \u0275\u0275advance();
      \u0275\u0275textInterpolate2(" ", ctx.getRaceEmoji(ctx.mercenary.race), " ", ctx.mercenary.race, " ");
      \u0275\u0275advance();
      \u0275\u0275styleProp("background", ctx.getClassColor(ctx.mercenary.class));
      \u0275\u0275advance();
      \u0275\u0275textInterpolate2(" ", ctx.getClassIcon(ctx.mercenary.class), " ", ctx.mercenary.class, " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.mercenary.specialty);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", ctx.mercenary.stats.strength, "");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", ctx.mercenary.stats.agility, "");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", ctx.mercenary.stats.magic, "");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", ctx.mercenary.stats.defense, "");
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.getStars(ctx.mercenary.rating));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.mercenary.rating);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1("\u{1F4B0} ", ctx.mercenary.hireCost, "");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("\u{1F4C5} ", ctx.mercenary.dailyUpkeep, "/day");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.mercenary.status === "available" ? 46 : ctx.mercenary.status === "hired" ? 47 : -1);
    }
  }, dependencies: [CommonModule, ButtonComponent], styles: ["\n\n.mercenary-card[_ngcontent-%COMP%] {\n  background: var(--bg-card);\n  border: 2px solid var(--border-primary);\n  border-radius: 12px;\n  padding: 16px;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.mercenary-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);\n}\n.mercenary-card.hired[_ngcontent-%COMP%] {\n  border-color: var(--border-completed);\n}\n.mercenary-card.on-mission[_ngcontent-%COMP%] {\n  border-color: var(--border-progress);\n  opacity: 0.7;\n}\n.card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 12px;\n}\n.avatar[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n}\n.level-badge[_ngcontent-%COMP%] {\n  background: var(--accent-gold);\n  color: #000;\n  padding: 4px 8px;\n  border-radius: 4px;\n  font-size: 0.75rem;\n  font-weight: bold;\n}\n.status-badge[_ngcontent-%COMP%] {\n  margin-left: auto;\n  padding: 4px 8px;\n  border-radius: 4px;\n  font-size: 0.7rem;\n  text-transform: uppercase;\n}\n.status-badge.available[_ngcontent-%COMP%] {\n  background: #4c9a6b;\n  color: #fff;\n}\n.status-badge.hired[_ngcontent-%COMP%] {\n  background: #6b4c9a;\n  color: #fff;\n}\n.status-badge.on-mission[_ngcontent-%COMP%] {\n  background: #9a6b4c;\n  color: #fff;\n}\n.card-body[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: var(--text-white);\n  margin: 0 0 8px;\n  font-size: 1.1rem;\n}\n.tags[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 8px;\n}\n.tag[_ngcontent-%COMP%] {\n  padding: 4px 8px;\n  border-radius: 4px;\n  font-size: 0.7rem;\n  color: #fff;\n}\n.specialty[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 0.8rem;\n  margin: 0 0 12px;\n}\n.stats-preview[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 8px;\n  margin-bottom: 12px;\n}\n.stat[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 0.8rem;\n  color: var(--text-secondary);\n  background: var(--card-overlay);\n  padding: 6px;\n  border-radius: 4px;\n}\n.stat[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.9rem;\n}\n.rating[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 2px;\n  margin-bottom: 12px;\n}\n.rating[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\n.rating-value[_ngcontent-%COMP%] {\n  color: var(--accent-gold);\n  margin-left: 8px;\n  font-weight: bold;\n}\n.card-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-top: 12px;\n  border-top: 1px solid var(--border-secondary);\n}\n.cost[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.hire-cost[_ngcontent-%COMP%] {\n  color: var(--accent-gold);\n  font-weight: bold;\n  font-size: 0.9rem;\n}\n.upkeep[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 0.75rem;\n}\n/*# sourceMappingURL=mercenary-card.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MercenaryCardComponent, { className: "MercenaryCardComponent", filePath: "projects\\raid-squad\\src\\app\\components\\mercenary-card\\mercenary-card.component.ts", lineNumber: 108 });
})();

// projects/raid-squad/src/app/components/mercenary-detail-modal/mercenary-detail-modal.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function MercenaryDetailModalComponent_Conditional_0_For_63_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 40);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const skill_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u{1F4A5} ", skill_r3.damage, " damage");
  }
}
function MercenaryDetailModalComponent_Conditional_0_For_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "div", 36)(2, "span", 37);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 38);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "p", 39);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, MercenaryDetailModalComponent_Conditional_0_For_63_Conditional_8_Template, 2, 1, "span", 40);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const skill_r3 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(skill_r3.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", skill_r3.cooldown, "s CD");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(skill_r3.description);
    \u0275\u0275advance();
    \u0275\u0275conditional(skill_r3.damage ? 8 : -1);
  }
}
function MercenaryDetailModalComponent_Conditional_0_For_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "span", 41);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 42);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 43);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getSlotIcon(item_r4.slot));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r4.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatBonus(item_r4.bonus));
  }
}
function MercenaryDetailModalComponent_Conditional_0_Conditional_87_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ui-button", 44);
    \u0275\u0275listener("clicked", function MercenaryDetailModalComponent_Conditional_0_Conditional_87_Template_ui_button_clicked_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.hire.emit(ctx_r1.mercenary));
    });
    \u0275\u0275text(1, "\u{1F4B0} Hire Now");
    \u0275\u0275elementEnd();
  }
}
function MercenaryDetailModalComponent_Conditional_0_Conditional_88_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ui-button", 45);
    \u0275\u0275listener("clicked", function MercenaryDetailModalComponent_Conditional_0_Conditional_88_Template_ui_button_clicked_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.release.emit(ctx_r1.mercenary));
    });
    \u0275\u0275text(1, "Release");
    \u0275\u0275elementEnd();
  }
}
function MercenaryDetailModalComponent_Conditional_0_Conditional_89_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 35);
    \u0275\u0275text(1, "\u{1F680} Currently on mission");
    \u0275\u0275elementEnd();
  }
}
function MercenaryDetailModalComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275listener("click", function MercenaryDetailModalComponent_Conditional_0_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close.emit());
    });
    \u0275\u0275elementStart(1, "div", 2);
    \u0275\u0275listener("click", function MercenaryDetailModalComponent_Conditional_0_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "button", 3);
    \u0275\u0275listener("click", function MercenaryDetailModalComponent_Conditional_0_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close.emit());
    });
    \u0275\u0275text(3, "\u2715");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 4)(5, "span", 5);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 6)(8, "h2");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 7)(11, "span", 8);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 8);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 9);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "p", 10);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "div", 11)(20, "h3");
    \u0275\u0275text(21, "\u{1F4CA} Stats");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 12)(23, "div", 13)(24, "span", 14);
    \u0275\u0275text(25, "\u2694\uFE0F Strength");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 15);
    \u0275\u0275element(27, "div", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "span", 17);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 13)(31, "span", 14);
    \u0275\u0275text(32, "\u{1F3C3} Agility");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 15);
    \u0275\u0275element(34, "div", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "span", 17);
    \u0275\u0275text(36);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 13)(38, "span", 14);
    \u0275\u0275text(39, "\u2728 Magic");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div", 15);
    \u0275\u0275element(41, "div", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "span", 17);
    \u0275\u0275text(43);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "div", 13)(45, "span", 14);
    \u0275\u0275text(46, "\u{1F6E1}\uFE0F Defense");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "div", 15);
    \u0275\u0275element(48, "div", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "span", 17);
    \u0275\u0275text(50);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(51, "div", 13)(52, "span", 14);
    \u0275\u0275text(53, "\u2764\uFE0F Health");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "div", 15);
    \u0275\u0275element(55, "div", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "span", 17);
    \u0275\u0275text(57);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(58, "div", 22)(59, "h3");
    \u0275\u0275text(60, "\u26A1 Skills");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "div", 23);
    \u0275\u0275repeaterCreate(62, MercenaryDetailModalComponent_Conditional_0_For_63_Template, 9, 4, "div", 24, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(64, "div", 25)(65, "h3");
    \u0275\u0275text(66, "\u{1F392} Equipment");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "div", 26);
    \u0275\u0275repeaterCreate(68, MercenaryDetailModalComponent_Conditional_0_For_69_Template, 7, 3, "div", 27, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(70, "div", 28)(71, "div", 29)(72, "div", 30)(73, "span", 31);
    \u0275\u0275text(74, "Hire Cost");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "span", 32);
    \u0275\u0275text(76);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(77, "div", 30)(78, "span", 31);
    \u0275\u0275text(79, "Daily Upkeep");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(80, "span", 32);
    \u0275\u0275text(81);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(82, "div", 30)(83, "span", 31);
    \u0275\u0275text(84, "Missions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(85, "span", 32);
    \u0275\u0275text(86);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(87, MercenaryDetailModalComponent_Conditional_0_Conditional_87_Template, 2, 0, "ui-button", 33)(88, MercenaryDetailModalComponent_Conditional_0_Conditional_88_Template, 2, 0, "ui-button", 34)(89, MercenaryDetailModalComponent_Conditional_0_Conditional_89_Template, 2, 0, "span", 35);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.mercenary.avatar);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.mercenary.name);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", ctx_r1.getRaceColor(ctx_r1.mercenary.race));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.mercenary.race, " ");
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", ctx_r1.getClassColor(ctx_r1.mercenary.class));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r1.getClassIcon(ctx_r1.mercenary.class), " ", ctx_r1.mercenary.class, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Level ", ctx_r1.mercenary.level, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.mercenary.specialty);
    \u0275\u0275advance(9);
    \u0275\u0275styleProp("width", ctx_r1.mercenary.stats.strength, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.mercenary.stats.strength);
    \u0275\u0275advance(5);
    \u0275\u0275styleProp("width", ctx_r1.mercenary.stats.agility, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.mercenary.stats.agility);
    \u0275\u0275advance(5);
    \u0275\u0275styleProp("width", ctx_r1.mercenary.stats.magic, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.mercenary.stats.magic);
    \u0275\u0275advance(5);
    \u0275\u0275styleProp("width", ctx_r1.mercenary.stats.defense, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.mercenary.stats.defense);
    \u0275\u0275advance(5);
    \u0275\u0275styleProp("width", ctx_r1.mercenary.stats.health / 10, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.mercenary.stats.health);
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r1.mercenary.skills);
    \u0275\u0275advance(6);
    \u0275\u0275repeater(ctx_r1.mercenary.equipment);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("\u{1F4B0} ", ctx_r1.mercenary.hireCost, "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("\u{1F4C5} ", ctx_r1.mercenary.dailyUpkeep, "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("\u{1F3AF} ", ctx_r1.mercenary.missionsCompleted, "");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.mercenary.status === "available" ? 87 : ctx_r1.mercenary.status === "hired" ? 88 : 89);
  }
}
var MercenaryDetailModalComponent = class _MercenaryDetailModalComponent {
  mercenary = null;
  close = new EventEmitter();
  hire = new EventEmitter();
  release = new EventEmitter();
  getRaceColor(race) {
    return RACE_CONFIG[race]?.color || "#666";
  }
  getClassIcon(cls) {
    return CLASS_CONFIG[cls]?.icon || "";
  }
  getClassColor(cls) {
    return CLASS_CONFIG[cls]?.color || "#666";
  }
  getSlotIcon(slot) {
    return { weapon: "\u2694\uFE0F", armor: "\u{1F6E1}\uFE0F", accessory: "\u{1F48D}" }[slot] || "\u{1F4E6}";
  }
  formatBonus(bonus) {
    return Object.entries(bonus).map(([k, v]) => `+${v} ${k}`).join(", ");
  }
  static \u0275fac = function MercenaryDetailModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MercenaryDetailModalComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MercenaryDetailModalComponent, selectors: [["app-mercenary-detail-modal"]], inputs: { mercenary: "mercenary" }, outputs: { close: "close", hire: "hire", release: "release" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [[1, "modal-overlay"], [1, "modal-overlay", 3, "click"], [1, "modal-content", 3, "click"], [1, "close-btn", 3, "click"], [1, "modal-header"], [1, "avatar"], [1, "header-info"], [1, "tags"], [1, "tag"], [1, "level"], [1, "specialty"], [1, "stats-section"], [1, "stats-grid"], [1, "stat-bar"], [1, "stat-label"], [1, "bar"], [1, "fill"], [1, "stat-value"], [1, "fill", "agility"], [1, "fill", "magic"], [1, "fill", "defense"], [1, "fill", "health"], [1, "skills-section"], [1, "skills-list"], [1, "skill-item"], [1, "equipment-section"], [1, "equipment-list"], [1, "equipment-item"], [1, "modal-footer"], [1, "cost-info"], [1, "cost-item"], [1, "label"], [1, "value"], ["variant", "primary"], ["variant", "outline"], [1, "on-mission-label"], [1, "skill-header"], [1, "skill-name"], [1, "cooldown"], [1, "skill-desc"], [1, "damage"], [1, "slot"], [1, "item-name"], [1, "bonus"], ["variant", "primary", 3, "clicked"], ["variant", "outline", 3, "clicked"]], template: function MercenaryDetailModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, MercenaryDetailModalComponent_Conditional_0_Template, 90, 30, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.mercenary ? 0 : -1);
    }
  }, dependencies: [CommonModule, ButtonComponent], styles: ["\n\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.8);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  padding: 20px;\n}\n.modal-content[_ngcontent-%COMP%] {\n  background: var(--bg-secondary);\n  border: 2px solid var(--border-primary);\n  border-radius: 16px;\n  padding: 24px;\n  max-width: 600px;\n  width: 100%;\n  max-height: 90vh;\n  overflow-y: auto;\n  position: relative;\n}\n.close-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 16px;\n  right: 16px;\n  background: transparent;\n  border: none;\n  color: var(--text-muted);\n  font-size: 1.5rem;\n  cursor: pointer;\n}\n.close-btn[_ngcontent-%COMP%]:hover {\n  color: var(--text-primary);\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n  margin-bottom: 24px;\n}\n.avatar[_ngcontent-%COMP%] {\n  font-size: 4rem;\n}\n.header-info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: var(--text-white);\n  margin: 0 0 8px;\n}\n.tags[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 8px;\n}\n.tag[_ngcontent-%COMP%] {\n  padding: 4px 10px;\n  border-radius: 4px;\n  font-size: 0.8rem;\n  color: #fff;\n}\n.level[_ngcontent-%COMP%] {\n  background: var(--accent-gold);\n  color: #000;\n  padding: 4px 10px;\n  border-radius: 4px;\n  font-size: 0.8rem;\n  font-weight: bold;\n}\n.specialty[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  margin: 0;\n}\nh3[_ngcontent-%COMP%] {\n  color: var(--accent-gold);\n  margin: 0 0 16px;\n  font-size: 1rem;\n}\n.stats-grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  margin-bottom: 24px;\n}\n.stat-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.stat-label[_ngcontent-%COMP%] {\n  width: 100px;\n  color: var(--text-secondary);\n  font-size: 0.85rem;\n}\n.bar[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 8px;\n  background: var(--border-secondary);\n  border-radius: 4px;\n  overflow: hidden;\n}\n.fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background: #c45a5a;\n  border-radius: 4px;\n  transition: width 0.3s;\n}\n.fill.agility[_ngcontent-%COMP%] {\n  background: #5ac47a;\n}\n.fill.magic[_ngcontent-%COMP%] {\n  background: #7a5ac4;\n}\n.fill.defense[_ngcontent-%COMP%] {\n  background: #5a8ac4;\n}\n.fill.health[_ngcontent-%COMP%] {\n  background: #c45a8a;\n}\n.stat-value[_ngcontent-%COMP%] {\n  width: 40px;\n  text-align: right;\n  color: var(--text-primary);\n  font-weight: bold;\n}\n.skills-section[_ngcontent-%COMP%], \n.equipment-section[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.skills-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.skill-item[_ngcontent-%COMP%] {\n  background: var(--card-overlay);\n  padding: 12px;\n  border-radius: 8px;\n}\n.skill-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 4px;\n}\n.skill-name[_ngcontent-%COMP%] {\n  color: var(--text-white);\n  font-weight: bold;\n}\n.cooldown[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 0.8rem;\n}\n.skill-desc[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  margin: 0 0 4px;\n  font-size: 0.85rem;\n}\n.damage[_ngcontent-%COMP%] {\n  color: #c45a5a;\n  font-size: 0.8rem;\n}\n.equipment-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.equipment-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  background: var(--card-overlay);\n  padding: 10px;\n  border-radius: 6px;\n}\n.slot[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\n.item-name[_ngcontent-%COMP%] {\n  flex: 1;\n  color: var(--text-primary);\n}\n.bonus[_ngcontent-%COMP%] {\n  color: var(--accent-gold);\n  font-size: 0.85rem;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-top: 16px;\n  border-top: 1px solid var(--border-secondary);\n}\n.cost-info[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 24px;\n}\n.cost-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.cost-item[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 0.75rem;\n}\n.cost-item[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  color: var(--accent-gold);\n  font-weight: bold;\n}\n.on-mission-label[_ngcontent-%COMP%] {\n  color: var(--border-progress);\n  font-weight: bold;\n}\n/*# sourceMappingURL=mercenary-detail-modal.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MercenaryDetailModalComponent, { className: "MercenaryDetailModalComponent", filePath: "projects\\raid-squad\\src\\app\\components\\mercenary-detail-modal\\mercenary-detail-modal.component.ts", lineNumber: 178 });
})();

// projects/raid-squad/src/app/components/mercenary-grid/mercenary-grid.component.ts
var _forTrack02 = ($index, $item) => $item.id;
function MercenaryGridComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "span", 3);
    \u0275\u0275text(2, "\u{1F50D}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "No mercenaries found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Try adjusting your filters or search query");
    \u0275\u0275elementEnd()();
  }
}
function MercenaryGridComponent_Conditional_2_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-mercenary-card", 5);
    \u0275\u0275listener("viewDetails", function MercenaryGridComponent_Conditional_2_For_1_Template_app_mercenary_card_viewDetails_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openDetail($event));
    })("hireClick", function MercenaryGridComponent_Conditional_2_For_1_Template_app_mercenary_card_hireClick_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.hireMercenary($event));
    })("releaseClick", function MercenaryGridComponent_Conditional_2_For_1_Template_app_mercenary_card_releaseClick_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.releaseMercenary($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const merc_r3 = ctx.$implicit;
    \u0275\u0275property("mercenary", merc_r3);
  }
}
function MercenaryGridComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, MercenaryGridComponent_Conditional_2_For_1_Template, 1, 1, "app-mercenary-card", 4, _forTrack02);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r1.mercenaryService.filteredMercenaries());
  }
}
var MercenaryGridComponent = class _MercenaryGridComponent {
  mercenaryService = inject(MercenaryService);
  selectedMercenary = signal(null);
  openDetail(merc) {
    this.selectedMercenary.set(merc);
  }
  closeDetail() {
    this.selectedMercenary.set(null);
  }
  hireMercenary(merc) {
    this.mercenaryService.hireMercenary(merc.id);
  }
  releaseMercenary(merc) {
    this.mercenaryService.releaseMercenary(merc.id);
  }
  static \u0275fac = function MercenaryGridComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MercenaryGridComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MercenaryGridComponent, selectors: [["app-mercenary-grid"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 4, vars: 2, consts: [[1, "mercenary-grid"], [1, "empty-state"], [3, "close", "hire", "release", "mercenary"], [1, "empty-icon"], [3, "mercenary"], [3, "viewDetails", "hireClick", "releaseClick", "mercenary"]], template: function MercenaryGridComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275template(1, MercenaryGridComponent_Conditional_1_Template, 7, 0, "div", 1)(2, MercenaryGridComponent_Conditional_2_Template, 2, 0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "app-mercenary-detail-modal", 2);
      \u0275\u0275listener("close", function MercenaryGridComponent_Template_app_mercenary_detail_modal_close_3_listener() {
        return ctx.closeDetail();
      })("hire", function MercenaryGridComponent_Template_app_mercenary_detail_modal_hire_3_listener($event) {
        ctx.hireMercenary($event);
        return ctx.closeDetail();
      })("release", function MercenaryGridComponent_Template_app_mercenary_detail_modal_release_3_listener($event) {
        ctx.releaseMercenary($event);
        return ctx.closeDetail();
      });
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.mercenaryService.filteredMercenaries().length === 0 ? 1 : 2);
      \u0275\u0275advance(2);
      \u0275\u0275property("mercenary", ctx.selectedMercenary());
    }
  }, dependencies: [CommonModule, MercenaryCardComponent, MercenaryDetailModalComponent], styles: ["\n\n.mercenary-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n  gap: 20px;\n}\n.empty-state[_ngcontent-%COMP%] {\n  grid-column: 1 / -1;\n  text-align: center;\n  padding: 60px 20px;\n  background: var(--bg-card);\n  border: 2px dashed var(--border-secondary);\n  border-radius: 12px;\n}\n.empty-icon[_ngcontent-%COMP%] {\n  font-size: 4rem;\n  display: block;\n  margin-bottom: 16px;\n}\n.empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: var(--text-primary);\n  margin: 0 0 8px;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  margin: 0;\n}\n/*# sourceMappingURL=mercenary-grid.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MercenaryGridComponent, { className: "MercenaryGridComponent", filePath: "projects\\raid-squad\\src\\app\\components\\mercenary-grid\\mercenary-grid.component.ts", lineNumber: 58 });
})();

// projects/raid-squad/src/app/components/stats-header/stats-header.component.ts
var StatsHeaderComponent = class _StatsHeaderComponent {
  mercenaryService = inject(MercenaryService);
  stats = this.mercenaryService.stats;
  static \u0275fac = function StatsHeaderComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StatsHeaderComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StatsHeaderComponent, selectors: [["app-stats-header"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 21, vars: 4, consts: [[1, "stats-header"], [1, "stat-item"], [1, "stat-value"], [1, "stat-label"], [1, "stat-item", "available"], [1, "stat-item", "hired"], [1, "stat-item", "mission"]], template: function StatsHeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "span", 2);
      \u0275\u0275text(3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "span", 3);
      \u0275\u0275text(5, "Total Mercenaries");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 4)(7, "span", 2);
      \u0275\u0275text(8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "span", 3);
      \u0275\u0275text(10, "Available");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "div", 5)(12, "span", 2);
      \u0275\u0275text(13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "span", 3);
      \u0275\u0275text(15, "Hired");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "div", 6)(17, "span", 2);
      \u0275\u0275text(18);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "span", 3);
      \u0275\u0275text(20, "On Mission");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.stats().total);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.stats().available);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.stats().hired);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.stats().onMission);
    }
  }, dependencies: [CommonModule], styles: ["\n\n.stats-header[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  margin-bottom: 24px;\n  flex-wrap: wrap;\n}\n.stat-item[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 140px;\n  background: var(--bg-card);\n  border: 2px solid var(--border-primary);\n  border-radius: 12px;\n  padding: 16px 20px;\n  text-align: center;\n}\n.stat-item.available[_ngcontent-%COMP%] {\n  border-color: #4c9a6b;\n}\n.stat-item.hired[_ngcontent-%COMP%] {\n  border-color: #6b4c9a;\n}\n.stat-item.mission[_ngcontent-%COMP%] {\n  border-color: #9a6b4c;\n}\n.stat-value[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 2rem;\n  font-weight: bold;\n  color: var(--accent-gold);\n}\n.stat-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.85rem;\n  color: var(--text-secondary);\n  margin-top: 4px;\n}\n/*# sourceMappingURL=stats-header.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StatsHeaderComponent, { className: "StatsHeaderComponent", filePath: "projects\\raid-squad\\src\\app\\components\\stats-header\\stats-header.component.ts", lineNumber: 62 });
})();

// projects/raid-squad/src/app/services/theme.service.ts
var ThemeService = class _ThemeService {
  STORAGE_KEY = "raid-squad-theme";
  theme = signal(this.loadTheme());
  isDark = () => this.theme() === "eclipse";
  constructor() {
    effect(() => {
      const theme = this.theme();
      document.documentElement.setAttribute("data-theme", theme);
      localStorage.setItem(this.STORAGE_KEY, theme);
    });
  }
  loadTheme() {
    const saved = localStorage.getItem(this.STORAGE_KEY);
    return saved || "eclipse";
  }
  toggle() {
    this.theme.update((t) => t === "eclipse" ? "fire" : "eclipse");
  }
  static \u0275fac = function ThemeService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ThemeService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ThemeService, factory: _ThemeService.\u0275fac, providedIn: "root" });
};

// projects/raid-squad/src/app/components/theme-toggle/theme-toggle.component.ts
var ThemeToggleComponent = class _ThemeToggleComponent {
  themeService = inject(ThemeService);
  get ariaLabel() {
    return this.themeService.isDark() ? "Switch to Fire mode" : "Switch to Eclipse mode";
  }
  static \u0275fac = function ThemeToggleComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ThemeToggleComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ThemeToggleComponent, selectors: [["app-theme-toggle"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 10, vars: 9, consts: [[1, "theme-toggle", 3, "click"], [1, "toggle-track"], [1, "toggle-icon", "eclipse"], [1, "toggle-thumb"], [1, "toggle-icon", "fire"], [1, "toggle-label"]], template: function ThemeToggleComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "button", 0);
      \u0275\u0275listener("click", function ThemeToggleComponent_Template_button_click_0_listener() {
        return ctx.themeService.toggle();
      });
      \u0275\u0275elementStart(1, "span", 1)(2, "span", 2);
      \u0275\u0275text(3, "\u{1F311}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "span", 3);
      \u0275\u0275text(5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "span", 4);
      \u0275\u0275text(7, "\u{1F525}");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "span", 5);
      \u0275\u0275text(9);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275attribute("aria-label", ctx.ariaLabel);
      \u0275\u0275advance();
      \u0275\u0275classProp("fire", !ctx.themeService.isDark());
      \u0275\u0275advance(3);
      \u0275\u0275classProp("fire", !ctx.themeService.isDark());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.themeService.isDark() ? "\u{1F311}" : "\u{1F525}", " ");
      \u0275\u0275advance(3);
      \u0275\u0275classProp("fire", !ctx.themeService.isDark());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.themeService.isDark() ? "Eclipse Mode" : "Fire Mode");
    }
  }, dependencies: [CommonModule], styles: ["\n\n.theme-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  background: transparent;\n  border: 2px solid var(--border-primary);\n  border-radius: 30px;\n  cursor: pointer;\n  padding: 8px 16px;\n  transition: all 0.3s;\n}\n.theme-toggle[_ngcontent-%COMP%]:hover {\n  border-color: var(--accent-gold);\n  background: var(--card-overlay);\n}\n.toggle-track[_ngcontent-%COMP%] {\n  position: relative;\n  width: 56px;\n  height: 28px;\n  background:\n    linear-gradient(\n      135deg,\n      #1a1a2e 0%,\n      #0f0f1a 100%);\n  border-radius: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 6px;\n  transition: background 0.4s;\n  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.5);\n}\n.toggle-track.fire[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #ff6b35 0%,\n      #f7931e 50%,\n      #ffcc00 100%);\n  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.2), 0 0 20px rgba(255, 107, 53, 0.4);\n}\n.toggle-thumb[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 22px;\n  height: 22px;\n  background:\n    linear-gradient(\n      135deg,\n      #2a2a4a 0%,\n      #1a1a2e 100%);\n  border-radius: 50%;\n  left: 3px;\n  transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);\n}\n.toggle-thumb.fire[_ngcontent-%COMP%] {\n  transform: translateX(28px);\n  background:\n    linear-gradient(\n      135deg,\n      #fff 0%,\n      #ffe0b0 100%);\n  box-shadow: 0 0 15px rgba(255, 200, 0, 0.6);\n}\n.toggle-icon[_ngcontent-%COMP%] {\n  font-size: 12px;\n  z-index: 1;\n  opacity: 0.6;\n}\n.toggle-label[_ngcontent-%COMP%] {\n  color: var(--text-primary);\n  font-size: 0.9rem;\n  font-weight: 600;\n  letter-spacing: 0.5px;\n  transition: color 0.3s;\n}\n.toggle-label.fire[_ngcontent-%COMP%] {\n  color: #fff;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);\n}\n/*# sourceMappingURL=theme-toggle.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ThemeToggleComponent, { className: "ThemeToggleComponent", filePath: "projects\\raid-squad\\src\\app\\components\\theme-toggle\\theme-toggle.component.ts", lineNumber: 91 });
})();

// projects/raid-squad/src/app/models/squad.model.ts
var MAX_SQUAD_CAPACITY = 12;

// projects/raid-squad/src/app/services/squad.service.ts
var SquadService = class _SquadService {
  mercenaryService = inject(MercenaryService);
  squad = signal({
    id: crypto.randomUUID(),
    name: "My Raid Squad",
    maxCapacity: MAX_SQUAD_CAPACITY,
    slots: this.initializeSlots(),
    totalUpkeep: 0,
    createdAt: /* @__PURE__ */ new Date()
  });
  currentSquad = this.squad.asReadonly();
  squadMembers = computed(() => {
    const slots = this.squad().slots;
    return slots.filter((s) => s.mercenaryId).map((s) => ({
      slot: s,
      mercenary: this.mercenaryService.getMercenaryById(s.mercenaryId)
    })).filter((m) => m.mercenary);
  });
  squadSize = computed(() => this.squadMembers().length);
  totalUpkeep = computed(() => this.squadMembers().reduce((sum, m) => sum + (m.mercenary?.dailyUpkeep || 0), 0));
  formationByRow = computed(() => {
    const slots = this.squad().slots;
    return {
      front: slots.filter((s) => s.row === "front"),
      middle: slots.filter((s) => s.row === "middle"),
      back: slots.filter((s) => s.row === "back")
    };
  });
  initializeSlots() {
    const slots = [];
    const rows = ["front", "middle", "back"];
    let position = 0;
    rows.forEach((row) => {
      for (let i = 0; i < 4; i++) {
        slots.push({ position: position++, row, mercenaryId: null });
      }
    });
    return slots;
  }
  addToSquad(mercenaryId, slotPosition) {
    const slots = this.squad().slots;
    const emptySlot = slotPosition !== void 0 ? slots.find((s) => s.position === slotPosition && !s.mercenaryId) : slots.find((s) => !s.mercenaryId);
    if (!emptySlot)
      return false;
    if (slots.some((s) => s.mercenaryId === mercenaryId))
      return false;
    this.squad.update((sq) => __spreadProps(__spreadValues({}, sq), {
      slots: sq.slots.map((s) => s.position === emptySlot.position ? __spreadProps(__spreadValues({}, s), { mercenaryId }) : s)
    }));
    this.mercenaryService.hireMercenary(mercenaryId);
    return true;
  }
  removeFromSquad(mercenaryId) {
    this.squad.update((sq) => __spreadProps(__spreadValues({}, sq), {
      slots: sq.slots.map((s) => s.mercenaryId === mercenaryId ? __spreadProps(__spreadValues({}, s), { mercenaryId: null }) : s)
    }));
    this.mercenaryService.releaseMercenary(mercenaryId);
  }
  moveInSquad(mercenaryId, toPosition) {
    const slots = this.squad().slots;
    const fromSlot = slots.find((s) => s.mercenaryId === mercenaryId);
    const toSlot = slots.find((s) => s.position === toPosition);
    if (!fromSlot || !toSlot)
      return;
    this.squad.update((sq) => __spreadProps(__spreadValues({}, sq), {
      slots: sq.slots.map((s) => {
        if (s.position === fromSlot.position) {
          return __spreadProps(__spreadValues({}, s), { mercenaryId: toSlot.mercenaryId });
        }
        if (s.position === toPosition) {
          return __spreadProps(__spreadValues({}, s), { mercenaryId });
        }
        return s;
      })
    }));
  }
  renameSquad(name) {
    this.squad.update((sq) => __spreadProps(__spreadValues({}, sq), { name }));
  }
  isInSquad(mercenaryId) {
    return this.squad().slots.some((s) => s.mercenaryId === mercenaryId);
  }
  static \u0275fac = function SquadService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SquadService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SquadService, factory: _SquadService.\u0275fac, providedIn: "root" });
};

// projects/raid-squad/src/app/components/squad-panel/squad-panel.component.ts
var _forTrack03 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.position;
function SquadPanelComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 12);
    \u0275\u0275twoWayListener("ngModelChange", function SquadPanelComponent_Conditional_3_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.editName, $event) || (ctx_r1.editName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("blur", function SquadPanelComponent_Conditional_3_Template_input_blur_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveName());
    })("keyup.enter", function SquadPanelComponent_Conditional_3_Template_input_keyup_enter_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveName());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editName);
  }
}
function SquadPanelComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "h2");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 13);
    \u0275\u0275listener("click", function SquadPanelComponent_Conditional_4_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.startEdit());
    });
    \u0275\u0275text(3, "\u270F\uFE0F");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.squadService.currentSquad().name);
  }
}
function SquadPanelComponent_For_12_For_6_Conditional_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275listener("dragstart", function SquadPanelComponent_For_12_For_6_Conditional_1_Conditional_0_Template_div_dragstart_0_listener($event) {
      const merc_r7 = \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.onDragStart($event, merc_r7.id));
    })("dragend", function SquadPanelComponent_For_12_For_6_Conditional_1_Conditional_0_Template_div_dragend_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.onDragEnd());
    });
    \u0275\u0275elementStart(1, "span", 21);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 22)(4, "span", 23);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 24);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 25);
    \u0275\u0275listener("click", function SquadPanelComponent_For_12_For_6_Conditional_1_Conditional_0_Template_button_click_8_listener() {
      const merc_r7 = \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.removeFromSquad(merc_r7.id));
    });
    \u0275\u0275text(9, "\u2715");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const merc_r7 = ctx;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(merc_r7.avatar);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(merc_r7.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Lv.", merc_r7.level, "");
  }
}
function SquadPanelComponent_For_12_For_6_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, SquadPanelComponent_For_12_For_6_Conditional_1_Conditional_0_Template, 10, 3, "div", 19);
  }
  if (rf & 2) {
    let tmp_21_0;
    const slot_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional((tmp_21_0 = ctx_r1.getMercenary(slot_r5.mercenaryId)) ? 0 : -1, tmp_21_0);
  }
}
function SquadPanelComponent_For_12_For_6_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 18);
    \u0275\u0275text(1, "+");
    \u0275\u0275elementEnd();
  }
}
function SquadPanelComponent_For_12_For_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275listener("dragover", function SquadPanelComponent_For_12_For_6_Template_div_dragover_0_listener($event) {
      const slot_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onDragOver($event, slot_r5.position));
    })("dragleave", function SquadPanelComponent_For_12_For_6_Template_div_dragleave_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onDragLeave());
    })("drop", function SquadPanelComponent_For_12_For_6_Template_div_drop_0_listener($event) {
      const slot_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onDrop($event, slot_r5.position));
    });
    \u0275\u0275template(1, SquadPanelComponent_For_12_For_6_Conditional_1_Template, 1, 1)(2, SquadPanelComponent_For_12_For_6_Conditional_2_Template, 2, 0, "span", 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const slot_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("filled", slot_r5.mercenaryId)("drop-target", ctx_r1.dragOverSlot === slot_r5.position);
    \u0275\u0275advance();
    \u0275\u0275conditional(slot_r5.mercenaryId ? 1 : 2);
  }
}
function SquadPanelComponent_For_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "span", 14);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "titlecase");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 15);
    \u0275\u0275repeaterCreate(5, SquadPanelComponent_For_12_For_6_Template, 3, 5, "div", 16, _forTrack1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, row_r8));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.getRowSlots(row_r8));
  }
}
function SquadPanelComponent_For_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ui-button", 26);
    \u0275\u0275listener("clicked", function SquadPanelComponent_For_18_Template_ui_button_clicked_3_listener() {
      const merc_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addToSquad(merc_r10.id));
    });
    \u0275\u0275text(4, "+");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const merc_r10 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3("", merc_r10.avatar, " ", merc_r10.name, " (Lv.", merc_r10.level, ")");
  }
}
var SquadPanelComponent = class _SquadPanelComponent {
  squadService = inject(SquadService);
  mercenaryService = inject(MercenaryService);
  formationRows = ["front", "middle", "back"];
  getRowSlots(row) {
    return this.squadService.formationByRow()[row];
  }
  isEditing = false;
  editName = "";
  draggedMercId = null;
  dragOverSlot = null;
  availableMercenaries = this.mercenaryService.filteredMercenaries;
  getMercenary(id) {
    return this.mercenaryService.getMercenaryById(id);
  }
  startEdit() {
    this.editName = this.squadService.currentSquad().name;
    this.isEditing = true;
  }
  saveName() {
    if (this.editName.trim()) {
      this.squadService.renameSquad(this.editName.trim());
    }
    this.isEditing = false;
  }
  addToSquad(mercId) {
    this.squadService.addToSquad(mercId);
  }
  removeFromSquad(mercId) {
    this.squadService.removeFromSquad(mercId);
  }
  onDragStart(e, mercId) {
    this.draggedMercId = mercId;
    e.dataTransfer?.setData("text/plain", mercId);
  }
  onDragEnd() {
    this.draggedMercId = null;
    this.dragOverSlot = null;
  }
  onDragOver(e, slotPosition) {
    e.preventDefault();
    this.dragOverSlot = slotPosition;
  }
  onDragLeave() {
    this.dragOverSlot = null;
  }
  onDrop(e, slotPosition) {
    e.preventDefault();
    if (this.draggedMercId) {
      this.squadService.moveInSquad(this.draggedMercId, slotPosition);
    }
    this.draggedMercId = null;
    this.dragOverSlot = null;
  }
  static \u0275fac = function SquadPanelComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SquadPanelComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SquadPanelComponent, selectors: [["app-squad-panel"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 19, vars: 4, consts: [[1, "squad-panel"], [1, "squad-header"], [1, "squad-title"], [3, "ngModel"], [1, "squad-stats"], [1, "count"], [1, "upkeep"], [1, "formation"], [1, "formation-row"], [1, "squad-actions"], [1, "available-list"], [1, "available-item"], [3, "ngModelChange", "blur", "keyup.enter", "ngModel"], [1, "edit-btn", 3, "click"], [1, "row-label"], [1, "slots"], [1, "slot", 3, "filled", "drop-target"], [1, "slot", 3, "dragover", "dragleave", "drop"], [1, "empty-slot"], ["draggable", "true", 1, "merc-mini"], ["draggable", "true", 1, "merc-mini", 3, "dragstart", "dragend"], [1, "avatar"], [1, "merc-info"], [1, "name"], [1, "level"], [1, "remove-btn", 3, "click"], ["variant", "primary", "size", "sm", 3, "clicked"]], template: function SquadPanelComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275template(3, SquadPanelComponent_Conditional_3_Template, 1, 1, "input", 3)(4, SquadPanelComponent_Conditional_4_Template, 4, 1);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 4)(6, "span", 5);
      \u0275\u0275text(7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "span", 6);
      \u0275\u0275text(9);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(10, "div", 7);
      \u0275\u0275repeaterCreate(11, SquadPanelComponent_For_12_Template, 7, 3, "div", 8, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "div", 9)(14, "h4");
      \u0275\u0275text(15, "Quick Add Available");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "div", 10);
      \u0275\u0275repeaterCreate(17, SquadPanelComponent_For_18_Template, 5, 3, "div", 11, _forTrack03);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.isEditing ? 3 : 4);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate2("\u{1F465} ", ctx.squadService.squadSize(), "/", ctx.squadService.currentSquad().maxCapacity, "");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("\u{1F4B0} ", ctx.squadService.totalUpkeep(), "/day");
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.formationRows);
      \u0275\u0275advance(6);
      \u0275\u0275repeater(ctx.availableMercenaries().slice(0, 5));
    }
  }, dependencies: [CommonModule, TitleCasePipe, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, ButtonComponent], styles: ["\n\n.squad-panel[_ngcontent-%COMP%] {\n  background: var(--bg-card);\n  border: 2px solid var(--accent-gold);\n  border-radius: 12px;\n  padding: 20px;\n}\n.squad-header[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.squad-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 8px;\n}\n.squad-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: var(--accent-gold);\n  margin: 0;\n  font-size: 1.25rem;\n}\n.squad-title[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  background: var(--input-bg);\n  color: var(--text-primary);\n  border: 1px solid var(--accent-gold);\n  border-radius: 4px;\n  padding: 4px 8px;\n  font-size: 1.1rem;\n}\n.edit-btn[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  font-size: 1rem;\n}\n.squad-stats[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  color: var(--text-secondary);\n  font-size: 0.9rem;\n}\n.formation[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  margin-bottom: 20px;\n}\n.formation-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.row-label[_ngcontent-%COMP%] {\n  width: 60px;\n  color: var(--text-muted);\n  font-size: 0.8rem;\n  text-transform: uppercase;\n}\n.slots[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  flex: 1;\n}\n.slot[_ngcontent-%COMP%] {\n  flex: 1;\n  min-height: 60px;\n  background: var(--card-overlay);\n  border: 2px dashed var(--border-secondary);\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s;\n}\n.slot.filled[_ngcontent-%COMP%] {\n  border-style: solid;\n  border-color: var(--border-primary);\n}\n.slot.drop-target[_ngcontent-%COMP%] {\n  border-color: var(--accent-gold);\n  background: rgba(255, 215, 0, 0.1);\n}\n.empty-slot[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 1.5rem;\n}\n.merc-mini[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px;\n  width: 100%;\n  cursor: grab;\n}\n.merc-mini[_ngcontent-%COMP%]:active {\n  cursor: grabbing;\n}\n.avatar[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n.merc-info[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n.name[_ngcontent-%COMP%] {\n  color: var(--text-primary);\n  font-size: 0.75rem;\n  font-weight: bold;\n}\n.level[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 0.65rem;\n}\n.remove-btn[_ngcontent-%COMP%] {\n  background: rgba(154, 76, 76, 0.3);\n  border: none;\n  color: #ff6b6b;\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  cursor: pointer;\n  font-size: 0.7rem;\n}\n.squad-actions[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  margin: 0 0 12px;\n  font-size: 0.9rem;\n}\n.available-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  max-height: 200px;\n  overflow-y: auto;\n}\n.available-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background: var(--card-overlay);\n  padding: 8px 12px;\n  border-radius: 6px;\n  font-size: 0.85rem;\n  color: var(--text-secondary);\n}\n/*# sourceMappingURL=squad-panel.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SquadPanelComponent, { className: "SquadPanelComponent", filePath: "projects\\raid-squad\\src\\app\\components\\squad-panel\\squad-panel.component.ts", lineNumber: 136 });
})();

// projects/raid-squad/src/app/services/recruitment.service.ts
var RecruitmentService = class _RecruitmentService {
  requests = signal(this.generateSampleRequests());
  notifications = signal([]);
  currentUserId = "user-1";
  currentUserName = "Commander";
  allRequests = this.requests.asReadonly();
  allNotifications = this.notifications.asReadonly();
  openRequests = computed(() => this.requests().filter((r) => r.status === "open"));
  myRequests = computed(() => this.requests().filter((r) => r.requesterId === this.currentUserId));
  unreadNotifications = computed(() => this.notifications().filter((n) => !n.read));
  unreadCount = computed(() => this.unreadNotifications().length);
  createRequest(data) {
    const request = __spreadProps(__spreadValues({
      id: crypto.randomUUID(),
      requesterId: this.currentUserId,
      requesterName: this.currentUserName
    }, data), {
      status: "open",
      createdAt: /* @__PURE__ */ new Date(),
      responses: []
    });
    this.requests.update((list) => [request, ...list]);
  }
  respondToRequest(requestId, message, counterOffer) {
    this.requests.update((list) => list.map((r) => {
      if (r.id === requestId) {
        const response = {
          id: crypto.randomUUID(),
          responderId: this.currentUserId,
          responderName: this.currentUserName,
          message,
          counterOffer,
          createdAt: /* @__PURE__ */ new Date(),
          status: "pending"
        };
        return __spreadProps(__spreadValues({}, r), { responses: [...r.responses, response] });
      }
      return r;
    }));
    this.addNotification({
      type: "response",
      title: "New Response",
      message: `Someone responded to your recruitment request`,
      requestId
    });
  }
  acceptResponse(requestId, responseId) {
    this.requests.update((list) => list.map((r) => {
      if (r.id === requestId) {
        return __spreadProps(__spreadValues({}, r), {
          status: "completed",
          responses: r.responses.map((res) => res.id === responseId ? __spreadProps(__spreadValues({}, res), { status: "accepted" }) : __spreadProps(__spreadValues({}, res), { status: "rejected" }))
        });
      }
      return r;
    }));
  }
  cancelRequest(requestId) {
    this.requests.update((list) => list.map((r) => r.id === requestId ? __spreadProps(__spreadValues({}, r), { status: "cancelled" }) : r));
  }
  addNotification(data) {
    const notification = __spreadProps(__spreadValues({
      id: crypto.randomUUID()
    }, data), {
      read: false,
      createdAt: /* @__PURE__ */ new Date()
    });
    this.notifications.update((list) => [notification, ...list]);
  }
  markAsRead(notificationId) {
    this.notifications.update((list) => list.map((n) => n.id === notificationId ? __spreadProps(__spreadValues({}, n), { read: true }) : n));
  }
  markAllAsRead() {
    this.notifications.update((list) => list.map((n) => __spreadProps(__spreadValues({}, n), { read: true })));
  }
  generateSampleRequests() {
    return [
      {
        id: "1",
        requesterId: "user-2",
        requesterName: "WarChief Grom",
        requestType: "seeking",
        desiredRace: "Orc",
        desiredClass: "Warrior",
        levelRange: [50, 80],
        offeredCompensation: 5e3,
        duration: 7,
        status: "open",
        description: "Need a strong Orc warrior for upcoming siege. Must have experience in frontline combat.",
        createdAt: new Date(Date.now() - 36e5),
        responses: []
      },
      {
        id: "2",
        requesterId: "user-3",
        requesterName: "Shadow Master",
        requestType: "offering",
        desiredRace: "Dark Elf",
        desiredClass: "Assassin",
        levelRange: [60, 90],
        offeredCompensation: 3e3,
        duration: 14,
        status: "open",
        description: "Offering elite Dark Elf assassin for hire. Specializes in stealth operations.",
        createdAt: new Date(Date.now() - 72e5),
        responses: []
      },
      {
        id: "3",
        requesterId: "user-4",
        requesterName: "Necro Lord",
        requestType: "seeking",
        desiredRace: "Undead",
        desiredClass: "Necromancer",
        levelRange: [70, 100],
        offeredCompensation: 8e3,
        duration: 30,
        status: "open",
        description: "Seeking powerful necromancer for long-term raid campaign. Top compensation!",
        createdAt: new Date(Date.now() - 864e5),
        responses: []
      }
    ];
  }
  static \u0275fac = function RecruitmentService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RecruitmentService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _RecruitmentService, factory: _RecruitmentService.\u0275fac, providedIn: "root" });
};

// projects/raid-squad/src/app/components/recruitment-board/recruitment-board.component.ts
var _forTrack04 = ($index, $item) => $item.id;
function RecruitmentBoardComponent_Conditional_6_For_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const race_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("value", race_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", ctx_r1.getRaceEmoji(race_r3), " ", race_r3, "");
  }
}
function RecruitmentBoardComponent_Conditional_6_For_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cls_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("value", cls_r4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", ctx_r1.getClassIcon(cls_r4), " ", cls_r4, "");
  }
}
function RecruitmentBoardComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "h3");
    \u0275\u0275text(2, "Create Recruitment Request");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 7)(4, "div", 8)(5, "label");
    \u0275\u0275text(6, "Request Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "select", 9);
    \u0275\u0275twoWayListener("ngModelChange", function RecruitmentBoardComponent_Conditional_6_Template_select_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newRequest.requestType, $event) || (ctx_r1.newRequest.requestType = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(8, "option", 10);
    \u0275\u0275text(9, "\u{1F50D} Seeking Mercenary");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "option", 11);
    \u0275\u0275text(11, "\u{1F4E2} Offering Mercenary");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 8)(13, "label");
    \u0275\u0275text(14, "Desired Race");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "select", 9);
    \u0275\u0275twoWayListener("ngModelChange", function RecruitmentBoardComponent_Conditional_6_Template_select_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newRequest.desiredRace, $event) || (ctx_r1.newRequest.desiredRace = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(16, "option", 12);
    \u0275\u0275text(17, "Any Race");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(18, RecruitmentBoardComponent_Conditional_6_For_19_Template, 2, 3, "option", 13, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 8)(21, "label");
    \u0275\u0275text(22, "Desired Class");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "select", 9);
    \u0275\u0275twoWayListener("ngModelChange", function RecruitmentBoardComponent_Conditional_6_Template_select_ngModelChange_23_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newRequest.desiredClass, $event) || (ctx_r1.newRequest.desiredClass = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(24, "option", 12);
    \u0275\u0275text(25, "Any Class");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(26, RecruitmentBoardComponent_Conditional_6_For_27_Template, 2, 3, "option", 13, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 8)(29, "label");
    \u0275\u0275text(30, "Level Range");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 14)(32, "input", 15);
    \u0275\u0275twoWayListener("ngModelChange", function RecruitmentBoardComponent_Conditional_6_Template_input_ngModelChange_32_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newRequest.levelMin, $event) || (ctx_r1.newRequest.levelMin = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "span");
    \u0275\u0275text(34, "to");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "input", 15);
    \u0275\u0275twoWayListener("ngModelChange", function RecruitmentBoardComponent_Conditional_6_Template_input_ngModelChange_35_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newRequest.levelMax, $event) || (ctx_r1.newRequest.levelMax = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(36, "div", 8)(37, "label");
    \u0275\u0275text(38, "Compensation (Gold)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "input", 16);
    \u0275\u0275twoWayListener("ngModelChange", function RecruitmentBoardComponent_Conditional_6_Template_input_ngModelChange_39_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newRequest.compensation, $event) || (ctx_r1.newRequest.compensation = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div", 8)(41, "label");
    \u0275\u0275text(42, "Duration (Days)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "input", 17);
    \u0275\u0275twoWayListener("ngModelChange", function RecruitmentBoardComponent_Conditional_6_Template_input_ngModelChange_43_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newRequest.duration, $event) || (ctx_r1.newRequest.duration = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(44, "div", 18)(45, "label");
    \u0275\u0275text(46, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "textarea", 19);
    \u0275\u0275twoWayListener("ngModelChange", function RecruitmentBoardComponent_Conditional_6_Template_textarea_ngModelChange_47_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newRequest.description, $event) || (ctx_r1.newRequest.description = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "div", 20)(49, "ui-button", 21);
    \u0275\u0275listener("clicked", function RecruitmentBoardComponent_Conditional_6_Template_ui_button_clicked_49_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showCreateForm.set(false));
    });
    \u0275\u0275text(50, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "ui-button", 2);
    \u0275\u0275listener("clicked", function RecruitmentBoardComponent_Conditional_6_Template_ui_button_clicked_51_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.createRequest());
    });
    \u0275\u0275text(52, "Post Request");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newRequest.requestType);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newRequest.desiredRace);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.races);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newRequest.desiredClass);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.classes);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newRequest.levelMin);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newRequest.levelMax);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newRequest.compensation);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newRequest.duration);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newRequest.description);
  }
}
function RecruitmentBoardComponent_For_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 22)(1, "div", 23)(2, "span", 24);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 25);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 26)(7, "div", 27)(8, "span", 28);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 29)(11, "span", 30);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 30);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 30);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "p", 31);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 32)(20, "span", 33);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span", 34);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "div", 35)(25, "span", 36);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "ui-button", 37);
    \u0275\u0275listener("clicked", function RecruitmentBoardComponent_For_9_Template_ui_button_clicked_27_listener() {
      const request_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openResponseModal(request_r6));
    });
    \u0275\u0275text(28, "Respond");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const request_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap(request_r6.requestType);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(request_r6.requestType);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", request_r6.requestType === "seeking" ? "\u{1F50D} Seeking" : "\u{1F4E2} Offering", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getTimeAgo(request_r6.createdAt));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(request_r6.requesterName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(request_r6.desiredRace === "any" ? "Any Race" : ctx_r1.getRaceEmoji(request_r6.desiredRace) + " " + request_r6.desiredRace);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(request_r6.desiredClass === "any" ? "Any Class" : ctx_r1.getClassIcon(request_r6.desiredClass) + " " + request_r6.desiredClass);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("Lv.", request_r6.levelRange[0], "-", request_r6.levelRange[1], "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(request_r6.description);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u{1F4B0} ", request_r6.offeredCompensation, " Gold");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u{1F4C5} ", request_r6.duration, " days");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u{1F4AC} ", request_r6.responses.length, " responses");
  }
}
function RecruitmentBoardComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275listener("click", function RecruitmentBoardComponent_Conditional_10_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeResponseModal());
    });
    \u0275\u0275elementStart(1, "div", 39);
    \u0275\u0275listener("click", function RecruitmentBoardComponent_Conditional_10_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r7);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "button", 40);
    \u0275\u0275listener("click", function RecruitmentBoardComponent_Conditional_10_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeResponseModal());
    });
    \u0275\u0275text(3, "\u2715");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h3");
    \u0275\u0275text(5, "Respond to Request");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 41)(7, "p")(8, "strong");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 42)(14, "label");
    \u0275\u0275text(15, "Your Message");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "textarea", 43);
    \u0275\u0275twoWayListener("ngModelChange", function RecruitmentBoardComponent_Conditional_10_Template_textarea_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.responseMessage, $event) || (ctx_r1.responseMessage = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "label");
    \u0275\u0275text(18, "Counter Offer (optional)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "input", 44);
    \u0275\u0275twoWayListener("ngModelChange", function RecruitmentBoardComponent_Conditional_10_Template_input_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.counterOffer, $event) || (ctx_r1.counterOffer = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 45)(21, "ui-button", 21);
    \u0275\u0275listener("clicked", function RecruitmentBoardComponent_Conditional_10_Template_ui_button_clicked_21_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeResponseModal());
    });
    \u0275\u0275text(22, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "ui-button", 2);
    \u0275\u0275listener("clicked", function RecruitmentBoardComponent_Conditional_10_Template_ui_button_clicked_23_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submitResponse());
    });
    \u0275\u0275text(24, "Send Response");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.selectedRequest().requesterName);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" is ", ctx_r1.selectedRequest().requestType === "seeking" ? "looking for" : "offering", ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate4("", ctx_r1.selectedRequest().desiredRace, " ", ctx_r1.selectedRequest().desiredClass, " (Lv.", ctx_r1.selectedRequest().levelRange[0], "-", ctx_r1.selectedRequest().levelRange[1], ")");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.responseMessage);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.counterOffer);
  }
}
var RecruitmentBoardComponent = class _RecruitmentBoardComponent {
  recruitmentService = inject(RecruitmentService);
  showCreateForm = signal(false);
  selectedRequest = signal(null);
  responseMessage = "";
  counterOffer = null;
  races = ["Orc", "Goblin", "Warlock", "Troll", "Undead", "Demon", "Dark Elf"];
  classes = ["Warrior", "Assassin", "Mage", "Tank", "Healer", "Berserker", "Necromancer"];
  newRequest = {
    requestType: "seeking",
    desiredRace: "any",
    desiredClass: "any",
    levelMin: 1,
    levelMax: 100,
    compensation: 1e3,
    duration: 7,
    description: ""
  };
  getRaceEmoji(race) {
    return RACE_CONFIG[race]?.emoji || "";
  }
  getClassIcon(cls) {
    return CLASS_CONFIG[cls]?.icon || "";
  }
  getTimeAgo(date) {
    const diff = Date.now() - new Date(date).getTime();
    const hours = Math.floor(diff / 36e5);
    if (hours < 1)
      return "Just now";
    if (hours < 24)
      return `${hours}h ago`;
    return `${Math.floor(hours / 24)}d ago`;
  }
  createRequest() {
    this.recruitmentService.createRequest({
      requestType: this.newRequest.requestType,
      desiredRace: this.newRequest.desiredRace,
      desiredClass: this.newRequest.desiredClass,
      levelRange: [this.newRequest.levelMin, this.newRequest.levelMax],
      offeredCompensation: this.newRequest.compensation,
      duration: this.newRequest.duration,
      description: this.newRequest.description
    });
    this.showCreateForm.set(false);
    this.resetForm();
  }
  openResponseModal(request) {
    this.selectedRequest.set(request);
    this.responseMessage = "";
    this.counterOffer = null;
  }
  closeResponseModal() {
    this.selectedRequest.set(null);
  }
  submitResponse() {
    const request = this.selectedRequest();
    if (request && this.responseMessage.trim()) {
      this.recruitmentService.respondToRequest(request.id, this.responseMessage, this.counterOffer || void 0);
      this.closeResponseModal();
    }
  }
  resetForm() {
    this.newRequest = {
      requestType: "seeking",
      desiredRace: "any",
      desiredClass: "any",
      levelMin: 1,
      levelMax: 100,
      compensation: 1e3,
      duration: 7,
      description: ""
    };
  }
  static \u0275fac = function RecruitmentBoardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RecruitmentBoardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RecruitmentBoardComponent, selectors: [["app-recruitment-board"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 11, vars: 2, consts: [[1, "recruitment-board"], [1, "board-header"], ["variant", "primary", 3, "clicked"], [1, "create-form"], [1, "requests-list"], [1, "request-card", 3, "class"], [1, "modal-overlay"], [1, "form-grid"], [1, "form-group"], [3, "ngModelChange", "ngModel"], ["value", "seeking"], ["value", "offering"], ["value", "any"], [3, "value"], [1, "range-inputs"], ["type", "number", "min", "1", "max", "100", 3, "ngModelChange", "ngModel"], ["type", "number", "min", "0", 3, "ngModelChange", "ngModel"], ["type", "number", "min", "1", 3, "ngModelChange", "ngModel"], [1, "form-group", "full-width"], ["rows", "3", "placeholder", "Describe your requirements...", 3, "ngModelChange", "ngModel"], [1, "form-actions"], ["variant", "outline", 3, "clicked"], [1, "request-card"], [1, "request-header"], [1, "type-badge"], [1, "time"], [1, "request-body"], [1, "requester"], [1, "name"], [1, "requirements"], [1, "tag"], [1, "description"], [1, "offer-info"], [1, "compensation"], [1, "duration"], [1, "request-footer"], [1, "responses"], ["variant", "primary", "size", "sm", 3, "clicked"], [1, "modal-overlay", 3, "click"], [1, "modal-content", 3, "click"], [1, "close-btn", 3, "click"], [1, "request-summary"], [1, "response-form"], ["rows", "4", "placeholder", "Write your response...", 3, "ngModelChange", "ngModel"], ["type", "number", "placeholder", "Leave empty to accept original offer", 3, "ngModelChange", "ngModel"], [1, "modal-actions"]], template: function RecruitmentBoardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h2");
      \u0275\u0275text(3, "\u{1F4CB} Recruitment Board");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "ui-button", 2);
      \u0275\u0275listener("clicked", function RecruitmentBoardComponent_Template_ui_button_clicked_4_listener() {
        return ctx.showCreateForm.set(true);
      });
      \u0275\u0275text(5, "+ Post Request");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(6, RecruitmentBoardComponent_Conditional_6_Template, 53, 8, "div", 3);
      \u0275\u0275elementStart(7, "div", 4);
      \u0275\u0275repeaterCreate(8, RecruitmentBoardComponent_For_9_Template, 29, 15, "div", 5, _forTrack04);
      \u0275\u0275elementEnd();
      \u0275\u0275template(10, RecruitmentBoardComponent_Conditional_10_Template, 25, 8, "div", 6);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275conditional(ctx.showCreateForm() ? 6 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.recruitmentService.openRequests());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.selectedRequest() ? 10 : -1);
    }
  }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, MinValidator, MaxValidator, NgModel, ButtonComponent], styles: ["\n\n.recruitment-board[_ngcontent-%COMP%] {\n  padding: 20px 0;\n}\n.board-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n}\n.board-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: var(--accent-gold);\n  margin: 0;\n}\n.create-form[_ngcontent-%COMP%] {\n  background: var(--bg-card);\n  border: 2px solid var(--border-primary);\n  border-radius: 12px;\n  padding: 24px;\n  margin-bottom: 24px;\n}\n.create-form[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: var(--text-primary);\n  margin: 0 0 20px;\n}\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 16px;\n  margin-bottom: 16px;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.form-group.full-width[_ngcontent-%COMP%] {\n  grid-column: 1 / -1;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font-size: 0.85rem;\n}\n.form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], \n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  background: var(--input-bg);\n  color: var(--text-primary);\n  border: 1px solid var(--border-primary);\n  border-radius: 6px;\n  padding: 10px;\n  font-size: 0.9rem;\n}\n.form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n.range-inputs[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.range-inputs[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 80px;\n}\n.range-inputs[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  margin-top: 16px;\n}\n.requests-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.request-card[_ngcontent-%COMP%] {\n  background: var(--bg-card);\n  border: 2px solid var(--border-primary);\n  border-radius: 12px;\n  padding: 20px;\n}\n.request-card.seeking[_ngcontent-%COMP%] {\n  border-left: 4px solid #5a8ac4;\n}\n.request-card.offering[_ngcontent-%COMP%] {\n  border-left: 4px solid #5ac47a;\n}\n.request-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 12px;\n}\n.type-badge[_ngcontent-%COMP%] {\n  padding: 4px 10px;\n  border-radius: 4px;\n  font-size: 0.8rem;\n  font-weight: bold;\n}\n.type-badge.seeking[_ngcontent-%COMP%] {\n  background: rgba(90, 138, 196, 0.2);\n  color: #5a8ac4;\n}\n.type-badge.offering[_ngcontent-%COMP%] {\n  background: rgba(90, 196, 122, 0.2);\n  color: #5ac47a;\n}\n.time[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 0.8rem;\n}\n.requester[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  color: var(--text-white);\n  font-weight: bold;\n}\n.requirements[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  margin: 12px 0;\n  flex-wrap: wrap;\n}\n.tag[_ngcontent-%COMP%] {\n  background: var(--card-overlay);\n  padding: 4px 10px;\n  border-radius: 4px;\n  font-size: 0.8rem;\n  color: var(--text-secondary);\n}\n.description[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  margin: 12px 0;\n  font-size: 0.9rem;\n}\n.offer-info[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n}\n.compensation[_ngcontent-%COMP%] {\n  color: var(--accent-gold);\n  font-weight: bold;\n}\n.duration[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n}\n.request-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 16px;\n  padding-top: 16px;\n  border-top: 1px solid var(--border-secondary);\n}\n.responses[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 0.85rem;\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.8);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n}\n.modal-content[_ngcontent-%COMP%] {\n  background: var(--bg-secondary);\n  border: 2px solid var(--border-primary);\n  border-radius: 16px;\n  padding: 24px;\n  max-width: 500px;\n  width: 90%;\n  position: relative;\n}\n.close-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 16px;\n  right: 16px;\n  background: transparent;\n  border: none;\n  color: var(--text-muted);\n  font-size: 1.5rem;\n  cursor: pointer;\n}\n.modal-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: var(--accent-gold);\n  margin: 0 0 16px;\n}\n.request-summary[_ngcontent-%COMP%] {\n  background: var(--card-overlay);\n  padding: 12px;\n  border-radius: 8px;\n  margin-bottom: 16px;\n}\n.request-summary[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  margin: 4px 0;\n}\n.response-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.response-form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font-size: 0.85rem;\n}\n.response-form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], \n.response-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  background: var(--input-bg);\n  color: var(--text-primary);\n  border: 1px solid var(--border-primary);\n  border-radius: 6px;\n  padding: 10px;\n}\n.modal-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  margin-top: 20px;\n}\n/*# sourceMappingURL=recruitment-board.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RecruitmentBoardComponent, { className: "RecruitmentBoardComponent", filePath: "projects\\raid-squad\\src\\app\\components\\recruitment-board\\recruitment-board.component.ts", lineNumber: 204 });
})();

// projects/raid-squad/src/app/components/notification-bell/notification-bell.component.ts
var _forTrack05 = ($index, $item) => $item.id;
function NotificationBellComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 2);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.recruitmentService.unreadCount());
  }
}
function NotificationBellComponent_Conditional_4_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 8);
    \u0275\u0275listener("click", function NotificationBellComponent_Conditional_4_Conditional_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.markAllRead());
    });
    \u0275\u0275text(1, "Mark all read");
    \u0275\u0275elementEnd();
  }
}
function NotificationBellComponent_Conditional_4_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275text(1, "No notifications yet");
    \u0275\u0275elementEnd();
  }
}
function NotificationBellComponent_Conditional_4_Conditional_7_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275listener("click", function NotificationBellComponent_Conditional_4_Conditional_7_For_1_Template_div_click_0_listener() {
      const notif_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.markRead(notif_r4.id));
    });
    \u0275\u0275elementStart(1, "span", 11);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 12)(4, "span", 13);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 14);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 15);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const notif_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("unread", !notif_r4.read);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getIcon(notif_r4.type));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(notif_r4.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(notif_r4.message);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getTimeAgo(notif_r4.createdAt));
  }
}
function NotificationBellComponent_Conditional_4_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, NotificationBellComponent_Conditional_4_Conditional_7_For_1_Template, 10, 6, "div", 9, _forTrack05);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275repeater(ctx_r0.recruitmentService.allNotifications());
  }
}
function NotificationBellComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "span");
    \u0275\u0275text(3, "Notifications");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, NotificationBellComponent_Conditional_4_Conditional_4_Template, 2, 0, "button", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 6);
    \u0275\u0275template(6, NotificationBellComponent_Conditional_4_Conditional_6_Template, 2, 0, "div", 7)(7, NotificationBellComponent_Conditional_4_Conditional_7_Template, 2, 0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r0.recruitmentService.unreadCount() > 0 ? 4 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.recruitmentService.allNotifications().length === 0 ? 6 : 7);
  }
}
var NotificationBellComponent = class _NotificationBellComponent {
  recruitmentService = inject(RecruitmentService);
  isOpen = signal(false);
  toggleDropdown() {
    this.isOpen.update((v) => !v);
  }
  markRead(id) {
    this.recruitmentService.markAsRead(id);
  }
  markAllRead() {
    this.recruitmentService.markAllAsRead();
  }
  getIcon(type) {
    const icons = {
      "response": "\u{1F4AC}",
      "accepted": "\u2705",
      "rejected": "\u274C",
      "new-match": "\u{1F3AF}"
    };
    return icons[type] || "\u{1F4E2}";
  }
  getTimeAgo(date) {
    const diff = Date.now() - new Date(date).getTime();
    const mins = Math.floor(diff / 6e4);
    if (mins < 1)
      return "Just now";
    if (mins < 60)
      return `${mins}m ago`;
    const hours = Math.floor(mins / 60);
    if (hours < 24)
      return `${hours}h ago`;
    return `${Math.floor(hours / 24)}d ago`;
  }
  static \u0275fac = function NotificationBellComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NotificationBellComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NotificationBellComponent, selectors: [["app-notification-bell"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 5, vars: 2, consts: [[1, "notification-wrapper"], [1, "bell-btn", 3, "click"], [1, "badge"], [1, "dropdown"], [1, "dropdown-header"], [1, "mark-read"], [1, "notification-list"], [1, "empty"], [1, "mark-read", 3, "click"], [1, "notification-item", 3, "unread"], [1, "notification-item", 3, "click"], [1, "icon"], [1, "content"], [1, "title"], [1, "message"], [1, "time"]], template: function NotificationBellComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "button", 1);
      \u0275\u0275listener("click", function NotificationBellComponent_Template_button_click_1_listener() {
        return ctx.toggleDropdown();
      });
      \u0275\u0275text(2, " \u{1F514} ");
      \u0275\u0275template(3, NotificationBellComponent_Conditional_3_Template, 2, 1, "span", 2);
      \u0275\u0275elementEnd();
      \u0275\u0275template(4, NotificationBellComponent_Conditional_4_Template, 8, 2, "div", 3);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.recruitmentService.unreadCount() > 0 ? 3 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isOpen() ? 4 : -1);
    }
  }, dependencies: [CommonModule], styles: ["\n\n.notification-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n}\n.bell-btn[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 2px solid var(--border-primary);\n  border-radius: 50%;\n  width: 44px;\n  height: 44px;\n  font-size: 1.25rem;\n  cursor: pointer;\n  position: relative;\n  transition: all 0.2s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  line-height: 1;\n}\n.bell-btn[_ngcontent-%COMP%]:hover {\n  border-color: var(--accent-gold);\n}\n.badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -4px;\n  right: -4px;\n  background: #c45a5a;\n  color: #fff;\n  font-size: 0.7rem;\n  font-weight: bold;\n  min-width: 18px;\n  height: 18px;\n  border-radius: 9px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100%;\n  right: 0;\n  margin-top: 8px;\n  background: var(--bg-secondary);\n  border: 2px solid var(--border-primary);\n  border-radius: 12px;\n  width: 320px;\n  max-height: 400px;\n  overflow: hidden;\n  z-index: 100;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);\n}\n.dropdown-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 16px;\n  border-bottom: 1px solid var(--border-secondary);\n  color: var(--text-primary);\n  font-weight: bold;\n}\n.mark-read[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  color: var(--accent-gold);\n  font-size: 0.8rem;\n  cursor: pointer;\n}\n.notification-list[_ngcontent-%COMP%] {\n  max-height: 340px;\n  overflow-y: auto;\n}\n.empty[_ngcontent-%COMP%] {\n  padding: 40px 20px;\n  text-align: center;\n  color: var(--text-muted);\n}\n.notification-item[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  padding: 12px 16px;\n  border-bottom: 1px solid var(--border-secondary);\n  cursor: pointer;\n  transition: background 0.2s;\n}\n.notification-item[_ngcontent-%COMP%]:hover {\n  background: var(--card-overlay);\n}\n.notification-item.unread[_ngcontent-%COMP%] {\n  background: rgba(255, 215, 0, 0.05);\n}\n.icon[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n.content[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.title[_ngcontent-%COMP%] {\n  color: var(--text-primary);\n  font-weight: bold;\n  font-size: 0.85rem;\n}\n.message[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font-size: 0.8rem;\n}\n.time[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 0.7rem;\n}\n/*# sourceMappingURL=notification-bell.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NotificationBellComponent, { className: "NotificationBellComponent", filePath: "projects\\raid-squad\\src\\app\\components\\notification-bell\\notification-bell.component.ts", lineNumber: 97 });
})();

// projects/raid-squad/src/app/models/mission.model.ts
var DIFFICULTY_CONFIG = {
  easy: { color: "#5ac47a", icon: "\u2B50", multiplier: 1 },
  medium: { color: "#c4a35a", icon: "\u2B50\u2B50", multiplier: 1.5 },
  hard: { color: "#c45a5a", icon: "\u2B50\u2B50\u2B50", multiplier: 2 },
  legendary: { color: "#a35ac4", icon: "\u{1F451}", multiplier: 3 }
};
var MISSION_TYPE_CONFIG = {
  raid: { icon: "\u2694\uFE0F", label: "Raid" },
  escort: { icon: "\u{1F6E1}\uFE0F", label: "Escort" },
  assassination: { icon: "\u{1F5E1}\uFE0F", label: "Assassination" },
  defense: { icon: "\u{1F3F0}", label: "Defense" },
  exploration: { icon: "\u{1F5FA}\uFE0F", label: "Exploration" }
};

// projects/raid-squad/src/app/models/economy.model.ts
var CURRENCY_CONFIG = {
  gold: { icon: "\u{1F4B0}", color: "#ffd700", label: "Gold" },
  gems: { icon: "\u{1F48E}", color: "#5ac4c4", label: "Gems" },
  souls: { icon: "\u{1F47B}", color: "#a35ac4", label: "Souls" }
};
var DEFAULT_CAPS = {
  gold: 1e5,
  gems: 1e3,
  souls: 500
};

// projects/raid-squad/src/app/services/economy.service.ts
var EconomyService = class _EconomyService {
  treasury = signal({
    gold: { type: "gold", amount: 5e3, cap: DEFAULT_CAPS.gold },
    gems: { type: "gems", amount: 50, cap: DEFAULT_CAPS.gems },
    souls: { type: "souls", amount: 10, cap: DEFAULT_CAPS.souls },
    totalEarned: 5e3,
    totalSpent: 0
  });
  transactions = signal([
    {
      id: "1",
      type: "reward",
      currency: "gold",
      amount: 5e3,
      description: "Starting funds",
      timestamp: /* @__PURE__ */ new Date(),
      balanceAfter: 5e3
    }
  ]);
  tradeOffers = signal(this.generateSampleTrades());
  currentTreasury = this.treasury.asReadonly();
  allTransactions = this.transactions.asReadonly();
  allTradeOffers = this.tradeOffers.asReadonly();
  openTrades = computed(() => this.tradeOffers().filter((t) => t.status === "open"));
  recentTransactions = computed(() => this.transactions().slice(0, 20));
  goldBalance = computed(() => this.treasury().gold.amount);
  gemsBalance = computed(() => this.treasury().gems.amount);
  soulsBalance = computed(() => this.treasury().souls.amount);
  getBalance(currency) {
    return this.treasury()[currency].amount;
  }
  canAfford(currency, amount) {
    return this.treasury()[currency].amount >= amount;
  }
  earn(currency, amount, description) {
    const current = this.treasury()[currency];
    const newAmount = Math.min(current.amount + amount, current.cap);
    const actualEarned = newAmount - current.amount;
    if (actualEarned <= 0)
      return false;
    this.treasury.update((t) => __spreadProps(__spreadValues({}, t), {
      [currency]: __spreadProps(__spreadValues({}, t[currency]), { amount: newAmount }),
      totalEarned: t.totalEarned + actualEarned
    }));
    this.addTransaction("earn", currency, actualEarned, description);
    return true;
  }
  spend(currency, amount, description) {
    if (!this.canAfford(currency, amount))
      return false;
    const newAmount = this.treasury()[currency].amount - amount;
    this.treasury.update((t) => __spreadProps(__spreadValues({}, t), {
      [currency]: __spreadProps(__spreadValues({}, t[currency]), { amount: newAmount }),
      totalSpent: t.totalSpent + amount
    }));
    this.addTransaction("spend", currency, -amount, description);
    return true;
  }
  addTransaction(type, currency, amount, description) {
    const transaction = {
      id: crypto.randomUUID(),
      type,
      currency,
      amount,
      description,
      timestamp: /* @__PURE__ */ new Date(),
      balanceAfter: this.treasury()[currency].amount
    };
    this.transactions.update((list) => [transaction, ...list]);
  }
  // Trading
  createTradeOffer(data) {
    if (!this.canAfford(data.offerCurrency, data.offerAmount))
      return false;
    this.spend(data.offerCurrency, data.offerAmount, "Trade offer created");
    const offer = {
      id: crypto.randomUUID(),
      sellerId: "user-1",
      sellerName: "You",
      offerType: "currency",
      offerCurrency: data.offerCurrency,
      offerAmount: data.offerAmount,
      askingCurrency: data.askingCurrency,
      askingAmount: data.askingAmount,
      status: "open",
      createdAt: /* @__PURE__ */ new Date()
    };
    this.tradeOffers.update((list) => [offer, ...list]);
    return true;
  }
  acceptTrade(tradeId) {
    const trade = this.tradeOffers().find((t) => t.id === tradeId);
    if (!trade || trade.status !== "open")
      return false;
    if (trade.sellerId === "user-1")
      return false;
    if (!this.canAfford(trade.askingCurrency, trade.askingAmount))
      return false;
    this.spend(trade.askingCurrency, trade.askingAmount, `Trade with ${trade.sellerName}`);
    if (trade.offerCurrency && trade.offerAmount) {
      this.earn(trade.offerCurrency, trade.offerAmount, `Trade with ${trade.sellerName}`);
    }
    this.tradeOffers.update((list) => list.map((t) => t.id === tradeId ? __spreadProps(__spreadValues({}, t), { status: "completed" }) : t));
    return true;
  }
  cancelTrade(tradeId) {
    const trade = this.tradeOffers().find((t) => t.id === tradeId);
    if (!trade || trade.status !== "open" || trade.sellerId !== "user-1")
      return false;
    if (trade.offerCurrency && trade.offerAmount) {
      this.earn(trade.offerCurrency, trade.offerAmount, "Trade cancelled - refund");
    }
    this.tradeOffers.update((list) => list.map((t) => t.id === tradeId ? __spreadProps(__spreadValues({}, t), { status: "cancelled" }) : t));
    return true;
  }
  generateSampleTrades() {
    return [
      {
        id: "t1",
        sellerId: "npc-1",
        sellerName: "Dark Merchant",
        offerType: "currency",
        offerCurrency: "gems",
        offerAmount: 10,
        askingCurrency: "gold",
        askingAmount: 2e3,
        status: "open",
        createdAt: new Date(Date.now() - 36e5)
      },
      {
        id: "t2",
        sellerId: "npc-2",
        sellerName: "Soul Trader",
        offerType: "currency",
        offerCurrency: "souls",
        offerAmount: 5,
        askingCurrency: "gems",
        askingAmount: 15,
        status: "open",
        createdAt: new Date(Date.now() - 72e5)
      },
      {
        id: "t3",
        sellerId: "npc-3",
        sellerName: "Gold Baron",
        offerType: "currency",
        offerCurrency: "gold",
        offerAmount: 5e3,
        askingCurrency: "souls",
        askingAmount: 20,
        status: "open",
        createdAt: new Date(Date.now() - 864e5)
      }
    ];
  }
  static \u0275fac = function EconomyService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EconomyService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _EconomyService, factory: _EconomyService.\u0275fac, providedIn: "root" });
};

// projects/raid-squad/src/app/services/mission.service.ts
var MissionService = class _MissionService {
  squadService = inject(SquadService);
  mercenaryService = inject(MercenaryService);
  economyService = inject(EconomyService);
  missions = signal(this.generateMissions());
  activeMissions = signal([]);
  missionResults = signal([]);
  totalGoldEarned = signal(0);
  allMissions = this.missions.asReadonly();
  allActiveMissions = this.activeMissions.asReadonly();
  allResults = this.missionResults.asReadonly();
  goldEarned = this.totalGoldEarned.asReadonly();
  availableMissions = computed(() => this.missions().filter((m) => m.status === "available"));
  inProgressMissions = computed(() => this.activeMissions().map((am) => __spreadProps(__spreadValues({}, am), {
    mission: this.missions().find((m) => m.id === am.missionId),
    timeRemaining: this.getTimeRemaining(am.endsAt),
    progress: this.getProgress(am)
  })));
  completedMissionsCount = computed(() => this.missionResults().filter((r) => r.success).length);
  calculateSuccessProbability(missionId) {
    const mission = this.missions().find((m) => m.id === missionId);
    if (!mission)
      return 0;
    const squadMembers = this.squadService.squadMembers();
    if (squadMembers.length < mission.requirements.minSquadSize)
      return 0;
    let probability = 50;
    const sizeBonus = Math.min((squadMembers.length - mission.requirements.minSquadSize) * 5, 20);
    probability += sizeBonus;
    const totalLevel = squadMembers.reduce((sum, m) => sum + (m.mercenary?.level || 0), 0);
    if (totalLevel >= mission.requirements.minTotalLevel) {
      probability += 15;
    } else {
      probability -= 20;
    }
    const { recommendedRaces, recommendedClasses } = mission.requirements;
    if (recommendedRaces?.length) {
      const matchingRaces = squadMembers.filter((m) => recommendedRaces.includes(m.mercenary?.race)).length;
      probability += matchingRaces * 3;
    }
    if (recommendedClasses?.length) {
      const matchingClasses = squadMembers.filter((m) => recommendedClasses.includes(m.mercenary?.class)).length;
      probability += matchingClasses * 3;
    }
    if (mission.requirements.minStats) {
      const avgStats = this.calculateAverageStats(squadMembers);
      const { strength, agility, magic, defense } = mission.requirements.minStats;
      if (strength && avgStats.strength >= strength)
        probability += 5;
      if (agility && avgStats.agility >= agility)
        probability += 5;
      if (magic && avgStats.magic >= magic)
        probability += 5;
      if (defense && avgStats.defense >= defense)
        probability += 5;
    }
    const difficultyPenalty = { easy: 0, medium: 10, hard: 25, legendary: 40 };
    probability -= difficultyPenalty[mission.difficulty];
    return Math.max(5, Math.min(95, probability));
  }
  calculateAverageStats(squadMembers) {
    if (squadMembers.length === 0)
      return { strength: 0, agility: 0, magic: 0, defense: 0 };
    const totals = squadMembers.reduce((acc, m) => ({
      strength: acc.strength + (m.mercenary?.stats.strength || 0),
      agility: acc.agility + (m.mercenary?.stats.agility || 0),
      magic: acc.magic + (m.mercenary?.stats.magic || 0),
      defense: acc.defense + (m.mercenary?.stats.defense || 0)
    }), { strength: 0, agility: 0, magic: 0, defense: 0 });
    return {
      strength: Math.round(totals.strength / squadMembers.length),
      agility: Math.round(totals.agility / squadMembers.length),
      magic: Math.round(totals.magic / squadMembers.length),
      defense: Math.round(totals.defense / squadMembers.length)
    };
  }
  startMission(missionId) {
    const mission = this.missions().find((m) => m.id === missionId);
    if (!mission || mission.status !== "available")
      return false;
    const squadMembers = this.squadService.squadMembers();
    if (squadMembers.length < mission.requirements.minSquadSize)
      return false;
    const probability = this.calculateSuccessProbability(missionId);
    const now = /* @__PURE__ */ new Date();
    const endsAt = new Date(now.getTime() + mission.duration * 6e4);
    const activeMission = {
      id: crypto.randomUUID(),
      missionId,
      squadMemberIds: squadMembers.map((m) => m.mercenary.id),
      startedAt: now,
      endsAt,
      successProbability: probability
    };
    this.activeMissions.update((list) => [...list, activeMission]);
    this.missions.update((list) => list.map((m) => m.id === missionId ? __spreadProps(__spreadValues({}, m), { status: "in-progress" }) : m));
    squadMembers.forEach((m) => {
      if (m.mercenary) {
        this.mercenaryService.setOnMission(m.mercenary.id);
      }
    });
    setTimeout(() => this.completeMission(activeMission.id), mission.duration * 6e4);
    return true;
  }
  completeMission(activeMissionId) {
    const activeMission = this.activeMissions().find((am) => am.id === activeMissionId);
    if (!activeMission)
      return;
    const mission = this.missions().find((m) => m.id === activeMission.missionId);
    if (!mission)
      return;
    const success = Math.random() * 100 < activeMission.successProbability;
    const multiplier = DIFFICULTY_CONFIG[mission.difficulty].multiplier;
    const result = {
      missionId: mission.id,
      success,
      goldEarned: success ? Math.round(mission.rewards.gold * multiplier) : Math.round(mission.rewards.gold * 0.1),
      experienceEarned: success ? mission.rewards.experience : Math.round(mission.rewards.experience * 0.2),
      casualties: success ? [] : this.calculateCasualties(activeMission.squadMemberIds),
      bonusItems: success && mission.rewards.bonusItems ? mission.rewards.bonusItems : []
    };
    this.missionResults.update((list) => [result, ...list]);
    this.totalGoldEarned.update((g) => g + result.goldEarned);
    this.economyService.earn("gold", result.goldEarned, `${success ? "Completed" : "Failed"}: ${mission.name}`);
    if (success && mission.difficulty === "legendary") {
      this.economyService.earn("gems", 10, `Legendary bonus: ${mission.name}`);
    }
    this.missions.update((list) => list.map((m) => m.id === mission.id ? __spreadProps(__spreadValues({}, m), { status: "available" }) : m));
    this.activeMissions.update((list) => list.filter((am) => am.id !== activeMissionId));
    activeMission.squadMemberIds.forEach((id) => {
      this.mercenaryService.returnFromMission(id);
    });
  }
  calculateCasualties(memberIds) {
    return memberIds.filter(() => Math.random() < 0.2);
  }
  getTimeRemaining(endsAt) {
    const diff = new Date(endsAt).getTime() - Date.now();
    if (diff <= 0)
      return "Completing...";
    const mins = Math.floor(diff / 6e4);
    const secs = Math.floor(diff % 6e4 / 1e3);
    return `${mins}m ${secs}s`;
  }
  getProgress(am) {
    const total = new Date(am.endsAt).getTime() - new Date(am.startedAt).getTime();
    const elapsed = Date.now() - new Date(am.startedAt).getTime();
    return Math.min(100, Math.round(elapsed / total * 100));
  }
  getMissionById(id) {
    return this.missions().find((m) => m.id === id);
  }
  generateMissions() {
    return [
      {
        id: "1",
        name: "Goblin Cave Raid",
        description: "Clear out a goblin-infested cave and claim their treasure.",
        type: "raid",
        difficulty: "easy",
        requirements: { minSquadSize: 2, minTotalLevel: 20, recommendedClasses: ["Warrior", "Tank"] },
        rewards: { gold: 500, experience: 100 },
        duration: 1,
        cooldown: 5,
        status: "available"
      },
      {
        id: "2",
        name: "Merchant Escort",
        description: "Safely escort a merchant caravan through bandit territory.",
        type: "escort",
        difficulty: "easy",
        requirements: { minSquadSize: 3, minTotalLevel: 30 },
        rewards: { gold: 750, experience: 150 },
        duration: 2,
        cooldown: 10,
        status: "available"
      },
      {
        id: "3",
        name: "Assassinate the Warlord",
        description: "Infiltrate the enemy camp and eliminate their leader.",
        type: "assassination",
        difficulty: "medium",
        requirements: { minSquadSize: 2, minTotalLevel: 80, recommendedClasses: ["Assassin", "Mage"] },
        rewards: { gold: 2e3, experience: 400, bonusItems: ["Shadow Dagger"] },
        duration: 3,
        cooldown: 30,
        status: "available"
      },
      {
        id: "4",
        name: "Defend the Outpost",
        description: "Hold the northern outpost against waves of undead.",
        type: "defense",
        difficulty: "medium",
        requirements: { minSquadSize: 4, minTotalLevel: 120, recommendedRaces: ["Orc", "Troll"], minStats: { defense: 50 } },
        rewards: { gold: 3e3, experience: 600 },
        duration: 5,
        cooldown: 60,
        status: "available"
      },
      {
        id: "5",
        name: "Dragon's Lair",
        description: "Venture into the dragon's lair and steal from its hoard.",
        type: "raid",
        difficulty: "hard",
        requirements: { minSquadSize: 5, minTotalLevel: 200, minStats: { strength: 60, defense: 60 } },
        rewards: { gold: 8e3, experience: 1500, bonusItems: ["Dragon Scale Armor", "Fire Ruby"] },
        duration: 10,
        cooldown: 120,
        status: "available"
      },
      {
        id: "6",
        name: "The Demon Gate",
        description: "Close the demon portal before the invasion begins.",
        type: "defense",
        difficulty: "legendary",
        requirements: { minSquadSize: 6, minTotalLevel: 350, recommendedClasses: ["Mage", "Healer", "Necromancer"], minStats: { magic: 70 } },
        rewards: { gold: 2e4, experience: 5e3, bonusItems: ["Demon Lord's Crown", "Void Crystal", "Legendary Weapon"] },
        duration: 15,
        cooldown: 240,
        status: "available"
      }
    ];
  }
  static \u0275fac = function MissionService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MissionService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _MissionService, factory: _MissionService.\u0275fac, providedIn: "root" });
};

// projects/raid-squad/src/app/components/mission-board/mission-board.component.ts
var _forTrack06 = ($index, $item) => $item.id;
var _c0 = () => [];
function MissionBoardComponent_Conditional_9_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 10)(2, "span", 11);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 12)(5, "span", 13);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 14);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 15);
    \u0275\u0275element(10, "div", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 17);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const active_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.getMissionTypeIcon(active_r1.mission.type));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(active_r1.mission.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(active_r1.timeRemaining);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", active_r1.progress, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", active_r1.successProbability, "% success");
  }
}
function MissionBoardComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "h3");
    \u0275\u0275text(2, "\u23F3 Active Missions");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, MissionBoardComponent_Conditional_9_For_4_Template, 13, 6, "div", 9, _forTrack06);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.missionService.inProgressMissions());
  }
}
function MissionBoardComponent_For_12_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const mission_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u{1F381} +", mission_r4.rewards.bonusItems.length, " items");
  }
}
function MissionBoardComponent_For_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275listener("click", function MissionBoardComponent_For_12_Template_div_click_0_listener() {
      const mission_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectMission(mission_r4));
    });
    \u0275\u0275elementStart(1, "div", 19)(2, "span", 20);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 21);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "titlecase");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "h4");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 22);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 23)(12, "span");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 24)(19, "span", 25);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span", 26);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275template(23, MissionBoardComponent_For_12_Conditional_23_Template, 2, 1, "span", 27);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const mission_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap(mission_r4.difficulty);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", ctx_r1.getMissionTypeIcon(mission_r4.type), " ", ctx_r1.getMissionTypeLabel(mission_r4.type), "");
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", ctx_r1.getDifficultyColor(mission_r4.difficulty));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r1.getDifficultyIcon(mission_r4.difficulty), " ", \u0275\u0275pipeBind1(6, 16, mission_r4.difficulty), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(mission_r4.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(mission_r4.description);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u{1F465} Min ", mission_r4.requirements.minSquadSize, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u{1F4CA} Lv.", mission_r4.requirements.minTotalLevel, "+");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u23F1\uFE0F ", mission_r4.duration, "m");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u{1F4B0} ", mission_r4.rewards.gold, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u2B50 ", mission_r4.rewards.experience, " XP");
    \u0275\u0275advance();
    \u0275\u0275conditional(mission_r4.rewards.bonusItems && mission_r4.rewards.bonusItems.length > 0 ? 23 : -1);
  }
}
function MissionBoardComponent_Conditional_13_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Recommended Races: ", (tmp_2_0 = ctx_r1.selectedMission().requirements.recommendedRaces) == null ? null : tmp_2_0.join(", "), "");
  }
}
function MissionBoardComponent_Conditional_13_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Recommended Classes: ", (tmp_2_0 = ctx_r1.selectedMission().requirements.recommendedClasses) == null ? null : tmp_2_0.join(", "), "");
  }
}
function MissionBoardComponent_Conditional_13_For_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u{1F381} ", item_r6, "");
  }
}
function MissionBoardComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275listener("click", function MissionBoardComponent_Conditional_13_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeBriefing());
    });
    \u0275\u0275elementStart(1, "div", 29);
    \u0275\u0275listener("click", function MissionBoardComponent_Conditional_13_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "button", 30);
    \u0275\u0275listener("click", function MissionBoardComponent_Conditional_13_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeBriefing());
    });
    \u0275\u0275text(3, "\u2715");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 31)(5, "span", 32);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div")(8, "h3");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 33);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "titlecase");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "p", 34);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 35)(16, "h4");
    \u0275\u0275text(17, "\u{1F4CB} Requirements");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "ul")(19, "li");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "li");
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275template(23, MissionBoardComponent_Conditional_13_Conditional_23_Template, 2, 1, "li")(24, MissionBoardComponent_Conditional_13_Conditional_24_Template, 2, 1, "li");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 35)(26, "h4");
    \u0275\u0275text(27, "\u{1F381} Rewards");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 36)(29, "span", 37);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "span", 38);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(33, MissionBoardComponent_Conditional_13_For_34_Template, 2, 1, "span", 39, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 40)(36, "h4");
    \u0275\u0275text(37, "\u2694\uFE0F Your Squad");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "div", 41);
    \u0275\u0275text(39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div", 42)(41, "span", 43);
    \u0275\u0275text(42, "Success Probability:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "span", 44);
    \u0275\u0275text(44);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(45, "div", 45)(46, "ui-button", 46);
    \u0275\u0275listener("clicked", function MissionBoardComponent_Conditional_13_Template_ui_button_clicked_46_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeBriefing());
    });
    \u0275\u0275text(47, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "ui-button", 47);
    \u0275\u0275listener("clicked", function MissionBoardComponent_Conditional_13_Template_ui_button_clicked_48_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.startMission());
    });
    \u0275\u0275text(49, " \u2694\uFE0F Deploy Squad ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_8_0;
    let tmp_9_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.getMissionTypeIcon(ctx_r1.selectedMission().type));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.selectedMission().name);
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", ctx_r1.getDifficultyColor(ctx_r1.selectedMission().difficulty));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r1.getDifficultyIcon(ctx_r1.selectedMission().difficulty), " ", \u0275\u0275pipeBind1(12, 24, ctx_r1.selectedMission().difficulty), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.selectedMission().description);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("Minimum Squad Size: ", ctx_r1.selectedMission().requirements.minSquadSize, " members");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Minimum Total Level: ", ctx_r1.selectedMission().requirements.minTotalLevel, "");
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_8_0 = ctx_r1.selectedMission().requirements.recommendedRaces) == null ? null : tmp_8_0.length) ? 23 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_9_0 = ctx_r1.selectedMission().requirements.recommendedClasses) == null ? null : tmp_9_0.length) ? 24 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("\u{1F4B0} ", ctx_r1.selectedMission().rewards.gold, " Gold");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u2B50 ", ctx_r1.selectedMission().rewards.experience, " XP");
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.selectedMission().rewards.bonusItems || \u0275\u0275pureFunction0(26, _c0));
    \u0275\u0275advance(5);
    \u0275\u0275classProp("pass", ctx_r1.squadService.squadSize() >= ctx_r1.selectedMission().requirements.minSquadSize);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3(" ", ctx_r1.squadService.squadSize() >= ctx_r1.selectedMission().requirements.minSquadSize ? "\u2705" : "\u274C", " Squad Size: ", ctx_r1.squadService.squadSize(), "/", ctx_r1.selectedMission().requirements.minSquadSize, " ");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("high", ctx_r1.successProbability() >= 70)("low", ctx_r1.successProbability() < 40);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.successProbability(), "% ");
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", !ctx_r1.canStartMission());
  }
}
function MissionBoardComponent_Conditional_14_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52)(1, "span", 43);
    \u0275\u0275text(2, "Items Found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 44);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("\u{1F381} ", ctx_r1.latestResult().bonusItems.join(", "), "");
  }
}
function MissionBoardComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275listener("click", function MissionBoardComponent_Conditional_14_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeResult());
    });
    \u0275\u0275elementStart(1, "div", 48);
    \u0275\u0275listener("click", function MissionBoardComponent_Conditional_14_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r7);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 49)(3, "span", 50);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h3");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 51)(8, "div", 52)(9, "span", 43);
    \u0275\u0275text(10, "Gold Earned");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 44);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 52)(14, "span", 43);
    \u0275\u0275text(15, "Experience");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 44);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(18, MissionBoardComponent_Conditional_14_Conditional_18_Template, 5, 1, "div", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "ui-button", 53);
    \u0275\u0275listener("clicked", function MissionBoardComponent_Conditional_14_Template_ui_button_clicked_19_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeResult());
    });
    \u0275\u0275text(20, "Continue");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.latestResult().success ? "success" : "failure");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.latestResult().success ? "\u{1F3C6}" : "\u{1F480}");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.latestResult().success ? "Mission Complete!" : "Mission Failed");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("\u{1F4B0} ", ctx_r1.latestResult().goldEarned, "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("\u2B50 ", ctx_r1.latestResult().experienceEarned, "");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.latestResult().bonusItems.length > 0 ? 18 : -1);
  }
}
var MissionBoardComponent = class _MissionBoardComponent {
  missionService = inject(MissionService);
  squadService = inject(SquadService);
  selectedMission = signal(null);
  latestResult = signal(null);
  successProbability = signal(0);
  selectMission(mission) {
    this.selectedMission.set(mission);
    this.successProbability.set(this.missionService.calculateSuccessProbability(mission.id));
  }
  closeBriefing() {
    this.selectedMission.set(null);
  }
  canStartMission() {
    const mission = this.selectedMission();
    if (!mission)
      return false;
    return this.squadService.squadSize() >= mission.requirements.minSquadSize;
  }
  startMission() {
    const mission = this.selectedMission();
    if (mission && this.missionService.startMission(mission.id)) {
      this.closeBriefing();
    }
  }
  closeResult() {
    this.latestResult.set(null);
  }
  getMissionTypeIcon(type) {
    return MISSION_TYPE_CONFIG[type]?.icon || "\u{1F4DC}";
  }
  getMissionTypeLabel(type) {
    return MISSION_TYPE_CONFIG[type]?.label || type;
  }
  getDifficultyColor(difficulty) {
    return DIFFICULTY_CONFIG[difficulty]?.color || "#666";
  }
  getDifficultyIcon(difficulty) {
    return DIFFICULTY_CONFIG[difficulty]?.icon || "\u2B50";
  }
  static \u0275fac = function MissionBoardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MissionBoardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MissionBoardComponent, selectors: [["app-mission-board"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 15, vars: 5, consts: [[1, "mission-board"], [1, "board-header"], [1, "stats"], [1, "stat"], [1, "stat", "gold"], [1, "active-missions"], [1, "missions-grid"], [1, "mission-card", 3, "class"], [1, "modal-overlay"], [1, "active-mission-card"], [1, "mission-info"], [1, "type"], [1, "details"], [1, "name"], [1, "time"], [1, "progress-bar"], [1, "progress-fill"], [1, "probability"], [1, "mission-card", 3, "click"], [1, "card-header"], [1, "type-badge"], [1, "difficulty-badge"], [1, "description"], [1, "requirements"], [1, "rewards"], [1, "gold"], [1, "xp"], [1, "items"], [1, "modal-overlay", 3, "click"], [1, "modal-content", 3, "click"], [1, "close-btn", 3, "click"], [1, "briefing-header"], [1, "type-icon"], [1, "difficulty"], [1, "briefing-desc"], [1, "briefing-section"], [1, "reward-list"], [1, "reward", "gold"], [1, "reward", "xp"], [1, "reward", "item"], [1, "squad-check"], [1, "check-item"], [1, "success-probability"], [1, "label"], [1, "value"], [1, "briefing-actions"], ["variant", "outline", 3, "clicked"], ["variant", "primary", 3, "clicked", "disabled"], [1, "modal-content", "result-modal", 3, "click"], [1, "result-header"], [1, "result-icon"], [1, "result-rewards"], [1, "reward-item"], ["variant", "primary", 3, "clicked"]], template: function MissionBoardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h2");
      \u0275\u0275text(3, "\u{1F5FA}\uFE0F Mission Board");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 2)(5, "span", 3);
      \u0275\u0275text(6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "span", 4);
      \u0275\u0275text(8);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(9, MissionBoardComponent_Conditional_9_Template, 5, 0, "div", 5);
      \u0275\u0275elementStart(10, "div", 6);
      \u0275\u0275repeaterCreate(11, MissionBoardComponent_For_12_Template, 24, 18, "div", 7, _forTrack06);
      \u0275\u0275elementEnd();
      \u0275\u0275template(13, MissionBoardComponent_Conditional_13_Template, 50, 27, "div", 8)(14, MissionBoardComponent_Conditional_14_Template, 21, 7, "div", 8);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1("\u2705 ", ctx.missionService.completedMissionsCount(), " Completed");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("\u{1F4B0} ", ctx.missionService.goldEarned(), " Gold Earned");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.missionService.inProgressMissions().length > 0 ? 9 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.missionService.availableMissions());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.selectedMission() ? 13 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.latestResult() ? 14 : -1);
    }
  }, dependencies: [CommonModule, TitleCasePipe, ButtonComponent], styles: ["\n\n.mission-board[_ngcontent-%COMP%] {\n  padding: 20px 0;\n}\n.board-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n}\n.board-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: var(--accent-gold);\n  margin: 0;\n}\n.stats[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n}\n.stat[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font-size: 0.9rem;\n}\n.stat.gold[_ngcontent-%COMP%] {\n  color: var(--accent-gold);\n  font-weight: bold;\n}\n.active-missions[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.active-missions[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: var(--text-primary);\n  margin: 0 0 12px;\n  font-size: 1rem;\n}\n.active-mission-card[_ngcontent-%COMP%] {\n  background: var(--bg-card);\n  border: 2px solid var(--border-progress);\n  border-radius: 8px;\n  padding: 12px 16px;\n  margin-bottom: 8px;\n}\n.mission-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 8px;\n}\n.type[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n.details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.name[_ngcontent-%COMP%] {\n  color: var(--text-primary);\n  font-weight: bold;\n}\n.time[_ngcontent-%COMP%] {\n  color: var(--accent-gold);\n  font-size: 0.85rem;\n}\n.progress-bar[_ngcontent-%COMP%] {\n  height: 6px;\n  background: var(--border-secondary);\n  border-radius: 3px;\n  overflow: hidden;\n  margin-bottom: 4px;\n}\n.progress-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background: var(--accent-gold);\n  transition: width 0.3s;\n}\n.probability[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 0.8rem;\n}\n.missions-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 16px;\n}\n.mission-card[_ngcontent-%COMP%] {\n  background: var(--bg-card);\n  border: 2px solid var(--border-primary);\n  border-radius: 12px;\n  padding: 16px;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.mission-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  border-color: var(--accent-gold);\n}\n.mission-card.legendary[_ngcontent-%COMP%] {\n  border-color: #a35ac4;\n}\n.card-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 12px;\n}\n.type-badge[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font-size: 0.8rem;\n}\n.difficulty-badge[_ngcontent-%COMP%] {\n  padding: 4px 8px;\n  border-radius: 4px;\n  font-size: 0.75rem;\n  color: #fff;\n}\n.mission-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: var(--text-white);\n  margin: 0 0 8px;\n}\n.description[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font-size: 0.85rem;\n  margin: 0 0 12px;\n}\n.requirements[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  margin-bottom: 12px;\n  font-size: 0.8rem;\n  color: var(--text-muted);\n}\n.rewards[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  padding-top: 12px;\n  border-top: 1px solid var(--border-secondary);\n}\n.gold[_ngcontent-%COMP%] {\n  color: var(--accent-gold);\n  font-weight: bold;\n}\n.xp[_ngcontent-%COMP%] {\n  color: #5ac47a;\n}\n.items[_ngcontent-%COMP%] {\n  color: #a35ac4;\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.85);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n}\n.modal-content[_ngcontent-%COMP%] {\n  background: var(--bg-secondary);\n  border: 2px solid var(--border-primary);\n  border-radius: 16px;\n  padding: 24px;\n  max-width: 500px;\n  width: 90%;\n  position: relative;\n}\n.close-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 16px;\n  right: 16px;\n  background: transparent;\n  border: none;\n  color: var(--text-muted);\n  font-size: 1.5rem;\n  cursor: pointer;\n}\n.briefing-header[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  align-items: center;\n  margin-bottom: 16px;\n}\n.type-icon[_ngcontent-%COMP%] {\n  font-size: 3rem;\n}\n.briefing-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: var(--text-white);\n  margin: 0 0 4px;\n}\n.difficulty[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\n.briefing-desc[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  margin-bottom: 20px;\n}\n.briefing-section[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.briefing-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: var(--accent-gold);\n  margin: 0 0 12px;\n  font-size: 0.95rem;\n}\n.briefing-section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 0;\n  padding-left: 20px;\n  color: var(--text-secondary);\n}\n.briefing-section[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 6px;\n}\n.reward-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.reward[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  background: var(--card-overlay);\n  border-radius: 6px;\n  font-size: 0.9rem;\n}\n.reward.gold[_ngcontent-%COMP%] {\n  color: var(--accent-gold);\n}\n.reward.xp[_ngcontent-%COMP%] {\n  color: #5ac47a;\n}\n.reward.item[_ngcontent-%COMP%] {\n  color: #a35ac4;\n}\n.squad-check[_ngcontent-%COMP%] {\n  background: var(--card-overlay);\n  padding: 16px;\n  border-radius: 8px;\n  margin-bottom: 20px;\n}\n.squad-check[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: var(--text-primary);\n  margin: 0 0 12px;\n}\n.check-item[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  margin-bottom: 8px;\n}\n.check-item.pass[_ngcontent-%COMP%] {\n  color: #5ac47a;\n}\n.success-probability[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 12px;\n  padding-top: 12px;\n  border-top: 1px solid var(--border-secondary);\n}\n.success-probability[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n}\n.success-probability[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: bold;\n  color: var(--accent-gold);\n}\n.success-probability[_ngcontent-%COMP%]   .value.high[_ngcontent-%COMP%] {\n  color: #5ac47a;\n}\n.success-probability[_ngcontent-%COMP%]   .value.low[_ngcontent-%COMP%] {\n  color: #c45a5a;\n}\n.briefing-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n}\n.result-modal[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.result-modal.success[_ngcontent-%COMP%] {\n  border-color: #5ac47a;\n}\n.result-modal.failure[_ngcontent-%COMP%] {\n  border-color: #c45a5a;\n}\n.result-header[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.result-icon[_ngcontent-%COMP%] {\n  font-size: 4rem;\n  display: block;\n  margin-bottom: 12px;\n}\n.result-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: var(--text-white);\n  margin: 0;\n}\n.result-rewards[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  margin-bottom: 24px;\n}\n.reward-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 12px;\n  background: var(--card-overlay);\n  border-radius: 8px;\n}\n.reward-item[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n}\n.reward-item[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  color: var(--accent-gold);\n  font-weight: bold;\n}\n/*# sourceMappingURL=mission-board.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MissionBoardComponent, { className: "MissionBoardComponent", filePath: "projects\\raid-squad\\src\\app\\components\\mission-board\\mission-board.component.ts", lineNumber: 246 });
})();

// projects/raid-squad/src/app/components/resource-header/resource-header.component.ts
var ResourceHeaderComponent = class _ResourceHeaderComponent {
  economyService = inject(EconomyService);
  static \u0275fac = function ResourceHeaderComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ResourceHeaderComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ResourceHeaderComponent, selectors: [["app-resource-header"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 23, vars: 5, consts: [[1, "resource-header"], [1, "resource", "gold"], [1, "icon"], [1, "amount"], [1, "label"], [1, "resource", "gems"], [1, "resource", "souls"]], template: function ResourceHeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "span", 2);
      \u0275\u0275text(3, "\u{1F4B0}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "span", 3);
      \u0275\u0275text(5);
      \u0275\u0275pipe(6, "number");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "span", 4);
      \u0275\u0275text(8, "Gold");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div", 5)(10, "span", 2);
      \u0275\u0275text(11, "\u{1F48E}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "span", 3);
      \u0275\u0275text(13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "span", 4);
      \u0275\u0275text(15, "Gems");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "div", 6)(17, "span", 2);
      \u0275\u0275text(18, "\u{1F47B}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "span", 3);
      \u0275\u0275text(20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "span", 4);
      \u0275\u0275text(22, "Souls");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 3, ctx.economyService.goldBalance()));
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(ctx.economyService.gemsBalance());
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(ctx.economyService.soulsBalance());
    }
  }, dependencies: [CommonModule, DecimalPipe], styles: ["\n\n.resource-header[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  background: var(--bg-card);\n  border: 2px solid var(--border-primary);\n  border-radius: 30px;\n  padding: 8px 20px;\n}\n.resource[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 4px 12px;\n  border-radius: 20px;\n  background: var(--card-overlay);\n}\n.icon[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n}\n.amount[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 0.95rem;\n}\n.label[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: var(--text-muted);\n  text-transform: uppercase;\n}\n.resource.gold[_ngcontent-%COMP%]   .amount[_ngcontent-%COMP%] {\n  color: #ffd700;\n}\n.resource.gems[_ngcontent-%COMP%]   .amount[_ngcontent-%COMP%] {\n  color: #5ac4c4;\n}\n.resource.souls[_ngcontent-%COMP%]   .amount[_ngcontent-%COMP%] {\n  color: #a35ac4;\n}\n/*# sourceMappingURL=resource-header.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ResourceHeaderComponent, { className: "ResourceHeaderComponent", filePath: "projects\\raid-squad\\src\\app\\components\\resource-header\\resource-header.component.ts", lineNumber: 54 });
})();

// projects/raid-squad/src/app/components/treasury-dashboard/treasury-dashboard.component.ts
var _forTrack07 = ($index, $item) => $item.type;
var _forTrack12 = ($index, $item) => $item.id;
function TreasuryDashboardComponent_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "div", 24);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 25)(4, "span", 26);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 27);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 28);
    \u0275\u0275element(10, "div", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 30);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "number");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const currency_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap(currency_r1.type);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(currency_r1.icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(currency_r1.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 8, ctx_r1.getBalance(currency_r1.type)));
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("width", ctx_r1.getPercentage(currency_r1.type), "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("/ ", \u0275\u0275pipeBind1(13, 10, ctx_r1.getCap(currency_r1.type)), " cap");
  }
}
function TreasuryDashboardComponent_For_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "div", 32)(2, "span", 33);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 34);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "span", 35);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tx_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap(tx_r3.type);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(tx_r3.description);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getTimeAgo(tx_r3.timestamp));
    \u0275\u0275advance();
    \u0275\u0275classProp("positive", tx_r3.amount > 0)("negative", tx_r3.amount < 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3(" ", tx_r3.amount > 0 ? "+" : "", "", \u0275\u0275pipeBind1(8, 11, tx_r3.amount), " ", ctx_r1.getCurrencyIcon(tx_r3.currency), " ");
  }
}
function TreasuryDashboardComponent_For_54_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ui-button", 44);
    \u0275\u0275listener("clicked", function TreasuryDashboardComponent_For_54_Conditional_11_Template_ui_button_clicked_0_listener() {
      \u0275\u0275restoreView(_r4);
      const trade_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelTrade(trade_r5.id));
    });
    \u0275\u0275text(1, "Cancel");
    \u0275\u0275elementEnd();
  }
}
function TreasuryDashboardComponent_For_54_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ui-button", 45);
    \u0275\u0275listener("clicked", function TreasuryDashboardComponent_For_54_Conditional_12_Template_ui_button_clicked_0_listener() {
      \u0275\u0275restoreView(_r6);
      const trade_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.acceptTrade(trade_r5.id));
    });
    \u0275\u0275text(1, "Accept");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const trade_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", !ctx_r1.canAffordTrade(trade_r5));
  }
}
function TreasuryDashboardComponent_For_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "div", 36)(2, "span", 37);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 38)(5, "span", 39);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 40);
    \u0275\u0275text(8, "\u2192");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 41);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(11, TreasuryDashboardComponent_For_54_Conditional_11_Template, 2, 0, "ui-button", 42)(12, TreasuryDashboardComponent_For_54_Conditional_12_Template, 2, 1, "ui-button", 43);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const trade_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(trade_r5.sellerName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", ctx_r1.getCurrencyIcon(trade_r5.offerCurrency), " ", trade_r5.offerAmount, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2(" ", ctx_r1.getCurrencyIcon(trade_r5.askingCurrency), " ", trade_r5.askingAmount, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(trade_r5.sellerId === "user-1" ? 11 : 12);
  }
}
var TreasuryDashboardComponent = class _TreasuryDashboardComponent {
  economyService = inject(EconomyService);
  currencies = [
    __spreadValues({ type: "gold" }, CURRENCY_CONFIG.gold),
    __spreadValues({ type: "gems" }, CURRENCY_CONFIG.gems),
    __spreadValues({ type: "souls" }, CURRENCY_CONFIG.souls)
  ];
  newTrade = {
    offerCurrency: "gold",
    offerAmount: 100,
    askingCurrency: "gems",
    askingAmount: 5
  };
  getBalance(type) {
    return this.economyService.currentTreasury()[type].amount;
  }
  getCap(type) {
    return this.economyService.currentTreasury()[type].cap;
  }
  getPercentage(type) {
    const t = this.economyService.currentTreasury()[type];
    return t.amount / t.cap * 100;
  }
  getCurrencyIcon(type) {
    if (!type)
      return "";
    return CURRENCY_CONFIG[type]?.icon || "";
  }
  getTimeAgo(date) {
    const diff = Date.now() - new Date(date).getTime();
    const mins = Math.floor(diff / 6e4);
    if (mins < 1)
      return "Just now";
    if (mins < 60)
      return `${mins}m ago`;
    const hours = Math.floor(mins / 60);
    if (hours < 24)
      return `${hours}h ago`;
    return `${Math.floor(hours / 24)}d ago`;
  }
  createTrade() {
    if (this.newTrade.offerAmount > 0 && this.newTrade.askingAmount > 0) {
      this.economyService.createTradeOffer(this.newTrade);
    }
  }
  acceptTrade(tradeId) {
    this.economyService.acceptTrade(tradeId);
  }
  cancelTrade(tradeId) {
    this.economyService.cancelTrade(tradeId);
  }
  canAffordTrade(trade) {
    return this.economyService.canAfford(trade.askingCurrency, trade.askingAmount);
  }
  static \u0275fac = function TreasuryDashboardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TreasuryDashboardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TreasuryDashboardComponent, selectors: [["app-treasury-dashboard"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 55, vars: 10, consts: [[1, "treasury-dashboard"], [1, "dashboard-header"], [1, "summary"], [1, "earned"], [1, "spent"], [1, "currency-cards"], [1, "currency-card", 3, "class"], [1, "sections-grid"], [1, "section", "transactions"], [1, "transaction-list"], [1, "transaction-item", 3, "class"], [1, "section", "trading"], [1, "create-trade"], [1, "trade-form"], [1, "form-row"], ["type", "number", "min", "1", 3, "ngModelChange", "ngModel"], [3, "ngModelChange", "ngModel"], ["value", "gold"], ["value", "gems"], ["value", "souls"], ["variant", "primary", "size", "sm", 3, "clicked"], [1, "trade-list"], [1, "trade-item"], [1, "currency-card"], [1, "currency-icon"], [1, "currency-info"], [1, "currency-name"], [1, "currency-amount"], [1, "progress-bar"], [1, "progress-fill"], [1, "currency-cap"], [1, "transaction-item"], [1, "tx-info"], [1, "tx-desc"], [1, "tx-time"], [1, "tx-amount"], [1, "trade-offer"], [1, "seller"], [1, "trade-details"], [1, "offering"], [1, "arrow"], [1, "asking"], ["variant", "outline", "size", "sm"], ["variant", "primary", "size", "sm", 3, "disabled"], ["variant", "outline", "size", "sm", 3, "clicked"], ["variant", "primary", "size", "sm", 3, "clicked", "disabled"]], template: function TreasuryDashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h2");
      \u0275\u0275text(3, "\u{1F3E6} Treasury");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 2)(5, "span", 3);
      \u0275\u0275text(6);
      \u0275\u0275pipe(7, "number");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "span", 4);
      \u0275\u0275text(9);
      \u0275\u0275pipe(10, "number");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(11, "div", 5);
      \u0275\u0275repeaterCreate(12, TreasuryDashboardComponent_For_13_Template, 14, 12, "div", 6, _forTrack07);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "div", 7)(15, "div", 8)(16, "h3");
      \u0275\u0275text(17, "\u{1F4DC} Transaction History");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "div", 9);
      \u0275\u0275repeaterCreate(19, TreasuryDashboardComponent_For_20_Template, 9, 13, "div", 10, _forTrack12);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "div", 11)(22, "h3");
      \u0275\u0275text(23, "\u{1F504} Trading Marketplace");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "div", 12)(25, "h4");
      \u0275\u0275text(26, "Create Trade Offer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "div", 13)(28, "div", 14)(29, "label");
      \u0275\u0275text(30, "Offer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "input", 15);
      \u0275\u0275twoWayListener("ngModelChange", function TreasuryDashboardComponent_Template_input_ngModelChange_31_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.newTrade.offerAmount, $event) || (ctx.newTrade.offerAmount = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "select", 16);
      \u0275\u0275twoWayListener("ngModelChange", function TreasuryDashboardComponent_Template_select_ngModelChange_32_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.newTrade.offerCurrency, $event) || (ctx.newTrade.offerCurrency = $event);
        return $event;
      });
      \u0275\u0275elementStart(33, "option", 17);
      \u0275\u0275text(34, "\u{1F4B0} Gold");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "option", 18);
      \u0275\u0275text(36, "\u{1F48E} Gems");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "option", 19);
      \u0275\u0275text(38, "\u{1F47B} Souls");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(39, "div", 14)(40, "label");
      \u0275\u0275text(41, "For");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "input", 15);
      \u0275\u0275twoWayListener("ngModelChange", function TreasuryDashboardComponent_Template_input_ngModelChange_42_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.newTrade.askingAmount, $event) || (ctx.newTrade.askingAmount = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "select", 16);
      \u0275\u0275twoWayListener("ngModelChange", function TreasuryDashboardComponent_Template_select_ngModelChange_43_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.newTrade.askingCurrency, $event) || (ctx.newTrade.askingCurrency = $event);
        return $event;
      });
      \u0275\u0275elementStart(44, "option", 17);
      \u0275\u0275text(45, "\u{1F4B0} Gold");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "option", 18);
      \u0275\u0275text(47, "\u{1F48E} Gems");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "option", 19);
      \u0275\u0275text(49, "\u{1F47B} Souls");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(50, "ui-button", 20);
      \u0275\u0275listener("clicked", function TreasuryDashboardComponent_Template_ui_button_clicked_50_listener() {
        return ctx.createTrade();
      });
      \u0275\u0275text(51, "Post Trade");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(52, "div", 21);
      \u0275\u0275repeaterCreate(53, TreasuryDashboardComponent_For_54_Template, 13, 6, "div", 22, _forTrack12);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1("\u{1F4C8} Total Earned: ", \u0275\u0275pipeBind1(7, 6, ctx.economyService.currentTreasury().totalEarned), "");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("\u{1F4C9} Total Spent: ", \u0275\u0275pipeBind1(10, 8, ctx.economyService.currentTreasury().totalSpent), "");
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.currencies);
      \u0275\u0275advance(7);
      \u0275\u0275repeater(ctx.economyService.recentTransactions());
      \u0275\u0275advance(12);
      \u0275\u0275twoWayProperty("ngModel", ctx.newTrade.offerAmount);
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("ngModel", ctx.newTrade.offerCurrency);
      \u0275\u0275advance(10);
      \u0275\u0275twoWayProperty("ngModel", ctx.newTrade.askingAmount);
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("ngModel", ctx.newTrade.askingCurrency);
      \u0275\u0275advance(10);
      \u0275\u0275repeater(ctx.economyService.openTrades());
    }
  }, dependencies: [CommonModule, DecimalPipe, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, MinValidator, NgModel, ButtonComponent], styles: ["\n\n.treasury-dashboard[_ngcontent-%COMP%] {\n  padding: 20px 0;\n}\n.dashboard-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n  flex-wrap: wrap;\n  gap: 16px;\n}\n.dashboard-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: var(--accent-gold);\n  margin: 0;\n}\n.summary[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n}\n.earned[_ngcontent-%COMP%] {\n  color: #5ac47a;\n}\n.spent[_ngcontent-%COMP%] {\n  color: #c45a5a;\n}\n.currency-cards[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.currency-card[_ngcontent-%COMP%] {\n  background: var(--bg-card);\n  border: 2px solid var(--border-primary);\n  border-radius: 12px;\n  padding: 20px;\n  display: flex;\n  gap: 16px;\n  align-items: center;\n}\n.currency-card.gold[_ngcontent-%COMP%] {\n  border-color: #ffd700;\n}\n.currency-card.gems[_ngcontent-%COMP%] {\n  border-color: #5ac4c4;\n}\n.currency-card.souls[_ngcontent-%COMP%] {\n  border-color: #a35ac4;\n}\n.currency-icon[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n}\n.currency-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.currency-name[_ngcontent-%COMP%] {\n  display: block;\n  color: var(--text-secondary);\n  font-size: 0.85rem;\n  text-transform: uppercase;\n}\n.currency-amount[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 1.5rem;\n  font-weight: bold;\n  color: var(--text-white);\n}\n.progress-bar[_ngcontent-%COMP%] {\n  height: 4px;\n  background: var(--border-secondary);\n  border-radius: 2px;\n  margin: 8px 0 4px;\n}\n.progress-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 2px;\n  transition: width 0.3s;\n}\n.currency-card.gold[_ngcontent-%COMP%]   .progress-fill[_ngcontent-%COMP%] {\n  background: #ffd700;\n}\n.currency-card.gems[_ngcontent-%COMP%]   .progress-fill[_ngcontent-%COMP%] {\n  background: #5ac4c4;\n}\n.currency-card.souls[_ngcontent-%COMP%]   .progress-fill[_ngcontent-%COMP%] {\n  background: #a35ac4;\n}\n.currency-cap[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--text-muted);\n}\n.sections-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 24px;\n}\n@media (max-width: 900px) {\n  .sections-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.section[_ngcontent-%COMP%] {\n  background: var(--bg-card);\n  border: 2px solid var(--border-primary);\n  border-radius: 12px;\n  padding: 20px;\n}\n.section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: var(--accent-gold);\n  margin: 0 0 16px;\n  font-size: 1rem;\n}\n.transaction-list[_ngcontent-%COMP%] {\n  max-height: 400px;\n  overflow-y: auto;\n}\n.transaction-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px;\n  border-bottom: 1px solid var(--border-secondary);\n}\n.tx-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.tx-desc[_ngcontent-%COMP%] {\n  color: var(--text-primary);\n  font-size: 0.9rem;\n}\n.tx-time[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 0.75rem;\n}\n.tx-amount[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.tx-amount.positive[_ngcontent-%COMP%] {\n  color: #5ac47a;\n}\n.tx-amount.negative[_ngcontent-%COMP%] {\n  color: #c45a5a;\n}\n.create-trade[_ngcontent-%COMP%] {\n  background: var(--card-overlay);\n  padding: 16px;\n  border-radius: 8px;\n  margin-bottom: 16px;\n}\n.create-trade[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: var(--text-primary);\n  margin: 0 0 12px;\n  font-size: 0.9rem;\n}\n.trade-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.form-row[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  width: 40px;\n  color: var(--text-secondary);\n  font-size: 0.85rem;\n}\n.form-row[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 80px;\n  padding: 8px;\n  background: var(--input-bg);\n  color: var(--text-primary);\n  border: 1px solid var(--border-primary);\n  border-radius: 4px;\n}\n.form-row[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 8px;\n  background: var(--input-bg);\n  color: var(--text-primary);\n  border: 1px solid var(--border-primary);\n  border-radius: 4px;\n}\n.trade-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.trade-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background: var(--card-overlay);\n  padding: 12px;\n  border-radius: 8px;\n}\n.seller[_ngcontent-%COMP%] {\n  display: block;\n  color: var(--text-secondary);\n  font-size: 0.8rem;\n  margin-bottom: 4px;\n}\n.trade-details[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.offering[_ngcontent-%COMP%] {\n  color: #5ac47a;\n  font-weight: bold;\n}\n.arrow[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n}\n.asking[_ngcontent-%COMP%] {\n  color: #c45a5a;\n  font-weight: bold;\n}\n/*# sourceMappingURL=treasury-dashboard.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TreasuryDashboardComponent, { className: "TreasuryDashboardComponent", filePath: "projects\\raid-squad\\src\\app\\components\\treasury-dashboard\\treasury-dashboard.component.ts", lineNumber: 175 });
})();

// projects/raid-squad/src/app/services/social.service.ts
var SocialService = class _SocialService {
  currentPlayer = signal({
    id: "user-1",
    name: "Commander",
    avatar: "\u{1F451}",
    level: 25,
    status: "online",
    squadPower: 1500,
    missionsCompleted: 42,
    gold: 5e3,
    allianceId: null,
    joinedAt: /* @__PURE__ */ new Date(),
    lastSeen: /* @__PURE__ */ new Date()
  });
  players = signal(this.generatePlayers());
  friends = signal([]);
  alliances = signal(this.generateAlliances());
  messages = signal(this.generateMessages());
  channels = signal([
    { id: "global", name: "\u{1F30D} Global Chat", type: "global", unreadCount: 0 },
    { id: "alliance", name: "\u2694\uFE0F Alliance Chat", type: "alliance", unreadCount: 0 }
  ]);
  currentUser = this.currentPlayer.asReadonly();
  allPlayers = this.players.asReadonly();
  allFriends = this.friends.asReadonly();
  allAlliances = this.alliances.asReadonly();
  allMessages = this.messages.asReadonly();
  allChannels = this.channels.asReadonly();
  leaderboard = computed(() => [...this.players(), this.currentPlayer()].sort((a, b) => b.squadPower - a.squadPower).slice(0, 20));
  onlinePlayers = computed(() => this.players().filter((p) => p.status === "online" || p.status === "in-mission"));
  friendsList = computed(() => {
    const friendIds = this.friends().filter((f) => f.status === "accepted").map((f) => f.playerId);
    return this.players().filter((p) => friendIds.includes(p.id));
  });
  pendingRequests = computed(() => this.friends().filter((f) => f.status === "pending"));
  myAlliance = computed(() => {
    const allianceId = this.currentPlayer().allianceId;
    return allianceId ? this.alliances().find((a) => a.id === allianceId) : null;
  });
  // Player actions
  searchPlayers(query) {
    if (!query.trim())
      return [];
    const q = query.toLowerCase();
    return this.players().filter((p) => p.name.toLowerCase().includes(q) || p.id.includes(q));
  }
  getPlayerById(id) {
    if (id === "user-1")
      return this.currentPlayer();
    return this.players().find((p) => p.id === id);
  }
  // Friend actions
  sendFriendRequest(playerId) {
    if (this.friends().some((f) => f.playerId === playerId))
      return;
    const friend = {
      id: crypto.randomUUID(),
      playerId,
      status: "pending",
      addedAt: /* @__PURE__ */ new Date()
    };
    this.friends.update((list) => [...list, friend]);
    setTimeout(() => this.acceptFriendRequest(friend.id), 2e3);
  }
  acceptFriendRequest(friendId) {
    this.friends.update((list) => list.map((f) => f.id === friendId ? __spreadProps(__spreadValues({}, f), { status: "accepted" }) : f));
  }
  removeFriend(playerId) {
    this.friends.update((list) => list.filter((f) => f.playerId !== playerId));
  }
  // Alliance actions
  createAlliance(name, tag, description) {
    if (this.currentPlayer().allianceId)
      return false;
    const alliance = {
      id: crypto.randomUUID(),
      name,
      tag,
      description,
      leaderId: "user-1",
      memberIds: ["user-1"],
      maxMembers: 20,
      level: 1,
      totalPower: this.currentPlayer().squadPower,
      createdAt: /* @__PURE__ */ new Date(),
      isRecruiting: true
    };
    this.alliances.update((list) => [...list, alliance]);
    this.currentPlayer.update((p) => __spreadProps(__spreadValues({}, p), { allianceId: alliance.id }));
    return true;
  }
  joinAlliance(allianceId) {
    if (this.currentPlayer().allianceId)
      return false;
    const alliance = this.alliances().find((a) => a.id === allianceId);
    if (!alliance || !alliance.isRecruiting)
      return false;
    if (alliance.memberIds.length >= alliance.maxMembers)
      return false;
    this.alliances.update((list) => list.map((a) => a.id === allianceId ? __spreadProps(__spreadValues({}, a), {
      memberIds: [...a.memberIds, "user-1"],
      totalPower: a.totalPower + this.currentPlayer().squadPower
    }) : a));
    this.currentPlayer.update((p) => __spreadProps(__spreadValues({}, p), { allianceId }));
    return true;
  }
  leaveAlliance() {
    const allianceId = this.currentPlayer().allianceId;
    if (!allianceId)
      return;
    this.alliances.update((list) => list.map((a) => a.id === allianceId ? __spreadProps(__spreadValues({}, a), {
      memberIds: a.memberIds.filter((id) => id !== "user-1"),
      totalPower: a.totalPower - this.currentPlayer().squadPower
    }) : a).filter((a) => a.memberIds.length > 0));
    this.currentPlayer.update((p) => __spreadProps(__spreadValues({}, p), { allianceId: null }));
  }
  // Chat actions
  sendMessage(content, channel, recipientId) {
    const msg = {
      id: crypto.randomUUID(),
      senderId: "user-1",
      senderName: this.currentPlayer().name,
      senderAvatar: this.currentPlayer().avatar,
      content,
      channel,
      recipientId,
      timestamp: /* @__PURE__ */ new Date()
    };
    this.messages.update((list) => [...list, msg]);
  }
  getChannelMessages(channelType, recipientId) {
    return this.messages().filter((m) => {
      if (m.channel !== channelType)
        return false;
      if (channelType === "private") {
        return m.senderId === "user-1" && m.recipientId === recipientId || m.senderId === recipientId && m.recipientId === "user-1";
      }
      return true;
    });
  }
  generatePlayers() {
    const names = [
      "WarChief Grom",
      "Shadow Master",
      "Necro Lord",
      "Blood Queen",
      "Iron Fist",
      "Dark Blade",
      "Storm Caller",
      "Bone Crusher",
      "Fire Mage",
      "Ice Queen",
      "Thunder God",
      "Death Knight",
      "Soul Reaper",
      "Dragon Slayer",
      "Demon Hunter"
    ];
    const avatars = ["\u{1F479}", "\u{1F9D9}", "\u{1F480}", "\u{1F478}", "\u{1F4AA}", "\u{1F5E1}\uFE0F", "\u26A1", "\u{1F480}", "\u{1F525}", "\u2744\uFE0F", "\u26C8\uFE0F", "\u2694\uFE0F", "\u{1F47B}", "\u{1F409}", "\u{1F608}"];
    const statuses = ["online", "offline", "in-mission", "away"];
    return names.map((name, i) => ({
      id: `player-${i + 1}`,
      name,
      avatar: avatars[i],
      level: Math.floor(Math.random() * 50) + 10,
      status: statuses[Math.floor(Math.random() * statuses.length)],
      squadPower: Math.floor(Math.random() * 3e3) + 500,
      missionsCompleted: Math.floor(Math.random() * 100),
      gold: Math.floor(Math.random() * 5e4),
      allianceId: i < 5 ? "alliance-1" : i < 8 ? "alliance-2" : null,
      joinedAt: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1e3),
      lastSeen: new Date(Date.now() - Math.random() * 60 * 60 * 1e3)
    }));
  }
  generateAlliances() {
    return [
      {
        id: "alliance-1",
        name: "Dark Legion",
        tag: "DRK",
        description: "Elite raiders seeking glory",
        leaderId: "player-1",
        memberIds: ["player-1", "player-2", "player-3", "player-4", "player-5"],
        maxMembers: 20,
        level: 5,
        totalPower: 8500,
        createdAt: /* @__PURE__ */ new Date(),
        isRecruiting: true
      },
      {
        id: "alliance-2",
        name: "Shadow Clan",
        tag: "SHD",
        description: "Masters of stealth and assassination",
        leaderId: "player-6",
        memberIds: ["player-6", "player-7", "player-8"],
        maxMembers: 15,
        level: 3,
        totalPower: 4200,
        createdAt: /* @__PURE__ */ new Date(),
        isRecruiting: true
      },
      {
        id: "alliance-3",
        name: "Blood Pact",
        tag: "BLD",
        description: "United by blood, bound by honor",
        leaderId: "player-9",
        memberIds: ["player-9"],
        maxMembers: 10,
        level: 1,
        totalPower: 1800,
        createdAt: /* @__PURE__ */ new Date(),
        isRecruiting: false
      }
    ];
  }
  generateMessages() {
    const msgs = [];
    const senders = this.generatePlayers().slice(0, 5);
    const contents = [
      "Anyone up for a raid?",
      "Just completed Dragon's Lair!",
      "Looking for healers",
      "GG everyone!",
      "Need help with the demon gate",
      "Trading gems for gold"
    ];
    senders.forEach((s, i) => {
      msgs.push({
        id: `msg-${i}`,
        senderId: s.id,
        senderName: s.name,
        senderAvatar: s.avatar,
        content: contents[i % contents.length],
        channel: "global",
        timestamp: new Date(Date.now() - (i + 1) * 3e5)
      });
    });
    return msgs;
  }
  static \u0275fac = function SocialService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SocialService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SocialService, factory: _SocialService.\u0275fac, providedIn: "root" });
};

// projects/raid-squad/src/app/components/social-hub/social-hub.component.ts
var _forTrack08 = ($index, $item) => $item.id;
function SocialHubComponent_Conditional_10_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275listener("click", function SocialHubComponent_Conditional_10_For_5_Template_div_click_0_listener() {
      const player_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.viewPlayer(player_r2));
    });
    \u0275\u0275elementStart(1, "span", 11);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 12);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 13)(6, "span", 14);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 15);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 16)(11, "span", 17);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 18);
    \u0275\u0275text(15, "Power");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(16, "span", 19);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const player_r2 = ctx.$implicit;
    const \u0275$index_25_r4 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("current", player_r2.id === "user-1");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getRankBadge(\u0275$index_25_r4));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(player_r2.avatar);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(player_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Lv.", player_r2.level, "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 9, player_r2.squadPower));
    \u0275\u0275advance(4);
    \u0275\u0275classMap(player_r2.status);
  }
}
function SocialHubComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "h3");
    \u0275\u0275text(2, "\u{1F3C6} Top Players");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 8);
    \u0275\u0275repeaterCreate(4, SocialHubComponent_Conditional_10_For_5_Template, 17, 11, "div", 9, _forTrack08);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r2.socialService.leaderboard());
  }
}
function SocialHubComponent_Conditional_11_Conditional_3_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 26)(1, "span", 12);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 14);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "ui-button", 27);
    \u0275\u0275listener("clicked", function SocialHubComponent_Conditional_11_Conditional_3_For_4_Template_ui_button_clicked_5_listener() {
      const player_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.addFriend(player_r7.id));
    });
    \u0275\u0275text(6, "Add");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const player_r7 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(player_r7.avatar);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(player_r7.name);
  }
}
function SocialHubComponent_Conditional_11_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "h4");
    \u0275\u0275text(2, "Search Results");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, SocialHubComponent_Conditional_11_Conditional_3_For_4_Template, 7, 2, "div", 26, _forTrack08);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r2.searchResults());
  }
}
function SocialHubComponent_Conditional_11_For_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275listener("click", function SocialHubComponent_Conditional_11_For_8_Template_div_click_0_listener() {
      const friend_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.viewPlayer(friend_r9));
    });
    \u0275\u0275elementStart(1, "span", 12);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 29)(4, "span", 14);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 30);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "ui-button", 31);
    \u0275\u0275listener("clicked", function SocialHubComponent_Conditional_11_For_8_Template_ui_button_clicked_8_listener($event) {
      const friend_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      ctx_r2.openChat(friend_r9);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275text(9, "\u{1F4AC}");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const friend_r9 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(friend_r9.avatar);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(friend_r9.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(friend_r9.status);
  }
}
function SocialHubComponent_Conditional_11_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 25);
    \u0275\u0275text(1, "No friends yet. Search for players above!");
    \u0275\u0275elementEnd();
  }
}
function SocialHubComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 20)(2, "input", 21);
    \u0275\u0275twoWayListener("ngModelChange", function SocialHubComponent_Conditional_11_Template_input_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.searchQuery, $event) || (ctx_r2.searchQuery = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function SocialHubComponent_Conditional_11_Template_input_input_2_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onSearch());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(3, SocialHubComponent_Conditional_11_Conditional_3_Template, 5, 0, "div", 22);
    \u0275\u0275elementStart(4, "h3");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 23);
    \u0275\u0275repeaterCreate(7, SocialHubComponent_Conditional_11_For_8_Template, 10, 3, "div", 24, _forTrack08);
    \u0275\u0275template(9, SocialHubComponent_Conditional_11_Conditional_9_Template, 2, 0, "p", 25);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.searchQuery);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.searchResults().length > 0 ? 3 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u{1F465} Friends (", ctx_r2.socialService.friendsList().length, ")");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.socialService.friendsList());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.socialService.friendsList().length === 0 ? 9 : -1);
  }
}
function SocialHubComponent_Conditional_12_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 32)(1, "h3");
    \u0275\u0275text(2, "\u2694\uFE0F My Alliance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 35)(4, "div", 36)(5, "span", 37);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 14);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 15);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "p", 38);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 39)(14, "span");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span");
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "ui-button", 40);
    \u0275\u0275listener("clicked", function SocialHubComponent_Conditional_12_Conditional_1_Template_ui_button_clicked_19_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.leaveAlliance());
    });
    \u0275\u0275text(20, "Leave Alliance");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("[", ctx_r2.socialService.myAlliance().tag, "]");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.socialService.myAlliance().name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Lv.", ctx_r2.socialService.myAlliance().level, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.socialService.myAlliance().description);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("\u{1F465} ", ctx_r2.socialService.myAlliance().memberIds.length, "/", ctx_r2.socialService.myAlliance().maxMembers, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u26A1 ", \u0275\u0275pipeBind1(18, 7, ctx_r2.socialService.myAlliance().totalPower), " Power");
  }
}
function SocialHubComponent_Conditional_12_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 33)(1, "h4");
    \u0275\u0275text(2, "Create Alliance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 41)(4, "input", 42);
    \u0275\u0275twoWayListener("ngModelChange", function SocialHubComponent_Conditional_12_Conditional_2_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.newAlliance.name, $event) || (ctx_r2.newAlliance.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "input", 43);
    \u0275\u0275twoWayListener("ngModelChange", function SocialHubComponent_Conditional_12_Conditional_2_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.newAlliance.tag, $event) || (ctx_r2.newAlliance.tag = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "textarea", 44);
    \u0275\u0275twoWayListener("ngModelChange", function SocialHubComponent_Conditional_12_Conditional_2_Template_textarea_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.newAlliance.description, $event) || (ctx_r2.newAlliance.description = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "ui-button", 45);
    \u0275\u0275listener("clicked", function SocialHubComponent_Conditional_12_Conditional_2_Template_ui_button_clicked_7_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.createAlliance());
    });
    \u0275\u0275text(8, "Create Alliance");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newAlliance.name);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newAlliance.tag);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newAlliance.description);
  }
}
function SocialHubComponent_Conditional_12_For_7_Conditional_0_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ui-button", 27);
    \u0275\u0275listener("clicked", function SocialHubComponent_Conditional_12_For_7_Conditional_0_Conditional_16_Template_ui_button_clicked_0_listener() {
      \u0275\u0275restoreView(_r12);
      const alliance_r13 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.joinAlliance(alliance_r13.id));
    });
    \u0275\u0275text(1, "Join");
    \u0275\u0275elementEnd();
  }
}
function SocialHubComponent_Conditional_12_For_7_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46)(1, "div", 36)(2, "span", 37);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 14);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 15);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "p", 38);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 39)(11, "span");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span");
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(16, SocialHubComponent_Conditional_12_For_7_Conditional_0_Conditional_16_Template, 2, 0, "ui-button", 47);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const alliance_r13 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("[", alliance_r13.tag, "]");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(alliance_r13.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Lv.", alliance_r13.level, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(alliance_r13.description);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("\u{1F465} ", alliance_r13.memberIds.length, "/", alliance_r13.maxMembers, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u26A1 ", \u0275\u0275pipeBind1(15, 8, alliance_r13.totalPower), "");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r2.socialService.myAlliance() ? 16 : -1);
  }
}
function SocialHubComponent_Conditional_12_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, SocialHubComponent_Conditional_12_For_7_Conditional_0_Template, 17, 10, "div", 46);
  }
  if (rf & 2) {
    let tmp_11_0;
    const alliance_r13 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(alliance_r13.isRecruiting && alliance_r13.id !== ((tmp_11_0 = ctx_r2.socialService.myAlliance()) == null ? null : tmp_11_0.id) ? 0 : -1);
  }
}
function SocialHubComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275template(1, SocialHubComponent_Conditional_12_Conditional_1_Template, 21, 9, "div", 32)(2, SocialHubComponent_Conditional_12_Conditional_2_Template, 9, 3, "div", 33);
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "\u{1F3F0} Available Alliances");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 34);
    \u0275\u0275repeaterCreate(6, SocialHubComponent_Conditional_12_For_7_Template, 1, 1, null, null, _forTrack08);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.socialService.myAlliance() ? 1 : 2);
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r2.socialService.allAlliances());
  }
}
function SocialHubComponent_Conditional_13_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 55)(1, "span", 56);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 57)(4, "span", 58);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 59);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 60);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const msg_r15 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("own", msg_r15.senderId === "user-1");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(msg_r15.senderAvatar);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(msg_r15.senderName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(msg_r15.content);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getTimeAgo(msg_r15.timestamp));
  }
}
function SocialHubComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 48)(2, "button", 49);
    \u0275\u0275listener("click", function SocialHubComponent_Conditional_13_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.chatChannel.set("global"));
    });
    \u0275\u0275text(3, "\u{1F30D} Global");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 50);
    \u0275\u0275listener("click", function SocialHubComponent_Conditional_13_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.chatChannel.set("alliance"));
    });
    \u0275\u0275text(5, "\u2694\uFE0F Alliance");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 51);
    \u0275\u0275repeaterCreate(7, SocialHubComponent_Conditional_13_For_8_Template, 10, 6, "div", 52, _forTrack08);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 53)(10, "input", 54);
    \u0275\u0275twoWayListener("ngModelChange", function SocialHubComponent_Conditional_13_Template_input_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.messageText, $event) || (ctx_r2.messageText = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keyup.enter", function SocialHubComponent_Conditional_13_Template_input_keyup_enter_10_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.sendMessage());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "ui-button", 45);
    \u0275\u0275listener("clicked", function SocialHubComponent_Conditional_13_Template_ui_button_clicked_11_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.sendMessage());
    });
    \u0275\u0275text(12, "Send");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r2.chatChannel() === "global");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r2.chatChannel() === "alliance");
    \u0275\u0275property("disabled", !ctx_r2.socialService.myAlliance());
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r2.getMessages());
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.messageText);
  }
}
function SocialHubComponent_Conditional_14_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 68)(1, "ui-button", 45);
    \u0275\u0275listener("clicked", function SocialHubComponent_Conditional_14_Conditional_32_Template_ui_button_clicked_1_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.addFriend(ctx_r2.selectedPlayer().id));
    });
    \u0275\u0275text(2, "Add Friend");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ui-button", 40);
    \u0275\u0275listener("clicked", function SocialHubComponent_Conditional_14_Conditional_32_Template_ui_button_clicked_3_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openChat(ctx_r2.selectedPlayer()));
    });
    \u0275\u0275text(4, "Message");
    \u0275\u0275elementEnd()();
  }
}
function SocialHubComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 61);
    \u0275\u0275listener("click", function SocialHubComponent_Conditional_14_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectedPlayer.set(null));
    });
    \u0275\u0275elementStart(1, "div", 62);
    \u0275\u0275listener("click", function SocialHubComponent_Conditional_14_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r16);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "button", 63);
    \u0275\u0275listener("click", function SocialHubComponent_Conditional_14_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectedPlayer.set(null));
    });
    \u0275\u0275text(3, "\u2715");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 64)(5, "span", 12);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 65)(8, "h3");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 15);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 30);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 66)(15, "div", 67)(16, "span", 18);
    \u0275\u0275text(17, "Squad Power");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 17);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 67)(22, "span", 18);
    \u0275\u0275text(23, "Missions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span", 17);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 67)(27, "span", 18);
    \u0275\u0275text(28, "Gold");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "span", 17);
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "number");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(32, SocialHubComponent_Conditional_14_Conditional_32_Template, 5, 0, "div", 68);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.selectedPlayer().avatar);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.selectedPlayer().name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Level ", ctx_r2.selectedPlayer().level, "");
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r2.selectedPlayer().status);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.selectedPlayer().status);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 10, ctx_r2.selectedPlayer().squadPower));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.selectedPlayer().missionsCompleted);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(31, 12, ctx_r2.selectedPlayer().gold));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.selectedPlayer().id !== "user-1" ? 32 : -1);
  }
}
var SocialHubComponent = class _SocialHubComponent {
  socialService = inject(SocialService);
  activeTab = signal("leaderboard");
  chatChannel = signal("global");
  selectedPlayer = signal(null);
  searchQuery = "";
  searchResults = signal([]);
  messageText = "";
  newAlliance = { name: "", tag: "", description: "" };
  getRankBadge(index) {
    return ["\u{1F947}", "\u{1F948}", "\u{1F949}"][index] || `${index + 1}`;
  }
  onSearch() {
    this.searchResults.set(this.socialService.searchPlayers(this.searchQuery));
  }
  viewPlayer(player) {
    this.selectedPlayer.set(player);
  }
  addFriend(playerId) {
    this.socialService.sendFriendRequest(playerId);
  }
  openChat(player) {
    this.activeTab.set("chat");
  }
  createAlliance() {
    if (this.newAlliance.name && this.newAlliance.tag) {
      this.socialService.createAlliance(this.newAlliance.name, this.newAlliance.tag, this.newAlliance.description);
      this.newAlliance = { name: "", tag: "", description: "" };
    }
  }
  joinAlliance(allianceId) {
    this.socialService.joinAlliance(allianceId);
  }
  leaveAlliance() {
    this.socialService.leaveAlliance();
  }
  getMessages() {
    return this.socialService.getChannelMessages(this.chatChannel());
  }
  sendMessage() {
    if (this.messageText.trim()) {
      this.socialService.sendMessage(this.messageText, this.chatChannel());
      this.messageText = "";
    }
  }
  getTimeAgo(date) {
    const diff = Date.now() - new Date(date).getTime();
    const mins = Math.floor(diff / 6e4);
    if (mins < 1)
      return "now";
    if (mins < 60)
      return `${mins}m`;
    return `${Math.floor(mins / 60)}h`;
  }
  static \u0275fac = function SocialHubComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SocialHubComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SocialHubComponent, selectors: [["app-social-hub"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 15, vars: 13, consts: [[1, "social-hub"], [1, "hub-tabs"], [1, "tab", 3, "click"], [1, "leaderboard-section"], [1, "friends-section"], [1, "alliances-section"], [1, "chat-section"], [1, "modal-overlay"], [1, "leaderboard-list"], [1, "leaderboard-item", 3, "current"], [1, "leaderboard-item", 3, "click"], [1, "rank"], [1, "avatar"], [1, "player-info"], [1, "name"], [1, "level"], [1, "power"], [1, "value"], [1, "label"], [1, "status-dot"], [1, "search-bar"], ["type", "text", "placeholder", "Search players...", 3, "ngModelChange", "input", "ngModel"], [1, "search-results"], [1, "friends-list"], [1, "friend-item"], [1, "empty"], [1, "player-row"], ["variant", "primary", "size", "sm", 3, "clicked"], [1, "friend-item", 3, "click"], [1, "friend-info"], [1, "status"], ["variant", "outline", "size", "sm", 3, "clicked"], [1, "my-alliance"], [1, "create-alliance"], [1, "alliances-list"], [1, "alliance-card", "current"], [1, "alliance-header"], [1, "tag"], [1, "desc"], [1, "alliance-stats"], ["variant", "outline", 3, "clicked"], [1, "form-row"], ["type", "text", "placeholder", "Alliance Name", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "TAG", "maxlength", "4", 3, "ngModelChange", "ngModel"], ["placeholder", "Description...", "rows", "2", 3, "ngModelChange", "ngModel"], ["variant", "primary", 3, "clicked"], [1, "alliance-card"], ["variant", "primary", "size", "sm"], [1, "chat-channels"], [1, "channel", 3, "click"], [1, "channel", 3, "click", "disabled"], [1, "chat-messages"], [1, "message", 3, "own"], [1, "chat-input"], ["type", "text", "placeholder", "Type a message...", 3, "ngModelChange", "keyup.enter", "ngModel"], [1, "message"], [1, "msg-avatar"], [1, "msg-content"], [1, "msg-sender"], [1, "msg-text"], [1, "msg-time"], [1, "modal-overlay", 3, "click"], [1, "modal-content", 3, "click"], [1, "close-btn", 3, "click"], [1, "profile-header"], [1, "profile-info"], [1, "profile-stats"], [1, "stat"], [1, "profile-actions"]], template: function SocialHubComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "button", 2);
      \u0275\u0275listener("click", function SocialHubComponent_Template_button_click_2_listener() {
        return ctx.activeTab.set("leaderboard");
      });
      \u0275\u0275text(3, "\u{1F3C6} Leaderboard");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "button", 2);
      \u0275\u0275listener("click", function SocialHubComponent_Template_button_click_4_listener() {
        return ctx.activeTab.set("friends");
      });
      \u0275\u0275text(5, "\u{1F465} Friends");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "button", 2);
      \u0275\u0275listener("click", function SocialHubComponent_Template_button_click_6_listener() {
        return ctx.activeTab.set("alliances");
      });
      \u0275\u0275text(7, "\u2694\uFE0F Alliances");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "button", 2);
      \u0275\u0275listener("click", function SocialHubComponent_Template_button_click_8_listener() {
        return ctx.activeTab.set("chat");
      });
      \u0275\u0275text(9, "\u{1F4AC} Chat");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(10, SocialHubComponent_Conditional_10_Template, 6, 0, "div", 3)(11, SocialHubComponent_Conditional_11_Template, 10, 4, "div", 4)(12, SocialHubComponent_Conditional_12_Template, 8, 1, "div", 5)(13, SocialHubComponent_Conditional_13_Template, 13, 6, "div", 6)(14, SocialHubComponent_Conditional_14_Template, 33, 14, "div", 7);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.activeTab() === "leaderboard");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.activeTab() === "friends");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.activeTab() === "alliances");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.activeTab() === "chat");
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.activeTab() === "leaderboard" ? 10 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.activeTab() === "friends" ? 11 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.activeTab() === "alliances" ? 12 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.activeTab() === "chat" ? 13 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.selectedPlayer() ? 14 : -1);
    }
  }, dependencies: [CommonModule, DecimalPipe, FormsModule, DefaultValueAccessor, NgControlStatus, MaxLengthValidator, NgModel, ButtonComponent], styles: ["\n\n.social-hub[_ngcontent-%COMP%] {\n  padding: 20px 0;\n}\n.hub-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 24px;\n}\n.tab[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 12px;\n  background: var(--bg-card);\n  border: 2px solid var(--border-primary);\n  border-radius: 8px;\n  color: var(--text-secondary);\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.tab[_ngcontent-%COMP%]:hover {\n  border-color: var(--accent-gold);\n}\n.tab.active[_ngcontent-%COMP%] {\n  background: var(--accent-gold);\n  color: #000;\n  border-color: var(--accent-gold);\n}\nh3[_ngcontent-%COMP%] {\n  color: var(--accent-gold);\n  margin: 0 0 16px;\n}\nh4[_ngcontent-%COMP%] {\n  color: var(--text-primary);\n  margin: 0 0 12px;\n  font-size: 0.95rem;\n}\n.leaderboard-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.leaderboard-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 16px;\n  background: var(--bg-card);\n  border: 2px solid var(--border-primary);\n  border-radius: 8px;\n  cursor: pointer;\n}\n.leaderboard-item[_ngcontent-%COMP%]:hover {\n  border-color: var(--accent-gold);\n}\n.leaderboard-item.current[_ngcontent-%COMP%] {\n  border-color: var(--accent-gold);\n  background: rgba(255, 215, 0, 0.1);\n}\n.rank[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  width: 30px;\n  text-align: center;\n}\n.avatar[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n.player-info[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n.name[_ngcontent-%COMP%] {\n  color: var(--text-white);\n  font-weight: bold;\n}\n.level[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 0.8rem;\n}\n.power[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.power[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  display: block;\n  color: var(--accent-gold);\n  font-weight: bold;\n}\n.power[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: var(--text-muted);\n}\n.status-dot[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n}\n.status-dot.online[_ngcontent-%COMP%] {\n  background: #5ac47a;\n}\n.status-dot.offline[_ngcontent-%COMP%] {\n  background: #5a5a5a;\n}\n.status-dot.in-mission[_ngcontent-%COMP%] {\n  background: #c4a35a;\n}\n.status-dot.away[_ngcontent-%COMP%] {\n  background: #c45a5a;\n}\n.search-bar[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px;\n  background: var(--input-bg);\n  color: var(--text-primary);\n  border: 1px solid var(--border-primary);\n  border-radius: 8px;\n}\n.search-results[_ngcontent-%COMP%] {\n  background: var(--bg-card);\n  border: 1px solid var(--border-primary);\n  border-radius: 8px;\n  padding: 12px;\n  margin-bottom: 16px;\n}\n.player-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 8px 0;\n}\n.player-row[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  flex: 1;\n  color: var(--text-primary);\n}\n.friends-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.friend-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px;\n  background: var(--bg-card);\n  border-radius: 8px;\n  cursor: pointer;\n}\n.friend-info[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n.friend-info[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--text-muted);\n  text-transform: capitalize;\n}\n.empty[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  text-align: center;\n  padding: 20px;\n}\n.create-alliance[_ngcontent-%COMP%] {\n  background: var(--bg-card);\n  padding: 16px;\n  border-radius: 8px;\n  margin-bottom: 24px;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 8px;\n}\n.form-row[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:first-child {\n  flex: 1;\n}\n.form-row[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:last-child {\n  width: 80px;\n  text-transform: uppercase;\n}\ninput[_ngcontent-%COMP%], \ntextarea[_ngcontent-%COMP%] {\n  padding: 10px;\n  background: var(--input-bg);\n  color: var(--text-primary);\n  border: 1px solid var(--border-primary);\n  border-radius: 6px;\n  width: 100%;\n  margin-bottom: 8px;\n}\n.alliances-list[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n  gap: 16px;\n}\n.alliance-card[_ngcontent-%COMP%] {\n  background: var(--bg-card);\n  border: 2px solid var(--border-primary);\n  border-radius: 12px;\n  padding: 16px;\n}\n.alliance-card.current[_ngcontent-%COMP%] {\n  border-color: var(--accent-gold);\n}\n.alliance-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 8px;\n}\n.tag[_ngcontent-%COMP%] {\n  color: var(--accent-gold);\n  font-weight: bold;\n}\n.alliance-header[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  color: var(--text-white);\n  font-weight: bold;\n  flex: 1;\n}\n.alliance-header[_ngcontent-%COMP%]   .level[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 0.85rem;\n}\n.desc[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font-size: 0.85rem;\n  margin: 0 0 12px;\n}\n.alliance-stats[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  margin-bottom: 12px;\n  color: var(--text-muted);\n  font-size: 0.85rem;\n}\n.chat-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 500px;\n  background: var(--bg-card);\n  border: 2px solid var(--border-primary);\n  border-radius: 12px;\n  overflow: hidden;\n}\n.chat-channels[_ngcontent-%COMP%] {\n  display: flex;\n  border-bottom: 1px solid var(--border-secondary);\n}\n.channel[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 12px;\n  background: transparent;\n  border: none;\n  color: var(--text-secondary);\n  cursor: pointer;\n}\n.channel[_ngcontent-%COMP%]:hover {\n  background: var(--card-overlay);\n}\n.channel.active[_ngcontent-%COMP%] {\n  background: var(--card-overlay);\n  color: var(--accent-gold);\n  border-bottom: 2px solid var(--accent-gold);\n}\n.channel[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.chat-messages[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.message[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n}\n.message.own[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n.msg-avatar[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n.msg-content[_ngcontent-%COMP%] {\n  max-width: 70%;\n  background: var(--card-overlay);\n  padding: 10px 14px;\n  border-radius: 12px;\n}\n.message.own[_ngcontent-%COMP%]   .msg-content[_ngcontent-%COMP%] {\n  background: rgba(255, 215, 0, 0.15);\n}\n.msg-sender[_ngcontent-%COMP%] {\n  display: block;\n  color: var(--accent-gold);\n  font-size: 0.8rem;\n  font-weight: bold;\n  margin-bottom: 4px;\n}\n.msg-text[_ngcontent-%COMP%] {\n  color: var(--text-primary);\n  font-size: 0.9rem;\n}\n.msg-time[_ngcontent-%COMP%] {\n  display: block;\n  color: var(--text-muted);\n  font-size: 0.7rem;\n  margin-top: 4px;\n}\n.chat-input[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  padding: 12px;\n  border-top: 1px solid var(--border-secondary);\n}\n.chat-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  flex: 1;\n  margin: 0;\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.8);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n}\n.modal-content[_ngcontent-%COMP%] {\n  background: var(--bg-secondary);\n  border: 2px solid var(--border-primary);\n  border-radius: 16px;\n  padding: 24px;\n  max-width: 400px;\n  width: 90%;\n  position: relative;\n}\n.close-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 12px;\n  right: 12px;\n  background: transparent;\n  border: none;\n  color: var(--text-muted);\n  font-size: 1.5rem;\n  cursor: pointer;\n}\n.profile-header[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  align-items: center;\n  margin-bottom: 20px;\n}\n.profile-header[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n  font-size: 3rem;\n}\n.profile-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: var(--text-white);\n  margin: 0 0 4px;\n}\n.profile-info[_ngcontent-%COMP%]   .level[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  display: block;\n}\n.profile-info[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 4px;\n  font-size: 0.75rem;\n  text-transform: capitalize;\n  margin-top: 4px;\n}\n.profile-info[_ngcontent-%COMP%]   .status.online[_ngcontent-%COMP%] {\n  background: rgba(90, 196, 122, 0.2);\n  color: #5ac47a;\n}\n.profile-info[_ngcontent-%COMP%]   .status.offline[_ngcontent-%COMP%] {\n  background: rgba(90, 90, 90, 0.2);\n  color: #888;\n}\n.profile-stats[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 12px;\n  margin-bottom: 20px;\n}\n.stat[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 12px;\n  background: var(--card-overlay);\n  border-radius: 8px;\n}\n.stat[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  display: block;\n  color: var(--text-muted);\n  font-size: 0.75rem;\n  margin-bottom: 4px;\n}\n.stat[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  color: var(--accent-gold);\n  font-weight: bold;\n  font-size: 1.1rem;\n}\n.profile-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n}\n/*# sourceMappingURL=social-hub.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SocialHubComponent, { className: "SocialHubComponent", filePath: "projects\\raid-squad\\src\\app\\components\\social-hub\\social-hub.component.ts", lineNumber: 279 });
})();

// src/app/views/raid-squad/raid-squad-view.component.ts
function RaidSquadViewComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.missionService.inProgressMissions().length);
  }
}
function RaidSquadViewComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.socialService.onlinePlayers().length);
  }
}
function RaidSquadViewComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-stats-header");
    \u0275\u0275elementStart(1, "div", 11);
    \u0275\u0275element(2, "app-filter-sidebar");
    \u0275\u0275elementStart(3, "div", 12);
    \u0275\u0275element(4, "app-search-sort-bar")(5, "app-mercenary-grid");
    \u0275\u0275elementEnd()();
  }
}
function RaidSquadViewComponent_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275element(1, "app-squad-panel");
    \u0275\u0275elementEnd();
  }
}
function RaidSquadViewComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-mission-board");
  }
}
function RaidSquadViewComponent_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-treasury-dashboard");
  }
}
function RaidSquadViewComponent_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-social-hub");
  }
}
function RaidSquadViewComponent_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-recruitment-board");
  }
}
var RaidSquadViewComponent = class _RaidSquadViewComponent {
  themeService = inject(ThemeService);
  missionService = inject(MissionService);
  socialService = inject(SocialService);
  activeTab = signal("marketplace");
  static \u0275fac = function RaidSquadViewComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RaidSquadViewComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RaidSquadViewComponent, selectors: [["app-raid-squad-view"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 35, vars: 22, consts: [[1, "raid-squad-wrapper"], [1, "app-container"], [1, "header-top"], [1, "header-actions"], [1, "subtitle"], [1, "tagline"], [1, "tabs"], [1, "tab", 3, "click"], [1, "badge"], [1, "badge", "online"], [1, "squad-layout"], [1, "main-content"], [1, "content-area"]], template: function RaidSquadViewComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "header")(3, "div", 2);
      \u0275\u0275element(4, "app-resource-header");
      \u0275\u0275elementStart(5, "div", 3);
      \u0275\u0275element(6, "app-notification-bell")(7, "app-theme-toggle");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "h1");
      \u0275\u0275text(9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "p", 4);
      \u0275\u0275text(11, "Gang Recruitment Portal");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "p", 5);
      \u0275\u0275text(13);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "nav", 6)(15, "button", 7);
      \u0275\u0275listener("click", function RaidSquadViewComponent_Template_button_click_15_listener() {
        return ctx.activeTab.set("marketplace");
      });
      \u0275\u0275text(16, "\u{1F3EA} Market");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "button", 7);
      \u0275\u0275listener("click", function RaidSquadViewComponent_Template_button_click_17_listener() {
        return ctx.activeTab.set("squad");
      });
      \u0275\u0275text(18, "\u2694\uFE0F Squad");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "button", 7);
      \u0275\u0275listener("click", function RaidSquadViewComponent_Template_button_click_19_listener() {
        return ctx.activeTab.set("missions");
      });
      \u0275\u0275text(20, " \u{1F5FA}\uFE0F Missions ");
      \u0275\u0275template(21, RaidSquadViewComponent_Conditional_21_Template, 2, 1, "span", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "button", 7);
      \u0275\u0275listener("click", function RaidSquadViewComponent_Template_button_click_22_listener() {
        return ctx.activeTab.set("treasury");
      });
      \u0275\u0275text(23, "\u{1F3E6} Treasury");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "button", 7);
      \u0275\u0275listener("click", function RaidSquadViewComponent_Template_button_click_24_listener() {
        return ctx.activeTab.set("social");
      });
      \u0275\u0275text(25, " \u{1F465} Social ");
      \u0275\u0275template(26, RaidSquadViewComponent_Conditional_26_Template, 2, 1, "span", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "button", 7);
      \u0275\u0275listener("click", function RaidSquadViewComponent_Template_button_click_27_listener() {
        return ctx.activeTab.set("recruitment");
      });
      \u0275\u0275text(28, "\u{1F4CB} Recruit");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(29, RaidSquadViewComponent_Conditional_29_Template, 6, 0)(30, RaidSquadViewComponent_Conditional_30_Template, 2, 0, "div", 10)(31, RaidSquadViewComponent_Conditional_31_Template, 1, 0, "app-mission-board")(32, RaidSquadViewComponent_Conditional_32_Template, 1, 0, "app-treasury-dashboard")(33, RaidSquadViewComponent_Conditional_33_Template, 1, 0, "app-social-hub")(34, RaidSquadViewComponent_Conditional_34_Template, 1, 0, "app-recruitment-board");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate1("", ctx.themeService.isDark() ? "\u{1F311}" : "\u{1F525}", " Raid Squad");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.themeService.isDark() ? "Strike from the shadows of the eclipse!" : "Burn your enemies with fire and fury!");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.activeTab() === "marketplace");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.activeTab() === "squad");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.activeTab() === "missions");
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.missionService.inProgressMissions().length > 0 ? 21 : -1);
      \u0275\u0275advance();
      \u0275\u0275classProp("active", ctx.activeTab() === "treasury");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.activeTab() === "social");
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.socialService.onlinePlayers().length > 0 ? 26 : -1);
      \u0275\u0275advance();
      \u0275\u0275classProp("active", ctx.activeTab() === "recruitment");
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.activeTab() === "marketplace" ? 29 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.activeTab() === "squad" ? 30 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.activeTab() === "missions" ? 31 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.activeTab() === "treasury" ? 32 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.activeTab() === "social" ? 33 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.activeTab() === "recruitment" ? 34 : -1);
    }
  }, dependencies: [
    FilterSidebarComponent,
    SearchSortBarComponent,
    MercenaryGridComponent,
    StatsHeaderComponent,
    ThemeToggleComponent,
    SquadPanelComponent,
    RecruitmentBoardComponent,
    NotificationBellComponent,
    MissionBoardComponent,
    ResourceHeaderComponent,
    TreasuryDashboardComponent,
    SocialHubComponent
  ], styles: ["\n\n.raid-squad-wrapper[_ngcontent-%COMP%] {\n  min-height: calc(100vh - 60px);\n  background:\n    linear-gradient(\n      180deg,\n      var(--bg-primary) 0%,\n      var(--bg-secondary) 50%,\n      var(--bg-primary) 100%);\n}\n.app-container[_ngcontent-%COMP%] {\n  max-width: 1400px;\n  margin: 0 auto;\n  padding: 24px;\n}\nheader[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 24px;\n  padding: 40px 20px;\n  background: var(--header-gradient);\n  border-radius: 16px;\n  border: 1px solid var(--header-border);\n  transition: all 0.4s;\n}\n.header-top[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\n.header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n}\nheader[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: var(--accent-gold);\n  font-size: 3rem;\n  margin: 0;\n  text-shadow: 0 0 30px rgba(255, 215, 0, 0.4);\n  letter-spacing: 2px;\n}\n.subtitle[_ngcontent-%COMP%] {\n  color: #9a6b4c;\n  font-size: 1.3rem;\n  margin: 8px 0 0;\n  text-transform: uppercase;\n  letter-spacing: 4px;\n}\n.tagline[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font-size: 1rem;\n  margin: 16px 0 0;\n}\n.tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 24px;\n  background: var(--bg-card);\n  padding: 8px;\n  border-radius: 12px;\n  border: 2px solid var(--border-primary);\n}\n.tab[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 14px 16px;\n  background: transparent;\n  border: none;\n  border-radius: 8px;\n  color: var(--text-secondary);\n  font-size: 0.95rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n  position: relative;\n}\n.tab[_ngcontent-%COMP%]:hover {\n  background: var(--card-overlay);\n  color: var(--text-primary);\n}\n.tab.active[_ngcontent-%COMP%] {\n  background: var(--accent-gold);\n  color: #000;\n}\n.tab[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 6px;\n  right: 6px;\n  background: #c45a5a;\n  color: #fff;\n  font-size: 0.7rem;\n  min-width: 18px;\n  height: 18px;\n  border-radius: 9px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.tab[_ngcontent-%COMP%]   .badge.online[_ngcontent-%COMP%] {\n  background: #5ac47a;\n}\n.main-content[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 280px 1fr;\n  gap: 24px;\n}\n.squad-layout[_ngcontent-%COMP%] {\n  max-width: 900px;\n  margin: 0 auto;\n}\n@media (max-width: 900px) {\n  .main-content[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n  .tabs[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .header-top[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 12px;\n  }\n}\n/*# sourceMappingURL=raid-squad-view.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RaidSquadViewComponent, { className: "RaidSquadViewComponent", filePath: "src\\app\\views\\raid-squad\\raid-squad-view.component.ts", lineNumber: 86 });
})();
export {
  RaidSquadViewComponent
};
//# sourceMappingURL=chunk-DEJBWYDH.js.map
