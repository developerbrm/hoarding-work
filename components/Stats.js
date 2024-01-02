import Link from 'next/link'
import React from 'react'
import { db } from '@/firebase/firebaseConfig'
import { collection, getDocs } from 'firebase/firestore'

async function getStatusSectionData() {
  const collectionRef = collection(db, 'status-section')

  let data = []

  try {
    const querySnapshot = await getDocs(collectionRef)
    data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      data: doc.data(),
    }))
  } catch (error) {
    console.error('Error fetching timeline documents:', error)
  }

  return data
}

const StatusItem = (obj) => {
  const { data, id } = obj
  const { heading, value } = data

  return (
    <div key={id} className="stat place-items-center">
      <div className="stat-title text-slate-400">{heading}</div>
      <div className="stat-value text-slate-900">{value}</div>
      {/* <div className="stat-desc text-slate-900">35 new in last month</div> */}
    </div>
  )
}

const Stats = async () => {
  const data = await getStatusSectionData().catch((error) => {
    console.error('Error:', error)
  })

  return (
    <div className="grid justify-center py-10">
      <div className="">
        <div className="stats stats-vertical p-2 shadow lg:stats-horizontal">
          {data.map(StatusItem)}
        </div>
      </div>
      {/* <Link
        className="btn w-full bg-white text-base font-bold text-slate-900 lg:text-xl justify-self-start"
        href={`#contact-us`}
      >
        Lets Connect!
      </Link> */}
    </div>
  )
}

export default Stats
