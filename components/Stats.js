import Link from 'next/link'
import React from 'react'

const Stats = () => {
  return (
    <div className="grid justify-center py-10">
      <div className="">
        <div className="stats p-2 shadow ">
          <div className="stat place-items-center">
            <div className="stat-title text-slate-400">Total Hoardings</div>
            <div className="stat-value text-slate-900">200+</div>
            {/* <div className="stat-desc text-slate-900">35 new in last month</div> */}
          </div>
          <div className="stat place-items-center">
            <div className="stat-title text-slate-400">Daily Contacts</div>
            <div className="stat-value text-slate-900">1L+</div>
            {/* <div className="stat-desc text-slate-900">35 new in last month</div> */}
          </div>
          <div className="stat place-items-center">
            <div className="stat-title text-slate-400">
              Customer satisfaction
            </div>
            <div className="stat-value text-slate-900">99%</div>
            {/* <div className="stat-desc text-slate-900">35 new in last month</div> */}
          </div>
          <div className="stat place-items-center">
            <div className="stat-title text-slate-400">Years of experience</div>
            <div className="stat-value text-slate-900">5+</div>
            {/* <div className="stat-desc text-slate-900">35 new in last month</div> */}
          </div>
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
