export default function Body() {
  return (
    <>
        <hr className="h-1 mx-auto bg-blue-300 rounded mt-3 " />
        <div className="font-sans grid grid-cols-2 gap-4 m-4">
            <div>
                <ul className="text-2xl">Education:</ul>
                <li>BS in Computer Science</li>
                <li>Boston University</li>
                <li>09/2020 -- 05/2024</li>
                <li>GPA: 3.5</li>
                <p className="font-bold mt-2">Coursework:</p>
                <div>
                    <span className="bg-sky-500 p-1 rounded text-white text-sm m-1">Software Development</span> 
                    <span className="bg-sky-500 p-1 rounded text-white text-sm m-1">Networking</span>
                    <span className="bg-sky-500 p-1 rounded text-white text-sm m-1">Programming with C++</span>
                    <span className="bg-sky-500 p-1 rounded text-white text-sm m-1">Operating System</span> Data Structure,
                    Web Application Development, etc.
                </div>

            </div>
            <div>
                body right
            </div>
        </div>
    </>
  )
}
