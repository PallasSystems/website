import { ServiceDetailProperties } from "../Services.types";

export const ServiceFailFastData: ServiceDetailProperties = {
    title: "Fail Fast",
    link: "/services/agile",
    img: { id:"Container.Description.Row.Col.Img", height:"9rem", width:"9rem" },
    description: ["Tackle the greatest unknowns first to ensure you aren&apos;t trying to achieve the impossible"]
};

export const ServiceKanbanData: ServiceDetailProperties = {
    title: "Kanban",
    link: "/services/agile",
    img: { id:"Container.Description.Row.Col.Img", height:"9rem", width:"9rem" },
    description: ["Pallas Systems will place your vision at the heart of delivery, using Agile Scrum to iterate towards your needs"]
};

export const ServiceMVPData: ServiceDetailProperties = {
    title: "Minimum Viable Product",
    link: "/services/agile",
    img: { id:"Container.Description.Row.Col.Img", height:"9rem", width:"9rem" },
    description: ["Plan to receive a working product as soon as possible and then iterate towards your solution"]
};

export const ServiceScrumData: ServiceDetailProperties = {
    title: "Scrum",
    link: "/services/agile",
    img: { id:"Container.Description.Row.Col.Img", height:"9rem", width:"9rem" },
    description: ["Scrum allows us to regularly track the progress of delivery and helps to maintain focus on your vision"]
};

export const ServiceAgileData: ServiceDetailProperties = {
    title: "What can we do to help?",
    link: "/services/agile",
    img: { id:"Container.Description.Row.Col.Img", src: './images/services/agile.svg' },
    description: [
        "Pallas Systems combines DevSecOps with Agile Scrum to shorten the feedback loop. We will use Continuous Integration (CI) & Continuous Deployment (CD) pipelines to automate build and deployment so we are able to quickly implement your ideas. This allows us to better elaborate your problem space and ensure we are focussed on delivering your vision.",
        "Pallas Systems has delivered self hosted platform migrations, cloud transformations.",
        "At Pallas Systems we believe your mission should be the priority and will look to deliver to your needs as soon as possible to maximise the impact of our work."
    ],
    thumbnail: { 
        title: "Agile",
        link: "/services/agile",
        img: { id:"Container.Description.Row.Col.Img", src: "Agile", height:"9rem", width:"9rem" },
        description: ["Pallas Systems will place your vision at the heart of delivery, using Agile Scrum to iterate towards your needs"],
    },
    items: [ ServiceFailFastData, ServiceKanbanData, ServiceMVPData, ServiceScrumData ]
};