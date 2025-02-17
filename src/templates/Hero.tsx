import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="/">
            <a>About</a>
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'Cryptodactyl is proud to bring you\n'}
            <span className="text-primary-900">Dapp Tooling</span>
          </>
        }
        description="A great way to see contract activity you care about."
        button={
          <Link href="https://www.cryptodactyl.io">
            <a>
              <Button xl>Check out our first dashboard</Button>
            </a>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
