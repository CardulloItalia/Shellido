export default function MainContent() {
    return (
        <div className="flex items-center justify-between p-10">
            <div className="w-full flex flex-col md:flex-row gap-6 md:gap-8">
                <div className="relative w-full md:w-1/2 h-[625px]">
                    <img
                        src="https://images.unsplash.com/photo-1490167824271-6794d5aac850?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8"
                        className=" w-full h-full object-cover rounded-xl border-[2px] border-[#89C2D9]"
                        alt="Beach view"
                    />
                    <div className="m-5 px-7 py-3 bg-[#2A6F97] text-white right-0 bottom-0 absolute rounded-xl">
                        <p>Area Nord (Farfalle)</p>
                    </div>
                </div>
                <div className="w-full md:w-1/2 flex flex-col gap-6 h-[600px]">
                    <div className="h-1/2 relative">
                        <img
                            src="https://images.unsplash.com/photo-1516633630673-67bbad747022?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjV8fGJlYWNofGVufDB8MHwwfHx8Mg%3D%3D"
                            className=" w-full h-full object-cover rounded-xl border-[2px] border-[#89C2D9] "
                            alt="Beach scenery 1"
                        />
                        <div className="m-5 px-7 py-3 bg-[#2A6F97] text-white right-0 bottom-0 absolute rounded-xl">
                            <p>Area Est (Alghe)</p>
                        </div>
                    </div>
                    <div className="h-1/2 relative">
                        <img
                            src="https://images.unsplash.com/photo-1440778303588-435521a205bc?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTd8fGJlYWNofGVufDB8MHwwfHx8Mg%3D%3D"
                            className="w-full h-full object-cover rounded-xl border-[2px] border-[#89C2D9] "
                            alt="Beach scenery 2"
                        />
                        <div className="m-5 px-7 py-3 bg-[#2A6F97] text-white  right-0 bottom-0 absolute rounded-xl">
                            <p>Area Est (Alghe)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}