import React from "react";
import PortfolioCard from "../../components/PortfolioCard";
import { IComment } from "../../database/portfolioSchema";
import getProjectsArray from "../../helpers/getProjectsArray";
import getComments from "../../helpers/getComments";
import PortfolioCommentSection from "@/components/PortfolioCommentSection";

export const metadata = {
  title: {
    default: "My Portfolio",
  },
};

export default async function Portfolio() {
  const projects = await getProjectsArray(); //returns array of projects
  const api_url: string = process.env.API_URL!; //defined in server component and passed to client component

  //comments
  const comments: IComment[] | null = await getComments(api_url);
  const commentsNotNull: IComment[] = comments ?? []; //ensures the comment list is not null
  
  return (
    <main className="portfolioCommentContainer">
      <div className="portfolio-content">
        <h1 className="page-title">Portfolio</h1>
        {/* Only renders the project content if project data retrieved successfully*/}
        {projects && projects.length > 0 ? (
          <div className="generalContent">
            <div>
              {projects.map((project) => (
                <PortfolioCard
                  key={project.slug}
                  date={project.date}
                  projectName={project.projectName}
                  description={project.description}
                  slug={project.slug}
                  image={project.image}
                  imagealt={project.imagealt}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="generalContent">
            <p className="contentNotLoaded">
              There was an issue loading portfolio content.
            </p>
          </div>
        )}
      </div>
      {/* Only display a comment section if there is a valid portfolio, even if the comment section is empty, as a user can still submit a comment*/}
      {projects ? (
        <PortfolioCommentSection
          api_url={api_url}
          comments={commentsNotNull}
        />
      ) : (
        <div className="generalContent">
          <p className="contentNotLoaded">
            There was an issue loading portfolio content.
          </p>
        </div>
      )}
    </main>
  );
}
