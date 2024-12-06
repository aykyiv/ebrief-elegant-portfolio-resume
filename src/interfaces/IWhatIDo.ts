  export interface IWhatIDo {
    id: string;
    title: string;
    knowMeTitle: string;
    whatIDoTitle: string;
    knowMe: {
      description: string;
      descriptionHidden?: string;
    };
    whatIDo: {
      title: string;
      description: string;
      icon: string;
    }[];

}

export interface IServiceCardProps {
    title: string;
    description: string;
    icon: string;
    className?: string;
    index: number;
  }

  export interface ISubSectionProps {
    title: string;
    children: React.ReactNode;
    className?: string;
  }

  export interface IMainSectionProps {
    title: string;
    children: React.ReactNode;
    className?: string;
  }

