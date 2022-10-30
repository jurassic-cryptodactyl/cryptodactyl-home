import Image from 'next/image';

import dactyl from '../../public/dactyl.png';
import { AppConfig } from '../utils/AppConfig';

type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  const fontStyle = props.xl
    ? 'font-semibold text-3xl'
    : 'font-semibold text-xl';

  return (
    <span className={`text-gray-900 inline-flex items-center ${fontStyle}`}>
      <Image
        alt="Dactyl"
        src={dactyl}
        width={35}
        height={35}
        className="w-[44px] h-[32px]"
      />
      {AppConfig.site_name}
    </span>
  );
};

export { Logo };
