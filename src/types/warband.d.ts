

interface Warband {
  warbandId: string;
  type?: string;
  heroIndex?: Array<string>; // Array of hero UID
  henchmenIndex?: Array<string>; // Array of hench UID
  henchmen?: Record<string, Henchman>;
  gamesPlayed?: number;
  heroes?: Record<string, Hero>;
  name?: string;
  equipment?: string;
  goldCrowns?: number;
  shards?: number;
  createdAt: FirestoreTimestamp;
}

interface FirestoreTimestamp {
  seconds: number;
  nanoseconds: number;
}

interface HeroAttribute {
  value?: number;
  racialMax?: number;
}

interface HenchmanAttribute {
  isModified?: boolean;
  value?: number;
}

interface Hero {
  skills_injuries_etc?: string;
  skillCategories?: Array<string>;
  equipment?: string;
  startingExp?: number;
  name?: string;
  exp?: number;
  isLarge?: boolean;
  i?: HeroAttribute;
  m?: HeroAttribute;
  t?: HeroAttribute;
  s?: HeroAttribute;
  w?: HeroAttribute;
  a?: HeroAttribute;
  ws?: HeroAttribute;
  bs?: HeroAttribute;
  ld?: HeroAttribute;
}

interface Henchman {
  skills_injuries_etc?: string;
  equipment?: string;
  name?: string;
  exp?: number;
  isLarge?: boolean;
  i?: HenchmanAttribute;
  m?: HenchmanAttribute;
  t?: HenchmanAttribute;
  s?: HenchmanAttribute;
  w?: HenchmanAttribute;
  a?: HenchmanAttribute;
  ws?: HenchmanAttribute;
  bs?: HenchmanAttribute;
  ld?: HenchmanAttribute;
}
