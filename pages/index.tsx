import React from "react";
import HeroBlock from "@/components/blocks/HeroBlock";
import NewsBlock from "@/components/blocks/NewsBlock";
import VideoProductionBlock from "@/components/blocks/VideoProductionBlock";
import ContactBlock from "@/components/blocks/ContactBlock";
import AllSolutionsBlock from "@/components/blocks/AllSolutionsBlock";
import MarketingBlock from "@/components/blocks/MarketingBlock";
import SearchEngineBlock from "@/components/blocks/SearchEngineBlock";
import ProjectsBlock from "@/components/blocks/ProjectsBlock";

export default function Home() {
  return (
    <section className="w-full flex flex-col items-center">
      <HeroBlock/>
      <ProjectsBlock
        title="With us you dont need to worry about your brand"
        description="Lorem ipsum dolor sit amet consectetur. Vitae erat porttitor in egestas. Molestie lobortis curabitur ut maecenas praesent. Amet consequat ut lobortis arcu."
      />
      <SearchEngineBlock/>
      <MarketingBlock
        title="Marketing"
        description="Lorem ipsum dolor sit amet consectetur. Vitae erat porttitor in egestas. Molestie lobortis curabitur ut maecenas praesent. "
      />
      <VideoProductionBlock
        title="Video Production"
        description="We provide a wide range of video production services, from filming to editing. Here are some of our video production services."
      />
      <AllSolutionsBlock
        title="AI Solutions AI Agents and Chatbots"
        description="Lorem ipsum dolor sit amet consectetur. Vitae erat porttitor in egestas. Molestie lobortis curabitur ut maecenas praesent. Amet consequat ut lobortis arcu."
      />
      <NewsBlock/>
      <ContactBlock
        title="Get in touch"
        description="Lorem ipsum dolor sit amet consectetur. Vitae erat porttitor in egestas. Molestie lobortis curabitur ut maecenas praesent. Amet consequat ut lobortis arcu."
      />
    </section>
  );
}
