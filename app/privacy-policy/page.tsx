import type { Metadata } from "next"
import Link from "next/link"

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Privacy Policy | Turf Pros",
    description:
      "Read the Privacy Policy for Turf Pros to understand how we collect, use, and protect your personal data.",
    robots: {
      // Good practice to ensure search engines can index your policy
      index: true,
      follow: true,
    },
  }
}

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-background text-foreground">
      <section className="py-12 md:py-20 bg-brand-gray-light">
        <div className="container px-4 md:px-6 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-turf-green-dark">
            Privacy Policy
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-brand-gray-text md:text-xl">
            Last Updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6 max-w-3xl mx-auto prose prose-lg prose-headings:text-turf-green-dark prose-a:text-turf-green hover:prose-a:text-turf-green-dark">
          <p>
            Turf Professionals ("us", "we", or "our") operates the [Your Website URL] website (the "Service"). This page
            informs you of our policies regarding the collection, use, and disclosure of personal data when you use our
            Service and the choices you have associated with that data.
          </p>

          <h2>1. Information Collection and Use</h2>
          <p>
            We collect several different types of information for various purposes to provide and improve our Service to
            you.
          </p>
          <h3>Types of Data Collected</h3>
          <h4>Personal Data</h4>
          <p>
            While using our Service, we may ask you to provide us with certain personally identifiable information that
            can be used to contact or identify you ("Personal Data"). Personally identifiable information may include,
            but is not limited to:
          </p>
          <ul>
            <li>Email address</li>
            <li>First name and last name</li>
            <li>Phone number</li>
            <li>Address, State, Province, ZIP/Postal code, City</li>
            <li>Cookies and Usage Data</li>
          </ul>

          <h4>Usage Data</h4>
          <p>
            We may also collect information on how the Service is accessed and used ("Usage Data"). This Usage Data may
            include information such as your computer's Internet Protocol address (e.g. IP address), browser type,
            browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on
            those pages, unique device identifiers and other diagnostic data.
          </p>

          <h4>Tracking & Cookies Data</h4>
          <p>
            We use cookies and similar tracking technologies to track the activity on our Service and hold certain
            information. Cookies are files with small amount of data which may include an anonymous unique identifier.
            You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if
            you do not accept cookies, you may not be able to use some portions of our Service.
          </p>
          <p>Examples of Cookies we use:</p>
          <ul>
            <li>
              <strong>Session Cookies:</strong> We use Session Cookies to operate our Service.
            </li>
            <li>
              <strong>Preference Cookies:</strong> We use Preference Cookies to remember your preferences and various
              settings.
            </li>
            <li>
              <strong>Security Cookies:</strong> We use Security Cookies for security purposes.
            </li>
          </ul>

          <h2>2. Use of Data</h2>
          <p>Turf Professionals uses the collected data for various purposes:</p>
          <ul>
            <li>To provide and maintain our Service</li>
            <li>To notify you about changes to our Service</li>
            <li>To allow you to participate in interactive features of our Service when you choose to do so</li>
            <li>To provide customer support</li>
            <li>To gather analysis or valuable information so that we can improve our Service</li>
            <li>To monitor the usage of our Service</li>
            <li>To detect, prevent and address technical issues</li>
          </ul>

          <h2>3. GDPR Data Protection Rights</h2>
          <p>
            If you are a resident of the European Economic Area (EEA), you have certain data protection rights. Turf
            Professionals aims to take reasonable steps to allow you to correct, amend, delete, or limit the use of your
            Personal Data.
          </p>
          <p>
            If you wish to be informed what Personal Data we hold about you and if you want it to be removed from our
            systems, please contact us.
          </p>
          <p>In certain circumstances, you have the following data protection rights:</p>
          <ul>
            <li>The right to access, update or to delete the information we have on you.</li>
            <li>The right of rectification.</li>
            <li>The right to object.</li>
            <li>The right of restriction.</li>
            <li>The right to data portability.</li>
            <li>The right to withdraw consent.</li>
          </ul>

          <h2>4. Service Providers</h2>
          <p>
            We may employ third party companies and individuals to facilitate our Service ("Service Providers"), to
            provide the Service on our behalf, to perform Service-related services or to assist us in analyzing how our
            Service is used. These third parties have access to your Personal Data only to perform these tasks on our
            behalf and are obligated not to disclose or use it for any other purpose.
          </p>

          <h2>5. Security of Data</h2>
          <p>
            The security of your data is important to us but remember that no method of transmission over the Internet
            or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to
            protect your Personal Data, we cannot guarantee its absolute security.
          </p>

          <h2>6. Links to Other Sites</h2>
          <p>
            Our Service may contain links to other sites that are not operated by us. If you click a third party link,
            you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of
            every site you visit. We have no control over and assume no responsibility for the content, privacy policies
            or practices of any third party sites or services.
          </p>

          <h2>7. Children's Privacy</h2>
          <p>Our Service does not address anyone under the age of 18 ("Children").</p>
          <p>
            We do not knowingly collect personally identifiable information from anyone under the age of 18. If you are
            a parent or guardian and you are aware that your Child has provided us with Personal Data, please contact
            us. If we become aware that we have collected Personal Data from children without verification of parental
            consent, we take steps to remove that information from our servers.
          </p>

          <h2>8. Changes to This Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
            Privacy Policy on this page. We will let you know via email and/or a prominent notice on our Service, prior
            to the change becoming effective and update the "effective date" at the top of this Privacy Policy. You are
            advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are
            effective when they are posted on this page.
          </p>

          <h2>9. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us:</p>
          <ul>
            <li>By email: [Your Contact Email]</li>
            <li>
              By visiting this page on our website: <Link href="/#contact">Contact Us</Link>
            </li>
            <li>By phone number: [Your Phone Number]</li>
          </ul>
        </div>
      </section>
    </div>
  )
}
