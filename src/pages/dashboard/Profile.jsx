

export default function Profile() {
    return (
        <div className="flex justify-center items-center mt-20">
            <div className="w-full max-w-sm bg-purple-50  rounded-lg  ">

                <div className="flex flex-col items-center p-10">

                    <h5 className="mb-1 text-xl font-medium  ">
                        Abu sani Faysal
                    </h5>
                    <span className="text-lg ">
                        01634319696
                    </span>
                    <span className="text-sm ">
                        abu.faysal@gmail.com
                    </span>
                    <p className="text-sm rounded-lg px-3 py-1 font-bold">
                        USER
                    </p>
                    <div className="bg-white px-7 mt-4  py-3 text-center mt-5 ">

                        <p className="">    Account Balance</p>
                        <h1 className="text-3xl  ">
                            12000                    </h1>

                    </div>

                </div>
            </div>

        </div>
    )
}
