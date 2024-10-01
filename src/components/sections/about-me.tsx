import Image from 'next/image';

import SagarFullPose from '/public/images/imagem_perfil.jpeg';
import Tag from '@/components/data-display/tag';
import Container from '@/components/layout/container';
import Typography from '@/components/general/typography';
import Link from '@/components/navigation/link';
import { EXTERNAL_LINKS } from '@/lib/data';
const AboutMeSection = () => {111
  return (
    <Container className="bg-gray-50" id="about">
      <div className="self-center">
        <Tag label="About me" />
      </div>

      <div className="flex w-full flex-col justify-between gap-12 md:flex-row">
        {/* Image */}
        <div className="rounded-b-lg flex justify-center md:order-first md:justify-end">
          <div className="relative rounded-b-lg h-[380px] w-[320px] md:h-[460px] md:w-[380px] lg:h-[520px] lg:w-[440px]">
            <Image
              src={SagarFullPose}
              alt="Fullpose of Sagar"
              className="absolute rounded-b-lg z-10 h-[360px] w-[280px] border-8 border-gray-50 max-md:left-5 md:right-0 md:top-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"
              style={{ objectFit: 'cover' }}
            ></Image>
            <div className="absolute rounded-b-lg h-[360px] w-[320px] border-8 border-transparent bg-gray-200 max-md:top-5 md:bottom-0 md:left-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"></div>
          </div>
        </div>

        {/* Content */}
        <div className="flex max-w-xl flex-col gap-6">
          <Typography variant="h3">
            Want to know more? Check it out:
          </Typography>
          <Typography>
            I&apos;m a passionate,{' '}
            who specializes in full stack development. I am
            enthusiastic about bringing the technical and visual aspects of
            digital products to life.
          </Typography>
          <Typography>
            I began my journey as an intern software developer in 2018, and since then,
            I&apos;ve continued to grow and evolve as a developer, taking on new
            challenges and learning the latest technologies along the way. Now,
            I&apos;m building cutting-edge web applications using
            modern technologies such as Next.js, TypeScript, C#,
            Tailwindcss, postgres and much more.
          </Typography>
          <Typography>
            When I&apos;m not in full-on developer mode, you can find me
            enjoying some free time playing video game or enjoying a beautiful sunset. You can follow
            me on{' '}
            <Link
              noCustomization
              externalLink
              withUnderline
              href={EXTERNAL_LINKS.GITHUB}
            >
              GitHub
            </Link>
            .
          </Typography>
          <Typography>
            I&apos;m available for new opportunities, so feel free
            to reach me out! 😉
          </Typography>
        </div>
      </div>
    </Container>
  );
};

export default AboutMeSection;
