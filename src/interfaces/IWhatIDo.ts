  export interface IWhatIDo {
    id: string;
    title: string;
    knowMeTitle: string;
    whatIDoTitle: string;
    knowMe: {
      showLess: string;
      showMore: string;
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
    ref?: React.Ref<HTMLDivElement>;
  }

  export interface IMainSectionProps {
    title: string;
    id: string;
    children: React.ReactNode;
    className?: string;
  }

