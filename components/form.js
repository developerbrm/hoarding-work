export default function Form (){
    return (
        <div>
        <form class='bg-slate-400 p-5 max-w-md'  >
            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Enter your name </span>
                </label>
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                <label className="label">
                    <span className="label-text-alt">Bottom Left label</span>
                </label>
            </div>
            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Enter your Email</span>
                </label>
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                <label className="label">
                    <span className="label-text-alt">Bottom Left label</span>
                </label>
            </div>
        </form>
        </div>
    )
}