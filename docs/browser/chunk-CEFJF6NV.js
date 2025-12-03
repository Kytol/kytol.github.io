import {
  CalendarComponent,
  InputComponent
} from "./chunk-M377R3FB.js";
import {
  ButtonComponent,
  CheckboxControlValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-JV73OLQQ.js";
import {
  CommonModule,
  DatePipe,
  DecimalPipe,
  TitleCasePipe,
  UpperCasePipe,
  __spreadProps,
  __spreadValues,
  computed,
  effect,
  inject,
  output,
  signal,
  viewChild,
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
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵqueryAdvance,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuerySignal
} from "./chunk-YID5YRT4.js";

// projects/goblin-tasks/src/app/models/task.model.ts
var PRIORITY_CONFIG = {
  low: { label: "Low", color: "#4c9a6b", icon: "\u{1F7E2}" },
  medium: { label: "Medium", color: "#9a9a4c", icon: "\u{1F7E1}" },
  high: { label: "High", color: "#9a6b4c", icon: "\u{1F7E0}" },
  urgent: { label: "Urgent", color: "#9a4c4c", icon: "\u{1F534}" }
};
var CATEGORY_CONFIG = {
  mining: { label: "Mining", icon: "\u26CF\uFE0F", color: "#8b7355" },
  crafting: { label: "Crafting", icon: "\u{1F528}", color: "#cd853f" },
  gathering: { label: "Gathering", icon: "\u{1F33F}", color: "#228b22" },
  combat: { label: "Combat", icon: "\u2694\uFE0F", color: "#dc143c" },
  exploration: { label: "Exploration", icon: "\u{1F5FA}\uFE0F", color: "#4169e1" },
  general: { label: "General", icon: "\u{1F4CB}", color: "#708090" }
};
var ACHIEVEMENTS = [
  { id: "first-task", name: "First Steps", description: "Complete your first task", icon: "\u{1F3AF}", requirement: 1, type: "tasks" },
  { id: "task-5", name: "Getting Started", description: "Complete 5 tasks", icon: "\u{1F4DD}", requirement: 5, type: "tasks" },
  { id: "task-master", name: "Task Master", description: "Complete 10 tasks", icon: "\u2B50", requirement: 10, type: "tasks" },
  { id: "task-legend", name: "Task Legend", description: "Complete 50 tasks", icon: "\u{1F3C5}", requirement: 50, type: "tasks" },
  { id: "gold-100", name: "Pocket Change", description: "Earn 100 gold", icon: "\u{1FA99}", requirement: 100, type: "gold" },
  { id: "gold-500", name: "Coin Collector", description: "Earn 500 gold", icon: "\u{1F4B5}", requirement: 500, type: "gold" },
  { id: "gold-hoarder", name: "Gold Hoarder", description: "Earn 1000 gold", icon: "\u{1F4B0}", requirement: 1e3, type: "gold" },
  { id: "gold-dragon", name: "Dragon's Hoard", description: "Earn 5000 gold", icon: "\u{1F409}", requirement: 5e3, type: "gold" },
  { id: "streak-3", name: "On Fire", description: "Complete 3 tasks in a row", icon: "\u{1F525}", requirement: 3, type: "streak" },
  { id: "streak-7", name: "Unstoppable", description: "Complete 7 tasks in a row", icon: "\u{1F4AA}", requirement: 7, type: "streak" },
  { id: "streak-15", name: "Legendary Streak", description: "Complete 15 tasks in a row", icon: "\u26A1", requirement: 15, type: "streak" },
  { id: "level-3", name: "Apprentice", description: "Reach level 3", icon: "\u{1F4DA}", requirement: 3, type: "level" },
  { id: "level-5", name: "Rising Star", description: "Reach level 5", icon: "\u{1F31F}", requirement: 5, type: "level" },
  { id: "level-10", name: "Goblin Elite", description: "Reach level 10", icon: "\u{1F451}", requirement: 10, type: "level" },
  { id: "level-20", name: "Goblin King", description: "Reach level 20", icon: "\u{1F3F0}", requirement: 20, type: "level" }
];
var MOOD_CONFIG = {
  happy: { icon: "\u{1F60A}", bonus: 1.2 },
  neutral: { icon: "\u{1F610}", bonus: 1 },
  tired: { icon: "\u{1F634}", bonus: 0.8 },
  excited: { icon: "\u{1F929}", bonus: 1.5 }
};
var RARITY_CONFIG = {
  common: { color: "#9d9d9d", glow: "none" },
  uncommon: { color: "#1eff00", glow: "0 0 8px #1eff00" },
  rare: { color: "#0070dd", glow: "0 0 8px #0070dd" },
  epic: { color: "#a335ee", glow: "0 0 10px #a335ee" },
  legendary: { color: "#ff8000", glow: "0 0 12px #ff8000" }
};
var WEATHER_CONFIG = {
  sunny: { type: "sunny", name: "Sunny Day", icon: "\u2600\uFE0F", description: "Perfect working conditions!", effects: { xpMultiplier: 1, goldMultiplier: 1, energyCost: 1 } },
  rainy: { type: "rainy", name: "Rainy Weather", icon: "\u{1F327}\uFE0F", description: "Gathering tasks get a boost!", effects: { xpMultiplier: 1, goldMultiplier: 1.1, energyCost: 1.1, categoryBonus: "gathering" } },
  stormy: { type: "stormy", name: "Thunder Storm", icon: "\u26C8\uFE0F", description: "Dangerous but rewarding!", effects: { xpMultiplier: 1.5, goldMultiplier: 1.5, energyCost: 1.5 } },
  foggy: { type: "foggy", name: "Mysterious Fog", icon: "\u{1F32B}\uFE0F", description: "Exploration yields secrets!", effects: { xpMultiplier: 1.2, goldMultiplier: 1, energyCost: 0.9, categoryBonus: "exploration" } },
  magical: { type: "magical", name: "Magical Aurora", icon: "\u2728", description: "Rare magical phenomenon!", effects: { xpMultiplier: 2, goldMultiplier: 2, energyCost: 0.5 } }
};
var SHOP_ITEMS = [
  { id: "pickaxe-1", name: "Rusty Pickaxe", description: "A basic mining tool", type: "weapon", slot: "mainHand", rarity: "common", icon: "\u26CF\uFE0F", stats: { categoryBonus: { category: "mining", bonus: 0.1 } }, price: 100 },
  { id: "hammer-1", name: "Crafting Hammer", description: "Improves crafting efficiency", type: "weapon", slot: "mainHand", rarity: "common", icon: "\u{1F528}", stats: { categoryBonus: { category: "crafting", bonus: 0.1 } }, price: 100 },
  { id: "sword-1", name: "Goblin Blade", description: "A sharp combat weapon", type: "weapon", slot: "mainHand", rarity: "uncommon", icon: "\u2694\uFE0F", stats: { categoryBonus: { category: "combat", bonus: 0.15 }, xpBonus: 0.05 }, price: 250 },
  { id: "map-1", name: "Treasure Map", description: "Reveals hidden rewards", type: "accessory", slot: "accessory", rarity: "uncommon", icon: "\u{1F5FA}\uFE0F", stats: { goldBonus: 0.1, categoryBonus: { category: "exploration", bonus: 0.15 } }, price: 300 },
  { id: "helmet-1", name: "Iron Helmet", description: "Protects your noggin", type: "armor", slot: "head", rarity: "common", icon: "\u{1FA96}", stats: { energyBonus: 10 }, price: 150 },
  { id: "cloak-1", name: "Shadow Cloak", description: "Move unseen through the night", type: "armor", slot: "body", rarity: "rare", icon: "\u{1F9E5}", stats: { xpBonus: 0.15, energyBonus: 15 }, price: 500 },
  { id: "ring-1", name: "Ring of Fortune", description: "Increases gold drops", type: "accessory", slot: "accessory", rarity: "rare", icon: "\u{1F48D}", stats: { goldBonus: 0.25 }, price: 750 },
  { id: "crown-1", name: "Goblin King Crown", description: "The ultimate symbol of power", type: "armor", slot: "head", rarity: "legendary", icon: "\u{1F451}", stats: { xpBonus: 0.5, goldBonus: 0.5, energyBonus: 50 }, price: 5e3 },
  { id: "potion-energy", name: "Energy Potion", description: "Restores 50 energy", type: "consumable", rarity: "common", icon: "\u{1F9EA}", stats: { energyBonus: 50 }, price: 50, quantity: 1 },
  { id: "potion-xp", name: "XP Elixir", description: "Grants 100 bonus XP", type: "consumable", rarity: "uncommon", icon: "\u2728", stats: { xpBonus: 100 }, price: 200, quantity: 1 }
];
var RECRUITABLE_GOBLINS = [
  { id: "g6", name: "Grimjaw", avatar: "\u{1F9B7}", specialty: "combat", cost: 500, unlocked: false, description: "A fierce warrior with sharp teeth", bonusAbility: "+20% combat XP" },
  { id: "g7", name: "Sparkle", avatar: "\u{1F48E}", specialty: "mining", cost: 500, unlocked: false, description: "Has an eye for precious gems", bonusAbility: "+15% mining gold" },
  { id: "g8", name: "Whisper", avatar: "\u{1F47B}", specialty: "exploration", cost: 750, unlocked: false, description: "Can find hidden paths", bonusAbility: "-20% exploration energy" },
  { id: "g9", name: "Forge", avatar: "\u{1F525}", specialty: "crafting", cost: 750, unlocked: false, description: "Master of the forge", bonusAbility: "+25% crafting rewards" },
  { id: "g10", name: "Bloom", avatar: "\u{1F338}", specialty: "gathering", cost: 1e3, unlocked: false, description: "One with nature", bonusAbility: "Double gathering streaks" }
];
var QUEST_CHAINS = [
  {
    id: "beginner-journey",
    name: "The Goblin Way",
    description: "Learn the basics of goblin task management",
    icon: "\u{1F4DC}",
    currentStep: 0,
    completed: false,
    steps: [
      { id: "bj-1", title: "First Task", description: "Complete your first task", requirement: { type: "complete-task", target: 1 }, progress: 0, completed: false, reward: { gold: 50, xp: 25 } },
      { id: "bj-2", title: "Getting Started", description: "Complete 5 tasks", requirement: { type: "complete-task", target: 5 }, progress: 0, completed: false, reward: { gold: 100, xp: 50 } },
      { id: "bj-3", title: "Gold Collector", description: "Earn 500 gold", requirement: { type: "earn-gold", target: 500 }, progress: 0, completed: false, reward: { gold: 200, xp: 100 } }
    ],
    finalReward: { gold: 500, xp: 250 }
  },
  {
    id: "mining-master",
    name: "Mining Mastery",
    description: "Become a master of the mines",
    icon: "\u26CF\uFE0F",
    currentStep: 0,
    completed: false,
    steps: [
      { id: "mm-1", title: "Dig Deep", description: "Complete 3 mining tasks", requirement: { type: "category-tasks", target: 3, category: "mining" }, progress: 0, completed: false, reward: { gold: 75, xp: 40 } },
      { id: "mm-2", title: "Ore Finder", description: "Complete 10 mining tasks", requirement: { type: "category-tasks", target: 10, category: "mining" }, progress: 0, completed: false, reward: { gold: 200, xp: 100 } },
      { id: "mm-3", title: "Mine Lord", description: "Complete 25 mining tasks", requirement: { type: "category-tasks", target: 25, category: "mining" }, progress: 0, completed: false, reward: { gold: 500, xp: 250 } }
    ],
    finalReward: { gold: 1e3, xp: 500 }
  }
];

// projects/goblin-tasks/src/app/services/task.service.ts
var TaskService = class _TaskService {
  tasks = signal(this.createDummyTasks());
  goblins = signal(this.createDummyGoblins());
  currentStreak = signal(5);
  unlockedAchievements = signal(["first-task", "task-5", "gold-100", "streak-3", "level-3"]);
  dailyBonus = signal({ claimed: false, day: (/* @__PURE__ */ new Date()).toDateString() });
  createDummyGoblins() {
    return [
      { id: "1", name: "Gruk", avatar: "\u{1F47A}", specialty: "mining", totalRewards: 450, tasksCompleted: 8, level: 4, xp: 65, xpToNextLevel: 150, mood: "happy", energy: 80, maxEnergy: 100, skills: this.createSkills(3, 1, 1, 1, 1, 2), achievements: [] },
      { id: "2", name: "Snix", avatar: "\u{1F479}", specialty: "crafting", totalRewards: 320, tasksCompleted: 5, level: 3, xp: 40, xpToNextLevel: 150, mood: "neutral", energy: 60, maxEnergy: 100, skills: this.createSkills(1, 3, 1, 1, 1, 1), achievements: [] },
      { id: "3", name: "Blix", avatar: "\u{1F9CC}", specialty: "gathering", totalRewards: 280, tasksCompleted: 6, level: 3, xp: 80, xpToNextLevel: 150, mood: "excited", energy: 100, maxEnergy: 100, skills: this.createSkills(1, 1, 3, 1, 2, 1), achievements: [] },
      { id: "4", name: "Zork", avatar: "\u{1F608}", specialty: "combat", totalRewards: 520, tasksCompleted: 7, level: 5, xp: 20, xpToNextLevel: 225, mood: "happy", energy: 40, maxEnergy: 100, skills: this.createSkills(1, 1, 1, 4, 1, 1), achievements: [] },
      { id: "5", name: "Nix", avatar: "\u{1F9D9}", specialty: "exploration", totalRewards: 180, tasksCompleted: 3, level: 2, xp: 50, xpToNextLevel: 100, mood: "tired", energy: 30, maxEnergy: 100, skills: this.createSkills(1, 1, 1, 1, 2, 1), achievements: [] }
    ];
  }
  createSkills(mining, crafting, gathering, combat, exploration, general) {
    return [
      { category: "mining", level: mining, xp: mining * 50 },
      { category: "crafting", level: crafting, xp: crafting * 50 },
      { category: "gathering", level: gathering, xp: gathering * 50 },
      { category: "combat", level: combat, xp: combat * 50 },
      { category: "exploration", level: exploration, xp: exploration * 50 },
      { category: "general", level: general, xp: general * 50 }
    ];
  }
  createDummyTasks() {
    const now = /* @__PURE__ */ new Date();
    return [
      { id: "1", title: "Mine Iron Ore", description: "Collect 50 iron ore from the eastern mines", reward: 75, xpReward: 45, priority: "high", category: "mining", deadline: new Date(now.getTime() + 36e5 * 4), assignedGoblinId: null, status: "pending", createdAt: new Date(now.getTime() - 36e5), startedAt: null, completedAt: null, streak: 0 },
      { id: "2", title: "Craft Goblin Armor", description: "Forge a new set of leather armor", reward: 120, xpReward: 70, priority: "medium", category: "crafting", deadline: new Date(now.getTime() + 36e5 * 24), assignedGoblinId: null, status: "pending", createdAt: new Date(now.getTime() - 72e5), startedAt: null, completedAt: null, streak: 0 },
      { id: "3", title: "Scout Enemy Camp", description: "Gather intel on the human settlement nearby", reward: 100, xpReward: 60, priority: "urgent", category: "exploration", deadline: new Date(now.getTime() + 36e5 * 2), assignedGoblinId: "5", status: "in-progress", createdAt: new Date(now.getTime() - 18e5), startedAt: new Date(now.getTime() - 9e5), completedAt: null, streak: 0 },
      { id: "4", title: "Gather Mushrooms", description: "Collect rare glowing mushrooms from the cave", reward: 50, xpReward: 35, priority: "low", category: "gathering", deadline: null, assignedGoblinId: "3", status: "in-progress", createdAt: new Date(now.getTime() - 54e5), startedAt: new Date(now.getTime() - 36e5), completedAt: null, streak: 0 },
      { id: "5", title: "Defeat Cave Trolls", description: "Clear the trolls blocking the mountain pass", reward: 200, xpReward: 100, priority: "high", category: "combat", deadline: new Date(now.getTime() - 36e5), assignedGoblinId: null, status: "pending", createdAt: new Date(now.getTime() - 864e5), startedAt: null, completedAt: null, streak: 0 },
      { id: "6", title: "Repair Camp Fence", description: "Fix the broken sections of the perimeter", reward: 40, xpReward: 25, priority: "low", category: "general", deadline: null, assignedGoblinId: null, status: "pending", createdAt: new Date(now.getTime() - 432e5), startedAt: null, completedAt: null, streak: 0 },
      { id: "7", title: "Raid Supply Wagon", description: "Successfully raided merchant supplies", reward: 150, xpReward: 80, priority: "high", category: "combat", deadline: null, assignedGoblinId: "4", status: "completed", createdAt: new Date(now.getTime() - 1728e5), startedAt: new Date(now.getTime() - 864e5), completedAt: new Date(now.getTime() - 432e5), streak: 1 },
      { id: "8", title: "Brew Healing Potions", description: "Created 10 healing potions for the tribe", reward: 80, xpReward: 50, priority: "medium", category: "crafting", deadline: null, assignedGoblinId: "2", status: "completed", createdAt: new Date(now.getTime() - 2592e5), startedAt: new Date(now.getTime() - 1728e5), completedAt: new Date(now.getTime() - 864e5), streak: 2 },
      { id: "9", title: "Find Hidden Treasure", description: "Discovered ancient goblin treasure cache", reward: 300, xpReward: 120, priority: "medium", category: "exploration", deadline: null, assignedGoblinId: "1", status: "completed", createdAt: new Date(now.getTime() - 3456e5), startedAt: new Date(now.getTime() - 2592e5), completedAt: new Date(now.getTime() - 1728e5), streak: 3 }
    ];
  }
  allTasks = this.tasks.asReadonly();
  allGoblins = this.goblins.asReadonly();
  streak = this.currentStreak.asReadonly();
  achievements = this.unlockedAchievements.asReadonly();
  pendingTasks = computed(() => this.tasks().filter((t) => t.status === "pending").sort((a, b) => this.sortByPriorityAndDeadline(a, b)));
  inProgressTasks = computed(() => this.tasks().filter((t) => t.status === "in-progress").sort((a, b) => this.sortByPriorityAndDeadline(a, b)));
  completedTasks = computed(() => this.tasks().filter((t) => t.status === "completed").sort((a, b) => (b.completedAt?.getTime() || 0) - (a.completedAt?.getTime() || 0)));
  overdueTasks = computed(() => this.tasks().filter((t) => this.isOverdue(t)));
  stats = computed(() => ({
    total: this.tasks().length,
    pending: this.pendingTasks().length,
    inProgress: this.inProgressTasks().length,
    completed: this.completedTasks().length,
    overdue: this.overdueTasks().length,
    totalRewardsEarned: this.goblins().reduce((sum, g) => sum + g.totalRewards, 0),
    totalXpEarned: this.goblins().reduce((sum, g) => sum + g.xp, 0),
    highestLevel: Math.max(...this.goblins().map((g) => g.level)),
    streak: this.currentStreak(),
    achievementsUnlocked: this.unlockedAchievements().length
  }));
  canClaimDailyBonus = computed(() => {
    const bonus = this.dailyBonus();
    return !bonus.claimed || bonus.day !== (/* @__PURE__ */ new Date()).toDateString();
  });
  createGoblin(id, name, avatar, specialty) {
    return {
      id,
      name,
      avatar,
      specialty,
      totalRewards: 0,
      tasksCompleted: 0,
      level: 1,
      xp: 0,
      xpToNextLevel: 100,
      mood: "neutral",
      energy: 100,
      maxEnergy: 100,
      skills: [
        { category: "mining", level: 1, xp: 0 },
        { category: "crafting", level: 1, xp: 0 },
        { category: "gathering", level: 1, xp: 0 },
        { category: "combat", level: 1, xp: 0 },
        { category: "exploration", level: 1, xp: 0 },
        { category: "general", level: 1, xp: 0 }
      ],
      achievements: []
    };
  }
  sortByPriorityAndDeadline(a, b) {
    const priorityOrder = { urgent: 0, high: 1, medium: 2, low: 3 };
    const priorityDiff = priorityOrder[a.priority] - priorityOrder[b.priority];
    if (priorityDiff !== 0)
      return priorityDiff;
    if (a.deadline && b.deadline)
      return a.deadline.getTime() - b.deadline.getTime();
    if (a.deadline)
      return -1;
    if (b.deadline)
      return 1;
    return 0;
  }
  isOverdue(task) {
    if (!task.deadline || task.status === "completed")
      return false;
    return /* @__PURE__ */ new Date() > task.deadline;
  }
  getTimeRemaining(deadline) {
    if (!deadline)
      return "No deadline";
    const diff = deadline.getTime() - Date.now();
    if (diff < 0)
      return "Overdue!";
    const hours = Math.floor(diff / 36e5);
    const days = Math.floor(hours / 24);
    if (days > 0)
      return `${days}d ${hours % 24}h`;
    const minutes = Math.floor(diff % 36e5 / 6e4);
    return hours > 0 ? `${hours}h ${minutes}m` : `${minutes}m`;
  }
  createTask(title, description, reward, priority, category, deadline) {
    const xpReward = Math.floor(reward / 2) + { urgent: 50, high: 30, medium: 20, low: 10 }[priority];
    const task = {
      id: crypto.randomUUID(),
      title,
      description,
      reward,
      xpReward,
      priority,
      category,
      deadline,
      assignedGoblinId: null,
      status: "pending",
      createdAt: /* @__PURE__ */ new Date(),
      startedAt: null,
      completedAt: null,
      streak: 0
    };
    this.tasks.update((tasks) => [...tasks, task]);
  }
  assignTask(taskId, goblinId) {
    const goblin = this.goblins().find((g) => g.id === goblinId);
    if (!goblin || goblin.energy < 20)
      return;
    this.tasks.update((tasks) => tasks.map((t) => t.id === taskId ? __spreadProps(__spreadValues({}, t), { assignedGoblinId: goblinId, status: "in-progress", startedAt: /* @__PURE__ */ new Date() }) : t));
    this.goblins.update((goblins) => goblins.map((g) => g.id === goblinId ? __spreadProps(__spreadValues({}, g), { energy: Math.max(0, g.energy - 20) }) : g));
  }
  completeTask(taskId) {
    const task = this.tasks().find((t) => t.id === taskId);
    if (!task || !task.assignedGoblinId)
      return;
    const goblin = this.goblins().find((g) => g.id === task.assignedGoblinId);
    if (!goblin)
      return;
    const isOnTime = !task.deadline || /* @__PURE__ */ new Date() <= task.deadline;
    const isSpecialty = goblin.specialty === task.category;
    const moodBonus = MOOD_CONFIG[goblin.mood].bonus;
    const specialtyBonus = isSpecialty ? 1.25 : 1;
    const timeBonus = isOnTime ? 1 : 0.5;
    const finalReward = Math.floor(task.reward * moodBonus * specialtyBonus * timeBonus);
    const finalXp = Math.floor(task.xpReward * moodBonus * specialtyBonus);
    this.tasks.update((tasks) => tasks.map((t) => t.id === taskId ? __spreadProps(__spreadValues({}, t), { status: "completed", completedAt: /* @__PURE__ */ new Date() }) : t));
    this.currentStreak.update((s) => s + 1);
    this.updateGoblinStats(goblin.id, finalReward, finalXp, task.category);
    this.checkAchievements(goblin.id);
  }
  updateGoblinStats(goblinId, reward, xp, category) {
    this.goblins.update((goblins) => goblins.map((g) => {
      if (g.id !== goblinId)
        return g;
      let newXp = g.xp + xp;
      let newLevel = g.level;
      let newXpToNext = g.xpToNextLevel;
      while (newXp >= newXpToNext) {
        newXp -= newXpToNext;
        newLevel++;
        newXpToNext = Math.floor(newXpToNext * 1.5);
      }
      const newMood = newLevel > g.level ? "excited" : g.tasksCompleted % 5 === 4 ? "happy" : g.mood;
      const skills = g.skills.map((s) => s.category === category ? __spreadProps(__spreadValues({}, s), { xp: s.xp + xp, level: Math.floor((s.xp + xp) / 100) + 1 }) : s);
      return __spreadProps(__spreadValues({}, g), {
        totalRewards: g.totalRewards + reward,
        tasksCompleted: g.tasksCompleted + 1,
        xp: newXp,
        level: newLevel,
        xpToNextLevel: newXpToNext,
        mood: newMood,
        skills
      });
    }));
  }
  checkAchievements(goblinId) {
    const goblin = this.goblins().find((g) => g.id === goblinId);
    if (!goblin)
      return;
    ACHIEVEMENTS.forEach((ach) => {
      if (this.unlockedAchievements().includes(ach.id))
        return;
      let unlocked = false;
      if (ach.type === "tasks" && goblin.tasksCompleted >= ach.requirement)
        unlocked = true;
      if (ach.type === "gold" && goblin.totalRewards >= ach.requirement)
        unlocked = true;
      if (ach.type === "streak" && this.currentStreak() >= ach.requirement)
        unlocked = true;
      if (ach.type === "level" && goblin.level >= ach.requirement)
        unlocked = true;
      if (unlocked)
        this.unlockedAchievements.update((list) => [...list, ach.id]);
    });
  }
  claimDailyBonus() {
    if (!this.canClaimDailyBonus())
      return 0;
    const bonus = 100 + Math.floor(Math.random() * 100);
    this.dailyBonus.set({ claimed: true, day: (/* @__PURE__ */ new Date()).toDateString() });
    this.goblins.update((goblins) => goblins.map((g, i) => i === 0 ? __spreadProps(__spreadValues({}, g), { totalRewards: g.totalRewards + bonus }) : g));
    return bonus;
  }
  restGoblin(goblinId) {
    this.goblins.update((goblins) => goblins.map((g) => g.id === goblinId ? __spreadProps(__spreadValues({}, g), { energy: Math.min(g.maxEnergy, g.energy + 30), mood: "neutral" }) : g));
  }
  deleteTask(taskId) {
    this.tasks.update((tasks) => tasks.filter((t) => t.id !== taskId));
  }
  getGoblinById(id) {
    return this.goblins().find((g) => g.id === id);
  }
  addGoblin(id, name, avatar, specialty) {
    const newGoblin = this.createGoblin(id, name, avatar, specialty);
    this.goblins.update((goblins) => [...goblins, newGoblin]);
  }
  boostGoblinEnergy(goblinId, amount) {
    this.goblins.update((goblins) => goblins.map((g) => g.id === goblinId ? __spreadProps(__spreadValues({}, g), { energy: Math.min(g.maxEnergy, g.energy + amount) }) : g));
  }
  addXpToGoblin(goblinId, xp) {
    this.goblins.update((goblins) => goblins.map((g) => {
      if (g.id !== goblinId)
        return g;
      let newXp = g.xp + xp;
      let newLevel = g.level;
      let newXpToNext = g.xpToNextLevel;
      while (newXp >= newXpToNext) {
        newXp -= newXpToNext;
        newLevel++;
        newXpToNext = Math.floor(newXpToNext * 1.5);
      }
      return __spreadProps(__spreadValues({}, g), { xp: newXp, level: newLevel, xpToNextLevel: newXpToNext });
    }));
  }
  static \u0275fac = function TaskService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TaskService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TaskService, factory: _TaskService.\u0275fac, providedIn: "root" });
};

// projects/goblin-tasks/src/app/components/task-panel/task-panel.component.ts
var _forTrack0 = ($index, $item) => $item.value;
var _forTrack1 = ($index, $item) => $item.id;
function TaskPanelComponent_Case_17_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r3 = ctx.$implicit;
    \u0275\u0275property("value", c_r3.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", c_r3.icon, " ", c_r3.label, "");
  }
}
function TaskPanelComponent_Case_17_For_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r4 = ctx.$implicit;
    \u0275\u0275property("value", p_r4.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", p_r4.icon, " ", p_r4.label, "");
  }
}
function TaskPanelComponent_Case_17_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20)(1, "ui-calendar", 22);
    \u0275\u0275listener("valueChange", function TaskPanelComponent_Case_17_Conditional_30_Template_ui_calendar_valueChange_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onDeadlineChange($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("showTime", true)("minDate", ctx_r1.minDate)("value", ctx_r1.deadline);
  }
}
function TaskPanelComponent_Case_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "h3");
    \u0275\u0275text(2, "\u{1F4DC} Create New Task");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 8)(4, "ui-input", 9);
    \u0275\u0275twoWayListener("ngModelChange", function TaskPanelComponent_Case_17_Template_ui_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.title, $event) || (ctx_r1.title = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "ui-input", 10);
    \u0275\u0275twoWayListener("ngModelChange", function TaskPanelComponent_Case_17_Template_ui_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.description, $event) || (ctx_r1.description = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 11)(7, "ui-input", 12);
    \u0275\u0275twoWayListener("ngModelChange", function TaskPanelComponent_Case_17_Template_ui_input_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.reward, $event) || (ctx_r1.reward = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 13)(9, "label");
    \u0275\u0275text(10, "Category");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "select", 14);
    \u0275\u0275twoWayListener("ngModelChange", function TaskPanelComponent_Case_17_Template_select_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.category, $event) || (ctx_r1.category = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275repeaterCreate(12, TaskPanelComponent_Case_17_For_13_Template, 2, 3, "option", 15, _forTrack0);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 11)(15, "div", 13)(16, "label");
    \u0275\u0275text(17, "Priority");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "select", 14);
    \u0275\u0275twoWayListener("ngModelChange", function TaskPanelComponent_Case_17_Template_select_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.priority, $event) || (ctx_r1.priority = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275repeaterCreate(19, TaskPanelComponent_Case_17_For_20_Template, 2, 3, "option", 15, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 16)(22, "label");
    \u0275\u0275text(23, "XP Reward");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span", 17);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "div", 18)(27, "label")(28, "input", 19);
    \u0275\u0275twoWayListener("ngModelChange", function TaskPanelComponent_Case_17_Template_input_ngModelChange_28_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.hasDeadline, $event) || (ctx_r1.hasDeadline = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(29, " Set Deadline ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(30, TaskPanelComponent_Case_17_Conditional_30_Template, 2, 3, "div", 20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "ui-button", 21);
    \u0275\u0275listener("clicked", function TaskPanelComponent_Case_17_Template_ui_button_clicked_31_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.createTask());
    });
    \u0275\u0275text(32, "\u2728 Create Task");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.title);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.description);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.reward);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.category);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.categories);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.priority);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.priorities);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("\u2B50 ", ctx_r1.calculateXp(), "");
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.hasDeadline);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.hasDeadline ? 30 : -1);
  }
}
function TaskPanelComponent_Case_18_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23)(1, "span", 25);
    \u0275\u0275text(2, "\u{1F4ED}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No tasks available");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "ui-button", 26);
    \u0275\u0275listener("clicked", function TaskPanelComponent_Case_18_Conditional_3_Template_ui_button_clicked_5_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.activeTab.set("create"));
    });
    \u0275\u0275text(6, "Create a Task");
    \u0275\u0275elementEnd()();
  }
}
function TaskPanelComponent_Case_18_Conditional_4_For_2_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 41);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const task_r8 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("urgent", ctx_r1.taskService.isOverdue(task_r8));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u23F0 ", ctx_r1.taskService.getTimeRemaining(task_r8.deadline), " ");
  }
}
function TaskPanelComponent_Case_18_Conditional_4_For_2_For_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const goblin_r9 = ctx.$implicit;
    \u0275\u0275property("value", goblin_r9.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3("", goblin_r9.avatar, " ", goblin_r9.name, " (\u26A1", goblin_r9.energy, ")");
  }
}
function TaskPanelComponent_Case_18_Conditional_4_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28)(1, "div", 29)(2, "span", 30);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 31);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "uppercase");
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, TaskPanelComponent_Case_18_Conditional_4_For_2_Conditional_7_Template, 2, 3, "span", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 33)(9, "h4");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 34)(14, "span", 35);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 36);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "div", 37)(19, "div", 38)(20, "select", null, 0);
    \u0275\u0275repeaterCreate(22, TaskPanelComponent_Case_18_Conditional_4_For_2_For_23_Template, 2, 4, "option", 15, _forTrack1);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 39)(25, "ui-button", 40);
    \u0275\u0275listener("clicked", function TaskPanelComponent_Case_18_Conditional_4_For_2_Template_ui_button_clicked_25_listener() {
      const task_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const goblinSelect_r10 = \u0275\u0275reference(21);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.assignTask(task_r8.id, goblinSelect_r10.value));
    });
    \u0275\u0275text(26, " Assign ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "ui-button", 26);
    \u0275\u0275listener("clicked", function TaskPanelComponent_Case_18_Conditional_4_For_2_Template_ui_button_clicked_27_listener() {
      const task_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.deleteTask(task_r8.id));
    });
    \u0275\u0275text(28, " \u{1F5D1}\uFE0F ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const task_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("overdue", ctx_r1.taskService.isOverdue(task_r8));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.getCategoryIcon(task_r8.category));
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", ctx_r1.getPriorityColor(task_r8.priority));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r1.getPriorityIcon(task_r8.priority), " ", \u0275\u0275pipeBind1(6, 12, task_r8.priority), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(task_r8.deadline ? 7 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(task_r8.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(task_r8.description);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u{1F4B0} ", task_r8.reward, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u2B50 ", task_r8.xpReward, " XP");
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r1.taskService.allGoblins());
  }
}
function TaskPanelComponent_Case_18_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275repeaterCreate(1, TaskPanelComponent_Case_18_Conditional_4_For_2_Template, 29, 14, "div", 27, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.taskService.pendingTasks());
  }
}
function TaskPanelComponent_Case_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "h3");
    \u0275\u0275text(2, "\u{1F4CB} Available Tasks");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, TaskPanelComponent_Case_18_Conditional_3_Template, 7, 0, "div", 23)(4, TaskPanelComponent_Case_18_Conditional_4_Template, 3, 0, "div", 24);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.taskService.pendingTasks().length === 0 ? 3 : 4);
  }
}
function TaskPanelComponent_Case_19_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "span", 25);
    \u0275\u0275text(2, "\u{1F634}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No tasks in progress");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 42);
    \u0275\u0275text(6, "Assign a task to a goblin to get started!");
    \u0275\u0275elementEnd()();
  }
}
function TaskPanelComponent_Case_19_Conditional_4_For_2_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 41);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const task_r12 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("urgent", ctx_r1.taskService.isOverdue(task_r12));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u23F0 ", ctx_r1.taskService.getTimeRemaining(task_r12.deadline), " ");
  }
}
function TaskPanelComponent_Case_19_Conditional_4_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 44)(1, "div", 29)(2, "span", 30);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 31);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, TaskPanelComponent_Case_19_Conditional_4_For_2_Conditional_6_Template, 2, 3, "span", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 33)(8, "h4");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 45)(13, "span", 46);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 47);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 34)(19, "span", 35);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span", 36);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "div", 37)(24, "ui-button", 21);
    \u0275\u0275listener("clicked", function TaskPanelComponent_Case_19_Conditional_4_For_2_Template_ui_button_clicked_24_listener() {
      const task_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.completeTask(task_r12.id));
    });
    \u0275\u0275text(25, " \u2705 Mark Complete ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const task_r12 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("overdue", ctx_r1.taskService.isOverdue(task_r12));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.getCategoryIcon(task_r12.category));
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", ctx_r1.getPriorityColor(task_r12.priority));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getPriorityIcon(task_r12.priority), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(task_r12.deadline ? 6 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(task_r12.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(task_r12.description);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", ctx_r1.getGoblinAvatar(task_r12.assignedGoblinId), " ", ctx_r1.getGoblinName(task_r12.assignedGoblinId), " is working...");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Started ", \u0275\u0275pipeBind2(17, 14, task_r12.startedAt, "shortTime"), "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("\u{1F4B0} ", task_r12.reward, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u2B50 ", task_r12.xpReward, " XP");
  }
}
function TaskPanelComponent_Case_19_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275repeaterCreate(1, TaskPanelComponent_Case_19_Conditional_4_For_2_Template, 26, 17, "div", 43, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.taskService.inProgressTasks());
  }
}
function TaskPanelComponent_Case_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "h3");
    \u0275\u0275text(2, "\u2694\uFE0F Tasks In Progress");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, TaskPanelComponent_Case_19_Conditional_3_Template, 7, 0, "div", 23)(4, TaskPanelComponent_Case_19_Conditional_4_Template, 3, 0, "div", 24);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.taskService.inProgressTasks().length === 0 ? 3 : 4);
  }
}
function TaskPanelComponent_Case_20_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "span", 25);
    \u0275\u0275text(2, "\u{1F3AF}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No completed tasks yet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 42);
    \u0275\u0275text(6, "Complete tasks to see them here!");
    \u0275\u0275elementEnd()();
  }
}
function TaskPanelComponent_Case_20_Conditional_4_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49)(1, "div", 29)(2, "span", 30);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 50);
    \u0275\u0275text(5, "\u2705 Done");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 33)(7, "h4");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 51)(10, "span", 46);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 52);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 53)(16, "span", 35);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 36);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const task_r13 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.getCategoryIcon(task_r13.category));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(task_r13.title);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", ctx_r1.getGoblinAvatar(task_r13.assignedGoblinId), " ", ctx_r1.getGoblinName(task_r13.assignedGoblinId), "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(14, 7, task_r13.completedAt, "short"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("\u{1F4B0} ", task_r13.reward, " earned");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u2B50 ", task_r13.xpReward, " XP");
  }
}
function TaskPanelComponent_Case_20_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275repeaterCreate(1, TaskPanelComponent_Case_20_Conditional_4_For_2_Template, 20, 10, "div", 49, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.taskService.completedTasks());
  }
}
function TaskPanelComponent_Case_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "h3");
    \u0275\u0275text(2, "\u{1F3C6} Completed Tasks");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, TaskPanelComponent_Case_20_Conditional_3_Template, 7, 0, "div", 23)(4, TaskPanelComponent_Case_20_Conditional_4_Template, 3, 0, "div", 48);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.taskService.completedTasks().length === 0 ? 3 : 4);
  }
}
var TaskPanelComponent = class _TaskPanelComponent {
  taskService = inject(TaskService);
  activeTab = signal("create");
  // Form fields
  title = "";
  description = "";
  reward = "10";
  priority = "medium";
  category = "general";
  hasDeadline = false;
  deadline = null;
  minDate = /* @__PURE__ */ new Date();
  priorities = Object.entries(PRIORITY_CONFIG).map(([value, config]) => __spreadValues({ value }, config));
  categories = Object.entries(CATEGORY_CONFIG).map(([value, config]) => __spreadValues({ value }, config));
  calculateXp() {
    const base = Math.floor(Number(this.reward) / 2) || 5;
    const priorityBonus = { urgent: 50, high: 30, medium: 20, low: 10 }[this.priority];
    return base + priorityBonus;
  }
  onDeadlineChange(date) {
    if (!Array.isArray(date))
      this.deadline = date;
  }
  createTask() {
    if (!this.title.trim())
      return;
    this.taskService.createTask(this.title, this.description, Number(this.reward) || 10, this.priority, this.category, this.hasDeadline ? this.deadline : null);
    this.title = "";
    this.description = "";
    this.reward = "10";
    this.priority = "medium";
    this.category = "general";
    this.hasDeadline = false;
    this.deadline = null;
    this.activeTab.set("available");
  }
  assignTask(taskId, goblinId) {
    this.taskService.assignTask(taskId, goblinId);
  }
  completeTask(taskId) {
    this.taskService.completeTask(taskId);
  }
  deleteTask(taskId) {
    this.taskService.deleteTask(taskId);
  }
  getGoblinName(goblinId) {
    if (!goblinId)
      return "Unknown";
    const goblin = this.taskService.getGoblinById(goblinId);
    return goblin?.name || "Unknown";
  }
  getGoblinAvatar(goblinId) {
    if (!goblinId)
      return "\u{1F464}";
    const goblin = this.taskService.getGoblinById(goblinId);
    return goblin?.avatar || "\u{1F464}";
  }
  getPriorityColor(priority) {
    return PRIORITY_CONFIG[priority]?.color || "#fff";
  }
  getPriorityIcon(priority) {
    return PRIORITY_CONFIG[priority]?.icon || "\u26AA";
  }
  getCategoryIcon(category) {
    return CATEGORY_CONFIG[category]?.icon || "\u{1F4CB}";
  }
  static \u0275fac = function TaskPanelComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TaskPanelComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TaskPanelComponent, selectors: [["app-task-panel"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 21, vars: 12, consts: [["goblinSelect", ""], [1, "task-panel"], [1, "tabs"], [1, "tab", 3, "click"], [1, "badge"], [1, "tab-content"], [1, "create-view"], [1, "list-view"], [1, "form-fields"], ["label", "Task Title", "placeholder", "Enter task title...", 3, "ngModelChange", "ngModel"], ["label", "Description", "placeholder", "What needs to be done...", 3, "ngModelChange", "ngModel"], [1, "form-row"], ["label", "Reward (Gold)", "type", "number", "placeholder", "10", 3, "ngModelChange", "ngModel"], [1, "select-group"], [3, "ngModelChange", "ngModel"], [3, "value"], [1, "xp-preview"], [1, "xp-value"], [1, "deadline-section"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], [1, "calendar-wrapper"], ["variant", "primary", 3, "clicked"], ["mode", "single", 3, "valueChange", "showTime", "minDate", "value"], [1, "empty-state"], [1, "tasks-grid"], [1, "empty-icon"], ["variant", "outline", "size", "sm", 3, "clicked"], [1, "task-card", 3, "overdue"], [1, "task-card"], [1, "task-header"], [1, "category-icon"], [1, "priority"], [1, "deadline", 3, "urgent"], [1, "task-body"], [1, "rewards"], [1, "gold"], [1, "xp"], [1, "task-footer"], [1, "goblin-select"], [1, "actions"], ["variant", "primary", "size", "sm", 3, "clicked"], [1, "deadline"], [1, "hint"], [1, "task-card", "in-progress", 3, "overdue"], [1, "task-card", "in-progress"], [1, "worker-info"], [1, "worker"], [1, "started"], [1, "tasks-grid", "completed-grid"], [1, "task-card", "completed"], [1, "completed-badge"], [1, "completion-info"], [1, "completed-at"], [1, "rewards", "earned"]], template: function TaskPanelComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "button", 3);
      \u0275\u0275listener("click", function TaskPanelComponent_Template_button_click_2_listener() {
        return ctx.activeTab.set("create");
      });
      \u0275\u0275text(3, " \u270F\uFE0F Create Task ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "button", 3);
      \u0275\u0275listener("click", function TaskPanelComponent_Template_button_click_4_listener() {
        return ctx.activeTab.set("available");
      });
      \u0275\u0275text(5, " \u{1F4CB} Available ");
      \u0275\u0275elementStart(6, "span", 4);
      \u0275\u0275text(7);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "button", 3);
      \u0275\u0275listener("click", function TaskPanelComponent_Template_button_click_8_listener() {
        return ctx.activeTab.set("progress");
      });
      \u0275\u0275text(9, " \u2694\uFE0F In Progress ");
      \u0275\u0275elementStart(10, "span", 4);
      \u0275\u0275text(11);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "button", 3);
      \u0275\u0275listener("click", function TaskPanelComponent_Template_button_click_12_listener() {
        return ctx.activeTab.set("completed");
      });
      \u0275\u0275text(13, " \u{1F3C6} Completed ");
      \u0275\u0275elementStart(14, "span", 4);
      \u0275\u0275text(15);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(16, "div", 5);
      \u0275\u0275template(17, TaskPanelComponent_Case_17_Template, 33, 8, "div", 6)(18, TaskPanelComponent_Case_18_Template, 5, 1, "div", 7)(19, TaskPanelComponent_Case_19_Template, 5, 1, "div", 7)(20, TaskPanelComponent_Case_20_Template, 5, 1, "div", 7);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      let tmp_7_0;
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.activeTab() === "create");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.activeTab() === "available");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.taskService.pendingTasks().length);
      \u0275\u0275advance();
      \u0275\u0275classProp("active", ctx.activeTab() === "progress");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.taskService.inProgressTasks().length);
      \u0275\u0275advance();
      \u0275\u0275classProp("active", ctx.activeTab() === "completed");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.taskService.completedTasks().length);
      \u0275\u0275advance(2);
      \u0275\u0275conditional((tmp_7_0 = ctx.activeTab()) === "create" ? 17 : tmp_7_0 === "available" ? 18 : tmp_7_0 === "progress" ? 19 : tmp_7_0 === "completed" ? 20 : -1);
    }
  }, dependencies: [CommonModule, UpperCasePipe, DatePipe, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, ButtonComponent, InputComponent, CalendarComponent], styles: ["\n\n.task-panel[_ngcontent-%COMP%] {\n  background: var(--bg-card);\n  border: 2px solid var(--border-primary);\n  border-radius: 12px;\n  overflow: hidden;\n}\n.tabs[_ngcontent-%COMP%] {\n  display: flex;\n  background: var(--bg-secondary);\n  border-bottom: 2px solid var(--border-primary);\n}\n.tab[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 14px 12px;\n  background: transparent;\n  border: none;\n  color: var(--text-secondary);\n  font-size: 0.9rem;\n  cursor: pointer;\n  transition: all 0.2s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  border-bottom: 3px solid transparent;\n}\n.tab[_ngcontent-%COMP%]:hover {\n  background: var(--card-overlay);\n  color: var(--text-primary);\n}\n.tab.active[_ngcontent-%COMP%] {\n  color: var(--accent-gold);\n  background: var(--card-overlay);\n  border-bottom-color: var(--accent-gold);\n}\n.badge[_ngcontent-%COMP%] {\n  background: var(--accent-gold);\n  color: #000;\n  font-size: 0.75rem;\n  font-weight: bold;\n  padding: 2px 8px;\n  border-radius: 10px;\n  min-width: 20px;\n}\n.tab-content[_ngcontent-%COMP%] {\n  padding: 20px;\n}\nh3[_ngcontent-%COMP%] {\n  color: var(--accent-gold);\n  margin: 0 0 20px;\n  font-size: 1.25rem;\n}\n.create-view[_ngcontent-%COMP%]   .form-fields[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  margin-bottom: 20px;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n.select-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.select-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font-size: 0.875rem;\n}\n.select-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  background: var(--input-bg);\n  color: var(--text-primary);\n  border: 1px solid var(--border-primary);\n  border-radius: 6px;\n  padding: 10px 12px;\n  font-size: 1rem;\n}\n.xp-preview[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.xp-preview[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font-size: 0.875rem;\n}\n.xp-value[_ngcontent-%COMP%] {\n  background: var(--card-overlay);\n  padding: 10px 12px;\n  border-radius: 6px;\n  color: var(--accent-gold);\n  font-weight: bold;\n  font-size: 1rem;\n}\n.deadline-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.deadline-section[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%] {\n  color: var(--text-primary);\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  cursor: pointer;\n}\n.deadline-section[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  accent-color: var(--accent-purple);\n}\n.calendar-wrapper[_ngcontent-%COMP%] {\n  background: var(--input-bg);\n  border-radius: 8px;\n  padding: 12px;\n  border: 1px solid var(--border-secondary);\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px 20px;\n  color: var(--text-muted);\n}\n.empty-icon[_ngcontent-%COMP%] {\n  font-size: 4rem;\n  display: block;\n  margin-bottom: 16px;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  margin: 0 0 8px;\n  color: var(--text-secondary);\n}\n.hint[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  opacity: 0.7;\n}\n.tasks-grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.task-card[_ngcontent-%COMP%] {\n  background: var(--card-overlay);\n  border: 2px solid var(--border-secondary);\n  border-radius: 10px;\n  padding: 16px;\n  transition: all 0.2s;\n}\n.task-card[_ngcontent-%COMP%]:hover {\n  border-color: var(--border-primary);\n}\n.task-card.in-progress[_ngcontent-%COMP%] {\n  border-color: var(--border-progress);\n  background: rgba(74, 144, 217, 0.05);\n}\n.task-card.completed[_ngcontent-%COMP%] {\n  border-color: var(--border-completed);\n  opacity: 0.85;\n}\n.task-card.overdue[_ngcontent-%COMP%] {\n  border-color: var(--border-overdue);\n  background: rgba(220, 38, 38, 0.05);\n}\n.task-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 12px;\n}\n.category-icon[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n}\n.priority[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: bold;\n}\n.deadline[_ngcontent-%COMP%] {\n  margin-left: auto;\n  color: var(--text-muted);\n  font-size: 0.8rem;\n}\n.deadline.urgent[_ngcontent-%COMP%] {\n  color: #ef4444;\n  font-weight: bold;\n}\n.completed-badge[_ngcontent-%COMP%] {\n  margin-left: auto;\n  color: #5ac47a;\n  font-weight: bold;\n  font-size: 0.85rem;\n}\n.task-body[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: var(--text-primary);\n  margin: 0 0 6px;\n  font-size: 1rem;\n}\n.task-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  margin: 0 0 12px;\n  font-size: 0.85rem;\n}\n.rewards[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n}\n.rewards[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: bold;\n}\n.gold[_ngcontent-%COMP%] {\n  color: var(--accent-gold);\n}\n.xp[_ngcontent-%COMP%] {\n  color: #a78bfa;\n}\n.rewards.earned[_ngcontent-%COMP%] {\n  opacity: 0.8;\n}\n.worker-info[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 8px;\n  font-size: 0.8rem;\n}\n.worker[_ngcontent-%COMP%] {\n  color: #5ac47a;\n}\n.started[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n}\n.completion-info[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 8px;\n  font-size: 0.8rem;\n  color: var(--text-muted);\n}\n.task-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-top: 12px;\n  padding-top: 12px;\n  border-top: 1px solid var(--border-secondary);\n}\n.goblin-select[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.goblin-select[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 100%;\n  background: var(--input-bg);\n  color: var(--text-primary);\n  border: 1px solid var(--border-primary);\n  border-radius: 6px;\n  padding: 8px 10px;\n  font-size: 0.9rem;\n}\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.completed-grid[_ngcontent-%COMP%]   .task-card[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n}\n@media (max-width: 600px) {\n  .tabs[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n  .tab[_ngcontent-%COMP%] {\n    flex: 1 1 50%;\n    font-size: 0.8rem;\n    padding: 10px 8px;\n  }\n  .form-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=task-panel.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TaskPanelComponent, { className: "TaskPanelComponent", filePath: "projects\\goblin-tasks\\src\\app\\components\\task-panel\\task-panel.component.ts", lineNumber: 365 });
})();

// projects/goblin-tasks/src/app/components/goblin-leaderboard/goblin-leaderboard.component.ts
var _forTrack02 = ($index, $item) => $item.id;
function GoblinLeaderboardComponent_For_5_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "span", 13);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 14);
    \u0275\u0275text(4, "avg/task");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const goblin_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getAvgReward(goblin_r1));
  }
}
function GoblinLeaderboardComponent_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "span", 4);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 5);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 6)(6, "span", 7);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 8);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 9)(11, "span", 10);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 11);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(15, GoblinLeaderboardComponent_For_5_Conditional_15_Template, 5, 1, "div", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const goblin_r1 = ctx.$implicit;
    const \u0275$index_8_r3 = ctx.$index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("top", \u0275$index_8_r3 === 0 && goblin_r1.totalRewards > 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getRankBadge(\u0275$index_8_r3));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(goblin_r1.avatar);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(goblin_r1.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(goblin_r1.specialty);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u{1F4B0} ", goblin_r1.totalRewards, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u2705 ", goblin_r1.tasksCompleted, "");
    \u0275\u0275advance();
    \u0275\u0275conditional(goblin_r1.tasksCompleted > 0 ? 15 : -1);
  }
}
var GoblinLeaderboardComponent = class _GoblinLeaderboardComponent {
  taskService = inject(TaskService);
  sortedGoblins = computed(() => [...this.taskService.allGoblins()].sort((a, b) => b.totalRewards - a.totalRewards));
  getRankBadge(index) {
    const badges = ["\u{1F947}", "\u{1F948}", "\u{1F949}"];
    return badges[index] || `${index + 1}`;
  }
  getAvgReward(goblin) {
    if (goblin.tasksCompleted === 0)
      return "0";
    return Math.round(goblin.totalRewards / goblin.tasksCompleted).toString();
  }
  static \u0275fac = function GoblinLeaderboardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GoblinLeaderboardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GoblinLeaderboardComponent, selectors: [["app-goblin-leaderboard"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 6, vars: 0, consts: [[1, "leaderboard"], [1, "goblin-cards"], [1, "goblin-card", 3, "top"], [1, "goblin-card"], [1, "rank"], [1, "avatar"], [1, "goblin-info"], [1, "name"], [1, "specialty"], [1, "stats"], [1, "gold"], [1, "tasks"], [1, "efficiency"], [1, "avg"], [1, "label"]], template: function GoblinLeaderboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h2");
      \u0275\u0275text(2, "\u{1F3C5} Goblin Leaderboard");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 1);
      \u0275\u0275repeaterCreate(4, GoblinLeaderboardComponent_For_5_Template, 16, 9, "div", 2, _forTrack02);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275repeater(ctx.sortedGoblins());
    }
  }, dependencies: [CommonModule], styles: ["\n\n.leaderboard[_ngcontent-%COMP%] {\n  background: var(--bg-leaderboard);\n  border: 2px solid var(--border-leaderboard);\n  border-radius: 12px;\n  padding: 24px;\n  transition: all 0.3s;\n}\nh2[_ngcontent-%COMP%] {\n  color: var(--text-heading);\n  margin: 0 0 20px;\n}\n.goblin-cards[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.goblin-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  background: var(--card-overlay);\n  border-radius: 8px;\n  padding: 12px 16px;\n  transition: all 0.3s;\n}\n.goblin-card.top[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 215, 0, 0.15) 0%,\n      rgba(255, 215, 0, 0.05) 100%);\n  border: 1px solid var(--accent-gold);\n}\n.rank[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  width: 30px;\n  text-align: center;\n}\n.avatar[_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\n.goblin-info[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.name[_ngcontent-%COMP%] {\n  color: var(--text-white);\n  font-weight: bold;\n  font-size: 1rem;\n}\n.specialty[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 0.75rem;\n}\n.stats[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  margin-top: 4px;\n}\n.gold[_ngcontent-%COMP%] {\n  color: var(--accent-gold);\n  font-size: 0.85rem;\n}\n.tasks[_ngcontent-%COMP%] {\n  color: #a8c8b8;\n  font-size: 0.85rem;\n}\n.efficiency[_ngcontent-%COMP%] {\n  text-align: center;\n  background: rgba(255, 215, 0, 0.1);\n  padding: 6px 10px;\n  border-radius: 6px;\n}\n.efficiency[_ngcontent-%COMP%]   .avg[_ngcontent-%COMP%] {\n  display: block;\n  color: var(--accent-gold);\n  font-weight: bold;\n  font-size: 0.9rem;\n}\n.efficiency[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  display: block;\n  color: var(--text-muted);\n  font-size: 0.65rem;\n}\n/*# sourceMappingURL=goblin-leaderboard.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GoblinLeaderboardComponent, { className: "GoblinLeaderboardComponent", filePath: "projects\\goblin-tasks\\src\\app\\components\\goblin-leaderboard\\goblin-leaderboard.component.ts", lineNumber: 77 });
})();

// projects/goblin-tasks/src/app/components/stats-dashboard/stats-dashboard.component.ts
function StatsDashboardComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "span", 3);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 4);
    \u0275\u0275text(4, "\u26A0\uFE0F Overdue");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.stats().overdue);
  }
}
var StatsDashboardComponent = class _StatsDashboardComponent {
  taskService = inject(TaskService);
  stats = this.taskService.stats;
  static \u0275fac = function StatsDashboardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StatsDashboardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StatsDashboardComponent, selectors: [["app-stats-dashboard"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 38, vars: 8, consts: [[1, "stats-dashboard"], [1, "stats-grid"], [1, "stat-card"], [1, "stat-value"], [1, "stat-label"], [1, "stat-card", "pending"], [1, "stat-card", "progress"], [1, "stat-card", "completed"], [1, "stat-card", "overdue"], [1, "stat-card", "streak"], [1, "stat-card", "level"], [1, "stat-card", "achievements"]], template: function StatsDashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
      \u0275\u0275text(4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "span", 4);
      \u0275\u0275text(6, "Total Tasks");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 5)(8, "span", 3);
      \u0275\u0275text(9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "span", 4);
      \u0275\u0275text(11, "Pending");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "div", 6)(13, "span", 3);
      \u0275\u0275text(14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "span", 4);
      \u0275\u0275text(16, "In Progress");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "div", 7)(18, "span", 3);
      \u0275\u0275text(19);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "span", 4);
      \u0275\u0275text(21, "Completed");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(22, StatsDashboardComponent_Conditional_22_Template, 5, 1, "div", 8);
      \u0275\u0275elementStart(23, "div", 9)(24, "span", 3);
      \u0275\u0275text(25);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "span", 4);
      \u0275\u0275text(27, "Streak");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(28, "div", 10)(29, "span", 3);
      \u0275\u0275text(30);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "span", 4);
      \u0275\u0275text(32, "Top Level");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(33, "div", 11)(34, "span", 3);
      \u0275\u0275text(35);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "span", 4);
      \u0275\u0275text(37, "Trophies");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.stats().total);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.stats().pending);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.stats().inProgress);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.stats().completed);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.stats().overdue > 0 ? 22 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("\u{1F525} ", ctx.stats().streak, "");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1("\u2B50 ", ctx.stats().highestLevel, "");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1("\u{1F3C6} ", ctx.stats().achievementsUnlocked, "");
    }
  }, dependencies: [CommonModule], styles: ["\n\n.stats-dashboard[_ngcontent-%COMP%] {\n  background: var(--bg-stats);\n  border: 2px solid var(--border-stats);\n  border-radius: 12px;\n  padding: 20px;\n  margin-bottom: 24px;\n  transition: all 0.3s;\n}\n.current-time[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 16px;\n  padding-bottom: 12px;\n  border-bottom: 1px solid var(--border-secondary);\n}\n.time[_ngcontent-%COMP%] {\n  color: var(--accent-gold);\n  font-size: 1.25rem;\n  font-weight: bold;\n}\n.date[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font-size: 0.9rem;\n}\n.stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));\n  gap: 12px;\n}\n.stat-card[_ngcontent-%COMP%] {\n  background: var(--card-overlay);\n  border-radius: 8px;\n  padding: 12px;\n  text-align: center;\n  transition: all 0.3s;\n}\n.stat-value[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 1.5rem;\n  font-weight: bold;\n  color: var(--text-white);\n}\n.stat-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.75rem;\n  color: var(--text-muted);\n  margin-top: 4px;\n}\n.stat-card.pending[_ngcontent-%COMP%] {\n  border-left: 3px solid var(--border-primary);\n}\n.stat-card.progress[_ngcontent-%COMP%] {\n  border-left: 3px solid var(--border-progress);\n}\n.stat-card.completed[_ngcontent-%COMP%] {\n  border-left: 3px solid var(--border-completed);\n}\n.stat-card.overdue[_ngcontent-%COMP%] {\n  border-left: 3px solid var(--border-overdue);\n  background: rgba(154, 76, 76, 0.2);\n}\n.stat-card.streak[_ngcontent-%COMP%] {\n  border-left: 3px solid #f97316;\n}\n.stat-card.level[_ngcontent-%COMP%] {\n  border-left: 3px solid #a78bfa;\n}\n.stat-card.achievements[_ngcontent-%COMP%] {\n  border-left: 3px solid var(--accent-gold);\n}\n/*# sourceMappingURL=stats-dashboard.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StatsDashboardComponent, { className: "StatsDashboardComponent", filePath: "projects\\goblin-tasks\\src\\app\\components\\stats-dashboard\\stats-dashboard.component.ts", lineNumber: 91 });
})();

// projects/goblin-tasks/src/app/services/theme.service.ts
var ThemeService = class _ThemeService {
  STORAGE_KEY = "goblin-theme";
  theme = signal(this.loadTheme());
  isDark = () => this.theme() === "nighttime-raid";
  constructor() {
    effect(() => {
      const theme = this.theme();
      document.documentElement.setAttribute("data-theme", theme);
      localStorage.setItem(this.STORAGE_KEY, theme);
    });
  }
  loadTheme() {
    const saved = localStorage.getItem(this.STORAGE_KEY);
    return saved || "nighttime-raid";
  }
  toggle() {
    this.theme.update((t) => t === "nighttime-raid" ? "daytime-attack" : "nighttime-raid");
  }
  setTheme(theme) {
    this.theme.set(theme);
  }
  static \u0275fac = function ThemeService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ThemeService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ThemeService, factory: _ThemeService.\u0275fac, providedIn: "root" });
};

// projects/goblin-tasks/src/app/components/theme-toggle/theme-toggle.component.ts
var ThemeToggleComponent = class _ThemeToggleComponent {
  themeService = inject(ThemeService);
  get ariaLabel() {
    return this.themeService.isDark() ? "Switch to Daytime Attack mode" : "Switch to Nighttime Raid mode";
  }
  static \u0275fac = function ThemeToggleComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ThemeToggleComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ThemeToggleComponent, selectors: [["app-theme-toggle"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 9, vars: 4, consts: [[1, "theme-toggle", 3, "click"], [1, "toggle-track"], [1, "toggle-icon", "moon"], [1, "toggle-thumb"], [1, "toggle-icon", "sun"], [1, "toggle-label"]], template: function ThemeToggleComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "button", 0);
      \u0275\u0275listener("click", function ThemeToggleComponent_Template_button_click_0_listener() {
        return ctx.themeService.toggle();
      });
      \u0275\u0275elementStart(1, "span", 1)(2, "span", 2);
      \u0275\u0275text(3, "\u{1F319}");
      \u0275\u0275elementEnd();
      \u0275\u0275element(4, "span", 3);
      \u0275\u0275elementStart(5, "span", 4);
      \u0275\u0275text(6, "\u2600\uFE0F");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "span", 5);
      \u0275\u0275text(8);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275attribute("aria-label", ctx.ariaLabel);
      \u0275\u0275advance();
      \u0275\u0275classProp("light", !ctx.themeService.isDark());
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(ctx.themeService.isDark() ? "Nighttime Raid" : "Daytime Attack");
    }
  }, dependencies: [CommonModule], styles: ["\n\n.theme-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  padding: 8px;\n  border-radius: 8px;\n  transition: background 0.2s;\n}\n.theme-toggle[_ngcontent-%COMP%]:hover {\n  background: var(--hover-bg, rgba(255,255,255,0.1));\n}\n.toggle-track[_ngcontent-%COMP%] {\n  position: relative;\n  width: 60px;\n  height: 30px;\n  background:\n    linear-gradient(\n      135deg,\n      #1a1a2e 0%,\n      #16213e 100%);\n  border-radius: 15px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 6px;\n  transition: background 0.3s;\n}\n.toggle-track.light[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #87ceeb 0%,\n      #f0e68c 100%);\n}\n.toggle-thumb[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 24px;\n  height: 24px;\n  background: #fff;\n  border-radius: 50%;\n  left: 3px;\n  transition: transform 0.3s ease;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);\n}\n.toggle-track.light[_ngcontent-%COMP%]   .toggle-thumb[_ngcontent-%COMP%] {\n  transform: translateX(30px);\n}\n.toggle-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  z-index: 1;\n}\n.toggle-label[_ngcontent-%COMP%] {\n  color: var(--text-primary, #e8d5b7);\n  font-size: 0.9rem;\n  font-weight: 500;\n}\n/*# sourceMappingURL=theme-toggle.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ThemeToggleComponent, { className: "ThemeToggleComponent", filePath: "projects\\goblin-tasks\\src\\app\\components\\theme-toggle\\theme-toggle.component.ts", lineNumber: 67 });
})();

// projects/goblin-tasks/src/app/services/game.service.ts
var GameService = class _GameService {
  taskService = inject(TaskService);
  // Weather System
  currentWeather = signal(WEATHER_CONFIG.sunny);
  weatherTimer = null;
  // Daily Quests
  dailyQuests = signal([]);
  lastQuestRefresh = signal("");
  // Inventory & Shop
  inventory = signal([]);
  goblinEquipment = signal(/* @__PURE__ */ new Map());
  // Quest Chains
  questChains = signal(JSON.parse(JSON.stringify(QUEST_CHAINS)));
  // Notifications
  notifications = signal([]);
  unreadCount = signal(0);
  // Recruitable Goblins
  recruitableGoblins = signal(JSON.parse(JSON.stringify(RECRUITABLE_GOBLINS)));
  // Gold (shared with task service)
  gold = signal(500);
  // Readonly signals
  weather = this.currentWeather.asReadonly();
  quests = this.dailyQuests.asReadonly();
  items = this.inventory.asReadonly();
  chains = this.questChains.asReadonly();
  alerts = this.notifications.asReadonly();
  unread = this.unreadCount.asReadonly();
  goblinsForHire = this.recruitableGoblins.asReadonly();
  playerGold = this.gold.asReadonly();
  shopItems = SHOP_ITEMS;
  constructor() {
    this.initWeatherSystem();
    this.refreshDailyQuests();
  }
  // Weather System
  initWeatherSystem() {
    this.changeWeather();
    this.weatherTimer = setInterval(() => this.changeWeather(), 5 * 60 * 1e3);
  }
  changeWeather() {
    const weathers = ["sunny", "rainy", "stormy", "foggy", "magical"];
    const weights = [40, 25, 15, 15, 5];
    const random = Math.random() * 100;
    let cumulative = 0;
    let selected = "sunny";
    for (let i = 0; i < weathers.length; i++) {
      cumulative += weights[i];
      if (random <= cumulative) {
        selected = weathers[i];
        break;
      }
    }
    const newWeather = WEATHER_CONFIG[selected];
    if (newWeather.type !== this.currentWeather().type) {
      this.currentWeather.set(newWeather);
      this.addNotification("weather-change", "Weather Changed!", `${newWeather.icon} ${newWeather.name}: ${newWeather.description}`, newWeather.icon);
    }
  }
  forceWeatherChange() {
    this.changeWeather();
  }
  // Daily Quests
  refreshDailyQuests() {
    const today = (/* @__PURE__ */ new Date()).toDateString();
    if (this.lastQuestRefresh() === today)
      return;
    const quests = [
      { id: "dq-1", title: "Task Crusher", description: "Complete 3 tasks today", type: "complete-tasks", target: 3, progress: 0, reward: 100, xpReward: 50, completed: false, icon: "\u2705" },
      { id: "dq-2", title: "Gold Rush", description: "Earn 200 gold", type: "earn-gold", target: 200, progress: 0, reward: 75, xpReward: 40, completed: false, icon: "\u{1F4B0}" },
      { id: "dq-3", title: "Specialist", description: `Complete 2 ${this.getRandomCategory()} tasks`, type: "category-focus", target: 2, progress: 0, reward: 150, xpReward: 75, completed: false, icon: "\u{1F3AF}", category: this.getRandomCategory() }
    ];
    this.dailyQuests.set(quests);
    this.lastQuestRefresh.set(today);
    this.addNotification("daily-bonus", "New Daily Quests!", "Fresh challenges await you today!", "\u{1F4CB}");
  }
  getRandomCategory() {
    const categories = ["mining", "crafting", "gathering", "combat", "exploration"];
    return categories[Math.floor(Math.random() * categories.length)];
  }
  updateQuestProgress(type, amount, category) {
    this.dailyQuests.update((quests) => quests.map((q) => {
      if (q.completed)
        return q;
      let newProgress = q.progress;
      if (type === "task" && (q.type === "complete-tasks" || q.type === "speed-run")) {
        newProgress = q.progress + amount;
      } else if (type === "gold" && q.type === "earn-gold") {
        newProgress = q.progress + amount;
      } else if (type === "category" && q.type === "category-focus" && q.category === category) {
        newProgress = q.progress + amount;
      }
      const completed = newProgress >= q.target;
      if (completed && !q.completed) {
        this.gold.update((g) => g + q.reward);
        this.addNotification("quest-complete", "Quest Complete!", `${q.title} - Earned ${q.reward} gold!`, q.icon);
      }
      return __spreadProps(__spreadValues({}, q), { progress: Math.min(newProgress, q.target), completed });
    }));
  }
  // Inventory & Equipment
  buyItem(itemId) {
    const item = SHOP_ITEMS.find((i) => i.id === itemId);
    if (!item || this.gold() < item.price)
      return false;
    this.gold.update((g) => g - item.price);
    this.inventory.update((inv) => {
      const existing = inv.find((i) => i.id === itemId);
      if (existing && item.type === "consumable") {
        return inv.map((i) => i.id === itemId ? __spreadProps(__spreadValues({}, i), { quantity: (i.quantity || 1) + 1 }) : i);
      }
      return [...inv, __spreadProps(__spreadValues({}, item), { quantity: 1 })];
    });
    this.addNotification("item-found", "Item Purchased!", `You bought ${item.name}!`, item.icon);
    return true;
  }
  equipItem(goblinId, item) {
    if (!item.slot)
      return;
    this.goblinEquipment.update((map) => {
      const current = map.get(goblinId) || {};
      const updated = __spreadProps(__spreadValues({}, current), { [item.slot]: item });
      const newMap = new Map(map);
      newMap.set(goblinId, updated);
      return newMap;
    });
  }
  unequipItem(goblinId, slot) {
    this.goblinEquipment.update((map) => {
      const current = map.get(goblinId);
      if (!current)
        return map;
      const updated = __spreadValues({}, current);
      delete updated[slot];
      const newMap = new Map(map);
      newMap.set(goblinId, updated);
      return newMap;
    });
  }
  getGoblinEquipment(goblinId) {
    return this.goblinEquipment().get(goblinId) || {};
  }
  useConsumable(itemId, goblinId) {
    const item = this.inventory().find((i) => i.id === itemId && i.type === "consumable");
    if (!item || !item.quantity)
      return false;
    if (item.stats.energyBonus) {
      this.taskService.restGoblin(goblinId);
    }
    this.inventory.update((inv) => inv.map((i) => {
      if (i.id !== itemId)
        return i;
      const newQty = (i.quantity || 1) - 1;
      return newQty > 0 ? __spreadProps(__spreadValues({}, i), { quantity: newQty }) : i;
    }).filter((i) => i.type !== "consumable" || i.quantity && i.quantity > 0));
    return true;
  }
  // Quest Chains
  updateChainProgress(type, amount, category) {
    this.questChains.update((chains) => chains.map((chain) => {
      if (chain.completed)
        return chain;
      const steps = chain.steps.map((step, idx) => {
        if (step.completed || idx !== chain.currentStep)
          return step;
        if (step.requirement.type !== type)
          return step;
        if (type === "category-tasks" && step.requirement.category !== category)
          return step;
        const newProgress = step.progress + amount;
        const completed = newProgress >= step.requirement.target;
        if (completed && !step.completed) {
          this.gold.update((g) => g + step.reward.gold);
          this.addNotification("quest-complete", "Quest Step Complete!", `${step.title} - ${chain.name}`, "\u{1F4DC}");
        }
        return __spreadProps(__spreadValues({}, step), { progress: Math.min(newProgress, step.requirement.target), completed });
      });
      const currentStep = steps.findIndex((s) => !s.completed);
      const chainCompleted = currentStep === -1;
      if (chainCompleted && !chain.completed) {
        this.gold.update((g) => g + chain.finalReward.gold);
        this.addNotification("quest-complete", "Quest Chain Complete!", `${chain.name} - Earned ${chain.finalReward.gold} gold!`, "\u{1F3C6}");
      }
      return __spreadProps(__spreadValues({}, chain), { steps, currentStep: currentStep === -1 ? steps.length : currentStep, completed: chainCompleted });
    }));
  }
  // Notifications
  addNotification(type, title, message, icon) {
    const notification = {
      id: crypto.randomUUID(),
      type,
      title,
      message,
      icon,
      timestamp: /* @__PURE__ */ new Date(),
      read: false
    };
    this.notifications.update((n) => [notification, ...n].slice(0, 50));
    this.unreadCount.update((c) => c + 1);
  }
  markAsRead(id) {
    this.notifications.update((n) => n.map((notif) => notif.id === id && !notif.read ? __spreadProps(__spreadValues({}, notif), { read: true }) : notif));
    this.unreadCount.update((c) => Math.max(0, c - 1));
  }
  markAllAsRead() {
    this.notifications.update((n) => n.map((notif) => __spreadProps(__spreadValues({}, notif), { read: true })));
    this.unreadCount.set(0);
  }
  clearNotifications() {
    this.notifications.set([]);
    this.unreadCount.set(0);
  }
  // Goblin Recruitment
  recruitGoblin(templateId) {
    const template = this.recruitableGoblins().find((g) => g.id === templateId);
    if (!template || template.unlocked || this.gold() < template.cost)
      return false;
    this.gold.update((g) => g - template.cost);
    this.recruitableGoblins.update((goblins) => goblins.map((g) => g.id === templateId ? __spreadProps(__spreadValues({}, g), { unlocked: true }) : g));
    this.taskService.addGoblin(template.id, template.name, template.avatar, template.specialty);
    this.addNotification("achievement", "New Goblin Recruited!", `${template.name} has joined your team!`, template.avatar);
    return true;
  }
  // Gold Management
  addGold(amount) {
    this.gold.update((g) => g + amount);
    this.updateQuestProgress("gold", amount);
    this.updateChainProgress("earn-gold", amount);
  }
  spendGold(amount) {
    if (this.gold() < amount)
      return false;
    this.gold.update((g) => g - amount);
    return true;
  }
  // Calculate bonuses from equipment
  getEquipmentBonuses(goblinId, category) {
    const equipment = this.getGoblinEquipment(goblinId);
    let xpBonus = 0, goldBonus = 0, energyBonus = 0;
    Object.values(equipment).forEach((item) => {
      if (!item)
        return;
      xpBonus += item.stats.xpBonus || 0;
      goldBonus += item.stats.goldBonus || 0;
      energyBonus += item.stats.energyBonus || 0;
      if (item.stats.categoryBonus?.category === category) {
        xpBonus += item.stats.categoryBonus.bonus;
        goldBonus += item.stats.categoryBonus.bonus;
      }
    });
    return { xp: xpBonus, gold: goldBonus, energy: energyBonus };
  }
  // Get total multipliers including weather
  getTotalMultipliers(goblinId, category) {
    const weather = this.currentWeather().effects;
    const equipment = this.getEquipmentBonuses(goblinId, category);
    const weatherCategoryBonus = weather.categoryBonus === category ? 0.25 : 0;
    return {
      xp: weather.xpMultiplier * (1 + equipment.xp + weatherCategoryBonus),
      gold: weather.goldMultiplier * (1 + equipment.gold + weatherCategoryBonus),
      energyCost: weather.energyCost
    };
  }
  static \u0275fac = function GameService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GameService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _GameService, factory: _GameService.\u0275fac, providedIn: "root" });
};

// projects/goblin-tasks/src/app/components/weather-widget/weather-widget.component.ts
function WeatherWidgetComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 8);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("bonus", ctx_r0.weather().effects.xpMultiplier > 1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" XP ", ctx_r0.weather().effects.xpMultiplier > 1 ? "+" : "", "", \u0275\u0275pipeBind2(2, 4, (ctx_r0.weather().effects.xpMultiplier - 1) * 100, "1.0-0"), "% ");
  }
}
function WeatherWidgetComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 8);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("bonus", ctx_r0.weather().effects.goldMultiplier > 1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" \u{1F4B0} ", ctx_r0.weather().effects.goldMultiplier > 1 ? "+" : "", "", \u0275\u0275pipeBind2(2, 4, (ctx_r0.weather().effects.goldMultiplier - 1) * 100, "1.0-0"), "% ");
  }
}
function WeatherWidgetComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 7);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "titlecase");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(2, 1, ctx_r0.weather().effects.categoryBonus), " +25%");
  }
}
var WeatherWidgetComponent = class _WeatherWidgetComponent {
  gameService = inject(GameService);
  weather = this.gameService.weather;
  static \u0275fac = function WeatherWidgetComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WeatherWidgetComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WeatherWidgetComponent, selectors: [["app-weather-widget"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 12, vars: 8, consts: [[1, "weather-widget"], [1, "weather-icon"], [1, "weather-info"], [1, "weather-name"], [1, "weather-desc"], [1, "weather-effects"], [1, "effect", 3, "bonus"], [1, "effect", "bonus"], [1, "effect"]], template: function WeatherWidgetComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275text(2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 2)(4, "span", 3);
      \u0275\u0275text(5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "span", 4);
      \u0275\u0275text(7);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 5);
      \u0275\u0275template(9, WeatherWidgetComponent_Conditional_9_Template, 3, 7, "span", 6)(10, WeatherWidgetComponent_Conditional_10_Template, 3, 7, "span", 6)(11, WeatherWidgetComponent_Conditional_11_Template, 3, 3, "span", 7);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275classMap(ctx.weather().type);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.weather().icon);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.weather().name);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.weather().description);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.weather().effects.xpMultiplier !== 1 ? 9 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.weather().effects.goldMultiplier !== 1 ? 10 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.weather().effects.categoryBonus ? 11 : -1);
    }
  }, dependencies: [CommonModule, DecimalPipe, TitleCasePipe], styles: ["\n\n.weather-widget[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 16px;\n  background: var(--card-overlay);\n  border-radius: 12px;\n  border: 2px solid var(--border-primary);\n  transition: all 0.5s ease;\n}\n.weather-widget.sunny[_ngcontent-%COMP%] {\n  border-color: #ffd700;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 215, 0, 0.1),\n      transparent);\n}\n.weather-widget.rainy[_ngcontent-%COMP%] {\n  border-color: #4a90d9;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(74, 144, 217, 0.1),\n      transparent);\n}\n.weather-widget.stormy[_ngcontent-%COMP%] {\n  border-color: #8b5cf6;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(139, 92, 246, 0.1),\n      transparent);\n}\n.weather-widget.foggy[_ngcontent-%COMP%] {\n  border-color: #94a3b8;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(148, 163, 184, 0.1),\n      transparent);\n}\n.weather-widget.magical[_ngcontent-%COMP%] {\n  border-color: #f472b6;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(244, 114, 182, 0.15),\n      rgba(139, 92, 246, 0.1));\n  animation: _ngcontent-%COMP%_magical-glow 2s ease-in-out infinite;\n}\n@keyframes _ngcontent-%COMP%_magical-glow {\n  0%, 100% {\n    box-shadow: 0 0 10px rgba(244, 114, 182, 0.3);\n  }\n  50% {\n    box-shadow: 0 0 20px rgba(244, 114, 182, 0.5);\n  }\n}\n.weather-icon[_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\n.weather-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n}\n.weather-name[_ngcontent-%COMP%] {\n  color: var(--text-primary);\n  font-weight: bold;\n  font-size: 0.95rem;\n}\n.weather-desc[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 0.8rem;\n}\n.weather-effects[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.effect[_ngcontent-%COMP%] {\n  padding: 4px 8px;\n  border-radius: 6px;\n  font-size: 0.75rem;\n  background: var(--bg-secondary);\n  color: var(--text-secondary);\n}\n.effect.bonus[_ngcontent-%COMP%] {\n  background: rgba(76, 154, 107, 0.2);\n  color: #5ac47a;\n}\n/*# sourceMappingURL=weather-widget.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WeatherWidgetComponent, { className: "WeatherWidgetComponent", filePath: "projects\\goblin-tasks\\src\\app\\components\\weather-widget\\weather-widget.component.ts", lineNumber: 59 });
})();

// projects/goblin-tasks/src/app/components/daily-quests/daily-quests.component.ts
var _forTrack03 = ($index, $item) => $item.id;
function DailyQuestsComponent_For_8_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const quest_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getCategoryIcon(quest_r1.category));
  }
}
function DailyQuestsComponent_For_8_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 18);
    \u0275\u0275text(1, "\u2705");
    \u0275\u0275elementEnd();
  }
}
function DailyQuestsComponent_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "span", 7);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 8)(4, "span", 9);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 10);
    \u0275\u0275text(7);
    \u0275\u0275template(8, DailyQuestsComponent_For_8_Conditional_8_Template, 2, 1, "span", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 12);
    \u0275\u0275element(10, "div", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 14);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 15)(14, "span", 16);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 17);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(18, DailyQuestsComponent_For_8_Conditional_18_Template, 2, 0, "span", 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const quest_r1 = ctx.$implicit;
    \u0275\u0275classProp("completed", quest_r1.completed);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(quest_r1.icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(quest_r1.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", quest_r1.description, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(quest_r1.category ? 8 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", quest_r1.progress / quest_r1.target * 100, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", quest_r1.progress, "/", quest_r1.target, "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u{1F4B0} ", quest_r1.reward, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u2728 ", quest_r1.xpReward, " XP");
    \u0275\u0275advance();
    \u0275\u0275conditional(quest_r1.completed ? 18 : -1);
  }
}
function DailyQuestsComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275text(1, "Loading daily quests...");
    \u0275\u0275elementEnd();
  }
}
var DailyQuestsComponent = class _DailyQuestsComponent {
  gameService = inject(GameService);
  quests = this.gameService.quests;
  getCategoryIcon(cat) {
    return CATEGORY_CONFIG[cat]?.icon || "\u{1F4CB}";
  }
  static \u0275fac = function DailyQuestsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DailyQuestsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DailyQuestsComponent, selectors: [["app-daily-quests"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 10, vars: 1, consts: [[1, "daily-quests"], [1, "header"], [1, "reset-timer"], [1, "quests-list"], [1, "quest-item", 3, "completed"], [1, "no-quests"], [1, "quest-item"], [1, "quest-icon"], [1, "quest-info"], [1, "quest-title"], [1, "quest-desc"], [1, "category-tag"], [1, "progress-bar"], [1, "progress-fill"], [1, "progress-text"], [1, "quest-rewards"], [1, "reward", "gold"], [1, "reward", "xp"], [1, "completed-badge"]], template: function DailyQuestsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h3");
      \u0275\u0275text(3, "\u{1F4CB} Daily Quests");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "span", 2);
      \u0275\u0275text(5, "Resets at midnight");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 3);
      \u0275\u0275repeaterCreate(7, DailyQuestsComponent_For_8_Template, 19, 13, "div", 4, _forTrack03);
      \u0275\u0275template(9, DailyQuestsComponent_Conditional_9_Template, 2, 0, "div", 5);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275repeater(ctx.quests());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.quests().length === 0 ? 9 : -1);
    }
  }, dependencies: [CommonModule], styles: ["\n\n.daily-quests[_ngcontent-%COMP%] {\n  background: var(--bg-card);\n  border: 2px solid var(--border-primary);\n  border-radius: 12px;\n  padding: 16px;\n}\n.header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 16px;\n}\nh3[_ngcontent-%COMP%] {\n  color: var(--accent-gold);\n  margin: 0;\n  font-size: 1.1rem;\n}\n.reset-timer[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 0.75rem;\n}\n.quests-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.quest-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px;\n  background: var(--card-overlay);\n  border-radius: 8px;\n  border: 1px solid transparent;\n  transition: all 0.3s;\n}\n.quest-item[_ngcontent-%COMP%]:hover {\n  border-color: var(--border-primary);\n}\n.quest-item.completed[_ngcontent-%COMP%] {\n  opacity: 0.7;\n  background: rgba(76, 154, 107, 0.1);\n}\n.quest-icon[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n.quest-info[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.quest-title[_ngcontent-%COMP%] {\n  color: var(--text-primary);\n  font-weight: bold;\n  font-size: 0.9rem;\n}\n.quest-desc[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 0.8rem;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.category-tag[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.progress-bar[_ngcontent-%COMP%] {\n  height: 6px;\n  background: var(--border-secondary);\n  border-radius: 3px;\n  overflow: hidden;\n  margin-top: 4px;\n}\n.progress-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background: var(--accent-gold);\n  transition: width 0.3s;\n}\n.progress-text[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 0.7rem;\n}\n.quest-rewards[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  align-items: flex-end;\n}\n.reward[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  padding: 2px 6px;\n  border-radius: 4px;\n}\n.reward.gold[_ngcontent-%COMP%] {\n  color: var(--accent-gold);\n}\n.reward.xp[_ngcontent-%COMP%] {\n  color: #a78bfa;\n}\n.completed-badge[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\n.no-quests[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  text-align: center;\n  padding: 20px;\n}\n/*# sourceMappingURL=daily-quests.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DailyQuestsComponent, { className: "DailyQuestsComponent", filePath: "projects\\goblin-tasks\\src\\app\\components\\daily-quests\\daily-quests.component.ts", lineNumber: 83 });
})();

// projects/goblin-tasks/src/app/components/shop/shop.component.ts
var _forTrack04 = ($index, $item) => $item.id;
function ShopComponent_Conditional_0_Conditional_15_For_2_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("+", \u0275\u0275pipeBind2(2, 1, item_r4.stats.xpBonus * 100, "1.0-0"), "% XP");
  }
}
function ShopComponent_Conditional_0_Conditional_15_For_2_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("+", \u0275\u0275pipeBind2(2, 1, item_r4.stats.goldBonus * 100, "1.0-0"), "% Gold");
  }
}
function ShopComponent_Conditional_0_Conditional_15_For_2_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("+", item_r4.stats.energyBonus, " Energy");
  }
}
function ShopComponent_Conditional_0_Conditional_15_For_2_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275pipe(3, "titlecase");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("+", \u0275\u0275pipeBind2(2, 2, item_r4.stats.categoryBonus.bonus * 100, "1.0-0"), "% ", \u0275\u0275pipeBind1(3, 5, item_r4.stats.categoryBonus.category), "");
  }
}
function ShopComponent_Conditional_0_Conditional_15_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "span", 10);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 11)(4, "span", 12);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 13);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 14);
    \u0275\u0275template(9, ShopComponent_Conditional_0_Conditional_15_For_2_Conditional_9_Template, 3, 4, "span")(10, ShopComponent_Conditional_0_Conditional_15_For_2_Conditional_10_Template, 3, 4, "span")(11, ShopComponent_Conditional_0_Conditional_15_For_2_Conditional_11_Template, 2, 1, "span")(12, ShopComponent_Conditional_0_Conditional_15_For_2_Conditional_12_Template, 4, 7, "span");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 15)(14, "span", 16);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "ui-button", 17);
    \u0275\u0275listener("clicked", function ShopComponent_Conditional_0_Conditional_15_For_2_Template_ui_button_clicked_16_listener() {
      const item_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.buyItem(item_r4));
    });
    \u0275\u0275text(17, " Buy ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275styleProp("border-color", ctx_r1.getRarityColor(item_r4.rarity))("box-shadow", ctx_r1.getRarityGlow(item_r4.rarity));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r4.icon);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("color", ctx_r1.getRarityColor(item_r4.rarity));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r4.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r4.description);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(item_r4.stats.xpBonus ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r4.stats.goldBonus ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r4.stats.energyBonus ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r4.stats.categoryBonus ? 12 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u{1F4B0} ", item_r4.price, "");
    \u0275\u0275advance();
    \u0275\u0275property("variant", ctx_r1.gameService.playerGold() >= item_r4.price ? "primary" : "outline")("disabled", ctx_r1.gameService.playerGold() < item_r4.price);
  }
}
function ShopComponent_Conditional_0_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275repeaterCreate(1, ShopComponent_Conditional_0_Conditional_15_For_2_Template, 18, 16, "div", 8, _forTrack04);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.getFilteredItems());
  }
}
function ShopComponent_Conditional_0_Conditional_16_For_2_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("x", item_r5.quantity, "");
  }
}
function ShopComponent_Conditional_0_Conditional_16_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "span", 10);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 11)(4, "span", 12);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, ShopComponent_Conditional_0_Conditional_16_For_2_Conditional_6_Template, 2, 1, "span", 21);
    \u0275\u0275elementStart(7, "span", 22);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "titlecase");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275styleProp("border-color", ctx_r1.getRarityColor(item_r5.rarity));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r5.icon);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("color", ctx_r1.getRarityColor(item_r5.rarity));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r5.name);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r5.quantity && item_r5.quantity > 1 ? 6 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 8, item_r5.type));
  }
}
function ShopComponent_Conditional_0_Conditional_16_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275text(1, "Your inventory is empty. Buy some items!");
    \u0275\u0275elementEnd();
  }
}
function ShopComponent_Conditional_0_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275repeaterCreate(1, ShopComponent_Conditional_0_Conditional_16_For_2_Template, 10, 10, "div", 18, _forTrack04);
    \u0275\u0275template(3, ShopComponent_Conditional_0_Conditional_16_Conditional_3_Template, 2, 0, "div", 19);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.gameService.items());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.gameService.items().length === 0 ? 3 : -1);
  }
}
function ShopComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275listener("click", function ShopComponent_Conditional_0_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275elementStart(1, "div", 2);
    \u0275\u0275listener("click", function ShopComponent_Conditional_0_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "button", 3);
    \u0275\u0275listener("click", function ShopComponent_Conditional_0_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275text(3, "\u2715");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h2");
    \u0275\u0275text(5, "\u{1F3EA} Goblin Shop");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 4);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 5)(9, "button", 6);
    \u0275\u0275listener("click", function ShopComponent_Conditional_0_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.activeTab.set("equipment"));
    });
    \u0275\u0275text(10, "\u2694\uFE0F Equipment");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 6);
    \u0275\u0275listener("click", function ShopComponent_Conditional_0_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.activeTab.set("consumables"));
    });
    \u0275\u0275text(12, "\u{1F9EA} Consumables");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 6);
    \u0275\u0275listener("click", function ShopComponent_Conditional_0_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.activeTab.set("inventory"));
    });
    \u0275\u0275text(14, "\u{1F392} Inventory");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(15, ShopComponent_Conditional_0_Conditional_15_Template, 3, 0, "div", 7)(16, ShopComponent_Conditional_0_Conditional_16_Template, 4, 1, "div", 7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("\u{1F4B0} ", ctx_r1.gameService.playerGold(), " Gold");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r1.activeTab() === "equipment");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r1.activeTab() === "consumables");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r1.activeTab() === "inventory");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.activeTab() === "equipment" || ctx_r1.activeTab() === "consumables" ? 15 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.activeTab() === "inventory" ? 16 : -1);
  }
}
var ShopComponent = class _ShopComponent {
  gameService = inject(GameService);
  isOpen = signal(false);
  activeTab = signal("equipment");
  open() {
    this.isOpen.set(true);
  }
  close() {
    this.isOpen.set(false);
  }
  getFilteredItems() {
    return this.gameService.shopItems.filter((item) => this.activeTab() === "consumables" ? item.type === "consumable" : item.type !== "consumable");
  }
  getRarityColor(rarity) {
    return RARITY_CONFIG[rarity]?.color || "#9d9d9d";
  }
  getRarityGlow(rarity) {
    return RARITY_CONFIG[rarity]?.glow || "none";
  }
  buyItem(item) {
    this.gameService.buyItem(item.id);
  }
  static \u0275fac = function ShopComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ShopComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ShopComponent, selectors: [["app-shop"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [[1, "modal-overlay"], [1, "modal-overlay", 3, "click"], [1, "modal-content", 3, "click"], [1, "close-btn", 3, "click"], [1, "gold-display"], [1, "tabs"], [3, "click"], [1, "items-grid"], [1, "item-card", 3, "border-color", "box-shadow"], [1, "item-card"], [1, "item-icon"], [1, "item-info"], [1, "item-name"], [1, "item-desc"], [1, "item-stats"], [1, "item-price"], [1, "price"], ["size", "sm", 3, "clicked", "variant", "disabled"], [1, "item-card", "owned", 3, "border-color"], [1, "empty-inventory"], [1, "item-card", "owned"], [1, "quantity"], [1, "item-type"]], template: function ShopComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, ShopComponent_Conditional_0_Template, 17, 9, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.isOpen() ? 0 : -1);
    }
  }, dependencies: [CommonModule, DecimalPipe, TitleCasePipe, ButtonComponent], styles: ["\n\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.85);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n}\n.modal-content[_ngcontent-%COMP%] {\n  background: var(--bg-secondary);\n  border: 2px solid var(--accent-gold);\n  border-radius: 16px;\n  padding: 24px;\n  max-width: 700px;\n  width: 95%;\n  max-height: 85vh;\n  overflow-y: auto;\n  position: relative;\n}\n.close-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 12px;\n  right: 12px;\n  background: transparent;\n  border: none;\n  color: var(--text-muted);\n  font-size: 1.5rem;\n  cursor: pointer;\n}\nh2[_ngcontent-%COMP%] {\n  color: var(--accent-gold);\n  margin: 0 0 8px;\n  text-align: center;\n}\n.gold-display[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 1.25rem;\n  color: var(--accent-gold);\n  margin-bottom: 16px;\n}\n.tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 20px;\n  justify-content: center;\n}\n.tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border: 2px solid var(--border-primary);\n  background: transparent;\n  color: var(--text-secondary);\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.tabs[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  background: var(--accent-gold);\n  color: #000;\n  border-color: var(--accent-gold);\n}\n.items-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n  gap: 12px;\n}\n.item-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px;\n  background: var(--card-overlay);\n  border-radius: 10px;\n  border: 2px solid;\n  transition: transform 0.2s;\n}\n.item-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n}\n.item-icon[_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\n.item-info[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.item-name[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 0.95rem;\n}\n.item-desc[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 0.75rem;\n}\n.item-stats[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  margin-top: 4px;\n}\n.item-stats[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  padding: 2px 6px;\n  background: rgba(76, 154, 107, 0.2);\n  color: #5ac47a;\n  border-radius: 4px;\n}\n.item-price[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 6px;\n}\n.price[_ngcontent-%COMP%] {\n  color: var(--accent-gold);\n  font-weight: bold;\n  font-size: 0.9rem;\n}\n.quantity[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 0.8rem;\n}\n.item-type[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 0.7rem;\n  text-transform: uppercase;\n}\n.empty-inventory[_ngcontent-%COMP%] {\n  grid-column: 1 / -1;\n  text-align: center;\n  color: var(--text-muted);\n  padding: 40px;\n}\n/*# sourceMappingURL=shop.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ShopComponent, { className: "ShopComponent", filePath: "projects\\goblin-tasks\\src\\app\\components\\shop\\shop.component.ts", lineNumber: 103 });
})();

// projects/goblin-tasks/src/app/components/quest-chains/quest-chains.component.ts
var _forTrack05 = ($index, $item) => $item.id;
function QuestChainsComponent_Conditional_0_For_8_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 14);
    \u0275\u0275text(1, "\u2705");
    \u0275\u0275elementEnd();
  }
}
function QuestChainsComponent_Conditional_0_For_8_Conditional_13_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u2705 ");
  }
}
function QuestChainsComponent_Conditional_0_For_8_Conditional_13_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u{1F3AF} ");
  }
}
function QuestChainsComponent_Conditional_0_For_8_Conditional_13_For_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u{1F512} ");
  }
}
function QuestChainsComponent_Conditional_0_For_8_Conditional_13_For_2_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "div", 27);
    \u0275\u0275element(2, "div", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 29);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const step_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", step_r5.progress / step_r5.requirement.target * 100, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", step_r5.progress, "/", step_r5.requirement.target, "");
  }
}
function QuestChainsComponent_Conditional_0_For_8_Conditional_13_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "div", 21);
    \u0275\u0275template(2, QuestChainsComponent_Conditional_0_For_8_Conditional_13_For_2_Conditional_2_Template, 1, 0)(3, QuestChainsComponent_Conditional_0_For_8_Conditional_13_For_2_Conditional_3_Template, 1, 0)(4, QuestChainsComponent_Conditional_0_For_8_Conditional_13_For_2_Conditional_4_Template, 1, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 22)(6, "span", 23);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 24);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, QuestChainsComponent_Conditional_0_For_8_Conditional_13_For_2_Conditional_10_Template, 5, 4, "div", 25);
    \u0275\u0275elementStart(11, "div", 26)(12, "span");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const step_r5 = ctx.$implicit;
    const \u0275$index_42_r6 = ctx.$index;
    const chain_r4 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275classProp("active", \u0275$index_42_r6 === chain_r4.currentStep)("completed", step_r5.completed)("locked", \u0275$index_42_r6 > chain_r4.currentStep);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(step_r5.completed ? 2 : \u0275$index_42_r6 === chain_r4.currentStep ? 3 : 4);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(step_r5.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(step_r5.description);
    \u0275\u0275advance();
    \u0275\u0275conditional(\u0275$index_42_r6 === chain_r4.currentStep && !step_r5.completed ? 10 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u{1F4B0} ", step_r5.reward.gold, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u2728 ", step_r5.reward.xp, " XP");
  }
}
function QuestChainsComponent_Conditional_0_For_8_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275repeaterCreate(1, QuestChainsComponent_Conditional_0_For_8_Conditional_13_For_2_Template, 16, 12, "div", 16, _forTrack05);
    \u0275\u0275elementStart(3, "div", 17)(4, "span", 18);
    \u0275\u0275text(5, "\u{1F3C6} Final Reward:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 19);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const chain_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(chain_r4.steps);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2("\u{1F4B0} ", chain_r4.finalReward.gold, " | \u2728 ", chain_r4.finalReward.xp, " XP");
  }
}
function QuestChainsComponent_Conditional_0_For_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275listener("click", function QuestChainsComponent_Conditional_0_For_8_Template_div_click_0_listener() {
      const chain_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectChain(chain_r4));
    });
    \u0275\u0275elementStart(1, "div", 7)(2, "span", 8);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 9)(5, "span", 10);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 11);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 12)(10, "span", 13);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, QuestChainsComponent_Conditional_0_For_8_Conditional_12_Template, 2, 0, "span", 14);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(13, QuestChainsComponent_Conditional_0_For_8_Conditional_13_Template, 8, 2, "div", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_17_0;
    const chain_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("completed", chain_r4.completed);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(chain_r4.icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(chain_r4.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(chain_r4.description);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", chain_r4.currentStep, "/", chain_r4.steps.length, "");
    \u0275\u0275advance();
    \u0275\u0275conditional(chain_r4.completed ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_17_0 = ctx_r1.selectedChain()) == null ? null : tmp_17_0.id) === chain_r4.id ? 13 : -1);
  }
}
function QuestChainsComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275listener("click", function QuestChainsComponent_Conditional_0_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275elementStart(1, "div", 2);
    \u0275\u0275listener("click", function QuestChainsComponent_Conditional_0_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "button", 3);
    \u0275\u0275listener("click", function QuestChainsComponent_Conditional_0_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275text(3, "\u2715");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h2");
    \u0275\u0275text(5, "\u{1F4DC} Quest Chains");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 4);
    \u0275\u0275repeaterCreate(7, QuestChainsComponent_Conditional_0_For_8_Template, 14, 9, "div", 5, _forTrack05);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275repeater(ctx_r1.chains());
  }
}
var QuestChainsComponent = class _QuestChainsComponent {
  gameService = inject(GameService);
  chains = this.gameService.chains;
  isOpen = signal(false);
  selectedChain = signal(null);
  open() {
    this.isOpen.set(true);
  }
  close() {
    this.isOpen.set(false);
    this.selectedChain.set(null);
  }
  selectChain(chain) {
    this.selectedChain.set(this.selectedChain()?.id === chain.id ? null : chain);
  }
  static \u0275fac = function QuestChainsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _QuestChainsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _QuestChainsComponent, selectors: [["app-quest-chains"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [[1, "modal-overlay"], [1, "modal-overlay", 3, "click"], [1, "modal-content", 3, "click"], [1, "close-btn", 3, "click"], [1, "chains-list"], [1, "chain-card", 3, "completed"], [1, "chain-card", 3, "click"], [1, "chain-header"], [1, "chain-icon"], [1, "chain-info"], [1, "chain-name"], [1, "chain-desc"], [1, "chain-progress"], [1, "step-count"], [1, "completed-badge"], [1, "chain-steps"], [1, "step", 3, "active", "completed", "locked"], [1, "final-reward"], [1, "label"], [1, "rewards"], [1, "step"], [1, "step-marker"], [1, "step-content"], [1, "step-title"], [1, "step-desc"], [1, "step-progress"], [1, "step-reward"], [1, "progress-bar"], [1, "progress-fill"], [1, "progress-text"]], template: function QuestChainsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, QuestChainsComponent_Conditional_0_Template, 9, 0, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.isOpen() ? 0 : -1);
    }
  }, dependencies: [CommonModule], styles: ["\n\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.85);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n}\n.modal-content[_ngcontent-%COMP%] {\n  background: var(--bg-secondary);\n  border: 2px solid var(--accent-gold);\n  border-radius: 16px;\n  padding: 24px;\n  max-width: 600px;\n  width: 95%;\n  max-height: 85vh;\n  overflow-y: auto;\n  position: relative;\n}\n.close-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 12px;\n  right: 12px;\n  background: transparent;\n  border: none;\n  color: var(--text-muted);\n  font-size: 1.5rem;\n  cursor: pointer;\n}\nh2[_ngcontent-%COMP%] {\n  color: var(--accent-gold);\n  margin: 0 0 20px;\n  text-align: center;\n}\n.chains-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.chain-card[_ngcontent-%COMP%] {\n  background: var(--card-overlay);\n  border: 2px solid var(--border-primary);\n  border-radius: 12px;\n  padding: 16px;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n.chain-card[_ngcontent-%COMP%]:hover {\n  border-color: var(--accent-gold);\n}\n.chain-card.completed[_ngcontent-%COMP%] {\n  opacity: 0.7;\n  border-color: #5ac47a;\n}\n.chain-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.chain-icon[_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\n.chain-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.chain-name[_ngcontent-%COMP%] {\n  display: block;\n  color: var(--text-primary);\n  font-weight: bold;\n  font-size: 1.1rem;\n}\n.chain-desc[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 0.85rem;\n}\n.chain-progress[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.step-count[_ngcontent-%COMP%] {\n  color: var(--accent-gold);\n  font-weight: bold;\n}\n.completed-badge[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  display: block;\n}\n.chain-steps[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  padding-top: 16px;\n  border-top: 1px solid var(--border-secondary);\n}\n.step[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  padding: 12px;\n  margin-bottom: 8px;\n  border-radius: 8px;\n  background: var(--bg-secondary);\n}\n.step.active[_ngcontent-%COMP%] {\n  border: 1px solid var(--accent-gold);\n}\n.step.completed[_ngcontent-%COMP%] {\n  opacity: 0.6;\n}\n.step.locked[_ngcontent-%COMP%] {\n  opacity: 0.4;\n}\n.step-marker[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  width: 30px;\n  text-align: center;\n}\n.step-content[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.step-title[_ngcontent-%COMP%] {\n  display: block;\n  color: var(--text-primary);\n  font-weight: bold;\n  font-size: 0.9rem;\n}\n.step-desc[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 0.8rem;\n}\n.step-progress[_ngcontent-%COMP%] {\n  margin: 8px 0;\n}\n.progress-bar[_ngcontent-%COMP%] {\n  height: 6px;\n  background: var(--border-secondary);\n  border-radius: 3px;\n  overflow: hidden;\n}\n.progress-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background: var(--accent-gold);\n  transition: width 0.3s;\n}\n.progress-text[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 0.7rem;\n}\n.step-reward[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  margin-top: 6px;\n  font-size: 0.8rem;\n  color: var(--text-secondary);\n}\n.final-reward[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 12px;\n  background: rgba(255, 215, 0, 0.1);\n  border-radius: 8px;\n  margin-top: 12px;\n}\n.final-reward[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  color: var(--accent-gold);\n  font-weight: bold;\n}\n.final-reward[_ngcontent-%COMP%]   .rewards[_ngcontent-%COMP%] {\n  color: var(--text-primary);\n}\n/*# sourceMappingURL=quest-chains.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(QuestChainsComponent, { className: "QuestChainsComponent", filePath: "projects\\goblin-tasks\\src\\app\\components\\quest-chains\\quest-chains.component.ts", lineNumber: 110 });
})();

// projects/goblin-tasks/src/app/components/notification-center/notification-center.component.ts
var _forTrack06 = ($index, $item) => $item.id;
function NotificationCenterComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 2);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.unreadCount() > 9 ? "9+" : ctx_r0.unreadCount());
  }
}
function NotificationCenterComponent_Conditional_4_For_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275listener("click", function NotificationCenterComponent_Conditional_4_For_11_Template_div_click_0_listener() {
      const notif_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
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
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("unread", !notif_r4.read);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(notif_r4.icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(notif_r4.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(notif_r4.message);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getTimeAgo(notif_r4.timestamp));
  }
}
function NotificationCenterComponent_Conditional_4_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275text(1, "No notifications yet");
    \u0275\u0275elementEnd();
  }
}
function NotificationCenterComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "h4");
    \u0275\u0275text(3, "Notifications");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 5)(5, "button", 6);
    \u0275\u0275listener("click", function NotificationCenterComponent_Conditional_4_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.markAllRead());
    });
    \u0275\u0275text(6, "Mark all read");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 6);
    \u0275\u0275listener("click", function NotificationCenterComponent_Conditional_4_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.clearAll());
    });
    \u0275\u0275text(8, "Clear");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 7);
    \u0275\u0275repeaterCreate(10, NotificationCenterComponent_Conditional_4_For_11_Template, 10, 6, "div", 8, _forTrack06);
    \u0275\u0275template(12, NotificationCenterComponent_Conditional_4_Conditional_12_Template, 2, 0, "div", 9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275repeater(ctx_r0.notifications());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.notifications().length === 0 ? 12 : -1);
  }
}
var NotificationCenterComponent = class _NotificationCenterComponent {
  gameService = inject(GameService);
  notifications = this.gameService.alerts;
  unreadCount = this.gameService.unread;
  isPanelOpen = signal(false);
  togglePanel() {
    this.isPanelOpen.update((v) => !v);
  }
  markRead(id) {
    this.gameService.markAsRead(id);
  }
  markAllRead() {
    this.gameService.markAllAsRead();
  }
  clearAll() {
    this.gameService.clearNotifications();
    this.isPanelOpen.set(false);
  }
  getTimeAgo(date) {
    const seconds = Math.floor((Date.now() - new Date(date).getTime()) / 1e3);
    if (seconds < 60)
      return "Just now";
    if (seconds < 3600)
      return `${Math.floor(seconds / 60)}m ago`;
    if (seconds < 86400)
      return `${Math.floor(seconds / 3600)}h ago`;
    return `${Math.floor(seconds / 86400)}d ago`;
  }
  static \u0275fac = function NotificationCenterComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NotificationCenterComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NotificationCenterComponent, selectors: [["app-notification-center"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 5, vars: 2, consts: [[1, "notification-wrapper"], [1, "bell-btn", 3, "click"], [1, "badge"], [1, "notification-panel"], [1, "panel-header"], [1, "actions"], [3, "click"], [1, "notifications-list"], [1, "notification-item", 3, "unread"], [1, "empty"], [1, "notification-item", 3, "click"], [1, "notif-icon"], [1, "notif-content"], [1, "notif-title"], [1, "notif-message"], [1, "notif-time"]], template: function NotificationCenterComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "button", 1);
      \u0275\u0275listener("click", function NotificationCenterComponent_Template_button_click_1_listener() {
        return ctx.togglePanel();
      });
      \u0275\u0275text(2, " \u{1F514} ");
      \u0275\u0275template(3, NotificationCenterComponent_Conditional_3_Template, 2, 1, "span", 2);
      \u0275\u0275elementEnd();
      \u0275\u0275template(4, NotificationCenterComponent_Conditional_4_Template, 13, 1, "div", 3);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.unreadCount() > 0 ? 3 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isPanelOpen() ? 4 : -1);
    }
  }, dependencies: [CommonModule], styles: ["\n\n.notification-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n}\n.bell-btn[_ngcontent-%COMP%] {\n  background: var(--card-overlay);\n  border: 2px solid var(--border-primary);\n  border-radius: 50%;\n  width: 44px;\n  height: 44px;\n  font-size: 1.25rem;\n  cursor: pointer;\n  position: relative;\n  transition: all 0.2s;\n}\n.bell-btn[_ngcontent-%COMP%]:hover {\n  border-color: var(--accent-gold);\n}\n.badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -4px;\n  right: -4px;\n  background: #dc2626;\n  color: white;\n  font-size: 0.7rem;\n  font-weight: bold;\n  min-width: 18px;\n  height: 18px;\n  border-radius: 9px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.notification-panel[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100%;\n  right: 0;\n  margin-top: 8px;\n  width: 320px;\n  max-height: 400px;\n  background: var(--bg-secondary);\n  border: 2px solid var(--border-primary);\n  border-radius: 12px;\n  overflow: hidden;\n  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);\n  z-index: 100;\n}\n.panel-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 16px;\n  border-bottom: 1px solid var(--border-secondary);\n}\n.panel-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--text-primary);\n  font-size: 0.95rem;\n}\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  color: var(--text-muted);\n  font-size: 0.75rem;\n  cursor: pointer;\n}\n.actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  color: var(--accent-gold);\n}\n.notifications-list[_ngcontent-%COMP%] {\n  max-height: 340px;\n  overflow-y: auto;\n}\n.notification-item[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  padding: 12px 16px;\n  border-bottom: 1px solid var(--border-secondary);\n  cursor: pointer;\n  transition: background 0.2s;\n}\n.notification-item[_ngcontent-%COMP%]:hover {\n  background: var(--card-overlay);\n}\n.notification-item.unread[_ngcontent-%COMP%] {\n  background: rgba(255, 215, 0, 0.05);\n}\n.notif-icon[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n.notif-content[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.notif-title[_ngcontent-%COMP%] {\n  color: var(--text-primary);\n  font-weight: bold;\n  font-size: 0.85rem;\n}\n.notif-message[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 0.8rem;\n}\n.notif-time[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 0.7rem;\n  opacity: 0.7;\n}\n.empty[_ngcontent-%COMP%] {\n  padding: 40px;\n  text-align: center;\n  color: var(--text-muted);\n}\n/*# sourceMappingURL=notification-center.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NotificationCenterComponent, { className: "NotificationCenterComponent", filePath: "projects\\goblin-tasks\\src\\app\\components\\notification-center\\notification-center.component.ts", lineNumber: 109 });
})();

// projects/goblin-tasks/src/app/components/goblin-recruitment/goblin-recruitment.component.ts
var _forTrack07 = ($index, $item) => $item.id;
function GoblinRecruitmentComponent_Conditional_0_For_10_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 15);
    \u0275\u0275text(1, "\u2705 Recruited");
    \u0275\u0275elementEnd();
  }
}
function GoblinRecruitmentComponent_Conditional_0_For_10_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "ui-button", 17);
    \u0275\u0275listener("clicked", function GoblinRecruitmentComponent_Conditional_0_For_10_Conditional_15_Template_ui_button_clicked_2_listener() {
      \u0275\u0275restoreView(_r3);
      const goblin_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.recruit(goblin_r4.id));
    });
    \u0275\u0275text(3, " Recruit ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const goblin_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u{1F4B0} ", goblin_r4.cost, "");
    \u0275\u0275advance();
    \u0275\u0275property("variant", ctx_r1.gameService.playerGold() >= goblin_r4.cost ? "primary" : "outline")("disabled", ctx_r1.gameService.playerGold() < goblin_r4.cost);
  }
}
function GoblinRecruitmentComponent_Conditional_0_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 8);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 9)(4, "span", 10);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 11);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "titlecase");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 12);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 13);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 14);
    \u0275\u0275template(14, GoblinRecruitmentComponent_Conditional_0_For_10_Conditional_14_Template, 2, 0, "span", 15)(15, GoblinRecruitmentComponent_Conditional_0_For_10_Conditional_15_Template, 4, 3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const goblin_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("unlocked", goblin_r4.unlocked);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(goblin_r4.avatar);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(goblin_r4.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", ctx_r1.getCategoryIcon(goblin_r4.specialty), " ", \u0275\u0275pipeBind1(8, 9, goblin_r4.specialty), " Specialist ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(goblin_r4.description);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u2728 ", goblin_r4.bonusAbility, "");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(goblin_r4.unlocked ? 14 : 15);
  }
}
function GoblinRecruitmentComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275listener("click", function GoblinRecruitmentComponent_Conditional_0_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275elementStart(1, "div", 2);
    \u0275\u0275listener("click", function GoblinRecruitmentComponent_Conditional_0_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "button", 3);
    \u0275\u0275listener("click", function GoblinRecruitmentComponent_Conditional_0_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275text(3, "\u2715");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h2");
    \u0275\u0275text(5, "\u{1F9CC} Goblin Recruitment");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 4);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 5);
    \u0275\u0275repeaterCreate(9, GoblinRecruitmentComponent_Conditional_0_For_10_Template, 16, 11, "div", 6, _forTrack07);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("\u{1F4B0} ", ctx_r1.gameService.playerGold(), " Gold");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.goblins());
  }
}
var GoblinRecruitmentComponent = class _GoblinRecruitmentComponent {
  gameService = inject(GameService);
  goblins = this.gameService.goblinsForHire;
  isOpen = signal(false);
  open() {
    this.isOpen.set(true);
  }
  close() {
    this.isOpen.set(false);
  }
  getCategoryIcon(cat) {
    return CATEGORY_CONFIG[cat]?.icon || "\u{1F4CB}";
  }
  recruit(goblinId) {
    this.gameService.recruitGoblin(goblinId);
  }
  static \u0275fac = function GoblinRecruitmentComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GoblinRecruitmentComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GoblinRecruitmentComponent, selectors: [["app-goblin-recruitment"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [[1, "modal-overlay"], [1, "modal-overlay", 3, "click"], [1, "modal-content", 3, "click"], [1, "close-btn", 3, "click"], [1, "gold-display"], [1, "goblins-grid"], [1, "goblin-card", 3, "unlocked"], [1, "goblin-card"], [1, "goblin-avatar"], [1, "goblin-info"], [1, "goblin-name"], [1, "goblin-specialty"], [1, "goblin-desc"], [1, "goblin-bonus"], [1, "goblin-action"], [1, "recruited"], [1, "cost"], ["size", "sm", 3, "clicked", "variant", "disabled"]], template: function GoblinRecruitmentComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, GoblinRecruitmentComponent_Conditional_0_Template, 11, 1, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.isOpen() ? 0 : -1);
    }
  }, dependencies: [CommonModule, TitleCasePipe, ButtonComponent], styles: ["\n\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.85);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n}\n.modal-content[_ngcontent-%COMP%] {\n  background: var(--bg-secondary);\n  border: 2px solid var(--accent-gold);\n  border-radius: 16px;\n  padding: 24px;\n  max-width: 600px;\n  width: 95%;\n  max-height: 85vh;\n  overflow-y: auto;\n  position: relative;\n}\n.close-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 12px;\n  right: 12px;\n  background: transparent;\n  border: none;\n  color: var(--text-muted);\n  font-size: 1.5rem;\n  cursor: pointer;\n}\nh2[_ngcontent-%COMP%] {\n  color: var(--accent-gold);\n  margin: 0 0 8px;\n  text-align: center;\n}\n.gold-display[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 1.25rem;\n  color: var(--accent-gold);\n  margin-bottom: 20px;\n}\n.goblins-grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.goblin-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 16px;\n  background: var(--card-overlay);\n  border: 2px solid var(--border-primary);\n  border-radius: 12px;\n  transition: all 0.3s;\n}\n.goblin-card[_ngcontent-%COMP%]:hover {\n  border-color: var(--accent-gold);\n}\n.goblin-card.unlocked[_ngcontent-%COMP%] {\n  opacity: 0.7;\n  border-color: #5ac47a;\n}\n.goblin-avatar[_ngcontent-%COMP%] {\n  font-size: 3rem;\n}\n.goblin-info[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.goblin-name[_ngcontent-%COMP%] {\n  color: var(--text-primary);\n  font-weight: bold;\n  font-size: 1.1rem;\n}\n.goblin-specialty[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font-size: 0.85rem;\n}\n.goblin-desc[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 0.8rem;\n  font-style: italic;\n}\n.goblin-bonus[_ngcontent-%COMP%] {\n  color: #a78bfa;\n  font-size: 0.8rem;\n}\n.goblin-action[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n}\n.cost[_ngcontent-%COMP%] {\n  color: var(--accent-gold);\n  font-weight: bold;\n  font-size: 1rem;\n}\n.recruited[_ngcontent-%COMP%] {\n  color: #5ac47a;\n  font-weight: bold;\n}\n/*# sourceMappingURL=goblin-recruitment.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GoblinRecruitmentComponent, { className: "GoblinRecruitmentComponent", filePath: "projects\\goblin-tasks\\src\\app\\components\\goblin-recruitment\\goblin-recruitment.component.ts", lineNumber: 78 });
})();

// projects/goblin-tasks/src/app/components/action-bar/action-bar.component.ts
var ActionBarComponent = class _ActionBarComponent {
  openShop = output();
  openQuests = output();
  openRecruit = output();
  openDice = output();
  openAchievements = output();
  static \u0275fac = function ActionBarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ActionBarComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ActionBarComponent, selectors: [["app-action-bar"]], outputs: { openShop: "openShop", openQuests: "openQuests", openRecruit: "openRecruit", openDice: "openDice", openAchievements: "openAchievements" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 21, vars: 0, consts: [[1, "action-bar"], ["title", "Shop", 1, "action-btn", 3, "click"], [1, "label"], ["title", "Quest Chains", 1, "action-btn", 3, "click"], ["title", "Recruit Goblins", 1, "action-btn", 3, "click"], ["title", "Goblin Dice", 1, "action-btn", 3, "click"], ["title", "Achievements", 1, "action-btn", 3, "click"]], template: function ActionBarComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "button", 1);
      \u0275\u0275listener("click", function ActionBarComponent_Template_button_click_1_listener() {
        return ctx.openShop.emit();
      });
      \u0275\u0275text(2, " \u{1F3EA} ");
      \u0275\u0275elementStart(3, "span", 2);
      \u0275\u0275text(4, "Shop");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "button", 3);
      \u0275\u0275listener("click", function ActionBarComponent_Template_button_click_5_listener() {
        return ctx.openQuests.emit();
      });
      \u0275\u0275text(6, " \u{1F4DC} ");
      \u0275\u0275elementStart(7, "span", 2);
      \u0275\u0275text(8, "Quests");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "button", 4);
      \u0275\u0275listener("click", function ActionBarComponent_Template_button_click_9_listener() {
        return ctx.openRecruit.emit();
      });
      \u0275\u0275text(10, " \u{1F9CC} ");
      \u0275\u0275elementStart(11, "span", 2);
      \u0275\u0275text(12, "Recruit");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "button", 5);
      \u0275\u0275listener("click", function ActionBarComponent_Template_button_click_13_listener() {
        return ctx.openDice.emit();
      });
      \u0275\u0275text(14, " \u{1F3B2} ");
      \u0275\u0275elementStart(15, "span", 2);
      \u0275\u0275text(16, "Dice");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "button", 6);
      \u0275\u0275listener("click", function ActionBarComponent_Template_button_click_17_listener() {
        return ctx.openAchievements.emit();
      });
      \u0275\u0275text(18, " \u{1F3C6} ");
      \u0275\u0275elementStart(19, "span", 2);
      \u0275\u0275text(20, "Trophies");
      \u0275\u0275elementEnd()()();
    }
  }, dependencies: [CommonModule], styles: ["\n\n.action-bar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 12px;\n  padding: 12px;\n  background: var(--card-overlay);\n  border-radius: 12px;\n  border: 2px solid var(--border-primary);\n}\n.action-btn[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n  padding: 12px 20px;\n  background: var(--bg-secondary);\n  border: 2px solid var(--border-secondary);\n  border-radius: 10px;\n  cursor: pointer;\n  transition: all 0.2s;\n  font-size: 1.5rem;\n}\n.action-btn[_ngcontent-%COMP%]:hover {\n  border-color: var(--accent-gold);\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(255, 215, 0, 0.2);\n}\n.label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--text-secondary);\n}\n.action-btn[_ngcontent-%COMP%]:hover   .label[_ngcontent-%COMP%] {\n  color: var(--accent-gold);\n}\n/*# sourceMappingURL=action-bar.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ActionBarComponent, { className: "ActionBarComponent", filePath: "projects\\goblin-tasks\\src\\app\\components\\action-bar\\action-bar.component.ts", lineNumber: 69 });
})();

// projects/goblin-tasks/src/app/components/achievements/achievements.component.ts
var _forTrack08 = ($index, $item) => $item.id;
function AchievementsComponent_Conditional_0_For_12_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 15);
    \u0275\u0275text(1, "\u2705");
    \u0275\u0275elementEnd();
  }
}
function AchievementsComponent_Conditional_0_For_12_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 16);
    \u0275\u0275text(1, "\u{1F512}");
    \u0275\u0275elementEnd();
  }
}
function AchievementsComponent_Conditional_0_For_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "span", 10);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 11)(4, "span", 12);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 13);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 14);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(10, AchievementsComponent_Conditional_0_For_12_Conditional_10_Template, 2, 0, "span", 15)(11, AchievementsComponent_Conditional_0_For_12_Conditional_11_Template, 2, 0, "span", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ach_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("unlocked", ctx_r1.isUnlocked(ach_r3.id));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ach_r3.icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ach_r3.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ach_r3.description);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getRequirementText(ach_r3));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isUnlocked(ach_r3.id) ? 10 : 11);
  }
}
function AchievementsComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275listener("click", function AchievementsComponent_Conditional_0_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275elementStart(1, "div", 2);
    \u0275\u0275listener("click", function AchievementsComponent_Conditional_0_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "button", 3);
    \u0275\u0275listener("click", function AchievementsComponent_Conditional_0_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275text(3, "\u2715");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h2");
    \u0275\u0275text(5, "\u{1F3C6} Trophies");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 4);
    \u0275\u0275element(7, "div", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 6);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 7);
    \u0275\u0275repeaterCreate(11, AchievementsComponent_Conditional_0_For_12_Template, 12, 7, "div", 8, _forTrack08);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275styleProp("width", ctx_r1.taskService.achievements().length / ctx_r1.allAchievements.length * 100, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r1.taskService.achievements().length, " / ", ctx_r1.allAchievements.length, " Unlocked");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.allAchievements);
  }
}
var AchievementsComponent = class _AchievementsComponent {
  taskService = inject(TaskService);
  allAchievements = ACHIEVEMENTS;
  isOpen = signal(false);
  open() {
    this.isOpen.set(true);
  }
  close() {
    this.isOpen.set(false);
  }
  isUnlocked(id) {
    return this.taskService.achievements().includes(id);
  }
  getRequirementText(ach) {
    const typeLabels = {
      tasks: "tasks completed",
      gold: "gold earned",
      streak: "task streak",
      level: "level reached"
    };
    return `Requires: ${ach.requirement} ${typeLabels[ach.type]}`;
  }
  static \u0275fac = function AchievementsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AchievementsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AchievementsComponent, selectors: [["app-achievements"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [[1, "modal-overlay"], [1, "modal-overlay", 3, "click"], [1, "modal-content", 3, "click"], [1, "close-btn", 3, "click"], [1, "progress-bar"], [1, "progress-fill"], [1, "progress-text"], [1, "achievements-grid"], [1, "achievement", 3, "unlocked"], [1, "achievement"], [1, "icon"], [1, "info"], [1, "name"], [1, "desc"], [1, "requirement"], [1, "check"], [1, "locked"]], template: function AchievementsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, AchievementsComponent_Conditional_0_Template, 13, 4, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.isOpen() ? 0 : -1);
    }
  }, dependencies: [CommonModule], styles: ["\n\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.9);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n}\n.modal-content[_ngcontent-%COMP%] {\n  background: #1a1a1a;\n  border: 1px solid #333;\n  border-radius: 12px;\n  padding: 20px;\n  max-width: 500px;\n  width: 95%;\n  max-height: 80vh;\n  overflow-y: auto;\n  position: relative;\n  scrollbar-width: thin;\n  scrollbar-color: #444 #1a1a1a;\n}\n.modal-content[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n}\n.modal-content[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #1a1a1a;\n}\n.modal-content[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #444;\n  border-radius: 3px;\n}\n.modal-content[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #555;\n}\n.close-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 12px;\n  right: 12px;\n  background: transparent;\n  border: none;\n  color: #666;\n  font-size: 1.25rem;\n  cursor: pointer;\n  padding: 4px;\n  line-height: 1;\n}\n.close-btn[_ngcontent-%COMP%]:hover {\n  color: #999;\n}\nh2[_ngcontent-%COMP%] {\n  color: var(--accent-gold);\n  margin: 0 0 12px;\n  text-align: center;\n  font-size: 1.25rem;\n  font-weight: 600;\n}\n.progress-bar[_ngcontent-%COMP%] {\n  height: 4px;\n  background: #333;\n  border-radius: 2px;\n  overflow: hidden;\n  margin-bottom: 6px;\n}\n.progress-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background: var(--accent-gold);\n  transition: width 0.3s ease;\n}\n.progress-text[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #888;\n  font-size: 0.8rem;\n  margin: 0 0 16px;\n}\n.achievements-grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.achievement[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 10px 12px;\n  background: #222;\n  border-radius: 8px;\n  opacity: 0.4;\n  border: 1px solid transparent;\n  transition: opacity 0.2s;\n}\n.achievement.unlocked[_ngcontent-%COMP%] {\n  opacity: 1;\n  border-color: #444;\n  background: #252525;\n}\n.icon[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n.info[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n.name[_ngcontent-%COMP%] {\n  color: #eee;\n  font-weight: 500;\n  font-size: 0.9rem;\n}\n.desc[_ngcontent-%COMP%] {\n  color: #777;\n  font-size: 0.75rem;\n  margin-top: 2px;\n}\n.requirement[_ngcontent-%COMP%] {\n  display: none;\n}\n.check[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.locked[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  opacity: 0.3;\n}\n/*# sourceMappingURL=achievements.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AchievementsComponent, { className: "AchievementsComponent", filePath: "projects\\goblin-tasks\\src\\app\\components\\achievements\\achievements.component.ts", lineNumber: 137 });
})();

// projects/goblin-tasks/src/app/components/toast/toast.component.ts
var _forTrack09 = ($index, $item) => $item.id;
function ToastComponent_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275listener("click", function ToastComponent_For_2_Template_div_click_0_listener() {
      const toast_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.removeToast(toast_r2.id));
    });
    \u0275\u0275elementStart(1, "span", 3);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 4)(4, "span", 5);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 6);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const toast_r2 = ctx.$implicit;
    \u0275\u0275classMap(toast_r2.type);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(toast_r2.icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(toast_r2.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(toast_r2.message);
  }
}
var ToastComponent = class _ToastComponent {
  gameService = inject(GameService);
  toasts = signal([]);
  lastNotificationCount = 0;
  constructor() {
    effect(() => {
      const notifications = this.gameService.alerts();
      if (notifications.length > this.lastNotificationCount && notifications.length > 0) {
        const latest = notifications[0];
        setTimeout(() => {
          this.showToast({
            id: latest.id,
            icon: latest.icon,
            title: latest.title,
            message: latest.message,
            type: latest.type === "achievement" || latest.type === "level-up" ? "achievement" : latest.type === "quest-complete" ? "success" : "info"
          });
        }, 0);
      }
      this.lastNotificationCount = notifications.length;
    });
  }
  showToast(toast) {
    this.toasts.update((t) => [...t, toast]);
    setTimeout(() => this.removeToast(toast.id), 3e3);
  }
  removeToast(id) {
    this.toasts.update((t) => t.filter((tt) => tt.id !== id));
  }
  static \u0275fac = function ToastComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ToastComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ToastComponent, selectors: [["app-toast"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 3, vars: 0, consts: [[1, "toast-container"], [1, "toast", 3, "class"], [1, "toast", 3, "click"], [1, "toast-icon"], [1, "toast-content"], [1, "toast-title"], [1, "toast-message"]], template: function ToastComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275repeaterCreate(1, ToastComponent_For_2_Template, 8, 5, "div", 1, _forTrack09);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.toasts());
    }
  }, dependencies: [CommonModule], styles: ["\n\n.toast-container[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 24px;\n  right: 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  z-index: 2000;\n  pointer-events: none;\n}\n.toast[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 16px 20px;\n  background: rgba(26, 26, 26, 0.69);\n  backdrop-filter: blur(10px);\n  border: 2px solid var(--border-primary);\n  border-radius: 12px;\n  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);\n  animation: _ngcontent-%COMP%_slideIn 0.3s ease, _ngcontent-%COMP%_fadeOut 0.3s ease 2.7s forwards;\n  pointer-events: auto;\n  cursor: pointer;\n  max-width: 350px;\n}\n.toast.success[_ngcontent-%COMP%] {\n  border-color: #5ac47a;\n  background: rgba(26, 40, 30, 0.69);\n}\n.toast.achievement[_ngcontent-%COMP%] {\n  border-color: var(--accent-gold);\n  background: rgba(40, 35, 20, 0.69);\n  animation:\n    _ngcontent-%COMP%_slideIn 0.3s ease,\n    _ngcontent-%COMP%_glow 1s ease-in-out infinite,\n    _ngcontent-%COMP%_fadeOut 0.3s ease 3.7s forwards;\n}\n.toast.info[_ngcontent-%COMP%] {\n  border-color: #4a90d9;\n  background: rgba(20, 30, 45, 0.69);\n}\n.toast.warning[_ngcontent-%COMP%] {\n  border-color: #f59e0b;\n  background: rgba(45, 35, 20, 0.69);\n}\n@keyframes _ngcontent-%COMP%_slideIn {\n  from {\n    transform: translateX(100%);\n    opacity: 0;\n  }\n  to {\n    transform: translateX(0);\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_fadeOut {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n    transform: translateX(50px);\n  }\n}\n@keyframes _ngcontent-%COMP%_glow {\n  0%, 100% {\n    box-shadow: 0 0 10px rgba(255, 215, 0, 0.3);\n  }\n  50% {\n    box-shadow: 0 0 25px rgba(255, 215, 0, 0.6);\n  }\n}\n.toast-icon[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n}\n.toast-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.toast-title[_ngcontent-%COMP%] {\n  color: var(--text-primary);\n  font-weight: bold;\n  font-size: 0.95rem;\n}\n.toast-message[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 0.8rem;\n}\n/*# sourceMappingURL=toast.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ToastComponent, { className: "ToastComponent", filePath: "projects\\goblin-tasks\\src\\app\\components\\toast\\toast.component.ts", lineNumber: 69 });
})();

// projects/goblin-tasks/src/app/components/goblin-dice/goblin-dice.component.ts
function GoblinDiceComponent_Conditional_0_For_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 16);
    \u0275\u0275listener("click", function GoblinDiceComponent_Conditional_0_For_15_Template_button_click_0_listener() {
      const amount_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.currentBet.set(amount_r4));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const amount_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("selected", ctx_r1.currentBet() === amount_r4);
    \u0275\u0275property("disabled", ctx_r1.gameService.playerGold() < amount_r4 || ctx_r1.isRolling());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", amount_r4, " ");
  }
}
function GoblinDiceComponent_Conditional_0_Conditional_19_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u{1F389} You won ", ctx_r1.winAmount(), " gold!");
  }
}
function GoblinDiceComponent_Conditional_0_Conditional_19_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u{1F31F} JACKPOT! You won ", ctx_r1.winAmount(), " gold!");
  }
}
function GoblinDiceComponent_Conditional_0_Conditional_19_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u{1F622} Better luck next time!");
    \u0275\u0275elementEnd();
  }
}
function GoblinDiceComponent_Conditional_0_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275template(1, GoblinDiceComponent_Conditional_0_Conditional_19_Conditional_1_Template, 2, 1, "span")(2, GoblinDiceComponent_Conditional_0_Conditional_19_Conditional_2_Template, 2, 1, "span")(3, GoblinDiceComponent_Conditional_0_Conditional_19_Conditional_3_Template, 2, 0, "span");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("win", ctx_r1.lastResult() === "win")("lose", ctx_r1.lastResult() === "lose");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.lastResult() === "win" ? 1 : ctx_r1.lastResult() === "jackpot" ? 2 : 3);
  }
}
function GoblinDiceComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275listener("click", function GoblinDiceComponent_Conditional_0_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275elementStart(1, "div", 2);
    \u0275\u0275listener("click", function GoblinDiceComponent_Conditional_0_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "button", 3);
    \u0275\u0275listener("click", function GoblinDiceComponent_Conditional_0_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275text(3, "\u2715");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h2");
    \u0275\u0275text(5, "\u{1F3B2} Goblin Dice");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 4);
    \u0275\u0275text(7, "Test your luck! Roll the dice to win gold!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 5);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 6)(11, "span", 7);
    \u0275\u0275text(12, "Bet Amount:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 8);
    \u0275\u0275repeaterCreate(14, GoblinDiceComponent_Conditional_0_For_15_Template, 2, 4, "button", 9, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 10)(17, "div", 11);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275template(19, GoblinDiceComponent_Conditional_0_Conditional_19_Template, 4, 5, "div", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 13)(21, "h4");
    \u0275\u0275text(22, "Rules:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "ul")(24, "li");
    \u0275\u0275text(25, "\u{1F3AF} Roll 4-6: Win 1.5x your bet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "li");
    \u0275\u0275text(27, "\u2B50 Roll 6: Win 3x your bet (Jackpot!)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "li");
    \u0275\u0275text(29, "\u{1F494} Roll 1-3: Lose your bet");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(30, "ui-button", 14);
    \u0275\u0275listener("clicked", function GoblinDiceComponent_Conditional_0_Template_ui_button_clicked_30_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.rollDice());
    });
    \u0275\u0275text(31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 15)(33, "span");
    \u0275\u0275text(34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "span");
    \u0275\u0275text(36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "span");
    \u0275\u0275text(38);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1("\u{1F4B0} ", ctx_r1.gameService.playerGold(), " Gold");
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r1.betAmounts);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("rolling", ctx_r1.isRolling());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isRolling() ? "\u{1F3B2}" : ctx_r1.getDiceEmoji(ctx_r1.diceResult()), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.lastResult() ? 19 : -1);
    \u0275\u0275advance(11);
    \u0275\u0275property("disabled", ctx_r1.gameService.playerGold() < ctx_r1.currentBet() || ctx_r1.isRolling());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isRolling() ? "Rolling..." : "Roll Dice! \u{1F3B2}", " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Wins: ", ctx_r1.wins(), "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Losses: ", ctx_r1.losses(), "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("Net: ", ctx_r1.netGold() >= 0 ? "+" : "", "", ctx_r1.netGold(), "");
  }
}
var GoblinDiceComponent = class _GoblinDiceComponent {
  gameService = inject(GameService);
  isOpen = signal(false);
  isRolling = signal(false);
  diceResult = signal(1);
  lastResult = signal(null);
  winAmount = signal(0);
  currentBet = signal(10);
  wins = signal(0);
  losses = signal(0);
  netGold = signal(0);
  betAmounts = [10, 25, 50, 100];
  open() {
    this.isOpen.set(true);
  }
  close() {
    this.isOpen.set(false);
  }
  getDiceEmoji(num) {
    const dice = ["\u2680", "\u2681", "\u2682", "\u2683", "\u2684", "\u2685"];
    return dice[num - 1] || "\u{1F3B2}";
  }
  rollDice() {
    if (this.isRolling() || this.gameService.playerGold() < this.currentBet())
      return;
    this.gameService.spendGold(this.currentBet());
    this.isRolling.set(true);
    this.lastResult.set(null);
    let rollCount = 0;
    const rollInterval = setInterval(() => {
      this.diceResult.set(Math.floor(Math.random() * 6) + 1);
      rollCount++;
      if (rollCount >= 15) {
        clearInterval(rollInterval);
        this.finishRoll();
      }
    }, 100);
  }
  finishRoll() {
    const result = Math.floor(Math.random() * 6) + 1;
    this.diceResult.set(result);
    this.isRolling.set(false);
    if (result === 6) {
      const win = this.currentBet() * 3;
      this.gameService.addGold(win);
      this.winAmount.set(win);
      this.lastResult.set("jackpot");
      this.wins.update((w) => w + 1);
      this.netGold.update((n) => n + win - this.currentBet());
    } else if (result >= 4) {
      const win = Math.floor(this.currentBet() * 1.5);
      this.gameService.addGold(win);
      this.winAmount.set(win);
      this.lastResult.set("win");
      this.wins.update((w) => w + 1);
      this.netGold.update((n) => n + win - this.currentBet());
    } else {
      this.lastResult.set("lose");
      this.losses.update((l) => l + 1);
      this.netGold.update((n) => n - this.currentBet());
    }
  }
  static \u0275fac = function GoblinDiceComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GoblinDiceComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GoblinDiceComponent, selectors: [["app-goblin-dice"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [[1, "modal-overlay"], [1, "modal-overlay", 3, "click"], [1, "modal-content", 3, "click"], [1, "close-btn", 3, "click"], [1, "subtitle"], [1, "gold-display"], [1, "bet-section"], [1, "label"], [1, "bet-buttons"], [1, "bet-btn", 3, "selected", "disabled"], [1, "dice-area"], [1, "dice"], [1, "result", 3, "win", "lose"], [1, "rules"], ["variant", "primary", 3, "clicked", "disabled"], [1, "stats"], [1, "bet-btn", 3, "click", "disabled"], [1, "result"]], template: function GoblinDiceComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, GoblinDiceComponent_Conditional_0_Template, 39, 11, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.isOpen() ? 0 : -1);
    }
  }, dependencies: [CommonModule, ButtonComponent], styles: ["\n\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.85);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n}\n.modal-content[_ngcontent-%COMP%] {\n  background: var(--bg-secondary);\n  border: 2px solid var(--accent-gold);\n  border-radius: 16px;\n  padding: 24px;\n  max-width: 400px;\n  width: 95%;\n  text-align: center;\n  position: relative;\n}\n.close-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 12px;\n  right: 12px;\n  background: transparent;\n  border: none;\n  color: var(--text-muted);\n  font-size: 1.5rem;\n  cursor: pointer;\n}\nh2[_ngcontent-%COMP%] {\n  color: var(--accent-gold);\n  margin: 0 0 4px;\n}\n.subtitle[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  margin: 0 0 16px;\n  font-size: 0.9rem;\n}\n.gold-display[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  color: var(--accent-gold);\n  margin-bottom: 20px;\n}\n.bet-section[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.label[_ngcontent-%COMP%] {\n  display: block;\n  color: var(--text-secondary);\n  margin-bottom: 8px;\n  font-size: 0.9rem;\n}\n.bet-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 8px;\n}\n.bet-btn[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border: 2px solid var(--border-primary);\n  background: var(--card-overlay);\n  color: var(--text-primary);\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.2s;\n  font-weight: bold;\n}\n.bet-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  border-color: var(--accent-gold);\n}\n.bet-btn.selected[_ngcontent-%COMP%] {\n  background: var(--accent-gold);\n  color: #000;\n  border-color: var(--accent-gold);\n}\n.bet-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.dice-area[_ngcontent-%COMP%] {\n  margin: 24px 0;\n}\n.dice[_ngcontent-%COMP%] {\n  font-size: 5rem;\n  transition: transform 0.1s;\n}\n.dice.rolling[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_roll 0.1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_roll {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.result[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  padding: 12px;\n  border-radius: 8px;\n  font-weight: bold;\n  font-size: 1.1rem;\n}\n.result.win[_ngcontent-%COMP%] {\n  background: rgba(90, 196, 122, 0.2);\n  color: #5ac47a;\n}\n.result.lose[_ngcontent-%COMP%] {\n  background: rgba(220, 38, 38, 0.2);\n  color: #ef4444;\n}\n.rules[_ngcontent-%COMP%] {\n  text-align: left;\n  background: var(--card-overlay);\n  padding: 12px 16px;\n  border-radius: 8px;\n  margin: 20px 0;\n}\n.rules[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: var(--text-primary);\n  margin: 0 0 8px;\n  font-size: 0.9rem;\n}\n.rules[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 0;\n  padding-left: 20px;\n  color: var(--text-muted);\n  font-size: 0.8rem;\n}\n.rules[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 4px 0;\n}\n.stats[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 20px;\n  margin-top: 16px;\n  color: var(--text-muted);\n  font-size: 0.85rem;\n}\n/*# sourceMappingURL=goblin-dice.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GoblinDiceComponent, { className: "GoblinDiceComponent", filePath: "projects\\goblin-tasks\\src\\app\\components\\goblin-dice\\goblin-dice.component.ts", lineNumber: 105 });
})();

// src/app/views/goblin-tasks/goblin-tasks-view.component.ts
var _c0 = ["shopModal"];
var _c1 = ["questsModal"];
var _c2 = ["recruitModal"];
var _c3 = ["diceModal"];
var _c4 = ["achievementsModal"];
var GoblinTasksViewComponent = class _GoblinTasksViewComponent {
  themeService = inject(ThemeService);
  gameService = inject(GameService);
  shopModal = viewChild.required("shopModal");
  questsModal = viewChild.required("questsModal");
  recruitModal = viewChild.required("recruitModal");
  diceModal = viewChild.required("diceModal");
  achievementsModal = viewChild.required("achievementsModal");
  static \u0275fac = function GoblinTasksViewComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GoblinTasksViewComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GoblinTasksViewComponent, selectors: [["app-goblin-tasks-view"]], viewQuery: function GoblinTasksViewComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuerySignal(ctx.shopModal, _c0, 5);
      \u0275\u0275viewQuerySignal(ctx.questsModal, _c1, 5);
      \u0275\u0275viewQuerySignal(ctx.recruitModal, _c2, 5);
      \u0275\u0275viewQuerySignal(ctx.diceModal, _c3, 5);
      \u0275\u0275viewQuerySignal(ctx.achievementsModal, _c4, 5);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance(5);
    }
  }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 37, vars: 2, consts: [["shopModal", ""], ["questsModal", ""], ["recruitModal", ""], ["diceModal", ""], ["achievementsModal", ""], [1, "goblin-tasks-wrapper"], [1, "app-container"], [1, "header-top"], [1, "header-left"], [1, "gold-display"], [1, "header-center"], [1, "header-right"], [1, "top-widgets"], [3, "openShop", "openQuests", "openRecruit", "openDice", "openAchievements"], [1, "content"], [1, "left-column"]], template: function GoblinTasksViewComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 5)(1, "div", 6)(2, "header")(3, "div", 7)(4, "div", 8)(5, "span", 9);
      \u0275\u0275text(6);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 10)(8, "h1");
      \u0275\u0275text(9, "\u{1F9CC} Goblin Tasks");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "p");
      \u0275\u0275text(11);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "div", 11);
      \u0275\u0275element(13, "app-notification-center")(14, "app-theme-toggle");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(15, "div", 12);
      \u0275\u0275element(16, "app-weather-widget")(17, "app-stats-dashboard");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "app-action-bar", 13);
      \u0275\u0275listener("openShop", function GoblinTasksViewComponent_Template_app_action_bar_openShop_18_listener() {
        \u0275\u0275restoreView(_r1);
        const shopModal_r2 = \u0275\u0275reference(27);
        return \u0275\u0275resetView(shopModal_r2.open());
      })("openQuests", function GoblinTasksViewComponent_Template_app_action_bar_openQuests_18_listener() {
        \u0275\u0275restoreView(_r1);
        const questsModal_r3 = \u0275\u0275reference(29);
        return \u0275\u0275resetView(questsModal_r3.open());
      })("openRecruit", function GoblinTasksViewComponent_Template_app_action_bar_openRecruit_18_listener() {
        \u0275\u0275restoreView(_r1);
        const recruitModal_r4 = \u0275\u0275reference(31);
        return \u0275\u0275resetView(recruitModal_r4.open());
      })("openDice", function GoblinTasksViewComponent_Template_app_action_bar_openDice_18_listener() {
        \u0275\u0275restoreView(_r1);
        const diceModal_r5 = \u0275\u0275reference(33);
        return \u0275\u0275resetView(diceModal_r5.open());
      })("openAchievements", function GoblinTasksViewComponent_Template_app_action_bar_openAchievements_18_listener() {
        \u0275\u0275restoreView(_r1);
        const achievementsModal_r6 = \u0275\u0275reference(35);
        return \u0275\u0275resetView(achievementsModal_r6.open());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "main")(20, "div", 14)(21, "div", 15);
      \u0275\u0275element(22, "app-task-panel")(23, "app-daily-quests");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "aside");
      \u0275\u0275element(25, "app-goblin-leaderboard");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(26, "app-shop", null, 0)(28, "app-quest-chains", null, 1)(30, "app-goblin-recruitment", null, 2)(32, "app-goblin-dice", null, 3)(34, "app-achievements", null, 4)(36, "app-toast");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1("\u{1F4B0} ", ctx.gameService.playerGold(), "");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.themeService.isDark() ? "\u{1F319} Nighttime Raid Mode" : "\u2600\uFE0F Daytime Attack Mode");
    }
  }, dependencies: [
    TaskPanelComponent,
    GoblinLeaderboardComponent,
    StatsDashboardComponent,
    ThemeToggleComponent,
    WeatherWidgetComponent,
    DailyQuestsComponent,
    ShopComponent,
    QuestChainsComponent,
    NotificationCenterComponent,
    GoblinRecruitmentComponent,
    ActionBarComponent,
    AchievementsComponent,
    ToastComponent,
    GoblinDiceComponent
  ], styles: ["\n\n.goblin-tasks-wrapper[_ngcontent-%COMP%] {\n  min-height: calc(100vh - 60px);\n  background:\n    linear-gradient(\n      180deg,\n      var(--bg-primary, #1a1a2e) 0%,\n      var(--bg-secondary, #16213e) 100%);\n}\n.app-container[_ngcontent-%COMP%] {\n  max-width: 1400px;\n  margin: 0 auto;\n  padding: 24px;\n}\nheader[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.header-top[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 20px;\n}\n.header-left[_ngcontent-%COMP%], \n.header-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  min-width: 150px;\n}\n.header-right[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n.header-center[_ngcontent-%COMP%] {\n  text-align: center;\n  flex: 1;\n}\n.gold-display[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  color: var(--accent-gold, #ffd700);\n  font-weight: bold;\n  padding: 8px 16px;\n  background: var(--card-overlay, rgba(255,255,255,0.05));\n  border-radius: 20px;\n  border: 2px solid var(--accent-gold, #ffd700);\n}\nheader[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: var(--accent-gold, #ffd700);\n  font-size: 2.5rem;\n  margin: 0 0 4px;\n  text-shadow: 0 0 20px rgba(255, 215, 0, 0.3);\n}\nheader[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-secondary, #888);\n  font-size: 1rem;\n  margin: 0;\n}\n.top-widgets[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 350px 1fr;\n  gap: 16px;\n  margin-bottom: 20px;\n}\napp-action-bar[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  display: block;\n}\n.content[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 380px;\n  gap: 24px;\n}\n.left-column[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n@media (max-width: 1100px) {\n  .top-widgets[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .content[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 600px) {\n  .header-top[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 12px;\n  }\n  .header-left[_ngcontent-%COMP%], \n   .header-right[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=goblin-tasks-view.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GoblinTasksViewComponent, { className: "GoblinTasksViewComponent", filePath: "src\\app\\views\\goblin-tasks\\goblin-tasks-view.component.ts", lineNumber: 103 });
})();
export {
  GoblinTasksViewComponent
};
//# sourceMappingURL=chunk-CEFJF6NV.js.map
