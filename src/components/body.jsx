export default function Body() {
  return (
    <>
        <hr className="h-1 mx-auto bg-blue-300 rounded mt-3 " />
        <div className="font-mono grid grid-cols-2 gap-4 m-4">
            <div className="mr-6">
                <ul className="text-2xl">Education:</ul>
                <li className="text-xs italic text-sky-500 ml-5">BS in Computer Science</li>
                <li className="text-xs italic text-sky-500 ml-5">Boston University</li>
                <li className="text-xs italic text-sky-500 ml-5">09/2020 -- 05/2024</li>
                <li className="text-xs italic text-sky-500 ml-5">GPA: 3.5</li>
                <p className="font-bold mt-2">Main Coursework:</p>
                <div className="grid grid-cols-2 gap-2">
                    <p className="bg-sky-500 rounded text-white text-xs pl-2">
                        Software Dev.
                    </p> 
                    <p className="bg-sky-500 rounded text-white text-xs pl-2">
                        Web App Dev.
                    </p>
                    <p className="bg-sky-500 rounded text-white text-xs pl-2">
                        Programming with C++
                    </p>
                    <p className="bg-sky-500 rounded text-white text-xs pl-2">
                        Comp Networks
                    </p>
                   
                    <p className="bg-sky-500 rounded text-white text-xs pl-2">
                        Comp Ope System
                    </p> 
                    <p className="bg-sky-500 rounded text-white text-xs pl-2">
                        Data str w/C++
                    </p>
                    
                    <p className="bg-sky-500 rounded text-white text-xs pl-2">
                        JS & HTML & CSS
                    </p>
                    <p className="bg-sky-500 rounded text-white text-xs pl-2">
                        Python str Info
                    </p>
                </div>
                <div>
                <p className="font-bold mt-2">Technical Skills:</p>
                <p className="text-xs italic text-sky-500 ml-5">
                    VS Code, Git, NetBeans, Jbuilder, Vite...
                </p>
                </div>

            </div>
            <div>
                body right
            </div>
        </div>
    </>
  )
}
