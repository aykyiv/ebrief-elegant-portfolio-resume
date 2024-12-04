import { IMainData } from "@/interfaces/IMainData";
import SocialLink from "./SocialLink";
import linkedinsvg from "../../../public/images/icons/linkedin.svg";
import githubsvg from "../../../public/images/icons/github.svg";
import twittersvg from "../../../public/images/icons/x.svg";
import telsvg from "../../../public/images/icons/telegram.svg";
import vibersvg from "../../../public/images/icons/viber.svg";

const SocialLinks = ({ mainData }: { mainData: IMainData }) => (
  <div className=" flex justify-center space-x-4">
    {mainData.socialLinks.linkedin && (
      <SocialLink
        href={mainData.socialLinks.linkedin}
        icon={linkedinsvg}
        alt="LinkedIn"
      />
    )}
    {mainData.socialLinks.github && (
      <SocialLink
        href={mainData.socialLinks.github}
        icon={githubsvg}
        alt="GitHub"
      />
    )}
    {mainData.socialLinks.x && (
      <SocialLink
        href={mainData.socialLinks.x}
        icon={twittersvg}
        alt="Twitter"
      />
    )}
    {mainData.socialLinks.telegram && (
      <SocialLink
        href={mainData.socialLinks.telegram}
        icon={telsvg}
        alt="Telegram"
      />
    )}
    {mainData.socialLinks.viber && (
      <SocialLink
        href={mainData.socialLinks.viber}
        icon={vibersvg}
        alt="Viber"
      />
    )}
  </div>
);

export default SocialLinks;
