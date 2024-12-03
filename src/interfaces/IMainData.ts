
export interface INavigation {
  navLinks: string[];
}

export interface IHero {
  name: string;
  role: string;
  image: string;
  subtitle: string;
  videoGreeting: string;
}

export interface IContactInfo {
  phone: string;
  email: string;
  location: string;
}

export interface IFotterInfo {
  fotterCallToAction: string;
  fotterDescription: string;
}

export interface ISocialLinks {
  linkedin: string;
  github: string;
  x: string;
  telegram: string;
  wechat: string;
  viber: string;
}

export interface IMainData {
  id: string;
  navigation: INavigation;
  hero: IHero;
  contactInfo: IContactInfo;
  fotterInfo: IFotterInfo;
  socialLinks: ISocialLinks;
}
