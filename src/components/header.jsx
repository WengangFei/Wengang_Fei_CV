

export default function header() {
  return (
    <div className="font-mono grid grid-cols-6 gap-4">
        <div className='col-span-4 '>
            <p className="text-3xl m-2">Wengang Fei</p>
            <p className="text-md m-2">Computer Science</p>
            <p className="text-xs m-2">Dedicated computer science student with a strong command 
                of JavaScript and proficiency in Visual Studio Code, seeking 
                a role as an entry-level software developer role. Eager to bring 
                my ability to develop, test, and maintain software to a dynamic 
                team that values innovation.
            </p>
        </div>
        <div className="col-span-2 ml-10 mt-6 pl-5">
            <i className="fa-solid fa-envelope"></i><span className="text-xs m-2">wenfei@bu.edu</span><br/>
            <i className="fa-solid fa-mobile"></i><span className="text-xs m-2">617-369-2866</span><br />
            <i className="fa-solid fa-location-crosshairs"></i><span className="text-xs m-2">Boston,MASS</span><br />
            <i className="fa-brands fa-linkedin"></i><a className="text-xs m-2 italic text-sky-500" href="https://www.linkedin.com/in/wengang-fei-9948701b4/">LinkedIn</a><br />
            <i className="fa-brands fa-github-alt"></i><a className="text-xs m-2 italic text-sky-500" href='https://wengangfei.github.io/CV/'>CV Website</a><br />
            <i className="fa-brands fa-github"></i><a className="text-xs m-2 italic text-sky-500" href='https://github.com/WengangFei'>GitHub</a>
        </div>
        
    </div>
  )
}
