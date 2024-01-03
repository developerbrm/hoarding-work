import GetImageFirebaseComponent from './GetImageFirebaseComponent'

const OurWorkItem = (obj, index) => {
  const { id, data } = obj

  const availabilityText = data.availability
  const isAvailable = availabilityText.toLowerCase().includes('available')
  const fileName = data.images.at(0)
  const imagesPath = '/public/sites-images'

  return (
    <div key={id}>
      <div className="card w-full bg-white text-slate-900 shadow-xl">
        <GetImageFirebaseComponent data={{ fileName, imagesPath }} />
        <div className="card-body p-4">
          <div className="flex gap-1">
            <div
              className={`badge text-white text-xs ${
                isAvailable ? 'bg-emerald-700' : 'bg-rose-700'
              }`}
            >
              {availabilityText}
            </div>
          </div>
          <div className="space-y-1 text-xs lg:text-sm">
            <div className="flex gap-1">
              <div className="font-bold">Size:</div>
              <div className="font-normal">{data.size}</div>
            </div>
            <div className="flex gap-1">
              <div className="font-bold">Illumination:</div>
              <div className="font-normal">{data.illumination}</div>
            </div>
            <div className="flex gap-1">
              <div className="font-bold">Media:</div>
              <div className="font-normal">{data.media}</div>
            </div>
            <div className="flex gap-1">
              <div className="font-bold">Location:</div>
              <address className="link line-clamp-1">{data.address}</address>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurWorkItem
