import "./task_styles.css"
import { BiCheckCircle, BiCircle } from "react-icons/bi"

export const projects_db = [
  {
      "id": 1,
      "title": "Hola",
      "description": "Weo",
      "technology": "Python",
      "created_at": "2023-06-11T03:15:33.445107Z"
  },
  {
      "id": 2,
      "title": "Lesly",
      "description": "Lesly",
      "technology": "Lesly",
      "created_at": "2023-06-11T03:17:06.501577Z"
  },
  {
      "id": 6,
      "title": "f",
      "description": "f",
      "technology": "f",
      "created_at": "2023-06-15T20:20:30.599302Z"
  },
  {
      "id": 7,
      "title": "Proyecto XXXXXXXXX",
      "description": "Descripción del proyecto prueba",
      "technology": "Python y librería requests",
      "created_at": "2023-06-15T20:22:22.203634Z"
  },
  {
      "id": 8,
      "title": "HOP",
      "description": "holi",
      "technology": "ssjjsjs",
      "created_at": "2023-06-15T20:26:03.560676Z"
  },
  {
      "id": 9,
      "title": "Creo que funcionó",
      "description": "wiiiiiiiii",
      "technology": "wiwiwiwi",
      "created_at": "2023-06-15T20:26:24.347749Z"
  },
  {
      "id": 10,
      "title": "qwer",
      "description": "qwer",
      "technology": "qwer",
      "created_at": "2023-06-15T20:58:10.054139Z"
  },
  {
      "id": 11,
      "title": "HOLA",
      "description": "lkjhgfdsa",
      "technology": "pitón",
      "created_at": "2023-06-15T20:59:53.729011Z"
  },
  {
      "id": 12,
      "title": "smile",
      "description": "pasteles",
      "technology": "reposteria",
      "created_at": "2023-06-16T17:17:51.532254Z"
  }
];

export const Projects = () => {
  return<>
    {
    projects_db.map((project) => {
      return <div className="proyecto">
        <h2>
          {project.title}
        </h2>

        <p className="desc_p">
          {project.description}
        </p>
        <p className="tech_p">
          {project.technology}
        </p>
      </div>})}
    </>}


// export const Projects = () => {
//   return<>
//     {
//       fetch("https://first-api-test-project.onrender.com/api/projects")
//         .then(res => {
//           return res.json();
//         })
//         .then(data => data.map((data) => {
//             return <div className="proyecto">
//               <h2>
//                 {toString(data.title)}
//               </h2>
      
//               <p className="desc_p">
//                 {toString(data.description)}
//               </p>
//               <p className="tech_p">
//                 {toString(data.technology)}
//               </p>
//             </div>})
//         )
    
//       }
//     </>}

