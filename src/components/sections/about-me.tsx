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
            Curious about me? Here’s a glimpse:
          </Typography>
          <Typography>
            I’m a dedicated full-stack developer, passionate about bringing both the technical and visual aspects of digital products to life.
          </Typography>
          <Typography>
            My journey started in <strong>2019</strong> as a software development intern, and since then, I've been growing and evolving, continuously embracing new challenges and technologies. 
            Today, I build cutting-edge web applications using modern tools like Next.js, TypeScript, C#, Tailwind CSS, PostgreSQL, and more.
          </Typography>
          <Typography>
            Outside of development, I enjoy playing video games or unwinding while watching a beautiful sunset. Feel free to check out my {' '}
            <Link
              noCustomization
              externalLink
              withUnderline
              href={EXTERNAL_LINKS.GITHUB}
            >
              <strong>Github</strong>
            </Link>
            .
          </Typography>
          <Typography>
            I'm open to new opportunities, so don’t hesitate to reach out! 😉
          </Typography>
        </div>
      </div>
    </Container>
  );
};

export default AboutMeSection;
