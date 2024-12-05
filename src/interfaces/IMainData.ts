interface INavigation {
  navLinks: { title: string; url: string }[];
}

interface IHero {
  name: string;
  role: string;
  image: string;
  subtitle?: string;
  videoGreeting?: string;
  videoButtonText?: string;
}

interface IContactInfo {
  phone?: string;
  email?: string;
  location?: string;
}

interface IFooterInfo {
  title: string;
  description: string;
}

interface ISocialLinks {
  linkedin?: string;
  github?: string;
  x?: string;
  telegram?: string;
  wechat?: string;
  viber?: string;
}

export interface IMainData {
  id: string;
  navigation: INavigation;
  hero: IHero;
  contactInfo: IContactInfo;
  footerInfo: IFooterInfo;
  socialLinks: ISocialLinks;
}
