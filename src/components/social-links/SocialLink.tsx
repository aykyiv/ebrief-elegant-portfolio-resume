/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/legacy/image";
import Link from "next/link";

const SocialLink = ({
  href,
  icon: Icon,
  alt,
}: {
  href: string;
  icon: any;
  alt: string;
}) => (
  <Link
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-fonts hover:text-primary transition-colors"
  >
    <div className="p-2 bg-white rounded-sm w-10 h-10 flex items-center justify-center">
      <Image src={Icon} alt={alt} width={32} height={32} className="" />
    </div>
  </Link>
);

export default SocialLink;
