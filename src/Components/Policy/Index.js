import React, { useEffect } from "react";
import { useSelector } from "react-redux";

// Components
import Navbar from "../Navbar/Index";

// Styled Components
import { ThemeProvider } from "styled-components";
import {
  PolicyStatement,
  StatementContainer,
  MainTitle,
  SubTitle,
  Paragraph,
  ListItem,
  Items,
} from "./PolicyElements";

function Policy() {
  const { themeConfig } = useSelector((state) => state.themes);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ThemeProvider theme={themeConfig}>
        <Navbar></Navbar>
        <StatementContainer>
          <PolicyStatement>
            <MainTitle>
              Privacy Policy for Diagnosym<br /><br />
            </MainTitle>

            <Paragraph><b>Effective Date</b>: July 27th, 2023</Paragraph>

            <Paragraph>
              At Diagnosym, we are committed to protecting your privacy and
              ensuring the security of your personal information. This privacy
              policy outlines how we collect, use, and safeguard the data you
              provide to us through our website, <a href="https://diagnosym.onrender.com">https://diagnosym.onrender.com</a>
              &nbsp;and our Diagnosym application.
              By accessing or using our services, you agree to the terms
              outlined in this policy. Please read this Privacy Policy carefully
              to understand our practices regarding your personal data.
            </Paragraph>
            <SubTitle>Information We Collect: </SubTitle>
            <Paragraph>
              When you use our Application, we may collect the following
              information from you:
            </Paragraph>
            <ListItem>
              <Items>
                Name
              </Items>
              <Items>
                Age
              </Items>
              <Items>
                Postcode
              </Items>
              <Items>
                Gender
              </Items>
              {/* <Items>
                Email
              </Items> */}
            </ListItem>
            <SubTitle>How We Use Your Information: </SubTitle>
            <Paragraph>
              We use the collected information solely for the purpose of
              providing you with the best possible disease diagnostic services.
              Your data will be used in the following ways:
            </Paragraph>
            <ListItem>
              <Items>
              <b>Personalized Service Delivery</b>: The information you provide, 
              allows us to tailor our services to suit you specifically. 
              For example, it enables us to address you by name.
              </Items>
              <Items><b>Localization of Services</b>: Your postcode helps us 
                localize our services, ensuring that any relevant regional 
                or location-specific advice is delivered to you accurately.
              </Items>
              <Items><b>Age-Appropriate Information</b>: In order to ensure that the 
                information we provide is suitable and can be effectively understood 
                by you, we may collect and use your age information for verification purposes.
              </Items>
              {/* <Items><b>Communication and Updates</b>: Your email address enables 
              us to communicate with you regarding the services you've requested 
              or important changes related to Diagnosym.
              </Items> */}
            </ListItem>
            <SubTitle>Data Storage and Deletion: </SubTitle>
            <Paragraph>
              We are committed to data minimization and will only retain your
              personal information for as long as it is necessary to fulfill the
              purposes for which it was collected. Once the diagnostic results
              are provided, your personal information will be deleted from our
              systems.
            </Paragraph>
            <SubTitle>Data Security: </SubTitle>
            <Paragraph>
              We implement industry-standard security measures to protect your
              personal information from unauthorized access, disclosure,
              alteration, and destruction. However, please note that no data
              transmission over the internet or electronic storage method is
              entirely secure. While we strive to protect your data, we cannot
              guarantee its absolute security.
            </Paragraph>
            <SubTitle>Third-Party Services: </SubTitle>
            <Paragraph>
              We do not share, sell, or rent your personal information to any
              third parties for marketing purposes. However, we may engage
              third-party service providers who assist us in delivering our
              services. These service providers are required to protect your
              data and use it solely for the purposes outlined in this Privacy
              Policy.
            </Paragraph>
            <SubTitle>Children's Privacy: </SubTitle>
            <Paragraph>
              The Application and Website are not intended for use by
              individuals under the age of 7. We do not knowingly collect
              personal information from minors. If you believe that we may have
              inadvertently collected personal information from a minor, please
              contact us at <a href="https://diagnosym.onrender.com/contact">https://diagnosym.onrender.com/contact</a>, 
              and we will take steps to
              delete the information promptly.
            </Paragraph>
            <SubTitle>Changes to the Privacy Policy: </SubTitle>
            <Paragraph>
              We may update this Privacy Policy from time to time to reflect
              changes in our data practices or applicable laws. When we make
              significant changes, we will notify you by posting a prominent
              notice on our Website. Please review the policy
              periodically for any updates.
            </Paragraph>
            <SubTitle>Contact Us: </SubTitle>
            <Paragraph>
              If you have any questions, concerns, or requests regarding your
              personal data or this Privacy Policy, please contact us at&nbsp;
              <a href="https://diagnosym.onrender.com/contact">https://diagnosym.onrender.com/contact</a>. 
            </Paragraph>
            <SubTitle>Consent: </SubTitle>
            <Paragraph>
              By using the Application or Website, you
              acknowledge that you have read and understood this Privacy Policy
              and agree to the collection, use, and disclosure of your
              information as described herein.
            </Paragraph>
          </PolicyStatement>
        </StatementContainer>
      </ThemeProvider>
    </>
  );
}

export default Policy;
