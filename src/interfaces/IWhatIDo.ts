  export interface IWhatIDo {
    id: string;
    title: string;
    knowMeTitle: string;
    whatIDoTitle: string;
    knowMe: {
      description: string;
    };
    whatIDo: {
      title: string;
      description: string;
      icon: string;
    }[];

}

export interface ServiceCardProps {
    title: string;
    description: string;
    icon: string;
    className?: string;
    index: number;
  }
