import type { Metadata } from "next"
import Link from "next/link"

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Terms of Service | Turf Pros",
    description: "Read the Terms of Service for using the Turf Pros website and services.",
    robots: {
      index: true,
      follow: true,
    },
  }
}

export default function TermsOfServicePage() {
  return (
    <div className="bg-background text-foreground">
      <section className="py-12 md:py-20 bg-brand-gray-light">
        <div className="container px-4 md:px-6 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-turf-green-dark">
            Terms of Service
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-brand-gray-text md:text-xl">
            Last Updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6 max-w-3xl mx-auto prose prose-lg prose-headings:text-turf-green-dark prose-a:text-turf-green hover:prose-a:text-turf-green-dark">
          <p>
            Welcome to Turf Professionals! These Terms of Service ("Terms", "Terms of Service") govern your use of our
            website located at https://www.turf-professionals.com (together or individually "Service") operated by Turf
            Professionals ("us", "we", or "our").
          </p>
          <p>
            Your access to and use of the Service is conditioned upon your acceptance of and compliance with these
            Terms. These Terms apply to all visitors, users, and others who wish to access or use the Service.
          </p>
          <p>
            By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the
            terms then you do not have permission to access the Service.
          </p>

          <h2>1. Communications</h2>
          <p>
            By using our Service, you may agree to subscribe to newsletters, marketing or promotional materials, and
            other information we may send. However, you may opt out of receiving any, or all, of these communications
            from us by following the unsubscribe link or instructions provided in any email we send.
          </p>

          <h2>2. Use of Our Service</h2>
          <p>
            You may use our Service only for lawful purposes and in accordance with these Terms. You agree not to use
            the Service:
          </p>
          <ul>
            <li>In any way that violates any applicable national or international law or regulation.</li>
            <li>
              For the purpose of exploiting, harming, or attempting to exploit or harm minors in any way by exposing
              them to inappropriate content or otherwise.
            </li>
            <li>
              To transmit, or procure the sending of, any advertising or promotional material, including any "junk
              mail", "chain letter," "spam," or any other similar solicitation.
            </li>
            <li>
              To impersonate or attempt to impersonate Turf Professionals, a Turf Professionals employee, another user,
              or any other person or entity.
            </li>
            <li>
              In any way that infringes upon the rights of others, or in any way is illegal, threatening, fraudulent, or
              harmful, or in connection with any unlawful, illegal, fraudulent, or harmful purpose or activity.
            </li>
            <li>
              To engage in any other conduct that restricts or inhibits anyone’s use or enjoyment of the Service, or
              which, as determined by us, may harm or offend Turf Professionals or users of the Service or expose them
              to liability.
            </li>
          </ul>

          <h2>3. Intellectual Property</h2>
          <p>
            The Service and its original content (excluding Content provided by users), features, and functionality are
            and will remain the exclusive property of Turf Professionals and its licensors. The Service is protected by
            copyright, trademark, and other laws of both the United States and foreign countries. Our trademarks and
            trade dress may not be used in connection with any product or service without the prior written consent of
            Turf Professionals.
          </p>

          <h2>4. Links To Other Web Sites</h2>
          <p>
            Our Service may contain links to third-party web sites or services that are not owned or controlled by Turf
            Professionals.
          </p>
          <p>
            Turf Professionals has no control over, and assumes no responsibility for the content, privacy policies, or
            practices of any third-party web sites or services. We do not warrant the offerings of any of these
            entities/individuals or their websites.
          </p>
          <p>
            You acknowledge and agree that Turf Professionals shall not be responsible or liable, directly or
            indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or
            reliance on any such content, goods or services available on or through any such third-party web sites or
            services.
          </p>
          <p>
            We strongly advise you to read the terms of service and privacy policies of any third-party web sites or
            services that you visit.
          </p>

          <h2>5. Disclaimer Of Warranty</h2>
          <p>
            THESE SERVICES ARE PROVIDED BY TURF PROFESSIONALS ON AN "AS IS" AND "AS AVAILABLE" BASIS. TURF PROFESSIONALS
            MAKES NO REPRESENTATIONS OR WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, AS TO THE OPERATION OF THEIR
            SERVICES, OR THE INFORMATION, CONTENT OR MATERIALS INCLUDED THEREIN. YOU EXPRESSLY AGREE THAT YOUR USE OF
            THESE SERVICES, THEIR CONTENT, AND ANY SERVICES OR ITEMS OBTAINED FROM US IS AT YOUR SOLE RISK.
          </p>
          <p>
            NEITHER TURF PROFESSIONALS NOR ANY PERSON ASSOCIATED WITH TURF PROFESSIONALS MAKES ANY WARRANTY OR
            REPRESENTATION WITH RESPECT TO THE COMPLETENESS, SECURITY, RELIABILITY, QUALITY, ACCURACY, OR AVAILABILITY
            OF THE SERVICES. WITHOUT LIMITING THE FOREGOING, NEITHER TURF PROFESSIONALS NOR ANYONE ASSOCIATED WITH TURF
            PROFESSIONALS REPRESENTS OR WARRANTS THAT THE SERVICES, THEIR CONTENT, OR ANY SERVICES OR ITEMS OBTAINED
            THROUGH THE SERVICES WILL BE ACCURATE, RELIABLE, ERROR-FREE, OR UNINTERRUPTED, THAT DEFECTS WILL BE
            CORRECTED, THAT THE SERVICES OR THE SERVER THAT MAKES IT AVAILABLE ARE FREE OF VIRUSES OR OTHER HARMFUL
            COMPONENTS OR THAT THE SERVICES OR ANY SERVICES OR ITEMS OBTAINED THROUGH THE SERVICES WILL OTHERWISE MEET
            YOUR NEEDS OR EXPECTATIONS.
          </p>
          <p>
            TURF PROFESSIONALS HEREBY DISCLAIMS ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, STATUTORY, OR
            OTHERWISE, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF MERCHANTABILITY, NON-INFRINGEMENT, AND FITNESS FOR
            PARTICULAR PURPOSE.
          </p>
          <p>THE FOREGOING DOES NOT AFFECT ANY WARRANTIES WHICH CANNOT BE EXCLUDED OR LIMITED UNDER APPLICABLE LAW.</p>

          <h2>6. Limitation Of Liability</h2>
          <p>
            EXCEPT AS PROHIBITED BY LAW, YOU WILL HOLD US AND OUR OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS HARMLESS
            FOR ANY INDIRECT, PUNITIVE, SPECIAL, INCIDENTAL, OR CONSEQUENTIAL DAMAGE, HOWEVER IT ARISES (INCLUDING
            ATTORNEYS' FEES AND ALL RELATED COSTS AND EXPENSES OF LITIGATION AND ARBITRATION, OR AT TRIAL OR ON APPEAL,
            IF ANY, WHETHER OR NOT LITIGATION OR ARBITRATION IS INSTITUTED), WHETHER IN AN ACTION OF CONTRACT,
            NEGLIGENCE, OR OTHER TORTIOUS ACTION, OR ARISING OUT OF OR IN CONNECTION WITH THIS AGREEMENT, INCLUDING
            WITHOUT LIMITATION ANY CLAIM FOR PERSONAL INJURY OR PROPERTY DAMAGE, ARISING FROM THIS AGREEMENT AND ANY
            VIOLATION BY YOU OF ANY FEDERAL, STATE, OR LOCAL LAWS, STATUTES, RULES, OR REGULATIONS, EVEN IF TURF
            PROFESSIONALS HAS BEEN PREVIOUSLY ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. EXCEPT AS PROHIBITED BY LAW, IF
            THERE IS LIABILITY FOUND ON THE PART OF TURF PROFESSIONALS, IT WILL BE LIMITED TO THE AMOUNT PAID FOR THE
            PRODUCTS AND/OR SERVICES, AND UNDER NO CIRCUMSTANCES WILL THERE BE CONSEQUENTIAL OR PUNITIVE DAMAGES. SOME
            STATES DO NOT ALLOW THE EXCLUSION OR LIMITATION OF PUNITIVE, INCIDENTAL OR CONSEQUENTIAL DAMAGES, SO THE
            PRIOR LIMITATION OR EXCLUSION MAY NOT APPLY TO YOU.
          </p>

          <h2>7. Governing Law</h2>
          <p>
            These Terms shall be governed and construed in accordance with the laws of Texas, United States, without
            regard to its conflict of law provisions.
          </p>
          <p>
            Our failure to enforce any right or provision of these Terms will not be considered a waiver of those
            rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining
            provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us
            regarding our Service and supersede and replace any prior agreements we might have had between us regarding
            the Service.
          </p>

          <h2>8. Changes To Service</h2>
          <p>
            We reserve the right to withdraw or amend our Service, and any service or material we provide via Service,
            in our sole discretion without notice. We will not be liable if for any reason all or any part of Service is
            unavailable at any time or for any period. From time to time, we may restrict access to some parts of
            Service, or the entire Service, to users, including registered users.
          </p>

          <h2>9. Amendments To Terms</h2>
          <p>
            We may amend Terms at any time by posting the amended terms on this site. It is your responsibility to
            review these Terms periodically.
          </p>
          <p>
            Your continued use of the Platform following the posting of revised Terms means that you accept and agree to
            the changes. You are expected to check this page frequently so you are aware of any changes, as they are
            binding on you.
          </p>

          <h2>10. Contact Us</h2>
          <p>If you have any questions about these Terms, please contact us:</p>
          <ul>
            <li>By email: contact@turf-professionals.com</li>
            <li>
              By visiting this page on our website: <Link href="/contact">Contact Us</Link>
            </li>
            <li>By phone number: (555) 123-4567</li>
          </ul>
        </div>
      </section>
    </div>
  )
}
