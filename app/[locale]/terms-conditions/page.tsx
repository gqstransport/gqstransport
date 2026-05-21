import { PageHero } from "@/components/common/PageHero";

export default function TermsConditionsPage() {
  return (
    <div className="flex flex-col">
      <PageHero
        title="Terms and Conditions"
        description="Our terms of service and business conditions."
        label="Legal"
        centered={true}
      />
      <section className="py-20 lg:py-32 bg-white text-gray-800">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg mx-auto">
            <h2>Agreement to Terms</h2>
            <p>These Terms and Conditions constitute a legally binding agreement made between you and Gulf Quality Structure Establishment (GQS), concerning your access to and use of the website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto.</p>
            
            <h2>Intellectual Property Rights</h2>
            <p>Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the “Content”) and the trademarks, service marks, and logos contained therein (the “Marks”) are owned or controlled by us or licensed to us.</p>

            <h2>User Representations</h2>
            <p>By using the Site, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information and promptly update such registration information as necessary.</p>

            <h2>Modifications and Interruptions</h2>
            <p>We reserve the right to change, modify, or remove the contents of the Site at any time or for any reason at our sole discretion without notice. However, we have no obligation to update any information on our Site.</p>

            <h2>Contact Us</h2>
            <p>In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at: info@gqstransport.com.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
