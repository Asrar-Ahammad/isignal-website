import React from 'react'
import SiteContent from '../../components/SiteContent/SiteContent'
import image from '../../assets/images/fot.svg'

function Fot() {
  return (
    <SiteContent
        heading="Field Operational Tests"
        desc="FOT iSignal: Field Operational Tests for RAN solutions by iSignal"
        content1="FOT, or Field Operational Tests, is a critical part of the development and deployment of new wireless technologies. iSignal uses FOT to test their RAN solutions in a real-world environment. This allows them to gather valuable insights into the performance, reliability, and usability of their solutions.
        iSignal's FOT program is designed to be as realistic as possible. They use real-world infrastructure, devices, and users to test their solutions. This helps to ensure that their solutions are ready for use in a variety of applications."
        content2="iSignal's FOT program has been very successful. They have been able to identify and address any potential problems or issues with their solutions before they were deployed on a wider scale. This has helped to ensure that their solutions are reliable and user-friendly.
        iSignal is committed to using FOT to ensure the quality of their products and services. They believe that FOT is a valuable tool that can help them to develop and deploy the best possible wireless solutions."
        img={image}
    />
  )
}

export default Fot