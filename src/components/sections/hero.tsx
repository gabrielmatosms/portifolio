import Image from "next/image";
import { MapPin } from "lucide-react";

import SagarHeadshot from "/public/images/IAMe.jpeg";
import SocialIcons from "@/components/data-display/social-icons";
import Typography from "@/components/general/typography";
import Container from "@/components/layout/container";

const HeroSection = () => {
  return (
    <Container id="hero">
      <div className="flex flex-col gap-12 md:flex-row">
        {/* Image */}
        <div className="flex items-center justify-center md:order-last md:flex-grow md:justify-end">
          <div className="relative h-[300px] w-[280px] rounded-b-lg md:h-[360px] md:w-[320px]">
            <Image
              src={SagarHeadshot}
              alt="Headshot of Sagar"
              className="absolute z-10 h-[280px] w-[240px] rounded-b-lg border-8 border-gray max-md:left-5 md:left-0 md:top-0 md:h-[320px] md:w-[280px]"
              style={{ objectFit: "cover" }}
            ></Image>
            <div className="absolute h-[280px] w-[280px] rounded-b-lg border-8 border-transparent  bg-gray-200 max-md:top-5 md:bottom-0 md:right-0 md:h-[320px] md:w-[280px]"></div>
          </div>
        </div>

        {/* Content */}
        <div className="flex max-w-3xl flex-grow flex-col justify-center gap-8 md:order-first md:items-start md:justify-center 2xl:gap-12">
          <div className="flex flex-col gap-2">
            <Typography variant="h1">
              Hi, I&apos;m Gabriel{" "}
              <span className="inline-block animate-waving-hand">👋</span>
            </Typography>
            <Typography>
              With over <strong>6 years</strong> of experience as a full-stack
              developer, I’ve built digital experiences that are fast,
              accessible, visually engaging, and fully responsive. While my
              foundation is in hands-on development, over time I’ve increasingly
              taken on responsibilities beyond coding—coordinating teams,
              aligning technical work with business goals, and ensuring projects
              are delivered with both quality and strategy in mind. This
              transition into project management allows me to combine my
              technical expertise with leadership and organizational skills,
              bridging the gap between engineering execution and business
              outcomes.
            </Typography>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <MapPin className="stroke-gray-600" />
              <Typography>São Paulo, Brasil</Typography>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75"></span>
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-red-500"></span>
                </span>
              </div>
              <Typography>Available for new projects & ideas</Typography>
            </div>
          </div>
          <SocialIcons />
        </div>
      </div>
    </Container>
  );
};

export default HeroSection;
