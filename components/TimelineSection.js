import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import { db } from '@/firebase/firebaseConfig'
import { addDoc, collection, getDocs } from 'firebase/firestore'

async function getAllTimelineDocuments() {
  const timeLineCollectionRef = collection(db, 'timeline-section')

  try {
    const querySnapshot = await getDocs(timeLineCollectionRef)
    const timelineDocuments = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      data: doc.data(),
    }))
    return timelineDocuments
  } catch (error) {
    console.error('Error fetching timeline documents:', error)
  }
}

const TimeLineItem = ({ data: { obj, index } }) => {
  const { data, id } = obj
  const { heading, content } = data

  return (
    <div key={id} className="rounded-lg bg-slate-100 p-3">
      <div className="mb-1 text-xs font-bold text-amber-600 md:text-sm">{`${heading}`}</div>

      <ul className="list-outside list-disc">
        <div className="space-y-1">
          {content.map((item) => (
            <li className="ml-2 text-xs md:text-sm " key={uuidv4()}>
              {item}
            </li>
          ))}
        </div>
      </ul>
    </div>
  )
}

const TimelineSection = async () => {
  const timeLineCollectionRef = collection(db, 'timeline-section')

  const timelineData = await getAllTimelineDocuments().catch((error) => {
    console.error('Error:', error)
  })

  return (
    <div className="mx-auto max-w-2xl">
      <div className="my-5 px-4">
        <div className="my-5 text-center text-3xl font-bold text-amber-500">
          What happens when you contact us
        </div>

        <ul className="timeline timeline-vertical">
          {timelineData.map((obj, index) => {
            const isEven = index % 2 === 0
            const isOdd = index % 2 !== 0

            return (
              <li key={uuidv4()}>
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
