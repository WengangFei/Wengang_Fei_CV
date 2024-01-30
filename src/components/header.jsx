

export default function header() {
  return (
    <div className="font-sans grid grid-cols-6 grid-flow-col gap-4">
        <div className='col-span-4 '>
            <p className="text-4xl">Wengang Fei</p>
            <p className="text-xl">Computer Science</p>
            <p>Dedicated computer science student with a strong command 
                of JavaScript and proficiency in Visual Studio Code, seeking 
                a role as an entry-level software developer role. Eager to bring 
                my ability to develop, test, and maintain software to a dynamic 
                team that values innovation.
            </p>
        </div>
        <div className="col-span-2 ml-10 mt-5 pl-10">
            <i className="fa-solid fa-envelope"></i><span className="m-2">wenfei@bu.edu</span><br/>
            <i className="fa-solid fa-mobile"></i><span className="m-2">617-369-2866</span><br />
            <i className="fa-solid fa-location-crosshairs"></i><span className="m-2">Boston,MASS</span><br />
            <i className="fa-brands fa-linkedin"></i><a className="m-2" href="https://www.linkedin.com/in/wengang-fei-9948701b4/">LinkedIn</a><br />
            <i className="fa-brands fa-github-alt"></i><a className="m-2" href='https://wengangfei.github.io/CV/'>CV Website</a><br />
            <i className="fa-brands fa-github"></i><a className="m-2" href='https://github.com/WengangFei'>GitHub</a>
           
        </div>
    </div>
  )
}
