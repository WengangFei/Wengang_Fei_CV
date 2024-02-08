export default function Body() {
  return (
    <>
        <hr className="h-1 mx-auto bg-blue-300 rounded mt-3 " />
        <div className="font-mono grid grid-cols-2 gap-4 m-4">
            <div className="mr-6">
                <ul className="font-bold mt-2">Education:</ul>
                <li className="text-xs italic ml-5">BS in Computer Science</li>
                <li className="text-xs italic ml-5">Boston University</li>
                <li className="text-xs italic ml-5">09/2020 -- 05/2024</li>
                <li className="text-xs italic ml-5">GPA: 3.5</li>
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
                    <p className="text-xs italic ml-5">
                        VS Code, Git, NetBeans, Jbuilder, Vite...
                    </p>
                </div>
                <div>
                    <p className="font-bold mt-2">Languages:</p>
                    <p className="text-xs italic ml-5">
                        JavaScript, Python, HTML, CSS, C++, PHP, TypeScript.
                    </p>
                </div>

                <div>
                    <p className="font-bold mt-2">Soft Skills:</p>
                    <p className="text-xs italic ml-5">
                        Communication, Teamwork, Flexibility, Confident, 
                        Problem Solving, Self-management.
                    </p>
                </div>

                <div>
                    <p className="font-bold mt-2 mb-2">Interests:</p>
                    <div className="flex ml-5">
                        <img src='./ai.png' alt='ai' className="size-5 mb-2"/>
                        <p className="text-xs italic ml-3 mt-1">
                            Artificial Intelligence
                        </p>
                    </div>
                    <div className="flex ml-5">
                        <img src='./robotic.png' alt='robotic' className="size-5 rounded-lg"/>
                        <p className="text-xs italic ml-3 mt-1 ">
                            Robotics
                        </p>
                    </div>
                    <div className="flex mt-2 ml-5">
                        <img src='./travel.jpeg' alt='robotic' className="size-5 rounded-lg "/>
                        <p className="text-xs italic ml-3 mt-1 ">
                            Traveling
                        </p>
                    </div>
                    <div className="flex mt-2 ml-5">
                        <img src='./game.jpeg' alt='robotic' className="size-5 rounded-lg "/>
                        <p className="text-xs italic ml-3 mt-1 ">
                            Video Games
                        </p>
                    </div>
                    
                </div>

            </div>
            <div>
                 <div>
                    <p className="font-bold mt-2">Personal Projects:</p>
                    <p className="text-xs font-bold text-sky-500 ml-5">
                        Snowboard Group Website
                    </p>
                    <p className="text-xs italic ml-5 indent-5">
                        Designed FaceBook like social media website for all my friends
                        to go snowboarding and share their experience together. I started 
                        it from scratch without using any plug-ins or frameworks. Front End
                        using JS,HTML,CSS and PHP, Back end using XAMMP and SQL. It was a 
                        fun project to put my hands on to get to learn and have deeply 
                        understand front end work flow, also by using XAMMP as the back 
                        side server to build the data base with SQL and deploy it to production 
                        on Hostinger. Now days, almost all websites are created  with many 
                        different libraries or frame works like React, Angular, etc. I have 
                        created some class related projects, personal projects  with these libraries and frameworks,they 
                        are all saved in my Github account(Please take a look if you are 
                        interested), these projects are mainly using JS and React, some 
                        projects from class were wrote by C++ , Python and JAVA. I'm a 
                        pragmatic person and enjoy to work on building websites and solving
                        the problems.
                    </p>

                    <p className="text-xs font-bold text-sky-500 ml-5 mt-5">
                        BU Flea Market
                    </p>
                    <p className="text-xs italic ml-5 indent-5">
                        This is a group work and pioneered the development of 
                        the BU flea market that helped students exchanging or
                        buying used stuff in campus. I designed and implemented 
                        front end by using Python Flask , Bootstrap.
                    </p>
                </div>
                
            </div>
        </div>
    </>
  )
}
