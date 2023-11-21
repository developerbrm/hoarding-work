import React from 'react'
import { v4 as uuid } from 'uuid'

const timelineData = [
  {
    heading: 'Initial Contact',
    content: [
      'You contact us via phone, email, or chat.',
      'A member of our sales team receives your inquiry and responds promptly.',
      'We ask you about your needs and goals for your outdoor advertising campaign.',
    ],
  },
  {
    heading: 'Proposal Development',
    content: [
      'We develop a proposal that outlines our services and fees.',
      'The proposal is sent to you for review.',
      'We follow up with you to answer any questions and schedule a meeting to discuss the proposal in more detail.',
    ],
  },
  {
    heading: 'Campaign Planning',
    content: [
      'If you accept our proposal, we will begin planning your outdoor advertising campaign.',
      'This will involve working with you to identify your target audience, develop a creative concept, and select the right media placements.',
      'We will also develop a budget and timeline for the campaign.',
    ],
  },
  {
    heading: 'Campaign Execution',
    content: [
      `Once the campaign plan is finalized, we will execute the campaign.`,
      `This will involve producing the creative materials, placing the ads, and tracking the campaign's performance.`,
      `We will also provide regular reports to you on the campaign's progress.`,
    ],
  },
  {
    heading: 'Campaign Evaluation',
    content: [
      `After the campaign is complete, we will evaluate its effectiveness.`,
      `This will involve reviewing the campaign's reach, frequency, and impact.`,
      `We will also gather feedback from you to identify areas for improvement.`,
    ],
  },
  {
    heading: 'Ongoing Relationship',
    content: [
      `We will continue to work with you to develop future outdoor advertising campaigns.`,
      `We will also provide you with ongoing support and advice.`,
    ],
  },
]

const TimeLineItem = ({ data: { obj, index } }) => {
  const { heading, content } = obj

  return (
    <div className="rounded-lg bg-slate-100 p-3">
      <div className="mb-1 text-xs font-bold text-amber-600">{`${heading}`}</div>

      <ul className="list-outside list-disc">
        <div className="space-y-1">
          {content.map((item) => (
            <li className="ml-2 text-xs">{item}</li>
          ))}
        </div>
      </ul>
    </div>
  )
}

const TimelineSection = () => {
  return (
    <div className="mx-auto max-w-lg ">
      <div className="my-5 px-4">
        <div className="my-5 text-center text-3xl font-bold text-amber-500">
          Your journey with us
        </div>

        <ul className="timeline timeline-vertical">
          {timelineData.map((obj, index) => {
            const isEven = index % 2 === 0
            const isOdd = index % 2 !== 0

            return (
              <li key={uuid()}>
                <hr className="bg-lime-400" />

                {isEven && (
                  <div className="timeline-start">
                    <TimeLineItem data={{ obj, index }} />
                  </div>
                )}

                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5 text-lime-600"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>

                {isOdd && (
                  <div className="timeline-end">
                    <TimeLineItem data={{ obj, index }} />
                  </div>
                )}

                <hr className="bg-lime-400" />
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default TimelineSection
