import { PageHero } from "@/components/common/PageHero";

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col">
      <PageHero
        title="Privacy Policy"
        description="Learn how Gulf Quality Structure Establishment handles your data and privacy."
        label="Legal"
        centered={true}
      />
      <section className="py-20 lg:py-32 bg-white text-gray-800">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg mx-auto">
            <h2>Introduction</h2>
            <p>Welcome to Gulf Quality Structure Establishment (GQS). Your privacy is critically important to us. This Privacy Policy outlines the types of personal information we collect, how it is used, and the steps we take to protect it.</p>
            
            <h2>Information We Collect</h2>
            <p>We may collect personal identification information from Users in a variety of ways, including, but not limited to, when Users visit our site, fill out a form, and in connection with other activities, services, features or resources we make available on our Site. Users may be asked for, as appropriate, name, email address, mailing address, phone number.</p>

            <h2>How We Use Collected Information</h2>
            <p>Gulf Quality Structure Establishment may collect and use Users' personal information for the following purposes:</p>
            <ul>
              <li>To improve customer service</li>
              <li>To personalize user experience</li>
              <li>To send periodic emails and respond to inquiries</li>
            </ul>

            <h2>How We Protect Your Information</h2>
            <p>We adopt appropriate data collection, storage and processing practices and security measures to protect against unauthorized access, alteration, disclosure or destruction of your personal information, username, password, transaction information and data stored on our Site.</p>

            <h2>Contacting Us</h2>
            <p>If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this site, please contact us at info@gqstransport.com.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
