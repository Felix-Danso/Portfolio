import {IconType} from 'react-icons'
export interface IService{
    title:string
    about:string
    Icon:IconType
  }

  export interface ISkill {
    name:string
    level:string
    Icon:IconType
  }

  export interface IProject {
    name:string,
    description:string,
    image_path:string,
    // deplayed_url:string,
    github_url:string,
    category:category[],
    key_techs:string[],
  }

  export type category = "react" | "node" | "express" | "django" | "mango";