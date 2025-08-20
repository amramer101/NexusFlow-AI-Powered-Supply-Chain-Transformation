import Marquee from 'react-fast-marquee';
import { IconType } from 'react-icons';
import {
  FaGoogle,
  FaAmazon,
  FaMicrosoft,
  FaApple,
  FaFacebook,
  FaTwitter,
  FaSpotify,
  FaUber,
  FaAirbnb,
  FaSlack,
  FaGithub,
} from 'react-icons/fa';
import { DiAndroid, DiAptana, DiBugsense, DiCodeigniter } from 'react-icons/di';

type BrandProps = {
  name: string;
  icon: IconType;
};

function Brand({ name, icon: Icon }: BrandProps) {
  return (
    <div className="mx-4 flex items-center justify-center" aria-label={name}>
      <div className="mr-10 flex h-28 w-auto items-center text-6xl text-white-text drop-shadow-lg">
        <Icon />
      </div>
    </div>
  );
}

function BrandsMarquee() {
  const brands: BrandProps[] = [
    { name: 'Google', icon: FaGoogle },
    { name: 'Amazon', icon: FaAmazon },
    { name: 'Microsoft', icon: FaMicrosoft },
    { name: 'Apple', icon: FaApple },
    { name: 'Facebook', icon: FaFacebook },
    { name: 'Twitter', icon: FaTwitter },
    { name: 'Spotify', icon: FaSpotify },
    { name: 'Uber', icon: FaUber },
    { name: 'Airbnb', icon: FaAirbnb },
    { name: 'Slack', icon: FaSlack },
    { name: 'GitHub', icon: FaGithub },
    { name: 'Android', icon: DiAndroid },
    { name: 'Aptana', icon: DiAptana },
    { name: 'Bugsense', icon: DiBugsense },
    { name: 'Codeigniter', icon: DiCodeigniter },
  ];

  return (
    <div className="flex flex-col gap-10 bg-blue-100 py-10">
      <h2 className="text-center text-5xl text-white-primary">
        More than <span className="text-blue-600">10,000+</span> Clients Trust
        NexusFlow
      </h2>
      <Marquee gradient={true} speed={50}>
        {brands.map((brand, index) => (
          <Brand key={index} {...brand} />
        ))}
      </Marquee>
    </div>
  );
}

export default BrandsMarquee;
